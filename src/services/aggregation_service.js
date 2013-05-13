goog.provide('AggregationService');

goog.require('AGGREGATION_FUNCTIONS');

var AggregationService = function () {

    this.computeAggregates = function (name, attributesByFeature) {
        var aggregationFunction = AGGREGATION_FUNCTIONS[name];
        if (!aggregationFunction) { return {}; }

        var aggregates = {};
        $.each(attributesByFeature, function (featureId, attributes) {
            aggregates[featureId] = aggregationFunction(attributes);
        });
        return aggregates;
    };
};
