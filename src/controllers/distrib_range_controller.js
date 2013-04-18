goog.provide('DistribRangeController');

goog.require('ServiceLayer');

var DistribRangeController = function () {

    this.start = function (dashState) {

        var distrib = $('.filter-button[name="' + DistribRangeController.DISTRIB + '"]');
        distrib.change(function (event) {
            var value = parseInt($(event.target).val(), 10);
            dashState.set('colorDist', value);
        });
    };
};

DistribRangeController.DISTRIB = 'dist';
DistribRangeController.RANGE = 'range';

