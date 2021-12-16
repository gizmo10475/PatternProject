import m from "mithril";
import {apiKey} from "../vars.js";

let stations = {
    mapCords: [],
    infoStations: {},
    getAllLocations: function() {
        return m.request({
            method: "GET",
            url: `http://localhost:8080/api/stations`,
            headers: {"Authorization": `Bearer ${apiKey}`}
        }).then(function(result) {
            stations.locations(result);
        });
    },
    locations: function(info) {
        for (var i = 0; i < info.data.length; i++) {
            stations.infoStations[info.data[i].id] = [info.data[i].longitude, info.data[i].latitude]
        }
    }
};

export default stations;