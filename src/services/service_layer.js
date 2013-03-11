goog.provide('ServiceLayer');

// SingletonPattern being used for ServiceLayer
//var Singleton = (function () {
//    var c, d, e;
//    return {
//        a: 5,
//        b: function () { return c; }
//    };
//}) ();

// Singleton pattern
var ServiceLayer = (function () {

    var settings = {
        'query': 'jan >= 0',
        'step': '2002-12-29',
        'ramp': [
            wiggle.util.icolor(254, 229, 217, 255),
            wiggle.util.icolor(252, 187, 161, 255),
            wiggle.util.icolor(252, 146, 114, 255),
            wiggle.util.icolor(251, 106, 74, 255),
            wiggle.util.icolor(222, 45, 38, 255),
            wiggle.util.icolor(165, 15, 21, 255)
        ],
        'dist': 'quantile',
        'scale': 'local'
    };

    var layer = null;

    var dataCallbacks = [];


    var fireNewData = function (dataLayer) {
        $.each(dataCallbacks, function (i, cb) { cb(dataLayer); });
    };

    // Singleton public methods/properties
    return {

        addDataCallback: function (cb) { dataCallbacks.push(cb); },

        loadUrl: function (url) {
            var that = this;
            $.ajax({
                url: url,
                dataType: 'json',
                success: function (data) {
                    layer = wiggle.io.GeoJSON(data);
                    layer
                        .style('stroke', wiggle.util.fcolor(0.3, 0.3, 0.3, 1.0))
                        .style('stroke-opacity', 0.75)
                        .style('fill-opacity', 0.8);
                    that.colorMap = new ColorMap(that.getAttributesBySortedDateProperty());
                    fireNewData(layer);
                }
            });
        },

        // rename this
        change: function (key, value) {
            settings[key] = value;
        },

        // if we do multi datasets will need to associate colorMaps with datasets
        colorMap: {},

        // this perhaps belongs in a separate data util class?
        // this returns the keys in the feature corresponding to time data points
        // sorted by date, makes assumptions about the data - see below
        // this method(->object) may explode once we take in messier data??
        getSortedDateProperties: function (layer) {
            // this gets the properties of the feature that have numerical values
            // this assumes that ONLY date props are numerical - this is not true for
            // all datasets
            var sortedDateProps = layer.numeric();
            // this assumes the dates are lexically sortable, euro dates NOT USA
            sortedDateProps.sort();
            return sortedDateProps;
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
        }

    };
} ());
 // this executes the function for Singleton purposes
