goog.provide('aggregationController');

goog.require('aggModel');
goog.require('dashState');
goog.require('aggregationService');
goog.require('panelManager');

var AggregationController = function () {

    this.start = function () {
        var filter = $('.filter-button[name="' + AggregationController.NAME + '"]');
        filter.change(function (event) {
            var name = $(event.target).val();
            var aggregates;
            if (name !== 'none') {
                aggregates = aggregationService.computeAggregates(name);
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

var aggregationController = new AggregationController();
