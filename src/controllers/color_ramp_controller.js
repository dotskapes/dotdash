function ColorRampController() {

    var colorMap = function() { return ServiceLayer.colorMap; }

    var chooser = $('.filter-button[name="'+ColorRampController.CSS_CLASS+'"]');

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

ColorRampController.CSS_CLASS = 'ramp';