import m from "mithril";
import bikes from "../models/bikes.js";
import users from "../models/users.js";

let form = {
    oninit: function() {
        bikes.getAllLocations();
        users.getInfoUser();
    },
    view: function() {
        let options = Object.keys(bikes.infoBikes);
        options.unshift(" ");
        return m("main.container", [
            m("h1", "Hyr en cykel"),
            m("p.infoText", "Du har " + users.infoUser.credits + ":- kvar på ditt konto." +
            " Det betyder att du kan åka i ca xx minuter. Vill du åka längre än så" +
            " kan du logga in och fylla på ditt saldo här."),
            m("form", {
                // onsubmit: function(event) {
                //     event.preventDefault();
                //     bikes.rentBike(bikes.currentId);
                // }
            }, [
                m("label.input-label", "Välj en cykel"),
                m("br"),
                m("select.input", {
                    onchange: function (event) {
                        bikes.currentId = event.target.value;
                    }
                }, [
                    options.map(o => m('option', { value: o }, o.toLocaleString()))
                ]),
                // m("input[type=submit][value=Hyr].rentBtn", "Hyr")
                m("br"),
                m("button", {onclick: test}, "Hyr")   
            ]
            )
        ]);
    }
};


var second = 0;
var minute = 0;
var hour = 0;
var sum = 10; //voi har en upplåsningsavgift på 10:- och sedan 3:-/min

var Counter = {
    view: function() {
        return m('main.container', [
            m('h1', (returnData(hour) + ':' + returnData(minute) + ':' + returnData(second))),
            m('h1', "Kostnad: " + sum + ":-"),
            m("button", {onclick: goHome}, "Avsluta resan")
        ])
    }
}

function test() {
    bikes.getBikeLocation();
    console.log(bikes.currentLocation);
    bikes.rentBike();
    m.render(document.body, m(Counter));

    timer = setInterval(function () {
        second++;
        if (second == 60) {
            second = 0;
            minute++;
            sum += 3;
        }
        if (minute == 60) {
            minute = 0;
            hour++;
        }
        m.render(document.body, m(Counter));
    }, 1000);
}


function returnData(input) {
    return input > 9 ? input : `0${input}`
}


function goHome() {
    users.saveToHistory(bikes.currentId, bikes.currentLocation, sum, bikes.currentTime);
    users.pay(sum);
    bikes.returnBike();
    m.route.set("/");
    window.location.reload();
    alert("Din resa är nu avslutad!");
}



export default form;


