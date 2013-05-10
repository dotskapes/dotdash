goog.provide('BasicTimePanel');

goog.require('Panel');

(function () {

    var BasicTimePanel = function (selectionManager, moveSelModel, serviceLayer) {

        var layer;

        Panel.call(this, 'Time Series', 'basictime', selectionManager, moveSelModel, serviceLayer);

        this.create = function () {
            this.container = $('<div>').addClass('basic-time-container');

            this.parentElement.append(this.container);
            this.show();

            this.created = true;
        };

        var render = _.bind(function (layer) {
            this.container.empty();
            var dates = _.filter(layer.properties(), function (prop) {
                return prop.match(/\d\d\d\d-\d\d-\d\d/);
            });

            dates = dates.sort();

            var series = [];
            layer.features().each(function (i, feature) {
                var lineData = [];
                _.each(dates, function (date) {
                    var val = feature.attr(date) || 0;
                    lineData.push({x: new Date(date).getTime() / 1000, y: val});
                });
                var wiggleColor = serviceLayer.getColorForFeature(feature);
                var color = wiggleColor.rgb();
                series.push({data: lineData, color: color});
            });

            var graph = new Rickshaw.Graph({
                element: this.container.get(0),
                renderer: 'line',
                series: series
            });

            var xAxis = new Rickshaw.Graph.Axis.Time({
                graph: graph
            });

            var yAxis = new Rickshaw.Graph.Axis.Y({
                graph: graph
            });
            graph.render();
        }, this);

        this.newData = function (dataLayer, settings, data) {
            layer = dataLayer;
        };

        this.newOverlay = function () {};

        this.draw = function (filter) {
            render(layer);
        };
    };

    Panel.register('basictime', BasicTimePanel);
    dash.controllers.panels.BasicTimePanel = BasicTimePanel;

}());