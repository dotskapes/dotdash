goog.provide('MoveSelModel');

var MoveSelModel = Backbone.Model.extend({
    defaults: {
        isMove: true,
        selectOverride: false
    },

    toggle: function () {
        var newState = !(this.get('isMove'));
        this.set({isMove: newState});
    },

    isMoveMode: function () {
        return this.get('isMove') && !this.get('selectOverride');
    }
});

