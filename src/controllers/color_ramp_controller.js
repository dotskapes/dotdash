goog.provide('ColorRampController');

goog.require('ServiceLayer');
goog.require('panelManager');

var ColorRampController = function () {
    'use strict';

    var currentRampIndex = 0;
    var colorMap = function () { return ServiceLayer.colorMap; };
    var filterSelector = '#' + ColorRampController.NAME + '-filter';
    var rampSvgId = 'ramp-svg';

    var init = function () {
        render();
    };

    // a new ramp is being asked for
    var newRamp = function (rampIndex) {
        colorMap().setColorRamp(rampIndex);
        // redraw panels with new colors & redraws selection
        panelManager.redraw();
        currentRampIndex = rampIndex;
        // selection has probably changed, redraw
        redraw();
    };

    // wipe out old, and render new. if sel has changed will reflect
    var redraw = function () {
        d3.select('#' + rampSvgId).remove();
        render();
    };

    // should this go in crc view??? it has a tiny bit of controller in it
    var render = function () {
        var xMargin = 3;
        var yMargin = 3;
        var colorWidth = 20;
        var colorHeight = colorWidth;
        var colorRamps = ColorRamps.RAMPS;
        var totalheight = colorRamps.length * (colorHeight + 2 * yMargin);
        var rampWidth = ColorRamps.NUM_COLORS * colorWidth;
        var totalwidth =  rampWidth + 2 * xMargin;

        // svg container
        var svg = d3.select(filterSelector)
            .append("svg:svg")
            .attr('id', rampSvgId)
            .attr("width", totalwidth)
            .attr("height", totalheight);

        var x = 0;
        var y = 0;
        $.each(colorRamps, function (rampIndex, ramp) {

            // wipe out old selection with white background color
            var rect = svg.append("svg:rect")
                .attr("x", x)
                .attr("y", y)
                .attr("height", colorHeight + 2 * yMargin)
                .attr("width", rampWidth + 2 * xMargin)
                .attr('fill', 'white');

            // highlight current selected ramp
            if (rampIndex === currentRampIndex) {
                rect.attr('fill', 'yellow');
            }

            // draw color boxes, listen for mouse click
            x = xMargin;
            $.each(ramp, function (i, color) {
                svg.append("svg:rect")
                    .attr("x", x)
                    .attr("y", y + yMargin)
                    .attr("height", colorHeight)
                    .attr("width", colorWidth)
                    .attr('fill', d3.rgb(color.rgb()))
                    .data([ramp])
                    .on('click', function (d, i) {newRamp(rampIndex); });

                x += colorWidth;
            });
            y += colorHeight + 2 * yMargin;
            x = 0;
        });
    };


    init();

};

ColorRampController.NAME = 'ramp';