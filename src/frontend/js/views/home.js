import m from "mithril";
import bikes from "../models/bikes.js"

let home = {
    oninit: bikes.getAllLocations,
    view: function() {
        return m("main.container", [
            m("h1", "Home"),
            m("div.deliveries", bikes.mapCords.map(function (bike) {
                return m("div.orderInfo", [
                    m("p", bike.id),
                    m("p", bike.long),
                    m("p", bike.lat)
                ]);
            }))
        ]);
    }
};

export default home;
