import m from "mithril";
import bikes from "../models/bikes.js";

let form = {
    oninit: function() {
        bikes.getAllLocations();
        // stations.getAllLocations();
    },
    view: function() {
        let options = Object.keys(bikes.infoBikes);
        options.unshift(" ");
        return m("main.container", [
            m("h1", "Form"),
            m("form", {
                onsubmit: function(event) {
                    event.preventDefault();
                    bikes.rentBike(bikes.currentId);
                }
            }, [
                m("label.input-label", "Välj cykel"),
                m("select.input", {
                    onchange: function (event) {
                        bikes.currentId = event.target.value;
                    }
                }, [
                    options.map(o => m('option', { value: o }, o.toLocaleString()))
                ]),
                // m("input[type=submit][value=Hyr].rentBtn", "Hyr")
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
    return input > 10 ? input : `0${input}`
}


function goHome() {
    m.route.set("/");
    window.location.reload();
    alert("Din resa är nu avslutad!");
}



export default form;


