goog.provide('TimeStepFilterView');

var TimeStepFilterView = function() {

    this.update = function (timeSteps) {
        $('#step-filter').empty();
        var labels = [];
        $.each(timeSteps, function (i, step) {
            labels.push({label: step, name: step});
        });
        return this.render(labels);
    };

    this.render = function (labels) {
        var template = Handlebars.templates.select_and_options;
        var params = { selClass: TimeStepFilterView.CLASS,
                       options: labels };
        var html = template(params);
        $('#' + TimeStepFilterView.NAME + '-filter').html(html);
    };

};

TimeStepFilterView.NAME = 'step';
TimeStepFilterView.CLASS = TimeStepFilterView.NAME + '-select';