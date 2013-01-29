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
        layer = wiggle.io.GeoJSON (data.data ());
        map.append (layer);
    };
};
