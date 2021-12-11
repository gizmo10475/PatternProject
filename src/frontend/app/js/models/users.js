import m from "mithril";

let users = {
    infoUser: {}, // lägg in vid inloggning
    infoBikes: {},
    getInfoUser: function() {
        return m.request({
            method: "GET",
            url: `http://localhost:8080/api/customer/2`
        }).then(function(result) {
            users.infoUser = result.data;
        });
    },
    saveToHistory: function(bikeId, currLoc, sum, startTime) {
        var id = 2;
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var endTime = date + " " + time;

        var tripInfo = {
            id: id,
            customer: 1, // låt va nu
            bike: bikeId,
            start_longitude: currLoc[0],
            start_latitude: currLoc[1],
            start_time: startTime,
            end_longitude: 0.0, // låt va nu
            end_latitude: 0.0, // låt va nu
            end_time: endTime,
            cost: sum,
            city: 1 // låt va nu
        };
        
        return m.request({
            method: "POST",
            url: `http://localhost:8080/api/customer/${id}/history`,
            body: tripInfo,
        }).then(function(result) {
            console.log("saveToHistory");
            // return m.route.set("/timer");
        });
    },
    pay: function(sum) {
        console.log(users.infoUser);
        var money = parseInt(users.infoUser.credits) - parseInt(sum);
        console.log(money);
        var paymentInfo = {
            credits: money
        };

        return m.request({
            method: "PUT",
            url: `http://localhost:8080/api/customer/2`,
            body: paymentInfo,
        }).then(function(result) {
            console.log("pay");
            // return m.route.set("/timer");
        });
    }
};

export default users;