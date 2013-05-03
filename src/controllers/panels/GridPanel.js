goog.provide('GridPanel');

goog.require('ColorMap');
goog.require('Panel');

(function() {

    var GridPanel = function (selectionManager, moveSelModel, serviceLayer) {

        var FILL_OPACITY = 0.9;

        // this basically makes Panel the superclass of GridPanel
        Panel.call(this, 'Grid', 'grid', selectionManager, moveSelModel, serviceLayer);

        var grid;
        var layer;
        var that = this;

        this.getGrid = function () { return grid; }
        this.getWiggleView = function () { return grid; }

        this.create = function () {
            this.container = $('<div>').attr('class', 'grid');

            this.parentElement.append(this.container);
            this.show();

            grid = new wiggle.Map('.grid');

            // wireupGrid();
            this.created = true;
        }
        
        this.newData = function (data) {
            
            if (layer) {
                grid.remove(layer);
            }
            layer = data;

            // layer.features.style...
            
        }

        this.draw = function (layerSelector, filter) {
            // dont think filtering makes any sense for grid??
            //if (filter.isFiltered()) {}
            // ???
            serviceLayer.getLayerSelector().style(grid, 'fill-opacity', FILL_OPACITY)
                .style(grid, 'stroke-opacity', 1);
            // copied from map ??? will serviceLayer have colors for features? it should
            layerSelector.style(grid, 'fill', function (f) {
                return serviceLayer.getColorForFeature(f);
            });
        }

        var wireupGrid = function () {
            // is there anything interesting to select
            //grid.select(function (box) {});
        }

    }

    Panel.register('grid', GridPanel);

    dash.controllers.panels.GridPanel = GridPanel;

})();