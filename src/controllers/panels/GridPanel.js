goog.provide('GridPanel');

goog.require('ColorMap');
goog.require('Panel');

(function() {

    var GridPanel = function (selectionManager, moveSelModel, serviceLayer) {

        var FILL_OPACITY = 0.9;

        // this basically makes Panel the superclass of GridPanel
        Panel.call(this, 'Grid', 'grid', selectionManager, moveSelModel, serviceLayer);

        var gridMap;
        var layer;
        var that = this;

        this.getGrid = function () { return gridMap; };
        this.getWiggleView = function () { return gridMap; };

        this.create = function () {
            this.container = $('<div>').attr('class', 'grid');

            this.parentElement.append(this.container);
            this.show();

            gridMap = new wiggle.Map('.grid');

            // wireupGrid();
            this.created = true;
        };

        this.newData = function (data) {

            if (layer) {
                gridMap.remove(layer);
            }
            layer = data;

            // layer.features.style...

        };

        this.draw = function (layerSelector, filter) {
            // dont think filtering makes any sense for grid??
            //if (filter.isFiltered()) {}
            // ???
            //serviceLayer.getLayerSelector().style(gridMap, 'fill-opacity', FILL_OPACITY)
              //  .style(gridMap, 'stroke-opacity', 1);
            // copied from map ??? will serviceLayer have colors for features? it should
            //layerSelector.style(gridMap, 'fill', function (f) {
              //  return serviceLayer.getColorForFeature(f);
            //});


            var black = wiggle.util.icolor (0, 0, 0, 0);
            var ramp = [
                wiggle.util.icolor (178, 24, 43, 255),
                wiggle.util.icolor (239, 138, 98, 255),
                wiggle.util.icolor (253, 219, 199, 255),
                wiggle.util.icolor (209, 169, 207, 255),
                wiggle.util.icolor (103, 169, 207, 255),
                wiggle.util.icolor (33, 102, 172, 255),
            ];
            
            var grid = wiggle.io.AsciiGrid(layer, {
                map: function(min, max, val) {
                    if (isNaN(val))
                        return black;
                    var tol = .05 * (max - min)
                    var index = Math.floor(ramp.length * (max - val + tol) / (max - min + 2 * tol));
                    if (index >= ramp.length || ramp < 0)
                        throw "bad";
                    return ramp[index];
                }//,
                //blur: true
            });

            gridMap.append(grid);
            
        };

        var wireupGrid = function () {
            // is there anything interesting to select
            //grid.select(function (box) {});
        };

    };

    Panel.register('grid', GridPanel);

    dash.controllers.panels.GridPanel = GridPanel;

})();