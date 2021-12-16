import m from "mithril";
import {apiKey} from "../vars.js";

let users = {
    infoUsers: {},
    infoBikes: {},
    getInfoUser: function() {
        return m.request({
            method: "GET",
            url: `http://localhost:8080/api/customer/2`,
            headers: {"Authorization": `Bearer ${apiKey}`}
        }).then(function(result) {
            users.infoUser = result.data;
        });
    },
    saveToHistory: function(bikeId, currLoc, sum, startTime) {
        // m.request({
        //     method: "GET",
        //     url: `http://localhost:8080/api/bike/${bikeId}`,
        //     headers: {"Authorization": `Bearer ${apiKey}`}
        // }).then(function(result) {
        //     users.infoBikes = result.data;
        // });

        // var id = 2;
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        // console.log(users.infoBikes);

        var tripInfo = {
            customer: 2,
            bike: bikeId,
            start_longitude: currLoc[0],
            start_latitude: currLoc[1],
            start_time: startTime,
            end_longitude: 0,
            end_latitude: 0,
            cost: sum,
            city: 1
        };
        
        return m.request({
            method: "POST",
            url: `http://localhost:8080/api/customer/2/history`,
            headers: {"Authorization": `Bearer ${apiKey}`},
            body: tripInfo,
        }).then(function(result) {
            console.log(result);
            // return m.route.set("/timer");
        });
    },
    pay: function(sum) {
        // console.log(users.infoUser);
        var money = parseInt(users.infoUser.credits) - parseInt(sum);
        // console.log(money);
        var paymentInfo = {
            credits: money
        };

        return m.request({
            method: "PUT",
            url: `http://localhost:8080/api/customer/2`,
            headers: {"Authorization": `Bearer ${apiKey}`},
            body: paymentInfo,
        }).then(function(result) {
            console.log("pay");
            // return m.route.set("/timer");
        });
    }
};

export default users;