"use strict";

const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const express = require("express");
const router  = express.Router();

router.get("/history", (req, res) => {
    res.send("History");
});

router.get("/payment", (req, res) => {
    res.send("Payment");
});


module.exports = router;