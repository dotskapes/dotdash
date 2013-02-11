'use strict';
// refactor - break out dropdown & such
function Dashboard (parentSelector, baseUrl) {
    // Static set of views for now - todo: read from config file
    var views = ['map', 'time', 'mds', 'table'];

    // Static set of filters for now
    var filters = ['subset', 'step', 'ramp', 'distribution', 'scale', 'agg'];

    PanelManager.init(views,parentSelector,baseUrl);

    var url = function(path) { return baseUrl + path; }

    ServiceLayer.loadUrl(url('temp/flu_country.json'));

    // Start the filter controller/view
    new FilterController($(parentSelector),baseUrl);

};

// called by index.html to start up dash
var dash = {
    ready: function (func) {
        $ (document).ready (func);
    },
    create: function (selector, baseUrl) {
        selector = selector || 'body';
        baseUrl = baseUrl || '';
        
        return new Dashboard (selector, baseUrl);
    }
};
