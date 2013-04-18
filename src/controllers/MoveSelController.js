goog.provide('MoveSelController');

goog.require('MoveSelModel');

var MoveSelController = Backbone.View.extend({

    initialize : function () {
        this.model = this.model || new MoveSelModel();
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
