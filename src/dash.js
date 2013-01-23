function Dashboard (selector) {
    // Static set of views for now
    var views = ['map', 'time', 'mds', 'table'];

    // Static set of filters for now
    var filters = ['subset', 'step', 'ramp', 'distribution', 'scale', 'agg'];

    // Format the two panels
    var left = $ ('<div></div>').attr ('id', 'left');
    var right = $ ('<div></div>').attr ('id', 'right');

    var set_panels = function () {
        var full_width = $ (selector).width ();
        var full_height = $ (selector).height ();
        var filter_width = 200;
        var panel_width = (full_width - filter_width) / 2
        left.css ({
            'position': 'absolute',
            'left': $ (selector).position ().left,
            'top': $ (selector).position ().top,
            'width': panel_width,
            'height': full_height,
            'background-color': 'red'
        });

        right.css ({
            'position': 'absolute',
            'left': $ (selector).position ().left + panel_width,
            'top': $ (selector).position ().top,
            'width': panel_width,
            'height': full_height,
            'background-color': 'blue'
        });
    };
    set_panels ();


    // If the window is resized, we may want to resize the dashboard
    $ (window).resize (function () {
        set_panels ();
    });
    
    // Add the panels to the document
    $ (selector).append (left).append (right);
};

var dash = {
    ready: function (func) {
        $ (document).ready (func);
    },
    create: function (selector) {
        if (!selector)
            selector = 'body';
        return new Dashboard (selector);
    }
};
