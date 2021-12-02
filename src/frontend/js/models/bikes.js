import m from "mithril";

let bikes = {
    // allActiveBikes: [],
    mapCords: [],
    infoBikes: {},
    currentId: "",
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
            url: `http://localhost:8080/api/bike`
        }).then(function(result) {
            bikes.locations(result);
        });
    },
    locations: function(info) {
        for (var i = 0; i < info.data.length; i++) {
            bikes.infoBikes[info.data[i].id] = [info.data[i].longitude, info.data[i].latitude]
        }
    },
    rentBike: function(id) {
        var bikeInfo = {
            active: 1
        };
    
        return m.request({
            method: "PUT",
            url: `http://localhost:8080/api/bike/${id}`,
            body: bikeInfo,
            // Accept: "application/json"
        }).then(function(result) {
            console.log(result);
            // bikes.locations(result);
        });
    },
    // locations: function(info) {
    //     for (var i = 0; i < info.data.length; i++) {
    //         bikes.mapCords.push({ id: info.data[i].id, lat: info.data[i].latitude,
    //             long: info.data[i].longitude});
    //     }
    // }
};

export default bikes;