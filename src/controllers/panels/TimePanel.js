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

        this.xlabel = $('<div>').addClass('label').addClass('xlabel');
        this.ylabel = $('<div>').addClass('label').addClass('ylabel');

        this.container = $('<div>').attr('class', 'timeseries');

        this.parentElement.append(this.container).append(this.xlabel).append(this.ylabel);
        this.show();

        this.created = true;

        this.create = function () {};

        this.getWiggleView = function () { return graph; };

        this.resize = function () {
            // Use the positioning and height of the parent element to figure out where to put
            // the labels
            var pheight = this.container.parent().height();
            var pwidth = this.container.parent().width();
            var poffset = this.container.parent().offset();

            // Set the size of the actual canvas div
            // Wigglemaps will take up the entire space
            this.container.css({
                'height': pheight - this.xlabel.height(),
                'width': pwidth - this.ylabel.height(),
                'margin-left': this.ylabel.height()
            });

            this.xlabel.css({
                left: poffset.left + pwidth / 2 + this.ylabel.height() - this.xlabel.width() / 2
            });

            this.ylabel.css({
                left: poffset.left + this.ylabel.height() / 2 - this.ylabel.width() / 2,
                top: poffset.top + pheight / 2 - this.ylabel.height() / 2 - this.xlabel.height() / 2
            });

            // The graph may not exist when resize is called if no data is in the system
            if (graph) {
                graph.resize();
            }
        };

        this.newData = function (data, settings) {
            layer = data;

            var properties = layer.numeric();
            properties.sort();
            layer.attr('order', properties);

            graph = new wiggle.TimeSeries('.timeseries', layer, {
                'ticks': 500,
                'ylock': true
            });

            this.xlabel.text(settings.xlabel);
            this.ylabel.text(settings.ylabel);

            // reconfigure the label positions
            this.resize();

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
