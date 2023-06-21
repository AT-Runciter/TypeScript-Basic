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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes.js */ \"./src/classes.js\");\n//import { Animal, Dog, Cat } from './interfaces.js';\n//import { DogClass, CatClass } from './classes.js';\n\nvar myDog = new _classes_js__WEBPACK_IMPORTED_MODULE_0__.DogClass('Buddy', 3, 'Woof', 'Golden Retriever');\nmyDog.makeSound(); // Output: Woof\nmyDog.feed(); // Output: Feeding Buddy...\nvar myCat = new _classes_js__WEBPACK_IMPORTED_MODULE_0__.CatClass('Fluffy', 5, 'Meow', 'Gray');\nmyCat.makeSound(); // Output: Meow\nconsole.log(myCat.furColor); // Output: Gray\n\n\n//# sourceURL=webpack://typescript-fundamentals-lesson-4/./src/app.js?");

/***/ }),

/***/ "./src/classes.js":
/*!************************!*\
  !*** ./src/classes.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AnimalClass\": () => (/* binding */ AnimalClass),\n/* harmony export */   \"CatClass\": () => (/* binding */ CatClass),\n/* harmony export */   \"DogClass\": () => (/* binding */ DogClass)\n/* harmony export */ });\n// file: classes.ts\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n// Батьківський клас для тварин\nvar AnimalClass = /** @class */ (function () {\n    function AnimalClass(name, age, sound) {\n        this.name = name;\n        this.age = age;\n        this.sound = sound;\n    }\n    AnimalClass.prototype.makeSound = function () {\n        console.log(this.sound);\n    };\n    return AnimalClass;\n}());\n\n// Клас для собак, який наслідується від AnimalClass і реалізує інтерфейс Dog\nvar DogClass = /** @class */ (function (_super) {\n    __extends(DogClass, _super);\n    function DogClass(name, age, sound, breed) {\n        var _this = _super.call(this, name, age, sound) || this;\n        _this.name = name;\n        _this.age = age;\n        _this.sound = sound;\n        _this.breed = breed;\n        return _this;\n    }\n    DogClass.prototype.feed = function () {\n        console.log('Feeding ' + this.name + '...');\n    };\n    return DogClass;\n}(AnimalClass));\n\n// Клас для котів, який наслідується від AnimalClass і реалізує інтерфейс Cat\nvar CatClass = /** @class */ (function (_super) {\n    __extends(CatClass, _super);\n    function CatClass(name, age, sound, furColor) {\n        var _this = _super.call(this, name, age, sound) || this;\n        _this.name = name;\n        _this.age = age;\n        _this.sound = sound;\n        _this.furColor = furColor;\n        return _this;\n    }\n    return CatClass;\n}(AnimalClass));\n\n//Тут імпортуються інтерфейси з першого файлу, а потім визначаємо два класи-нащадки - DogClass та CatClass.\n//Клас AnimalClass є абстрактним класом, який реалізує інтерфейс Animal та містить загальний функціонал для всіх тварин. Метод makeSound() реалізується в класах-нащадках.\n//Клас DogClass реалізує інтерфейс Dog та містить метод feed(), який реалізується в цьому класі.\n//Клас CatClass реалізує інтерфейс Cat та містить додаткове поле furColor, яке описує колір шерсті кота.\n\n\n//# sourceURL=webpack://typescript-fundamentals-lesson-4/./src/classes.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;