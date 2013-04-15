goog.provide('dash');

goog.require('timeSlider');
goog.require('dashState');
goog.require('ServiceLayer');
goog.require('sidebarController');
goog.require('panelManager');

var Dashboard = function (parentSelector) {

    var parent = $(parentSelector);
    parent.empty();

    parent.append(timeSlider.$el);
    // sidebar has to be laid out before panels
    sidebarController.start(parent);

    panelManager.start(parent);

    this.loadUrl = function (url) {
        ServiceLayer.loadUrl(url);
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
