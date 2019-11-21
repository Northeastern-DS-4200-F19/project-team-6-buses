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


d3.csv("data/OTP by month/Month-by-Month OTP Score.csv",


    // When reading the csv, I must format variables:
    function(d){
        return { gtfs_route_id: d.gtfs_route_id, month : d.month, headway_score : d.headway_score }
    },

    // Now I can use this dataset:
    function(data) {

        var x_min = d3.min(data, function (d) {
            return +d.month
        });
        var x_max = d3.max(data, function (d) {
            return +d.month
        });

        var formatter = d3.timeFormat("%B");
        var jan = 1;
        var name = formatter(1);

        // Add X axis --> it is a date format
        var x = d3.scaleTime()
            .domain([new Date(2018, 0, 1), new Date(2018, 11, 1)])
            //d3.extent(data, function(d) { return d.date }))
            .range([0, width]);

        var x_axis = d3.axisBottom().scale(x)
            .tickFormat(d3.timeFormat("%B"));

        //svg.select(x_axis)
            //.attr("transform", "rotate(-65)");

        svg.append("g")
            .attr("class","axis")
                .attr("transform"
                , "translate(0," + height + ")")
            .call(x_axis)
                .selectAll("text")
                .style("text-anchor","end")
                .attr("dx","-.8em")
                .attr("dy",".15em")
                .attr("transform", "rotate(-65)");

        svg.append("text")
            .attr("transform",
                "translate(" + (width/2) + "," + (height + margin.top + 20) + ")")
            .style("text-anchor", "middle")
            .text("Month");

        // Add Y axis
        var y = d3.scaleLinear()
            .domain([d3.min(data, function (d) {
                return +d.headway_score
            }) - .1, d3.max(data, function (d) {
                return +d.headway_score;
            }) + .1])
            .range([height, 0]);

        var y_axis = d3.axisLeft().scale(y);

        svg.append("g")
            .call(y_axis);

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

        function routeOne(all_route_data) {
            var routeOneData = all_route_data.filter(function (d) {
                if (d["gtfs_route_id"] === "1") {
                    return d;
                }
            });

            svg.append("path")
                .datum(routeOneData)
                .attr("fill", "none")
                .attr("id", "route_1")
                .attr("stroke", "#66C2A5")
                .attr("stroke-width", 1.5)
                .attr("d", d3.line()
                    .x(function (d) {
                        return x(new Date(2018, d.month - 1, 1))
                    })
                    .y(function (d) {
                        return y(d.headway_score)
                    })
                )
        }

        function route43(all_route_data) {
            var route43Data = all_route_data.filter(function (d) {
                if (d["gtfs_route_id"] === "43") {
                    return d;
                }
            });

            svg.append("path")
                .datum(route43Data)
                .attr("fill", "none")
                .attr("id", "route_43")
                .attr("stroke", "#fc8d62")
                .attr("stroke-width", 1.5)
                .attr("d", d3.line()
                    .x(function (d) {
                        return x(new Date(2018, d.month - 1, 1))
                    })
                    .y(function (d) {
                        return y(d.headway_score)
                    })
                )
        }

        function route749(all_route_data) {
            var route749Data = all_route_data.filter(function (d) {
                if (d["gtfs_route_id"] === "749") {
                    return d;
                }
            });

            svg.append("path")
                .datum(route749Data)
                .attr("fill", "none")
                .attr("id", "route_SL4")
                .attr("stroke", "#e78ac3")
                .attr("stroke-width", 1.5)
                .attr("d", d3.line()
                    .x(function (d) {
                        return x(new Date(2018, d.month - 1, 1))
                    })
                    .y(function (d) {
                        return y(d.headway_score)
                    })
                )
        }

        function route751(all_route_data) {
            var route751Data = all_route_data.filter(function (d) {
                if (d["gtfs_route_id"] === "751") {
                    return d;
                }
            });

            svg.append("path")
                .datum(route751Data)
                .attr("fill", "none")
                .attr("id", "route_SL5")
                .attr("stroke", "#8da0cb")
                .attr("stroke-width", 1.5)
                .attr("d", d3.line()
                    .x(function (d) {
                        return x(new Date(2018, d.month - 1, 1))
                    })
                    .y(function (d) {
                        return y(d.headway_score)
                    })
                )
        }

        routeOne(data);
        route43(data);
        route749(data);
        route751(data);

    });