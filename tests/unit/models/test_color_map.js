module("color map test");

var makeGeoJson = function (propertyLists) {
    var features = _.map(propertyLists, function (properties) {
        return { type: "Feature",
                 geometry: { type: "MultiPolygon", coordinates: [] },
                 properties: _.object(_.range(properties.length), properties) };
    });
    return { type: "FeatureCollection", features: features };
};

test("color map test", function () {
    var data = makeGeoJson([[1], [2], [3], [4], [5], [6]]);

    var layer = wiggle.io.GeoJSON(data);

    var colorMap = new ColorMap(layer, new DashboardState(), new AggregateModel());

    equal(colorMap.colorForFeature(layer.features().get(0)), ColorMap.NO_DATA);

    colorMap = new ColorMap(layer, new DashboardState({attr: "0"}), new AggregateModel());

    _.each(_.range(ColorRamps.WHITE_RED.length), function (i) {
        equal(colorMap.colorForFeature(layer.features().get(i)), ColorRamps.WHITE_RED[i]);
    });
});
