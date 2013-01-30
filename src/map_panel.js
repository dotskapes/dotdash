function MapPanel () {
    var container;
    var map;
    var layer;

    this.created = false;
    
    this.create = function (parent) {
        var $parent = $ (parent);
        container = $ ('<div></div>').css ({
            'width': $parent.width (),
            'height': $parent.height ()
        }).attr ('id', 'wigglemap');

        $parent.append (container);
        
        map = new wiggle.Map ('#wigglemap');

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

    this.change = function (data) {
        if (layer)
            map.remove (layer);
        layer = data;
        map.vcenter (layer.bounds.centroid ());
        map.extents (layer.bounds.width ());
        map.append (layer);

	//var current = null;
        map.select (function (box) {
	    //if (current)
	    //	current.style ('fill', null);
	    current = layer.search (box);
	    //current.style ('fill', wiggle.util.icolor (204, 85, 0, 255));
        });
    };
};
