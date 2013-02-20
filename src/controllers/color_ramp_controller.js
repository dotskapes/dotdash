goog.provide('ColorRampController');

goog.require('ServiceLayer');
goog.require('PanelManager');

var ColorRampController = function () {

    var colorMap = function() { return ServiceLayer.colorMap; };

    var chooser = $('.filter-button[name="'+ColorRampController.NAME+'"]');

    var init = function() {
        render(); // view.render();
        chooser.change(function(event) {
            var value = $(event.target).attr('value');
            newRamp(value);
        });
    };

    var newRamp = function(value) {
        colorMap().setColorRamp(value);
        // redraw panels with new colors & redraws selection
        PanelManager.draw();
    };

    // this should go in crc view i think ???
    var render = function() {
        //var template = Handlebars.templates['color_ramp'];
        //var html = template({});
        //filterElement().html(html);
        var rect = d3.select(filterSelector).
            append("svg:svg").
            attr("width", 200).
            attr("height", 30);

        rect.append("svg:rect").
            attr("x", 10).
            attr("y", 0).
            attr("height", 30).
            attr("width", 80);
    };

    var filterElement = $(filterSelector);

    var filterSelector = '#'+ColorRampController.NAME+'-filter';

    init();

}

ColorRampController.NAME = 'ramp';