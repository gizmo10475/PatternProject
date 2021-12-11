"use strict";
// import fetch from 'node-fetch';
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const { response } = require("express");
const express = require("express");
const router = express.Router();
const clientfunc = require("../src/clientfunc.js");

router.get("/history", async (req, res) => {
  var data = await clientfunc.getUserHistory();

  res.render("admin/history", { data });
});

router.get("/extra", async (req, res) => {


  res.render("admin/extra");
});


module.exports = router;
