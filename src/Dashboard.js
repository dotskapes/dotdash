goog.provide('Dashboard');

goog.require('dash');

goog.require('TimeSliderController');
goog.require('DashboardState');
goog.require('AggregateModel');
goog.require('ServiceLayer');
goog.require('SidebarController');
goog.require('PanelManager');
goog.require('PanelState');

goog.require('Panel');
goog.require('MapPanel');
goog.require('TimePanel');
goog.require('TablePanel');
goog.require('GridPanel');
goog.require('ScatterPanel');
goog.require('WordCloudPanel');
goog.require('BasicTimePanel');

goog.require('MoveSelModel');
goog.require('Filter');
goog.require('SelectionManager');

dash.Dashboard = function(settings) {

    var parentSelector = settings.parent || 'body';
    var savedDashState = settings.saved || {};
    var panelNames = settings.panels || ['map', 'basictime', 'table'];

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

    var panels = [];
    $.each(panelNames, function(i, name) {
        var PanelFunc = dash.controllers.Panel.getClass(name);
        panels.push(new PanelFunc(selectionManager, moveSelModel, serviceLayer));
    });
    var panelState = new PanelState({
        panels: panels
    });

    var panelManager = new PanelManager({model: panelState});
    panelManager.start(parent, dashState, filter, selectionManager, serviceLayer);

    this.load = function (urlOrData, settings) {
        if (!settings) {
            settings = {};
        }
        _.defaults(settings, {
            xlabel: '',
            ylabel: ''
        });
        return serviceLayer.load(urlOrData, dashState, aggregateModel, settings);
    };

    this.loadOverlay = function (urlOrData) {
        return serviceLayer.loadOverlay(urlOrData);
    };

    this.getState = function () {
        return dashState.toJSON();
    };
};
