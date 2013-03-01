goog.provide('AggregationService');

var AggregationService = {

    computeAggregates: function (data) {

        $.each(data.features, function (i, feature) {
            var min = Infinity;
            var max = 0;
            var sum = 0;
            var count = 0;

            $.each(feature.properties, function (dateProp, val) {
                if (!isNaN(val)) {
                    min = (val < min) ? val : min;
                    max = (val > max) ? val : max;
                    sum += val;
                    count += 1;
                }
            });

            var mean = sum / count;

            feature.properties.min = min;
            feature.properties.max = max;
            feature.properties.mean = mean;
        });
    }
};
