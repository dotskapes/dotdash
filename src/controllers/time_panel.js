goog.provide('TimePanel');

goog.require('ServiceLayer');
goog.require('selectionManager');
goog.require('Panel');
goog.require('Popup');

var TimePanel = function () {

    // Panel superclass of TimePanel
    Panel.call(this, 'Time Series', 'time');

    // wiggle.Graph object
    var graph;
    var layer;
    var that = this;

    this.create = function () {
        this.container = $('<div>').attr('id', 'timeseries');

        this.parentElement.append(this.container);
        this.show();

        this.created = true;
    };

    this.getWiggleView = function () { return graph; };

    this.resize = function () {
        graph.resize();
    };

    this.newData = function (data) {
        if (layer) {
            graph.remove(layer);
        }
        layer = data;

        var properties = layer.numeric();
        properties.sort();
        layer.attr('order', properties);

        graph = new wiggle.TimeSeries('#timeseries', layer, {
            'ticks': 500,
            'ylock': true
        });

        wireupGraph();

    };

    var wireupGraph = function () {
        // listen for graph select and send selection to selectionManager
        graph.select(function (box) {
            selectionLayer = graph.search(layer, box);
            that.fireSelect(selectionLayer);
        });
    };

    // Selection methods/interface - called by SelectionManager
    this.deselect = function (selectionLayer) {
        // this should then further select on what is unfiltered out
        // but we are not yet filtering...
        // var unfiltered = filterQueries.get(allFeats);
        selectionLayer.style(graph, 'stroke', function (f) {
            return ServiceLayer.getColorForFeature(f);
        });
    };

    this.select = function (selectionLayer) {
        selectionLayer.style(graph, 'stroke', ColorMap.HIGHLIGHT);
    };

    // draw graph - without highlight/selection
    this.draw = function () {
        // this should then further select on what is unfiltered out
        // but we are not yet filtering...
        // var unfiltered = filterQueries.get(allFeats);
        layer.features().style(graph, 'stroke', function (f) {
            return ServiceLayer.getColorForFeature(f);
        });
    };

};
