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
        console.log('color ramp controller got val '+value);
        colorMap().setColorRamp(value);
        // redraw panels with new colors
        //panelManager.draw(); // does selection too?
        // reselecting will actually cause everything to redraw
        selectionManager.reselect();
    }

    init();

}

ColorRampController.CSS_CLASS = 'ramp';