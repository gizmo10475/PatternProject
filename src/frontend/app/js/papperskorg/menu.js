/* global navigation */
/*
"use strict";
import { home } from "./home.js";
import { form } from "./form.js";
import { map } from "./bikeMap.js";



var menu = (function () {
    var showMenu = function (selected) {
        var navElements = [

            {
                name: "Hem",
                nav: home.showHome

            },
            {
                name: "Form",
                nav: form.showForm

            },
            {
                name: "Map",
                nav: map.showMap

            }
        ];

        window.navigation.innerHTML = "";
        navElements.forEach(function (element) {
            var navElement = document.createElement("a");

            if (selected === element.class) {
                navElement.className = "active";
            } else if (selected !== element.class) {
                navElement.className = "inactive";
            }
            navElement.addEventListener("click", element.nav);
            var icon = document.createElement("i");

            icon.className = "material-icons";
            icon.textContent = element.class;
            navElement.appendChild(icon);

            var text = document.createElement("span");

            text.className = "icon-text";
            text.textContent = element.name;
            navElement.appendChild(text);
            navigation.appendChild(navElement);
        });

        window.rootElement.appendChild(navigation);
    };

    return {
        showMenu: showMenu
    };
})(menu);
export { menu };

*/