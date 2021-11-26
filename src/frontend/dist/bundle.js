/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/views/form.js":
/*!**************************!*\
  !*** ./js/views/form.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "form": () => (/* binding */ form)
/* harmony export */ });
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ "./js/views/menu.js");


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
        _menu_js__WEBPACK_IMPORTED_MODULE_0__.menu.showMenu("form");
    };

    return {
        showForm: showForm
    };
})(form);



/***/ }),

/***/ "./js/views/home.js":
/*!**************************!*\
  !*** ./js/views/home.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "home": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ "./js/views/menu.js");
/* global mainContainer rootElement */


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
        _menu_js__WEBPACK_IMPORTED_MODULE_0__.menu.showMenu("home");
    };

    return {
        showHome: showHome
    };
})(home);




/***/ }),

/***/ "./js/views/menu.js":
/*!**************************!*\
  !*** ./js/views/menu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./js/views/home.js");
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.js */ "./js/views/form.js");
/* global navigation */





var menu = (function () {
    var showMenu = function (selected) {
        var navElements = [

            {
                name: "Hem",
                nav: _home_js__WEBPACK_IMPORTED_MODULE_0__.home.showHome
                
            },
            {
                name: "Form",
                nav: _form_js__WEBPACK_IMPORTED_MODULE_1__.form.showForm
                
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



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./js/views/main.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./js/views/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./js/views/menu.js");




(function () {
    window.rootElement = document.getElementById("root");
    window.mainContainer = document.createElement("main");
    window.mainContainer.className = "container";
    window.navigation = document.createElement("nav");
    window.navigation.className = "bottom-nav";
    _home_js__WEBPACK_IMPORTED_MODULE_0__.home.showHome();
    _menu_js__WEBPACK_IMPORTED_MODULE_1__.menu.showMenu("home");
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFhO0FBQ29CO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtREFBYTtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDRDtBQUNhO0FBQ29CO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1EQUFhO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRWU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JoQjtBQUNhO0FBQ29CO0FBQ0E7OztBQUdqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixtREFBYTtBQUNsQztBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EscUJBQXFCLG1EQUFhO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNlOzs7Ozs7O1VDckRoQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05hO0FBQ29CO0FBQ0E7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQWE7QUFDakIsSUFBSSxtREFBYTtBQUNqQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9qcy92aWV3cy9mb3JtLmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vanMvdmlld3MvaG9tZS5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL2pzL3ZpZXdzL21lbnUuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL2pzL3ZpZXdzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5pbXBvcnQgeyBtZW51IH0gZnJvbSBcIi4vbWVudS5qc1wiO1xudmFyIGZvcm0gPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBzaG93Rm9ybSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGZvcm1kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBmb3JtZGl2LmNsYXNzTmFtZSA9IFwiZm9ybWRpdlwiO1xuICAgICAgICB2YXIgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIHZhciBncmVldGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICB2YXIgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgdmFyIGJyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpO1xuICAgICAgICB2YXIgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICBcblxuICAgICAgICB3aW5kb3cubWFpbkNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICB0aXRsZS5jbGFzc05hbWUgPSBcInRpdGxlXCI7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJWw6RsaiBlbiBjeWtlbFwiO1xuICAgICAgICBncmVldGluZy50ZXh0Q29udGVudCA9IFwiTGl0ZSB0ZXh0IG9tIGN5a2xhclwiO1xuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IFwiQ3lrZWxucyBpZFwiO1xuICAgICAgICBpbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU3RhcnRhIHJlc2FuIVwiO1xuICAgICAgICAvKmZ1bmt0aW9uIHNvbSBrb2xsYXIgb20gY3lrZWxuIMOkciBsZWRpZyAtPiBzdGFydCwgZWxzZSBpZiBjeWtlbCBlaiBsZWRpZyB2w6RsaiBlbiBhbm5hbiovXG5cblxuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1kaXYpO1xuICAgICAgICBcbiAgICAgICAgd2luZG93Lm1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBmb3JtZGl2LmFwcGVuZENoaWxkKGdyZWV0aW5nKTtcbiAgICAgICAgZm9ybWRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgIGZvcm1kaXYuYXBwZW5kQ2hpbGQoYnIpO1xuICAgICAgICBmb3JtZGl2LmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgZm9ybWRpdi5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICByb290RWxlbWVudC5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcbiAgICAgICAgbWVudS5zaG93TWVudShcImZvcm1cIik7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHNob3dGb3JtOiBzaG93Rm9ybVxuICAgIH07XG59KShmb3JtKTtcblxuZXhwb3J0IHsgZm9ybSB9OyIsIi8qIGdsb2JhbCBtYWluQ29udGFpbmVyIHJvb3RFbGVtZW50ICovXG5cInVzZSBzdHJpY3RcIjtcbmltcG9ydCB7IG1lbnUgfSBmcm9tIFwiLi9tZW51LmpzXCI7XG52YXIgaG9tZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNob3dIb21lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIHZhciBncmVldGluZ1RpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgdmFyIGdyZWV0aW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIC8vIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgIFxuXG4gICAgICAgIHdpbmRvdy5tYWluQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIHRpdGxlLmNsYXNzTmFtZSA9IFwidGl0bGVcIjtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkN5a2VsIEFwcCBQcm9qZWN0IFBhdHRlcm5cIjtcbiAgICAgICAgZ3JlZXRpbmcudGV4dENvbnRlbnQgPSBcIkxpdGUgdGV4dCBvbSBjeWtsYXJcIjtcbiAgICAgICAgd2luZG93Lm1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICB3aW5kb3cubWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChncmVldGluZ1RpbWUpO1xuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGdyZWV0aW5nKTtcbiAgICAgICAgcm9vdEVsZW1lbnQuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcik7XG4gICAgICAgIG1lbnUuc2hvd01lbnUoXCJob21lXCIpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzaG93SG9tZTogc2hvd0hvbWVcbiAgICB9O1xufSkoaG9tZSk7XG5cbmV4cG9ydCB7IGhvbWUgfTtcbiIsIi8qIGdsb2JhbCBuYXZpZ2F0aW9uICovXG5cInVzZSBzdHJpY3RcIjtcbmltcG9ydCB7IGhvbWUgfSBmcm9tIFwiLi9ob21lLmpzXCI7XG5pbXBvcnQgeyBmb3JtIH0gZnJvbSBcIi4vZm9ybS5qc1wiO1xuXG5cbnZhciBtZW51ID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2hvd01lbnUgPSBmdW5jdGlvbiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgdmFyIG5hdkVsZW1lbnRzID0gW1xuXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJIZW1cIixcbiAgICAgICAgICAgICAgICBuYXY6IGhvbWUuc2hvd0hvbWVcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJGb3JtXCIsXG4gICAgICAgICAgICAgICAgbmF2OiBmb3JtLnNob3dGb3JtXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG5cbiAgICAgICAgd2luZG93Lm5hdmlnYXRpb24uaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgbmF2RWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIG5hdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkID09PSBlbGVtZW50LmNsYXNzKSB7XG4gICAgICAgICAgICAgICAgbmF2RWxlbWVudC5jbGFzc05hbWUgPSBcImFjdGl2ZVwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZCAhPT0gZWxlbWVudC5jbGFzcykge1xuICAgICAgICAgICAgICAgIG5hdkVsZW1lbnQuY2xhc3NOYW1lID0gXCJpbmFjdGl2ZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmF2RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWxlbWVudC5uYXYpO1xuICAgICAgICAgICAgdmFyIGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcblxuICAgICAgICAgICAgaWNvbi5jbGFzc05hbWUgPSBcIm1hdGVyaWFsLWljb25zXCI7XG4gICAgICAgICAgICBpY29uLnRleHRDb250ZW50ID0gZWxlbWVudC5jbGFzcztcbiAgICAgICAgICAgIG5hdkVsZW1lbnQuYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgICAgICAgICAgIHZhciB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cbiAgICAgICAgICAgIHRleHQuY2xhc3NOYW1lID0gXCJpY29uLXRleHRcIjtcbiAgICAgICAgICAgIHRleHQudGV4dENvbnRlbnQgPSBlbGVtZW50Lm5hbWU7XG4gICAgICAgICAgICBuYXZFbGVtZW50LmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICAgICAgbmF2aWdhdGlvbi5hcHBlbmRDaGlsZChuYXZFbGVtZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2luZG93LnJvb3RFbGVtZW50LmFwcGVuZENoaWxkKG5hdmlnYXRpb24pO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzaG93TWVudTogc2hvd01lbnVcbiAgICB9O1xufSkobWVudSk7XG5leHBvcnQgeyBtZW51IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuaW1wb3J0IHsgaG9tZSB9IGZyb20gXCIuL2hvbWUuanNcIjtcbmltcG9ydCB7IG1lbnUgfSBmcm9tIFwiLi9tZW51LmpzXCI7XG5cbihmdW5jdGlvbiAoKSB7XG4gICAgd2luZG93LnJvb3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpO1xuICAgIHdpbmRvdy5tYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gICAgd2luZG93Lm1haW5Db250YWluZXIuY2xhc3NOYW1lID0gXCJjb250YWluZXJcIjtcbiAgICB3aW5kb3cubmF2aWdhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gICAgd2luZG93Lm5hdmlnYXRpb24uY2xhc3NOYW1lID0gXCJib3R0b20tbmF2XCI7XG4gICAgaG9tZS5zaG93SG9tZSgpO1xuICAgIG1lbnUuc2hvd01lbnUoXCJob21lXCIpO1xufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==