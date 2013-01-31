function TimePanel () {
    var svg;
    var h_group, v_group, data_group;

    var xmap, ymap;

    var WIDTH, HEIGHT;

    this.name = 'Time Series';
    this.created = false;
    
    // parent_sel is jquery parent/container selector to append to
    this.show = function(parent_sel) {
        svg.style('display','block');
        // get jquery elementy from d3 element & append
        $(parent_sel).append($(svg.node()));
    };

    // parent is a string css selector (not a jquery element)
    this.create = function (parent) {
        var $parent = $ (parent);
        svg = d3.select (parent).append ('svg').attr ({
            //'viewBox': '0 0 1 1',
            //'preserveAspectRatio': 'none'
        }).style ({
            'width': $parent.width (),
            'height': $parent.height (),
        });

        WIDTH = $parent.width ();
        HEIGHT = $parent.height ();

        xmap = d3.scale.linear ().domain ([0, 1]).range ([0, WIDTH]);

        var matte = svg.append ('rect')
            .attr ('x', 0)
            .attr ('y', 0)
            .attr ('width', WIDTH)
            .attr ('height', HEIGHT)
            .style ('fill', '#ffffff');

        h_group = svg.append ('g');
        v_group = svg.append ('g');
        data_group = svg.append ('g');
        
        this.created = true;
    };
    
    this.resize = function (parent) {
        var $parent = $ (parent);
        svg.style ({
            'width': $parent.width (),
            'height': $parent.height (),
        });        
    };

    var h_lines = [];
    var v_lines = [];
    var properties = [];
    var prop_map = {};
    var layer = null;

    var draw_horizontal_lines = function () {
        h_group.selectAll ('line').data (h_lines).enter ().append ('line')
            .attr ('x1', 0)
            .attr ('x2', WIDTH)
            .attr ('y1', ymap)
            .attr ('y2', ymap)
            .attr ('stroke', '#cccccc');        
    };

    var draw_vertical_lines = function () {
        var map_line = function (line) {
            return time_map (prop_map[line]);
        };
        v_group.selectAll ('line').data (v_lines).enter ().append ('line')
            .attr ('x1', map_line)
            .attr ('x2', map_line)
            .attr ('y1', 0)
            .attr ('y2', HEIGHT)
            .attr ('stroke', '#cccccc')
            .attr ('class', function (d) { return prop_map[d]})
            .on ('mouseover', function (d) {
                //console.log (d);
            });
    };

    var draw_time_series = function () {
        var get_series = function (d) {
            var points = [];
            $.each (properties, function (i, prop) {
                points.push (time_map (i) + ' ' + ymap (d.attr (prop)));
            });
            return points;
        };

        var get_path = function (d) {
            var points = get_series (d);
            return 'M ' + points.join ('L');
        };

        data_group.selectAll ('path').data (layer.features ().items ()).enter ().append ('path')
            .attr ('d', get_path)
            .style ('fill', 'none')
            .style ('stroke', function (d) { return d.style ('fill').rgb () })
            .style ('stroke-width', 1.5);
    };


    this.change = function (data) {
        layer = data;

        properties = layer.properties (true);
        properties.sort ();

        var range = get_range (layer, .05);
        var current_line = 1000 * Math.floor (range.min / 1000);
        while (current_line <= range.max) {
            h_lines.push (current_line);
            current_line += 1000;
        }

        ymap = d3.scale.linear ().domain ([range.min, range.max]).range ([HEIGHT, 0]);
        time_map = d3.scale.linear ().domain ([0, properties.length - 1]).range ([0, WIDTH]);

        $.each (properties, function (i, prop) {
            v_lines.push (prop);
            prop_map[prop] = i;
        });
        
        draw_horizontal_lines ();
        draw_vertical_lines ();
        draw_time_series ();
        
        //data_group.selectAll ('path')
        //xmap = d3.scale.linear ().domain ([0, data.order ().length], [0, 1]);
        //console.log (data.order ());
    };
};

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
