goog.provide('filterController');

goog.require('filter');

var FilterController = Backbone.View.extend({

    start: function ($parent) {
        $parent.append (this.$el);
        this.render();
    },

    render: function () {
        var container = $(jade.templates.filter());
        this.$el.append(container);
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

var filterController = new FilterController({ model: filter });
