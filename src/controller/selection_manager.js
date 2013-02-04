"use strict";
// non enforced poor mans singleton - scandal?
// actually we may eventually have more than 1 selection manager if loading up
// 2 datasets woth separate selection models
var selectionManager = new SelectionManager();

function SelectionManager() {
    
    var views = [];
    // this is a wigglemaps layer object that selects for wigglemap features
    var prevSelectionLayer;

    this.addView = function(view) { views.push(view); }

    this.select = function(newSelectionLayer) {
        $.each(views,function(i,view) {
            if (prevSelectionLayer) view.deselect(prevSelectionLayer);
            view.select(newSelectionLayer);
        } );
        prevSelectionLayer = newSelectionLayer;
    }
}
