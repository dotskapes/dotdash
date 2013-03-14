goog.provide('dashState');

goog.require('ColorRamps');
goog.require('ColorScales');

var DashboardState = Backbone.Model.extend({
    defaults: {
        currentAttr: null,
        colorRamp: ColorRamps.RAMPS[0],
        colorDist: ColorScales.DISTRIBUTION.QUANTILE,
        colorRange: ColorScales.RANGE.LOCAL,
        agg: null
    }
});

var dashState = new DashboardState();
