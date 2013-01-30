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
            var elem = [];
            var num_points = 0;
            var num_polys = 0;
            for (var i = 0; i < data.features.length; i ++) {
	        var feature = data.features[i];
	        if (feature.type == 'Feature') {
	            if (feature.geometry.type == 'Point') {
		        num_points ++;
		        elem.push ({
		            geom: [feature.geometry.coordinates],
		            attr: feature.properties
		        });
	            }
	            if (feature.geometry.type == 'MultiPoint') {
		        num_points += feature.geometry.cooordinates.length;
		        elem.push ({
		            geom: feature.geometry.coordinates,
		            attr: feature.properties
		        });
	            }
	            if (feature.geometry.type == 'Polygon') {
		        var poly = feature.geometry.coordinates;
		        var oriented = [];
		        for (var k = 0; k <= poly.length - 1; k ++) {
		            var o_ring = [];
		            for (var j = poly[k].length - 1; j >= 0; j --) {
			        o_ring.push (poly[k][j]);
		            }
		            oriented.push (o_ring);
		        }
		        num_polys ++;
		        elem.push ({
		            geom: [oriented],
		            attr: feature.properties
		        });
	            }
	            if (feature.geometry.type == 'MultiPolygon') {
		        var rings = [];
		        $.each (feature.geometry.coordinates, function (i, poly) {
		            var oriented = [];
		            for (var k = 0; k <= poly.length - 1; k ++) {
			        var o_ring = [];
			        for (var j = poly[k].length - 1; j >= 0; j --) {
			            o_ring.push (poly[k][j]);
			        }
			        oriented.push (o_ring);
		            }
		            rings.push (oriented);
		        });
		        num_polys ++;
		        elem.push ({
		            geom: rings,
		            attr: feature.properties
		        });
	            }
                }
            }
            var selector = new LayerSelector (elem);
            callback (selector);
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
