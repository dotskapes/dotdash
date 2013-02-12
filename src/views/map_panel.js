function MapPanel () {

    // this basically makes Panel the superclass of MapPanel
    Panel.call(this);

    // wiggle.Map object
    var map;
    var layer;
    var that = this;
    var colorMap = function() { return ServiceLayer.colorMap; }

    this.getMap = function() { return map; }
    
    this.create = function () {
        this.container = $ ('<div>').attr ('id', 'wigglemap');

        this.parentElement.append(this.container);
        this.show();

        map = new wiggle.Map ('#wigglemap');
        wireupMap();
        this.created = true;
    };

    // for display
    this.name = 'Map';
    // for internal use - classname...
    this.label = 'map';

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
        // enable selection in map
        //map.enableSelect();
        // listen for map select and send selection to selectionManager
        map.select(function  (box) {
	    selectionLayer = layer.search (box);
            that.fireSelect(selectionLayer);
        });
    };

    // Selection methods/interface - called by SelectionManager
    this.deselect = function(selectionLayer) {
        // this should then further select on what is unfiltered out
        // but we are not yet filtering...
        // var unfiltered = filterQueries.get(allFeats);
        var colorMapFn = function(feature) {
            return colorMap().colorForFeat(feature);
        };
        //this.allFeatures().style('fill', colorMapFn);
        selectionLayer.style('fill',colorMapFn);
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
