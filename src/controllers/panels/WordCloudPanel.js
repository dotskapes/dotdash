goog.provide('WordCloudPanel');

goog.require('Panel');

(function () {

    var WordCloudPanel = function (selectionManager, moveSelModel, serviceLayer) {

        Panel.call(this, 'Word Cloud', 'cloud', selectionManager, moveSelModel, serviceLayer);

        this.create = function () {
            this.container = $('<div>').addClass('cloud-container');

            this.parentElement.append(this.container);
            this.show();

            this.created = true;
        };

        var showData = function (data) {
            var wordCounts = {};
            data.features().each(function (i, feature) {
                var descr = feature.attr('descr') || '';
                var words = descr.split(' ');
                _.each(words, function (word) {
                    if (!wordCounts[word]) {
                        wordCounts[word] = 0;
                    }
                    wordCounts[word]++;
                });
            });

            var cloudData = _.map(wordCounts, function (count, word) {
                return {text: word, size: count + 20};
            });

            var fill = d3.scale.category20();

            var margin = 20;
            var width = this.container.parents('.view').width() - margin;
            var height = this.container.parents('.view').height() - margin;

            var draw = function (words) {
                d3.select('.cloud-container').append('svg')
                    .attr('width', width)
                    .attr('height', height)
                    .append('g')
                    .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')
                    .selectAll('text')
                    .data(words)
                    .enter().append('text')
                    .style('font-size', function (d) { return d.size + 'px'; })
                    .style('font-family', 'Impact')
                    .style('fill', function (d, i) { return fill(i); })
                    .attr('text-anchor', 'middle')
                    .attr('transform', function (d) {
                        return 'translate(' + [d.x, d.y] + ')rotate(' + d.rotate + ')';
                    })
                    .text(function (d) { return d.text; });
            };

            d3.layout.cloud().size([width, height])
                .words(cloudData)
                /* jshint bitwise: false */
                .rotate(function () {return ~~(Math.random() * 5) * 30 - 60; })
                .font('Impact')
                .fontSize(function (d) { return d.size; })
                .on('end', draw)
                .start();
        };

        this.newData = function () {};
        this.newOverlay = showData;

        this.draw = function (filter) {};
    };

    Panel.register('cloud', WordCloudPanel);
    dash.controllers.panels.WordCloudPanel = WordCloudPanel;

}());