goog.provide('TimeStepFilterView');

var TimeStepFilterView = function(baseUrl) {

    this.update = function (timeSteps) {
        $('#step-filter').empty();
        var labels = [];
        $.each(timeSteps, function (i, step) {
            labels.push({label: step});
        });
        return this.render(labels);
    }; 

    this.render = function (labels) {
        var template = Handlebars.templates['radio_button_template'];
        var html = template({options: labels, name: 'step'});
        $('#step-filter').html(html);
    };

};