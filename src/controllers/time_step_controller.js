goog.provide('timeStepController');

goog.require('dashState');
goog.require('ServiceLayer');
goog.require('panelManager');
goog.require('TimeStepFilterView');

var TimeStepController = function () {

    var view = new TimeStepFilterView();

    this.start = function () {

        var addEventListener = function () {
            var select = $('.' + TimeStepFilterView.CLASS);
            select.change(function (event) {
                var attr = $(event.target).val();
                dashState.set('attr', attr);
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
