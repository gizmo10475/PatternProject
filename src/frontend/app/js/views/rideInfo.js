import m from "mithril";
// import bikes from "../models/bikes.js"
/*
let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

function timer() {
    if ((millisecond += 10) == 1000) {
      millisecond = 0;
      second++;
    }
    if (second == 60) {
      second = 0;
      minute++;
    }
    if (minute == 60) {
      minute = 0;
      hour++;
    }
    document.getElementById('hour').innerText = returnData(hour);
    document.getElementById('minute').innerText = returnData(minute);
    document.getElementById('second').innerText = returnData(second);
    document.getElementById('millisecond').innerText = returnData(millisecond);
}
  
function returnData(input) {
    return input > 10 ? input : `0${input}`
}
*/




let rideInfo = {
    
    view: function() {
        return m("main.container", [
            m("h1", "Information!"),
            m("div", "app")
        ]);
    }
};

export default rideInfo;