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
                color: color,
                weight: 3,
                opacity: .5,
                smoothFactor: 1
            });
            firstpolyline.addTo(mymap);
        } else if (point["shape_id"] === "430031") {
            lat = point["shape_pt_lat"];
            long = point["shape_pt_lon"];
            const coord = [lat, long];
            coords.push(coord);
            var secondpolyline = new L.Polyline(coords, {
                color: color,
                weight: 3,
                opacity: .5,
                smoothFactor: 1
            });
            secondpolyline.addTo(mymap);
        } else if (point["shape_id"] === "7410021") {
            lat = point["shape_pt_lat"];
            long = point["shape_pt_lon"];
            const coord = [lat, long];
            coords.push(coord);
            var thirdpolyline = new L.Polyline(coords, {
                color: color,
                weight: 3,
                opacity: .5,
                smoothFactor: 1
            });
            thirdpolyline.addTo(mymap);
        }
    }});

var mymap = L.map('mapid').setView([42.3530, -71.0770], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.' +
    'png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 14,
    minZoom: 12,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);