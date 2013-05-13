goog.provide('TimeStepController');

goog.require('TimeStepFilterView');

var TimeStepController = function () {

    var view = new TimeStepFilterView();

    this.start = function (dashState, serviceLayer) {

        var addEventListener = function () {
            var select = $('.' + TimeStepFilterView.CLASS);
            select.change(function (event) {
                var attr = $(event.target).val();
                dashState.set('attr', attr);
            });
        };


        var updateSelect = function () {
            var select = $('.' + TimeStepFilterView.CLASS);
            select.val(dashState.get('attr'));
        };

        serviceLayer.addDataCallback(
            function (layer) {
                view.update(layer.properties().sort());
                addEventListener();
                updateSelect();
            }
        );

        dashState.on('change:attr', updateSelect);
    };
};

TimeStepController.NAME = TimeStepFilterView.NAME;

