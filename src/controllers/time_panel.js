goog.provide('TimePanel');

goog.require('ServiceLayer');
goog.require('selectionManager');
goog.require('Panel');
goog.require('Popup');
goog.require('SVGSelection');

"use strict";
var TimePanel = function () {

    var configOptions = {selection: {type: Panel.BUTTON_TYPES.SELECTION_TOGGLE,
                                     options: {hoverText:
                                                  {move: "Move Panel",
                                                   select: "Select Time Steps"},
                                               enabled: false}}};

    // Panel superclass of TimePanel
    Panel.call(this,'Time Series','time', configOptions);

    // wiggle.Graph object
    var graph;
    var layer;
    var that = this;

    this.create = function () {
        this.container = $ ('<div>').attr ('id', 'timeseries');

        this.parentElement.append(this.container);
        this.show();

        this.created = true;
    };

    this.resize = function () {
        graph.resize ();
    };

    this.newData = function (data) {
        if (layer) {
            graph.remove (layer);
        }
        layer = data;

        var properties = layer.numeric ();
        properties.sort ();
        layer.attr ('order', properties);


        graph = new wiggle.TimeSeries ('#timeseries',layer,{'ticks': 500 });

        wireupGraph();

        // initial (unselected) coloring
        this.deselect(layer);
        this.draw ();
    };

    var wireupGraph = function() {
        // listen for graph select and send selection to selectionManager
        graph.select(function  (box) {
            selectionLayer = graph.search (layer, box);
            that.fireSelect(selectionLayer);
        });

        $('#time-selection-button').click(function (event) {
            $(event.currentTarget).parents('.view').toggleClass('selection');
            $(event.currentTarget).children('.icon').toggleClass('enabled');
            if ($(event.currentTarget).children('.selection_box').hasClass('enabled')) {
                graph.enableSelect();
            } else {
                graph.disableSelect();
            }
        });
    };

    // Selection methods/interface - called by SelectionManager
    this.deselect = function(selectionLayer) {
        // this should then further select on what is unfiltered out
        // but we are not yet filtering...
        // var unfiltered = filterQueries.get(allFeats);
        selectionLayer.style(graph, 'stroke', function (f) {
            return ServiceLayer.colorMap.colorForFeat (f);
        });
    };

    this.select = function(selectionLayer) {
        selectionLayer.style(graph, 'stroke', ColorMap.HIGHLIGHT);
    };

    // draw graph - without highlight/selection
    this.draw = function() {
        // this should then further select on what is unfiltered out
        // but we are not yet filtering...
        // var unfiltered = filterQueries.get(allFeats);
        layer.features ().style(graph, 'stroke', function (f) {
            return ServiceLayer.colorMap.colorForFeat (f);
        });
    };

};
