"use strict";
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
exports.id = "pages/detail";
exports.ids = ["pages/detail"];
exports.modules = {

/***/ "./pages/detail.js":
/*!*************************!*\
  !*** ./pages/detail.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_hocs_withAnalytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/hocs/withAnalytics */ \"./src/hocs/withAnalytics.js\");\n\n\n\n\nconst Detail = ({ user  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: user.login\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\guico\\\\Documents\\\\nextssr\\\\pages\\\\detail.js\",\n                lineNumber: 8,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: user.avatar_url,\n                width: 200\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\guico\\\\Documents\\\\nextssr\\\\pages\\\\detail.js\",\n                lineNumber: 9,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\guico\\\\Documents\\\\nextssr\\\\pages\\\\detail.js\",\n        lineNumber: 7,\n        columnNumber: 3\n    }, undefined);\nDetail.getInitialProps = async ({ query  })=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`https://api.github.com/users/${query.user}`);\n    return {\n        user: response.data\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_src_hocs_withAnalytics__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()(Detail));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kZXRhaWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUF5QjtBQUNBO0FBRTRCO0FBRXJELE1BQU1HLE1BQU0sR0FBRyxDQUFDLEVBQUVDLElBQUksR0FBRSxpQkFDdEIsOERBQUNDLEtBQUc7OzBCQUNGLDhEQUFDQyxJQUFFOzBCQUFFRixJQUFJLENBQUNHLEtBQUs7Ozs7O3lCQUFNOzBCQUNyQiw4REFBQ0MsS0FBRztnQkFBQ0MsR0FBRyxFQUFFTCxJQUFJLENBQUNNLFVBQVU7Z0JBQUVDLEtBQUssRUFBRSxHQUFHOzs7Ozt5QkFBSTs7Ozs7O2lCQUNyQztBQUdSUixNQUFNLENBQUNTLGVBQWUsR0FBRyxPQUFPLEVBQUVDLEtBQUssR0FBRSxHQUFLO0lBQzVDLE1BQU1DLFFBQVEsR0FBRyxNQUFNYixnREFBUyxDQUFDLENBQUMsNkJBQTZCLEVBQUVZLEtBQUssQ0FBQ1QsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUU5RSxPQUFPO1FBQUVBLElBQUksRUFBRVUsUUFBUSxDQUFDRSxJQUFJO0tBQUU7Q0FDL0I7QUFFRCxpRUFBZWQsbUVBQWEsRUFBRSxDQUFDQyxNQUFNLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0c3NyLy4vcGFnZXMvZGV0YWlsLmpzP2JiYzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5pbXBvcnQgd2l0aEFuYWx5dGljcyBmcm9tICcuLi9zcmMvaG9jcy93aXRoQW5hbHl0aWNzJ1xyXG5cclxuY29uc3QgRGV0YWlsID0gKHsgdXNlciB9KSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxoMT57dXNlci5sb2dpbn08L2gxPlxyXG4gICAgPGltZyBzcmM9e3VzZXIuYXZhdGFyX3VybH0gd2lkdGg9ezIwMH0gLz5cclxuICA8L2Rpdj5cclxuKVxyXG5cclxuRGV0YWlsLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHF1ZXJ5IH0pID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke3F1ZXJ5LnVzZXJ9YClcclxuXHJcbiAgcmV0dXJuIHsgdXNlcjogcmVzcG9uc2UuZGF0YSB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBbmFseXRpY3MoKShEZXRhaWwpXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImF4aW9zIiwid2l0aEFuYWx5dGljcyIsIkRldGFpbCIsInVzZXIiLCJkaXYiLCJoMSIsImxvZ2luIiwiaW1nIiwic3JjIiwiYXZhdGFyX3VybCIsIndpZHRoIiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiLCJyZXNwb25zZSIsImdldCIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/detail.js\n");

/***/ }),

/***/ "./src/hocs/withAnalytics.js":
/*!***********************************!*\
  !*** ./src/hocs/withAnalytics.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_shared_lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/shared/lib/utils */ \"next/dist/shared/lib/utils\");\n/* harmony import */ var next_dist_shared_lib_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_utils__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-ga */ \"react-ga\");\n/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>(Composed)=>class extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n            static getInitialProps(ctx) {\n                return (0,next_dist_shared_lib_utils__WEBPACK_IMPORTED_MODULE_2__.loadGetInitialProps)(Composed, ctx);\n            }\n            componentDidMount() {\n                console.log(\"PAGE VIEW\");\n                react_ga__WEBPACK_IMPORTED_MODULE_3___default().initialize(\"ID-ANALYTICS\");\n                react_ga__WEBPACK_IMPORTED_MODULE_3___default().pageview(window.location.pathname);\n            }\n            render() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Composed, {\n                    ...this.props\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\guico\\\\Documents\\\\nextssr\\\\src\\\\hocs\\\\withAnalytics.js\",\n                    lineNumber: 19,\n                    columnNumber: 14\n                }, this);\n            }\n        });\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9jcy93aXRoQW5hbHl0aWNzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQXdDO0FBRXdCO0FBQ2xDO0FBRTlCLGlFQUFlLElBQU1JLENBQUFBLFFBQVEsR0FDM0IsY0FBY0gsNENBQVM7WUFDckIsT0FBT0ksZUFBZSxDQUFDQyxHQUFHLEVBQUU7Z0JBQzFCLE9BQU9KLCtFQUFtQixDQUFDRSxRQUFRLEVBQUVFLEdBQUcsQ0FBQzthQUMxQztZQUVEQyxpQkFBaUIsR0FBRztnQkFDbEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsQ0FBQztnQkFDeEJOLDBEQUFrQixDQUFDLGNBQWMsQ0FBQztnQkFDbENBLHdEQUFnQixDQUFDUyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDO2FBQzNDO1lBRURDLE1BQU0sR0FBRztnQkFDUCxxQkFBTyw4REFBQ1gsUUFBUTtvQkFBRSxHQUFHLElBQUksQ0FBQ1ksS0FBSzs7Ozs7d0JBQUk7YUFDcEM7U0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRzc3IvLi9zcmMvaG9jcy93aXRoQW5hbHl0aWNzLmpzPzVkMGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHsgbG9hZEdldEluaXRpYWxQcm9wcyB9IGZyb20gJ25leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzJ1xyXG5pbXBvcnQgUmVhY3RHQSBmcm9tICdyZWFjdC1nYSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IENvbXBvc2VkID0+XHJcbiAgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIGdldEluaXRpYWxQcm9wcyhjdHgpIHtcclxuICAgICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9zZWQsIGN0eClcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1BBR0UgVklFVycpXHJcbiAgICAgIFJlYWN0R0EuaW5pdGlhbGl6ZSgnSUQtQU5BTFlUSUNTJylcclxuICAgICAgUmVhY3RHQS5wYWdldmlldyh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICByZXR1cm4gPENvbXBvc2VkIHsuLi50aGlzLnByb3BzfSAvPlxyXG4gICAgfVxyXG4gIH1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwibG9hZEdldEluaXRpYWxQcm9wcyIsIlJlYWN0R0EiLCJDb21wb3NlZCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImNvbXBvbmVudERpZE1vdW50IiwiY29uc29sZSIsImxvZyIsImluaXRpYWxpemUiLCJwYWdldmlldyIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJyZW5kZXIiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hocs/withAnalytics.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/dist/shared/lib/utils":
/*!*********************************************!*\
  !*** external "next/dist/shared/lib/utils" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-ga":
/*!***************************!*\
  !*** external "react-ga" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("react-ga");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/detail.js"));
module.exports = __webpack_exports__;

})();