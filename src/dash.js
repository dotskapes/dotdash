goog.provide('dash');

goog.require('ServiceLayer');
goog.require('filterController');
goog.require('panelManager');

var Dashboard = function (parentSelector, baseUrl) {

    // Start the filter controller/view, has to be laid out before panels
    filterController.start($(parentSelector));

    panelManager.init(parentSelector, baseUrl);

    ServiceLayer.loadUrl(baseUrl + 'temp/flu_country.json');
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
