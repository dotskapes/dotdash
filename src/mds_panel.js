function MDSPanel (parent) {
    var svg;
    var back_group, data_group;

    var xmap, ymap;

    this.parent = parent;
    this.name = 'MDS';

    this.created = false;

    this.show = function() {
        svg.style('display','block');
        // get jquery elementy from d3 element & append
        this.parent.show();
    };
    
    this.create = function () {

        svg = d3.select (this.parent[0]).append ('svg').attr ({
            'viewBox': '0 0 1 1',
            'preserveAspectRatio': 'none'
        });

        back_group = svg.append ('g');
        data_group = svg.append ('g');

        var matte = back_group.append ('rect')
            .attr ('x', 0)
            .attr ('y', 0)
            .attr ('width', 1)
            .attr ('height', 1)
            .style ('fill', '#ff0000');
        this.parent.append($(svg.node()));
        this.parent.show();
        this.created = true;
    };
    
    this.resize = function () {
    };

    this.change = function (data) {

    };
};
