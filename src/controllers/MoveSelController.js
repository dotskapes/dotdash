goog.provide('MoveSelController');

goog.require('moveSelModel');

var MoveSelController = Backbone.View.extend({

    initialize : function () {
        this.model = this.model || moveSelModel;
    },

    start: function ($parent) {
        $parent.append (this.$el);
        this.render();
    },

    render: function () {
        var $container = jade.templates.moveSel();
        this.$el.empty().append($container);
    },

    events: {
        "click #move-sel-toggle" : "toggle"
    },

    toggle: function (e) {
        $(e.currentTarget).children('.icon').toggleClass('enabled');
        this.model.toggle();
    }

});
