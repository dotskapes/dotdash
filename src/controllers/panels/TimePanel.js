goog.provide('TimePanel');

goog.require('Panel');
goog.require('Popup');

(function() {

    var TimePanel = function (selectionManager, moveSelModel, serviceLayer) {

        // Panel superclass of TimePanel
        Panel.call(this, 'Time Series', 'time', selectionManager, moveSelModel, serviceLayer);

        // wiggle.Graph object
        var graph;
        var layer;
        var that = this;

        this.create = function () {
            this.container = $('<div>').attr('class', 'timeseries');

            this.parentElement.append(this.container);
            this.show();

            this.created = true;
        };

        this.getWiggleView = function () { return graph; };

        this.resize = function () {
            graph.resize();
        };

        this.newData = function (data) {
            layer = data;

            var properties = layer.numeric();
            properties.sort();
            layer.attr('order', properties);

            graph = new wiggle.TimeSeries('.timeseries', layer, {
                'ticks': 500,
                'ylock': true
            });

            wireupGraph();

        };

        var wireupGraph = function () {
            // listen for graph select and send selection to selectionManager
            graph.select(function (box) {
                var selectionLayer = graph.search(layer, box);
                that.fireSelect(selectionLayer);
            });
        };

        // Selection methods/interface - called by SelectionManager
        this.deselect = function (selectionLayer) {

            selectionLayer.style(graph, 'stroke', function (f) {
                return serviceLayer.getColorForFeature(f);
            });
        };

        this.select = function (selectionLayer) {
            selectionLayer.style(graph, 'stroke', ColorMap.HIGHLIGHT);
        };

        // draw graph - without highlight/selection
        this.draw = function (filter) {
            // filtered - set filtered out to opacity 0 - not to be seen
            if (filter.isFiltered()) {
                var filteredOut = filter.getUnfiltered();
                filteredOut.style(graph, 'stroke-opacity', 0);
            }
            //no filter - all features should be seen - opacity 1
            else {
                serviceLayer.getLayerSelector().style(graph, 'stroke-opacity', 1);
            }
            // this should then further select on what is unfiltered out
            // but we are not yet filtering...
            // var unfiltered = filterQueries.get(allFeats);
            layer.features().style(graph, 'stroke', function (f) {
                return serviceLayer.getColorForFeature(f);
            });
        };

    };

    Panel.register('time', TimePanel);

    dash.controllers.panels.TimePanel = TimePanel;

})();
