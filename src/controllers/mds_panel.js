goog.provide('MDSPanel');

goog.require('Panel');

var MDSPanel = function () {
    'use strict';

    // TimePanel subclass of Panel
    Panel.call(this, 'MDS', 'mds');

    var svg;
    var backGroup, dataGroup;

    var xmap, ymap;

    this.show = function () {
        svg.style('display', 'block');
        // get jquery elementy from d3 this.parentElement & append
        this.parentElement.show();
    };

    this.create = function () {

        svg = d3.select(this.parentElement[0]).append('svg').attr({
            'viewBox': '0 0 1 1',
            'preserveAspectRatio': 'none'
        });

        backGroup = svg.append('g');
        dataGroup = svg.append('g');

        var matte = backGroup.append('rect')
            .attr('x', 0)
            .attr('y', 0)
            .attr('width', 1)
            .attr('height', 1)
            .style('fill', '#ff0000');
        this.parentElement.append($(svg.node()));
        this.show();
        this.created = true;
    };

    this.resize = function () {
    };

    this.change = function (data) {

    };

    this.draw = function () {}; // ??

    this.newData = function (data) {
        // display new data
    };
    this.select = function () {};
    this.deselect = function () {};

};
