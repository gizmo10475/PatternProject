import m from "mithril";

import { layout } from "./views/layout.js";

import home from "./views/home.js";
import form from "./views/form.js";
import bikeMap from "./views/bikeMap.js";


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
});