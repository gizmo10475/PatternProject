import m from "mithril";

import { layout } from "./views/layout.js";

import home from "./views/home.js";
import form from "./views/form.js";
import bikeMap from "./views/bikeMap.js";
import rideInfo from "./views/rideInfo";
// import TimerComponent from "./views/timer";

// import timer from "./views/timer";


m.route(document.body, "/", {
    "/": {
        render: function() {
            return m(layout, {
                bottomNav: "#!/"
            }, m(home));
        }
    },
    "/form": {
        render: function() {
            return m(layout, {
                bottomNav: "#!/form"
            }, m(form));
        }
    },
    "/bikeMap": {
        render: function() {
            return m(layout, {
                bottomNav: "#!/bikeMap"
            }, m(bikeMap));
        }
    },
    "/rideInfo": {
        render: function() {
            return m(layout, {
                bottomNav: "#!/rideInfo"
            }, m(rideInfo));
        }
    },
    // "/timer": {
    //     render: function() {
    //         return m(layout, {
    //             bottomNav: "#!/timer"
    //         }, m(TimerComponent));
    //     }
    // }
    
});
