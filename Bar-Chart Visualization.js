// set the dimensions and margins of the graph
var margin = {top: 40, right: 20, bottom: 60, left: 50},
    width = 560 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// set the ranges
var x = d3.scaleBand()
    .range([0, width])
    .padding(0.1);
var y = d3.scaleLinear()
    .range([height, 0]);

// append the svg object to the body of the page
// append a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("#barchart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

// get the data
d3.csv("data/OTP by month/Month-by-Month OTP Score.csv", function(error, data) {
    if (error) throw error;

    // format the data
    data.forEach(function(d) {
        d.month = +d.month;
    });

    // Scale the range of the data in the domains
    x.domain(data.map(function(d) { return d.gtfs_route_id; }));
    y.domain([0, d3.max(data, function(d) { return d.headway_score; })]);

    // add the x Axis
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    // add the y Axis
    svg.append("g")
        .call(d3.axisLeft(y));

    //Y-Axis Label
    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x", 0 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Headway Score");

    //X-Axis Label
    svg.append("text")
        .attr("transform",
            "translate(" + (width/2) + " ," +
            (height + margin.top) + ")")
        .style("text-anchor", "middle")
        .text("Route");;

    //Title of Graph
    svg.append("text")
        .attr("x", (width / 2))
        .attr("y", 0 - (margin.top / 2))
        .attr("text-anchor", "middle")
        .style("font-size", "16px")
        .style("text-decoration", "underline")
        .text("Total Average Headway Score");

    svg.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return x(d.gtfs_route_id); })
        .attr("width", x.bandwidth())
        .attr("y", function(d) { return y(d.headway_score); })
        .attr("height", function(d) { return height - y(d.headway_score); });

    svg.selectAll(".bar")
        .filter(function(d){return d.gtfs_route_id === "1";})
        .attr("id","bar_route-1")
        .style("fill","#66C2A5");

    svg.selectAll(".bar")
        .filter(function(d){return d.gtfs_route_id === "43";})
        .attr("id","bar_route-43")
        .style("fill","#fc8d62");

    svg.selectAll(".bar")
        .filter(function(d){return d.gtfs_route_id === "749";})
        .attr("id","bar_route-749")
        .style("fill","#e78ac3");

    svg.selectAll(".bar")
        .filter(function(d){return d.gtfs_route_id === "751";})
        .attr("id","bar_route-751")
        .style("fill","#8da0cb");



    /*//Function for pulling out the data for route 1
    function routeOne(all_route_data) {
        var routeOneData = all_route_data.filter(function (d) {
            if (d["gtfs_route_id"] === "1") {
                return d;
            }
        });
        svg.append("path")
            .data(routeOneData)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function(d) { return x(d.gtfs_route_id); })
            .attr("width", x.bandwidth())
            .attr("y", function(d) { return y(d.headway_score); })
            .attr("height", function(d) { return height - y(d.headway_score); })
            .style("fill", "#66C2A5");
    }
    function route43(all_route_data) {
        var route43Data = all_route_data.filter(function (d) {
            if (d["gtfs_route_id"] === "43") {
                return d;
            }
        });

        svg.append("path")
            .data(route43Data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function(d) { return x(d.gtfs_route_id); })
            .attr("width", x.bandwidth())
            .attr("y", function(d) { return y(d.headway_score); })
            .attr("height", function(d) { return height - y(d.headway_score); })
            .style("fill", "#fc8d62");

    }
    function route749(all_route_data) {
        var route749Data = all_route_data.filter(function (d) {
            if (d["gtfs_route_id"] === "749") {
                return d;
            }
        });

        svg.append("path")
            .datum(route749Data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function(d) { return x(d.gtfs_route_id); })
            .attr("width", x.bandwidth())
            .attr("y", function(d) { return y(d.headway_score); })
            .attr("height", function(d) { return height - y(d.headway_score); })
            .style("fill", "#e78ac3");

    }
        function route751(all_route_data) {
            var route751Data = all_route_data.filter(function (d) {
                if (d["gtfs_route_id"] === "751") {
                    return d;
                }
            });
            svg.append("path")
                .datum(route751Data)
                .enter().append("rect")
                .attr("class", "bar")
                .attr("x", function(d) { return x(d.gtfs_route_id); })
                .attr("width", x.bandwidth())
                .attr("y", function(d) { return y(d.headway_score); })
                .attr("height", function(d) { return height - y(d.headway_score); })
                .style("fill", "#8da0cb");
    }

    routeOne(data);
    route43(data);
    route749(data);
    route751(data);*/


});