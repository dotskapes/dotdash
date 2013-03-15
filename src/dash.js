goog.provide('dash');

goog.require('ServiceLayer');
goog.require('colorController');
goog.require('panelManager');

var Dashboard = function (parentSelector, baseUrl) {

    // Start the filter controller/view, has to be laid out before panels
    colorController.start($(parentSelector));

    panelManager.init(parentSelector, baseUrl);

    this.loadUrl = function (url) {
        ServiceLayer.loadUrl(url);
    };

    //ServiceLayer.loadUrl(baseUrl + 'temp/flu_country.json');
};

// called by index.html to start up dash
window.dash = {
    ready: function (func) {
        $(document).ready(func);
    },
    create: function (selector, baseUrl) {
        selector = selector || 'body';
        baseUrl = baseUrl || '';

        return new Dashboard(selector, baseUrl);
    }
};
