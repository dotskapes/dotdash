goog.provide('SVGSelection');

function SVGSelection (svg) {
    var start = new vect (0, 0);
    var end = new vect (0, 0);

    var min = new vect (0, 0);
    var max = new vect (0, 0);

    var dragging = false;

    var enabled = false;

    var callback = function () {};

    var r = svg.append ('rect')
	.style ('fill-opacity', 0)
	.style ('fill', 'green')
        .style ('display', 'none');

    var swap_bounds = function () {
	if (min.x > max.x) {
	    var tmp = min.x;
	    min.x = max.x;
	    max.x = tmp;
	}
	if (min.y > max.y) {
	    var tmp = min.y;
	    min.y = max.y;
	    max.y = tmp;
	}
    }
    
    var reset_rect = function () {
	min.x = start.x;
	min.y = start.y;
	max.x = end.x;
	max.y = end.y;

	swap_bounds ();
	r.attr ('x', min.x)
	    .attr ('y', min.y)
	    .attr ('width', max.x - min.x)
	    .attr ('height', max.y - min.y)
    };

    svg.on ('mousedown', function () {
        if (!enabled)
            return;
        r.style ('display', 'block');
	start.x = d3.mouse (this)[0];
	start.y = d3.mouse (this)[1];

	end.x = d3.mouse (this)[0];
	end.y = d3.mouse (this)[1];

	r.style ('fill-opacity', .4);
	reset_rect ();

	dragging = true;
    });
    
    svg.on ('mousemove', function () {
	if (!dragging)
	    return;
	end.x = d3.mouse (this)[0];
	end.y = d3.mouse (this)[1];
	reset_rect ();
    });

    svg.on ('mouseup', function () {
        if (!enabled)
            return;
        r.style ('display', 'none');
	if (dragging) {
	    r.style ('fill-opacity', 0);
            var bounds = new wiggle.util.Box (min, max);
	    dragging = false;
	    callback (bounds);
	}
    });

    this.enable = function () {
        enabled = true;
    };

    this.disable = function () {
        enabled = false;
    };

    this.release = function (release_func) {
        callback = release_func;
    };

    this.dragging = function () {
        return dragging;
    };
};
