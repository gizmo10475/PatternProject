"use strict";

const express = require("express");
const router  = express.Router();
// const fetch = require("node-fetch");
const clientfunc = require("../src/clientfunc");

router.get("/", async (req, res) => {
    res.render("index.ejs");
});

router.get("/admin", async (req, res) => {
  res.render("admin/index.ejs");
});

router.get("/customer", async (req, res) => {
  res.render("customer/index.ejs");
});










module.exports = router;
// /**
//  * Route for eshop.
//  */
// "use strict";

// const express = require("express");
// const router  = express.Router();

// const bodyParser = require("body-parser");
// const urlencodedParser = bodyParser.urlencoded({"extended": false});



// router.get("/", (req, res) => {
//     let data = {
//         title: "Välkommen | "
//     };

//     res.render("eshop/index", data);
// });


// router.get("/index", (req, res) => {
//     let data = {
//         title: "Välkommen "
//     };

//     res.render("eshop/index", data);
// });


// module.exports = router;
