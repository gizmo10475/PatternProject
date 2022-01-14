"use strict";
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const { response } = require("express");
const express = require("express");
const router = express.Router();
const adminfunc = require("../src/adminfunc.js");
const config = require("./../config/config.json");

router.get("/clients", async (req, res) => {
  var data = await adminfunc.getAllUsers();

  res.render("admin/clients", { data });
});

router.get("/clients/:id", async (req, res) => {
  let id = req.params.id;

  var data = await adminfunc.getUser(id);
  console.log(data);
  res.render("admin/oneClient", { data });
});

router.post("/clients/:id", urlencodedParser, async (req, res) => {
  let id = req.params.id;
  const fetch = require("node-fetch");

  const body = {
      name: req.body.name,
      email: req.body.email
    };

  const response = await fetch(`http://api/api/customer/${id}`, {
      method: 'put',
      body: JSON.stringify(body),
      headers: {'Content-Type': 'application/json', "Authorization": `Bearer ${config.apiKey}`}
  });
  const data = await response.json();

  res.redirect("/admin/clients");
});




router.get("/map", async (req, res) => {
  res.render("admin/map");
});

router.get("/bikes", async (req, res) => {
  let bikes;
  if (req.query["city"]) {
    bikes = await adminfunc.getBikesInCity(Number(req.query["city"]));
  } else {
    bikes = await adminfunc.getAllBikeInfo();
  }

  const cities = await adminfunc.getAllCities();

  res.render("admin/bikes", {bikes, cities});
});


module.exports = router;
