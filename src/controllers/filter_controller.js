'use strict';
var FilterController = function(parent) {

    var filterView;
    var colorRampController = new ColorRampController();

    var init = function(parent) {
        filterView = new FilterView();
        // ajax handlebars
        filterView.render().done(function (html) {
            parent.prepend(html);
            initControllers();
        });
    }

    var initControllers = function() {
        filterView.onChange(function (name, value) {
            // controller should do something with this
            console.log(name + ' changed to ' + value);
            //if (name === 'ramp')
              //  colorRampController.newRamp(value);
        });
        new ColorRampController();
    }
  
    init(parent);

}