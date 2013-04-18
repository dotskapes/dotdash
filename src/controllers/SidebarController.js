goog.provide('SidebarController');

goog.require('MoveSelController');
goog.require('FilterController');
goog.require('ColorController');

// handles the sidebar - which currently is filter & colorings
var SidebarController = Backbone.View.extend({

    start: function ($parent, options) {
        $parent.append (this.$el);
        this.render(options);
    },

    render: function (options) {
        var container = $(jade.templates.sidebar()); // just a div
        this.$el.empty().append(container);
        var moveSelController = new MoveSelController({model: options.moveSelModel});
        moveSelController.start(container);
        var filterController = new FilterController({model: options.filter,
                                                     selectionManager: options.selectionManager});
        filterController.start(container);
        var colorController = new ColorController();
        colorController.start(container, options.dashState, options.aggregateModel, options.serviceLayer);
    }

});
