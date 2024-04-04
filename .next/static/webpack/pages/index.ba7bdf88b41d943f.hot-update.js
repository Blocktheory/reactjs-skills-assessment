"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Products.tsx":
/*!*************************************!*\
  !*** ./src/components/Products.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_FaFilter_react_icons_fa6__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=FaFilter!=!react-icons/fa6 */ \"__barrel_optimize__?names=FaFilter!=!./node_modules/react-icons/fa6/index.mjs\");\n/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductCard */ \"./src/components/ProductCard.tsx\");\n/* harmony import */ var _Categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Categories */ \"./src/components/Categories.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Products = ()=>{\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [categorySelected, setCategorySelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [openFilter, setOpenFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        try {\n            setLoading(true);\n            let url = \"https://fakestoreapi.com/products\";\n            if (categorySelected) url += \"/category/\" + categorySelected;\n            fetch(url).then((res)=>res.json()).then((data)=>{\n                setProducts(data);\n                setLoading(false);\n            });\n        } catch (error) {\n            console.log(error);\n            setLoading(false);\n        }\n    }, [\n        categorySelected\n    ]);\n    console.log(categorySelected);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-[32px] font-semibold text-center\",\n                children: \"Our Products\"\n            }, void 0, false, {\n                fileName: \"/Users/poojaagrawal/www/reactjs-skills-assessment/src/components/Products.tsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center my-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>setOpenFilter(true),\n                    className: \"bg-black px-2 py-1 flex items-center gap-1 text-white text-sm mt-6 mb-16\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaFilter_react_icons_fa6__WEBPACK_IMPORTED_MODULE_4__.FaFilter, {}, void 0, false, {\n                            fileName: \"/Users/poojaagrawal/www/reactjs-skills-assessment/src/components/Products.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Filter\"\n                        }, void 0, false, {\n                            fileName: \"/Users/poojaagrawal/www/reactjs-skills-assessment/src/components/Products.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/poojaagrawal/www/reactjs-skills-assessment/src/components/Products.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/poojaagrawal/www/reactjs-skills-assessment/src/components/Products.tsx\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, undefined),\n            openFilter ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Categories__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                setOpenFilter: setOpenFilter,\n                categorySelected: categorySelected,\n                setCategorySelected: setCategorySelected\n            }, void 0, false, {\n                fileName: \"/Users/poojaagrawal/www/reactjs-skills-assessment/src/components/Products.tsx\",\n                lineNumber: 51,\n                columnNumber: 27\n            }, undefined) : null,\n            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    \"aria-hidden\": \"true\",\n                    className: \"w-8 h-8 text-gray-200 animate-spin fill-gray-800\",\n                    viewBox: \"0 0 100 101\",\n                    fill: \"none\",\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            d: \"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z\",\n                            fill: \"currentColor\"\n                        }, void 0, false, {\n                            fileName: \"/Users/poojaagrawal/www/reactjs-skills-assessment/src/components/Products.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            d: \"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z\",\n                            fill: \"currentFill\"\n                        }, void 0, false, {\n                            fileName: \"/Users/poojaagrawal/www/reactjs-skills-assessment/src/components/Products.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/poojaagrawal/www/reactjs-skills-assessment/src/components/Products.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/poojaagrawal/www/reactjs-skills-assessment/src/components/Products.tsx\",\n                lineNumber: 53,\n                columnNumber: 24\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-4 md:px-0 md:grid grid-cols-4 gap-8\",\n                children: products.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        product: item,\n                        index: index\n                    }, item.id, false, {\n                        fileName: \"/Users/poojaagrawal/www/reactjs-skills-assessment/src/components/Products.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/poojaagrawal/www/reactjs-skills-assessment/src/components/Products.tsx\",\n                lineNumber: 58,\n                columnNumber: 22\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/poojaagrawal/www/reactjs-skills-assessment/src/components/Products.tsx\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Products, \"uNbM+1vropdPqcbV+HPDcUbkl+4=\");\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0cy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE0QztBQUNEO0FBR0g7QUFDRjtBQUd0QyxNQUFNSyxXQUFXOztJQUViLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBWSxFQUFFO0lBQ3RELE1BQU0sQ0FBQ08sa0JBQWtCQyxvQkFBb0IsR0FBR1IsK0NBQVFBLENBQUM7SUFDekQsTUFBTSxDQUFDUyxZQUFZQyxjQUFjLEdBQUdWLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ1csU0FBU0MsV0FBVyxHQUFHWiwrQ0FBUUEsQ0FBQztJQUV2Q0QsZ0RBQVNBLENBQUM7UUFDTixJQUFJO1lBQ0FhLFdBQVc7WUFDWCxJQUFJQyxNQUFNO1lBQ1YsSUFBSU4sa0JBQ0FNLE9BQU8sZUFBZU47WUFFMUJPLE1BQU1ELEtBQ0RFLElBQUksQ0FBQ0MsQ0FBQUEsTUFBT0EsSUFBSUMsSUFBSSxJQUNwQkYsSUFBSSxDQUFFRyxDQUFBQTtnQkFDSFosWUFBWVk7Z0JBQ1pOLFdBQVc7WUFDZjtRQUdSLEVBQUUsT0FBT08sT0FBTztZQUNaQyxRQUFRQyxHQUFHLENBQUNGO1lBQ1pQLFdBQVc7UUFDZjtJQUNKLEdBQUc7UUFBQ0w7S0FBaUI7SUFFckJhLFFBQVFDLEdBQUcsQ0FBQ2Q7SUFFWixxQkFDSSw4REFBQ2U7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUF3Qzs7Ozs7OzBCQUd0RCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNFO29CQUFPQyxTQUFTLElBQU1oQixjQUFjO29CQUFPYSxXQUFVOztzQ0FDbEQsOERBQUN0QixxRkFBUUE7Ozs7O3NDQUNULDhEQUFDMEI7c0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSVZsQiwyQkFBYSw4REFBQ04sbURBQVVBO2dCQUFDTyxlQUFlQTtnQkFBZUgsa0JBQWtCQTtnQkFBa0JDLHFCQUFxQkE7Ozs7OzRCQUEwQjtZQUUxSUcsd0JBQVUsOERBQUNXO2dCQUFJQyxXQUFVOzBCQUN0Qiw0RUFBQ0s7b0JBQUlDLGVBQVk7b0JBQU9OLFdBQVU7b0JBQW1ETyxTQUFRO29CQUFjQyxNQUFLO29CQUFPQyxPQUFNOztzQ0FDekgsOERBQUNDOzRCQUFLQyxHQUFFOzRCQUErV0gsTUFBSzs7Ozs7O3NDQUM1WCw4REFBQ0U7NEJBQUtDLEdBQUU7NEJBQWdsQkgsTUFBSzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FFNWxCLDhEQUFDVDtnQkFBSUMsV0FBVTswQkFDbkJsQixTQUFTOEIsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNqQiw4REFBQ25DLG9EQUFXQTt3QkFBZW9DLFNBQVNGO3dCQUFNQyxPQUFPQTt1QkFBL0JELEtBQUtHLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNN0M7R0F6RE1uQztLQUFBQTtBQTJETiwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0cy50c3g/YmE3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGYUZpbHRlciB9IGZyb20gXCJyZWFjdC1pY29ucy9mYTZcIjtcblxuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCJ+L3V0aWxzL3R5cGVzXCI7XG5pbXBvcnQgUHJvZHVjdENhcmQgZnJvbSBcIi4vUHJvZHVjdENhcmRcIjtcbmltcG9ydCBDYXRlZ29yaWVzIGZyb20gXCIuL0NhdGVnb3JpZXNcIjtcblxuXG5jb25zdCBQcm9kdWN0cyA9ICgpID0+IHtcblxuICAgIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGU8UHJvZHVjdFtdPihbXSlcbiAgICBjb25zdCBbY2F0ZWdvcnlTZWxlY3RlZCwgc2V0Q2F0ZWdvcnlTZWxlY3RlZF0gPSB1c2VTdGF0ZShudWxsKVxuICAgIGNvbnN0IFtvcGVuRmlsdGVyLCBzZXRPcGVuRmlsdGVyXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgICAgICAgIGxldCB1cmwgPSAnaHR0cHM6Ly9mYWtlc3RvcmVhcGkuY29tL3Byb2R1Y3RzJ1xuICAgICAgICAgICAgaWYgKGNhdGVnb3J5U2VsZWN0ZWQpXG4gICAgICAgICAgICAgICAgdXJsICs9ICcvY2F0ZWdvcnkvJyArIGNhdGVnb3J5U2VsZWN0ZWRcblxuICAgICAgICAgICAgZmV0Y2godXJsKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgICAgIC50aGVuKChkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UHJvZHVjdHMoZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIClcblxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICB9XG4gICAgfSwgW2NhdGVnb3J5U2VsZWN0ZWRdKVxuXG4gICAgY29uc29sZS5sb2coY2F0ZWdvcnlTZWxlY3RlZClcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC1bMzJweF0gZm9udC1zZW1pYm9sZCB0ZXh0LWNlbnRlcic+XG4gICAgICAgICAgICAgICAgT3VyIFByb2R1Y3RzXG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG15LThcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE9wZW5GaWx0ZXIodHJ1ZSl9IGNsYXNzTmFtZT1cImJnLWJsYWNrIHB4LTIgcHktMSBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LXdoaXRlIHRleHQtc20gbXQtNiBtYi0xNlwiPlxuICAgICAgICAgICAgICAgICAgICA8RmFGaWx0ZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHA+RmlsdGVyPC9wPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogRmlsdGVyIE1vZGFsICovfVxuICAgICAgICAgICAge29wZW5GaWx0ZXIgPyA8Q2F0ZWdvcmllcyBzZXRPcGVuRmlsdGVyPXtzZXRPcGVuRmlsdGVyfSBjYXRlZ29yeVNlbGVjdGVkPXtjYXRlZ29yeVNlbGVjdGVkfSBzZXRDYXRlZ29yeVNlbGVjdGVkPXtzZXRDYXRlZ29yeVNlbGVjdGVkfSAvPiA6IG51bGx9XG5cbiAgICAgICAgICAgIHtsb2FkaW5nID8gPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwidy04IGgtOCB0ZXh0LWdyYXktMjAwIGFuaW1hdGUtc3BpbiBmaWxsLWdyYXktODAwXCIgdmlld0JveD1cIjAgMCAxMDAgMTAxXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTAwIDUwLjU5MDhDMTAwIDc4LjIwNTEgNzcuNjE0MiAxMDAuNTkxIDUwIDEwMC41OTFDMjIuMzg1OCAxMDAuNTkxIDAgNzguMjA1MSAwIDUwLjU5MDhDMCAyMi45NzY2IDIyLjM4NTggMC41OTA4MiA1MCAwLjU5MDgyQzc3LjYxNDIgMC41OTA4MiAxMDAgMjIuOTc2NiAxMDAgNTAuNTkwOFpNOS4wODE0NCA1MC41OTA4QzkuMDgxNDQgNzMuMTg5NSAyNy40MDEzIDkxLjUwOTQgNTAgOTEuNTA5NEM3Mi41OTg3IDkxLjUwOTQgOTAuOTE4NiA3My4xODk1IDkwLjkxODYgNTAuNTkwOEM5MC45MTg2IDI3Ljk5MjEgNzIuNTk4NyA5LjY3MjI2IDUwIDkuNjcyMjZDMjcuNDAxMyA5LjY3MjI2IDkuMDgxNDQgMjcuOTkyMSA5LjA4MTQ0IDUwLjU5MDhaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOTMuOTY3NiAzOS4wNDA5Qzk2LjM5MyAzOC40MDM4IDk3Ljg2MjQgMzUuOTExNiA5Ny4wMDc5IDMzLjU1MzlDOTUuMjkzMiAyOC44MjI3IDkyLjg3MSAyNC4zNjkyIDg5LjgxNjcgMjAuMzQ4Qzg1Ljg0NTIgMTUuMTE5MiA4MC44ODI2IDEwLjcyMzggNzUuMjEyNCA3LjQxMjg5QzY5LjU0MjIgNC4xMDE5NCA2My4yNzU0IDEuOTQwMjUgNTYuNzY5OCAxLjA1MTI0QzUxLjc2NjYgMC4zNjc1NDEgNDYuNjk3NiAwLjQ0Njg0MyA0MS43MzQ1IDEuMjc4NzNDMzkuMjYxMyAxLjY5MzI4IDM3LjgxMyA0LjE5Nzc4IDM4LjQ1MDEgNi42MjMyNkMzOS4wODczIDkuMDQ4NzQgNDEuNTY5NCAxMC40NzE3IDQ0LjA1MDUgMTAuMTA3MUM0Ny44NTExIDkuNTQ4NTUgNTEuNzE5MSA5LjUyNjg5IDU1LjU0MDIgMTAuMDQ5MUM2MC44NjQyIDEwLjc3NjYgNjUuOTkyOCAxMi41NDU3IDcwLjYzMzEgMTUuMjU1MkM3NS4yNzM1IDE3Ljk2NDggNzkuMzM0NyAyMS41NjE5IDgyLjU4NDkgMjUuODQxQzg0LjkxNzUgMjguOTEyMSA4Ni43OTk3IDMyLjI5MTMgODguMTgxMSAzNS44NzU4Qzg5LjA4MyAzOC4yMTU4IDkxLjU0MjEgMzkuNjc4MSA5My45Njc2IDM5LjA0MDlaXCIgZmlsbD1cImN1cnJlbnRGaWxsXCIgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvZGl2PiA6IDxkaXYgY2xhc3NOYW1lPVwicHgtNCBtZDpweC0wIG1kOmdyaWQgZ3JpZC1jb2xzLTQgZ2FwLThcIj5cbiAgICAgICAgICAgICAgICB7cHJvZHVjdHMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdENhcmQga2V5PXtpdGVtLmlkfSBwcm9kdWN0PXtpdGVtfSBpbmRleD17aW5kZXh9IC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj59XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0c1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRmFGaWx0ZXIiLCJQcm9kdWN0Q2FyZCIsIkNhdGVnb3JpZXMiLCJQcm9kdWN0cyIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJjYXRlZ29yeVNlbGVjdGVkIiwic2V0Q2F0ZWdvcnlTZWxlY3RlZCIsIm9wZW5GaWx0ZXIiLCJzZXRPcGVuRmlsdGVyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiYnV0dG9uIiwib25DbGljayIsInAiLCJzdmciLCJhcmlhLWhpZGRlbiIsInZpZXdCb3giLCJmaWxsIiwieG1sbnMiLCJwYXRoIiwiZCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInByb2R1Y3QiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Products.tsx\n"));

/***/ })

});