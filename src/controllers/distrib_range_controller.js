goog.provide('DistribRangeController');

goog.require('ServiceLayer');

var DistribRangeController = function() {

    var init = function() {

        var distrib = $('.filter-button[name="'+DistribRangeController.DISTRIB+'"]');
        distrib.change(function (event) {
            var value = parseInt($(event.target).val(),10);
            ServiceLayer.colorMap.dist(value);
            panelManager.redraw();
        });

        var range = $('.filter-button[name="'+DistribRangeController.RANGE+'"]');
        range.change(function (event) {
            var value = parseInt($(event.target).val(),10);
            ServiceLayer.colorMap.range(value);
            panelManager.redraw();
        });
    };
    
    init();

};

DistribRangeController.DISTRIB = 'dist';
DistribRangeController.RANGE = 'range';