"use strict";
const fetch = require("node-fetch");

module.exports = {
    getUserHistory: getUserHistory,
    getUserBalance: getUserBalance
};



async function getUserHistory() {
    let response = await fetch("http://localhost:8080/api/customer/1/history");
    let {data} = await response.json();
    return data;
}


async function getUserBalance() {
    let response = await fetch("http://localhost:8080/api/customer/1/");
    let {data} = await response.json();
    return data;
}
