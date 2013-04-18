goog.provide('SidebarController');

goog.require('MoveSelController');
goog.require('FilterController');
goog.require('ColorController');

// handles the sidebar - which currently is filter & colorings
var SidebarController = Backbone.View.extend({

    start: function ($parent, dashState, moveSelModel, filter, selectionManager) {
        $parent.append (this.$el);
        this.render(dashState, moveSelModel, filter, selectionManager);
    },

    render: function (dashState, moveSelModel, filter, selectionManager) {
        var container = $(jade.templates.sidebar()); // just a div
        this.$el.empty().append(container);
        var moveSelController = new MoveSelController({model: moveSelModel});
        moveSelController.start(container);
        var filterController = new FilterController({model: filter, selectionManager: selectionManager});
        filterController.start(container);
        var colorController = new ColorController();
        colorController.start(container, dashState);
    }

});
