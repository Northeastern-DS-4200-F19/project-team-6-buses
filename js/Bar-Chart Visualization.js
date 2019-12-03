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

// highlights route-specific parts of visualization
function onClick(e) {
    let gtfs_route_id = "";
    try {
        gtfs_route_id = e[0].gtfs_route_id;
    } catch (Error) {
        // do nothing
    }
    try {
        gtfs_route_id = e.gtfs_route_id;
    } catch (Error) {
        // do nothing
    }
    if (gtfs_route_id !== "" && gtfs_route_id==="1") {
        mymap.removeLayer(markerLayerGroup43);
        mymap.removeLayer(markerLayerGroupSL4);
        mymap.removeLayer(markerLayerGroupSL5);
        mymap.removeLayer(markerLayerGroup1);
        markerLayerGroup1.addTo(mymap);
        Route43Polyline.setStyle({opacity: 0.5});
        RouteSL5Polyline.setStyle({opacity: 0.5});
        RouteSL4Polyline.setStyle({opacity: 0.5});
        Route1Polyline.setStyle({opacity: 1});

        d3.select("#route_43").style("opacity", "1");
        d3.select("#route_SL4").style("opacity", "1");
        d3.select("#route_1").style("opacity", "1");
        d3.select("#route_SL5").style("opacity", "1");

        d3.selectAll("#bar_route-1").style("fill", route1color);
        d3.selectAll("#bar_route-43").style("fill", route43color);
        d3.selectAll("#bar_route-751").style("fill", routeSL5color);
        d3.selectAll("#bar_route-749").style("fill", routeSL4color);

        d3.select("#route_43").style("opacity", "0.3");
        d3.select("#route_SL4").style("opacity", "0.3");
        d3.select("#route_SL5").style("opacity", "0.3");

        d3.selectAll("#bar_route-43").style("fill", "#828583");
        d3.selectAll("#bar_route-749").style("fill", "#828583");
        d3.selectAll("#bar_route-751").style("fill", "#828583");



    }
    else if (gtfs_route_id !== "" && gtfs_route_id==="43") {
        mymap.removeLayer(markerLayerGroup43);
        mymap.removeLayer(markerLayerGroup1);
        mymap.removeLayer(markerLayerGroupSL4);
        mymap.removeLayer(markerLayerGroupSL5);
        markerLayerGroup43.addTo(mymap);
        Route1Polyline.setStyle({opacity: 0.5});
        RouteSL5Polyline.setStyle({opacity: 0.5});
        RouteSL4Polyline.setStyle({opacity: 0.5});
        Route43Polyline.setStyle({opacity: 1});

        d3.select("#route_43").style("opacity", "1");
        d3.select("#route_SL4").style("opacity", "1");
        d3.select("#route_1").style("opacity", "1");
        d3.select("#route_SL5").style("opacity", "1");

        d3.selectAll("#bar_route-1").style("fill", route1color);
        d3.selectAll("#bar_route-43").style("fill", route43color);
        d3.selectAll("#bar_route-751").style("fill", routeSL5color);
        d3.selectAll("#bar_route-749").style("fill", routeSL4color);

        d3.select("#route_1").style("opacity", "0.3");
        d3.select("#route_SL4").style("opacity", "0.3");
        d3.select("#route_SL5").style("opacity", "0.3");

        d3.selectAll("#bar_route-1").style("fill", "#828583");
        d3.selectAll("#bar_route-749").style("fill", "#828583");
        d3.selectAll("#bar_route-751").style("fill", "#828583");

    }
    else if (gtfs_route_id !== "" && gtfs_route_id==="749") {
        mymap.removeLayer(markerLayerGroup1);
        mymap.removeLayer(markerLayerGroup43);
        mymap.removeLayer(markerLayerGroupSL4);
        mymap.removeLayer(markerLayerGroupSL5);
        markerLayerGroupSL4.addTo(mymap);
        Route43Polyline.setStyle({opacity: 0.5});
        Route1Polyline.setStyle({opacity: 0.5});
        RouteSL5Polyline.setStyle({opacity: 0.5});
        RouteSL4Polyline.setStyle({opacity: 1});

        d3.select("#route_43").style("opacity", "1");
        d3.select("#route_SL4").style("opacity", "1");
        d3.select("#route_1").style("opacity", "1");
        d3.select("#route_SL5").style("opacity", "1");

        d3.selectAll("#bar_route-1").style("fill", route1color);
        d3.selectAll("#bar_route-43").style("fill", route43color);
        d3.selectAll("#bar_route-751").style("fill", routeSL5color);
        d3.selectAll("#bar_route-749").style("fill", routeSL4color);

        d3.select("#route_43").style("opacity", "0.3");
        d3.select("#route_1").style("opacity", "0.3");
        d3.select("#route_SL5").style("opacity", "0.3");

        d3.selectAll("#bar_route-1").style("fill", "#828583");
        d3.selectAll("#bar_route-43").style("fill", "#828583");
        d3.selectAll("#bar_route-751").style("fill", "#828583");

    }
    else if (gtfs_route_id !== "" && gtfs_route_id==="751") {
        mymap.removeLayer(markerLayerGroup1);
        mymap.removeLayer(markerLayerGroupSL4);
        mymap.removeLayer(markerLayerGroup43);
        mymap.removeLayer(markerLayerGroupSL5);
        markerLayerGroupSL5.addTo(mymap);
        Route43Polyline.setStyle({opacity: 0.5});
        RouteSL4Polyline.setStyle({opacity: 0.5});
        Route1Polyline.setStyle({opacity: 0.5});
        RouteSL5Polyline.setStyle({opacity: 1});

        d3.select("#route_43").style("opacity", "1");
        d3.select("#route_SL4").style("opacity", "1");
        d3.select("#route_1").style("opacity", "1");
        d3.select("#route_SL5").style("opacity", "1");

        d3.selectAll("#bar_route-1").style("fill", route1color);
        d3.selectAll("#bar_route-43").style("fill", route43color);
        d3.selectAll("#bar_route-751").style("fill", routeSL5color);
        d3.selectAll("#bar_route-749").style("fill", routeSL4color);

        d3.select("#route_43").style("opacity", "0.3");
        d3.select("#route_SL4").style("opacity", "0.3");
        d3.select("#route_1").style("opacity", "0.3");

        d3.selectAll("#bar_route-1").style("fill", "#828583");
        d3.selectAll("#bar_route-749").style("fill", "#828583");
        d3.selectAll("#bar_route-43").style("fill", "#828583");

    }

}

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
        .style("font", "14px times")
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
        .text("Total Average Headway Score for 2018");

    //appends all the bars to the chart, feeds in the data and appends bars to the chart. Assigns the
    // x variables to their associated attribute (the route ID), and assigns y variables to the calculated
    // headway score. Width of the X variables are determined on chart bandwidth, while height of the Y variables
    // are determined by the headway score
    svg.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return x(d.gtfs_route_id); })
        .attr("width", x.bandwidth())
        .attr("y", function(d) { return y(d.headway_score); })
        .attr("height", function(d) { return height - y(d.headway_score); })
        .on("click", onClick);

    //identifying route 1 and assigning an identifying color
    svg.selectAll(".bar")
        .filter(function(d){return d.gtfs_route_id === "1";})
        .attr("id","bar_route-1")
        .style("fill","#66C2A5");

    //identifying route 43 and assigning an identifying color
    svg.selectAll(".bar")
        .filter(function(d){return d.gtfs_route_id === "43";})
        .attr("id","bar_route-43")
        .style("fill","#fc8d62");

    //identifying route SL4 and assigning an identifying color
    svg.selectAll(".bar")
        .filter(function(d){return d.gtfs_route_id === "749";})
        .attr("id","bar_route-749")
        .style("fill","#e78ac3");

    //identifying route SL5 and assigning an identifying color
    svg.selectAll(".bar")
        .filter(function(d){return d.gtfs_route_id === "751";})
        .attr("id","bar_route-751")
        .style("fill","#8da0cb");

});