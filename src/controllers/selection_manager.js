goog.provide('selectionManager');

"use strict";
// non enforced poor mans singleton - scandal?
// actually we may eventually have more than 1 selection manager if loading up
// 2 datasets woth separate selection models
var selectionManager = new SelectionManager();

function SelectionManager() {
    
    var views = [];
    // this is a wigglemaps layer selector that selects for wigglemap features
    var currentSelectionLayer;

    this.addView = function(view) { views.push(view); }

    this.select = function(newSelectionLayer) {
        $.each(views,function(i,view) {
            if (currentSelectionLayer) view.deselect(currentSelectionLayer);
            view.select(newSelectionLayer);
        } );
        currentSelectionLayer = newSelectionLayer;
    }

    // reselect the current selection, needed if selection got lost(redraw)
    this.reselect = function() {
        if (currentSelectionLayer)
            this.select(currentSelectionLayer);
    }

}
