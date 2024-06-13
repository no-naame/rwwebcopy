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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Steps = (param)=>{\n    let { stepList } = param;\n    _s();\n    const [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            const sections = document.querySelectorAll(\".step-section\");\n            sections.forEach((section, index)=>{\n                const rect = section.getBoundingClientRect();\n                const windowHeight = window.innerHeight;\n                if (rect.top < windowHeight * 0.5 && rect.bottom >= 0) {\n                    setActiveIndex(index);\n                }\n            });\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center space-y-10 bg-white p-10\",\n        children: stepList.map((step, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full max-w-3xl step-section \".concat(activeIndex === index ? \"opacity-100\" : \"opacity-60\"),\n                style: {\n                    transition: \"opacity 0.5s\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col md:flex-row items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col items-center mr-0 md:mr-0 md:items-start\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex mt-14 \".concat(activeIndex === index ? \"mr-14\" : \"mr-5\", \" md:mr-0\"),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: \"mr-4 text-2xl font-semibold text-red-700 mt-[6px]\",\n                                            children: \"Step\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/Steps.tsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            className: \"h-12 w-12 text-[#bd1e59]\",\n                                            src: activeIndex === index ? step.img[1] : step.img[0],\n                                            alt: \"step \".concat(index + 1)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/Steps.tsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/Steps.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 29\n                                }, undefined),\n                                index < 3 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"hidden md:block h-[180px] w-px bg-[#C5393A] mr-5 ml-[75px] mt-5\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/Steps.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 33\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/Steps.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"overflow-hidden rounded-full \".concat(activeIndex === index ? \"w-[200px] h-[200px]\" : \"w-[160px] h-[160px]\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: step.imgMain,\n                                alt: \"step \".concat(index + 1, \" image\"),\n                                width: 160,\n                                height: 160,\n                                className: \"object-cover w-full h-full\"\n                            }, void 0, false, {\n                                fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/Steps.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/Steps.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-1 min-w-0 mt-7 ml-9 md:ml-0 md:mt-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"font-semibold text-gray-900 \".concat(activeIndex === index ? \"text-3xl\" : \"text-2xl\"),\n                                    children: step.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/Steps.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"mt-1 text-gray-600 \".concat(activeIndex === index ? \"text-xl\" : \"text-lg\"),\n                                    dangerouslySetInnerHTML: {\n                                        __html: step.text\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/Steps.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/Steps.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/Steps.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 21\n                }, undefined)\n            }, index, false, {\n                fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/Steps.tsx\",\n                lineNumber: 40,\n                columnNumber: 17\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/noname/Downloads/rwwebcopy/src/components/Steps.tsx\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Steps, \"WP78EBo/70/Le5sb2eZLJ7Sgf6A=\");\n_c = Steps;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Steps);\nvar _c;\n$RefreshReg$(_c, \"Steps\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1N0ZXBzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ21EO0FBQ0M7QUFhcEQsTUFBTUksUUFBOEI7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBQzdDLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHTCwrQ0FBUUEsQ0FBZ0I7SUFFOURELGdEQUFTQSxDQUFDO1FBQ04sTUFBTU8sZUFBZTtZQUNqQixNQUFNQyxXQUFXQyxTQUFTQyxnQkFBZ0IsQ0FBYztZQUN4REYsU0FBU0csT0FBTyxDQUFDLENBQUNDLFNBQVNDO2dCQUN2QixNQUFNQyxPQUFPRixRQUFRRyxxQkFBcUI7Z0JBQzFDLE1BQU1DLGVBQWVDLE9BQU9DLFdBQVc7Z0JBQ3ZDLElBQUlKLEtBQUtLLEdBQUcsR0FBR0gsZUFBZSxPQUFPRixLQUFLTSxNQUFNLElBQUksR0FBRztvQkFDbkRkLGVBQWVPO2dCQUNuQjtZQUNKO1FBQ0o7UUFFQUksT0FBT0ksZ0JBQWdCLENBQUMsVUFBVWQ7UUFDbEMsT0FBTztZQUNIVSxPQUFPSyxtQkFBbUIsQ0FBQyxVQUFVZjtRQUN6QztJQUNKLEdBQUcsRUFBRTtJQUVMLHFCQUNJLDhEQUFDZ0I7UUFBSUMsV0FBVTtrQkFDVnBCLFNBQVNxQixHQUFHLENBQUMsQ0FBQ0MsTUFBTWIsc0JBQ2pCLDhEQUFDVTtnQkFFR0MsV0FBVyxpQ0FBc0YsT0FBckRuQixnQkFBZ0JRLFFBQVEsZ0JBQWdCO2dCQUNwRmMsT0FBTztvQkFBRUMsWUFBWTtnQkFBZTswQkFFcEMsNEVBQUNMO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNYLDhEQUFDRDtvQ0FBSUMsV0FBVyxjQUF1RCxPQUF6Q25CLGdCQUFnQlEsUUFBUSxVQUFVLFFBQU87O3NEQUNuRSw4REFBQ2dCOzRDQUFHTCxXQUFZO3NEQUFvRDs7Ozs7O3NEQUNwRSw4REFBQ3RCLGtEQUFLQTs0Q0FDRnNCLFdBQVk7NENBQ1pNLEtBQUt6QixnQkFBZ0JRLFFBQVFhLEtBQUtLLEdBQUcsQ0FBQyxFQUFFLEdBQUdMLEtBQUtLLEdBQUcsQ0FBQyxFQUFFOzRDQUN0REMsS0FBSyxRQUFrQixPQUFWbkIsUUFBUTs7Ozs7Ozs7Ozs7O2dDQUc1QkEsUUFBUSxtQkFDTCw4REFBQ1U7b0NBQUlDLFdBQVU7Ozs7Ozs7Ozs7OztzQ0FHdkIsOERBQUNEOzRCQUFJQyxXQUFXLGdDQUFzRyxPQUF0RW5CLGdCQUFnQlEsUUFBUSx3QkFBd0I7c0NBQzVGLDRFQUFDWCxrREFBS0E7Z0NBQ0Y0QixLQUFLSixLQUFLTyxPQUFPO2dDQUNqQkQsS0FBSyxRQUFrQixPQUFWbkIsUUFBUSxHQUFFO2dDQUN2QnFCLE9BQU87Z0NBQ1BDLFFBQVE7Z0NBQ1JYLFdBQVU7Ozs7Ozs7Ozs7O3NDQUdsQiw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNYLDhEQUFDWTtvQ0FBR1osV0FBVywrQkFBK0UsT0FBaERuQixnQkFBZ0JRLFFBQVEsYUFBYTs4Q0FBZWEsS0FBS1csS0FBSzs7Ozs7OzhDQUM1Ryw4REFBQ0M7b0NBQUVkLFdBQVcsc0JBQW9FLE9BQTlDbkIsZ0JBQWdCUSxRQUFRLFlBQVk7b0NBQWEwQix5QkFBeUI7d0NBQUVDLFFBQVFkLEtBQUtlLElBQUk7b0NBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQTdCckk1Qjs7Ozs7Ozs7OztBQW9DekI7R0E3RE1WO0tBQUFBO0FBK0ROLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1N0ZXBzLnRzeD84OGFiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UsIHsgU3RhdGljSW1hZ2VEYXRhIH0gZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuaW50ZXJmYWNlIFN0ZXAge1xuICAgIGltZzogU3RhdGljSW1hZ2VEYXRhW107XG4gICAgaW1nTWFpbjogU3RhdGljSW1hZ2VEYXRhO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgdGV4dDogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgU3RlcHNQcm9wcyB7XG4gICAgc3RlcExpc3Q6IFN0ZXBbXTtcbn1cblxuY29uc3QgU3RlcHM6IFJlYWN0LkZDPFN0ZXBzUHJvcHM+ID0gKHsgc3RlcExpc3QgfSkgPT4ge1xuICAgIGNvbnN0IFthY3RpdmVJbmRleCwgc2V0QWN0aXZlSW5kZXhdID0gdXNlU3RhdGU8bnVtYmVyIHwgbnVsbD4obnVsbCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCcuc3RlcC1zZWN0aW9uJyk7XG4gICAgICAgICAgICBzZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBzZWN0aW9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgICAgICBpZiAocmVjdC50b3AgPCB3aW5kb3dIZWlnaHQgKiAwLjUgJiYgcmVjdC5ib3R0b20gPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVJbmRleChpbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNwYWNlLXktMTAgYmctd2hpdGUgcC0xMFwiPlxuICAgICAgICAgICAge3N0ZXBMaXN0Lm1hcCgoc3RlcCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctZnVsbCBtYXgtdy0zeGwgc3RlcC1zZWN0aW9uICR7YWN0aXZlSW5kZXggPT09IGluZGV4ID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTYwJ31gfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB0cmFuc2l0aW9uOiAnb3BhY2l0eSAwLjVzJyB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBtci0wIG1kOm1yLTAgbWQ6aXRlbXMtc3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggbXQtMTQgJHthY3RpdmVJbmRleCA9PT0gaW5kZXggPyAnbXItMTQnIDogJ21yLTUnfSBtZDptci0wYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2Btci00IHRleHQtMnhsIGZvbnQtc2VtaWJvbGQgdGV4dC1yZWQtNzAwIG10LVs2cHhdYH0+U3RlcDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaC0xMiB3LTEyIHRleHQtWyNiZDFlNTldYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YWN0aXZlSW5kZXggPT09IGluZGV4ID8gc3RlcC5pbWdbMV0gOiBzdGVwLmltZ1swXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YHN0ZXAgJHtpbmRleCArIDF9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW5kZXggPCAzICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6YmxvY2sgaC1bMTgwcHhdIHctcHggYmctWyNDNTM5M0FdIG1yLTUgbWwtWzc1cHhdIG10LTVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtZnVsbCAke2FjdGl2ZUluZGV4ID09PSBpbmRleCA/ICd3LVsyMDBweF0gaC1bMjAwcHhdJyA6ICd3LVsxNjBweF0gaC1bMTYwcHhdJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtzdGVwLmltZ01haW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YHN0ZXAgJHtpbmRleCArIDF9IGltYWdlYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezE2MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxNjB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciB3LWZ1bGwgaC1mdWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBtaW4tdy0wIG10LTcgbWwtOSBtZDptbC0wIG1kOm10LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwICR7YWN0aXZlSW5kZXggPT09IGluZGV4ID8gJ3RleHQtM3hsJyA6ICd0ZXh0LTJ4bCd9YH0+e3N0ZXAudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2BtdC0xIHRleHQtZ3JheS02MDAgJHthY3RpdmVJbmRleCA9PT0gaW5kZXggPyAndGV4dC14bCcgOiAndGV4dC1sZyd9YH0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBzdGVwLnRleHQgfX0+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdGVwcztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJTdGVwcyIsInN0ZXBMaXN0IiwiYWN0aXZlSW5kZXgiLCJzZXRBY3RpdmVJbmRleCIsImhhbmRsZVNjcm9sbCIsInNlY3Rpb25zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInNlY3Rpb24iLCJpbmRleCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsInRvcCIsImJvdHRvbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwic3RlcCIsInN0eWxlIiwidHJhbnNpdGlvbiIsImgxIiwic3JjIiwiaW1nIiwiYWx0IiwiaW1nTWFpbiIsIndpZHRoIiwiaGVpZ2h0IiwiaDMiLCJ0aXRsZSIsInAiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Steps.tsx\n"));

/***/ })

});