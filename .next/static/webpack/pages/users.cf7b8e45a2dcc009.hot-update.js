"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/users",{

/***/ "./pages/users.js":
/*!************************!*\
  !*** ./pages/users.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_guico_Documents_nextssr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_guico_Documents_nextssr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_guico_Documents_nextssr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _src_hocs_withAnalytics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/hocs/withAnalytics */ \"./src/hocs/withAnalytics.js\");\n\n\nvar _this = undefined;\n\n\n\n\n\n\nvar User = function(param) {\n    var users = param.users;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                    children: \"Usu\\xe1rios\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\guico\\\\Documents\\\\nextssr\\\\pages\\\\users.js\",\n                    lineNumber: 12,\n                    columnNumber: 7\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\guico\\\\Documents\\\\nextssr\\\\pages\\\\users.js\",\n                lineNumber: 11,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                children: users.map(function(user) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                        children: [\n                            user.login,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                href: \"/users/\".concat(user.login),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                    children: \"Acessar\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\guico\\\\Documents\\\\nextssr\\\\pages\\\\users.js\",\n                                    lineNumber: 19,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\guico\\\\Documents\\\\nextssr\\\\pages\\\\users.js\",\n                                lineNumber: 18,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, user.id, true, {\n                        fileName: \"C:\\\\Users\\\\guico\\\\Documents\\\\nextssr\\\\pages\\\\users.js\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\guico\\\\Documents\\\\nextssr\\\\pages\\\\users.js\",\n                lineNumber: 14,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                    children: \"Pages\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\guico\\\\Documents\\\\nextssr\\\\pages\\\\users.js\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\guico\\\\Documents\\\\nextssr\\\\pages\\\\users.js\",\n                lineNumber: 24,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\guico\\\\Documents\\\\nextssr\\\\pages\\\\users.js\",\n        lineNumber: 10,\n        columnNumber: 3\n    }, _this);\n};\n_c = User;\nUser.getInitialProps = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(C_Users_guico_Documents_nextssr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n    var response;\n    return C_Users_guico_Documents_nextssr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_3___default().get(\"https://api.github.com/orgs/rocketseat/members\");\n            case 2:\n                response = _ctx.sent;\n                console.log(response.data);\n                return _ctx.abrupt(\"return\", {\n                    users: response.data\n                });\n            case 5:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,_src_hocs_withAnalytics__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()(User));\nvar _c;\n$RefreshReg$(_c, \"User\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUF5QjtBQUNBO0FBRUc7QUFDQTtBQUV5QjtBQUVyRCxJQUFNSyxJQUFJLEdBQUc7UUFBR0MsS0FBSyxTQUFMQSxLQUFLO3lCQUNuQiw4REFBQ0MsS0FBRzs7MEJBQ0YsOERBQUNKLGtEQUFJOzBCQUNILDRFQUFDSyxPQUFLOzhCQUFDLGFBQVE7Ozs7O3lCQUFROzs7OztxQkFDbEI7MEJBQ1AsOERBQUNDLElBQUU7MEJBQ0FILEtBQUssQ0FBQ0ksR0FBRyxDQUFDQyxTQUFBQSxJQUFJO3lDQUNiLDhEQUFDQyxJQUFFOzs0QkFDQUQsSUFBSSxDQUFDRSxLQUFLOzBDQUNYLDhEQUFDWCxrREFBSTtnQ0FBQ1ksSUFBSSxFQUFFLFNBQVEsQ0FBYSxPQUFYSCxJQUFJLENBQUNFLEtBQUssQ0FBRTswQ0FDaEMsNEVBQUNFLEdBQUM7OENBQUMsU0FBTzs7Ozs7eUNBQUk7Ozs7O3FDQUNUOzt1QkFKQUosSUFBSSxDQUFDSyxFQUFFOzs7OzZCQUtYO2lCQUNOLENBQUM7Ozs7O3FCQUNDOzBCQUNMLDhEQUFDZCxrREFBSTtnQkFBQ1ksSUFBSSxFQUFDLEdBQUc7MEJBQ1osNEVBQUNDLEdBQUM7OEJBQUMsT0FBSzs7Ozs7eUJBQUk7Ozs7O3FCQUNQOzs7Ozs7YUFDSDtDQUNQO0FBbkJLVixLQUFBQSxJQUFJO0FBcUJWQSxJQUFJLENBQUNZLGVBQWUsR0FBRyxrUEFBWTtRQUMzQkMsUUFBUTs7Ozs7dUJBQVNqQixnREFBUyxDQUM5QixnREFBZ0QsQ0FDakQ7O2dCQUZLaUIsUUFBUSxZQUViO2dCQUNERSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsUUFBUSxDQUFDSSxJQUFJLENBQUM7NkNBQ25CO29CQUFFaEIsS0FBSyxFQUFFWSxRQUFRLENBQUNJLElBQUk7aUJBQUU7Ozs7OztDQUNoQztBQUVELCtEQUFlbEIsbUVBQWEsRUFBRSxDQUFDQyxJQUFJLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlcnMuanM/MDA2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuaW1wb3J0IHdpdGhBbmFseXRpY3MgZnJvbSAnLi4vc3JjL2hvY3Mvd2l0aEFuYWx5dGljcydcclxuXHJcbmNvbnN0IFVzZXIgPSAoeyB1c2VycyB9KSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+VXN1w6FyaW9zPC90aXRsZT5cclxuICAgIDwvSGVhZD5cclxuICAgIDx1bD5cclxuICAgICAge3VzZXJzLm1hcCh1c2VyID0+IChcclxuICAgICAgICA8bGkga2V5PXt1c2VyLmlkfT5cclxuICAgICAgICAgIHt1c2VyLmxvZ2lufVxyXG4gICAgICAgICAgPExpbmsgaHJlZj17YC91c2Vycy8ke3VzZXIubG9naW59YH0+XHJcbiAgICAgICAgICAgIDxhPkFjZXNzYXI8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgKSl9XHJcbiAgICA8L3VsPlxyXG4gICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgPGE+UGFnZXM8L2E+XHJcbiAgICA8L0xpbms+XHJcbiAgPC9kaXY+XHJcbilcclxuXHJcblVzZXIuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vb3Jncy9yb2NrZXRzZWF0L21lbWJlcnMnXHJcbiAgKVxyXG4gIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXHJcbiAgcmV0dXJuIHsgdXNlcnM6IHJlc3BvbnNlLmRhdGEgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQW5hbHl0aWNzKCkoVXNlcilcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiYXhpb3MiLCJMaW5rIiwiSGVhZCIsIndpdGhBbmFseXRpY3MiLCJVc2VyIiwidXNlcnMiLCJkaXYiLCJ0aXRsZSIsInVsIiwibWFwIiwidXNlciIsImxpIiwibG9naW4iLCJocmVmIiwiYSIsImlkIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzcG9uc2UiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/users.js\n"));

/***/ })

});