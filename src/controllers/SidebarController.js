goog.provide('sidebarController');

goog.require('filterController');
goog.require('colorController');

// handles the sidebar - which currently is filter & colorings
var SidebarController = Backbone.View.extend({

    start: function ($parent) {
        $parent.append (this.$el);
        this.render();
    },

    render: function () {
        var container = $(jade.templates.sidebar());
        this.$el.append(container);
        filterController.start(container);
        colorController.start(container);
    }

});

var sidebarController = new SidebarController();