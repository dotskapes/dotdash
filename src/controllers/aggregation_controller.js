goog.provide('AggregationController');

goog.require('AggregationService');

var AggregationController = function () {

    this.start = function (dashState, aggModel, serviceLayer) {
        var filter = $('.filter-button[name="' + AggregationController.NAME + '"]');
        filter.change(function (event) {
            var name = $(event.target).val();
            var aggregates;
            if (name !== 'none') {
                var attributesByFeature = serviceLayer.getAttributesByFeature();
                var aggregationService = new AggregationService();
                aggregates = aggregationService.computeAggregates(name, attributesByFeature);
            }
            else {
                aggregates = null;
            }
            aggModel.set('agg', aggregates);
            dashState.set('agg', name);
        });
    };

};

AggregationController.NAME = 'agg';

