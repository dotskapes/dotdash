goog.provide('FilterView');

goog.require('ColorRampController');
goog.require('TimeStepController');

function FilterView (baseUrl) {

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

        var viewRenderer = $.Deferred();

        var templateLoader = $.ajax({
            url: baseUrl + 'src/templates/filter_template.hb'
        });

        templateLoader.done(function (template) {
            var compiled = Handlebars.compile(template);
            var html = compiled({filters: filters});
            viewRenderer.resolve(html);
        });

        return viewRenderer.promise();
    };

    this.onChange = function (callback) {
        $('.filter-button').change(function (event) {
            var name = $(event.target).attr('name');
            var value = $(event.target).attr('value');
            callback(name, value);
        });
    };

}