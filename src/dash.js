goog.provide('dash');

goog.require('TimeSliderController');
goog.require('DashboardState');
goog.require('ServiceLayer');
goog.require('SidebarController');
goog.require('PanelManager');
goog.require('panelState');

var Dashboard = function (parentSelector) {
    var dashState = new DashboardState();

    var parent = $(parentSelector);
    parent.empty();

    var timeSliderController = new TimeSliderController();
    timeSliderController.start(parent, dashState);

    // sidebar has to be laid out before panels
    var sidebarController = new SidebarController();
    sidebarController.start(parent, dashState);

    var panelManager = new PanelManager({model: panelState});
    panelManager.start(parent, dashState);

    this.loadUrl = function (url) {
        ServiceLayer.loadUrl(url, dashState);
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
