"use strict";
const fetch = require("node-fetch");

module.exports = {
    getUserHistory: getUserHistory,
    getUserBalance: getUserBalance
};



async function getUserHistory(cookie) {
    console.log(cookie);
    let response = await fetch("http://localhost:8080/api/customer/2/history", {
        headers: {"Authorization": `Bearer ${cookie}`}
    });
    let {data} = await response.json();
    return data;
}


async function getUserBalance(cookie) {
    let response = await fetch("http://localhost:8080/api/customer/2/", {
        headers: {"Authorization": `Bearer ${cookie}`}
    });
    let {data} = await response.json();
    return data;
}
