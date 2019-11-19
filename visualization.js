var shapeData;

var coords1 = [];
var coords2 =[];
var coords3 = [];
var coords4 = [];
var coords5 = [];
var coords6 = [];
var coords7 = [];
var coords8 = [];

var Route1coords = [];
var Route43coords =[];
var RouteSL4coords =[];
var RouteSL5coords = [];

var allcoords =[];

/*
var r = Math.floor(Math.random() * 255);
var g = Math.floor(Math.random() * 255);
var b = Math.floor(Math.random() * 255);
*/

var mymap;

var markerLayerGroup;
var markerLayerGroup1;
var markerLayerGroup43;
var markerLayerGroupSL4;
var markerLayerGroupSL5;

var Route1Polyline;
var Route43Polyline;
var RouteSL4Polyline;
var RouteSL5Polyline;

d3.csv("data/MBTA_GTFS_csv/RouteShapes.csv").then(function(data) {
    //console.log(data[4]);
    shapeData = data;

}).then(function() {
    var i;
    for (i = 0; i < shapeData.length; i++) {
        var point = shapeData[i];
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

    //allcoords.push(coords1,coords2, coords3, coords4, coords5, coords6, coords7, coords8);

    mymap = L.map('mapid').setView([42.3530, -71.09], 13);

    mymap.scrollWheelZoom.disable();


    Route1Polyline = L.polyline(Route1coords,{color:"#66c2a5"}).addTo(mymap);
    Route43Polyline = L.polyline(Route43coords,{color:"#fc8d62"}).addTo(mymap);
    RouteSL4Polyline = L.polyline(RouteSL4coords,{color:"#e78ac3"}).addTo(mymap);
    RouteSL5Polyline = L.polyline(RouteSL5coords,{color:"#8da0cb"}).addTo(mymap);

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

var routestops;

var allStopMarkers = new Array();
var allStopMarkers1 = new Array();
var allStopMarkers43 = new Array();
var allStopMarkersSL4 = new Array();
var allStopMarkersSL5 = new Array();



d3.csv("data/relevant_stops.csv").then(function (data) {
    routestops = data;
}).then(function() {
    var routestop;

    for (routestop = 0; routestop < routestops.length; routestop++){

        var stop = routestops[routestop];
        lat = stop["lat"];
        long = stop["long"];
        stopname = stop["Stop Name"];
        stopID = stop["Route"];

        var marker = L.circleMarker([lat,long], {title: stopID}).setRadius(3);

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

        //marker.addTo(mymap);

        //click and binding pop-up function
        //marker.bindPopup(stopname).openPopup();


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




/////Chester Square Visualization

    var ChesterStops;

    var ChesterCoords =[];

function onClick(e) {
    //console.log(marker._popup._content);
    var marker_text = e.target._popup._content;
    var routeNum = "-1";
    var routeLayerToUse;
    var markerListToUse;
    if (marker_text.search("1") !== -1) {
        routeNum = "1";
        markerListToUse = allStopMarkers1;
        mymap.removeLayer(markerLayerGroup43);
        mymap.removeLayer(markerLayerGroupSL4);
        mymap.removeLayer(markerLayerGroupSL5);
        mymap.removeLayer(markerLayerGroup1);
        markerLayerGroup1.addTo(mymap);
        Route43Polyline.setStyle({color: '#8f8c8c'});
        RouteSL5Polyline.setStyle({color: '#8f8c8c'});
        RouteSL4Polyline.setStyle({color: '#8f8c8c'});
        Route1Polyline.setStyle({color:"#66c2a5"});

        d3.select("#route_43").style("opacity", "1");
        d3.select("#route_SL4").style("opacity", "1");
        d3.select("#route_1").style("opacity", "1");
        d3.select("#route_SL5").style("opacity", "1");

        d3.select("#bar_route-1").style("opacity", "1");
        d3.select("#bar_route-43").style("opacity", "1");
        d3.select("#bar_route-749").style("opacity", "1");
        d3.select("#bar_route-751").style("opacity", "1");


        d3.select("#route_43").style("opacity", "0.2");
        d3.select("#route_SL4").style("opacity", "0.2");
        d3.select("#route_SL5").style("opacity", "0.2");

        d3.select("#bar_route-43").style("opacity", "0.2");
        d3.select("#bar_route-749").style("opacity", "0.2");
        d3.select("#bar_route-751").style("opacity", "0.2");



    }
    else if (marker_text.search("43") != -1) {
        routeNum = "43";
        markerListToUse = allStopMarkers43;
        mymap.removeLayer(markerLayerGroup43);
        mymap.removeLayer(markerLayerGroup1);
        mymap.removeLayer(markerLayerGroupSL4);
        mymap.removeLayer(markerLayerGroupSL5);
        markerLayerGroup43.addTo(mymap);
        Route1Polyline.setStyle({color: '#8f8c8c'});
        RouteSL5Polyline.setStyle({color: '#8f8c8c'});
        RouteSL4Polyline.setStyle({color: '#8f8c8c'});
        Route43Polyline.setStyle({color:"#fc8d62"});

        d3.select("#route_43").style("opacity", "1");
        d3.select("#route_SL4").style("opacity", "1");
        d3.select("#route_1").style("opacity", "1");
        d3.select("#route_SL5").style("opacity", "1");

        d3.select("#bar_route-1").style("opacity", "1");
        d3.select("#bar_route-43").style("opacity", "1");
        d3.select("#bar_route-749").style("opacity", "1");
        d3.select("#bar_route-751").style("opacity", "1");

        d3.select("#route_1").style("opacity", "0.2");
        d3.select("#route_SL4").style("opacity", "0.2");
        d3.select("#route_SL5").style("opacity", "0.2");

        d3.select("#bar_route-1").style("opacity", "0.2");
        d3.select("#bar_route-749").style("opacity", "0.2");
        d3.select("#bar_route-751").style("opacity", "0.2");

    }
    else if (marker_text.search("SL4") != -1) {
        routeNum = "SL4";
        markerListToUse = allStopMarkersSL4;
        mymap.removeLayer(markerLayerGroup1);
        mymap.removeLayer(markerLayerGroup43);
        mymap.removeLayer(markerLayerGroupSL4);
        mymap.removeLayer(markerLayerGroupSL5);
        markerLayerGroupSL4.addTo(mymap);
        Route43Polyline.setStyle({color: '#8f8c8c'});
        Route1Polyline.setStyle({color: '#8f8c8c'});
        RouteSL5Polyline.setStyle({color: '#8f8c8c'});
        RouteSL4Polyline.setStyle({color:"#e78ac3"});

        d3.select("#route_43").style("opacity", "1");
        d3.select("#route_SL4").style("opacity", "1");
        d3.select("#route_1").style("opacity", "1");
        d3.select("#route_SL5").style("opacity", "1");

        d3.select("#bar_route-1").style("opacity", "1");
        d3.select("#bar_route-43").style("opacity", "1");
        d3.select("#bar_route-749").style("opacity", "1");
        d3.select("#bar_route-751").style("opacity", "1");

        d3.select("#route_43").style("opacity", "0.2");
        d3.select("#route_1").style("opacity", "0.2");
        d3.select("#route_SL5").style("opacity", "0.2");

        d3.select("#bar_route-43").style("opacity", "0.2");
        d3.select("#bar_route-1").style("opacity", "0.2");
        d3.select("#bar_route-751").style("opacity", "0.2");

    }
    else if (marker_text.search("SL5") != -1) {
        routeNum = "SL5";
        markerListToUse = allStopMarkersSL5;
        mymap.removeLayer(markerLayerGroup1);
        mymap.removeLayer(markerLayerGroupSL4);
        mymap.removeLayer(markerLayerGroup43);
        mymap.removeLayer(markerLayerGroupSL5);
        markerLayerGroupSL5.addTo(mymap);
        Route43Polyline.setStyle({color: '#8f8c8c'});
        RouteSL4Polyline.setStyle({color: '#8f8c8c'});
        Route1Polyline.setStyle({color: '#8f8c8c'});
        RouteSL5Polyline.setStyle({color:"#8da0cb"});

        d3.select("#route_43").style("opacity", "1");
        d3.select("#route_SL4").style("opacity", "1");
        d3.select("#route_1").style("opacity", "1");
        d3.select("#route_SL5").style("opacity", "1");

        d3.select("#bar_route-1").style("opacity", "1");
        d3.select("#bar_route-43").style("opacity", "1");
        d3.select("#bar_route-749").style("opacity", "1");
        d3.select("#bar_route-751").style("opacity", "1");

        d3.select("#route_43").style("opacity", "0.2");
        d3.select("#route_SL4").style("opacity", "0.2");
        d3.select("#route_1").style("opacity", "0.2");

        d3.select("#bar_route-43").style("opacity", "0.2");
        d3.select("#bar_route-749").style("opacity", "0.2");
        d3.select("#bar_route-1").style("opacity", "0.2");

    }

    var updatedStopMarkers = new Array();

/*    for (i=0; i<markerListToUse.length; i++) {
        var currentMarker = markerListToUse[i];
        var markerRoute = currentMarker.options.title;
        if (!(markerRoute === routeNum)) {
            currentMarker.options.__proto__.__proto__.opacity = 0.5;
            currentMarker.on('click',function (e){ // do nothing
                 });
        }
        else {
            currentMarker.options.__proto__.__proto__.opacity = 1;
        }
        updatedStopMarkers.push(currentMarker);
    }*/



/*    markerLayerGroup = L.layerGroup(updatedStopMarkers);

    markerLayerGroup.addTo(mymap);*/


/*    mymap.eachLayer(function(layer) {
        if(layer.options && layer.options.pane === "markerPane") {
            alert("Marker [" + layer.options.title + "]");
        }
    });*/

}

function offClick(e) {
    mymap.removeLayer(markerLayerGroup43);
    mymap.removeLayer(markerLayerGroupSL4);
    mymap.removeLayer(markerLayerGroupSL5);
    mymap.removeLayer(markerLayerGroup1);
    markerLayerGroup1.addTo(mymap);
    markerLayerGroup43.addTo(mymap);
    markerLayerGroupSL4.addTo(mymap);
    markerLayerGroupSL5.addTo(mymap);
    Route1Polyline.setStyle({color:"#66c2a5"});
    Route43Polyline.setStyle({color:"#fc8d62"});
    RouteSL4Polyline.setStyle({color:"#e78ac3"});
    RouteSL5Polyline.setStyle({color:"#8da0cb"});
    d3.select("#route_43").style("opacity", "1");
    d3.select("#route_SL4").style("opacity", "1");
    d3.select("#route_1").style("opacity", "1");
    d3.select("#route_SL5").style("opacity", "1");

}

d3.csv("data/MBTA_GTFS_csv/Chester_Square_stops.csv").then(function(data2){

        ChesterStops = data2;

    }).then(function(){

        var b;

        for(b =0; b < ChesterStops.length; b++){

            var stops = ChesterStops[b];
            lat = stops["lat"];
            long = stops["long"];
            stopname = stops["StopName"];
            stopID = stops["Shape_id"];

            var marker = L.marker([lat,long]);


            marker.addTo(mymap2);
            marker.bindPopup("<b>Route: </b>" + stopID + "<br>" + "<b>Stop Name: </b>"+ stopname).openPopup();
            marker.on('click', onClick);
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

//linechart code


