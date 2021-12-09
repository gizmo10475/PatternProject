"use strict";
const { response } = require("express");
const express = require("express");
const router = express.Router();
// import fetch from "node-fetch";
// const fetch = require("node-fetch");
const https = require("https");
const http = require("http");


router.get("/", async (req, res) => {
    const request = require("request");

    const options = {
        url: "http://localhost:8000/api/bike",
        json: true,
        body: {
        },
    };

    request.get(options, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        console.log(`Status: ${res.statusCode}`);
        console.log(body);
    });

});

router.get("/put", async (req, res) => {
    const request = require("request");

    const options = {
        url: "http://localhost:8000/api/bike/2",
        json: true,
        body: {
            longitude: "1111.11",
            latitude: "2222.22",
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
