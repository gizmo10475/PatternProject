"use strict";
const fetch = require("node-fetch");

module.exports = {
    getUserHistory: getUserHistory,
    getUserBalance: getUserBalance
};



async function getUserHistory(userId, apiKey) {
    console.log(apiKey);
    let response = await fetch(`http://api/api/customer/${userId}/history`, {
        headers: {"Authorization": `Bearer ${apiKey}`}
    });
    let {data} = await response.json();
    return data;
}


async function getUserBalance(userId, apiKey) {
    let response = await fetch(`http://api/api/customer/${userId}/`, {
        headers: {"Authorization": `Bearer ${apiKey}`}
    });
    let {data} = await response.json();
    return data;
}
