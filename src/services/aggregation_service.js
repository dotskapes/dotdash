goog.provide('aggregationService');

goog.require('AGGREGATION_FUNCTIONS');
goog.require('ServiceLayer');

var aggregationService = {

    computeAggregates: function (name) {
        var aggregationFunction = AGGREGATION_FUNCTIONS[name];
        if (!aggregationFunction) { return {}; }

        var attributesByFeature = ServiceLayer.getAttributesByFeature();

        var aggregates = {};
        $.each(attributesByFeature, function (featureId, attributes) {
            aggregates[featureId] = aggregationFunction(attributes);
        });
        return aggregates;
    }
};
