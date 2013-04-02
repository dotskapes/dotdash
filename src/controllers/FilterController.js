goog.provide('filterController');

goog.require('filter');

var FilterController = Backbone.View.extend({

    start: function ($parent) {
        $parent.append (this.$el);
        this.render();
        this.wireUp();
    },

    render: function () {
        var container = $(jade.templates.filter());
        this.$el.append(container);
    },

    wireUp: function () {
        var that = this;
        $('#Filter').click(function (evt) {
            that.model.setFilterToSelection();
        });

        $('#FilterOff').click(function (evt) {
            that.model.clear();
        });
    }
});

var filterController = new FilterController({ model: filter });
