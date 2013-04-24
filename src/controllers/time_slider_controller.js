goog.provide('TimeSliderController');

var TimeSliderController = function () {

    this.start = function ($parent, dashState, serviceLayer) {
        // The time slider is a bacckbone view
        var timeSlider = new wiggle.widget.Slider();

        var updateDate = function () {
            var attr = dashState.get('attr');
            timeSlider.model.set('index', serviceLayer.getIndexOfAttr(attr));
        };

        // Whenever the data changes, change the steps on the slider
        serviceLayer.addDataCallback(function (layer) {
            timeSlider.model.set('attr', serviceLayer.getSortedDateProperties());
            updateDate();
        });


        // Likewise, when the slider changes position, change the state
        timeSlider.change(function (index) {
            dashState.set('attr', timeSlider.model.get('attr')[index]);
        });

        // Make sure to update the position of the slider if something else changes
        // the selected attribute
        dashState.on('change:attr', updateDate);

        $parent.append(timeSlider.$el);
    };
};



