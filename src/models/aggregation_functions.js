goog.provide('AGGREGATION_FUNCTIONS');

var AGGREGATION_FUNCTIONS = {

    mean: function (attributes) {
        var sum = 0;
        var count = 0;

        $.each(attributes, function (key, value) {
            if (!isNaN(value)) {
                sum += value;
                count += 1;
            }
        });

        return sum / count;
    },

    min: function (attributes) {
        var min = Infinity;

        $.each(attributes, function (key, value) {
            if (!isNaN(value)) {
                min = (value < min) ? value : min;
            }
        });

        return min;
    },

    max: function (attributes) {
        var max = -Infinity;

        $.each(attributes, function (key, value) {
            if (!isNaN(value)) {
                max = (value > max) ? value : max;
            }
        });

        return max;
    }

};
