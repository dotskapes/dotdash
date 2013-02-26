goog.provide('TimeStepController');

goog.require('ServiceLayer');
goog.require('panelManager');
goog.require('TimeStepFilterView');

var TimeStepController = function () {

    var view = new TimeStepFilterView();

    var init = function () {

        var addEventListener = function () {
            var select = $('.' + TimeStepFilterView.CLASS);
            select.change(function (event) {
                var value = $(event.target).val();
                ServiceLayer.colorMap.currentDateProp(value);
                panelManager.redraw();
            });
        };


        ServiceLayer.addDataCallback(
            function (layer) {
                view.update(layer.properties().sort());
                addEventListener();
            }
        );
    };

    init();
};

TimeStepController.NAME = TimeStepFilterView.NAME;