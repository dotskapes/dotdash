goog.provide('ColorMap');

goog.require('aggModel');
goog.require('dashState');
goog.require('aggModel');
goog.require('ColorRamps');
goog.require('ColorScales');

var NUM_COLORS = ColorRamps.NUM_COLORS;

var ColorMap = function (layer) {
    var ranges = {};
    var quantiles = {};

    var AGG_PROPERTY = 'agg';

    // figure out uniform distribution (for uniform filter)
    // sets min & max range, can be used by each time step or global
    var addQuantile = function (field, filteredValues) {
        quantiles[field] = [];
        filteredValues.sort(function (a, b) {
            return a - b;
        });
        ranges[field] = {
            min: filteredValues[0],
            max: filteredValues[filteredValues.length - 1]
        };
        for (var i = 1; i <= NUM_COLORS; i++) {
            var top = Math.round(i * filteredValues.length / NUM_COLORS);
            var bottom = Math.round((i - 1) * filteredValues.length / NUM_COLORS);

            var qMax = filteredValues[top - 1];
            var qMin = filteredValues[bottom];

            quantiles[field].push({
                max: qMax,
                min: qMin
            });
        }
    };

    layer.numeric().forEach(function (dateProp, i) {
        var localValues = [];
        layer.features().each(function (i, feature) {
            var attr = feature.attr(dateProp);
            if (attr !== undefined) {
                localValues.push(attr);
            }
        });

        addQuantile(dateProp, localValues);
    });

    var findQuantile = function (dateProp, val) {
        if (val <= quantiles[dateProp][0].max) {
            return 0;
        }
        if (val >= quantiles[dateProp][quantiles[dateProp].length - 1].min) {
            return quantiles[dateProp].length - 1;
        }
        for (var i = 0; i < quantiles[dateProp].length - 1; i ++) {
            if ((quantiles[dateProp][i].min <= val) && (quantiles[dateProp][i + 1].min > val)) {
                return i;
            }
        }
        return quantiles[dateProp].length - 1;
    };

    aggModel.on('change:agg', function () {
        var aggregates = dashState.get('agg');
        if (aggregates) {
            filteredValues = [];
            layer.features().each(function (i, feature) {
                filteredValues.push(aggregates[feature.id]);
            });
            addQuantile(AGG_PROPERTY, filteredValues);
        }
        else {
            ranges[AGG_PROPERTY] = undefined;
            quantiles[AGG_PROPERTY] = undefined;
        }
    });

    this.colorForFeature = function (feature) {
        var field = dashState.get('attr');
        var colorRamp = dashState.get('colorRamp');
        var dist = dashState.get('colorDist');
        var val;
        if (dashState.get('agg') === 'none') {
            val = feature.attr(field);
        }
        else {
            val = aggModel.get('agg')[feature.id];
        }
        if (!val) {
            return ColorMap.NO_DATA;
        }
        var index;
        if (dist === ColorScales.DISTRIBUTION.QUANTILE) {
            index = findQuantile(field, val);
        } else if (dist === ColorScales.DISTRIBUTION.UNIFORM) {
            var max = ranges[field].max + 1;
            var min = ranges[field].min - 1;
            index = Math.floor((1 - (max - val) / (max - min)) * colorRamp.length);
        }
        return colorRamp[index];
    };

    this.extents = function (dateProp) {
        return ranges[dateProp];
    };
};


// should this stuff go in a renamed ColorRamps?
// if there is a hole in the data rather than barfing use grey
ColorMap.NO_DATA =  wiggle.util.icolor(75, 75, 75, 255);

// constant for highlight color - color needs to be immutable!
ColorMap.HIGHLIGHT = wiggle.util.icolor(241, 246, 112, 255);

ColorMap.AGGREGATE = wiggle.util.icolor(230, 97, 1, 255);

ColorMap.WHITE = wiggle.util.icolor(255, 255, 255, 255);
