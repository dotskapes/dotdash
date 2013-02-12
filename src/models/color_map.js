'use strict';
var NUM_COLORS = 6;

function ColorMap(dataLayer) {
    var ranges = {};

    // a list of properties of feature that correspond to timestamped data.
    // and sorted by dates - though thats not relevant for color map
    var dateProps = ServiceLayer.getSortedDateProperties(dataLayer);

    var currentDateProp = dateProps[0];

    // figure out uniform distribution (for uniform filter)
    // sets min & max range, can be used by each time step or global
    var set_range = function (vals, currentDateProp) {
        vals.sort (function (a, b) {
            return a - b;
        });

        ranges[currentDateProp] = {
            min: vals[0],
            max: vals[vals.length - 1]
        };
    };

    // figure global color scale, that is scale according to all features,
    // not just self(local)
    var global_vals = [];
    $.each(dateProps, function (i, dateProp) {
        var vals = [];
        dataLayer.features().each(function (j, feature) {
            vals.push (feature.attr(dateProp));
            global_vals.push (feature.attr(dateProp));
        });
        // set min & max range for timestep/dateProp
        set_range (vals, currentDateProp);
    });
    // get global min & max under property "global"
    set_range (global_vals, 'global');

    var quantiles = {
        'global': []
    };

    for (q = 1; q <= NUM_COLORS; q ++) {
        var top = Math.round (q * global_vals.length / NUM_COLORS);
        var bottom = Math.round ((q - 1) * global_vals.length / NUM_COLORS);
        quantiles['global'].push ({
            min: global_vals[bottom],
            max: global_vals[top - 1]
        });
    }

    for (var k = 0; k < dateProps.length; k ++) {
        var field = dateProps[k];
        quantiles[field] = [];
        for (var i = 1; i <= NUM_COLORS; i ++) {
            //var q = br_precip.features ().quantile (field, i, NUM_COLORS);
            var q = ServiceLayer.currentData.features().quantile(field, i, NUM_COLORS);
            var quantile = q.range(field);
            // if the data for dateProp is sparse may have no quantile, so dont push it
            if (quantile) 
                quantiles[field].push (q.range (field));
        }       
    }
    
    var find_quantile = function (dateProp, val) {
        if (val <= quantiles[dateProp][0].max)
            return 0;
        if (val >= quantiles[dateProp][quantiles[dateProp].length - 1].min)
            return quantiles[dateProp].length - 1;
        for (var i = 0; i < quantiles[dateProp].length - 1; i ++) {
            if ((quantiles[dateProp][i].min <= val) && (quantiles[dateProp][i + 1].min > val)) {
                return i;
            }
        }
    };
    
    this.currentDateProp = function (_currentDateProp) {
        currentDateProp = _currentDateProp;
    };
    
    var grey_blue = [
        wiggle.util.icolor(255, 247, 251, 255),
        wiggle.util.icolor(208, 209, 230, 255),
        wiggle.util.icolor(166, 189, 219, 255),
        wiggle.util.icolor(116, 169, 207, 255),
        wiggle.util.icolor(43, 140, 190, 255),
        wiggle.util.icolor(4, 90, 141, 255),
    ];

    var white_red = [
        wiggle.util.icolor(254, 229, 217, 255),
        wiggle.util.icolor(252, 187, 161, 255),
        wiggle.util.icolor(252, 146, 114, 255),
        wiggle.util.icolor(251, 106, 74, 255),
        wiggle.util.icolor(222, 45, 38, 255),
        wiggle.util.icolor(165, 15, 21, 255),
    ];
    
    var red_blue = [
        wiggle.util.icolor(178, 24, 43, 255),
        wiggle.util.icolor(239, 138, 98, 255),
        wiggle.util.icolor(253, 219, 199, 255),
        wiggle.util.icolor(209, 169, 207, 255),
        wiggle.util.icolor(103, 169, 207, 255),
        wiggle.util.icolor(33, 102, 172, 255),
    ];

    var brown_green = [
        wiggle.util.icolor(140, 82, 10, 255),
        wiggle.util.icolor(216, 179, 101, 255),
        wiggle.util.icolor(246, 232, 195, 255),
        wiggle.util.icolor(199, 234, 229, 255),
        wiggle.util.icolor(90, 180, 172, 255),
        wiggle.util.icolor(1, 102, 94, 255),        
    ];

    var white_green = [
        wiggle.util.icolor(237, 248, 233, 255),
        wiggle.util.icolor(199, 233, 192, 255),
        wiggle.util.icolor(161, 217, 155, 255),
        wiggle.util.icolor(116, 196, 118, 255),
        wiggle.util.icolor(49, 163, 84, 255),
        wiggle.util.icolor(0, 109, 44, 255),
    ];

    // 1st initial color - which should be same as index 0 for color ramp - refactor
    var colors = white_red;
    var dist = 0;
    var range = 0;

    this.colorForFeat = function (f) {
        if (!f.attr)
            console.log ('here');
        var val = f.attr(currentDateProp);
        if (!val) return ColorMap.NO_DATA;
        var index;
        if (dist == 0) {
            var field;
            if (range == 0)
                field = currentDateProp;
            else if (range == 1)
                field = 'global';
            index = find_quantile (field, val);
        }
        else if (dist == 1) {
            var field;
            if (range == 0)
                field = currentDateProp;
            else if (range == 1)
                field = 'global';
            var max = ranges[field].max + 1;
            var min = ranges[field].min - 1;
            index = Math.floor ((1 - (max - val) / (max - min)) * colors.length);
        }
        return colors[index];
    };

    
    this.extents = function (dateProp) {
        return ranges[dateProp];
    }

    var colorRamps = [white_red,grey_blue,red_blue,white_green,brown_green];

    this.setColorRamp = function (index) {
        colors = colorRamps[index];
    }

    this.dist = function (index) {
        dist = index;
    };

    this.range = function (index) {
        range = index;
    };
};

// if there is a hole in the data rather than barfing use grey
ColorMap.NO_DATA =  wiggle.util.icolor(75,75,75,255);

// constant for highlight color - color needs to be immutable!
ColorMap.HIGHLIGHT = wiggle.util.icolor (241, 246, 112, 255);

ColorMap.AGGREGATE = wiggle.util.icolor (230, 97, 1, 255);

ColorMap.WHITE = wiggle.util.icolor (255, 255, 255, 255);
