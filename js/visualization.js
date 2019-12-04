var shapeData;

// coordinates for each of four bus lines (separated by inbound and outbound)
var coords1 = [];
var coords2 =[];
var coords3 = [];
var coords4 = [];
var coords5 = [];
var coords6 = [];
var coords7 = [];
var coords8 = [];

// coordinates for each bus line
var Route1coords = [];
var Route43coords =[];
var RouteSL4coords =[];
var RouteSL5coords = [];

// Right map on our visualization
var mymap;

// One layer group of markers for each route
var markerLayerGroup1;
var markerLayerGroup43;
var markerLayerGroupSL4;
var markerLayerGroupSL5;

// One polyline for each route
var Route1Polyline;
var Route43Polyline;
var RouteSL4Polyline;
var RouteSL5Polyline;

// Load polylines onto mymap
d3.csv("data/MBTA_GTFS_csv/RouteShapes.csv").then(function(data) {
    shapeData = data;

}).then(function() {
    let i;
    for (i = 0; i < shapeData.length; i++) {
        let point = shapeData[i];
        if (point["shape_id"] === "010058") {
            lat = point["shape_pt_lat"];
            long = point["shape_pt_lon"];
            coord = [lat, long];
            coords1.push(coord);

        } else if (point["shape_id"] === "430031") {
            lat = point["shape_pt_lat"];
            long = point["shape_pt_lon"];
            coord = [lat, long];
            coords2.push(coord);

        } else if (point["shape_id"] === "7490022") {
            lat = point["shape_pt_lat"];
            long = point["shape_pt_lon"];
            coord = [lat, long];
            coords3.push(coord);

        } else if (point["shape_id"] === "7510024") {
            lat = point["shape_pt_lat"];
            long = point["shape_pt_lon"];
            coord = [lat, long];
            coords4.push(coord);
        } else if (point["shape_id"] === "010070") {
            lat = point["shape_pt_lat"];
            long = point["shape_pt_lon"];
            coord = [lat, long];
            coords5.push(coord);
        }else if (point["shape_id"] === "430029") {
            lat = point["shape_pt_lat"];
            long = point["shape_pt_lon"];
            coord = [lat, long];
            coords6.push(coord);
        }else if (point["shape_id"] === "7490023") {
            lat = point["shape_pt_lat"];
            long = point["shape_pt_lon"];
            coord = [lat, long];
            coords7.push(coord);
        }else if (point["shape_id"] === "7510025") {
            lat = point["shape_pt_lat"];
            long = point["shape_pt_lon"];
            coord = [lat, long];
            coords8.push(coord);
        }
    }

    Route1coords.push(coords1, coords5);
    Route43coords.push(coords2,coords6);
    RouteSL4coords.push(coords4,coords8);
    RouteSL5coords.push(coords3,coords7);

    mymap = L.map('mapid').setView([42.3530, -71.09], 13);

    mymap.scrollWheelZoom.disable();


    Route1Polyline = L.polyline(Route1coords,{color:route1color});
    Route1Polyline.on('click',onClick);
    Route1Polyline.on('mouseover',onClick);
    Route1Polyline.on('mouseout',offClick);
    Route1Polyline.setStyle({
        weight: 5
    });
    Route1Polyline.addTo(mymap);

    Route43Polyline = L.polyline(Route43coords,{color:route43color});
    Route43Polyline.on('click',onClick);
    Route43Polyline.on('mouseover',onClick);
    Route43Polyline.on('mouseout',offClick);
    Route43Polyline.setStyle({
        weight: 5
    });
    Route43Polyline.addTo(mymap);

    RouteSL4Polyline = L.polyline(RouteSL4coords,{color:routeSL4color});
    RouteSL4Polyline.on('click',onClick);
    RouteSL4Polyline.on('mouseover',onClick);
    RouteSL4Polyline.on('mouseout',offClick);
    RouteSL4Polyline.setStyle({
        weight: 5
    });
    RouteSL4Polyline.addTo(mymap);

    RouteSL5Polyline = L.polyline(RouteSL5coords,{color:routeSL5color});
    RouteSL5Polyline.on('click',onClick);
    RouteSL5Polyline.on('mouseover',onClick);
    Route1Polyline.on('mouseout',offClick);
    RouteSL5Polyline.setStyle({
        weight: 5
    });
    RouteSL5Polyline.addTo(mymap);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.' +
        'png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
        {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 15,
            minZoom: 12,
            id: 'mapbox.streets',
            accessToken: 'your.mapbox.access.token'
        }).addTo(mymap);

});

// stores route stop data
var routestops;

// store all stop markers that will be created for each route
var allStopMarkers1 = new Array();
var allStopMarkers43 = new Array();
var allStopMarkersSL4 = new Array();
var allStopMarkersSL5 = new Array();

// load stop markers onto mymap
d3.csv("data/Misc csv's/relevant_stops.csv").then(function (data) {
    routestops = data;
}).then(function() {
    let routestop;

    for (routestop = 0; routestop < routestops.length; routestop++){

        let stop = routestops[routestop];
        lat = stop["lat"];
        long = stop["long"];
        stopname = stop["Stop Name"];
        stopID = stop["Route"];

        let marker = L.circleMarker([lat,long], {title: stopID}).setRadius(3);

        if (stopID === "1") {
            allStopMarkers1.push(marker)
        }
        if (stopID === "43") {
            allStopMarkers43.push(marker)
        }
        if (stopID === "SL4") {
            allStopMarkersSL4.push(marker)
        }
        if (stopID === "SL5") {
            allStopMarkersSL5.push(marker)
        }


        //Hovering pop-up function
        marker.bindPopup(stopname);
        marker.on('mouseover',function (e){
            this.openPopup();
        });
        marker.on('mouseout',function(e){
            this.closePopup();
        });


    }

    markerLayerGroup1 = L.layerGroup(allStopMarkers1);
    markerLayerGroup43 = L.layerGroup(allStopMarkers43);
    markerLayerGroupSL4 = L.layerGroup(allStopMarkersSL4);
    markerLayerGroupSL5 = L.layerGroup(allStopMarkersSL5);

    markerLayerGroup1.addTo(mymap);
    markerLayerGroup43.addTo(mymap);
    markerLayerGroupSL4.addTo(mymap);
    markerLayerGroupSL5.addTo(mymap);

});


// Chester Square Visualization (on left)

// stores chester square stop data
var ChesterStops;

// colors of each route on visualization
var route1color = "#66c2a5";
var route43color = "#fc8d62";
var routeSL4color = "#e78ac3";
var routeSL5color = "#8da0cb";

// highlights route-specific parts of visualization
function onClick(e) {
    let marker_text = "";
    try {
        marker_text = e.target._popup._content;
    } catch (Error) {
        // do nothing
    }
    let polyline_color = "";
    try {
        polyline_color = e.target.options.color;
    } catch (Error) {
        // do nothing
    }
    if ((marker_text !== "" && marker_text.search("1") !== -1) || (polyline_color !== "" && polyline_color===route1color)) {
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
    else if ((marker_text !== "" && marker_text.search("43") !== -1 )|| (polyline_color !== "" && polyline_color===route43color)) {
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
    else if ((marker_text !== "" && marker_text.search("SL4") !== -1) || (polyline_color !== "" && polyline_color === routeSL4color)) {
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
    else if ((marker_text !== "" && marker_text.search("SL5") !== -1)|| (polyline_color !== "" && polyline_color === routeSL5color)) {
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

// resets highlights of route-specific parts of visualization
function offClick(e) {
    mymap.removeLayer(markerLayerGroup43);
    mymap.removeLayer(markerLayerGroupSL4);
    mymap.removeLayer(markerLayerGroupSL5);
    mymap.removeLayer(markerLayerGroup1);
    markerLayerGroup1.addTo(mymap);
    markerLayerGroup43.addTo(mymap);
    markerLayerGroupSL4.addTo(mymap);
    markerLayerGroupSL5.addTo(mymap);
    Route1Polyline.setStyle({opacity:1});
    Route43Polyline.setStyle({opacity:1});
    RouteSL4Polyline.setStyle({opacity:1});
    RouteSL5Polyline.setStyle({opacity:1});
    d3.select("#route_43").style("opacity", "1");
    d3.select("#route_SL4").style("opacity", "1");
    d3.select("#route_1").style("opacity", "1");
    d3.select("#route_SL5").style("opacity", "1");
    d3.selectAll("#bar_route-1").style("fill", route1color);
    d3.selectAll("#bar_route-43").style("fill", route43color);
    d3.selectAll("#bar_route-751").style("fill", routeSL5color);
    d3.selectAll("#bar_route-749").style("fill", routeSL4color);
}

// load Chester Square stop markers onto Chester Square map
d3.csv("data/MBTA_GTFS_csv/Chester_Square_stops.csv").then(function(data2){
        ChesterStops = data2;
    }).then(function(){

        let b;

        for(b =0; b < ChesterStops.length; b++){

            let stops = ChesterStops[b];
            lat = stops["lat"];
            long = stops["long"];
            stopname = stops["StopName"];
            stopID = stops["Shape_id"];

            let marker = L.marker([lat,long]);


            marker.addTo(mymap2);
            marker.bindPopup("<b>Route: </b>" + stopID + "<br>" + "<b>Stop Name: </b>"+ stopname).openPopup();
            marker.on('click', onClick);
            marker.on('mouseover',onClick);
            marker.on('mouseout',offClick);
            marker.off('click', offClick);
        }
    });

    var mymap2 = L.map('mapid2',
        {zoomControl:false})
        .setView([42.3382, -71.079], 16
        );

    mymap2.touchZoom.disable();
    mymap2.doubleClickZoom.disable();
    mymap2.scrollWheelZoom.disable();
    mymap2.boxZoom.disable();
    mymap2.keyboard.disable();
    mymap2.dragging.disable();
    

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.' +
        'png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox.streets',
        accessToken: 'your.mapbox.access.token'})
        .addTo(mymap2);

d3.selectAll("#bar_route-1").on("click",onClick);
d3.selectAll("#bar_route-43").on("click",onClick);
d3.selectAll("#bar_route-751").on("click",onClick);
d3.selectAll("#bar_route-749").on("click",onClick);