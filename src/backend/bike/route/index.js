"use strict";
const { response } = require("express");
const express = require("express");
const router = express.Router();
// import fetch from "node-fetch";
const fetch = require("node-fetch");
const https = require("https");
const http = require("http");
const request = require("request");

router.get("/", async (req, res) => {
    const request = require("request");

    const options = {
        url: "http://localhost:8000/api/bike",
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

router.get("/put/:bikeid", async (req, res) => {
    let bikeid = req.params.bikeid;
    const request = require("request");

    activeBike(bikeid);

    let t = await fetch("http://localhost:8000/api/bike/" + bikeid);
    let { data } = await t.json();
    let oldLongitude = data.longitude.toString();
    let oldLatitude = data.latitude.toString();
    let oldLong2 = data.longitude;
    let oldLat2 = data.latitude;

    let long1 = Math.floor(Math.random() * 8);
    let long2 = Math.floor(Math.random() * 8);

    let lat1 = Math.floor(Math.random() * 8);
    let lat2 = Math.floor(Math.random() * 8);

    let newLongitude = oldLongitude.slice(0, -2) + long1 + long2;
    let newLatitude = oldLatitude.slice(0, -2) + lat1 + lat2;

    let intervalId;
    let newLat = parseFloat(newLatitude);
    let newLong = parseFloat(newLongitude);

    intervalId = setInterval(function () {
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
    }, 500);

    console.log(oldLongitude);
    console.log(oldLatitude);
    console.log(newLongitude);
    console.log(newLatitude);
    console.log("-------");

    res.status(200).send("ok");
});

const putLocation = (bikeid, newLat, newLong) => {
    const options = {
        url: "http://localhost:8000/api/bike/" + bikeid,
        json: true,
        body: {
            longitude: parseFloat(newLong),
            latitude: parseFloat(newLat),
        },
    };

    request.put(options, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        console.log(`Status: ${res.statusCode}`);
        // console.log(body);
    });
};

const activeBike = (bikeid) => {
    const options = {
        url: "http://localhost:8000/api/bike/" + bikeid,
        json: true,
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
        url: "http://localhost:8000/api/bike/" + bikeid,
        json: true,
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

module.exports = router;
