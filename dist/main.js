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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_headerModal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/headerModal.js */ \"./modules/headerModal.js\");\n/* harmony import */ var _modules_timer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer.js */ \"./modules/timer.js\");\n/* harmony import */ var _modules_servicesModal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/servicesModal.js */ \"./modules/servicesModal.js\");\n/* harmony import */ var _modules_certificateModal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/certificateModal.js */ \"./modules/certificateModal.js\");\n/* harmony import */ var _modules_benefitsSlider_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/benefitsSlider.js */ \"./modules/benefitsSlider.js\");\n/* harmony import */ var _modules_scroll_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/scroll.js */ \"./modules/scroll.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst body = document.querySelector(\"body\");\r\n\r\nbody.insertAdjacentHTML(\"beforeend\", \r\n `<div class=\"header-modal header-modal--opened certificate-zoom-modal\">\r\n\t\t<div class=\"fancybox-skin\" style=\"padding: 0px; width: auto; height: auto;\">\r\n\t\t\t<div class=\"fancybox-outer\">\r\n\t\t\t\t<div class=\"fancybox-inner\" style=\"overflow: hidden; width: auto; height: auto;\">\r\n\t\t\t\t\t<div id=\"callback\" class=\"order-call-modal box-modal\" style=\"display: block;\">\r\n            <img class =\"modal-img\" src=\"\" style=\"background-color: hsl(0, 0%, 90%); transition: background-color 300ms; max-width: 85vw; max-height: 75vh\"></img>\r\n          </div>\r\n\t      </div>\r\n      </div>\r\n    <span title=\"Close\" class=\"header-modal__close certificate__close\">x</span>\r\n    </div>\r\n  </div>`\r\n); \r\n\r\n(0,_modules_headerModal_js__WEBPACK_IMPORTED_MODULE_0__.headerModal)();\r\n(0,_modules_timer_js__WEBPACK_IMPORTED_MODULE_1__.timer)(\"07 Aprile 2022\");\r\n(0,_modules_servicesModal_js__WEBPACK_IMPORTED_MODULE_2__.servicesModal)();\r\n(0,_modules_certificateModal_js__WEBPACK_IMPORTED_MODULE_3__.certificateModal)();\r\n(0,_modules_benefitsSlider_js__WEBPACK_IMPORTED_MODULE_4__.benefitsSlider)();\r\n(0,_modules_scroll_js__WEBPACK_IMPORTED_MODULE_5__.toScrollUp)();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/benefitsSlider.js":
/*!***********************************!*\
  !*** ./modules/benefitsSlider.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"benefitsSlider\": () => (/* binding */ benefitsSlider)\n/* harmony export */ });\nconst benefitsSlider = () => {\r\n  const arrows = document.querySelectorAll(\".benefits-arrows\");\r\n  const slides = document.querySelectorAll(\".benefits__item\");\r\n  let currentSlide = 0;\r\n \r\n  const isActive = () => {\r\n    slides.forEach((slide) => {\r\n      if (slide.classList.contains(\"active\")){\r\n        slide.style.display = \"block\";\r\n        slide.style.margin = \"auto\"\r\n      } else {\r\n        slide.style.display = \"none\";\r\n      }\r\n    })\r\n  };\r\n  \r\n  isActive();\r\n   \r\n  const prevSlide = (elems, index) => {\r\n    elems[index].classList.remove(\"active\")\r\n  };\r\n\r\n  const nextSlide = (elems, index) => {\r\n    elems[index].classList.add(\"active\");\r\n  };\r\n  \r\n  const changeSlideByOne = (el) => {\r\n    el.addEventListener(\"click\", (e) => {\r\n      e.preventDefault();\r\n      if (e.target.closest(\"div\").matches(\".benefits__arrow--right\")) {\r\n        prevSlide(slides, currentSlide);\r\n        currentSlide++;\r\n        if (currentSlide >= slides.length) {\r\n        currentSlide = 0;\r\n        };\r\n        nextSlide(slides, currentSlide);\r\n        isActive();\r\n      } else if (e.target.closest(\"div\").matches(\".benefits__arrow--left\")) {\r\n        prevSlide(slides, currentSlide);\r\n        currentSlide--;\r\n        if (currentSlide < 0) {\r\n          currentSlide = slides.length - 1;\r\n        };\r\n        nextSlide(slides, currentSlide);\r\n        isActive(); \r\n      }\r\n    })\r\n  };\r\n\r\n  for (let i = 0; i < slides.length; i++) {\r\n    if (window.screen.width >= 576 ) {\r\n      if (i < 3) {\r\n      slides[i].style.display = \"block\";\r\n      slides[i].classList.add(\"active\") ;\r\n      } else {\r\n        slides[i].style.display = \"none\";\r\n      }\r\n    }\r\n  };\r\n\r\n  const changeSlideBlock = () => {\r\n    \r\n  };\r\n  \r\n  arrows.forEach((arrow) => {\r\n    if (window.screen.width < 576 ) {\r\n      changeSlideByOne(arrow)\r\n    } else {\r\n     // changeSlideBlock();\r\n    }\r\n    \r\n  });\r\n\r\n};\n\n//# sourceURL=webpack:///./modules/benefitsSlider.js?");

/***/ }),

/***/ "./modules/certificateModal.js":
/*!*************************************!*\
  !*** ./modules/certificateModal.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"certificateModal\": () => (/* binding */ certificateModal)\n/* harmony export */ });\n/* harmony import */ var _modalFunc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalFunc */ \"./modules/modalFunc.js\");\n\r\n\r\n\r\nconst certificateModal = () => {\r\n  const modal = document.querySelector(\".certificate-zoom-modal\");\r\n  const certificates = document.querySelectorAll(\".sertificate-document\");\r\n  const modalCloseBtn = document.querySelector(\".certificate__close\");\r\n  const modalImg = document.querySelector(\".modal-img\");\r\n\r\n  certificates.forEach((cert) => {\r\n    cert.addEventListener(\"click\", (e) => {\r\n      e.preventDefault();\r\n      let imgSrc = e.target.closest(\"a\").getAttribute(\"href\");\r\n      modalImg.src = imgSrc;\r\n      (0,_modalFunc__WEBPACK_IMPORTED_MODULE_0__.openModal)(modal);\r\n     });\r\n  });\r\n  \r\n  modalCloseBtn.addEventListener(\"click\", () => {\r\n    (0,_modalFunc__WEBPACK_IMPORTED_MODULE_0__.closeModal)(modal);\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/certificateModal.js?");

/***/ }),

/***/ "./modules/headerModal.js":
/*!********************************!*\
  !*** ./modules/headerModal.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"headerModal\": () => (/* binding */ headerModal)\n/* harmony export */ });\n/* harmony import */ var _modalFunc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalFunc */ \"./modules/modalFunc.js\");\n\r\n\r\n\r\nconst headerModal = () => {\r\n  const modal = document.querySelector(\".header-modal\");\r\n  const callBtn = document.querySelector(\".button\");\r\n  const modalCloseBtn = document.querySelector(\".header-modal__close\");\r\n\r\n  callBtn.addEventListener(\"click\", (e) => {\r\n    e.preventDefault();\r\n    (0,_modalFunc__WEBPACK_IMPORTED_MODULE_0__.openModal)(modal);\r\n  });\r\n    \r\n  modalCloseBtn.addEventListener(\"click\", () => {\r\n    (0,_modalFunc__WEBPACK_IMPORTED_MODULE_0__.closeModal)(modal);\r\n  })\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./modules/headerModal.js?");

/***/ }),

/***/ "./modules/modalFunc.js":
/*!******************************!*\
  !*** ./modules/modalFunc.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeModal\": () => (/* binding */ closeModal),\n/* harmony export */   \"openModal\": () => (/* binding */ openModal)\n/* harmony export */ });\nconst modalOverlay = document.querySelector(\".overlay\");\r\n\r\nconst openModal = (modalEl) => {\r\n  modalEl.style.display = \"block\";\r\n  modalOverlay.style.display = \"block\";\r\n}\r\n\r\nconst closeModal = (modalEl) => {\r\n  modalEl.style.display = \"none\";\r\n  modalOverlay.style.display = \"none\";\r\n}\n\n//# sourceURL=webpack:///./modules/modalFunc.js?");

/***/ }),

/***/ "./modules/scroll.js":
/*!***************************!*\
  !*** ./modules/scroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toScrollUp\": () => (/* binding */ toScrollUp)\n/* harmony export */ });\nconst toScrollUp = () => {\r\n  const scrollBtn = document.querySelector(\".smooth-scroll\");\r\n  const secondSectionDiv = document.getElementById(\"benefits\");\r\n  \r\n  let scrolled;\r\n  let timer;\r\n\r\n  scrollBtn.style.display = \"none\";\r\n  \r\n  const scrollToTop = () => {\r\n    if (scrolled > 0) {\r\n      window.scrollTo(0, scrolled);\r\n      scrolled = scrolled - 200;\r\n      timer = setTimeout(scrollToTop, 20)\r\n    } else {\r\n      clearTimeout(timer);\r\n      window.scrollTo(0, 0);\r\n    }\r\n  };\r\n\r\n  document.addEventListener(\"scroll\", () => {\r\n    secondSectionDiv.getBoundingClientRect();\r\n    if (secondSectionDiv.getBoundingClientRect().top <= 0) {\r\n      scrollBtn.style.display = \"block\"\r\n    } else {\r\n      scrollBtn.style.display = \"none\";\r\n    }\r\n  });\r\n\r\n  scrollBtn.addEventListener(\"click\", () => {\r\n    scrolled = window.pageYOffset;\r\n    scrollToTop();\r\n  });\r\n\r\n} \n\n//# sourceURL=webpack:///./modules/scroll.js?");

/***/ }),

/***/ "./modules/servicesModal.js":
/*!**********************************!*\
  !*** ./modules/servicesModal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"servicesModal\": () => (/* binding */ servicesModal)\n/* harmony export */ });\n/* harmony import */ var _modalFunc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalFunc */ \"./modules/modalFunc.js\");\n\r\n\r\n\r\n\r\nconst servicesModal = () => {\r\n  const modal = document.querySelector(\".services-modal\");\r\n  const serviceBtns = document.querySelectorAll(\".service-button\");\r\n  const modalCloseBtn = document.querySelector(\".services-modal__close\");\r\n\r\n  serviceBtns.forEach((btn) => {\r\n    btn.addEventListener(\"click\", (e) => {\r\n      e.preventDefault();\r\n      (0,_modalFunc__WEBPACK_IMPORTED_MODULE_0__.openModal)(modal);\r\n     });\r\n  });\r\n  \r\n  modalCloseBtn.addEventListener(\"click\", () => {\r\n    (0,_modalFunc__WEBPACK_IMPORTED_MODULE_0__.closeModal)(modal);\r\n  });\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./modules/servicesModal.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"timer\": () => (/* binding */ timer)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n \r\n  const allCounts = document.querySelectorAll(\".count\");\r\n  const countdownText = document.querySelector(\".countdown-text\");\r\n  countdownText.insertAdjacentHTML(\"afterbegin\", `<span>До конца акции осталось:</span>`);\r\n  \r\n  let span;\r\n\r\n  const getSpan =(el) => {\r\n    span = el.querySelector(\"span\");\r\n  };\r\n\r\n  const getTimeRest = () => {\r\n    let dateStop = new Date(deadline).getTime();\r\n    let dateNow = new Date().getTime();\r\n    let timeRest = (dateStop - dateNow) / 1000;\r\n    let days = Math.floor(timeRest / 60 / 60 / 24);\r\n    let hours = Math.floor((timeRest / 60 / 60) % 24);\r\n    let minutes = Math.floor((timeRest / 60 ) % 60);\r\n    let seconds = Math.floor(timeRest % 60);\r\n\r\n    return {timeRest, days, hours, minutes, seconds};\r\n  };\r\n \r\n  const updateClock = () => {\r\n    \r\n    let getTime = getTimeRest();\r\n\r\n    if (getTime.days.toString().length < 2) {\r\n      getTime.days = ` 0${getTime.days.toString()} `;\r\n    };\r\n    if (getTime.hours.toString().length < 2) {\r\n      getTime.hours = ` 0${getTime.hours.toString()} `;\r\n    };\r\n    if (getTime.minutes.toString().length < 2) {\r\n      getTime.minutes = ` 0${getTime.minutes.toString()} `;\r\n    };\r\n    if (getTime.seconds.toString().length < 2) {\r\n      getTime.seconds = `0${getTime.seconds.toString()}`;\r\n    };\r\n  \r\n    if(Math.floor(getTime.timeRest) > 0) {\r\n      \t\t\t\t\t\r\n      allCounts.forEach((count) => {\r\n        if (count.classList.contains(\"count_1\")) {\r\n          getSpan(count);\r\n          span.textContent = getTime.days;\r\n        } else if (count.classList.contains(\"count_2\")) {\r\n          getSpan(count);\r\n          span.textContent = getTime.hours;\r\n        } else if (count.classList.contains(\"count_3\")) {\r\n          getSpan(count);\r\n          span.textContent = getTime.minutes;\r\n        } else if (count.classList.contains(\"count_4\")) {\r\n          getSpan(count);\r\n          span.textContent = getTime.seconds;\r\n        }\r\n      });\r\n\r\n      setTimeout(updateClock, 1000);\r\n    } else {\r\n      getSpan(countdownText);\r\n      span.textContent = \"На данный момент акция закончилась!\";\r\n      allCounts.forEach((count) => {\r\n        getSpan(count);\r\n        span.textContent = \"00\";\r\n      })\r\n    };\r\n  };\r\n\r\n  updateClock();\r\n};\r\n  \r\n\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

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