// set the dimensions and margins of the graph


var margin = {top: 40, right: 32, bottom: 75, left: 50},
    width = 510 + margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

// highlights route-specific parts of visualization
function onClick(e) {
    let gtfs_route_id = "";
    try {
        gtfs_route_id = e[0].gtfs_route_id
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

d3.csv("data/OTP by month/Month-by-Month OTP Score.csv",


    // When reading the csv, I must format variables:
    function(d){
        return { gtfs_route_id: d.gtfs_route_id, month : d.month, headway_score : d.headway_score }
    },

    // Now I can use this dataset:
    function(data) {


        let formatter = d3.timeFormat("%B");

        // Add X axis --> it is a date format
        let x = d3.scaleTime()
            .domain([new Date(2018, 0, 1), new Date(2018, 11, 1)])
            //d3.extent(data, function(d) { return d.date }))
            .range([0, width]);

        //defining the x-axis and appending it to the bottom of the svg, as well as formatting the ticks for the
        // axis. Appending the created 'x' variable information to this newly created variable
        let x_axis = d3.axisBottom().scale(x)
            .tickFormat(d3.timeFormat("%B"));


        // appending a group of attributes to the svg, specifically for ticks, and transforming them to be more
        // legible
        svg.append("g")
            .attr("class","axis")
            .attr("viewbox", "0 0 600 600")
            .style("font", "14px times")
                .attr("transform"
                , "translate(0," + height + ")")
            .call(x_axis)
                .selectAll("text")
                .style("text-anchor","end")
                .attr("dx","-.8em")
                .attr("dy",".15em")
                .attr("transform", "rotate(-65)");


        // giving the axis a label of  "Month"
        svg.append("text")
            .attr("transform",
                "translate(" + (width/2) + "," + (height + margin.top + 20) + ")")
            .style("text-anchor", "middle")
            .text("Month");

        // Add Y axis
        let y = d3.scaleLinear()
            .domain([d3.min(data, function (d) {
                return +d.headway_score
            }) - .1, d3.max(data, function (d) {
                return +d.headway_score;
            }) + .1])
            .range([height, 0]);

        //identifying a y-axis variable, and appending the created 'y' variable information to the axis
        let y_axis = d3.axisLeft().scale(y);

        //passing in the y-axis variable to the svg
        svg.append("g")
            .call(y_axis);


        //giving the y-axis label an identifying label
        svg.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 0 - margin.left)
            .attr("x", 0 - (height / 2))
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .text("Headway Score");

        //Title of Graph
        svg.append("text")
            .attr("x", (width / 2))
            .attr("y", 0 - (margin.top / 2))
            .attr("text-anchor", "middle")
            .style("font-size", "16px")
            .style("text-decoration", "underline")
            .text("Schedule Adherence Over Time for 2018");


        //function designed to pull out data specfically associated with each route. By filtering for
        // specific route ID's we were able to pull out the associated information and then pass it in as a
        // separate path onto the SVG
        function routeOne(all_route_data) {
            let routeOneData = all_route_data.filter(function (d) {
                if (d["gtfs_route_id"] === "1") {
                    return d;
                }
            });

            svg.append("path")
                .datum(routeOneData)
                .attr("fill", "none")
                .attr("id", "route_1")
                .attr("stroke", "#66C2A5")
                .attr("stroke-width", 5)
                .attr("d", d3.line()
                    .x(function (d) {
                        return x(new Date(2018, d.month - 1, 1))
                    })
                    .y(function (d) {
                        return y(d.headway_score)
                    })
                )
                .on("click", onClick)
                .on("mouseover",onClick)
                .on("mouseout",offClick)
        }

        //function designed to pull out data specfically associated with each route. By filtering for
        // specific route ID's we were able to pull out the associated information and then pass it in as a
        // separate path onto the SVG
        function route43(all_route_data) {
            let route43Data = all_route_data.filter(function (d) {
                if (d["gtfs_route_id"] === "43") {
                    return d;
                }
            });

            svg.append("path")
                .datum(route43Data)
                .attr("fill", "none")
                .attr("id", "route_43")
                .attr("stroke", "#fc8d62")
                .attr("stroke-width", 5)
                .attr("d", d3.line()
                    .x(function (d) {
                        return x(new Date(2018, d.month - 1, 1))
                    })
                    .y(function (d) {
                        return y(d.headway_score)
                    })
                )
                .on("click", onClick)
                .on("mouseover",onClick)
                .on("mouseout",offClick)
        }

        //function designed to pull out data specfically associated with each route. By filtering for
        // specific route ID's we were able to pull out the associated information and then pass it in as a
        // separate path onto the SVG
        function route749(all_route_data) {
            let route749Data = all_route_data.filter(function (d) {
                if (d["gtfs_route_id"] === "749") {
                    return d;
                }
            });

            svg.append("path")
                .datum(route749Data)
                .attr("fill", "none")
                .attr("id", "route_SL4")
                .attr("stroke", "#e78ac3")
                .attr("stroke-width", 5)
                .attr("d", d3.line()
                    .x(function (d) {
                        return x(new Date(2018, d.month - 1, 1))
                    })
                    .y(function (d) {
                        return y(d.headway_score)
                    })
                )
                .on("click", onClick)
                .on("mouseover",onClick)
                .on("mouseout",offClick)
        }

        //function designed to pull out data specfically associated with each route. By filtering for
        // specific route ID's we were able to pull out the associated information and then pass it in as a
        // separate path onto the SVG

        function route751(all_route_data) {
            let route751Data = all_route_data.filter(function (d) {
                if (d["gtfs_route_id"] === "751") {
                    return d;
                }
            });

            svg.append("path")
                .datum(route751Data)
                .attr("fill", "none")
                .attr("id", "route_SL5")
                .attr("stroke", "#8da0cb")
                .attr("stroke-width", 5)
                .attr("d", d3.line()
                    .x(function (d) {
                        return x(new Date(2018, d.month - 1, 1))
                    })
                    .y(function (d) {
                        return y(d.headway_score)
                    })
                )
                .on("click", onClick)
                .on("mouseover",onClick)
                .on("mouseout",offClick)
        }


        //running the functions and having them pull their specific data from the defined "data" variable which
        // is a d3 argument that reads in the data.
        routeOne(data);
        route43(data);
        route749(data);
        route751(data);

    });