module("aggregation functions test");


// our aggregation functions act on objects, but only use the values
var makeObject = function (list) {
    return _.object(_.range(list.length), list);
};

test("mean test", function () {
    var mean = AGGREGATION_FUNCTIONS.mean;

    equal(mean(makeObject([10, 55, 63, 4])), 33, "mean works");

    ok(isNaN(mean({})), "mean of empty object is NaN");
    equal(mean(makeObject([2])), 2, "mean of one element is the element");
});

test("min test", function () {
    var min = AGGREGATION_FUNCTIONS.min;

    equal(min(makeObject([10, 55, 63, 4])), 4, "mean works");

    equal(min({}), Infinity, "mean of empty object is Infinity");
    equal(min(makeObject([2])), 2, "mean of one element is the element");
});

test("max test", function () {
    var max = AGGREGATION_FUNCTIONS.max;

    equal(max(makeObject([10, 55, 63, 4])), 63, "mean works");

    equal(max({}), -Infinity, "mean of empty object is -Infinity");
    equal(max(makeObject([2])), 2, "mean of one element is the element");
});