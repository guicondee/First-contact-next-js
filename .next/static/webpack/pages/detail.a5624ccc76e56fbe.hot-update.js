"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/detail",{

/***/ "./pages/detail.js":
/*!*************************!*\
  !*** ./pages/detail.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_guico_Documents_nextssr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_guico_Documents_nextssr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_guico_Documents_nextssr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_hocs_withAnalytics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/hocs/withAnalytics */ \"./src/hocs/withAnalytics.js\");\n\n\nvar _this = undefined;\n\n\n\n\nvar Detail = function(param) {\n    var user = param.user;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: user.login\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\guico\\\\Documents\\\\nextssr\\\\pages\\\\detail.js\",\n                lineNumber: 8,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                src: user.avatar_url,\n                width: 200\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\guico\\\\Documents\\\\nextssr\\\\pages\\\\detail.js\",\n                lineNumber: 9,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\guico\\\\Documents\\\\nextssr\\\\pages\\\\detail.js\",\n        lineNumber: 7,\n        columnNumber: 3\n    }, _this);\n};\n_c = Detail;\nDetail.getInitialProps = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(C_Users_guico_Documents_nextssr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n        var query, response;\n        return C_Users_guico_Documents_nextssr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    query = param.query;\n                    _ctx.next = 3;\n                    return axios__WEBPACK_IMPORTED_MODULE_3___default().get(\"https://api.github.com/users/{query.user}\");\n                case 3:\n                    response = _ctx.sent;\n                    return _ctx.abrupt(\"return\", {\n                        user: response.data\n                    });\n                case 5:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function(_) {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,_src_hocs_withAnalytics__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()(Detail));\nvar _c;\n$RefreshReg$(_c, \"Detail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kZXRhaWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUF5QjtBQUNBO0FBRTRCO0FBRXJELElBQU1HLE1BQU0sR0FBRztRQUFHQyxJQUFJLFNBQUpBLElBQUk7eUJBQ3BCLDhEQUFDQyxLQUFHOzswQkFDRiw4REFBQ0MsSUFBRTswQkFBRUYsSUFBSSxDQUFDRyxLQUFLOzs7OztxQkFBTTswQkFDckIsOERBQUNDLEtBQUc7Z0JBQUNDLEdBQUcsRUFBRUwsSUFBSSxDQUFDTSxVQUFVO2dCQUFFQyxLQUFLLEVBQUUsR0FBRzs7Ozs7cUJBQUk7Ozs7OzthQUNyQztDQUNQO0FBTEtSLEtBQUFBLE1BQU07QUFPWkEsTUFBTSxDQUFDUyxlQUFlO2VBQUcsdVBBQXFCO1lBQVpDLEtBQUssRUFDL0JDLFFBQVE7Ozs7b0JBRGtCRCxLQUFLLFNBQUxBLEtBQUs7OzJCQUNkWixnREFBUyxDQUFFLDJDQUF5QyxDQUFFOztvQkFBdkVhLFFBQVEsWUFBK0Q7aURBRXRFO3dCQUFFVixJQUFJLEVBQUVVLFFBQVEsQ0FBQ0UsSUFBSTtxQkFBRTs7Ozs7O0tBQy9COzs7O0dBQUE7QUFFRCwrREFBZWQsbUVBQWEsRUFBRSxDQUFDQyxNQUFNLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGV0YWlsLmpzP2JiYzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5pbXBvcnQgd2l0aEFuYWx5dGljcyBmcm9tICcuLi9zcmMvaG9jcy93aXRoQW5hbHl0aWNzJ1xyXG5cclxuY29uc3QgRGV0YWlsID0gKHsgdXNlciB9KSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxoMT57dXNlci5sb2dpbn08L2gxPlxyXG4gICAgPGltZyBzcmM9e3VzZXIuYXZhdGFyX3VybH0gd2lkdGg9ezIwMH0gLz5cclxuICA8L2Rpdj5cclxuKVxyXG5cclxuRGV0YWlsLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHF1ZXJ5IH0pID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy97cXVlcnkudXNlcn1gKVxyXG5cclxuICByZXR1cm4geyB1c2VyOiByZXNwb25zZS5kYXRhIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFuYWx5dGljcygpKERldGFpbClcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiYXhpb3MiLCJ3aXRoQW5hbHl0aWNzIiwiRGV0YWlsIiwidXNlciIsImRpdiIsImgxIiwibG9naW4iLCJpbWciLCJzcmMiLCJhdmF0YXJfdXJsIiwid2lkdGgiLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/detail.js\n"));

/***/ })

});