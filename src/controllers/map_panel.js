goog.provide('MapPanel');

goog.require('ColorMap');
goog.require('ServiceLayer');
goog.require('selectionManager');
goog.require('Panel');
goog.require('filter');

var MapPanel = function () {

    var configOptions = {selection: {type: Panel.BUTTON_TYPES.SELECTION_TOGGLE,
                                     options: {hoverText:
                                                  {move: "Move Map",
                                                   select: "Select Features"},
                                               enabled: false}},
                         filter: {type: Panel.BUTTON_TYPES.FILTER,
                                  options: {hoverText:
                                            { filter: "Filter" }
                                           }
                                 }};

    var FILL_OPACITY = 0.9;

    // this basically makes Panel the superclass of MapPanel
    Panel.call(this, 'Map', 'map', configOptions);

    // wiggle.Map object
    var map;
    var layer;
    var that = this;
    var selectModeOn = false;

    this.getMap = function () { return map; };

    this.create = function () {
        this.container = $('<div>').attr('id', 'wigglemap');

        this.parentElement.append(this.container);
        this.show();

        map = new wiggle.Map('#wigglemap');
        wireupMap();
        this.created = true;
    };

    this.resize = function () {
        map.resize();
    };

    this.newData = function (data) {
        if (layer) {
            map.remove(layer);
        }
        layer = data;

        layer.features()
            .style(map, 'stroke', ColorMap.WHITE)
            .style(map, 'fill-opacity', FILL_OPACITY);

        map.center(layer.bounds.centroid());
        map.extents(layer.bounds.width());
        map.append(layer);
    };

    var wireupMap = function () {
        // listen for map select and send selection to selectionManager
        map.select(function (box) {
            // faster to box whole layer than filtered layer according to zack
            var selectionLayerSelector = map.search(layer, box);

            // call to panel.js superclass
            that.fireSelect(selectionLayerSelector);
        });

        $('#map-selection-button').click(function (event) {
            $(event.currentTarget).parents('.view').toggleClass('selection');
            $(event.currentTarget).children('.icon').toggleClass('enabled');
            selectModeOn =
                $(event.currentTarget).children('.selection_box').hasClass('enabled');
            that.tempSelectMode(selectModeOn);
        });

        filterBtn().click(function (event) {
            filter.filterToSelection();
        });

        filterOffBtn().click(function (event) {
            filter.clear();
        });
    };

    this.tempSelectMode = function (selectOn) {
        if (selectOn) { map.enableSelect(); }
        // only disable select if both temp selectOn & selectModeOn are false
        else if (!selectModeOn) { map.disableSelect(); }
    };

    var filterBtn = function () { return $('#' + MapPanel.FILTER_ID); };
    var filterOffBtn = function () { return $('#' + MapPanel.FILTER_OFF_ID); };

    // Selection methods/interface - called by SelectionManager
    this.deselect = function (selectionLayer) {
        // this should then further select on what is unfiltered out
        // but we are not yet filtering...
        // var unfiltered = filterQueries.get(allFeats);
        selectionLayer.style(map, 'fill', function (f) {
            return ServiceLayer.getColorForFeature(f);
        });
    };

    this.select = function (selectionLayer) {
        selectionLayer.style(map, 'fill', ColorMap.HIGHLIGHT);
    };

    // draw map - without highlight/selection
    this.draw = function (layerSelector) {
        // some of this logic belong in panel_man?
        if (filter.isFiltered()) {
            var filteredOut = filter.getUnfiltered();
            filteredOut.style(map, 'fill-opacity', 0)
                .style(map, 'stroke-opacity', 0);
        }
        else {
            ServiceLayer.getLayerSelector().style(map, 'fill-opacity', FILL_OPACITY)
                .style(map, 'stroke-opacity', 1);
        }

        // map is layer selector funniness. it tells layer selector to ONLY apply
        // this styling to the map 'engine', which it happens to know about.
        // MVC violation? discuss. rationalization: selectors are controller not model
        layerSelector.style(map, 'fill', function (f) {
            return ServiceLayer.getColorForFeature(f);
        });
    };

};

MapPanel.FILTER_ID = 'mapFilter';
MapPanel.FILTER_OFF_ID = 'mapFilterOff';
