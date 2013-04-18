goog.provide('ColorController');

goog.require('ColorRampController');
goog.require('TimeStepController');
goog.require('DistribRangeController');
goog.require('AggregationController');

var ColorController = function () {

    this.start = function (parent, dashState) {
        var html = render();
        parent.append(html);
        $('.collapse-toggler').click(function (event) {
            var content = $(event.currentTarget).siblings('.collapsible');
            content.slideToggle();
            $(event.currentTarget).toggleClass('collapsed');
            event.stopPropagation();
        });
        initControllers(dashState);
    };

    var render = function () {
        // hard-coded filters for now
        var colorings = [
            { name: TimeStepController.NAME,
              title: 'Time Step',
              options: []
            },
            { name: ColorRampController.NAME,
              title: 'Color Ramp',
              options: []
            },
            { name: 'dist',
              title: 'Color Distribution',
              options: [ {label: 'Uniform', value: ColorScales.DISTRIBUTION.UNIFORM},
                         {label: 'Quantile', value: ColorScales.DISTRIBUTION.QUANTILE}
                       ]
            },
            { name: AggregationController.NAME,
              title: 'Aggregate',
              options: [ {label: 'None', value: 'none'},
                         {label: 'Mean', value: 'mean'},
                         {label: 'Max', value: 'max'},
                         {label: 'Min', value: 'min'} ]
            }
        ];

        var template = jade.templates.coloring;
        return template({colorings: colorings});
    };

    var initControllers = function (dashState) {
        // take this out and just have events go direct to controller?
        onChange(function (name, value) {
            // controller should do something with this
            console.log(name + ' changed to ' + value);
        });
        var colorRampController = new ColorRampController();
        colorRampController.start(dashState);
        var timeStepController = new TimeStepController();
        timeStepController.start(dashState);
        var distribRangeController = new DistribRangeController();
        distribRangeController.start();
        var aggregationController = new AggregationController();
        aggregationController.start(dashState);
    };

    var onChange = function (callback) {
        $('.filter-button').change(function (event) {
            var name = $(event.target).attr('name');
            var value = $(event.target).attr('value');
            callback(name, value);
        });
    };
};
