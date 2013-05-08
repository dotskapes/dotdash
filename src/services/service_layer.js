goog.provide('ServiceLayer');

goog.require('ColorRamps');
goog.require('ColorScales');
goog.require('AggregationService');

var ServiceLayer = function () {

    var layer = null;
    var colorMap = {};
    var aggregates = null;

    var dataCallbacks = [];

    var sortedDateProps = [];
    var sortedIndexLookup = {};

    var fireNewData = function (dataLayer, settings) {
        $.each(dataCallbacks, function (i, cb) {
            cb(dataLayer, settings);
        });
    };

    return {

        addDataCallback: function (cb) {
            dataCallbacks.push(cb);
        },

        loadUrl: function (url, dashState, aggregateModel, settings) {
            var that = this;
            var deferred = $.Deferred();
            $.ajax({
                url: url,
                dataType: 'json',
                success: function (data) {
                    that.load(data, dashState, aggregateModel, settings);
                    deferred.resolve();
                }
            });
            return deferred.promise();
        },

        load: function (urlOrData, dashState, aggregateModel, settings) {
            if (typeof urlOrData === 'string') {
                return this.loadUrl(urlOrData, dashState, aggregateModel, settings);
            }
            layer = wiggle.io.GeoJSON(urlOrData);

            sortedDateProps = layer.numeric();
            // this assumes the dates are lexically sortable, euro dates NOT USA
            sortedDateProps.sort();

            sortedIndexLookup = {};
            sortedDateProps.forEach(function (attr, i) {
                sortedIndexLookup[attr] = i;
            });

            var aggregateName = dashState.get('agg');
            if (aggregateName) {
                var aggregationService = new AggregationService();
                var aggregates = aggregationService.computeAggregates(
                    aggregateName, this.getAttributesByFeature());
                aggregateModel.set('agg', aggregates);
            }

            colorMap = new ColorMap(layer, dashState, aggregateModel);
            fireNewData(layer, settings);
            if (!dashState.get('attr')) {
                dashState.set('attr', this.getSortedDateProperties()[0]);
            }
            return $.Deferred().resolve().promise();
        },

        getLayerSelector: function () {
            return layer.features();
        },

        // this perhaps belongs in a separate data util class?
        // this returns the keys in the feature corresponding to time data points
        // sorted by date, makes assumptions about the data - see below
        // this method(->object) may explode once we take in messier data??
        getSortedDateProperties: function () {
            // this gets the properties of the feature that have numerical values
            // this assumes that ONLY date props are numerical - this is not true for
            // all datasets
            if (!layer) {
                return [];
            }
            return sortedDateProps;
        },

        // Maps the name of a attribute on the layer to its ordering 
        getIndexOfAttr: function (attr) {
            return sortedIndexLookup[attr];
        },

        getAttributesByFeature : function () {
            var features = layer.features();
            var properties = layer.properties();

            var allAttributes = {};
            features.each(function (i, feature) {
                var featureAttributes = {};
                $.each(properties, function (j, property) {
                    featureAttributes[property] = feature.attr(property);
                });
                allAttributes[feature.id] = featureAttributes;
            });
            return allAttributes;
        },

        getAttributesBySortedDateProperty : function () {
            var properties = layer.numeric().sort();
            var features = layer.features();

            var allAttributes = {};
            $.each(properties, function (i, property) {
                var propertyAttributes = {};
                features.each(function (j, feature) {
                    propertyAttributes[feature.id] = feature.attr(property);
                });
                allAttributes[property] = propertyAttributes;
            });
            return allAttributes;
        },

        getColorForFeature : function (feature) {
            return colorMap.colorForFeature(feature);
        }
    };
};

