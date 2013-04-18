goog.provide('Filter');

// model for filtering. keeps the filter layer selector, which has all the 
// features that are currently filtered in. and keeps state as to whether filtering
// is currently active

var Filter = Backbone.Model.extend({
    defaults: {
        // filter selector layer (from wiggle maps)
        filterSelector: undefined
    },

    isFiltered: function () {
        return this.get('filterSelector') !== undefined;
    },

    // set the filter to currently selected
    setFilterToSelection: function (selection) {
        this.set('filterSelector', selection);
    },

    // filter the selector. that is return the intersection of filter & selector
    // ie selector minus any unfiltered features.
    // handy if easier to work unfiltered & apply filter later
    filter: function (selector) {
        if (this.isFiltered()) {
            return selector.both(this.get('filterSelector'));
        }
        else {
            return selector;
        }
    },

    clear: function () {
        this.set('filterSelector', undefined);
    },

    // returns a layer selector of whats currently filtered.
    // if nothing filtered returns whole layer selector
    getFilter: function () {
        if (this.isFiltered()) { return this.get('filterSelector'); }
        else { return this.get('serviceLayer').getLayerSelector(); }
    },

    // return layer selector of all features filtered out
    getUnfiltered: function () {
        if (!this.isFiltered()) { return null; }
        return this.get('serviceLayer').getLayerSelector().not(this.get('filterSelector'));
    }
});

