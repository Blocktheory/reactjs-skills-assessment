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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_FaFilter_react_icons_fa6__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=FaFilter!=!react-icons/fa6 */ \"__barrel_optimize__?names=FaFilter!=!./node_modules/react-icons/fa6/index.mjs\");\n/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductCard */ \"./src/components/ProductCard.tsx\");\n/* harmony import */ var _Categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Categories */ \"./src/components/Categories.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Products = ()=>{\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [categorySelected, setCategorySelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [openFilter, setOpenFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        try {\n            let url = \"https://fakestoreapi.com/products\";\n            if (categorySelected) url += \"/category/\" + categorySelected;\n            fetch(url).then((res)=>res.json()).then((data)=>setProducts(data));\n        } catch (error) {\n            console.log(error);\n        }\n    }, [\n        categorySelected\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-[32px] font-semibold text-center\",\n                children: \"Our Products\"\n            }, void 0, false, {\n                fileName: \"/Users/poojaagrawal/www/reactjs-skills-assessment/src/components/Products.tsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center my-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>setOpenFilter(true),\n                    className: \"bg-black px-2 py-1 flex items-center gap-1 text-white text-sm mt-6 mb-16\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaFilter_react_icons_fa6__WEBPACK_IMPORTED_MODULE_4__.FaFilter, {}, void 0, false, {\n                            fileName: \"/Users/poojaagrawal/www/reactjs-skills-assessment/src/components/Products.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Filter\"\n                        }, void 0, false, {\n                            fileName: \"/Users/poojaagrawal/www/reactjs-skills-assessment/src/components/Products.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/poojaagrawal/www/reactjs-skills-assessment/src/components/Products.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/poojaagrawal/www/reactjs-skills-assessment/src/components/Products.tsx\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, undefined),\n            openFilter ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Categories__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                setOpenFilter: setOpenFilter,\n                categorySelected: categorySelected,\n                setCategorySelected: setCategorySelected\n            }, void 0, false, {\n                fileName: \"/Users/poojaagrawal/www/reactjs-skills-assessment/src/components/Products.tsx\",\n                lineNumber: 42,\n                columnNumber: 27\n            }, undefined) : null,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-4 md:px-0 md:grid grid-cols-4 gap-8\",\n                children: products.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        product: item,\n                        index: index\n                    }, item.id, false, {\n                        fileName: \"/Users/poojaagrawal/www/reactjs-skills-assessment/src/components/Products.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/poojaagrawal/www/reactjs-skills-assessment/src/components/Products.tsx\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/poojaagrawal/www/reactjs-skills-assessment/src/components/Products.tsx\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Products, \"Ly3aQaOvwZU1jTFUzM4lsxUlbPY=\");\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0cy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE0QztBQUNEO0FBR0g7QUFDRjtBQUd0QyxNQUFNSyxXQUFXOztJQUViLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBWSxFQUFFO0lBQ3RELE1BQU0sQ0FBQ08sa0JBQWtCQyxvQkFBb0IsR0FBR1IsK0NBQVFBLENBQUM7SUFDekQsTUFBTSxDQUFDUyxZQUFZQyxjQUFjLEdBQUdWLCtDQUFRQSxDQUFDO0lBRTdDRCxnREFBU0EsQ0FBQztRQUNOLElBQUk7WUFDQSxJQUFJWSxNQUFNO1lBQ1YsSUFBSUosa0JBQ0FJLE9BQU8sZUFBZUo7WUFFMUJLLE1BQU1ELEtBQ0RFLElBQUksQ0FBQ0MsQ0FBQUEsTUFBT0EsSUFBSUMsSUFBSSxJQUNwQkYsSUFBSSxDQUFFRyxDQUFBQSxPQUFRVixZQUFZVTtRQUVuQyxFQUFFLE9BQU9DLE9BQU87WUFDWkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNoQjtJQUNKLEdBQUc7UUFBQ1Y7S0FBaUI7SUFFckIscUJBQ0ksOERBQUNhO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBd0M7Ozs7OzswQkFHdEQsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDRTtvQkFBT0MsU0FBUyxJQUFNZCxjQUFjO29CQUFPVyxXQUFVOztzQ0FDbEQsOERBQUNwQixxRkFBUUE7Ozs7O3NDQUNULDhEQUFDd0I7c0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSVZoQiwyQkFBYSw4REFBQ04sbURBQVVBO2dCQUFDTyxlQUFlQTtnQkFBZUgsa0JBQWtCQTtnQkFBa0JDLHFCQUFxQkE7Ozs7OzRCQUEwQjswQkFFM0ksOERBQUNZO2dCQUFJQyxXQUFVOzBCQUNWaEIsU0FBU3FCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDakIsOERBQUMxQixvREFBV0E7d0JBQWUyQixTQUFTRjt3QkFBTUMsT0FBT0E7dUJBQS9CRCxLQUFLRyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FBTTdDO0dBM0NNMUI7S0FBQUE7QUE2Q04sK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdHMudHN4P2JhN2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmFGaWx0ZXIgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmE2XCI7XG5cbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwifi91dGlscy90eXBlc1wiO1xuaW1wb3J0IFByb2R1Y3RDYXJkIGZyb20gXCIuL1Byb2R1Y3RDYXJkXCI7XG5pbXBvcnQgQ2F0ZWdvcmllcyBmcm9tIFwiLi9DYXRlZ29yaWVzXCI7XG5cblxuY29uc3QgUHJvZHVjdHMgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlPFByb2R1Y3RbXT4oW10pXG4gICAgY29uc3QgW2NhdGVnb3J5U2VsZWN0ZWQsIHNldENhdGVnb3J5U2VsZWN0ZWRdID0gdXNlU3RhdGUobnVsbClcbiAgICBjb25zdCBbb3BlbkZpbHRlciwgc2V0T3BlbkZpbHRlcl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgdXJsID0gJ2h0dHBzOi8vZmFrZXN0b3JlYXBpLmNvbS9wcm9kdWN0cydcbiAgICAgICAgICAgIGlmIChjYXRlZ29yeVNlbGVjdGVkKVxuICAgICAgICAgICAgICAgIHVybCArPSAnL2NhdGVnb3J5LycgKyBjYXRlZ29yeVNlbGVjdGVkXG5cbiAgICAgICAgICAgIGZldGNoKHVybClcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgICAgICAudGhlbigoZGF0YSA9PiBzZXRQcm9kdWN0cyhkYXRhKSkpXG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB9XG4gICAgfSwgW2NhdGVnb3J5U2VsZWN0ZWRdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LVszMnB4XSBmb250LXNlbWlib2xkIHRleHQtY2VudGVyJz5cbiAgICAgICAgICAgICAgICBPdXIgUHJvZHVjdHNcbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXktOFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0T3BlbkZpbHRlcih0cnVlKX0gY2xhc3NOYW1lPVwiYmctYmxhY2sgcHgtMiBweS0xIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHRleHQtd2hpdGUgdGV4dC1zbSBtdC02IG1iLTE2XCI+XG4gICAgICAgICAgICAgICAgICAgIDxGYUZpbHRlciAvPlxuICAgICAgICAgICAgICAgICAgICA8cD5GaWx0ZXI8L3A+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiBGaWx0ZXIgTW9kYWwgKi99XG4gICAgICAgICAgICB7b3BlbkZpbHRlciA/IDxDYXRlZ29yaWVzIHNldE9wZW5GaWx0ZXI9e3NldE9wZW5GaWx0ZXJ9IGNhdGVnb3J5U2VsZWN0ZWQ9e2NhdGVnb3J5U2VsZWN0ZWR9IHNldENhdGVnb3J5U2VsZWN0ZWQ9e3NldENhdGVnb3J5U2VsZWN0ZWR9IC8+IDogbnVsbH1cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IG1kOnB4LTAgbWQ6Z3JpZCBncmlkLWNvbHMtNCBnYXAtOFwiPlxuICAgICAgICAgICAgICAgIHtwcm9kdWN0cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0Q2FyZCBrZXk9e2l0ZW0uaWR9IHByb2R1Y3Q9e2l0ZW19IGluZGV4PXtpbmRleH0gLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHNcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkZhRmlsdGVyIiwiUHJvZHVjdENhcmQiLCJDYXRlZ29yaWVzIiwiUHJvZHVjdHMiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwiY2F0ZWdvcnlTZWxlY3RlZCIsInNldENhdGVnb3J5U2VsZWN0ZWQiLCJvcGVuRmlsdGVyIiwic2V0T3BlbkZpbHRlciIsInVybCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwicCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInByb2R1Y3QiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Products.tsx\n"));

/***/ })

});