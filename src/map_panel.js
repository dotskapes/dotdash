function MapPanel () {
    var container;
    var map;
    var layer;
    
    this.create = function (parent) {
        container = $ ('<div></div>').css ({
            'width': parent.width (),
            'height': parent.height ()
        }).attr ('id', 'wigglemap');

        parent.append (container);
        
        map = new wiggle.Map ('#wigglemap');
    };

    this.resize = function (parent) {
        container.css ({
            'width': parent.width (),
            'height': parent.height ()
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
