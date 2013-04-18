goog.provide('AggregationService');

goog.require('AGGREGATION_FUNCTIONS');

var AggregationService = function (serviceLayer) {

    this.computeAggregates = function (name) {
        var aggregationFunction = AGGREGATION_FUNCTIONS[name];
        if (!aggregationFunction) { return {}; }

        var attributesByFeature = serviceLayer.getAttributesByFeature();

        var aggregates = {};
        $.each(attributesByFeature, function (featureId, attributes) {
            aggregates[featureId] = aggregationFunction(attributes);
        });
        return aggregates;
    };
};
