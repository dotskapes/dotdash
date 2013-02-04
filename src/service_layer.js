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
        'step': '1/2/2011',
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

    var dataListeners = [];


    var fireNewData = function(dataLayer) {
        $.each(dataListeners,function(i,dl) { dl.newData(dataLayer); });
    };

    // Singleton public methods/properties
    return {

        addDataListener: function(dl) { dataListeners.push(dl); },

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
                    that.update(); // temp
                    layer
                        .style ('stroke', wiggle.util.fcolor (.3, .3, .3, 1.0))
                        .style ('stroke-opacity', .75)
                        .style ('fill-opacity', .8);
                    //callback (layer);
                    fireNewData(layer);
                }
            });
        },

        // rename this
        change: function (key, value) {
            settings[key] = value;
        },

        update: function () {
            // temporary 'stubbing' of true ColorMap
            for (var i = 0; i < settings['ramp'].length; i ++) {
                layer.features ().quantile (settings['step'], i + 1, settings['ramp'].length).style ('fill', settings['ramp'][i]);
            }
            /*layer.features ().select (settings['query']).each (function (i, f) {
              var val
              });*/
        }
    }; } ());
 // this executes the function for Singleton purposes
