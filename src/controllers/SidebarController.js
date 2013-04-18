goog.provide('SidebarController');

goog.require('MoveSelController');
goog.require('FilterController');
goog.require('ColorController');

// handles the sidebar - which currently is filter & colorings
var SidebarController = Backbone.View.extend({

    start: function ($parent, dashState) {
        $parent.append (this.$el);
        this.render(dashState);
    },

    render: function (dashState) {
        var container = $(jade.templates.sidebar()); // just a div
        this.$el.empty().append(container);
        var moveSelController = new MoveSelController();
        moveSelController.start(container);
        var filterController = new FilterController();
        filterController.start(container);
        var colorController = new ColorController();
        colorController.start(container, dashState);
    }

});
