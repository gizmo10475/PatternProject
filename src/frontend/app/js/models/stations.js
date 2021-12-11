import m from "mithril";

let stations = {
    // allActiveBikes: [],
    mapCords: [],
    infoStations: {},
    // getAllActiveBikes: function() {
    //     return m.request({
    //         method: "GET",
    //         url: `http://localhost:8080/api/bike`
    //     }).then(function(result) {
    //         bikes.allActiveBikes = result.data;
    //     });
    // },
    getAllLocations: function() {
        return m.request({
            method: "GET",
            url: `http://localhost:8080/api/stations`
        }).then(function(result) {
            stations.locations(result);
        });
    },
    locations: function(info) {
        for (var i = 0; i < info.data.length; i++) {
            stations.infoStations[info.data[i].id] = [info.data[i].longitude, info.data[i].latitude]
        }
    },
    // locations: function(info) {
    //     for (var i = 0; i < info.data.length; i++) {
    //         bikes.mapCords.push({ id: info.data[i].id, lat: info.data[i].latitude,
    //             long: info.data[i].longitude});
    //     }
    // }
};

export default stations;