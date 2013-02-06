function Controller() {

    var views = [];

    this.addView = function(view) {
        views.push(view);
    }

    this.newData = function(data) {
        // this should actually only send data to active views!
        // need to get active views from dash at some point
        views.forEach(function(view,i,a) { view.change(data); });
    }

}