function Dashboard (selector, baseUrl) {
    // Static set of views for now
    var views = ['map', 'time', 'mds', 'table'];

    // Static set of filters for now
    var filters = ['subset', 'step', 'ramp', 'distribution', 'scale', 'agg'];

    var selectHeight = 25;

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
        });
        leftView.css ({
            'width': '100%',
            'height': full_height - selectHeight
        });

        right.css ({
            'position': 'absolute',
            'left': $ (selector).position ().left + panel_width,
            'top': $ (selector).position ().top,
            'width': panel_width,
        });

        rightView.css ({
            'width': '100%',
            'height': full_height - selectHeight
        });
    };

    // Add the panels to the document
    var views = $ ('<div></div>').addClass ('panels').append (left).append (right);
    $ (selector).append (views);

    var templateLoader = $.ajax({
        url: baseUrl + 'src/templates/select-template.hb'
    });

    templateLoader.fail(function (data) {console.log(data);});

    templateLoader.done(function (template) {
        // handlebars for left right select dropdowns
        var selTemp = Handlebars.compile(template);
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
        var controller = new Controller();
        // dash javascript panel object
        var addPanel = function(panel) {
            // add to selection
            $(".view-select").append(optionTemp(panel.name));
            stringToPanel[panel.name] = panel;
            controller.addView(panel);
        }
        
        // panels aka views
        var panels = [new MapPanel(), new TimePanel(), new MDSPanel()];
        $.each(panels,function(i,pan) { addPanel(pan); } );
        
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
        
        // initialize with 1st panel on left (& 2nd on right)
        $('.left-select').val(panels[0].name).change();
        // left panel select will cause right to bump to 2nd
        

        // If the window is resized, we may want to resize the dashboard
        $ (window).resize (function () {
            set_panels ();
            panels[leftIndex].resize('#left');
            panels[rightIndex].resize('#right');
        });

        var newData = function(data) {
            service_layer.update();
            controller.newData(data);
        }
        // Start the service layer, callback sends data to controller
        var service_layer = new ServiceLayer(baseUrl + 'temp/2011.json',newData);
    });
};

var dash = {
    ready: function (func) {
        $ (document).ready (func);
    },
    create: function (selector, baseUrl) {
        selector = selector || 'body';
        baseUrl = baseUrl || '';
        
        return new Dashboard (selector, baseUrl);
    }
};
