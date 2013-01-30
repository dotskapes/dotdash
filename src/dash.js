function Dashboard (selector) {
    // Static set of views for now
    var views = ['map', 'time', 'mds', 'table'];

    // Static set of filters for now
    var filters = ['subset', 'step', 'ramp', 'distribution', 'scale', 'agg'];

    var selectHeight = 20;

    var initialized = false;

    // track view index of what is currently being displayed
    // this is to stop endless loop that happens if you rely on the dom
    // with events triggering in the middle of other events(for = index check)
    var leftIndex = 0;
    var rightIndex = 1;

    // Format the two panels
    var left = $ ('<div>').attr ('id', 'left');
    var right = $ ('<div>').attr ('id', 'right');
    // container for view panels
    var leftView = $('<div>').attr('id','left-view').addClass('view');
    var rightView = $('<div>').attr('id','right-view').addClass('view');

    // Set the CSS for the panels, call everytime the window resizes
    var set_panels = function () {
        var full_width = $ (selector).width ();
        var full_height = $ (selector).height ();
        var filter_width = 200;
        var panel_width = (full_width - filter_width) / 2;
        left.css ({
            'position': 'absolute',
            'left': $ (selector).position ().left,
            'top': $ (selector).position ().top,
            'width': panel_width,
            'height': full_height,
            'background-color': 'black'
        });
        leftView.css ({
            'position': 'absolute',
            'left': $ (selector).position ().left,
            'top': $ (selector).position ().top + selectHeight,
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

    // Add the panels to the document
    $ (selector).append (left).append (right);

    // handlebars for left right select dropdowns
    var sel = $("#select-template").html();
    var selTemp = Handlebars.compile(sel);
    var leftCtxt = {selClass:"left-select"};
    var leftSel = selTemp(leftCtxt);
    left.append(leftSel);
    right.append(selTemp({selClass:"right-select"}));

    left.append(leftView);
    right.append(rightView);

    set_panels ();

    // do this with handlebars?
    var optionTemp = function(name) {
        return "<option>"+name+"</option>";
    }

    var stringToPanel = {};
    // dash javascript panel object
    var addPanel = function(panel) {
        // add to selection
        $(".view-select").append(optionTemp(panel.name));
        stringToPanel[panel.name] = panel;
    }

    var map_panel = new MapPanel();
    addPanel(map_panel);
    //map_panel.resize (left);

    // Temp: Add the time panel to the right
    var time_panel = new TimePanel ();
    addPanel(time_panel);
    //time_panel.resize (right);

    // Dummy MDS panel
    var mds_panel = new MDSPanel ();
    addPanel(mds_panel);


    // select is jquery element, container_sel is jquery selector for parent
    var selectListener = function(select,containerSel) {
        select.change(function() {
            container = $(containerSel);
            // change this to hide() fn on panels object superclass
            container.children().css('display','none');
            var panelName = selectedText(select);
            var panel = stringToPanel[panelName];
            if (!panel) throw "Error: Panel "+panelName+" not found";
            if (!panel.created) panel.create(containerSel);
            else panel.show(containerSel);
            bumpOtherDropdownIfSame(select)
        });
    }

    // get currently selected option's text in select jquery element
    var selectedText = function(select) {
        return selectedOption(select).text();
    }

    var selectedIndex = function(select) {
        return selectedOption(select).prop('index');
    }

    var selectedOption = function(select) {
        var selOpt = select.children("option[selected='selected']");
        // funny! amidst select event sometimes the above works sometimes below
        if (selOpt.length == 0) selOpt = select.children('option:selected');
        return selOpt;
    }

    var selectSize = function() {
        return $('.left-select option').length;
    }

    // if user has selected same view that is already displayed in other panel
    // then change the other panel to a new view (dont/cant show same view in both)
    var bumpOtherDropdownIfSame = function(select) {
        var other = getOtherSelect(select);
        leftIndex = selectedIndex($('.left-select'));
        rightIndex = selectedIndex($('.right-select'));
        // if 2 selections are not the same then return - nothing to do
        if (leftIndex !== rightIndex) return;
        // else bump up other 1 past where select is
        var newIndex = selectedIndex(select) + 1 % selectSize();
        isLeftSelect(other) ? leftIndex = newIndex : rightIndex = newIndex;
        selectedOption(other).removeAttr('selected');
        var newText = other.children().eq(newIndex).text();
        other.val(newText).change();
    }

    var getOtherSelect = function(select) {
        return isLeftSelect(select) ? $('.right-select') : $('.left-select');
    }

    var isLeftSelect = function(select) {
        return select.attr('class').indexOf('left') !== -1;
    }

    // add selection listeners to left right select dropdowns
    selectListener($('.left-select'),'#left-view');
    selectListener($('.right-select'),'#right-view');

    // initialize with map on left (& time series on right)
    $('.left-select').val(map_panel.name).change();
    // left map select will cause right time series due to bumpOther


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
