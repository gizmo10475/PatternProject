import m from "mithril";
import {apiKey} from "../vars.js";

let users = {
    infoUsers: {},
    infoBikes: {},
    getInfoUser: function() {
        return m.request({
            method: "GET",
            url: `http://localhost:8080/api/customer/3`,
            headers: {"Authorization": `Bearer ${apiKey}`}
        }).then(function(result) {
            users.infoUser = result.data;
        });
    },
    saveToHistory: async function(bikeId, startLoc, endLoc, sum, startTime) {
        var tripInfo = {
            customer: 3,
            bike: bikeId,
            start_longitude: startLoc[0],
            start_latitude: startLoc[1],
            start_time: startTime,
            end_longitude: endLoc[0],
            end_latitude: endLoc[1],
            cost: sum,
            city: 1
        };
        
        await m.request({
            method: "POST",
            url: `http://localhost:8080/api/customer/3/history`,
            headers: {"Authorization": `Bearer ${apiKey}`},
            body: tripInfo,
        })
    },
    pay: async function(sum) {
        // console.log(users.infoUser);
        var money = parseInt(users.infoUser.credits) - parseInt(sum);
        // console.log(money);
        var paymentInfo = {
            credits: money
        };

        await m.request({
            method: "PUT",
            url: `http://localhost:8080/api/customer/3`,
            headers: {"Authorization": `Bearer ${apiKey}`},
            body: paymentInfo,
        })
    }
};

export default users;