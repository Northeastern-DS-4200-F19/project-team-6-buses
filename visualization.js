var shapeData;

var coords1 = [];
var coords2 =[];
var coords3 = [];
var coords4 = [];
var allcoords =[];

var colors;
var r = Math.floor(Math.random() * 255);
var g = Math.floor(Math.random() * 255);
var b = Math.floor(Math.random() * 255);
colors= "rgb("+r+" ,"+g+","+ b+")";

var mymap;

var markerLayerGroup;

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
        }
    }
    allcoords.push(coords1,coords2, coords3, coords4);

    mymap = L.map('mapid').setView([42.3530, -71.0770], 13);


    L.polyline(allcoords,{color:colors}).addTo(mymap);


    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.' +
        'png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
        {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 15,
            minZoom: 12,
            id: 'mapbox.streets',
            accessToken: 'your.mapbox.access.token'
        }).addTo(mymap);

})

var routestops;

var allStopMarkers = new Array();

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

        allStopMarkers.push(marker);

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

    markerLayerGroup = L.layerGroup(allStopMarkers);
    markerLayerGroup.addTo(mymap);
});




/////Chester Square Visualization

    var ChesterStops;

    var ChesterCoords =[];

function onClick(e) {
    //console.log(marker._popup._content);
    var marker_text = e.target._popup._content;
    var routeNum = "-1";
    if (marker_text.search("1") != -1) {
        routeNum = "1";
    }
    else if (marker_text.search("43") != -1) {
        routeNum = "43";
    }
    else if (marker_text.search("SL4") != -1) {
        routeNum = "SL4";
    }
    else if (marker_text.search("SL5") != -1) {
        routeNum = "SL5";
    }

    var updatedStopMarkers = new Array();

    for (i=0; i<allStopMarkers.length; i++) {
        var currentMarker = allStopMarkers[i];
        var markerRoute = currentMarker.options.title;
        if (markerRoute !== routeNum) {
            currentMarker.options.__proto__.__proto__.opacity = 0.5;
            currentMarker.on('click',function (e){ // do nothing
                 });
        }
        updatedStopMarkers.push(currentMarker);
    }

    mymap.removeLayer(markerLayerGroup);

    markerLayerGroup = L.layerGroup(updatedStopMarkers);

    markerLayerGroup.addTo(mymap);


    mymap.eachLayer(function(layer) {
        if(layer.options && layer.options.pane === "markerPane") {
            alert("Marker [" + layer.options.title + "]");
        }
    });

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

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.' +
        'png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox.streets',
        accessToken: 'your.mapbox.access.token'})
        .addTo(mymap2);


