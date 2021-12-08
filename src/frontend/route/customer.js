"use strict";

const { response } = require("express");
const express = require("express");
const router  = express.Router();
const clientfunc    = require("../src/clientfunc.js");

router.get("/history", (req, res) => {
    let data = {
        title: "Historik"
    };

    res.render("customer/history", data);
});

router.get("/payment", async (req, res) => {
    let data = {
        title: "Saldo"
    };

    const fetch_response = await fetch(`http://localhost:8080/api/customer/1`);
    const json = await fetch_response.json();
    // response.json(json);
    console.log(json);
    // data.res = clientfunc.getInfoUser();

    res.render("customer/payment", data);
});

module.exports = router;
// "use strict";

// const bodyParser = require("body-parser");
// const urlencodedParser = bodyParser.urlencoded({ extended: false });
// const express = require("express");
// const router  = express.Router();

// router.get("/history", (req, res) => {
//     res.render("historyCustomer");
// });

// router.get("/payment", (req, res) => {
//     res.render("paymentCustomer");
// });


// module.exports = router;
