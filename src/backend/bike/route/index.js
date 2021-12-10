"use strict";
const { response } = require("express");
const express = require("express");
const router = express.Router();
// import fetch from "node-fetch";
const fetch = require("node-fetch");
const https = require("https");
const http = require("http");

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
        // console.log(body);
    });
});

router.get("/put/:bikeid", async (req, res) => {
    let bikeid = req.params.bikeid;
    const request = require("request");

    let t = await fetch("http://localhost:8000/api/bike/" + bikeid);
    let { data } = await t.json();
    let oldLongitude = data.longitude.toString();
    let oldLatitude = data.latitude.toString();

    let long1 = Math.floor(Math.random() * 8);
    let long2 = Math.floor(Math.random() * 8);

    let lat1 = Math.floor(Math.random() * 8);
    let lat2 = Math.floor(Math.random() * 8);

    let newLongitude = oldLongitude.slice(0, -2) + long1 + long2;
    let newLatitude = oldLatitude.slice(0, -2) + lat1 + lat2;

    const options = {
        url: "http://localhost:8000/api/bike/" + bikeid,
        json: true,
        body: {
            longitude: parseFloat(newLongitude),
            latitude: parseFloat(newLatitude),
        },
    };

    request.put(options, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        console.log(`Status: ${res.statusCode}`);
        console.log(body);
    });
});

module.exports = router;
