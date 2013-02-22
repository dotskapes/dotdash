goog.provide('FilterController');

goog.require('ColorRampController');
goog.require('TimeStepController');

'use strict';
var FilterController = function(parent) {

    var init = function(parent) {
        var html = render();
        parent.prepend(html);
        $('.collapse-toggler').click(function (event) {
            var content = $(event.currentTarget).siblings('.collapsible');
            content.slideToggle();
            $(event.currentTarget).toggleClass('collapsed');
            event.stopPropagation();
        });
        initControllers();
    };

    var render = function () {
        // hard-coded filters for now
        var filters = [
            { name: TimeStepController.NAME,
              title: 'Time Step',
              options: []
            },
            { name: ColorRampController.NAME,
              title: 'Color Ramp',
              options: []//{label: 0}, {label: 1}, {label: 2}, {label: 3}, {label: 4}]
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

    var initControllers = function() {
        // take this out and just have events go direct to controller?
        onChange(function (name, value) {
            // controller should do something with this
            console.log(name + ' changed to ' + value);
        });
        new ColorRampController();
        new TimeStepController();
    };
  
    var onChange = function (callback) {
        $('.filter-button').change(function (event) {
            var name = $(event.target).attr('name');
            var value = $(event.target).attr('value');
            callback(name, value);
        });
    };

    init(parent);

};