import m from "mithril";

import form from "./views/form.js";
import bikeMap from "./views/bikeMap.js";
import counter from "./views/timer.js";


m.route(document.body, "/", {
  "/": {
    render: function () {
      return m(bikeMap);
    },
  },
  "/form": {
    render: function () {
      return m(form);
    },
  },
  "/rideInfo": {
    render: function () {
      return m(rideInfo);
    },
  },
  "/timer": {
    render: function () {
      return m(counter);
    },
  },
});
