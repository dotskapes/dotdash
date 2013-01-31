function FilterView () {

    this.render = function () {
        // hard-coded filters for now
        var filters = [
            { name: 'step',
              title: 'Time Step',
              options: [{ value: 'jan' }, 
                        { value: 'feb' }, 
                        { value: 'mar' }, 
                        { value: 'apr' }, 
                        { value: 'may' }, 
                        { value: 'jun' }, 
                        { value: 'jul' }, 
                        { value: 'aug' }, 
                        { value: 'sep' }, 
                        { value: 'oct' }, 
                        { value: 'nov' }, 
                        { value: 'dec' }]
            },
            { name: 'ramp',
              title: 'Color Ramp',
              options: [{value: 0}, {value: 1}, {value: 2}, {value: 3}, {value: 4}]
            },
            { name: 'dist',
              title: 'Color Distribution',
              options: [{value: 'Quantile'}, {value: 'Uniform'}]
            },
            { name: 'range',
              title: 'Color Scale',
              options: [{value: 'Local'}, {value: 'Global'}]
            },
            { name: 'agg',
              title: 'Aggregate',
              options: [{value: 'Mean'}, {value: 'Max'}, {value: 'Min'}]
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