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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Steps = (param)=>{\n    let { stepList } = param;\n    _s();\n    const [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            const sections = document.querySelectorAll(\".step-section\");\n            sections.forEach((section, index)=>{\n                const rect = section.getBoundingClientRect();\n                const windowHeight = window.innerHeight;\n                if (rect.top < windowHeight && rect.bottom >= 0) {\n                    setActiveIndex(index);\n                }\n            });\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center space-y-10 bg-white p-10\",\n        children: stepList.map((step, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full max-w-3xl step-section \".concat(activeIndex === index ? \"opacity-100\" : \"opacity-60\"),\n                style: {\n                    transition: \"opacity 0.5s\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col items-center mr-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex mt-14 mr-5\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: \"mr-4 text-2xl font-semibold text-red-700 mt-[6px]\",\n                                            children: \"Step\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/Steps.tsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            className: \"h-12 w-12 text-[#bd1e59]\",\n                                            src: step.img,\n                                            alt: \"step \".concat(index + 1)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/Steps.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/Steps.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 29\n                                }, undefined),\n                                index < 3 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"h-[180px] w-px bg-[#C5393A] mr-5 ml-[170px] mt-5\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/Steps.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 43\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/Steps.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-[160px] h-[160px] overflow-hidden rounded-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: step.imgMain,\n                                alt: \"step \".concat(index + 1, \" image\"),\n                                width: 160,\n                                height: 160,\n                                className: \"object-cover w-full h-full\"\n                            }, void 0, false, {\n                                fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/Steps.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/Steps.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-1 min-w-0 mt-7 ml-9\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-2xl font-semibold text-gray-900\",\n                                    children: step.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/Steps.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"mt-1 text-lg text-gray-600\",\n                                    dangerouslySetInnerHTML: {\n                                        __html: step.text\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/Steps.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/Steps.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/Steps.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 21\n                }, undefined)\n            }, index, false, {\n                fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/Steps.tsx\",\n                lineNumber: 48,\n                columnNumber: 17\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/Steps.tsx\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Steps, \"WP78EBo/70/Le5sb2eZLJ7Sgf6A=\");\n_c = Steps;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Steps);\nvar _c;\n$RefreshReg$(_c, \"Steps\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1N0ZXBzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ21EO0FBQ0Q7QUFxQmxELE1BQU1JLFFBQThCO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUM3QyxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0wsK0NBQVFBLENBQWdCO0lBRTlERCxnREFBU0EsQ0FBQztRQUNOLE1BQU1PLGVBQWU7WUFDakIsTUFBTUMsV0FBV0MsU0FBU0MsZ0JBQWdCLENBQUM7WUFDM0NGLFNBQVNHLE9BQU8sQ0FBQyxDQUFDQyxTQUFTQztnQkFDdkIsTUFBTUMsT0FBT0YsUUFBUUcscUJBQXFCO2dCQUMxQyxNQUFNQyxlQUFlQyxPQUFPQyxXQUFXO2dCQUN2QyxJQUFJSixLQUFLSyxHQUFHLEdBQUdILGdCQUFnQkYsS0FBS00sTUFBTSxJQUFJLEdBQUc7b0JBQzdDZCxlQUFlTztnQkFDbkI7WUFDSjtRQUNKO1FBRUFJLE9BQU9JLGdCQUFnQixDQUFDLFVBQVVkO1FBQ2xDLE9BQU87WUFDSFUsT0FBT0ssbUJBQW1CLENBQUMsVUFBVWY7UUFDekM7SUFDSixHQUFHLEVBQUU7SUFFTCxxQkFDSSw4REFBQ2dCO1FBQUlDLFdBQVU7a0JBQ1ZwQixTQUFTcUIsR0FBRyxDQUFDLENBQUNDLE1BQU1iLHNCQUNqQiw4REFBQ1U7Z0JBQWdCQyxXQUFXLGlDQUFzRixPQUFyRG5CLGdCQUFnQlEsUUFBUSxnQkFBZ0I7Z0JBQWdCYyxPQUFPO29CQUFFQyxZQUFZO2dCQUFlOzBCQUNySiw0RUFBQ0w7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ1gsOERBQUNEO29DQUFJQyxXQUFVOztzREFDWCw4REFBQ0s7NENBQUdMLFdBQVU7c0RBQW9EOzs7Ozs7c0RBQ2xFLDhEQUFDdEIsa0RBQUtBOzRDQUFDc0IsV0FBVTs0Q0FBMkJNLEtBQUtKLEtBQUtLLEdBQUc7NENBQUVDLEtBQUssUUFBa0IsT0FBVm5CLFFBQVE7Ozs7Ozs7Ozs7OztnQ0FFbkZBLFFBQVEsbUJBQUssOERBQUNVO29DQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7c0NBRWpDLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDWCw0RUFBQ3RCLGtEQUFLQTtnQ0FDRjRCLEtBQUtKLEtBQUtPLE9BQU87Z0NBQ2pCRCxLQUFLLFFBQWtCLE9BQVZuQixRQUFRLEdBQUU7Z0NBQ3ZCcUIsT0FBTztnQ0FDUEMsUUFBUTtnQ0FDUlgsV0FBVTs7Ozs7Ozs7Ozs7c0NBR2xCLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ1gsOERBQUNZO29DQUFHWixXQUFVOzhDQUF3Q0UsS0FBS1csS0FBSzs7Ozs7OzhDQUNoRSw4REFBQ0M7b0NBQUVkLFdBQVU7b0NBQTZCZSx5QkFBeUI7d0NBQUVDLFFBQVFkLEtBQUtlLElBQUk7b0NBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQXBCekY1Qjs7Ozs7Ozs7OztBQTJCMUI7R0FuRE1WO0tBQUFBO0FBcUROLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1N0ZXBzLnRzeD84OGFiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSwge1N0YXRpY0ltYWdlRGF0YX0gZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBTdGVwb25lIGZyb20gXCIuLi8uLi9wdWJsaWMvb25lLnBuZ1wiO1xuaW1wb3J0IHN0ZXB0d28gZnJvbSBcIi4uLy4uL3B1YmxpYy90d28ucG5nXCI7XG5pbXBvcnQgc3RlcHRocmVlIGZyb20gXCIuLi8uLi9wdWJsaWMvdGhyZWUucG5nXCI7XG5pbXBvcnQgc3RlcGZvdXIgZnJvbSBcIi4uLy4uL3B1YmxpYy9mb3VyLnBuZ1wiO1xuaW1wb3J0IGltYWdlb25lIGZyb20gXCIuLi8uLi9wdWJsaWMvU3RlcE9uZU1haW4ucG5nXCI7XG5pbXBvcnQgaW1hZ2V0d28gZnJvbSBcIi4uLy4uL3B1YmxpYy9TdGVwVHdvTWFpbi5wbmdcIjtcbmltcG9ydCBpbWFnZXRocmVlIGZyb20gXCIuLi8uLi9wdWJsaWMvU3RlcFRocmVlTWFpbi5wbmdcIjtcbmltcG9ydCBpbWFnZWZvdXIgZnJvbSBcIi4uLy4uL3B1YmxpYy9TdGVwRm91ck1haW4uanBlZ1wiO1xuXG5pbnRlcmZhY2UgU3RlcCB7XG4gICAgaW1nOiBTdGF0aWNJbWFnZURhdGE7XG4gICAgaW1nTWFpbjogU3RhdGljSW1hZ2VEYXRhO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgdGV4dDogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgU3RlcHNQcm9wcyB7XG4gICAgc3RlcExpc3Q6IFN0ZXBbXTtcbn1cblxuY29uc3QgU3RlcHM6IFJlYWN0LkZDPFN0ZXBzUHJvcHM+ID0gKHsgc3RlcExpc3QgfSkgPT4ge1xuICAgIGNvbnN0IFthY3RpdmVJbmRleCwgc2V0QWN0aXZlSW5kZXhdID0gdXNlU3RhdGU8bnVtYmVyIHwgbnVsbD4obnVsbCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdGVwLXNlY3Rpb24nKTtcbiAgICAgICAgICAgIHNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVjdCA9IHNlY3Rpb24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICAgICAgICAgIGlmIChyZWN0LnRvcCA8IHdpbmRvd0hlaWdodCAmJiByZWN0LmJvdHRvbSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZUluZGV4KGluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuICAgICAgICB9O1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc3BhY2UteS0xMCBiZy13aGl0ZSBwLTEwXCI+XG4gICAgICAgICAgICB7c3RlcExpc3QubWFwKChzdGVwLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtgdy1mdWxsIG1heC13LTN4bCBzdGVwLXNlY3Rpb24gJHthY3RpdmVJbmRleCA9PT0gaW5kZXggPyAnb3BhY2l0eS0xMDAnIDogJ29wYWNpdHktNjAnfWB9IHN0eWxlPXt7IHRyYW5zaXRpb246ICdvcGFjaXR5IDAuNXMnIH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgbXItNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtdC0xNCBtci01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtci00IHRleHQtMnhsIGZvbnQtc2VtaWJvbGQgdGV4dC1yZWQtNzAwIG10LVs2cHhdXCI+U3RlcDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJoLTEyIHctMTIgdGV4dC1bI2JkMWU1OV1cIiBzcmM9e3N0ZXAuaW1nfSBhbHQ9e2BzdGVwICR7aW5kZXggKyAxfWB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2luZGV4IDwgMyAmJiA8ZGl2IGNsYXNzTmFtZT1cImgtWzE4MHB4XSB3LXB4IGJnLVsjQzUzOTNBXSBtci01IG1sLVsxNzBweF0gbXQtNVwiIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzE2MHB4XSBoLVsxNjBweF0gb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3N0ZXAuaW1nTWFpbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtgc3RlcCAke2luZGV4ICsgMX0gaW1hZ2VgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTYwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezE2MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIHctZnVsbCBoLWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIG1pbi13LTAgbXQtNyBtbC05XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMFwiPntzdGVwLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMSB0ZXh0LWxnIHRleHQtZ3JheS02MDBcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHN0ZXAudGV4dCB9fT48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0ZXBzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIlN0ZXBzIiwic3RlcExpc3QiLCJhY3RpdmVJbmRleCIsInNldEFjdGl2ZUluZGV4IiwiaGFuZGxlU2Nyb2xsIiwic2VjdGlvbnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwic2VjdGlvbiIsImluZGV4IiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpbmRvd0hlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwidG9wIiwiYm90dG9tIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJzdGVwIiwic3R5bGUiLCJ0cmFuc2l0aW9uIiwiaDEiLCJzcmMiLCJpbWciLCJhbHQiLCJpbWdNYWluIiwid2lkdGgiLCJoZWlnaHQiLCJoMyIsInRpdGxlIiwicCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Steps.tsx\n"));

/***/ })

});