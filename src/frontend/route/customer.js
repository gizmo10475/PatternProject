"use strict";

const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const express = require("express");
const router  = express.Router();

router.get("/history", (req, res) => {
    res.render("historyCustomer");
});

router.get("/payment", (req, res) => {
    res.render("paymentCustomer");
});


module.exports = router;
