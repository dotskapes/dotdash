goog.provide('SidebarController');

goog.require('moveSelController');
goog.require('filterController');
goog.require('colorController');

// handles the sidebar - which currently is filter & colorings
var SidebarController = Backbone.View.extend({

    start: function ($parent, dashState) {
        $parent.append (this.$el);
        this.render(dashState);
    },

    render: function (dashState) {
        var container = $(jade.templates.sidebar()); // just a div
        this.$el.empty().append(container);
        moveSelController.start(container);
        filterController.start(container);
        colorController.start(container, dashState);
    }

});
