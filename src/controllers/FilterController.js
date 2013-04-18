goog.provide('FilterController');

goog.require('Filter');

var FilterController = Backbone.View.extend({

    initialize : function (options) {
        this.model = this.model || new Filter();
        this.selectionManager = options.selectionManager;
    },

    start: function ($parent) {
        $parent.append (this.$el);
        this.render();
    },

    render: function () {
        var container = $(jade.templates.filter());
        this.$el.empty().append(container);
    },

    events: {
        "click #filter-selected" : "filterSel",
        "click #filter-off" : "unfilter"
    },

    filterSel: function () {
        this.model.setFilterToSelection(this.selectionManager.getSelection());
    },

    unfilter: function () {
        this.model.clear();
    }

});

