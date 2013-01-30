function TimePanel () {
    var svg;
    var back_group, data_group;

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

        back_group = svg.append ('g');
        data_group = svg.append ('g');

        var matte = back_group.append ('rect')
            .attr ('x', 0)
            .attr ('y', 0)
            .attr ('width', 1)
            .attr ('height', 1)
            .style ('fill', '#ffffff');
        
        this.created = true;
    };
    
    this.resize = function (parent) {
        var $parent = $ (parent);
        svg.style ({
            'width': $parent.width (),
            'height': $parent.height (),
        });        
    };

    var draw_horizontal_lines = function () {
        
    };

    this.change = function (layer) {
        var range = get_range (layer, .05);
        var lines = [];
        var current_line = 1000 * Math.floor (range.min / 1000);
        while (current_line <= range.max) {
            lines.push (current_line);
            current_line += 1000;
        }

        ymap = d3.scale.linear ().domain ([range.min, range.max]).range ([HEIGHT, 0]);

        back_group.selectAll ('line').data (lines).enter ().append ('line')
            .attr ('x1', 0)
            .attr ('x2', WIDTH)
            .attr ('y1', ymap)
            .attr ('y2', ymap)
            .attr ('stroke', '#cccccc');
        
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
        console.log (field);
        var new_range = layer.features ().range (field);
        range = merge_range (range, new_range);
    });
    return {
        min: range.min - (range.max - range.min) * tol,
        max: range.max + (range.max - range.min) * tol,
    };
};
