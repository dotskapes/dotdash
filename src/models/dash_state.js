goog.provide('DashboardState');

goog.require('ColorRamps');
goog.require('ColorScales');

var DashboardState = Backbone.Model.extend({
    defaults: {
        attr: null,
        colorRampIndex: 0,
        colorDist: ColorScales.DISTRIBUTION.UNIFORM,
        agg: 'none'
    }
});
