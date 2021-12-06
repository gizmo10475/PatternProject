"use strict";

const express = require("express");
const router  = express.Router();

// Add a route for the path /
router.get("/", (req, res) => {
    res.send("Hello World");
});

// Add a route for the path /about
router.get("/about", (req, res) => {
    res.send("About something");
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
