goog.provide('FilterView');

goog.require('ColorRampController');
goog.require('TimeStepController');

var FilterView = function (baseUrl) {

    this.render = function () {
        // hard-coded filters for now
        var filters = [
            { name: TimeStepController.NAME,
              title: 'Time Step',
              options: []
            },
            { name: ColorRampController.CSS_CLASS,
              title: 'Color Ramp',
              options: [{label: 0}, {label: 1}, {label: 2}, {label: 3}, {label: 4}]
            },
            { name: 'dist',
              title: 'Color Distribution',
              options: [{label: 'Quantile'}, {label: 'Uniform'}]
            },
            { name: 'range',
              title: 'Color Scale',
              options: [{label: 'Local'}, {label: 'Global'}]
            },
            { name: 'agg',
              title: 'Aggregate',
              options: [{label: 'Mean'}, {label: 'Max'}, {label: 'Min'}]
            }
        ];

        var template = Handlebars.templates['filter_template'];
        return template({filters: filters});
    };

    this.onChange = function (callback) {
        $('.filter-button').change(function (event) {
            var name = $(event.target).attr('name');
            var value = $(event.target).attr('value');
            callback(name, value);
        });
    };

}