/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_headerModal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/headerModal.js */ \"./modules/headerModal.js\");\n/* harmony import */ var _modules_timer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer.js */ \"./modules/timer.js\");\n\r\n\r\n\r\n\r\n(0,_modules_headerModal_js__WEBPACK_IMPORTED_MODULE_0__.headerModal)();\r\n(0,_modules_timer_js__WEBPACK_IMPORTED_MODULE_1__.timer)(\"11 July 2022\");\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/headerModal.js":
/*!********************************!*\
  !*** ./modules/headerModal.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"headerModal\": () => (/* binding */ headerModal)\n/* harmony export */ });\nconst headerModal = () => {\r\n  const modal = document.querySelector(\".header-modal\");\r\n  const callBtn = document.querySelector(\".button\");\r\n  const modalOverlay = document.querySelector(\".overlay\");\r\n  const modalCloseBtn = document.querySelector(\".header-modal__close\");\r\n\r\n  callBtn.addEventListener(\"click\", (e) => {\r\n    e.preventDefault();\r\n    modal.style.display = \"block\";\r\n    modalOverlay.style.display = \"block\";\r\n  });\r\n    \r\n  modalCloseBtn.addEventListener(\"click\", () => {\r\n    modal.style.display = \"none\";\r\n    modalOverlay.style.display = \"none\";\r\n  })\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./modules/headerModal.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"timer\": () => (/* binding */ timer)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n \r\n  const allCounts = document.querySelectorAll(\".count\");\r\n  let span;\r\n\r\n  const getSpan =(el) => {\r\n    span = el.querySelector(\"span\");\r\n  };\r\n\r\n  const getTimeRest = () => {\r\n    let dateStop = new Date(deadline).getTime();\r\n    let dateNow = new Date().getTime();\r\n    let timeRest = (dateStop - dateNow) / 1000;\r\n    let days = Math.floor(timeRest / 60 / 60 / 24);\r\n    let hours = Math.floor((timeRest / 60 / 60) % 24);\r\n    let minutes = Math.floor((timeRest / 60 ) % 60);\r\n    let seconds = Math.floor(timeRest % 60);\r\n\r\n    return {timeRest, days, hours, minutes, seconds};\r\n  };\r\n \r\n  const updateClock = () => {\r\n    \r\n    let getTime = getTimeRest();\r\n\r\n    if (getTime.days.toString().length < 2) {\r\n      getTime.days = ` 0${getTime.days.toString()} `;\r\n    };\r\n    if (getTime.hours.toString().length < 2) {\r\n      getTime.hours = ` 0${getTime.hours.toString()} `;\r\n    };\r\n    if (getTime.minutes.toString().length < 2) {\r\n      getTime.minutes = ` 0${getTime.minutes.toString()} `;\r\n    };\r\n    if (getTime.seconds.toString().length < 2) {\r\n      getTime.seconds = `0${getTime.seconds.toString()}`;\r\n    };\r\n  \r\n    allCounts.forEach((count) => {\r\n      if (count.classList.contains(\"count_1\")) {\r\n          getSpan(count);\r\n          span.textContent = getTime.days;\r\n      } else if (count.classList.contains(\"count_2\")) {\r\n          getSpan(count);\r\n          span.textContent = getTime.hours;\r\n      } else if (count.classList.contains(\"count_3\")) {\r\n          getSpan(count);\r\n          span.textContent = getTime.minutes;\r\n      } else if (count.classList.contains(\"count_4\")) {\r\n          getSpan(count);\r\n          span.textContent = getTime.seconds;\r\n      };\r\n\r\n      if(getTime.timeRest > 0) {\r\n        setTimeout(updateClock, 1000);\r\n      } else {\r\n        span.textContent = \"00\";\r\n      };\r\n\r\n    });\r\n  };\r\n\r\n  updateClock();\r\n  \r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;