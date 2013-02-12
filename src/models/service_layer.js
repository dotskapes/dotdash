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
    //var data = null;
    //var order = null;

    var settings = {
        'query': 'jan >= 0',
        'step': '2002-12-29',//'1/2/2011',
        'ramp': [
            wiggle.util.icolor (254, 229, 217, 255),
            wiggle.util.icolor (252, 187, 161, 255),
            wiggle.util.icolor (252, 146, 114, 255),
            wiggle.util.icolor (251, 106, 74, 255),
            wiggle.util.icolor (222, 45, 38, 255),
            wiggle.util.icolor (165, 15, 21, 255)
        ],
        'dist': 'quantile',
        'scale': 'local'
    };

    var layer = null;

    var dataCallbacks = [];


    var fireNewData = function(dataLayer) {
        $.each(dataCallbacks,function(i,cb) { cb(dataLayer); });
    };

    // Singleton public methods/properties
    return {

        addDataCallback: function(cb) { dataCallbacks.push(cb); },

        loadUrl: function(url) {
            var that = this;
            $.ajax ({
                url: url,
                dataType: 'json',
                success: function (data) {
                    // Set the data
                    //data = response;
                    /* // Find an ordering, if possible
                       order = [];
                       for (var key in data.features[0].properties) {
                       if (!isNaN (Number (data.features[0].properties[key])))
                       order.push (key);
                       }
                       order.sort ();*/
                    layer = wiggle.io.GeoJSON (data);
                    layer
                        .style ('stroke', wiggle.util.fcolor (.3, .3, .3, 1.0))
                        .style ('stroke-opacity', .75)
                        .style ('fill-opacity', .8);
                    //callback (layer);
                    that.currentData = layer;
                    that.colorMap = new ColorMap(layer);
                    fireNewData(layer);
                }
            });
        },

        currentData: {},

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
        getSortedDateProperties: function(layer) {
            // this gets the properties of the feature that have numerical values
            // this assumes that ONLY date props are numerical - this is not true for
            // all datasets
            var sortedDateProps = layer.numeric ();
            // this assumes the dates are lexically sortable, euro dates NOT USA
            sortedDateProps.sort();
            return sortedDateProps;
        }

    }; } ());
 // this executes the function for Singleton purposes
