goog.provide('selectionManager');

var SelectionManager = function () {

    var views = [];
    // this is a wigglemaps layer selector that selects for wigglemap features
    var currentSelectionLayer;
    var multiSelect = false;

    var addKeyListeners = function () {
        $(document).on('keydown', function (e) {
            if (e.which === 16) { multiSelect = true; }
        });
        $(document).on('keyup', function (e) {
            if (e.which === 16) { multiSelect = false; }
        });
    };

    this.addView = function (view) { views.push(view); };

    this.select = function (newSelectionLayer) {
        $.each(views, function (i, view) {
            // deselect if not multi & have something to desel
            if (!multiSelect && currentSelectionLayer) {
                view.deselect(currentSelectionLayer);
            }
            // do selection
            view.select(newSelectionLayer);
        });
        if (!currentSelectionLayer || !multiSelect) {
            currentSelectionLayer = newSelectionLayer;
        }
        // if multi (&& have cur), join new selection to current (for desel later)
        else {
            currentSelectionLayer = currentSelectionLayer.join(newSelectionLayer);
        }
    };

    // reselect the current selection, needed if selection got lost(redraw)
    this.reselect = function () {
        if (currentSelectionLayer) {
            this.select(currentSelectionLayer);
        }
    };

    addKeyListeners();
};

// non enforced poor mans singleton - scandal?
// actually we may eventually have more than 1 selection manager if loading up
// 2 datasets woth separate selection models
var selectionManager = new SelectionManager();