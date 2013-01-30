function Dashboard (selector) {
    // Static set of views for now
    var views = ['map', 'time', 'mds', 'table'];

    // Static set of filters for now
    var filters = ['subset', 'step', 'ramp', 'distribution', 'scale', 'agg'];

    // Format the two panels
    var left = $ ('<div></div>').attr ('id', 'left');
    var right = $ ('<div></div>').attr ('id', 'right');

    // Set the CSS for the panels, call everytime the window resizes
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
    map_panel.create ('#left');
    //map_panel.resize (left);

    // Temp: Add the time panel to the right
    var time_panel = new TimePanel ();
    time_panel.create ('#right');
    //time_panel.resize (right);

    // Dummy MDS panel
    var mds_panel = new MDSPanel ();

    // If the window is resized, we may want to resize the dashboard
    $ (window).resize (function () {
        set_panels ();
        map_panel.resize ('#left');
        time_panel.resize ('#right');
    });

    // Start the data API
    var data = new DataAPI ('temp/2011.json', function (features) {
        map_panel.change (features);
        time_panel.change (features);
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
