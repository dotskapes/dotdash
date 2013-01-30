function ServiceLayer (src, callback) {
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

    $.ajax ({
        url: src,
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
            callback (layer);
        }
    });

    this.change = function (key, value) {
        settings[key] = value;
    };

    this.update = function () {
        /*layer.features ().select (settings['query']).each (function (i, f) {
            var val 
        });*/
    };
};
