"use strict";
function TimePanel () {

    // Panel superclass of TimePanel
    Panel.call(this);

    var svg;
    var h_group, v_group, data_group;

    var xmap, ymap;

    var popup = null;
    var that = this;

    // display
    this.name = 'Time Series';
    // internal/class
    this.label = 'time';
    this.created = false;

    var selection = null;
    var time_map;
    
    // this is jquery shenanigans for definning ones own show as well as calling
    // superclass show
    this.show = (function (parentShow) {
        return function () {
            svg.style('display','block');
            // get jquery elementy from d3 parentElement & append
            // .call(that) ensures panel this is that
            parentShow.call(that);
        };
    }) (this.show); // superclass Panel.show

    this.create = function () {
         svg = d3.select (this.parentElement[0]).append ('svg').attr ({
             //'viewBox': '0 0 1 1',
             //'preserveAspectRatio': 'none'
         });

         var width = this.width();
         var height = this.height();

         popup = new Popup ();

         xmap = d3.scale.linear ().domain ([0, 1]).range ([0, width]);

         var matte = svg.append ('rect')
             .attr ({
                 'x': 0,
                 'y': 0,
                 'width': width,
                 'height': height
             }).style ({
                 'fill': '#ffffff',
                 'stroke': '#cccccc',
                 'stroke-width': 1.0
             });

         h_group = svg.append ('g');
         v_group = svg.append ('g');
         data_group = svg.append ('g');

         this.show();
         this.created = true;
     };

     this.resize = function () {
     };

     var h_lines = [];
     var v_lines = [];
     // properties is the sorted list of keys(dates) for time series data in feature
     var properties = [];
     var prop_map = {};
     var layer = null;

     var draw_horizontal_lines = function (width) {
         h_group.selectAll ('line').data (h_lines).enter ().append ('line')
             .attr ('x1', 0)
             .attr ('x2', width)
             .attr ('y1', ymap)
             .attr ('y2', ymap)
             .attr ('stroke', '#cccccc');        
     };

     var draw_vertical_lines = function (height) {
         var map_line = function (line) {
             return time_map (prop_map[line]);
         };
         v_group.selectAll ('line').data (v_lines).enter ().append ('line')
             .attr ('x1', map_line)
             .attr ('x2', map_line)
             .attr ('y1', 0)
             .attr ('y2', height)
             .attr ('stroke', '#cccccc')
             .attr ('class', function (d) { return prop_map[d]})
             .on ('mouseover', function (d) {
                 if (selection.dragging ())
                     return;
                 popup.show (d, d3.event);
                 d3.select (this)
                     .style ({'stroke-width': 3,
                             'stroke': 'rgb(241,246,112)'
                             });
            }).on ('mouseout', function (d) {
                popup.hide ();
                d3.select (this)
                     .style ({'stroke-width': 1,
                              'stroke': '#cccccc'
                             });
            });
    };

    var feature_lookup = {};
    var draw_time_series = function () {
        var get_series = function (d) {
            var points = [];
            var last_valid = false;
            $.each (properties, function (i, prop) {
                var val = d.attr (prop);
                if (isNaN (val)) {
                    last_valid = false;
                }
                else {
                    if (last_valid)
                        points.push ('L');
                    else
                        points.push ('M');

                    last_valid = true;
                    points.push (time_map (i) + ' ' + ymap (val));
                }
            });
            return points;
        };

        var get_path = function (d) {
            var points = get_series (d);
            return points.join (' ');
        };

        data_group.selectAll ('path').data (layer.features ().items ()).enter ().append ('path')
            .attr ('d', get_path)
            .style ('fill', 'none')
            .style ('stroke', function (d) { return d.style ('fill').rgb () })
            .style ('stroke-width', 1.5)
            .each (function (d) {
                feature_lookup[d.id] = this;
            });
    };

    this.newData = function (data) {
        layer = data;

        properties = ServiceLayer.getSortedDateProperties(layer);

        var range = get_range (layer, .05);
        /*var current_line = 1000 * Math.floor (range.min / 1000);
        while (current_line <= range.max) {
            h_lines.push (current_line);
            current_line += 1000;
        }*/

        var width = this.width();
        var height = this.height();

        ymap = d3.scale.linear ().domain ([0, range.max]).range ([height, 0]);
        time_map = d3.scale.linear ().domain ([0, properties.length - 1]).range ([0, width]);

        h_lines = ymap.ticks (10);

        $.each (properties, function (i, prop) {
            v_lines.push (prop);
            prop_map[prop] = i;
        });
        
        draw_horizontal_lines (width);
        draw_vertical_lines (height);
        draw_time_series ();

        selection = new SVGSelection (svg);
        selection.enable ();
        
        //data_group.selectAll ('path')
        //xmap = d3.scale.linear ().domain ([0, data.order ().length], [0, 1]);
        //console.log (data.order ());
    };

    // Selection methods/interface - called by SelectionManager
    // stubs - todo - implements once webgl issue is worked out
    this.deselect = function(selectionLayer) {
        selectionLayer.each (function (i, f) {
            d3.select (feature_lookup[f.id]).style ('stroke', 'blue');
        });;
    }

    this.select = function(selectionLayer) {
        selectionLayer.each (function (i, f) {
            d3.select (feature_lookup[f.id]).style ('stroke', 'rgb(241,246,112)');
        });
    }

    this.draw = function() {
        // ???
    }


};

// eventually move to a util file
function merge_range (r1, r2) {
    if (!r1)
        return r2;
    if (!r2)
        return r1;
    return {
        min: Math.min (r1.min, r2.min),
        max: Math.max (r1.max, r2.max)
    };
};

function get_range (layer, tol) {
    var range = null;
    $.each (layer.properties (true), function (i, field) {
        var new_range = layer.features ().range (field);
        range = merge_range (range, new_range);
    });
    return {
        min: range.min - (range.max - range.min) * tol,
        max: range.max + (range.max - range.min) * tol,
    };
};

function parseUSDate (date) {
    var matches = date.match (/(\d+)\/(\d+)\/(\d+)/);
    return {
        month: parseInt (matches[1]),
        day: parseInt (matches[2]),
        year: parseInt (matches[3])
    };
};

function dateCompare (a, b) {
    var choose_smaller = function (x, y) {
        if (x < y)
            return -1;
        else if (y < x)
            return 1;
        else
            return 0;
    };
    a = parseUSDate (a);
    b = parseUSDate (b);
    if (a.year != b.year) {
        return choose_smaller (a.year, b.year);
    }
    else if (a.month != b.month) {
        return choose_smaller (a.month, b.month);
    }
    else if (a.day != b.day) {
        return choose_smaller (a.day, b.day);
    }
    else
        return 0;
};
