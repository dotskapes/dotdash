goog.provide('ColorRampController');

goog.require('ColorRamps');

var ColorRampController = function () {

    var currentRampIndex = 0;
    var filterSelector = '#' + ColorRampController.NAME + '-filter';
    var rampSvgId = 'ramp-svg';

    this.start = function (dashState) {
        render(dashState);
    };

    // a new ramp is being asked for
    var newRamp = function (rampIndex, dashState) {
        dashState.set('colorRamp', ColorRamps.RAMPS[rampIndex]);
        // selection has probably changed, redraw
        currentRampIndex = rampIndex;
        redraw(dashState);
    };

    // wipe out old, and render new. if sel has changed will reflect
    var redraw = function (dashState) {
        d3.select('#' + rampSvgId).remove();
        render(dashState);
    };

    // should this go in crc view??? it has a tiny bit of controller in it
    var render = function (dashState) {
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
                    .on('click', function (d, i) {newRamp(rampIndex, dashState); });

                x += colorWidth;
            });
            y += colorHeight + 2 * yMargin;
            x = 0;
        });
    };
};

ColorRampController.NAME = 'ramp';
