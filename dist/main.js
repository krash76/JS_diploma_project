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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_headerModal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/headerModal.js */ \"./modules/headerModal.js\");\n/* harmony import */ var _modules_timer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer.js */ \"./modules/timer.js\");\n/* harmony import */ var _modules_servicesModal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/servicesModal.js */ \"./modules/servicesModal.js\");\n/* harmony import */ var _modules_certificateModal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/certificateModal.js */ \"./modules/certificateModal.js\");\n/* harmony import */ var _modules_benefitsSlider_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/benefitsSlider.js */ \"./modules/benefitsSlider.js\");\n/* harmony import */ var _modules_scroll_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/scroll.js */ \"./modules/scroll.js\");\n/* harmony import */ var _modules_calc_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc.js */ \"./modules/calc.js\");\n/* harmony import */ var _modules_servicesSlider_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/servicesSlider.js */ \"./modules/servicesSlider.js\");\n/* harmony import */ var _modules_forms_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/forms.js */ \"./modules/forms.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst body = document.querySelector(\"body\");\r\n\r\nbody.insertAdjacentHTML(\"beforeend\", \r\n `<div class=\"header-modal header-modal--opened certificate-zoom-modal\">\r\n\t\t<div class=\"fancybox-skin\" style=\"padding: 0px; width: auto; height: auto;\">\r\n\t\t\t<div class=\"fancybox-outer\">\r\n\t\t\t\t<div class=\"fancybox-inner\" style=\"overflow: hidden; width: auto; height: auto;\">\r\n\t\t\t\t\t<div id=\"callback\" class=\"order-call-modal box-modal\" style=\"display: block;\">\r\n            <img class =\"modal-img\" src=\"\" style=\"background-color: hsl(0, 0%, 90%); transition: background-color 300ms; max-width: 85vw; max-height: 75vh\"></img>\r\n          </div>\r\n\t      </div>\r\n      </div>\r\n    <span title=\"Close\" class=\"header-modal__close certificate__close\">x</span>\r\n    </div>\r\n  </div>`\r\n); \r\n\r\n(0,_modules_headerModal_js__WEBPACK_IMPORTED_MODULE_0__.headerModal)();\r\n(0,_modules_timer_js__WEBPACK_IMPORTED_MODULE_1__.timer)(\"11 July 2022\");\r\n(0,_modules_servicesModal_js__WEBPACK_IMPORTED_MODULE_2__.servicesModal)();\r\n(0,_modules_certificateModal_js__WEBPACK_IMPORTED_MODULE_3__.certificateModal)();\r\n(0,_modules_benefitsSlider_js__WEBPACK_IMPORTED_MODULE_4__.benefitsSlider)();\r\n(0,_modules_scroll_js__WEBPACK_IMPORTED_MODULE_5__.toScrollUp)();\r\n(0,_modules_calc_js__WEBPACK_IMPORTED_MODULE_6__.calc)();\r\n(0,_modules_servicesSlider_js__WEBPACK_IMPORTED_MODULE_7__.servicesSlider)();\r\n(0,_modules_forms_js__WEBPACK_IMPORTED_MODULE_8__.forms)();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/benefitsSlider.js":
/*!***********************************!*\
  !*** ./modules/benefitsSlider.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"benefitsSlider\": () => (/* binding */ benefitsSlider)\n/* harmony export */ });\nconst benefitsSlider = () => {\r\n  const arrows = document.querySelectorAll(\".benefits-arrows\");\r\n  const slides = document.querySelectorAll(\".benefits__item\");\r\n\r\n  let currentSlideIndex = 0;\r\n  \r\n  const isActive = () => {\r\n    slides.forEach((slide) => {\r\n      if (slide.classList.contains(\"active\")){\r\n        slide.style.display = \"block\";\r\n        slide.style.margin = \"auto\"\r\n      } else {\r\n        slide.style.display = \"none\";\r\n      }\r\n    })\r\n  };\r\n\r\n  const prevSlide = (elems, index) => {\r\n    elems[index].classList.remove(\"active\")\r\n  };\r\n\r\n  const nextSlide = (elems, index) => {\r\n    elems[index].classList.add(\"active\")\r\n  };\r\n  \r\n  const showSlides = () => {\r\n    if (window.screen.width >= 576 ) {\r\n      if (currentSlideIndex > 3) {\r\n        currentSlideIndex = 0\r\n      };\r\n      if (currentSlideIndex < 0 ) {\r\n        currentSlideIndex = 3 \r\n      };\r\n     \r\n      slides.forEach((slide) => {\r\n        if (slide.classList.contains(\"active\")) {\r\n          slide.classList.remove(\"active\")\r\n          }\r\n        });\r\n        nextSlide(slides,currentSlideIndex);\r\n        nextSlide(slides,currentSlideIndex + 1);\r\n        nextSlide(slides,currentSlideIndex + 2);\r\n        isActive();\r\n    } else {\r\n      slides.forEach((slide) => {\r\n        if (slide.classList.contains(\"active\")) {\r\n          slide.classList.remove(\"active\")\r\n        }\r\n      });\r\n      \r\n      nextSlide(slides,currentSlideIndex);\r\n      isActive();\r\n    }\r\n  };\r\n\r\n  showSlides();\r\n\r\n  const changeSlide = (el) => {\r\n    el.addEventListener(\"click\", (e) => {\r\n      e.preventDefault();\r\n      if (e.target.closest(\"div\").matches(\".benefits__arrow--right\")) {\r\n        if (window.screen.width < 576 ) {\r\n          prevSlide(slides, currentSlideIndex);\r\n          currentSlideIndex++;\r\n          if (currentSlideIndex >= slides.length) {\r\n            currentSlideIndex = 0;\r\n          };\r\n          nextSlide(slides, currentSlideIndex);\r\n          isActive();\r\n        } else if (window.screen.width >= 576 ) {\r\n          prevSlide(slides, currentSlideIndex);\r\n          prevSlide(slides, currentSlideIndex + 1);\r\n          prevSlide(slides, currentSlideIndex + 2);\r\n          currentSlideIndex += 3;\r\n          showSlides();\r\n        }\r\n      } else if (e.target.closest(\"div\").matches(\".benefits__arrow--left\")) {\r\n        if (window.screen.width < 576 ) {\r\n          prevSlide(slides, currentSlideIndex);\r\n          currentSlideIndex--;\r\n          if (currentSlideIndex < 0) {\r\n            currentSlideIndex = slides.length - 1;\r\n          };\r\n          nextSlide(slides, currentSlideIndex);\r\n          isActive(); \r\n        } else if (window.screen.width >= 576 ) {\r\n          prevSlide(slides, currentSlideIndex);\r\n          prevSlide(slides, currentSlideIndex + 1);\r\n          prevSlide(slides, currentSlideIndex + 2);\r\n          currentSlideIndex -= 3;\r\n          showSlides();\r\n        }\r\n      }\r\n    })\r\n  };\r\n\r\n  arrows.forEach((arrow) => {\r\n    changeSlide(arrow)\r\n  });\r\n    \r\n  window.addEventListener(\"resize\", () => {\r\n    showSlides();\r\n  });\r\n\r\n};\n\n//# sourceURL=webpack:///./modules/benefitsSlider.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calc\": () => (/* binding */ calc)\n/* harmony export */ });\nconst calc = () => {\r\n\r\n  const body = document.querySelector(\"body\");\r\n\r\n  if (body.classList.contains(\"balkony\" )) {\r\n    const calcBlock = document.getElementById(\"calc\");\r\n    const calcType = document.getElementById(\"calc-type\");\r\n    const calcTypeMaterial = document.getElementById(\"calc-type-material\");\r\n    const calcInput = document.getElementById(\"calc-input\");\r\n    const calcTotal = document.getElementById(\"calc-total\");\r\n    const totalLabel = document.querySelector('label[for=\"calc-total\"]')\r\n    let total;\r\n    \r\n    totalLabel.textContent = \"Итого (тыс. руб)\"\r\n        \r\n    calcInput.addEventListener(\"input\", (e) => {\r\n      e.target.value = e.target.value.replace(/[^\\d]/ig, \"\");\r\n    });\r\n\r\n    const toCalcTotal = () => {\r\n      if (calcType.value !== \"--\" && calcTypeMaterial.value !== \"--\" && calcInput.value > 0) {\r\n        total = calcType.value * calcTypeMaterial.value * calcInput.value;\r\n        calcTotal.value = Math.floor(total);\r\n      } else {\r\n        calcTotal.value = \"\";\r\n      }\r\n    };\r\n\r\n    calcBlock.addEventListener(\"input\", (e) => {\r\n      if (e.target === calcType || e.target === calcTypeMaterial ||\r\n        e.target === calcInput || e.target === calcInput) {\r\n        toCalcTotal();  \r\n      }\r\n    });\r\n\r\n  } \r\n}\r\n\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/certificateModal.js":
/*!*************************************!*\
  !*** ./modules/certificateModal.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"certificateModal\": () => (/* binding */ certificateModal)\n/* harmony export */ });\n/* harmony import */ var _modalFunc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalFunc */ \"./modules/modalFunc.js\");\n\r\n\r\n\r\nconst certificateModal = () => {\r\n  const modal = document.querySelector(\".certificate-zoom-modal\");\r\n  const certificates = document.querySelectorAll(\".sertificate-document\");\r\n  const modalCloseBtn = document.querySelector(\".certificate__close\");\r\n  const modalImg = document.querySelector(\".modal-img\");\r\n\r\n  certificates.forEach((cert) => {\r\n    cert.addEventListener(\"click\", (e) => {\r\n      e.preventDefault();\r\n      let imgSrc = e.target.closest(\"a\").getAttribute(\"href\");\r\n      modalImg.src = imgSrc;\r\n      (0,_modalFunc__WEBPACK_IMPORTED_MODULE_0__.openModal)(modal);\r\n     });\r\n  });\r\n  \r\n  modalCloseBtn.addEventListener(\"click\", () => {\r\n    (0,_modalFunc__WEBPACK_IMPORTED_MODULE_0__.closeModal)(modal);\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/certificateModal.js?");

/***/ }),

/***/ "./modules/forms.js":
/*!**************************!*\
  !*** ./modules/forms.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"forms\": () => (/* binding */ forms)\n/* harmony export */ });\n/* harmony import */ var _calc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calc.js */ \"./modules/calc.js\");\n\r\n\r\nconst forms = () => {\r\n\r\n  const horisontalForms = document.querySelectorAll(\".form-horizontal\");\r\n\r\n  horisontalForms.forEach((form) => {\r\n    const nameInput = form.querySelector('input[name=\"fio\"]');\r\n    const phoneInput = form.querySelector('input[name=\"phone\"]');\r\n    \r\n    form.addEventListener(\"input\", (e) => {\r\n      if (e.target === nameInput) {\r\n        e.target.value = e.target.value.replace(/[^а-яёa-z\\s]/ig, \"\");\r\n      };\r\n      if (e.target === phoneInput) {\r\n        e.target.value = e.target.value.replace(/[^\\d\\+]/ig, \"\");\r\n      };\r\n    });\r\n   \r\n    form.addEventListener(\"submit\", (e) => {\r\n      e.preventDefault();\r\n      const formElements = form.querySelectorAll(\"input.form-control\");\r\n      const body = document.querySelector(\"body\");\r\n      let userData;\r\n      if (!body.classList.contains(\"balkony\" )) {\r\n        userData = {\r\n          name: nameInput.value,\r\n          tel: phoneInput.value,\r\n        }\r\n      } else {\r\n        const calcTotal = document.getElementById(\"calc-total\");\r\n        (0,_calc_js__WEBPACK_IMPORTED_MODULE_0__.calc)();\r\n        userData = {\r\n          name: nameInput.value,\r\n          tel: phoneInput.value,\r\n          calcTotal: calcTotal.value\r\n        }\r\n      };\r\n          \r\n      const validate = (list) => {\r\n        let success = true;\r\n          list.forEach(input => {\r\n          inputSuccess(input);\r\n          if (!input.classList.contains(\"success\")) {\r\n            success = false;\r\n          };\r\n        })\r\n        return success\r\n      };\r\n\r\n      const inputSuccess = (input) => {\r\n        if ((input.name === \"fio\" && input.value.trim().length > 1 && /^([а-яА-ЯёЁa-zA-Z\\s]*)$/.test(input.value))\r\n          || (input.name === \"phone\"  && /^([\\d\\+]*)\\d$/.test(input.value) && input.value.trim().match(/\\d/g).length < 17)) {\r\n          input.classList.add (\"success\");\r\n        } else {\r\n          input.classList.add(\"error\") ;  \r\n        }\r\n      };\r\n    \r\n      const sendData = (data) => {\r\n        return fetch(\"https://jsonplaceholder.typicode.com/posts\", {\r\n          method: \"POST\",\r\n          body: JSON.stringify(data),\r\n          headers: {\r\n            \"Content-Type\": \"application/json\"\r\n          }\r\n        }).then(res => res.json())\r\n      };\r\n    \r\n      if (validate(formElements)) {\r\n        sendData(userData)\r\n        .then(data => {\r\n          formElements.forEach(input => {\r\n            input.value = \"\";\r\n            input.classList.remove(\"error\"); \r\n            input.classList.remove (\"success\"); \r\n          })\r\n        })\r\n        .catch(error => {\r\n          console.log (error.message);\r\n        })\r\n      };\r\n\r\n    })\r\n  })\r\n}\r\n \r\n\r\n  \r\n\n\n//# sourceURL=webpack:///./modules/forms.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toScrollUp\": () => (/* binding */ toScrollUp)\n/* harmony export */ });\nconst toScrollUp = () => {\r\n  const scrollBtn = document.querySelector(\".smooth-scroll\");\r\n  const secondSectionDiv = document.getElementById(\"benefits\");\r\n  \r\n  let scrolled;\r\n  let timer;\r\n\r\n  scrollBtn.style.display = \"none\";\r\n  \r\n  const scrollToTop = () => {\r\n    if (scrolled > 0) {\r\n      window.scrollTo(0, scrolled);\r\n      scrolled = scrolled - 200;\r\n      timer = setTimeout(scrollToTop, 20);\r\n    } else {\r\n      clearTimeout(timer);\r\n      window.scrollTo(0, 0);\r\n    }\r\n  };\r\n\r\n  document.addEventListener(\"scroll\", () => {\r\n    secondSectionDiv.getBoundingClientRect();\r\n    if (secondSectionDiv.getBoundingClientRect().top <= 0) {\r\n      scrollBtn.style.display = \"block\";\r\n    } else {\r\n      scrollBtn.style.display = \"none\";\r\n    }\r\n  });\r\n\r\n  scrollBtn.addEventListener(\"click\", () => {\r\n    scrolled = window.pageYOffset;\r\n    scrollToTop();\r\n  });\r\n\r\n} \n\n//# sourceURL=webpack:///./modules/scroll.js?");

/***/ }),

/***/ "./modules/servicesModal.js":
/*!**********************************!*\
  !*** ./modules/servicesModal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"servicesModal\": () => (/* binding */ servicesModal)\n/* harmony export */ });\n/* harmony import */ var _modalFunc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalFunc */ \"./modules/modalFunc.js\");\n\r\n\r\n\r\n\r\nconst servicesModal = () => {\r\n  const modal = document.querySelector(\".services-modal\");\r\n  const serviceBtns = document.querySelectorAll(\".service-button\");\r\n  const modalCloseBtn = document.querySelector(\".services-modal__close\");\r\n\r\n  serviceBtns.forEach((btn) => {\r\n    btn.addEventListener(\"click\", (e) => {\r\n      e.preventDefault();\r\n      (0,_modalFunc__WEBPACK_IMPORTED_MODULE_0__.openModal)(modal);\r\n     });\r\n  });\r\n  \r\n  modalCloseBtn.addEventListener(\"click\", () => {\r\n    (0,_modalFunc__WEBPACK_IMPORTED_MODULE_0__.closeModal)(modal);\r\n  });\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./modules/servicesModal.js?");

/***/ }),

/***/ "./modules/servicesSlider.js":
/*!***********************************!*\
  !*** ./modules/servicesSlider.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"servicesSlider\": () => (/* binding */ servicesSlider)\n/* harmony export */ });\nconst servicesSlider = () => {\r\n\r\n \r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./modules/servicesSlider.js?");

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