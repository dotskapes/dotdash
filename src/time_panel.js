function TimePanel () {
    var svg;
    var back_group, data_group;

    var xmap, ymap;

    this.name = 'Time Series';
    this.created = false;
    
    // parent_sel is jquery parent/container selector to append to
    this.show = function(parent_sel) {
        svg.style('display','block');
        // get jquery elementy from d3 element & append
        $(parent_sel).append($(svg.node()));
    };

    // parent is a string css selector (not a jquery element)
    this.create = function (parent) {
        var $parent = $ (parent);
        svg = d3.select (parent).append ('svg').attr ({
            'viewBox': '0 0 1 1',
            'preserveAspectRatio': 'none'
        }).style ({
            'width': $parent.width (),
            'height': $parent.height (),
        });

        back_group = svg.append ('g');
        data_group = svg.append ('g');

        var matte = back_group.append ('rect')
            .attr ('x', 0)
            .attr ('y', 0)
            .attr ('width', 1)
            .attr ('height', 1)
            .style ('fill', '#0000ff');
        
        this.created = true;
    };
    
    this.resize = function (parent) {
        var $parent = $ (parent);
        svg.style ({
            'width': $parent.width (),
            'height': $parent.height (),
        });        
    };

    this.change = function (data) {
        data_group.selectAll ('path')
        //xmap = d3.scale.linear ().domain ([0, data.order ().length], [0, 1]);
        //console.log (data.order ());
    };
};
