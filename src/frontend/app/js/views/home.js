import m from "mithril";
import users from "../models/users.js"

let home = {
    oninit: function() {
        users.getInfoUser();
    },
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
