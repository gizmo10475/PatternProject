"use strict";
import { menu } from "./menu.js";
var form = (function () {
    var showForm = function () {
        var formdiv = document.createElement("div");
        formdiv.className = "formdiv";
        var title = document.createElement("h1");
        var greeting = document.createElement("p");
        var label = document.createElement("label");
        var input = document.createElement("input");
        var br = document.createElement("br");
        var button = document.createElement("button");
       

        window.mainContainer.innerHTML = "";
        title.className = "title";
        title.textContent = "Välj en cykel";
        greeting.textContent = "Lite text om cyklar";
        label.textContent = "Cykelns id";
        input.type = "text";
        button.textContent = "Starta resan!";
        /*funktion som kollar om cykeln är ledig -> start, else if cykel ej ledig välj en annan*/


        mainContainer.appendChild(formdiv);
        
        window.mainContainer.appendChild(title);
        formdiv.appendChild(greeting);
        formdiv.appendChild(label);
        formdiv.appendChild(br);
        formdiv.appendChild(input);
        formdiv.appendChild(button);
        rootElement.appendChild(mainContainer);
        menu.showMenu("form");
    };

    return {
        showForm: showForm
    };
})(form);

export { form };