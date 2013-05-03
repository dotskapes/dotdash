goog.provide('TablePanel');

goog.require('Panel');

(function() {

    var TablePanel = function (selectionManager, moveSelModel, serviceLayer) {
        Panel.call(this, 'Data Table', 'table', selectionManager, moveSelModel, serviceLayer);

        this.create = function() {
            this.created = true;
        };

        // Cached representation of all the layer's features
        this.features = null;

        this.newData = function(data) {
            this.features = data.features();
            this.parentElement.empty();

            this.container = $('<div>');

            this.parentElement.append(this.container);

            // Columns for the table are a built-in from wigglemaps
            var columns = data.properties();

            // Unfortunetly, we really need an actual list to send to jade...
            var features = [];
            data.features().each(_.bind(function(i, f) {
                features.push(f);
            }, this));
            var html = jade.templates.table({columns: columns, features: features});
            this.container.append(html);
        };

        // An iterator over all rows, with scoping, for convienience
        this.eachRow = function(callback) {
            var rows = $('.table table tr');

            // Iterate over the data rows, ingoring the header
            rows.slice(1).each(_.bind(callback, this));
        };

        // Mapping from a row to its corresponding feature
        this.rowToFeature = function(row) {
            var fid = $(row).attr('fid');
            return this.features.id(fid);
        };

        // Mapping from a feature to its row
        this.featureToRow = function(f) {
            return $('.table table tr[fid=' + f.id + ']');
        };

        this.deselect = function(selectionLayer) {
            selectionLayer.each(_.bind(function(i, f) {
                var row = this.featureToRow(f);
                row.css('background-color', serviceLayer.getColorForFeature(f).rgb());
            }, this));
        };

        this.select = function(selectionLayer) {
            selectionLayer.each(_.bind(function(i, f) {
                var row = this.featureToRow(f);
                row.css('background-color', ColorMap.HIGHLIGHT.rgb());
            }, this));
        };

        // TODO: Handle filtering out of the layer
        this.draw = function(layerSelector, filter) {
            this.eachRow(function(i, row) {
                var f = this.rowToFeature(row);
                var color = serviceLayer.getColorForFeature(f);
                $(row).css('background-color', color.rgb());
            });
        };
    };

    Panel.register('table', TablePanel);

    dash.controllers.panels.TablePanel = TablePanel;

})();
