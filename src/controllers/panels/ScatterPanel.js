goog.provide('ScatterPanel');

goog.require('Panel');

(function () {

    var ScatterPanel = function (selectionManager, moveSelModel, serviceLayer) {

        Panel.call(this, 'Scatter', 'scatter', selectionManager, moveSelModel, serviceLayer);

        this.create = function () {
            this.container = $('<div>').addClass('scatter');

            this.parentElement.append(this.container);
            this.show();

            this.created = true;
        };

        var showData = function (data) {
            var properties = data.properties();
            var d3Data = [];
            data.features().each(function (i, feature) {
                var featureProperties = {};
                $.each(properties, function (i, prop) {
                    featureProperties[prop] = feature.attr(prop);
                });
                d3Data.push(featureProperties);
            });

            var getDate = function (d) {
                return d.split(' ')[0];
            };

            var dates = _.map(d3Data, function (d) {
                return new Date(getDate(d.date));
            });

            var counts = {};
            _.each(d3Data, function (f) {
                var date = getDate(f.date);
                if (!counts[date]) {
                    counts[date] = 0;
                }
                counts[date]++;
                f.val = counts[date];
            });

            var vals = _.map(d3Data, function (f) {
                return f.val;
            });

            var margin = 50;
            var width = dates.length * 40 + margin;
            var height = vals.length * 10 + margin;

            var minDate = new Date(_.min(dates));
            var maxDate = new Date(_.max(dates));
            var upperDateLimit = maxDate.getDate() + 1;
            maxDate.setDate(upperDateLimit);

            var x = d3.time.scale()
                .domain([minDate, maxDate])
                .nice()
                .range([0, width - margin]);
            var y = d3.scale.linear()
                .domain([0, d3.max(d3Data, function (f) { return f.val; })])
                .nice()
                .range([height - margin, 0]);

            var xAxis = d3.svg.axis().scale(x).orient('bottom')
                .ticks(d3.time.days, 1)
                .tickFormat(d3.time.format('%b %d'))
                .tickSize(0);

            var svg = d3.select('.scatter').append("svg")
                .attr('width', width)
                .attr('height', height + margin)
                .append('g')
                .attr('transform', 'translate(' + margin / 2 + ',' + margin / 2 + ')');

            svg.append('g')
                .attr('class', 'x axis')
                .attr('transform', 'translate(0,' + (height - margin) + ')')
                .call(xAxis)
                .selectAll('text')
                .style('fill', '#ffffff')
                .style('text-anchor', 'end')
                .attr('dx', '-.8em')
                .attr('dy', '.15em')
                .attr('transform', function (a) { return 'rotate(-65)'; });


            svg.selectAll('.dot')
                .data(d3Data)
                .enter().append("circle")
                .attr('class', 'dot')
                .attr('r', 7)
                .attr('cx', function (f) { return x(new Date(getDate(f.date))); })
                .attr('cy', function (f) { return y(f.val); })
                .style('fill', function (f) { return '#f6f170'; })
                .style('stroke', function (f) { return '#ffffff'; });
        };

        this.newData = function () {};
        this.newOverlay = showData;

        this.draw = function (filter) {

        };

    };

    Panel.register('scatter', ScatterPanel);
    dash.controllers.panels.ScatterPanel = ScatterPanel;

}());