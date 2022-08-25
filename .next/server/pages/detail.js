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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_hocs_withAnalytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/hocs/withAnalytics */ \"./src/hocs/withAnalytics.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"C:\\\\Users\\\\guico\\\\Documents\\\\nextssr\\\\pages\\\\detail.js\";\n\n\n\n\n\nconst Detail = ({\n  user\n}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n    children: user.login\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"img\", {\n    src: user.avatar_url,\n    width: 200\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, undefined)]\n}, void 0, true, {\n  fileName: _jsxFileName,\n  lineNumber: 7,\n  columnNumber: 3\n}, undefined);\n\nDetail.getInitialProps = async ({\n  query\n}) => {\n  const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`https://api.github.com/users/${query.user}`);\n  return {\n    user: response.data\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_src_hocs_withAnalytics__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()(Detail));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kZXRhaWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOzs7QUFFQSxNQUFNRyxNQUFNLEdBQUcsQ0FBQztFQUFFQztBQUFGLENBQUQsa0JBQ2I7RUFBQSx3QkFDRTtJQUFBLFVBQUtBLElBQUksQ0FBQ0M7RUFBVjtJQUFBO0lBQUE7SUFBQTtFQUFBLGFBREYsZUFFRTtJQUFLLEdBQUcsRUFBRUQsSUFBSSxDQUFDRSxVQUFmO0lBQTJCLEtBQUssRUFBRTtFQUFsQztJQUFBO0lBQUE7SUFBQTtFQUFBLGFBRkY7QUFBQTtFQUFBO0VBQUE7RUFBQTtBQUFBLGFBREY7O0FBT0FILE1BQU0sQ0FBQ0ksZUFBUCxHQUF5QixPQUFPO0VBQUVDO0FBQUYsQ0FBUCxLQUFxQjtFQUM1QyxNQUFNQyxRQUFRLEdBQUcsTUFBTVIsZ0RBQUEsQ0FBVyxnQ0FBK0JPLEtBQUssQ0FBQ0osSUFBSyxFQUFyRCxDQUF2QjtFQUVBLE9BQU87SUFBRUEsSUFBSSxFQUFFSyxRQUFRLENBQUNFO0VBQWpCLENBQVA7QUFDRCxDQUpEOztBQU1BLGlFQUFlVCxtRUFBYSxHQUFHQyxNQUFILENBQTVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dHNzci8uL3BhZ2VzL2RldGFpbC5qcz9iYmM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuaW1wb3J0IHdpdGhBbmFseXRpY3MgZnJvbSAnLi4vc3JjL2hvY3Mvd2l0aEFuYWx5dGljcydcclxuXHJcbmNvbnN0IERldGFpbCA9ICh7IHVzZXIgfSkgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8aDE+e3VzZXIubG9naW59PC9oMT5cclxuICAgIDxpbWcgc3JjPXt1c2VyLmF2YXRhcl91cmx9IHdpZHRoPXsyMDB9IC8+XHJcbiAgPC9kaXY+XHJcbilcclxuXHJcbkRldGFpbC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBxdWVyeSB9KSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHtxdWVyeS51c2VyfWApXHJcblxyXG4gIHJldHVybiB7IHVzZXI6IHJlc3BvbnNlLmRhdGEgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQW5hbHl0aWNzKCkoRGV0YWlsKVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJheGlvcyIsIndpdGhBbmFseXRpY3MiLCJEZXRhaWwiLCJ1c2VyIiwibG9naW4iLCJhdmF0YXJfdXJsIiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiLCJyZXNwb25zZSIsImdldCIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/detail.js\n");

/***/ }),

/***/ "./src/hocs/withAnalytics.js":
/*!***********************************!*\
  !*** ./src/hocs/withAnalytics.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_shared_lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/shared/lib/utils */ \"next/dist/shared/lib/utils\");\n/* harmony import */ var next_dist_shared_lib_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_utils__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-ga */ \"react-ga\");\n/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"C:\\\\Users\\\\guico\\\\Documents\\\\nextssr\\\\src\\\\hocs\\\\withAnalytics.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => Composed => class extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  static getInitialProps(ctx) {\n    return (0,next_dist_shared_lib_utils__WEBPACK_IMPORTED_MODULE_1__.loadGetInitialProps)(Composed, ctx);\n  }\n\n  componentDidMount() {\n    console.log('PAGE VIEW');\n    react_ga__WEBPACK_IMPORTED_MODULE_2___default().initialize('ID-ANALYTICS');\n    react_ga__WEBPACK_IMPORTED_MODULE_2___default().pageview(window.location.pathname);\n  }\n\n  render() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Composed, _objectSpread({}, this.props), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 14\n    }, this);\n  }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9jcy93aXRoQW5hbHl0aWNzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBOztBQUVBLGlFQUFlLE1BQU1JLFFBQVEsSUFDM0IsY0FBY0gsNENBQWQsQ0FBd0I7RUFDQSxPQUFmSSxlQUFlLENBQUNDLEdBQUQsRUFBTTtJQUMxQixPQUFPSiwrRUFBbUIsQ0FBQ0UsUUFBRCxFQUFXRSxHQUFYLENBQTFCO0VBQ0Q7O0VBRURDLGlCQUFpQixHQUFHO0lBQ2xCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0lBQ0FOLDBEQUFBLENBQW1CLGNBQW5CO0lBQ0FBLHdEQUFBLENBQWlCUyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLFFBQWpDO0VBQ0Q7O0VBRURDLE1BQU0sR0FBRztJQUNQLG9CQUFPLDhEQUFDLFFBQUQsb0JBQWMsS0FBS0MsS0FBbkI7TUFBQTtNQUFBO01BQUE7SUFBQSxRQUFQO0VBQ0Q7O0FBYnFCLENBRDFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dHNzci8uL3NyYy9ob2NzL3dpdGhBbmFseXRpY3MuanM/NWQwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgeyBsb2FkR2V0SW5pdGlhbFByb3BzIH0gZnJvbSAnbmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMnXHJcbmltcG9ydCBSZWFjdEdBIGZyb20gJ3JlYWN0LWdhJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gQ29tcG9zZWQgPT5cclxuICBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzKGN0eCkge1xyXG4gICAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wcyhDb21wb3NlZCwgY3R4KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnUEFHRSBWSUVXJylcclxuICAgICAgUmVhY3RHQS5pbml0aWFsaXplKCdJRC1BTkFMWVRJQ1MnKVxyXG4gICAgICBSZWFjdEdBLnBhZ2V2aWV3KHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIHJldHVybiA8Q29tcG9zZWQgey4uLnRoaXMucHJvcHN9IC8+XHJcbiAgICB9XHJcbiAgfVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiUmVhY3RHQSIsIkNvbXBvc2VkIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiY29tcG9uZW50RGlkTW91bnQiLCJjb25zb2xlIiwibG9nIiwiaW5pdGlhbGl6ZSIsInBhZ2V2aWV3Iiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInJlbmRlciIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hocs/withAnalytics.js\n");

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