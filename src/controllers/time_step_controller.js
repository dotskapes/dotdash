goog.provide('TimeStepController');

goog.require('ServiceLayer');
goog.require('PanelManager');
goog.require('TimeStepFilterView');

var TimeStepController = function (baseUrl) {

    var view = new TimeStepFilterView(baseUrl);

    var init = function () {

        var addEventListener = function () {
            var chooser = $('.filter-button[name="' + TimeStepController.NAME + '"]');
            chooser.change(function (event) {
                var value = $(event.target).val();
                ServiceLayer.colorMap.currentDateProp(value);
                PanelManager.draw();
            });
        };


        ServiceLayer.addDataCallback(
            function (layer) {
                var promise = view.update(layer.properties().sort());
                promise.done(addEventListener);
            }
        );
    };

    init();
};

TimeStepController.NAME = 'step';