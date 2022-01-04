"use strict";
const fetch = require("node-fetch");
const config = require("./../config/config.json");

module.exports = {
    getAllUsers: getAllUsers,
    getUser: getUser,
    getAllBikes: getAllBikes,
    getAllStations: getAllStations,
    getAllParking: getAllParking
};



async function getAllUsers() {
    let response = await fetch("http://localhost:8080/api/customer", {
        headers: {"Authorization": `Bearer ${config.apiKey}`}
    });
    let {data} = await response.json();
    return data;
}

async function getUser(id) {
    let response = await fetch(`http://localhost:8080/api/customer/${id}`, {
        headers: {"Authorization": `Bearer ${config.apiKey}`}
    });
    let {data} = await response.json();
    return data;
}


async function getAllBikes() {
    let response = await fetch("http://localhost:8080/api/bike", {
        headers: {"Authorization": `Bearer ${config.apiKey}`}
    });
    let {data} = await response.json();
    
    let infoBikes = {};

    for (var i = 0; i < data.length; i++) {
        infoBikes[data[i].id] = [data[i].longitude, data[i].latitude]
    }

    return infoBikes;
}


async function getAllStations() {
    let response = await fetch("http://localhost:8080/api/stations", {
        headers: {"Authorization": `Bearer ${config.apiKey}`}
    });
    let {data} = await response.json();
    
    let infoStations = {};

    for (var i = 0; i < data.length; i++) {
        infoStations[data[i].id] = [data[i].longitude, data[i].latitude]
    }

    return infoStations;
}


async function getAllParking() {
    let response = await fetch("http://localhost:8080/api/parking", {
        headers: {"Authorization": `Bearer ${config.apiKey}`}
    });
    let {data} = await response.json();
    
    let infoParking = {};

    for (var i = 0; i < data.length; i++) {
        infoParking[data[i].radius] = [data[i].center_long, data[i].center_lat]
    }

    return infoParking;
}