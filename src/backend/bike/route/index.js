"use strict";
const { response } = require("express");
const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const request = require("request");
let clearingInterval = 0;

router.get("/", async (req, res) => {
    const request = require("request");

    const options = {
        url: "http://localhost:8080/api/bike",
        json: true,
        body: {},
    };

    request.get(options, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        console.log(`Status: ${res.statusCode}`);
    });
});

router.get("/simulate/:bikeid", async (req, res) => {
    let bikeid = req.params.bikeid;
    clearingInterval = 0;

    activeBike(bikeid);

    const headers = {
        Authorization: "Bearer 3|SOSgnf9gCBBi4eVXj3qqwuC20HVXlDUiiyHOJYQr",
    };

    let t = await fetch("http://localhost:8080/api/bike/" + bikeid, {
        headers: headers,
    });
    let { data } = await t.json();
    let oldLongitude = data.longitude.toFixed(3);
    let oldLatitude = data.latitude.toFixed(3);
    let oldLong2 = data.longitude;
    let oldLat2 = data.latitude;
    let charging = data.charging;
    let warning = data.warning;

    let stringLat = oldLatitude.toString();
    let stringLong = oldLongitude.toString();

    let long1 = Math.floor(Math.random() * 8) + 1;
    // let long2 = Math.floor(Math.random() * 8) + 1;

    let lat1 = Math.floor(Math.random() * 8) + 1;
    // let lat2 = Math.floor(Math.random() * 8) + 1;

    let newLongitude = parseFloat(stringLong.slice(0, -1) + long1);
    let newLatitude = parseFloat(stringLat.slice(0, -1) + lat1);

    let newLat = parseFloat(newLatitude);
    let newLong = parseFloat(newLongitude);

    let intervalId = setInterval(function () {
        if (charging != 0 || warning != 0 || clearingInterval != 0) {
            console.log("ERROR. Bike charging or other warning.");
            deactiveBike(bikeid);
            clearInterval(intervalId);
            return;
        }
        if (
            oldLat2.toFixed(3) == newLat.toFixed(3) &&
            oldLong2.toFixed(3) == newLong.toFixed(3)
        ) {
            console.log("Done.");
            deactiveBike(bikeid);
            clearInterval(intervalId);
            return;
        }

        if (oldLat2.toFixed(3) > newLat.toFixed(3)) {
            oldLat2 -= 0.001;
        } else if (oldLat2.toFixed(3) < newLat.toFixed(3)) {
            oldLat2 += 0.001;
        }

        if (oldLong2.toFixed(3) > newLong.toFixed(3)) {
            oldLong2 -= 0.001;
        } else if (oldLong2.toFixed(3) < newLong.toFixed(3)) {
            oldLong2 += 0.001;
        }

        putLocation(bikeid, oldLat2.toFixed(3), oldLong2.toFixed(3));
    }, 8000);

    // console.log(oldLong2);
    // console.log(oldLat2);
    // console.log(newLong);
    // console.log(newLat);

    res.status(200).send("ok");
});

router.get("/charge/:bikeid", async (req, res) => {
    let bikeid = req.params.bikeid;

    chargeBike(bikeid);

    res.status(200).send("ok");
});

router.get("/uncharge/:bikeid", async (req, res) => {
    let bikeid = req.params.bikeid;

    unchargeBike(bikeid);

    res.status(200).send("ok");
});

router.get("/resetbike/:bikeid/:longitude/:latitude", async (req, res) => {
    let bikeid = req.params.bikeid;
    let longitude = req.params.longitude;
    let latitude = req.params.latitude;

    clearingInterval = 1;
    resetBike(bikeid, longitude, latitude);

    res.status(200).send("ok");
});

const putLocation = (bikeid, newLat, newLong) => {
    const options = {
        url: "http://localhost:8080/api/bike/" + bikeid,
        json: true,
        headers: {
            Authorization: "Bearer 3|SOSgnf9gCBBi4eVXj3qqwuC20HVXlDUiiyHOJYQr",
        },
        body: {
            longitude: parseFloat(newLong),
            latitude: parseFloat(newLat),
        },
    };

    request.put(options, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        // console.log(`Status: ${res.statusCode}`);
        // console.log(body);
    });
};

const activeBike = (bikeid) => {
    const options = {
        url: "http://localhost:8080/api/bike/" + bikeid,
        json: true,
        headers: {
            Authorization: "Bearer 3|SOSgnf9gCBBi4eVXj3qqwuC20HVXlDUiiyHOJYQr",
        },
        body: {
            active: 1,
            speed: 10,
        },
    };

    request.put(options, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        // console.log(`Status: ${res.statusCode}`);
        // console.log(body);
    });
};

const deactiveBike = (bikeid) => {
    const options = {
        url: "http://localhost:8080/api/bike/" + bikeid,
        json: true,
        headers: {
            Authorization: "Bearer 3|SOSgnf9gCBBi4eVXj3qqwuC20HVXlDUiiyHOJYQr",
        },
        body: {
            active: 0,
            speed: 0,
        },
    };

    request.put(options, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        // console.log(`Status: ${res.statusCode}`);
        // console.log(body);
    });
};

const chargeBike = (bikeid) => {
    const options = {
        url: "http://localhost:8080/api/bike/" + bikeid,
        json: true,
        headers: {
            Authorization: "Bearer 3|SOSgnf9gCBBi4eVXj3qqwuC20HVXlDUiiyHOJYQr",
        },
        body: {
            charging: 1,
            warning: 1,
        },
    };

    request.put(options, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        // console.log(`Status: ${res.statusCode}`);
        // console.log(body);
    });
};

const unchargeBike = (bikeid) => {
    const options = {
        url: "http://localhost:8080/api/bike/" + bikeid,
        json: true,
        headers: {
            Authorization: "Bearer 3|SOSgnf9gCBBi4eVXj3qqwuC20HVXlDUiiyHOJYQr",
        },
        body: {
            charging: 0,
            warning: 0,
        },
    };

    request.put(options, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        // console.log(`Status: ${res.statusCode}`);
        // console.log(body);
    });
};

const resetBike = (bikeid, long, lat) => {
    const options = {
        url: "http://localhost:8080/api/bike/" + bikeid,
        json: true,
        headers: {
            Authorization: "Bearer 3|SOSgnf9gCBBi4eVXj3qqwuC20HVXlDUiiyHOJYQr",
        },
        body: {
            longitude: long,
            latitude: lat,
            active: 0,
            speed: 0,
            charging: 0,
            warning: 0,
        },
    };

    request.put(options, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        // console.log(`Status: ${res.statusCode}`);
        // console.log(body);
    });
};

module.exports = router;
