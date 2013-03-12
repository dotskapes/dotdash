goog.provide('timeStepController');

goog.require('ServiceLayer');
goog.require('panelManager');
goog.require('TimeStepFilterView');

var TimeStepController = function () {

    var view = new TimeStepFilterView();

    this.start = function () {

        var addEventListener = function () {
            var select = $('.' + TimeStepFilterView.CLASS);
            select.change(function (event) {
                var value = $(event.target).val();
                ServiceLayer.setCurrentDateProp(value);
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
};

TimeStepController.NAME = TimeStepFilterView.NAME;

var timeStepController = new TimeStepController();
