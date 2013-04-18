goog.provide('dash');

goog.require('TimeSliderController');
goog.require('DashboardState');
goog.require('AggregateModel');
goog.require('ServiceLayer');
goog.require('SidebarController');
goog.require('PanelManager');
goog.require('PanelState');
goog.require('MapPanel');
goog.require('TimePanel');
goog.require('MDSPanel');
goog.require('MoveSelModel');
goog.require('Filter');
goog.require('SelectionManager');

var Dashboard = function (parentSelector) {
    var dashState = new DashboardState();
    var aggregateModel = new AggregateModel();

    var parent = $(parentSelector);
    parent.empty();

    var timeSliderController = new TimeSliderController();
    timeSliderController.start(parent, dashState);

    var moveSelModel = new MoveSelModel();
    var filter = new Filter();
    var selectionManager = new SelectionManager(filter);

    // sidebar has to be laid out before panels
    var sidebarController = new SidebarController();
    var options = {
        dashState: dashState,
        aggregateModel: aggregateModel,
        moveSelModel: moveSelModel,
        filter: filter,
        selectionManager: selectionManager
    };
    sidebarController.start(parent, options);

    var panelState = new PanelState({
        panels: [new MapPanel(selectionManager, moveSelModel),
                 new TimePanel(selectionManager, moveSelModel),
                 new MDSPanel(selectionManager, moveSelModel)]
    });

    var panelManager = new PanelManager({model: panelState});
    panelManager.start(parent, dashState, filter, selectionManager);

    this.loadUrl = function (url) {
        ServiceLayer.loadUrl(url, dashState, aggregateModel);
    };
};

// called by index.html to start up dash
window.dash = {
    ready: function (func) {
        $(document).ready(func);
    },
    create: function (selector) {
        selector = selector || 'body';

        return new Dashboard(selector);
    }
};
