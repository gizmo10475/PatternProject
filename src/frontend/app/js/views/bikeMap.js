import m from "mithril";
import * as L from "leaflet";
import "leaflet.markercluster";
import bikes from "../models/bikes.js";
import stations from "../models/stations.js";
import "leaflet.markercluster.layersupport";

let map;
let marker;
let refreshInterval = 0;

function showMap() {
    const places = {
        BTH: [56.181932, 15.590525],
    };

    map = L.map("map").setView(places["BTH"], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: `&copy;
        <a href="https://www.openstreetmap.org/copyright">
        OpenStreetMap</a> contributors`,
    }).addTo(map);
}

// en global marker som läggs till i MarkerClusterGroup, detta visas på kartan som en stor siffra när man zoomar ut, och ju närmare man zoomar in så delar de upp sig, inte färdiginställd, använder sig utav LayerSupport som gör att vi kan köra removeMarkers() funktion direkt som tar bort alla markers som skapat i den layer vi lagt de i.

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

//gjorde om renderStations och renderBikes så dessa lägga till i en layer som sedan läggs till maps,  marker -> lägga i layers -> läggs på map.

function renderStations() {
    clearInterval(refreshInterval);
    refreshInterval = 0;
    removeMarkers();

    for (const id in stations.infoStations) {
        if (Object.prototype.hasOwnProperty.call(stations.infoStations, id)) {
            markers.addLayer(L.marker(stations.infoStations[id]).bindPopup(id));
            map.addLayer(markers);
        }
    }
}

function renderBikes() {
    clearInterval(refreshInterval);
    refreshInterval = 0;
    removeMarkers();

    for (const id in bikes.infoBikes) {
        if (Object.prototype.hasOwnProperty.call(bikes.infoBikes, id)) {
            markers.addLayer(L.marker(bikes.infoBikes[id]).bindPopup(`Cykel ${id}`));
            map.addLayer(markers);
        }
    }

    refreshInterval = window.setInterval(async () => {
        await bikes.getAllLocations();
        renderBikes();
    }, 10000);
}

function removeMarkers() {
    markers.clearLayers();
}

let bikeMap = {
    oninit: async function () {
        await bikes.getAllLocations();
        stations.getAllLocations();
        renderBikes();
    },
    view: function () {
        return m("main.container", [
            m("div#map.map", ""),
            m("div.buttons", [
                m("button.renderBikes", { onclick: renderBikes }, "Cyklar"),
                m("button.renderStations", { onclick: renderStations }, "Stationer"),
                m(
                    "button.removeMarkers",
                    {
                        onclick: () => {
                            removeMarkers();
                            clearInterval(refreshInterval);
                            refreshInterval = 0;
                        },
                    },
                    "Göm markörer"
                ),
            ]),
            m("br"),
            m(m.route.Link, { href: "/form", className: "rent" }, "Hyr en cykel"),
        ]);
    },
    oncreate: function () {
        showMap();
    },
};

export default bikeMap;
