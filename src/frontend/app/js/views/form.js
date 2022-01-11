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
          m(m.route.Link, { href: "/", className: "back" }, "Tillbaka"),
          m("img.scooterImg", { src: "./img/scooter.png" }),
          m("form", {}, [
            m("label.input-label", "Välj en cykel"),
            m("br"),
            m(
              "select.input",
              {
                onchange: function (event) {
                  bikes.currentId = event.target.value;
                },
              },
              [
                options.map((o) =>
                  m("option", { value: o }, o.toLocaleString())
                ),
              ]
            ),
            m("br"),
            m(
              m.route.Link,
              { href: "/timer", className: "rent" },
              "Hyr"
            ),
          ]),
        ]);
    }
};

export default form;


