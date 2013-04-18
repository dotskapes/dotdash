goog.provide('dash');

goog.require('timeSlider');
goog.require('DashboardState');
goog.require('ServiceLayer');
goog.require('sidebarController');
goog.require('panelManager');

var Dashboard = function (parentSelector) {
    var dashState = new DashboardState();

    var parent = $(parentSelector);
    parent.empty();

    timeSlider.start(parent, dashState);
    // sidebar has to be laid out before panels
    sidebarController.start(parent, dashState);

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
