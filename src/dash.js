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
            'background-color': 'black'
        });

        right.css ({
            'position': 'absolute',
            'left': $ (selector).position ().left + panel_width,
            'top': $ (selector).position ().top,
            'width': panel_width,
            'height': full_height,
            'background-color': 'black'
        });
    };
    set_panels ();
    
    // Add the panels to the document
    $ (selector).append (left).append (right);

    // Temp: Add the map view pane to the left panel
    var map_panel = new MapPanel ();
    //left.append (map_panel.html ());
    map_panel.create (left);
    map_panel.resize (left);

    // If the window is resized, we may want to resize the dashboard
    $ (window).resize (function () {
        set_panels ();
        map_panel.resize (left);
    });

    var data = new DataAPI ('temp/2011.json', function () {
        map_panel.change (data);
    });
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
