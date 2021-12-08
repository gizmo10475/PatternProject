"use strict";

module.exports = {
    getInfoUser: getInfoUser
};



async function getInfoUser() {
    fetch("http://localhost:8080/api/customer/1")
    .then(function (response) {
        return response.json();
    }).then(function(data) {
        console.log(data);
        return data;
    });

    // return res[0];
}
