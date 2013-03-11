goog.provide('aggregationController');

goog.require('aggregationService');
goog.require('ServiceLayer');
goog.require('panelManager');

var AggregationController = function () {

    this.start = function () {
        var filter = $('.filter-button[name="' + AggregationController.NAME + '"]');
        filter.change(function (event) {
            var name = $(event.target).val();
            var aggregates = aggregationService.computeAggregates(name);
            ServiceLayer.setAggregates(aggregates);
            panelManager.redraw();
        });
    };

};

AggregationController.NAME = 'agg';

var aggregationController = new AggregationController();