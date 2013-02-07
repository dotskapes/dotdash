'use strict';
var FilterController = function(parent,baseUrl) {

    var filterView;
    var colorRampController = new ColorRampController();

    var init = function(parent) {
        filterView = new FilterView(baseUrl);
        // ajax handlebars
        filterView.render().done(function (html) {
            parent.prepend(html);
            initControllers();
        });
    }

    var initControllers = function() {
        // take this out and just have events go direct to controller?
        filterView.onChange(function (name, value) {
            // controller should do something with this
            console.log(name + ' changed to ' + value);
        });
        new ColorRampController();
    }
  
    init(parent);

}