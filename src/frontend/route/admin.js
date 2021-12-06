"use strict";

const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const express = require("express");
const router  = express.Router();
// const eshop    = require("../src/eshop.js");

router.get("/map", (req, res) => {
    res.send("Map");
});

router.get("/customers", (req, res) => {
    res.send("Customers");
});


module.exports = router;