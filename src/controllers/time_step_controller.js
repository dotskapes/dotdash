function TimeStepController (baseUrl) {

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


        ServiceLayer.addDataListener({
            newData : function (layer) {
                var promise = view.update(layer.properties().sort());
                promise.done(addEventListener);
            }
        });
    };

    init();
};

TimeStepController.NAME = 'step';