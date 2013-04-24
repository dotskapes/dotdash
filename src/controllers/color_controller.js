goog.provide('ColorController');

goog.require('ColorRampController');
goog.require('TimeStepController');
goog.require('DistribRangeController');
goog.require('AggregationController');

var ColorController = Backbone.View.extend({

    start : function (parent, dashState, aggregateModel, serviceLayer) {
        parent.append(this.$el);
        this.render(dashState);
        this.$('.collapse-toggler').click(function (event) {
            var content = $(event.currentTarget).siblings('.collapsible');
            content.slideToggle();
            $(event.currentTarget).toggleClass('collapsed');
            event.stopPropagation();
        });
        this.initControllers(dashState, aggregateModel, serviceLayer);
    },

    render : function (dashState) {
        var selectedAgg = dashState.get('agg');
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
              options: [ {label: 'Uniform', value: ColorScales.DISTRIBUTION.UNIFORM, selected: true},
                         {label: 'Quantile', value: ColorScales.DISTRIBUTION.QUANTILE}
                       ]
            },
            { name: AggregationController.NAME,
              title: 'Aggregate',
              options: [ {label: 'None', value: 'none', selected: (selectedAgg === 'none')},
                         {label: 'Mean', value: 'mean', selected: (selectedAgg === 'mean')},
                         {label: 'Max', value: 'max', selected: (selectedAgg === 'max')},
                         {label: 'Min', value: 'min', selected: (selectedAgg === 'min')} ]
            }
        ];

        var template = jade.templates.coloring;
        this.$el.empty().append(template({colorings: colorings}));
    },

    initControllers : function (dashState, aggregateModel, serviceLayer) {

        var onChange = _.bind(function (callback) {
            this.$('.filter-button').change(function (event) {
                var name = $(event.target).attr('name');
                var value = $(event.target).attr('value');
                callback(name, value);
            });
        }, this);

        // take this out and just have events go direct to controller?
        onChange(function (name, value) {
            // controller should do something with this
            console.log(name + ' changed to ' + value);
        });
        var colorRampController = new ColorRampController({
            el: this.$('.' + ColorRampController.NAME + '-filter')
        });
        colorRampController.start(dashState);
        var timeStepController = new TimeStepController();
        timeStepController.start(dashState, serviceLayer);
        var distribRangeController = new DistribRangeController();
        distribRangeController.start(dashState);
        var aggregationController = new AggregationController();
        aggregationController.start(dashState, aggregateModel, serviceLayer);
    }
});
