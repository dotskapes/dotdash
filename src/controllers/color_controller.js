goog.provide('ColorController');

goog.require('ColorRampController');
goog.require('TimeStepController');
goog.require('DistribRangeController');
goog.require('AggregationController');

var ColorController = Backbone.View.extend({

    start : function (parent, dashState, aggregateModel, serviceLayer) {
        parent.append(this.$el);
        this.render();
        this.$('.collapse-toggler').click(function (event) {
            var content = $(event.currentTarget).siblings('.collapsible');
            content.slideToggle();
            $(event.currentTarget).toggleClass('collapsed');
            event.stopPropagation();
        });
        this.initControllers(dashState, aggregateModel, serviceLayer);
    },

    render : function () {
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
        this.$el.empty().append(template({colorings: colorings}));
    },

    initControllers : function (dashState, aggregateModel, serviceLayer) {

        var onChange = function (callback) {
            this.$('.filter-button').change(function (event) {
                var name = $(event.target).attr('name');
                var value = $(event.target).attr('value');
                callback(name, value);
            });
        };

        // take this out and just have events go direct to controller?
        onChange(function (name, value) {
            // controller should do something with this
            console.log(name + ' changed to ' + value);
        });
        var colorRampController = new ColorRampController();
        colorRampController.start(dashState);
        var timeStepController = new TimeStepController();
        timeStepController.start(dashState, serviceLayer);
        var distribRangeController = new DistribRangeController();
        distribRangeController.start(dashState);
        var aggregationController = new AggregationController();
        aggregationController.start(dashState, aggregateModel, serviceLayer);
    }
});
