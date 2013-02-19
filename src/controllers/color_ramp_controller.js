goog.provide('ColorRampController');

goog.require('ServiceLayer');
goog.require('PanelManager');

var ColorRampController = function () {

    var colorMap = function() { return ServiceLayer.colorMap; }

    var chooser = $('.filter-button[name="'+ColorRampController.NAME+'"]');

    var init = function() {
        chooser.change(function(event) {
            var value = $(event.target).attr('value');
            newRamp(value);
        });
    }

    var newRamp = function(value) {
        colorMap().setColorRamp(value);
        // redraw panels with new colors & redraws selection
        PanelManager.draw();
    }

    init();

}

ColorRampController.NAME = 'ramp';