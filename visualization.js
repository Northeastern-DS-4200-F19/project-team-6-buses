var shapeData;

var coords = [];

var color;
var r = Math.floor(Math.random() * 255);
var g = Math.floor(Math.random() * 255);
var b = Math.floor(Math.random() * 255);
color= "rgb("+r+" ,"+g+","+ b+")";

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
            const coord = [lat, long];
            coords.push(coord);

            var firstpolyline = new L.Polyline(coords, {
                color: 'red',
                weight: 5,
                opacity: 6,
                smoothFactor: 1
            });
            firstpolyline.addTo(mymap);
        }}
    var x;
    for(x=0; x<shapeData.length; x++) {
        var point = shapeData[x];
        if (point["shape_id"] === "430031") {
            lat = point["shape_pt_lat"];
            long = point["shape_pt_lon"];
            const coord = [lat, long];
            coords.push(coord);

            var secondpolyline = new L.Polyline(coords, {
                color: 'blue',
                weight: 4,
                opacity: 5,
                smoothFactor: 1
            });
            secondpolyline.addTo(mymap);
        }}
    var y;
    for(y=0; y<shapeData.length; y++){
        var point = shapeData[y];
        if (point["shape_id"] === "7490022") {
            lat = point["shape_pt_lat"];
            long = point["shape_pt_lon"];
            const coord = [lat, long];
            coords.push(coord);

            var thirdpolyline = new L.Polyline(coords, {
                color: 'green',
                weight: 3,
                opacity: 4,
                smoothFactor: 1
            });
            thirdpolyline.addTo(mymap);
        }}
    var z;
    for(z=0; z<shapeData.length; z++){
        var point = shapeData[z];
        if (point["shape_id"] === "7510024") {
            lat = point["shape_pt_lat"];
            long = point["shape_pt_lon"];
            const coord = [lat, long];
            coords.push(coord);

            var fourthpolyline = new L.Polyline(coords, {
                color: 'purple',
                weight: 1,
                opacity: .5,
                smoothFactor: 1
            });
            fourthpolyline.addTo(mymap);
        }}

    });

var mymap = L.map('mapid').setView([42.3530, -71.0770], 13);

//We inspected and pull access token for the rights to a map straight from leaflet

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.' +
    'png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 14,
    minZoom: 12,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);