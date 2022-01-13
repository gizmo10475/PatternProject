"use strict";
const fetch = require("node-fetch");
const config = require("./../config/config.json");

module.exports = {
    getAllUsers: getAllUsers,
    getUser: getUser,
    getAllBikes: getAllBikes,
    getAllStations: getAllStations,
    getAllParking: getAllParking,
    getAllBikeInfo,
    getAllCities,
    getBikesInCity
};

let headers = {
    Authorization: `Bearer ${config.apiKey}`,
    Accept: "application/json"
}

async function getAllUsers() {
    let response = await fetch("http://api/api/customer", { headers });
    let {data} = await response.json();
    return data;
}

async function getUser(id) {
    let response = await fetch(`http://api/api/customer/${id}`, { headers });
    let {data} = await response.json();
    return data;
}


async function getAllBikes() {
    let response = await fetch("http://api/api/bike", { headers });
    let {data} = await response.json();
    
    let infoBikes = {};

    for (var i = 0; i < data.length; i++) {
        infoBikes[data[i].id] = [data[i].longitude, data[i].latitude]
    }

    return infoBikes;
}


async function getAllStations() {
    let response = await fetch("http://api/api/stations", { headers });
    let {data} = await response.json();
    
    let infoStations = {};

    for (var i = 0; i < data.length; i++) {
        infoStations[data[i].id] = [data[i].longitude, data[i].latitude]
    }

    return infoStations;
}


async function getAllParking() {
    let response = await fetch("http://api/api/parking", { headers });
    let {data} = await response.json();
    
    let infoParking = {};

    for (var i = 0; i < data.length; i++) {
        infoParking[data[i].radius] = [data[i].center_long, data[i].center_lat]
    }

    return infoParking;
}

async function getAllCities() {
    const response = await fetch("http://api/api/city", { headers });
    const { data } = await response.json();

    return data;
}

async function getBikesInCity(cityID) {
    const response = await fetch(`http://api/api/city/${cityID}/bikes`, { headers });
    const { data } = await response.json();

    return data["bikes"];
}

async function getAllBikeInfo() {
    const response = await fetch("http://api/api/bike", { headers });
    const { data } = await response.json();

    return data;
}
