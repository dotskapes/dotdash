function MapPanel () {
    var container;
    // wiggle.Map object
    var map;
    var layer;
    var that = this;
    var colorMap = function() { return ServiceLayer.colorMap; }

    this.created = false;

    this.getMap = function() { return map; }
    
    this.create = function (parent) {
        var $parent = $ (parent);
        container = $ ('<div></div>').css ({
            'width': $parent.width (),
            'height': $parent.height ()
        }).attr ('id', 'wigglemap');

        $parent.append (container);
        
        map = new wiggle.Map ('#wigglemap');
        wireupMap();
        this.created = true;
    };

    this.name = "Map";

    // parent_sel is jquery parent/container selector to append to
    this.show = function(parent_sel) {
        container.css('display','block');
        $(parent_sel).append(container);
    };

    this.resize = function (parent) {
        var $parent = $ (parent);
        container.css ({
            'width': $parent.width (),
            'height': $parent.height ()
        });
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


};
