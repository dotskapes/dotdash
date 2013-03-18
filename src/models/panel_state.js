goog.provide('panelState');

goog.require('dashState');

var PanelState = Backbone.Model.extend({
    defaults: {
        panels: [],
        left: 0,
        right: 1
    },
    
    findPanel: function (name) {
        var panels = this.get('panels');
        for (var i = 0; i < panels.length; i ++) {
            if (panels[i].name === name) {
                return panels[i];
            }
        }
        return null;
    },

    getPanel: function (index) {
        return this.get('panels')[index]; 
    }
});

var panelState = new PanelState({
    panels: [new MapPanel(), new TimePanel(), new MDSPanel()],
});
