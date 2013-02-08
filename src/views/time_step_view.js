function TimeStepView (baseUrl) {

    this.update = function (timeSteps) {
        $('#step-filter').empty();
        var labels = [];
        $.each(timeSteps, function (i, step) {
            labels.push({label: step});
        });
        return this.render(labels);
    }; 

    this.render = function (labels) {
        var renderer = $.Deferred();
        
        var templateLoader = $.ajax({
            url: baseUrl + 'src/templates/radio_button_template.hb'
        });

        templateLoader.done(function (template) {
            var compiled = Handlebars.compile(template);
            var html = compiled({options: labels, name: 'step'});
            $('#step-filter').html(html);
            renderer.resolve();
        });

        return renderer.promise();
    };

};