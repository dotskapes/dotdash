function MapPanel () {

    // this basically makes Panel the superclass of MapPanel
    Panel.call(this,'Map','map');

    // wiggle.Map object
    var map;
    var layer;
    var that = this;

    this.getMap = function() { return map; }
    
    this.create = function () {
        this.container = $ ('<div>').attr ('id', 'wigglemap');

        this.parentElement.append(this.container);
        this.show();

        map = new wiggle.Map ('#wigglemap');
        wireupMap();
        this.created = true;
    };

    this.resize = function () {
        map.resize ();
    };

    this.newData = function (data) {
        if (layer)
            map.remove (layer);
        layer = data;

        layer.features ()
            .style (map, 'stroke', ColorMap.WHITE)
            .style (map, 'fill-opacity', .9);

        map.center (layer.bounds.centroid ());
        map.extents (layer.bounds.width ());
        map.append (layer);
        // initial (unselected) coloring
        that.draw ();
    };

    var wireupMap = function() {
        // enable selection in map
        map.enableSelect();
        // listen for map select and send selection to selectionManager
        map.select(function  (box) {
	    selectionLayer = map.search (layer, box);
            that.fireSelect(selectionLayer);
        });
    };

    // Selection methods/interface - called by SelectionManager
    this.deselect = function(selectionLayer) {
        // this should then further select on what is unfiltered out
        // but we are not yet filtering...
        // var unfiltered = filterQueries.get(allFeats);
        selectionLayer.style(map, 'fill', function (f) {
            return ServiceLayer.colorMap.colorForFeat (f);
        });
    }

    this.select = function(selectionLayer) {
        selectionLayer.style(map, 'fill', ColorMap.HIGHLIGHT);
    }

    // draw map - without highlight/selection
    this.draw = function() {
        // this should then further select on what is unfiltered out
        // but we are not yet filtering...
        // var unfiltered = filterQueries.get(allFeats);
        layer.features ().style(map, 'fill', function (f) {
            return ServiceLayer.colorMap.colorForFeat (f);
        });
    }

};
