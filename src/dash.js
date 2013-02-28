goog.provide('dash');

goog.require('ServiceLayer');
goog.require('FilterController');
goog.require('panelManager');

'use strict';
var Dashboard = function (parentSelector, baseUrl) {

    // Static set of filters for now
    var filters = ['subset', 'step', 'ramp', 'distribution', 'scale', 'agg'];

    // Start the filter controller/view, has to be laid out before panels
    new FilterController($(parentSelector));

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
