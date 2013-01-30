function DataAPI (src, callback) {
    //var data = null;
    //var order = null;
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

            // Temporary formatting!
            var layer = wiggle.io.GeoJSON (data);
            callback (layer);
            }
    });

        /*this.length = function () {
          return data.features.length;
          };

          this.each = function (callback) {
          for (var i = 0; i < data.features.length; i ++) {
          callback (data.features[i]);
          }
          };

          this.data = function () {
          return data;
          };

          this.order = function () {
          return order;
          };*/
    };
