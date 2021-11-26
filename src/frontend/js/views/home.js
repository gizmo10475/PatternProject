/* global mainContainer rootElement */
"use strict";
import { menu } from "./menu.js";
var home = (function () {
    var showHome = function () {
        var title = document.createElement("h1");
        var greetingTime = document.createElement("p");
        var greeting = document.createElement("p");
        // var container = document.createElement("img");
       

        window.mainContainer.innerHTML = "";
        title.className = "title";
        title.textContent = "Cykel App Project Pattern";
        greeting.textContent = "Lite text om cyklar";
        window.mainContainer.appendChild(title);
        window.mainContainer.appendChild(greetingTime);
        mainContainer.appendChild(greeting);
        rootElement.appendChild(mainContainer);
        menu.showMenu("home");
    };

    return {
        showHome: showHome
    };
})(home);

export { home };
