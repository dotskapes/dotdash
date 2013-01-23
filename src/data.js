function DataAPI (src, callback) {
    var data = null;
    $.ajax ({
        url: src,
        dataType: 'json',
        success: function (response) {
            data = response;
            callback ();
        }
    });

    this.length = function () {
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
};
