import m from "mithril";

let bikes = {
    // allActiveBikes: [],
    mapCords: [],
    infoBikes: {},
    currentId: "",
    currentTime: "",
    currentLocation: {},
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
    getBikeLocation: function() {
        return m.request({
            method: "GET",
            url: `http://localhost:8080/api/bike/${bikes.currentId}`
        }).then(function(result) {
            bikes.currentLocation[0] = result.data.longitude;
            bikes.currentLocation[1] = result.data.latitude;
        });
    },
    locations: function(info) {
        for (var i = 0; i < info.data.length; i++) {
            bikes.infoBikes[info.data[i].id] = [info.data[i].longitude, info.data[i].latitude]
        }
    },
    rentBike: function() {
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        bikes.currentTime = date + " " + time;

        var bikeInfo = {
            active: 1
        };
    
        return m.request({
            method: "PUT",
            url: `http://localhost:8080/api/bike/${bikes.currentId}`,
            body: bikeInfo,
        }).then(function(result) {
            // console.log(result);
            return m.route.set("/timer");
        });
    },
    returnBike: function() {
        var bikeInfo = {
            active: 0
        };
    
        return m.request({
            method: "PUT",
            url: `http://localhost:8080/api/bike/${bikes.currentId}`,
            body: bikeInfo,
        }).then(function(result) {
            // console.log(result);
            // return m.route.set("/timer");
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