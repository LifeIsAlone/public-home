/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/core/redux/index.js":
/*!*********************************!*\
  !*** ./src/core/redux/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"wrapper\": () => (/* binding */ wrapper)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-logger */ \"redux-logger\");\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules */ \"./src/core/redux/modules/index.js\");\n\n\n\n\nconst makeStore = (context)=>(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n        reducer: _modules__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat((redux_logger__WEBPACK_IMPORTED_MODULE_2___default())),\n        devTools: \"development\" !== \"production\"\n    });\nconst wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.createWrapper)(makeStore, {\n    debug: \"development\" !== \"production\",\n    serializableCheck: false\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29yZS9yZWR1eC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFrRDtBQUNDO0FBQ2pCO0FBRUY7QUFFaEMsTUFBTUksU0FBUyxHQUFHLENBQUNDLE9BQU8sR0FBS0wsZ0VBQWMsQ0FBQztRQUMxQ0csT0FBTztRQUNQRyxVQUFVLEVBQUUsQ0FBQ0Msb0JBQW9CLEdBQUtBLG9CQUFvQixFQUFFLENBQUNDLE1BQU0sQ0FBQ04scURBQU0sQ0FBQztRQUMzRU8sUUFBUSxFQUFFQyxhQVRELEtBUzBCLFlBQVk7S0FDbEQsQ0FBQztBQUVLLE1BQU1DLE9BQU8sR0FBR1YsaUVBQWEsQ0FBQ0csU0FBUyxFQUFFO0lBQzVDUSxLQUFLLEVBQUVGLGFBYkUsS0FhdUIsWUFBWTtJQUM1Q0csaUJBQWlCLEVBQUUsS0FBSztDQUMzQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHVibGljLWhvbWUvLi9zcmMvY29yZS9yZWR1eC9pbmRleC5qcz9mM2RkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgbG9nZ2VyIGZyb20gJ3JlZHV4LWxvZ2dlcic7XHJcblxyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuL21vZHVsZXMnO1xyXG5cclxuY29uc3QgbWFrZVN0b3JlID0gKGNvbnRleHQpID0+IGNvbmZpZ3VyZVN0b3JlKHtcclxuICAgIHJlZHVjZXIsXHJcbiAgICBtaWRkbGV3YXJlOiAoZ2V0RGVmYXVsdE1pZGRsZXdhcmUpID0+IGdldERlZmF1bHRNaWRkbGV3YXJlKCkuY29uY2F0KGxvZ2dlciksXHJcbiAgICBkZXZUb29sczogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIobWFrZVN0b3JlLCB7XHJcbiAgICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyxcclxuICAgIHNlcmlhbGl6YWJsZUNoZWNrOiBmYWxzZSxcclxufSkiXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJjcmVhdGVXcmFwcGVyIiwibG9nZ2VyIiwicmVkdWNlciIsIm1ha2VTdG9yZSIsImNvbnRleHQiLCJtaWRkbGV3YXJlIiwiZ2V0RGVmYXVsdE1pZGRsZXdhcmUiLCJjb25jYXQiLCJkZXZUb29scyIsInByb2Nlc3MiLCJ3cmFwcGVyIiwiZGVidWciLCJzZXJpYWxpemFibGVDaGVjayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/core/redux/index.js\n");

/***/ }),

/***/ "./src/core/redux/modules/index.js":
/*!*****************************************!*\
  !*** ./src/core/redux/modules/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _naver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./naver */ \"./src/core/redux/modules/naver.js\");\n\n\n\nconst reducer = (state, action)=>{\n    if (action.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.HYDRATE) {\n        return {\n            ...state,\n            ...action.payload\n        };\n    }\n    return (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.combineReducers)([\n        _naver__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ])(state, action);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29yZS9yZWR1eC9tb2R1bGVzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFtRDtBQUNOO0FBRWpCO0FBRTVCLE1BQU1HLE9BQU8sR0FBRyxDQUFDQyxLQUFLLEVBQUVDLE1BQU0sR0FBSztJQUMvQixJQUFJQSxNQUFNLENBQUNDLElBQUksS0FBS0wsdURBQU8sRUFBRTtRQUN6QixPQUFPO1lBQ0gsR0FBR0csS0FBSztZQUNSLEdBQUdDLE1BQU0sQ0FBQ0UsT0FBTztTQUNwQjtLQUNKO0lBQ0QsT0FBT1AsaUVBQWUsQ0FBQztRQUNuQkUsOENBQUs7S0FDUixDQUFDLENBQUNFLEtBQUssRUFBRUMsTUFBTSxDQUFDLENBQUM7Q0FDckI7QUFFRCxpRUFBZUYsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHVibGljLWhvbWUvLi9zcmMvY29yZS9yZWR1eC9tb2R1bGVzL2luZGV4LmpzPzIxNjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcblxyXG5pbXBvcnQgbmF2ZXIgZnJvbSAnLi9uYXZlcic7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gSFlEUkFURSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjb21iaW5lUmVkdWNlcnMoW1xyXG4gICAgICAgIG5hdmVyXHJcbiAgICBdKShzdGF0ZSwgYWN0aW9uKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwibmFtZXMiOlsiY29tYmluZVJlZHVjZXJzIiwiSFlEUkFURSIsIm5hdmVyIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/core/redux/modules/index.js\n");

/***/ }),

/***/ "./src/core/redux/modules/naver.js":
/*!*****************************************!*\
  !*** ./src/core/redux/modules/naver.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"setNaver\": () => (/* binding */ setNaver)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    naver: undefined\n};\nconst naverSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"naver\",\n    initialState,\n    reducers: {\n        setNaver (state, action) {\n            state.naver = action.payload;\n        }\n    }\n});\nconst { setNaver  } = naverSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (naverSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29yZS9yZWR1eC9tb2R1bGVzL25hdmVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBOEM7QUFFOUMsTUFBTUMsWUFBWSxHQUFHO0lBQUVDLEtBQUssRUFBRUMsU0FBUztDQUFFO0FBRXpDLE1BQU1DLFVBQVUsR0FBR0osNkRBQVcsQ0FBQztJQUMzQkssSUFBSSxFQUFFLE9BQU87SUFDYkosWUFBWTtJQUNaSyxRQUFRLEVBQUU7UUFDTkMsUUFBUSxFQUFDQyxLQUFLLEVBQUVDLE1BQU0sRUFBRTtZQUNwQkQsS0FBSyxDQUFDTixLQUFLLEdBQUdPLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDO1NBQ2hDO0tBQ0o7Q0FDSixDQUFDO0FBRUssTUFBTSxFQUFFSCxRQUFRLEdBQUUsR0FBR0gsVUFBVSxDQUFDTyxPQUFPLENBQUM7QUFDL0MsaUVBQWVQLFVBQVUsQ0FBQ1EsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHVibGljLWhvbWUvLi9zcmMvY29yZS9yZWR1eC9tb2R1bGVzL25hdmVyLmpzP2RiYjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0geyBuYXZlcjogdW5kZWZpbmVkIH07XHJcblxyXG5jb25zdCBuYXZlclNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogJ25hdmVyJyxcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgICAgc2V0TmF2ZXIoc3RhdGUsIGFjdGlvbikge1xyXG4gICAgICAgICAgICBzdGF0ZS5uYXZlciA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyBzZXROYXZlciB9ID0gbmF2ZXJTbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgZGVmYXVsdCBuYXZlclNsaWNlLnJlZHVjZXI7Il0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwibmF2ZXIiLCJ1bmRlZmluZWQiLCJuYXZlclNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwic2V0TmF2ZXIiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/core/redux/modules/naver.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _core_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/redux */ \"./src/core/redux/index.js\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\public-home\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 5,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_core_redux__WEBPACK_IMPORTED_MODULE_2__.wrapper.withRedux(MyApp));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUFpQztBQUNPO0FBRXhDLFNBQVNDLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3ZDLHFCQUFPLDhEQUFDRCxTQUFTO1FBQUUsR0FBR0MsU0FBUzs7Ozs7WUFBSTtDQUNwQztBQUVELGlFQUFlSCwwREFBaUIsQ0FBQ0MsS0FBSyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHVibGljLWhvbWUvLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gJy4uL2NvcmUvcmVkdXgnO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTXlBcHApXG4iXSwibmFtZXMiOlsid3JhcHBlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwid2l0aFJlZHV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-logger");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();