goog.provide('ColorRampController');

goog.require('ColorRamps');

var ColorRampController = Backbone.View.extend({

    initialize : function () {
        this.currentRampIndex = 0;
        this.filterSelector = '.' + ColorRampController.NAME + '-filter';
        this.rampSvgClass = 'ramp-svg';
    },

    start : function (dashState) {
        this.dashState = dashState;
        this.render(dashState);
    },

    // a new ramp is being asked for
    newRamp : function (rampIndex, dashState) {
        this.dashState.set('colorRamp', ColorRamps.RAMPS[rampIndex]);
        // selection has probably changed, redraw
        this.currentRampIndex = rampIndex;
        this.redraw(this.dashState);
    },

    // wipe out old, and render new. if sel has changed will reflect
    redraw : function (dashState) {
        d3.select('.' + this.rampSvgClass).remove();
        this.render(dashState);
    },

    // should this go in crc view??? it has a tiny bit of controller in it
    render : function (dashState) {
        var xMargin = 3;
        var yMargin = 3;
        var colorWidth = 20;
        var colorHeight = colorWidth;
        var colorRamps = ColorRamps.RAMPS;
        var totalheight = colorRamps.length * (colorHeight + 2 * yMargin);
        var rampWidth = ColorRamps.NUM_COLORS * colorWidth;
        var totalwidth =  rampWidth + 2 * xMargin;

        // svg container
        var svg = d3.select(this.filterSelector)
            .append("svg:svg")
            .attr('class', this.rampSvgClass)
            .attr("width", totalwidth)
            .attr("height", totalheight);

        var x = 0;
        var y = 0;
        _.each(colorRamps, function (ramp, rampIndex) {

            // wipe out old selection with white background color
            var rect = svg.append("svg:rect")
                .attr("x", x)
                .attr("y", y)
                .attr("height", colorHeight + 2 * yMargin)
                .attr("width", rampWidth + 2 * xMargin)
                .attr('fill', 'white');

            // highlight current selected ramp
            if (rampIndex === this.currentRampIndex) {
                rect.attr('fill', 'yellow');
            }

            // draw color boxes, listen for mouse click
            x = xMargin;
            _.each(ramp, function (color, i) {
                svg.append("svg:rect")
                    .attr("x", x)
                    .attr("y", y + yMargin)
                    .attr("height", colorHeight)
                    .attr("width", colorWidth)
                    .attr('fill', d3.rgb(color.rgb()))
                    .data([ramp])
                    .on('click', _.bind(function (d, i) {
                        this.newRamp(rampIndex, dashState);
                    }, this));

                x += colorWidth;
            }, this);
            y += colorHeight + 2 * yMargin;
            x = 0;
        }, this);
    }
});

ColorRampController.NAME = 'ramp';
