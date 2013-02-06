// refactor - break out dropdown & such
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


    // Add the panels to the document
    var panels = $ ('<div></div>').addClass ('panels').append (left).append (right);
    $ (selector).append (panels);

    $.each(views, function (i, view) {
        var panel = $('<div>').attr('id', view).addClass('view');
        panels.append(panel);
    });

    // should we just do handlebars stuff synchronously?
    var templateLoader = $.ajax({
        url: baseUrl + 'src/templates/select-template.hb'
    });

    templateLoader.fail(function (data) {console.log(data);});

    templateLoader.done(function (template) {

        // maybe move this to a separate dash-select.js file ?
        // handlebars for left right select dropdowns
        var selTemp = Handlebars.compile(template);
        var leftCtxt = {selClass:"left-select"};
        var leftSel = selTemp(leftCtxt);
        left.append(leftSel);
        right.append(selTemp({selClass:"right-select"}));

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

        // should there be a list of strings that somehow get mapped to panels?
        var panels = [new MapPanel($('#map')), new TimePanel($('#time')), new MDSPanel($('#mds'))];
        // hmmm - controller centric way of doing things - havent written this off yet
        //var controllers = [new MapController(), new TimeController(), new MDSController()];
        var view = function(i) { return controllers[i].view; }
        $.each(panels,function(i,pan) { addPanel(pan); } );
        //$.each(controllers,function(i,c) { addController(c); } );
        
        // select is jquery element, container_sel is jquery selector for parent
        var selectListener = function(select) {
            select.change(function() {
                $('.view').hide();
                var leftPanelName = selectedText($('.left-select'));
                var rightPanelName = selectedText($('.right-select'));
                showPanels(leftPanelName,rightPanelName);
                bumpOtherDropdownIfSame(select);
            });
        }

        var showPanels = function(leftPanelName, rightPanelName) {
                var leftPanel = stringToPanel[leftPanelName];
                var rightPanel = stringToPanel[rightPanelName];
                $.each([leftPanel, rightPanel], function (i, panel) {
                    if (!panel) throw "Error: Panel "+panelName+" not found";
                    if (!panel.created) panel.create();
                    else panel.show();
                });
                $('.view').removeClass('left-panel').removeClass('right-panel');
                leftPanel.addClass('left-panel');
                rightPanel.addClass('right-panel');
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
        

        // If the window is resized, we may want to resize the dashboard
        $ (window).resize (function () {
            panels[leftIndex].resize();
            panels[rightIndex].resize();
        });

        var url = function(path) { return baseUrl + path; }

        ServiceLayer.loadUrl(url('temp/flu_country.json'));

        // Start the filter view
        var filterView = new FilterView();
        filterView.render().done(function (html) {
            $(selector).prepend(html);
            filterView.onChange(function (name, value) {
                // controller should do something with this
                console.log(name + ' changed to ' + value); 
            });

            // add selection listeners to left right select dropdowns
            selectListener($('.left-select'));
            selectListener($('.right-select'));

            // initialize with 1st panel on left (& 2nd on right)
            $('.left-select').val(panels[0].name).change();
            // left panel select will cause right to bump to 2nd
        });
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
