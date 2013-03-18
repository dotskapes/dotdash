goog.provide('dash');

goog.require('timeSlider');
goog.require('dashState');
goog.require('ServiceLayer');
goog.require('colorController');
goog.require('panelManager');

var Dashboard = function (parentSelector) {

    $(parentSelector).append(timeSlider.$el);
    // Start the filter controller/view, has to be laid out before panels
    colorController.start($(parentSelector));

    panelManager.init(parentSelector);

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
