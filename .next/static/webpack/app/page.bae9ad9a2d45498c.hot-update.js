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

/***/ "(app-pages-browser)/./src/components/Steps.tsx":
/*!**********************************!*\
  !*** ./src/components/Steps.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Steps = (param)=>{\n    let { stepList } = param;\n    _s();\n    const [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            const sections = document.querySelectorAll(\".step-section\");\n            sections.forEach((section, index)=>{\n                const rect = section.getBoundingClientRect();\n                const windowHeight = window.innerHeight;\n                if (rect.top < windowHeight * 0.5 && rect.bottom >= 0) {\n                    setActiveIndex(index);\n                }\n            });\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center space-y-10 bg-white p-10\",\n        children: stepList.map((step, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full max-w-5xl step-section \".concat(activeIndex === index ? \"opacity-100\" : \"opacity-60\"),\n                style: {\n                    transition: \"opacity 0.5s\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col md:flex-row items-center gap-4 md:gap-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col items-center md:items-start\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex mt-14 \".concat(activeIndex === index ? \"mr-14\" : \"mr-5\"),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: \"mr-4 text-2xl font-semibold text-red-700 mt-[6px]\",\n                                            children: \"Step\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/Steps.tsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            className: \"h-12 w-12 text-[#bd1e59]\",\n                                            src: activeIndex === index ? step.img[1] : step.img[0],\n                                            alt: \"step \".concat(index + 1)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/Steps.tsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/Steps.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 29\n                                }, undefined),\n                                index < 3 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"hidden md:block h-[180px] w-px bg-[#C5393A] mr-5 ml-[75px] mt-5\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/Steps.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 33\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/Steps.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"overflow-hidden rounded-full \".concat(activeIndex === index ? \"w-[200px] h-[200px]\" : \"w-[160px] h-[160px]\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: step.imgMain,\n                                alt: \"step \".concat(index + 1, \" image\"),\n                                width: 160,\n                                height: 160,\n                                className: \"object-cover w-full h-full\"\n                            }, void 0, false, {\n                                fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/Steps.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/Steps.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-1 min-w-0 mt-7 ml-9 md:ml-0 md:mt-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"font-semibold text-gray-900 \".concat(activeIndex === index ? \"text-3xl\" : \"text-2xl\"),\n                                    children: step.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/Steps.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"mt-1 text-gray-600 \".concat(activeIndex === index ? \"text-xl\" : \"text-lg\"),\n                                    dangerouslySetInnerHTML: {\n                                        __html: step.text\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/Steps.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/Steps.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/Steps.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 21\n                }, undefined)\n            }, index, false, {\n                fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/Steps.tsx\",\n                lineNumber: 40,\n                columnNumber: 17\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/Steps.tsx\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Steps, \"WP78EBo/70/Le5sb2eZLJ7Sgf6A=\");\n_c = Steps;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Steps);\nvar _c;\n$RefreshReg$(_c, \"Steps\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1N0ZXBzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ21EO0FBQ0M7QUFhcEQsTUFBTUksUUFBOEI7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBQzdDLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHTCwrQ0FBUUEsQ0FBZ0I7SUFFOURELGdEQUFTQSxDQUFDO1FBQ04sTUFBTU8sZUFBZTtZQUNqQixNQUFNQyxXQUFXQyxTQUFTQyxnQkFBZ0IsQ0FBYztZQUN4REYsU0FBU0csT0FBTyxDQUFDLENBQUNDLFNBQVNDO2dCQUN2QixNQUFNQyxPQUFPRixRQUFRRyxxQkFBcUI7Z0JBQzFDLE1BQU1DLGVBQWVDLE9BQU9DLFdBQVc7Z0JBQ3ZDLElBQUlKLEtBQUtLLEdBQUcsR0FBR0gsZUFBZSxPQUFPRixLQUFLTSxNQUFNLElBQUksR0FBRztvQkFDbkRkLGVBQWVPO2dCQUNuQjtZQUNKO1FBQ0o7UUFFQUksT0FBT0ksZ0JBQWdCLENBQUMsVUFBVWQ7UUFDbEMsT0FBTztZQUNIVSxPQUFPSyxtQkFBbUIsQ0FBQyxVQUFVZjtRQUN6QztJQUNKLEdBQUcsRUFBRTtJQUVMLHFCQUNJLDhEQUFDZ0I7UUFBSUMsV0FBVTtrQkFDVnBCLFNBQVNxQixHQUFHLENBQUMsQ0FBQ0MsTUFBTWIsc0JBQ2pCLDhEQUFDVTtnQkFFR0MsV0FBVyxpQ0FBc0YsT0FBckRuQixnQkFBZ0JRLFFBQVEsZ0JBQWdCO2dCQUNwRmMsT0FBTztvQkFBRUMsWUFBWTtnQkFBZTswQkFFcEMsNEVBQUNMO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNYLDhEQUFDRDtvQ0FBSUMsV0FBVyxjQUF1RCxPQUF6Q25CLGdCQUFnQlEsUUFBUSxVQUFVOztzREFDNUQsOERBQUNnQjs0Q0FBR0wsV0FBVTtzREFBb0Q7Ozs7OztzREFDbEUsOERBQUN0QixrREFBS0E7NENBQ0ZzQixXQUFVOzRDQUNWTSxLQUFLekIsZ0JBQWdCUSxRQUFRYSxLQUFLSyxHQUFHLENBQUMsRUFBRSxHQUFHTCxLQUFLSyxHQUFHLENBQUMsRUFBRTs0Q0FDdERDLEtBQUssUUFBa0IsT0FBVm5CLFFBQVE7Ozs7Ozs7Ozs7OztnQ0FHNUJBLFFBQVEsbUJBQ0wsOERBQUNVO29DQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7c0NBR3ZCLDhEQUFDRDs0QkFBSUMsV0FBVyxnQ0FBc0csT0FBdEVuQixnQkFBZ0JRLFFBQVEsd0JBQXdCO3NDQUM1Riw0RUFBQ1gsa0RBQUtBO2dDQUNGNEIsS0FBS0osS0FBS08sT0FBTztnQ0FDakJELEtBQUssUUFBa0IsT0FBVm5CLFFBQVEsR0FBRTtnQ0FDdkJxQixPQUFPO2dDQUNQQyxRQUFRO2dDQUNSWCxXQUFVOzs7Ozs7Ozs7OztzQ0FHbEIsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ1k7b0NBQUdaLFdBQVcsK0JBQStFLE9BQWhEbkIsZ0JBQWdCUSxRQUFRLGFBQWE7OENBQWVhLEtBQUtXLEtBQUs7Ozs7Ozs4Q0FDNUcsOERBQUNDO29DQUFFZCxXQUFXLHNCQUFvRSxPQUE5Q25CLGdCQUFnQlEsUUFBUSxZQUFZO29DQUFhMEIseUJBQXlCO3dDQUFFQyxRQUFRZCxLQUFLZSxJQUFJO29DQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUE3QnJJNUI7Ozs7Ozs7Ozs7QUFvQ3pCO0dBN0RNVjtLQUFBQTtBQStETiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TdGVwcy50c3g/ODhhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlLCB7IFN0YXRpY0ltYWdlRGF0YSB9IGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmludGVyZmFjZSBTdGVwIHtcbiAgICBpbWc6IFN0YXRpY0ltYWdlRGF0YVtdO1xuICAgIGltZ01haW46IFN0YXRpY0ltYWdlRGF0YTtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIHRleHQ6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFN0ZXBzUHJvcHMge1xuICAgIHN0ZXBMaXN0OiBTdGVwW107XG59XG5cbmNvbnN0IFN0ZXBzOiBSZWFjdC5GQzxTdGVwc1Byb3BzPiA9ICh7IHN0ZXBMaXN0IH0pID0+IHtcbiAgICBjb25zdCBbYWN0aXZlSW5kZXgsIHNldEFjdGl2ZUluZGV4XSA9IHVzZVN0YXRlPG51bWJlciB8IG51bGw+KG51bGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignLnN0ZXAtc2VjdGlvbicpO1xuICAgICAgICAgICAgc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWN0ID0gc2VjdGlvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICAgICAgaWYgKHJlY3QudG9wIDwgd2luZG93SGVpZ2h0ICogMC41ICYmIHJlY3QuYm90dG9tID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlSW5kZXgoaW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gICAgICAgIH07XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzcGFjZS15LTEwIGJnLXdoaXRlIHAtMTBcIj5cbiAgICAgICAgICAgIHtzdGVwTGlzdC5tYXAoKHN0ZXAsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgbWF4LXctNXhsIHN0ZXAtc2VjdGlvbiAke2FjdGl2ZUluZGV4ID09PSBpbmRleCA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS02MCd9YH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNpdGlvbjogJ29wYWNpdHkgMC41cycgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBpdGVtcy1jZW50ZXIgZ2FwLTQgbWQ6Z2FwLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgbWQ6aXRlbXMtc3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggbXQtMTQgJHthY3RpdmVJbmRleCA9PT0gaW5kZXggPyAnbXItMTQnIDogJ21yLTUnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibXItNCB0ZXh0LTJ4bCBmb250LXNlbWlib2xkIHRleHQtcmVkLTcwMCBtdC1bNnB4XVwiPlN0ZXA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTIgdy0xMiB0ZXh0LVsjYmQxZTU5XVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2FjdGl2ZUluZGV4ID09PSBpbmRleCA/IHN0ZXAuaW1nWzFdIDogc3RlcC5pbWdbMF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2BzdGVwICR7aW5kZXggKyAxfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2luZGV4IDwgMyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmJsb2NrIGgtWzE4MHB4XSB3LXB4IGJnLVsjQzUzOTNBXSBtci01IG1sLVs3NXB4XSBtdC01XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLWZ1bGwgJHthY3RpdmVJbmRleCA9PT0gaW5kZXggPyAndy1bMjAwcHhdIGgtWzIwMHB4XScgOiAndy1bMTYwcHhdIGgtWzE2MHB4XSd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17c3RlcC5pbWdNYWlufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2BzdGVwICR7aW5kZXggKyAxfSBpbWFnZWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxNjB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MTYwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgdy1mdWxsIGgtZnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgbWluLXctMCBtdC03IG1sLTkgbWQ6bWwtMCBtZDptdC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17YGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMCAke2FjdGl2ZUluZGV4ID09PSBpbmRleCA/ICd0ZXh0LTN4bCcgOiAndGV4dC0yeGwnfWB9PntzdGVwLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgbXQtMSB0ZXh0LWdyYXktNjAwICR7YWN0aXZlSW5kZXggPT09IGluZGV4ID8gJ3RleHQteGwnIDogJ3RleHQtbGcnfWB9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc3RlcC50ZXh0IH19PjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RlcHM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiU3RlcHMiLCJzdGVwTGlzdCIsImFjdGl2ZUluZGV4Iiwic2V0QWN0aXZlSW5kZXgiLCJoYW5kbGVTY3JvbGwiLCJzZWN0aW9ucyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJzZWN0aW9uIiwiaW5kZXgiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2luZG93SGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJ0b3AiLCJib3R0b20iLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInN0ZXAiLCJzdHlsZSIsInRyYW5zaXRpb24iLCJoMSIsInNyYyIsImltZyIsImFsdCIsImltZ01haW4iLCJ3aWR0aCIsImhlaWdodCIsImgzIiwidGl0bGUiLCJwIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Steps.tsx\n"));

/***/ })

});