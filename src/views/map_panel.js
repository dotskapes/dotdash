function MapPanel (element) {
    var container;
    // wiggle.Map object
    var map;
    var layer;
    var that = this;
    var colorMap = function() { return ServiceLayer.colorMap; }

    this.created = false;

    this.getMap = function() { return map; }
    
    this.create = function () {
        container = $ ('<div></div>').attr ('id', 'wigglemap');

        element.append (container);
        element.show();

        map = new wiggle.Map ('#wigglemap');
        wireupMap();
        this.created = true;
    };

    this.name = "Map";

    this.show = function() {
        container.css('display','block');
        element.show();
    };

    this.addClass = function (cssClass) {
        element.addClass(cssClass);
    };

    this.resize = function () {
        map.resize ();
    };

    this.newData = function (data) {
        if (layer)
            map.remove (layer);
        layer = data;
        map.vcenter (layer.bounds.centroid ());
        map.extents (layer.bounds.width ());
        map.append (layer);
        // initial (unselected) coloring
        this.deselect(layer);
    };

    var wireupMap = function() {
        // listen to service layer for new data
        ServiceLayer.addDataListener(that);

        // listen for select/deselect
        selectionManager.addView(that);

        // listen for map select and send selection to selectionManager
        map.select(function  (box) {
	    selectionLayer = layer.search (box);
            selectionManager.select(selectionLayer);
        });
    };

    // Selection methods/interface - called by SelectionManager
    this.deselect = function(selectionLayer) {
        //selectionLayer.style('fill',null);
        var allFeats = ServiceLayer.currentData.features();
        // this should then further select on what is unfiltered out
        // but we are not yet filtering...
        // var unfiltered = filterQueries.get(allFeats);
        var colorMapFn = function(feature) {
            return colorMap().colorForFeat(feature);
        };
        allFeats.style('fill', colorMapFn);
    }

    this.select = function(selectionLayer) {
        selectionLayer.style('fill', ColorMap.HIGHLIGHT);
    }

    // draw map - without highlight/selection
    this.draw = function() {
        var allFeats = ServiceLayer.currentData.features();
        // this should then further select on what is unfiltered out
        // but we are not yet filtering...
        // var unfiltered = filterQueries.get(allFeats);
        var colorMapFn = function(feature) {
            return colorMap().colorForFeat(feature);
        };
        allFeats.style('fill', colorMapFn);
    }

};
