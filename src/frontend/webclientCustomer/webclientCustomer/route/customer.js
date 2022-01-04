"use strict";
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const { response } = require("express");
const express = require("express");
const router  = express.Router();
const clientfunc    = require("../src/clientfunc.js");

router.get("/history", async (req, res) => {
    var data = await clientfunc.getUserHistory(req.cookies["userId"], req.cookies["apiKey"]);
    var userName = req.cookies["userName"];

    res.render("customer/history", { data: data, username: userName });
});



router.get("/payment", async (req, res) => {
    var data = await clientfunc.getUserBalance(req.cookies["userId"], req.cookies["apiKey"]);
    var userName = req.cookies["userName"];

    res.render("customer/payment", { data: data, username: userName });
});

router.post("/payment", urlencodedParser, async (req, res) => {
    const fetch = require("node-fetch");

    let add = parseInt(req.body.sum) + parseInt(req.body.test);

    const body = {credits: add};
    console.log(add);

    const response = await fetch(`http://api/api/customer/${req.cookies["userId"]}`, {
        method: 'put',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json', "Authorization": `Bearer ${req.cookies["apiKey"]}`}
    });
    const data = await response.json();
    console.log(data);

    res.redirect('/customer/payment');
});

module.exports = router;
