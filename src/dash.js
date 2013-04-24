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

var Dashboard = function (parentSelector, savedDashState) {
    var dashState = new DashboardState(savedDashState);
    var aggregateModel = new AggregateModel();

    var serviceLayer = new ServiceLayer();

    var parent = $(parentSelector);
    parent.empty();

    var timeSliderController = new TimeSliderController();
    timeSliderController.start(parent, dashState, serviceLayer);

    var moveSelModel = new MoveSelModel();
    var filter = new Filter({serviceLayer: serviceLayer});
    var selectionManager = new SelectionManager(filter);

    // sidebar has to be laid out before panels
    var sidebarController = new SidebarController();
    var options = {
        dashState: dashState,
        aggregateModel: aggregateModel,
        moveSelModel: moveSelModel,
        filter: filter,
        selectionManager: selectionManager,
        serviceLayer: serviceLayer
    };
    sidebarController.start(parent, options);

    var panelState = new PanelState({
        panels: [new MapPanel(selectionManager, moveSelModel, serviceLayer),
                 new TimePanel(selectionManager, moveSelModel, serviceLayer),
                 new MDSPanel(selectionManager, moveSelModel, serviceLayer)]
    });

    var panelManager = new PanelManager({model: panelState});
    panelManager.start(parent, dashState, filter, selectionManager, serviceLayer);

    this.loadUrl = function (url) {
        serviceLayer.loadUrl(url, dashState, aggregateModel);
    };

    this.getState = function () {
        return dashState.toJSON();
    };
};

// called by index.html to start up dash
window.dash = {
    ready: function (func) {
        $(document).ready(func);
    },
    create: function (selector, savedDashState) {
        selector = selector || 'body';
        savedDashState = savedDashState || {};

        return new Dashboard(selector, savedDashState);
    }
};
