// import L from "leaflet";
// import "leaflet.markercluster";
// import "leaflet.markercluster.layersupport";

const apiKey = "1|fEMkWDqEzE5zJv250nVx4cZwvHUbwR98fFTShUa6";

async function updateBikePositions(map, markers) {
    markers.clearLayers();

    let response = await fetch("http://localhost:8080/api/bike", {
        headers: {
            Authorization: `Bearer ${apiKey}`,
            Accept: "application/json",
        },
    });
    let data = await response.json();
    const bikes = data["data"];
    // let bikes = <%-JSON.stringify(data1)%>;

    // console.log(bikes);

    for (const place of bikes) {
        // if (Object.prototype.hasOwnProperty.call(bikes, place)) {
        //     L.marker(bikes[place], {icon: bikeIcon}).addTo(map).bindPopup(place);
        // }
        markers.addLayer(L.marker([place.longitude, place.latitude]));
        map.addLayer(markers);
    }

    const stationIcon = L.icon({
        iconUrl: "/img/marker-icon-grey.png",

        iconSize: [25, 41], // size of the icon
    });

    // let stations = <%-JSON.stringify(data2)%>;
    response = await fetch("http://localhost:8080/api/stations", {
        headers: {
            Authorization: `Bearer ${apiKey}`,
            Accept: "application/json",
        },
    });
    data = await response.json();
    const stations = data["data"];
    console.log(stations);

    for (let place of stations) {
        // if (Object.prototype.hasOwnProperty.call(stations, place)) {
        //     L.marker(stations[place], { icon: stationIcon }).addTo(map).bindPopup(place);
        // }
        markers.addLayer(
            L.marker([place.longitude, place.latitude], { icon: stationIcon }).bindPopup(
                `Laddstation ${place.id}`
            )
        );
        map.addLayer(markers);
    }
}

(async function () {
    let map = L.map("map").setView([56.181932, 15.590525], 8);

    const markers = new L.markerClusterGroup.layerSupport({
        spiderfyOnMaxZoom: true,
        removeOutsideVisibleBounds: true,
        animateAddingMarkers: true,
        iconCreateFunction: function (cluster) {
            return new L.DivIcon({
                html: "<div><span>" + cluster.getChildCount() + "</span></div>",
                className: "cluster-number",
                iconSize: new L.Point(40, 40),
            });
        },
    });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: `&copy;
        <a href="https://www.openstreetmap.org/copyright">
        OpenStreetMap</a> contributors`,
    }).addTo(map);

    // var bikeIcon = L.icon({
    //     iconUrl: '/img/bikeIcon.png',

    //     iconSize:     [38, 55], // size of the icon
    // });

    // let parking = <%-JSON.stringify(data3)%>;
    response = await fetch("http://localhost:8080/api/parking", {
        headers: {
            Authorization: `Bearer ${apiKey}`,
            Accept: "application/json",
        },
    });
    data = await response.json();
    const parking = data["data"];
    console.log(parking);

    for (let place of parking) {
        // if (Object.prototype.hasOwnProperty.call(parking, place)) {
        //     var circle = L.circle(parking[place], {
        //         color: "red",
        //         fillColor: "#f03",
        //         fillOpacity: 0.5,
        //         radius: place,
        //     }).addTo(map);
        // }
        L.circle([place.center_long, place.center_lat], {
            color: "red",
            fillColor: "#f03",
            fillOpacity: 0.5,
            radius: place.radius,
        })
            .addTo(map)
            .bindPopup(`Parkeringszon ${place.id}`);
    }

    window.setInterval(updateBikePositions.bind(this, map, markers), 10000);
})();
