goog.provide('ColorMap');

goog.require('ColorRamps');
goog.require('ColorScales');

var NUM_COLORS = ColorRamps.NUM_COLORS;

var ColorMap = function (dataLayer) {
    var ranges = {};

    // a list of properties of feature that correspond to timestamped data.
    // and sorted by dates - though thats not relevant for color map
    var dateProps = ServiceLayer.getSortedDateProperties(dataLayer);

    var currentDateProp = dateProps[0];

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
    $.each(dateProps, function (i, dateProp) {
        var vals = [];
        dataLayer.features().each(function (j, feature) {
            var val = feature.attr(dateProp);
            // i dont think we care about undefs do we, in fact they create problems
            if (val !== undefined) {
                vals.push(feature.attr(dateProp));
                globalVals.push(feature.attr(dateProp));
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

    for (var k = 0; k < dateProps.length; k ++) {
        var field = dateProps[k];
        quantiles[field] = [];
        for (var i = 1; i <= NUM_COLORS; i ++) {
            //var q = br_precip.features ().quantile (field, i, NUM_COLORS);
            q = ServiceLayer.currentData.features().quantile(field, i, NUM_COLORS);
            var quantile = q.range(field);
            // if the data for dateProp is sparse may have no quantile, so dont push it
            if (quantile) {
                quantiles[field].push(q.range(field));
            }
        }
    }

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

    this.currentDateProp = function (_currentDateProp) {
        currentDateProp = _currentDateProp;
    };

    var dist = ColorScales.DISTRIBUTION.QUANTILE;
    var range = ColorScales.RANGE.LOCAL;

    this.colorForFeat = function (f) {
        if (!f.attr) {
            console.log('here');
        }
        var val = f.attr(currentDateProp);
        if (!val) {
            return ColorMap.NO_DATA;
        }
        var index, field;
        if (range === ColorScales.RANGE.LOCAL) {
            field = currentDateProp;
        } else if (range === ColorScales.RANGE.GLOBAL) {
            field = GLOBAL_PROPERTY;
        }
        if (dist === ColorScales.DISTRIBUTION.QUANTILE) {
            index = findQuantile(field, val);
        } else if (dist === ColorScales.DISTRIBUTION.UNIFORM) {
            var max = ranges[field].max + 1;
            var min = ranges[field].min - 1;
            index = Math.floor((1 - (max - val) / (max - min)) * currentColorRamp.length);
        }
        return currentColorRamp[index];
    };


    this.extents = function (dateProp) {
        return ranges[dateProp];
    };

    // 1st initial color - which should be same as index 0 for color ramp - refactor
    var currentColorRamp = ColorRamps.RAMPS[0]; //white_red;

    this.setColorRamp = function (index) {
        currentColorRamp = ColorRamps.RAMPS[index];
    };

    this.dist = function (index) {
        dist = index;
    };

    this.range = function (index) {
        range = index;
    };
};


// should this stuff go in a renamed ColorRamps?
// if there is a hole in the data rather than barfing use grey
ColorMap.NO_DATA =  wiggle.util.icolor(75, 75, 75, 255);

// constant for highlight color - color needs to be immutable!
ColorMap.HIGHLIGHT = wiggle.util.icolor(241, 246, 112, 255);

ColorMap.AGGREGATE = wiggle.util.icolor(230, 97, 1, 255);

ColorMap.WHITE = wiggle.util.icolor(255, 255, 255, 255);
