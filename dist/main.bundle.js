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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Poppins:wght@300;400;500;600;700;800&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n  --text-color-1: #c0d475;\\r\\n  --text-color-2: #23832b;\\r\\n  --bg-color: #f0f9cf;\\r\\n}\\r\\n\\r\\n* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n  font-family: \\\"Poppins\\\", sans-serif;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: var(--bg-color);\\r\\n}\\r\\n\\r\\n.nav-items {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  gap: 1rem;\\r\\n  list-style: none;\\r\\n  padding: 2%;\\r\\n  background-color: #fff;\\r\\n}\\r\\n\\r\\n.item {\\r\\n  font-size: 1rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  width: 100%;\\r\\n  text-align: center;\\r\\n  background-color: var(--text-color-1);\\r\\n  padding: 20px;\\r\\n}\\r\\n\\r\\na {\\r\\n  color: #2a7703;\\r\\n  text-decoration: none;\\r\\n  transition: 0.2s;\\r\\n}\\r\\n\\r\\na:hover {\\r\\n  cursor: pointer;\\r\\n  font-size: 1.5rem;\\r\\n  transform: scale(1.2, 1.2);\\r\\n}\\r\\n\\r\\n.recipe-cards {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  margin-top: 2rem;\\r\\n}\\r\\n\\r\\n.card {\\r\\n  position: relative;\\r\\n  width: 300px;\\r\\n  height: auto;\\r\\n  margin: 40px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  padding: 1rem 0.5rem;\\r\\n  border: 1px solid #fff;\\r\\n  border-radius: 25px;\\r\\n  background: #fff;\\r\\n  box-shadow: rgb(50 50 93 / 25%) 0 6px 12px -2px, rgb(0 0 0 / 30%) 0 3px 7px -3px;\\r\\n}\\r\\n\\r\\n.card-img img {\\r\\n  width: 100%;\\r\\n  border-radius: 20px;\\r\\n}\\r\\n\\r\\n.card-info {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-content: flex-start;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.card-info h2 {\\r\\n  font-family: \\\"Patrick Hand\\\", cursive;\\r\\n  color: var(--text-color-1);\\r\\n  font-size: 2rem;\\r\\n  letter-spacing: 2px;\\r\\n}\\r\\n\\r\\n.card-info ul {\\r\\n  display: flex;\\r\\n  margin-top: 5%;\\r\\n  justify-content: space-between;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.comment-btn {\\r\\n  padding: 5% 15%;\\r\\n  font-family: \\\"Patrick Hand\\\", cursive;\\r\\n  font-size: 1.3rem;\\r\\n  color: var(--text-color-1);\\r\\n  background-color: var(--text-color-2);\\r\\n  border-radius: 15px;\\r\\n  border: 1px solid var(--text-color-2);\\r\\n  cursor: pointer;\\r\\n  transition: 0.3s;\\r\\n}\\r\\n\\r\\n.comment-btn:hover {\\r\\n  background-color: #236128;\\r\\n}\\r\\n\\r\\n.like-btn {\\r\\n  background: none;\\r\\n  border: none;\\r\\n  color: var(--text-color-1);\\r\\n  font-size: 1.7rem;\\r\\n  margin-right: 0.5rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.like-btn .fa-heart {\\r\\n  margin-right: 0.75rem;\\r\\n}\\r\\n\\r\\n.comments-container {\\r\\n  width: fit-content;\\r\\n  max-width: 400px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.popup-container {\\r\\n  position: fixed;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  filter: blur(px);\\r\\n  background-color: rgba(91, 127, 93, 0.861);\\r\\n  box-sizing: border-box;\\r\\n  overflow-y: scroll;\\r\\n}\\r\\n\\r\\n.popup-container h4 {\\r\\n  font-size: 25px;\\r\\n  text-align: center;\\r\\n  color: var(--text-color-2);\\r\\n}\\r\\n\\r\\n.popup-window {\\r\\n  width: 95%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  background-color: var(--bg-color);\\r\\n  border: 2px solid #264e29;\\r\\n  border-radius: 12px;\\r\\n  padding: 20px;\\r\\n  margin: 50px auto;\\r\\n}\\r\\n\\r\\n.popup-image {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.popup-image img {\\r\\n  width: 100%;\\r\\n  height: 350px;\\r\\n  border-radius: 15px;\\r\\n  object-fit: cover;\\r\\n  margin: 15px 0;\\r\\n}\\r\\n\\r\\n#close {\\r\\n  width: fit-content;\\r\\n  font-size: 2rem;\\r\\n  color: var(--text-color-2);\\r\\n}\\r\\n\\r\\n#close:hover {\\r\\n  transform: scale(1.5, 1.5);\\r\\n}\\r\\n\\r\\n.comment-items {\\r\\n  width: auto;\\r\\n  margin: 0 auto;\\r\\n  color: var(--text-color-1);\\r\\n}\\r\\n\\r\\n.dish-name {\\r\\n  font-size: 1.8rem;\\r\\n  text-align: center;\\r\\n  color: var(--text-color-2);\\r\\n}\\r\\n\\r\\n.recipe {\\r\\n  width: 95%;\\r\\n  font-size: 1.2rem;\\r\\n  color: #264e29;\\r\\n  margin: 15px auto;\\r\\n}\\r\\n\\r\\n.comment-content {\\r\\n  display: flex;\\r\\n  width: 100%;\\r\\n  flex-direction: row;\\r\\n  font-size: 0.85rem;\\r\\n  gap: 0.5rem;\\r\\n  color: #264e29;\\r\\n  border: 2px solid #264e29;\\r\\n  border-radius: 8px;\\r\\n  margin: 5px auto;\\r\\n}\\r\\n\\r\\n.row-bg {\\r\\n  background-color: #c0d475;\\r\\n}\\r\\n\\r\\n.comments-generator {\\r\\n  width: 100%;\\r\\n  font-size: 1.2rem;\\r\\n}\\r\\n\\r\\n.comments-generator > li {\\r\\n  padding: 5px;\\r\\n  list-style: none;\\r\\n\\r\\n  /* border-radius: 0 0 10px 10px; */\\r\\n}\\r\\n\\r\\n.add-comment {\\r\\n  width: 55%;\\r\\n  border-radius: 10px;\\r\\n  margin: 25px auto 0 auto;\\r\\n}\\r\\n\\r\\n.form-header {\\r\\n  font-size: 1.4rem;\\r\\n  text-align: center;\\r\\n  margin: 0 0 5px 0;\\r\\n}\\r\\n\\r\\n.form {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  color: #264e29;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n.name {\\r\\n  width: 100%;\\r\\n  font-size: 0.9rem;\\r\\n  font-weight: 500;\\r\\n  border: none;\\r\\n  border-radius: 8px;\\r\\n  padding: 5px;\\r\\n  color: #264e29;\\r\\n  background-color: #c0d475;\\r\\n}\\r\\n\\r\\n.name::placeholder {\\r\\n  color: var(--text-color-2);\\r\\n  font-size: 0.9rem;\\r\\n}\\r\\n\\r\\n.name:focus {\\r\\n  outline: 2px solid #264e29;\\r\\n}\\r\\n\\r\\n.new-comment {\\r\\n  width: 100%;\\r\\n  font-size: 0.9rem;\\r\\n  font-weight: 500;\\r\\n  border: none;\\r\\n  border-radius: 8px;\\r\\n  padding: 5px;\\r\\n  color: #264e29;\\r\\n  background-color: #c0d475;\\r\\n  margin: 5px 0;\\r\\n}\\r\\n\\r\\n.new-comment::placeholder {\\r\\n  color: var(--text-color-2);\\r\\n  font-size: 0.9rem;\\r\\n}\\r\\n\\r\\n.new-comment:focus {\\r\\n  outline: 2px solid #264e29;\\r\\n}\\r\\n\\r\\n.btn {\\r\\n  width: fit-content;\\r\\n  background-color: #264e29;\\r\\n  color: #f0f9cf;\\r\\n  border: none;\\r\\n  border-radius: 8px;\\r\\n  margin: 5px auto 0 auto;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.hidden {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.no-scroll {\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 768px) {\\r\\n  .nav-items {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    gap: 3rem;\\r\\n    list-style: none;\\r\\n    padding: 2%;\\r\\n    background-color: white;\\r\\n  }\\r\\n\\r\\n  .item {\\r\\n    font-size: 1rem;\\r\\n    cursor: pointer;\\r\\n  }\\r\\n\\r\\n  footer {\\r\\n    font-size: 1.2rem;\\r\\n  }\\r\\n\\r\\n  .popup-window {\\r\\n    width: 65%;\\r\\n  }\\r\\n\\r\\n  .popup-image {\\r\\n    width: 90%;\\r\\n  }\\r\\n\\r\\n  .dish-name {\\r\\n    font-size: 2.2rem;\\r\\n  }\\r\\n\\r\\n  .recipe {\\r\\n    width: 90%;\\r\\n  }\\r\\n\\r\\n  .comments-container {\\r\\n    width: 80%;\\r\\n    font-size: 1.8rem;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://foodify-kitchenball/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://foodify-kitchenball/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://foodify-kitchenball/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://foodify-kitchenball/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://foodify-kitchenball/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://foodify-kitchenball/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://foodify-kitchenball/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://foodify-kitchenball/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://foodify-kitchenball/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://foodify-kitchenball/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _modules_displayItems_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/displayItems.js */ \"./src/modules/displayItems.js\");\n\n\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  (0,_modules_displayItems_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\n\n//# sourceURL=webpack://foodify-kitchenball/./src/index.js?");

/***/ }),

/***/ "./src/modules/comment.js":
/*!********************************!*\
  !*** ./src/modules/comment.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"postComment\": () => (/* binding */ postComment)\n/* harmony export */ });\nconst baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\nconst appKey = 'TVh1v8c5aHUNyfocTFww';\n\nconst commentsHeader = document.querySelector('.comments-container h4');\n\nconst commentCounter = (count) => count + 1;\n\nconst getComments = async (id) => {\n  let count = 0;\n  commentsHeader.innerHTML = 'Comments (0)';\n\n  await fetch(`${baseURL}${appKey}/comments?item_id=${id}`)\n    .then((reponse) => reponse.json())\n    .then((json) => {\n      if (json) {\n        const commentsList = document.querySelector('.comments-generator');\n        commentsList.innerHTML = '';\n        json.forEach((item) => {\n          count = commentCounter(count);\n          const newComment = document.createElement('li');\n          if (count % 2 === 0) {\n            newComment.classList.add('row-bg');\n          }\n          if (count !== 0) {\n            newComment.innerHTML = `<span class=\"date\">${item.creation_date}</span>\n                    <span class=\"user-name\">${item.username}:</span> \n                    <span class=\"comment-text\">${item.comment}</span>`;\n            commentsList.appendChild(newComment);\n          } else {\n            newComment.innerHTML = '<span>There are no comments yet!!</span>';\n          }\n        });\n        commentsHeader.innerHTML = `Comments (${count})`;\n      }\n    });\n};\n\nconst postComment = async (username, comment, id) => {\n  await fetch(`${baseURL}${appKey}/comments/`, {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: id,\n      username,\n      comment,\n    }),\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n  }).then(() => {\n    getComments(id);\n  });\n};\n\n\n\n//# sourceURL=webpack://foodify-kitchenball/./src/modules/comment.js?");

/***/ }),

/***/ "./src/modules/displayItems.js":
/*!*************************************!*\
  !*** ./src/modules/displayItems.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _popupWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popupWindow.js */ \"./src/modules/popupWindow.js\");\n/* harmony import */ var _like_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./like.js */ \"./src/modules/like.js\");\n/* harmony import */ var _itemCounter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./itemCounter.js */ \"./src/modules/itemCounter.js\");\n\r\n\r\n\r\n\r\nconst recipeCount = document.querySelector(\".item-count\");\r\nconst recipeCards = document.querySelector(\".recipe-cards\");\r\n\r\nconst displayCards = async () => {\r\n  fetch(\"https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian\")\r\n    .then((response) => response.json())\r\n    .then((data) => {\r\n      let html = \"\";\r\n      data.meals.forEach((meal) => {\r\n        html += `<div class=\"card\" id=\"${meal.idMeal}\">\r\n               <div class=\"card-img\">\r\n                   <img src=\"${meal.strMealThumb}\" alt=\"${meal.strMeal}\">\r\n               </div>\r\n               <div class=\"card-info\">\r\n                   <h2>${meal.strMeal}</h2>\r\n                   <ul>\r\n                       <li><button id=${meal.idMeal}  class=\"comment-btn\" type=\"button\">Comments</button></li>\r\n                       <li><button class=\"like-btn\"><i class=\"fa-regular fa-heart\"></i><span class=\"like-count\">0</span></button></li>\r\n                   </ul>\r\n               </div>\r\n             </div>`;\r\n        recipeCards.innerHTML = html;\r\n      });\r\n      (0,_popupWindow_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n      (0,_like_js__WEBPACK_IMPORTED_MODULE_1__.getLikes)();\r\n      (0,_like_js__WEBPACK_IMPORTED_MODULE_1__.likeInteract)();\r\n      (0,_itemCounter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data.meals, recipeCount);\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayCards);\r\n\n\n//# sourceURL=webpack://foodify-kitchenball/./src/modules/displayItems.js?");

/***/ }),

/***/ "./src/modules/itemCounter.js":
/*!************************************!*\
  !*** ./src/modules/itemCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst itemsCounter = (data, link) => {\r\n  link.innerHTML = `Recipes(${data.length})`;\r\n  return data.length;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemsCounter);\r\n\n\n//# sourceURL=webpack://foodify-kitchenball/./src/modules/itemCounter.js?");

/***/ }),

/***/ "./src/modules/like.js":
/*!*****************************!*\
  !*** ./src/modules/like.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"likeInteract\": () => (/* binding */ likeInteract)\n/* harmony export */ });\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/TVh1v8c5aHUNyfocTFww/likes';\r\nconst getLikes = async () => {\r\n  const cards = document.querySelectorAll('.card');\r\n  const likeCount = document.querySelectorAll('.like-count');\r\n  await fetch(url)\r\n    .then((response) => response.json())\r\n    .then((json) => {\r\n      cards.forEach((card, index) => {\r\n        json.forEach((item) => {\r\n          if (item.item_id === card.id) {\r\n            likeCount[index].innerHTML = item.likes;\r\n          }\r\n        });\r\n      });\r\n    });\r\n};\r\nconst likeInteract = async () => {\r\n  const likeBtns = document.querySelectorAll('.like-btn');\r\n  const likeBtnIcon = document.querySelectorAll('.fa-heart');\r\n  const likeBtnCount = document.querySelectorAll('.like-count');\r\n  const cards = document.querySelectorAll('.card');\r\n  likeBtns.forEach((btn, index) => {\r\n    btn.addEventListener('click', () => {\r\n      likeBtnIcon[index].classList.remove('fa-regular');\r\n      likeBtnIcon[index].classList.add('fa-solid');\r\n      likeBtnCount[index].innerHTML = Number(likeBtnCount[index].innerHTML) + 1;\r\n      fetch(url, {\r\n        method: 'POST',\r\n        body: JSON.stringify({\r\n          item_id: cards[index].id,\r\n        }),\r\n        headers: {\r\n          'Content-type': 'application/json; charset=UTF-8',\r\n        },\r\n      });\r\n    });\r\n  });\r\n};\r\n\r\n\n\n//# sourceURL=webpack://foodify-kitchenball/./src/modules/like.js?");

/***/ }),

/***/ "./src/modules/popupWindow.js":
/*!************************************!*\
  !*** ./src/modules/popupWindow.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _comment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment.js */ \"./src/modules/comment.js\");\n\n\nconst popupContainer = document.querySelector('.popup-container');\nconst popupImage = document.querySelector('.popup-image img');\nconst dishName = document.querySelector('.dish-name');\nconst recipe = document.querySelector('.recipe');\nconst close = document.querySelector('#close');\nconst formContainer = document.querySelector('.add-comment');\n\nconst baseURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';\n\nconst createForm = (id) => {\n  formContainer.innerHTML = '<h4> Add a comment</h4>';\n  const form = document.createElement('form');\n  form.classList.add('form');\n  form.id = id;\n  form.innerHTML = `<input class='name' name='name' type=\"text\" placeholder=\"Your Name\" pattern=\"[a-zA-Z ]{1,30}\" required>\n          <input class='new-comment' name='comment' type=\"text\" placeholder=\"Write your comment here\" pattern=\"[a-zA-Z9-0 ]{1,150}\" required>\n          <input class=\"btn\" name='comment-button' type=\"submit\" value=\"Comment\">`;\n  formContainer.appendChild(form);\n  const name = document.querySelector('.name');\n  const comment = document.querySelector('.new-comment');\n  form.addEventListener('submit', (e) => {\n    e.preventDefault();\n    if (name.value && comment.value) {\n      (0,_comment_js__WEBPACK_IMPORTED_MODULE_0__.postComment)(name.value, comment.value, form.id);\n      form.reset();\n    }\n  });\n};\n\nconst displayPopup = () => {\n  const commentButtons = document.querySelectorAll('.comment-btn');\n\n  commentButtons.forEach((button) => {\n    button.addEventListener('click', () => {\n      createForm(button.id);\n      (0,_comment_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(button.id);\n      fetch(`${baseURL}${button.id}`)\n        .then((response) => response.json())\n        .then((elem) => {\n          popupContainer.classList.remove('hidden');\n          document.querySelector('body').classList.add('no-scroll');\n          popupImage.setAttribute('src', elem.meals[0].strMealThumb);\n          dishName.innerHTML = elem.meals[0].strMeal;\n          recipe.innerHTML = elem.meals[0].strInstructions;\n        });\n    });\n  });\n\n  close.addEventListener('click', () => {\n    popupContainer.classList.add('hidden');\n    document.querySelector('body').classList.remove('no-scroll');\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayPopup);\n\n//# sourceURL=webpack://foodify-kitchenball/./src/modules/popupWindow.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;