goog.provide('ColorMap');

goog.require('ColorRamps');
goog.require('ColorScales');

var NUM_COLORS = ColorRamps.NUM_COLORS;

var ColorMap = function (attributesByProperty) {
    var ranges = {};

    // figure out uniform distribution (for uniform filter)
    // sets min & max range, can be used by each time step or global
    var setRange = function (vals, currentDateProp) {
        vals.sort(function (a, b) {
            return a - b;
        });

        ranges[currentDateProp] = {
            min: vals[0],
            max: vals[vals.length - 1]
        };
    };

    // figure global color scale, that is scale according to all features,
    // not just self(local)
    var globalVals = [];
    $.each(attributesByProperty, function (dateProp, featureAttributes) {
        var vals = [];
        $.each(featureAttributes, function (featureId, val) {
            // i dont think we care about undefs do we, in fact they create problems
            if (val !== undefined) {
                vals.push(val);
                globalVals.push(val);
            }
        });
        // set min & max range for timestep/dateProp
        setRange(vals, dateProp);
    });
    // get global min & max under property "global"
    var GLOBAL_PROPERTY = 'global';
    setRange(globalVals, GLOBAL_PROPERTY);

    var quantiles = {};
    quantiles[GLOBAL_PROPERTY] = [];

    for (var q = 1; q <= NUM_COLORS; q ++) {
        var top = Math.round(q * globalVals.length / NUM_COLORS);
        var bottom = Math.round((q - 1) * globalVals.length / NUM_COLORS);
        quantiles[GLOBAL_PROPERTY].push({
            min: globalVals[bottom],
            max: globalVals[top - 1]
        });
    }

    $.each(attributesByProperty, function (field, featureAttributes) {
        quantiles[field] = [];
        var filteredValues = [];
        $.each(featureAttributes, function (key, value) {
            if (value !== undefined) {
                filteredValues.push(value);
            }
        });
        filteredValues.sort();
        for (var i = 1; i <= NUM_COLORS; i++) {
            var top = Math.round(i * filteredValues.length / NUM_COLORS);
            var bottom = Math.round((i - 1) * filteredValues.length / NUM_COLORS);

            var max = filteredValues[top - 1];
            var min = filteredValues[bottom];

            quantiles[field].push({max: max, min: min});
        }
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
    };

    this.colorForValue = function (val, prop, colorRamp, dist, range) {
        if (!val) {
            return ColorMap.NO_DATA;
        }
        var index, field;
        if (range === ColorScales.RANGE.LOCAL) {
            field = prop;
        } else if (range === ColorScales.RANGE.GLOBAL) {
            field = GLOBAL_PROPERTY;
        }
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
