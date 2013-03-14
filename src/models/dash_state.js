goog.provide('dashState');

goog.require('ColorRamps');
goog.require('ColorScales');

var DashboardState = Backbone.Model.extend({
    defaults: {
        attr: null,
        colorRamp: ColorRamps.RAMPS[0],
        colorDist: ColorScales.DISTRIBUTION.QUANTILE,
        colorRange: ColorScales.RANGE.LOCAL,
        agg: 'none'
    }
});

var dashState = new DashboardState();
