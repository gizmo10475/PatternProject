import m from "mithril";
import L from "leaflet";
import bikes from "../models/bikes.js";
import stations from "../models/stations.js";

// import "leaflet/dist/leaflet.css";
// import "leaflet/dist/images/marker-icon-2x.png";
// import "leaflet/dist/images/marker-icon.png";
// import "leaflet/dist/images/marker-shadow.png";

// import locationIcon from "../../location.png";



// import position from "../models/position.js";

// let map;

// var locationMarker = L.icon({
//     iconUrl: locationIcon,
//     iconSize:     [24, 24],
//     iconAnchor:   [12, 12],
//     popupAnchor:  [0, 0]
// });

let map;
/*
function showMap() {
    // let cor = bikes.mapCords;

    
    let map = L.map("map").setView([56.184, 15.6014], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',    {
        attribution: `&copy;
        <a href="https://www.openstreetmap.org/copyright">
        OpenStreetMap</a> contributors`
    }).addTo(map);

    // var marker = L.marker([56.184, 15.6014]).addTo(map);
    // var marker = L.marker([55.184, 15.6014]).addTo(map);


    // for (var i = 0; i < bikes.mapCords.length; i++) {
    //     console.log(bikes.mapCords[i].id);
    //     // console.log("hej!");
    //     var marker = L.marker([parseFloat(bikes.mapCords[i].lat),
    //         parseFloat(bikes.mapCords[i].long)]).addTo(map);
    //         // .bindPopup(bikes.mapCords[i].id);
    // }
    // var marker = L.marker([56.184, 15.6014]).addTo(map);
    // console.log(bikes.mapCords);
}
*/


function showMap() {
    var places = {
        "BTH": [56.181932, 15.590525]
    };
    
    
    map = L.map('map').setView(places["BTH"], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: `&copy;
        <a href="https://www.openstreetmap.org/copyright">
        OpenStreetMap</a> contributors`
    }).addTo(map);

    // for (var place in places) {
    //     if (Object.prototype.hasOwnProperty.call(places, place)) {
    //         L.marker(places[place]).addTo(map).bindPopup(place);
    //     }
    // } 

}

function renderMarker() {
    // // console.log(bikes.mapCords.length);
    // // for (let i = 0; i < bikes.mapCords.length; i++) {
    // //     // console.log(typeof bikes.mapCords[i].long);
    // //     var marker = L.marker([bikes.mapCords[i].long, bikes.mapCords[i].lat]).addTo(map);
    // //     // var marker = L.marker([parseFloat(bikes.mapCords[i].long), parseFloat(bikes.mapCords[i].lat)]).addTo(map);
    // //         // .bindPopup(bikes.mapCords[i].id);
    // // }

    // for (var i = 0; i < bikes.mapCords.length; i++) {
    //     console.log(bikes.mapCords[i].id);
    //     console.log(bikes.mapCords[0]);
    //     L.marker([bikes.mapCords[i].lat, bikes.mapCords[i].long]).addTo(map);
        
    //     // var x = bikes.mapCords[i].lat;
    //     // var y = bikes.mapCords[i].long;
        
    //     // var places = {
    //     //     "karlskrona" : [x, y]
    //     // };

        

    //     // var marker = L.marker(places["karlskrona"]).addTo(map);
    //         // .bindPopup(bikes.mapCords[i].id);
    // }



    for (var id in bikes.infoBikes) {
        if (Object.prototype.hasOwnProperty.call(bikes.infoBikes, id)) {
            L.marker(bikes.infoBikes[id]).addTo(map).bindPopup(id);
        //     var circle = L.circle(bikes.infoBikes[id], {
        //         color: 'red',
        //         fillColor: '#f03',
        //         fillOpacity: 0.5,
        //         radius: 500
        //     }).addTo(map);
        }
    }

    for (var id in stations.infoStations) {
        if (Object.prototype.hasOwnProperty.call(stations.infoStations, id)) {
            L.marker(stations.infoStations[id]).addTo(map).bindPopup(id);
        }
    } 
}

/*

Vi kan skicka med värdet in till formulärsidan med hjäp av leaflet,  leaflet-popup-content där värdet motsvarar id på arrayen bikes.infoBik


var popup = L.popup();

function onMapClick(e) {
popup
    .setLatLng(e.latlng)e
    .setContent(e.latlng.toString() + '<a href="form sidan, ta med id 1"> hyr här </a>"')
    .openOn(map);
}

map.on('click', onMapClick);


*/




let bikeMap = {
    oninit: function() {
        bikes.getAllLocations();
        stations.getAllLocations();
    },
    view: function() {
        if (bikes.infoBikes && stations.infoStations) {
            // console.log(stations.infoStations);
            renderMarker();
        }
        return m("main.container", [
            m("div#map.map", "")
        ]);
    },
    oncreate: function() {
        showMap();
    },
};

export default bikeMap;
