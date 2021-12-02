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
                m("input[type=submit][value=Hyr].rentBtn", "Hyr")

              
            ]
            )
        ]);
    }
};

// const ctrl = {
//     minReach: 50000,
//     updateStuff: () => { console.log('value selected: ' + ctrl.minReach)},
//     opts: [0, 1000, 5000, 10000, 50000, 100000, 250000, 1000000]
//   }

  
// m('select[name=min_reach]', {
//
//     onchange: e => {
//       ctrl.minReach = ctrl.opts[e.target.selectedIndex]
//       ctrl.updateStuff()
//     }
//   }, [
//     ctrl.opts.map(o => m('option', { value: o }, o.toLocaleString()))
//   ])




export default form;


