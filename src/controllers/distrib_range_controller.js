goog.provide('distribRangeController');

goog.require('ServiceLayer');

var DistribRangeController = function () {

    this.start = function () {

        var distrib = $('.filter-button[name="' + DistribRangeController.DISTRIB + '"]');
        distrib.change(function (event) {
            var value = parseInt($(event.target).val(), 10);
            dashState.set('colorDist', value);
        });
    };
};

DistribRangeController.DISTRIB = 'dist';
DistribRangeController.RANGE = 'range';

var distribRangeController = new DistribRangeController();
