"use strict";
// import fetch from 'node-fetch';
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const { response } = require("express");
const express = require("express");
const router  = express.Router();
const clientfunc    = require("../src/clientfunc.js");

router.get("/history", async (req, res) => {
    var data = await clientfunc.getUserHistory(req.cookies["apiKey"]);

    res.render("customer/history", { data });
});



router.get("/payment", async (req, res) => {
    var data = await clientfunc.getUserBalance(req.cookies["apiKey"]);

    res.render("customer/payment", { data });
});

router.post("/payment", urlencodedParser, async (req, res) => {
    const fetch = require("node-fetch");

    let add = parseInt(req.body.sum) + parseInt(req.body.test);

    const body = {credits: add};

    const response = await fetch('http://localhost:8080/api/customer/2', {
        method: 'put',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json', "Authorization": `Bearer ${req.cookies["apiKey"]}`}
    });
    const data = await response.json();

    res.redirect('/customer/payment');
});

module.exports = router;
