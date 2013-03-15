goog.provide('timeSlider');

goog.require('dashState');
goog.require('ServiceLayer');

// The time slider is a bacckbone view
var timeSlider = new wiggle.widget.Slider();


// Whenever the data changes, change the steps on the slider
ServiceLayer.addDataCallback(function (layer) {
    timeSlider.model.set('attr', ServiceLayer.getSortedDateProperties());
});


// Likewise, when the slider changes position, change the state
timeSlider.change(function (index) {
    dashState.set('attr', timeSlider.model.get('attr')[index]);
});

// Make sure to update the position of the slider if something else changes
// the selected attribute
dashState.on('change:attr', function () {
    var attr = dashState.get('attr');
    timeSlider.model.set('index', ServiceLayer.getIndexOfAttr(attr));
});
