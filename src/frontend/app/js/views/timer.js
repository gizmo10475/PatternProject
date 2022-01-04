import m from "mithril";
import bikes from "../models/bikes.js";
import users from "../models/users.js";

var timer;

var second = 0;
var minute = 0;
var hour = 0;
var sum = 10; //voi har en upplåsningsavgift på 10:- och sedan 3:-/min

var Counter = {
  view: function () {
    return m("main.container", [
      m(
        "h1.info",
        returnData(hour) + ":" + returnData(minute) + ":" + returnData(second)
      ),
      m("h1.info", "Kostnad: " + sum + ":-"),
      m("button.rent", { onclick: goHome }, "Avsluta resan"),
    ]);
  },
};

function test() {
  bikes.getBikeLocation();
  bikes.rentBike();

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
  return input > 9 ? input : `0${input}`;
}

function goHome() {
  users.saveToHistory(
    bikes.currentId,
    bikes.currentLocation,
    sum,
    bikes.currentTime
  );
  users.pay(sum);
  bikes.returnBike();
  m.route.set("/");
  window.location.reload();
  alert("Din resa är nu avslutad!");
}

let counter = {
  oninit: function () {
    test();
  },
  view: function () {
    return m("main.container", [
      m(
        "h1.info",
        returnData(hour) + ":" + returnData(minute) + ":" + returnData(second)
      ),
      m("h1.info", "Kostnad: " + sum + ":-"),
      m("button.rent", { onclick: goHome }, "Avsluta resan"),
    ]);
  },
};

export default counter;
