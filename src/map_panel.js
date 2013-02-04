function MapPanel () {
    var container;
    // wiggle.Map object
    var map;
    var layer;
    var that = this;

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
        selectionLayer.style('fill',null);
    }

    this.select = function(selectionLayer) {
        selectionLayer.style('fill', wiggle.util.icolor (204, 85, 0, 255));
    }

};
