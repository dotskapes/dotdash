goog.provide('filterController');

goog.require('selectionManager');
goog.require('ServiceLayer');

var FilterController = function () {

    var filter;
    var filterActive = false;

    this.isActive = function () { return filterActive; };

    // filter down to the current selection
    this.filterToSelection = function () {
        filter = selectionManager.getSelection();
        filterActive = true;
        panelManager.draw();
    };

    this.clear = function () {
        // set to whole unfiltered layer
        filter = ServiceLayer.getLayerSelector();
        filterActive = false;
        panelManager.draw();
    };

    // returns a layer selector of whats currently filtered.
    // if nothing filtered returns whole layer selector
    this.getFilter = function () {
        if (filter === undefined) {
            filter = ServiceLayer.getLayerSelector();
        }
        return filter;
    };

    this.getUnfiltered = function () {
        if (!filterActive) { return null; }
        return ServiceLayer.getLayerSelector().not(filter);
    };

    this.filter = function (selector) {
        if (filterActive) {
            return selector.both(filter);
        }
        else {
            return selector;
        }
    };

};

var filterController = new FilterController();