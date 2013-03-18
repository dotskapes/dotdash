goog.provide('selectionManager');

var SelectionManager = function () {

    var views = [];
    // this is a wigglemaps layer selector that selects for wigglemap features
    var selection;
    var multiSelect = false;
    var SHIFT = 16;

    var addKeyListeners = function () {
        $(document).on('keydown', function (e) {
            if (e.which === SHIFT) { multiSelect = true; }
        });
        $(document).on('keyup', function (e) {
            if (e.which === SHIFT) { multiSelect = false; }
        });
    };

    this.addView = function (view) { views.push(view); };

    this.getSelection = function () { return selection; };

    // new Selection is a layer selector
    this.select = function (newSelection) {
        // for optimization purposes (faster to select on whole layer)a selection
        // layer selector may actually contain items outside filter. strip em.
        newSelection = filterController.filter(newSelection);

        $.each(views, function (i, view) {
            // deselect if not multi & have something to desel
            if (!multiSelect && selection) {
                view.deselect(selection);
            }
            // do selection
            view.select(newSelection);
        });
        if (!selection || !multiSelect) {
            selection = newSelection;
        }
        // if multi (&& have cur), join new selection to current (for desel later)
        else {
            selection = selection.join(newSelection);
        }
    };

    // reselect the current selection, needed if selection got lost(redraw)
    this.reselect = function () {
        if (selection) {
            this.select(selection);
        }
    };

    addKeyListeners();
};

// non enforced poor mans singleton - scandal?
// actually we may eventually have more than 1 selection manager if loading up
// 2 datasets woth separate selection models
var selectionManager = new SelectionManager();