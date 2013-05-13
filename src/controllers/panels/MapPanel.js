goog.provide('MapPanel');

goog.require('ColorMap');
goog.require('Panel');

(function() {

    var MapPanel = function (selectionManager, moveSelModel, serviceLayer) {

        var FILL_OPACITY = 0.9;

        // this basically makes Panel the superclass of MapPanel
        Panel.call(this, 'Map', 'map', selectionManager, moveSelModel, serviceLayer);

        // wiggle.Map object
        var map;
        var layer;
        var overlay;
        var that = this;
        var selectModeOn = false;

        this.getMap = function () { return map; };

        // if panel has a wiggle view of some sort then return it, in this case map
        this.getWiggleView = function () { return map; };

        this.create = function () {
            this.container = $('<div>').attr('class', 'wigglemap');

            this.parentElement.append(this.container);
            this.show();

            map = new wiggle.Map('.wigglemap');
            wireupMap();
            this.created = true;
        };

        this.newData = function (data) {
            if (layer) {
                map.remove(layer);
            }
            layer = data;

            layer.features().type('Polygon')
                .style(map, 'stroke', ColorMap.WHITE)
                .style(map, 'fill-opacity', FILL_OPACITY);

            map.center(layer.bounds.centroid());
            map.extents(layer.bounds.width());
            map.append(layer);
        };

        this.newOverlay = function (data) {
            if (overlay) {
                map.remove(overlay);
            }
            overlay = data;

            overlay.features()
                .style(map, 'stroke', ColorMap.HIGHLIGHT)
                .style(map, 'fill-opacity', FILL_OPACITY)
                .style(map, 'fill', function (f) { return ColorMap.HIGHLIGHT; });

            map.append(overlay);
        };

        // move/select is dealt with in super class panel
        var wireupMap = function () {
            // listen for map select and send selection to selectionManager
            map.select(function (box) {
                // faster to box whole layer than filtered layer according to zack
                var selectionLayerSelector = map.search(layer, box);

                // call to panel.js superclass
                that.fireSelect(selectionLayerSelector);
            });
        };

        // Selection methods/interface - called by SelectionManager
        this.deselect = function (selectionLayer) {
            selectionLayer.style(map, 'fill', function (f) {
                return serviceLayer.getColorForFeature(f);
            });
        };

        this.select = function (selectionLayer) {
            selectionLayer.style(map, 'fill', ColorMap.HIGHLIGHT);
        };

        // draw map - without highlight/selection
        this.draw = function (filter) {
            // some of this logic belong in panel_man?
            // filtered - set filtered out to opacity 0 - not to be seen
            if (filter.isFiltered()) {
                var filteredOut = filter.getUnfiltered();
                filteredOut.style(map, 'fill-opacity', 0)
                    .style(map, 'stroke-opacity', 0);
            }
            //no filter - all features should be seen - opacity 1
            else {
                serviceLayer.getLayerSelector().style(map, 'fill-opacity', FILL_OPACITY)
                    .style(map, 'stroke-opacity', 1);
            }

            // map is layer selector funniness. it tells layer selector to ONLY apply
            // this styling to the map 'engine', which it happens to know about.
            // MVC violation? discuss. rationalization: selectors are controller not model
            // draw all features, but ones with 0 above are not actually seen
            filter.getLayerSelector().style(map, 'fill', function (f) {
                return serviceLayer.getColorForFeature(f);
            });
        };

    };

    Panel.register('map', MapPanel);

    dash.controllers.panels.MapPanel = MapPanel;

})();

