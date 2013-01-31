function FilterView () {

    this.render = function () {
        // hard-coded filters for now
        var filters = [
            { name: 'step',
              title: 'Time Step',
              values: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
            },
            { name: 'ramp',
              title: 'Color Ramp',
              values: [0, 1, 2, 3, 4]
            },
            { name: 'dist',
              title: 'Color Distribution',
              values: [0, 1]
            },
            { name: 'range',
              title: 'Color Scale',
              values: [0, 1]
            }
        ];

        var viewRenderer = $.Deferred();

        var templateLoader = $.ajax({
            url: 'src/templates/filter_template.hb'
        });

        templateLoader.done(function (template) {
            var compiled = Handlebars.compile(template);
            var html = compiled({filters: filters});
            viewRenderer.resolve(html);
        });

        return viewRenderer.promise();
    };

}