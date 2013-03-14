goog.provide('timeSlider');

goog.require('dashState');
goog.require('ServiceLayer');

var timeSlider = new wiggle.widget.Slider();

ServiceLayer.addDataCallback(function (layer) {
    timeSlider.model.set('attr', ServiceLayer.getSortedDateProperties());
});

timeSlider.change(function (index) {
    dashState.set('attr', ServiceLayer.getSortedDateProperties()[index]);
});