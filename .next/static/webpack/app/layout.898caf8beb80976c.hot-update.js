"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"b4dc33e9c3fb\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/Y2E5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImI0ZGMzM2U5YzNmYlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/FinalHeader.tsx":
/*!****************************************!*\
  !*** ./src/components/FinalHeader.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _public_final_header_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/final_header_logo.png */ \"(app-pages-browser)/./public/final_header_logo.png\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _barrel_optimize_names_Download_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Download!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/download.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst FinalHeader = ()=>{\n    _s();\n    const [isMerchantDropdownVisible, setIsMerchantDropdownVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [hoveredItem, setHoveredItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleMouseEnter = (item)=>{\n        closeMerchant();\n        setHoveredItem(item);\n    };\n    const handleMouseLeave = ()=>{\n        setHoveredItem(null);\n    };\n    const openMerchant = ()=>{\n        handleMouseEnter(\"merchant\");\n        setIsMerchantDropdownVisible(true);\n    };\n    const closeMerchant = ()=>{\n        setIsMerchantDropdownVisible(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-24 p-[20px]\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed h-30 left-0 w-full z-[5000]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex bg-[#FCFCFC] justify-between shadow-md py-6 max-md:justify-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex w-1/5 justify-center items-center max-md:w-2/5 max-md:ml-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                href: \"/\",\n                                className: \"logo flex gap-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        className: \"h-8 w-8\",\n                                        src: _public_final_header_logo_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                        alt: \"Rewardwise-logo\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/FinalHeader.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"logo_text text-[#C43939] font-medium font-lato text-[23px] mt-1\",\n                                        children: \"Rewardwise\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/FinalHeader.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 33\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/FinalHeader.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/FinalHeader.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"elements flex w-3/5 justify-center align-middle max-md:hidden\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" gap-6 flex font-medium font-inter text-xl \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-col\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                href: \"/merchant\",\n                                                onMouseEnter: openMerchant,\n                                                onMouseLeave: handleMouseLeave,\n                                                className: \"merchant md:px-4 py-3 font-bold cursor-pointer hover:text-[#C43939] transition hover:scale-110 duration-400 \".concat(hoveredItem === \"merchant\" ? \"text-[#C43939]\" : \"\"),\n                                                children: \"Merchant\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/FinalHeader.tsx\",\n                                                lineNumber: 56,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            hoveredItem === \"merchant\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"rounded-t border-[#C43939] border-b-8\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/FinalHeader.tsx\",\n                                                lineNumber: 68,\n                                                columnNumber: 41\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/FinalHeader.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-col\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                href: \"/pricing\",\n                                                onMouseEnter: ()=>handleMouseEnter(\"pricing\"),\n                                                onMouseLeave: handleMouseLeave,\n                                                className: \"pricing md:px-4 py-3 cursor-pointer hover:text-[#C43939] transition hover:scale-110 duration-400 \".concat(hoveredItem === \"pricing\" ? \"text-[#C43939]\" : \"\"),\n                                                children: \"Pricing\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/FinalHeader.tsx\",\n                                                lineNumber: 73,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            hoveredItem === \"pricing\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"rounded-t border-[#C43939] border-b-8\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/FinalHeader.tsx\",\n                                                lineNumber: 85,\n                                                columnNumber: 41\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/FinalHeader.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-col\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                href: \"/about\",\n                                                onMouseEnter: ()=>handleMouseEnter(\"about\"),\n                                                onMouseLeave: handleMouseLeave,\n                                                className: \"about md:px-4 py-3 cursor-pointer hover:text-[#C43939] transition hover:scale-110 duration-400 \".concat(hoveredItem === \"about\" ? \"text-[#C43939]\" : \"\"),\n                                                children: \"About\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/FinalHeader.tsx\",\n                                                lineNumber: 90,\n                                                columnNumber: 37\n                                            }, undefined),\n                                            hoveredItem === \"about\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"rounded-t border-[#C43939] border-b-8\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/FinalHeader.tsx\",\n                                                lineNumber: 101,\n                                                columnNumber: 41\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/FinalHeader.tsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-col\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                onMouseEnter: ()=>handleMouseEnter(\"customer\"),\n                                                onMouseLeave: handleMouseLeave,\n                                                className: \"customer md:px-4 py-3 cursor-pointer hover:text-[#C43939] transition hover:scale-110 duration-400 \".concat(hoveredItem === \"customer\" ? \"text-[#C43939]\" : \"\"),\n                                                children: \"Blog\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/FinalHeader.tsx\",\n                                                lineNumber: 106,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            hoveredItem === \"customer\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"rounded-t border-[#C43939] border-b-8\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/FinalHeader.tsx\",\n                                                lineNumber: 116,\n                                                columnNumber: 41\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/FinalHeader.tsx\",\n                                        lineNumber: 105,\n                                        columnNumber: 33\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/FinalHeader.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/FinalHeader.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"download w-1/5 flex items-center max-md:w-3/5 max-md:justify-end max-md:mr-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"px-4 h-10 text-[#FCFCFC]   font-inter bg-[#C5393A] rounded-3xl font-normal text-[18px]\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex gap-2 py-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Download_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/FinalHeader.tsx\",\n                                            lineNumber: 127,\n                                            columnNumber: 66\n                                        }, undefined),\n                                        \" Download App\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/FinalHeader.tsx\",\n                                    lineNumber: 127,\n                                    columnNumber: 33\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/FinalHeader.tsx\",\n                                lineNumber: 124,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/FinalHeader.tsx\",\n                            lineNumber: 122,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/FinalHeader.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/FinalHeader.tsx\",\n                lineNumber: 38,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/FinalHeader.tsx\",\n            lineNumber: 37,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/FinalHeader.tsx\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, undefined);\n};\n_s(FinalHeader, \"WZWt6r1BsPvWzCaLuqPzvsEUoMI=\");\n_c = FinalHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FinalHeader);\nvar _c;\n$RefreshReg$(_c, \"FinalHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZpbmFsSGVhZGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ3dDO0FBQ1Q7QUFDNkI7QUFJL0I7QUFDUztBQUV0QyxNQUFNTSxjQUFjOztJQUNoQixNQUFNLENBQUNDLDJCQUEyQkMsNkJBQTZCLEdBQzNEUCwrQ0FBUUEsQ0FBQztJQUViLE1BQU0sQ0FBQ1EsYUFBYUMsZUFBZSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUUvQyxNQUFNVSxtQkFBbUIsQ0FBQ0M7UUFDdEJDO1FBQ0FILGVBQWVFO0lBQ25CO0lBRUEsTUFBTUUsbUJBQW1CO1FBQ3JCSixlQUFlO0lBQ25CO0lBRUEsTUFBTUssZUFBZTtRQUNqQkosaUJBQWlCO1FBQ2pCSCw2QkFBNkI7SUFDakM7SUFFQSxNQUFNSyxnQkFBZ0I7UUFDbEJMLDZCQUE2QjtJQUNqQztJQUVBLHFCQUNJLDhEQUFDUTtrQkFDRyw0RUFBQ0E7WUFBSUMsV0FBVTtzQkFDWCw0RUFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ1gsNEVBQUNiLGlEQUFJQTtnQ0FBQ2MsTUFBSztnQ0FBSUQsV0FBVTs7a0RBQ3JCLDhEQUFDZixrREFBS0E7d0NBQ0ZlLFdBQVU7d0NBQ1ZFLEtBQUtoQixxRUFBVUE7d0NBQ2ZpQixLQUFJOzs7Ozs7a0RBRVIsOERBQUNDO3dDQUFLSixXQUFVO2tEQUFrRTs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBTTFGLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDWCw0RUFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNYLDhEQUFDRDt3Q0FBSUMsV0FBVTs7MERBQzdCLDhEQUFDYixpREFBSUE7Z0RBQ0RjLE1BQUs7Z0RBQ0xJLGNBQWNQO2dEQUNkUSxjQUFjVDtnREFDZEcsV0FBVywrR0FFVixPQURHUixnQkFBZ0IsYUFBYSxtQkFBbUI7MERBRXZEOzs7Ozs7NENBSWtCQSxnQkFBZ0IsNEJBQ2IsOERBQUNPO2dEQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7a0RBSXZCLDhEQUFDRDt3Q0FBSUMsV0FBVTs7MERBQzdCLDhEQUFDYixpREFBSUE7Z0RBQ0RjLE1BQUs7Z0RBQ0xJLGNBQWMsSUFBTVgsaUJBQWlCO2dEQUNyQ1ksY0FBY1Q7Z0RBQ2RHLFdBQVcsb0dBRVYsT0FER1IsZ0JBQWdCLFlBQVksbUJBQW1COzBEQUV0RDs7Ozs7OzRDQUlrQkEsZ0JBQWdCLDJCQUNiLDhEQUFDTztnREFBSUMsV0FBVTs7Ozs7Ozs7Ozs7O2tEQUl2Qiw4REFBQ0Q7d0NBQUlDLFdBQVU7OzBEQUNYLDhEQUFDYixpREFBSUE7Z0RBQ0RjLE1BQUs7Z0RBQ0xJLGNBQWMsSUFBTVgsaUJBQWlCO2dEQUNyQ1ksY0FBY1Q7Z0RBQ2RHLFdBQVcsa0dBRVYsT0FER1IsZ0JBQWdCLFVBQVUsbUJBQW1COzBEQUVwRDs7Ozs7OzRDQUdBQSxnQkFBZ0IseUJBQ2IsOERBQUNPO2dEQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7a0RBSXZCLDhEQUFDRDt3Q0FBSUMsV0FBVTs7MERBQzdCLDhEQUFDSTtnREFDR0MsY0FBYyxJQUFNWCxpQkFBaUI7Z0RBQ3JDWSxjQUFjVDtnREFDZEcsV0FBVyxxR0FFVixPQURHUixnQkFBZ0IsYUFBYSxtQkFBbUI7MERBRXZEOzs7Ozs7NENBR2tCQSxnQkFBZ0IsNEJBQ2IsOERBQUNPO2dEQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FNL0IsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUVYLDRFQUFDTztnQ0FDR1AsV0FBVTswQ0FFViw0RUFBQ0Q7b0NBQUlDLFdBQVU7O3NEQUFrQiw4REFBQ1osb0ZBQVFBOzs7Ozt3Q0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjNUU7R0FsSU1DO0tBQUFBO0FBb0lOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0ZpbmFsSGVhZGVyLnRzeD85NmI2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBIZWFkZXJMb2dvIGZyb20gXCIuLi8uLi9wdWJsaWMvZmluYWxfaGVhZGVyX2xvZ28ucG5nXCI7XG5pbXBvcnQgTWVyY2hhbnREcm9wZG93biBmcm9tIFwiLi9NZXJjaGFudERyb3Bkb3duXCI7XG4vLyBpbXBvcnQgRG93bmxvYWQgZnJvbSBcIi4uLy4uL3B1YmxpYy9Eb3dubG9hZC5wbmdcIjtcbmltcG9ydCB7IHN0cmluZ2lmeSB9IGZyb20gXCJxdWVyeXN0cmluZ1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHtEb3dubG9hZH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuXG5jb25zdCBGaW5hbEhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBbaXNNZXJjaGFudERyb3Bkb3duVmlzaWJsZSwgc2V0SXNNZXJjaGFudERyb3Bkb3duVmlzaWJsZV0gPVxuICAgICAgICB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBbaG92ZXJlZEl0ZW0sIHNldEhvdmVyZWRJdGVtXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgY29uc3QgaGFuZGxlTW91c2VFbnRlciA9IChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgY2xvc2VNZXJjaGFudCgpO1xuICAgICAgICBzZXRIb3ZlcmVkSXRlbShpdGVtKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlTW91c2VMZWF2ZSA9ICgpID0+IHtcbiAgICAgICAgc2V0SG92ZXJlZEl0ZW0obnVsbCk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9wZW5NZXJjaGFudCA9ICgpID0+IHtcbiAgICAgICAgaGFuZGxlTW91c2VFbnRlcihcIm1lcmNoYW50XCIpO1xuICAgICAgICBzZXRJc01lcmNoYW50RHJvcGRvd25WaXNpYmxlKHRydWUpO1xuICAgIH07XG5cbiAgICBjb25zdCBjbG9zZU1lcmNoYW50ID0gKCkgPT4ge1xuICAgICAgICBzZXRJc01lcmNoYW50RHJvcGRvd25WaXNpYmxlKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0yNCBwLVsyMHB4XVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaC0zMCBsZWZ0LTAgdy1mdWxsIHotWzUwMDBdXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBiZy1bI0ZDRkNGQ10ganVzdGlmeS1iZXR3ZWVuIHNoYWRvdy1tZCBweS02IG1heC1tZDpqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LTEvNSBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbWF4LW1kOnctMi81IG1heC1tZDptbC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJsb2dvIGZsZXggZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTggdy04XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17SGVhZGVyTG9nb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlJld2FyZHdpc2UtbG9nb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvZ29fdGV4dCB0ZXh0LVsjQzQzOTM5XSBmb250LW1lZGl1bSBmb250LWxhdG8gdGV4dC1bMjNweF0gbXQtMVwiPlxuICAgICAgICAgICAgICAgICAgUmV3YXJkd2lzZVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50cyBmbGV4IHctMy81IGp1c3RpZnktY2VudGVyIGFsaWduLW1pZGRsZSBtYXgtbWQ6aGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZ2FwLTYgZmxleCBmb250LW1lZGl1bSBmb250LWludGVyIHRleHQteGwgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL21lcmNoYW50XCJcbiAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e29wZW5NZXJjaGFudH1cbiAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlTGVhdmV9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbWVyY2hhbnQgbWQ6cHgtNCBweS0zIGZvbnQtYm9sZCBjdXJzb3ItcG9pbnRlciBob3Zlcjp0ZXh0LVsjQzQzOTM5XSB0cmFuc2l0aW9uIGhvdmVyOnNjYWxlLTExMCBkdXJhdGlvbi00MDAgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXJlZEl0ZW0gPT09IFwibWVyY2hhbnRcIiA/IFwidGV4dC1bI0M0MzkzOV1cIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgTWVyY2hhbnRcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hvdmVyZWRJdGVtID09PSBcIm1lcmNoYW50XCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC10IGJvcmRlci1bI0M0MzkzOV0gYm9yZGVyLWItOFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvcHJpY2luZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBoYW5kbGVNb3VzZUVudGVyKFwicHJpY2luZ1wiKX1cbiAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlTGVhdmV9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHJpY2luZyBtZDpweC00IHB5LTMgY3Vyc29yLXBvaW50ZXIgaG92ZXI6dGV4dC1bI0M0MzkzOV0gdHJhbnNpdGlvbiBob3ZlcjpzY2FsZS0xMTAgZHVyYXRpb24tNDAwICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyZWRJdGVtID09PSBcInByaWNpbmdcIiA/IFwidGV4dC1bI0M0MzkzOV1cIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgUHJpY2luZ1xuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aG92ZXJlZEl0ZW0gPT09IFwicHJpY2luZ1wiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtdCBib3JkZXItWyNDNDM5MzldIGJvcmRlci1iLThcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL2Fib3V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IGhhbmRsZU1vdXNlRW50ZXIoXCJhYm91dFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlTGVhdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYWJvdXQgbWQ6cHgtNCBweS0zIGN1cnNvci1wb2ludGVyIGhvdmVyOnRleHQtWyNDNDM5MzldIHRyYW5zaXRpb24gaG92ZXI6c2NhbGUtMTEwIGR1cmF0aW9uLTQwMCAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3ZlcmVkSXRlbSA9PT0gXCJhYm91dFwiID8gXCJ0ZXh0LVsjQzQzOTM5XVwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aG92ZXJlZEl0ZW0gPT09IFwiYWJvdXRcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLXQgYm9yZGVyLVsjQzQzOTM5XSBib3JkZXItYi04XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBoYW5kbGVNb3VzZUVudGVyKFwiY3VzdG9tZXJcIil9XG4gICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVNb3VzZUxlYXZlfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGN1c3RvbWVyIG1kOnB4LTQgcHktMyBjdXJzb3ItcG9pbnRlciBob3Zlcjp0ZXh0LVsjQzQzOTM5XSB0cmFuc2l0aW9uIGhvdmVyOnNjYWxlLTExMCBkdXJhdGlvbi00MDAgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXJlZEl0ZW0gPT09IFwiY3VzdG9tZXJcIiA/IFwidGV4dC1bI0M0MzkzOV1cIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgQmxvZ1xuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hvdmVyZWRJdGVtID09PSBcImN1c3RvbWVyXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC10IGJvcmRlci1bI0M0MzkzOV0gYm9yZGVyLWItOFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3dubG9hZCB3LTEvNSBmbGV4IGl0ZW1zLWNlbnRlciBtYXgtbWQ6dy0zLzUgbWF4LW1kOmp1c3RpZnktZW5kIG1heC1tZDptci00XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgaC0xMCB0ZXh0LVsjRkNGQ0ZDXSAgIGZvbnQtaW50ZXIgYmctWyNDNTM5M0FdIHJvdW5kZWQtM3hsIGZvbnQtbm9ybWFsIHRleHQtWzE4cHhdXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yIHB5LTJcIj48RG93bmxvYWQvPiBEb3dubG9hZCBBcHA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsvKntpc01lcmNoYW50RHJvcGRvd25WaXNpYmxlICYmICgqL31cbiAgICAgICAgICAgICAgICB7LyogICAgPE1lcmNoYW50RHJvcGRvd24qL31cbiAgICAgICAgICAgICAgICB7LyogICAgICAgIHNldElzTWVyY2hhbnREcm9wZG93blZpc2libGU9e3NldElzTWVyY2hhbnREcm9wZG93blZpc2libGV9Ki99XG4gICAgICAgICAgICAgICAgey8qICAgIC8+Ki99XG4gICAgICAgICAgICAgICAgey8qKX0qL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmluYWxIZWFkZXI7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIkhlYWRlckxvZ28iLCJMaW5rIiwiRG93bmxvYWQiLCJGaW5hbEhlYWRlciIsImlzTWVyY2hhbnREcm9wZG93blZpc2libGUiLCJzZXRJc01lcmNoYW50RHJvcGRvd25WaXNpYmxlIiwiaG92ZXJlZEl0ZW0iLCJzZXRIb3ZlcmVkSXRlbSIsImhhbmRsZU1vdXNlRW50ZXIiLCJpdGVtIiwiY2xvc2VNZXJjaGFudCIsImhhbmRsZU1vdXNlTGVhdmUiLCJvcGVuTWVyY2hhbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJocmVmIiwic3JjIiwiYWx0Iiwic3BhbiIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FinalHeader.tsx\n"));

/***/ })

});