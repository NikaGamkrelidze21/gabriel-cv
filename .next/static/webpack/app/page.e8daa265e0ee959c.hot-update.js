"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/componenets/about-me.js":
/*!*****************************************!*\
  !*** ./src/app/componenets/about-me.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AboutMe; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nfunction AboutMe(param) {\n    let { status, description, name, lastname } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n        initial: {\n            x: -500,\n            opacity: 0,\n            scale: 0.5\n        },\n        animate: {\n            x: 0,\n            opacity: 1,\n            scale: 1\n        },\n        transition: {\n            delay: 1\n        },\n        className: \"flex flex-col px-1 gap-10 text-center text-[montserrat-alternates]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-5xl uppercase font-lg\",\n                children: [\n                    name,\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nicolo\\\\Desktop\\\\,\\\\Development\\\\gabriel-cv\\\\src\\\\app\\\\componenets\\\\about-me.js\",\n                        lineNumber: 14,\n                        columnNumber: 58\n                    }, this),\n                    \" \",\n                    lastname\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Nicolo\\\\Desktop\\\\,\\\\Development\\\\gabriel-cv\\\\src\\\\app\\\\componenets\\\\about-me.js\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"font-bold text-3xl\",\n                children: status\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Nicolo\\\\Desktop\\\\,\\\\Development\\\\gabriel-cv\\\\src\\\\app\\\\componenets\\\\about-me.js\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-lg\",\n                children: description\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Nicolo\\\\Desktop\\\\,\\\\Development\\\\gabriel-cv\\\\src\\\\app\\\\componenets\\\\about-me.js\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Nicolo\\\\Desktop\\\\,\\\\Development\\\\gabriel-cv\\\\src\\\\app\\\\componenets\\\\about-me.js\",\n        lineNumber: 7,\n        columnNumber: 7\n    }, this);\n}\n_c = AboutMe;\nvar _c;\n$RefreshReg$(_c, \"AboutMe\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW5ldHMvYWJvdXQtbWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNzQztBQUd2QixTQUFTQyxRQUFRLEtBQXVDO1FBQXZDLEVBQUVDLE1BQU0sRUFBRUMsV0FBVyxFQUFFQyxJQUFJLEVBQUVDLFFBQVEsRUFBRSxHQUF2QztJQUM5QixxQkFDSSw4REFBQ0wsaURBQU1BLENBQUNNLEdBQUc7UUFDVEMsU0FBUztZQUFFQyxHQUFHLENBQUM7WUFBS0MsU0FBUTtZQUFHQyxPQUFNO1FBQUk7UUFDekNDLFNBQVM7WUFBRUgsR0FBRztZQUFHQyxTQUFRO1lBQUdDLE9BQU07UUFBRTtRQUNwQ0UsWUFBWTtZQUFDQyxPQUFNO1FBQUM7UUFDcEJDLFdBQVU7OzBCQUdWLDhEQUFDQztnQkFBRUQsV0FBVTs7b0JBQThCVjtvQkFBSztrQ0FBQyw4REFBQ1k7Ozs7O29CQUFLO29CQUFFWDs7Ozs7OzswQkFDekQsOERBQUNVO2dCQUFFRCxXQUFVOzBCQUF1Qlo7Ozs7OzswQkFDcEMsOERBQUNhO2dCQUFFRCxXQUFVOzBCQUFXWDs7Ozs7Ozs7Ozs7O0FBR2hDO0tBZHdCRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVuZXRzL2Fib3V0LW1lLmpzPzc4ZTMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dE1lKHsgc3RhdHVzLCBkZXNjcmlwdGlvbiwgbmFtZSwgbGFzdG5hbWUgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgaW5pdGlhbD17eyB4OiAtNTAwLCBvcGFjaXR5OjAsIHNjYWxlOjAuNSB9fVxyXG4gICAgICAgIGFuaW1hdGU9e3sgeDogMCwgb3BhY2l0eToxLCBzY2FsZToxIH19XHJcbiAgICAgICAgdHJhbnNpdGlvbj17e2RlbGF5OjF9fVxyXG4gICAgICAgIGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBweC0xIGdhcC0xMCB0ZXh0LWNlbnRlciB0ZXh0LVttb250c2VycmF0LWFsdGVybmF0ZXNdJ1xyXG4gICAgICA+XHJcblxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC01eGwgdXBwZXJjYXNlIGZvbnQtbGcnPntuYW1lfSA8YnIgLz4ge2xhc3RuYW1lfTwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0zeGxcIiA+e3N0YXR1c308L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZ1wiPntkZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDwvbW90aW9uLmRpdj5cclxuICApXHJcbn0iXSwibmFtZXMiOlsibW90aW9uIiwiQWJvdXRNZSIsInN0YXR1cyIsImRlc2NyaXB0aW9uIiwibmFtZSIsImxhc3RuYW1lIiwiZGl2IiwiaW5pdGlhbCIsIngiLCJvcGFjaXR5Iiwic2NhbGUiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImRlbGF5IiwiY2xhc3NOYW1lIiwicCIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/componenets/about-me.js\n"));

/***/ })

});