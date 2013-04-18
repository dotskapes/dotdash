goog.provide('FilterController');

goog.require('filter');

var FilterController = Backbone.View.extend({

    initialize : function () {
        this.model = this.model || filter;
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
        this.model.setFilterToSelection();
    },

    unfilter: function () {
        this.model.clear();
    }

});

