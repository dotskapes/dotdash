goog.provide('aggregationController');

goog.require('dashState');
goog.require('aggregationService');
goog.require('panelManager');

var AggregationController = function () {

    this.start = function () {
        var filter = $('.filter-button[name="' + AggregationController.NAME + '"]');
        filter.change(function (event) {
            var name = $(event.target).val();
            var aggreates;
            if (name) {
                aggregates = aggregationService.computeAggregates(name)
            }
            else {
                aggregates = null;
            }
            dashState.set('agg', aggregates);
        });
    };

};

AggregationController.NAME = 'agg';

var aggregationController = new AggregationController();
