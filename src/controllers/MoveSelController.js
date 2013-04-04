goog.provide('moveSelController');

goog.require('moveSelModel');

var MoveSelController = Backbone.View.extend({

    start: function ($parent) {
        $parent.append (this.$el);
        this.render();
        //this.model.on('change', this.modelChanged);
    },

    render: function () {
        var container = $(jade.templates.moveSel());
        this.$el.append(container);
    },

    events: {
        "click #move-sel-toggle" : "toggle"
    },

    toggle: function (e) {
        $(e.currentTarget).children('.icon').toggleClass('enabled');
        this.model.toggle();
    }

});

var moveSelController = new MoveSelController({ model: moveSelModel });
