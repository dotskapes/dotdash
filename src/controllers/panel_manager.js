goog.provide('PanelManager');

goog.require('selectionManager');
goog.require('MapPanel');
goog.require('TimePanel');
goog.require('MDSPanel');

'use strict';
// javascripts funny Singleton pattern
var PanelManager = function() {

    var labelToPanel = {};
    // for now hardwired
    var panels;

    var selectHeight = 25;

    // track view index of what is currently being displayed
    // this is to stop endless loop that happens if you rely on the dom
    // with events triggering in the middle of other events(for = index check)
    var leftIndex = 0;
    var rightIndex = 1;

    // Format the two panels
    var left = $ ('<div>').attr ('id', 'left');
    var right = $ ('<div>').attr ('id', 'right');
    var baseUrl;

    this.init = function(parentSelector,url) {
        baseUrl = url;
        initPanels();
        setupDivs(parentSelector);
        selectionDropdown();
        initSelectListeners();
        showFirstTwoPanels();
    };

    // init panels list and labelToPanel hash
    // for now hardwires the panels, eventually get dynamically
    var initPanels = function() {
        panels = [new MapPanel(),new TimePanel(),new MDSPanel()];
        $.each(panels,function(i,pan) {
            labelToPanel[pan.label] = pan;
            ServiceLayer.addDataCallback(function (data) {
                return pan.newData (data);
            });
            selectionManager.addView(pan);
        } );
    };

    var setupDivs = function(parentSelector) {
        // Add the panel div/containers to the document
        var panel_container = $('<div>').addClass('panels').append(left).append(right);
        $(parentSelector).append(panel_container);
        $.each(panels, function(i,panel) {
            var panel_div = panel.makeParentElement();
            panel_container.append(panel_div);
        });
    };

    var selectionDropdown = function() {
        var selTemp = Handlebars.templates.select_template;
        var leftCtxt = {selClass:"left-select"};
        var leftSel = selTemp(leftCtxt);
        left.append(leftSel);
        right.append(selTemp({selClass:"right-select"}));
        addPanelNamesToSelect();
    };

    var addPanelNamesToSelect = function() {
        $.each(panels,function(i,pan) {
            $('.view-select').append(optionTemp(pan.label,pan.name));
        });
    };

    var optionTemp = function(label,name) {
        var tmp = Handlebars.templates.select_option_template;
        return tmp({label: label,name: name});
    };

    this.redraw = function() {
        // this should probably only draw the panels currently showing
        // and on showing a new panel would need to do a draw
        $.each(panels, function(i,panel) {
            // redraws all panels (without selection/highlight)
            panel.draw();
            // puts highlight selection back on if any
        });
        // panels dont track selection, hafta redo selection with selMan
        selectionManager.reselect();
    };

    // select is jquery element for dropdown select
    var selectListener = function(select) {
        select.change(function() {
            $('.view').hide();
            var leftPanelName = selectedValue($('.left-select'));
            var rightPanelName = selectedValue($('.right-select'));
            showPanels(leftPanelName,rightPanelName);
            bumpOtherDropdownIfSame(select);
        });
    };

    var showPanels = function(leftPanelLabel, rightPanelLabel) {
        if (!leftPanelLabel) throw "cant show panels: Left panel name undefined";
        if (!rightPanelLabel) throw "Right panel name undefined";
        var leftPanel = labelToPanel[leftPanelLabel];
        var rightPanel = labelToPanel[rightPanelLabel];
        $.each([leftPanel, rightPanel], function (i, panel) {
            if (!panel) throw "Error: Panel "+leftPanelName+" "+rightPanelName+" not found";
            if (!panel.created) panel.create();
            else panel.show();
        });
        $('.view').removeClass('left-panel').removeClass('right-panel');
        leftPanel.addClass('left-panel');
        rightPanel.addClass('right-panel');
    };

    // get currently selected option's text in select jquery element
    var selectedValue = function(select) {
        return selectedOption(select).val();
    };

    var selectedIndex = function(select) {
        return selectedOption(select).prop('index');
    };
    
    var selectedOption = function(select) {
        var selOpt = select.children("option[selected='selected']");
        // funny! amidst select event sometimes the above works sometimes below
        if (selOpt.length === 0) selOpt = select.children('option:selected');
        return selOpt;
    };
    
    var selectSize = function() {
        return $('.left-select option').length;
    };
    
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
        var newValue = other.children().eq(newIndex).val();
        other.val(newValue).change();
    };
    
    var getOtherSelect = function(select) {
        return isLeftSelect(select) ? $('.right-select') : $('.left-select');
    };
    
    var isLeftSelect = function(select) {
        return select.attr('class').indexOf('left') !== -1;
    };
    

    // If the window is resized, we may want to resize the dashboard
    $ (window).resize (function () {
        panels[leftIndex].resize();
        panels[rightIndex].resize();
    });

    var initSelectListeners = function() {
        // add selection listeners to left right select dropdowns
        selectListener($('.left-select'));
        selectListener($('.right-select'));
    };

    var showFirstTwoPanels = function() {
        // initialize with 1st panel on left (& 2nd on right)
        // left panel select will cause right to bump to 2nd
        $('.left-select').val(panels[0].name).change();
    };
 
};

var panelManager = new PanelManager();