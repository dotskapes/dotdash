goog.provide('filterController');

goog.require('colorRampController');
goog.require('timeStepController');
goog.require('distribRangeController');

var FilterController = function () {

    this.start = function (parent) {
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
              options: []
            },
            { name: 'dist_range',
              title: 'Color Distribution & Range',
              radioSubGroups: true,
              options: [ { name: DistribRangeController.DISTRIB,
                           subOptions: [{label: 'Quantile'}, {label: 'Uniform'}] },
                         { name: DistribRangeController.RANGE,
                           subOptions: [{label: 'Local'}, {label: 'Global'}] } ]
            },
            { name: 'agg',
              title: 'Aggregate',
              options: [{label: 'Mean'}, {label: 'Max'}, {label: 'Min'}]
            }
        ];

        var template = Handlebars.templates.filter_template;
        return template({filters: filters});
    };

    var initControllers = function () {
        // take this out and just have events go direct to controller?
        onChange(function (name, value) {
            // controller should do something with this
            console.log(name + ' changed to ' + value);
        });
        colorRampController.start();
        timeStepController.start();
        distribRangeController.start();
    };

    var onChange = function (callback) {
        $('.filter-button').change(function (event) {
            var name = $(event.target).attr('name');
            var value = $(event.target).attr('value');
            callback(name, value);
        });
    };
};

var filterController = new FilterController();