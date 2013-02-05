function MapPanel (parent) {
    var container;
    // wiggle.Map object
    var map;
    var layer;
    var that = this;

    this.created = false;

    this.getMap = function() { return map; }
    
    this.create = function () {
        container = $ ('<div></div>').attr ('id', 'wigglemap');

        parent.append (container);
        parent.show();

        map = new wiggle.Map ('#wigglemap');
        wireupMap();
        this.created = true;
    };

    this.name = "Map";

    this.show = function() {
        container.css('display','block');
        parent.show();
    };

    this.addClass = function (cssClass) {
        parent.addClass(cssClass);
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
