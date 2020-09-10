webpackHotUpdate_N_E('pages/_app', {
  /***/ './src/components/Nav/index.js':
    /*!*************************************!*\
  !*** ./src/components/Nav/index.js ***!
  \*************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Nav; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");\n/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "./node_modules/@material-ui/icons/AccountCircle.js");\n/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/MenuList */ "./node_modules/@material-ui/core/esm/MenuList/index.js");\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");\n/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Grow */ "./node_modules/@material-ui/core/esm/Grow/index.js");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");\n/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Popper */ "./node_modules/@material-ui/core/esm/Popper/index.js");\n/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "./node_modules/@material-ui/core/esm/ClickAwayListener/index.js");\n/* harmony import */ var _Auth_AuthContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Auth/AuthContext */ "./src/components/Auth/AuthContext.js");\nvar _jsxFileName = "/Users/angelo.cordon/workspace/codebuddies/frontend/src/components/Nav/index.js",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(() => ({\n  root: {\n    display: \'flex\',\n    margin: \'1em 0em\'\n  },\n  ul: {\n    display: \'flex\',\n    listStyle: \'none\',\n    justifyContent: \'space-between\',\n    width: \'100%\',\n    padding: \'0\'\n  },\n  navItems: {\n    display: \'flex\',\n    alignItems: \'center\',\n    \'& li\': {\n      margin: \'0em .5em\'\n    }\n  }\n}));\nfunction Nav() {\n  _s();\n\n  const classes = useStyles();\n  const {\n    0: isMenuExpanded,\n    1: setIsMenuExpanded\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);\n  const anchorRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);\n  const authContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Auth_AuthContext__WEBPACK_IMPORTED_MODULE_11__["AuthContext"]);\n\n  const logout = () => {\n    authContext.setAuthTokens();\n    localStorage.clear(\'tokens\');\n  };\n\n  const handleMenuOpen = () => {\n    setIsMenuExpanded(prevMenuState => !prevMenuState);\n  };\n\n  const handleMenuClose = event => {\n    if (anchorRef.current && anchorRef.current.contains(event.target)) {\n      return;\n    }\n\n    setIsMenuExpanded(false);\n  };\n\n  function handleListKeyDown(event) {\n    if (event.key === \'Tab\') {\n      event.preventDefault();\n      setIsMenuExpanded(false);\n    }\n  } // return focus to the button when we transitioned from !open -> open\n\n\n  const prevMenuState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(isMenuExpanded);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {\n    if (prevMenuState.current === true && isMenuExpanded === false) {\n      anchorRef.current.focus();\n    }\n\n    prevMenuState.current = isMenuExpanded;\n  }, [isMenuExpanded]);\n  return __jsx("nav", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 5\n    }\n  }, __jsx("ul", {\n    className: classes.ul,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }\n  }, __jsx("li", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: "/",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 11\n    }\n  }, __jsx("img", {\n    src: "/assets/logo.png",\n    alt: "Codebuddies Logo",\n    width: "200",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 13\n    }\n  })))));\n}\n\n_s(Nav, "HlinSMkbvI5Xp6unhAPUR+lVXcU=", false, function () {\n  return [useStyles];\n});\n\n_c = Nav;\n\nvar _c;\n\n$RefreshReg$(_c, "Nav");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2L2luZGV4LmpzP2M3YzAiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJkaXNwbGF5IiwibWFyZ2luIiwidWwiLCJsaXN0U3R5bGUiLCJqdXN0aWZ5Q29udGVudCIsIndpZHRoIiwicGFkZGluZyIsIm5hdkl0ZW1zIiwiYWxpZ25JdGVtcyIsIk5hdiIsImNsYXNzZXMiLCJpc01lbnVFeHBhbmRlZCIsInNldElzTWVudUV4cGFuZGVkIiwidXNlU3RhdGUiLCJhbmNob3JSZWYiLCJ1c2VSZWYiLCJhdXRoQ29udGV4dCIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsImxvZ291dCIsInNldEF1dGhUb2tlbnMiLCJsb2NhbFN0b3JhZ2UiLCJjbGVhciIsImhhbmRsZU1lbnVPcGVuIiwicHJldk1lbnVTdGF0ZSIsImhhbmRsZU1lbnVDbG9zZSIsImV2ZW50IiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiaGFuZGxlTGlzdEtleURvd24iLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsInVzZUVmZmVjdCIsImZvY3VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsT0FBTztBQUNsQ0MsTUFBSSxFQUFFO0FBQ0pDLFdBQU8sRUFBRSxNQURMO0FBRUpDLFVBQU0sRUFBRTtBQUZKLEdBRDRCO0FBS2xDQyxJQUFFLEVBQUU7QUFDRkYsV0FBTyxFQUFFLE1BRFA7QUFFRkcsYUFBUyxFQUFFLE1BRlQ7QUFHRkMsa0JBQWMsRUFBRSxlQUhkO0FBSUZDLFNBQUssRUFBRSxNQUpMO0FBS0ZDLFdBQU8sRUFBRTtBQUxQLEdBTDhCO0FBWWxDQyxVQUFRLEVBQUU7QUFDUlAsV0FBTyxFQUFFLE1BREQ7QUFFUlEsY0FBVSxFQUFFLFFBRko7QUFHUixZQUFRO0FBQ05QLFlBQU0sRUFBRTtBQURGO0FBSEE7QUFad0IsQ0FBUCxDQUFELENBQTVCO0FBcUJlLFNBQVNRLEdBQVQsR0FBZTtBQUFBOztBQUM1QixRQUFNQyxPQUFPLEdBQUdiLFNBQVMsRUFBekI7QUFDQSxRQUFNO0FBQUEsT0FBQ2MsY0FBRDtBQUFBLE9BQWlCQztBQUFqQixNQUFzQ0Msc0RBQVEsQ0FBQyxLQUFELENBQXBEO0FBQ0EsUUFBTUMsU0FBUyxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBeEI7QUFDQSxRQUFNQyxXQUFXLEdBQUdDLHdEQUFVLENBQUNDLDhEQUFELENBQTlCOztBQUVBLFFBQU1DLE1BQU0sR0FBRyxNQUFNO0FBQ25CSCxlQUFXLENBQUNJLGFBQVo7QUFDQUMsZ0JBQVksQ0FBQ0MsS0FBYixDQUFtQixRQUFuQjtBQUNELEdBSEQ7O0FBS0EsUUFBTUMsY0FBYyxHQUFHLE1BQU07QUFDM0JYLHFCQUFpQixDQUFDWSxhQUFhLElBQUksQ0FBQ0EsYUFBbkIsQ0FBakI7QUFDRCxHQUZEOztBQUlBLFFBQU1DLGVBQWUsR0FBR0MsS0FBSyxJQUFJO0FBQy9CLFFBQUlaLFNBQVMsQ0FBQ2EsT0FBVixJQUFxQmIsU0FBUyxDQUFDYSxPQUFWLENBQWtCQyxRQUFsQixDQUEyQkYsS0FBSyxDQUFDRyxNQUFqQyxDQUF6QixFQUFtRTtBQUNqRTtBQUNEOztBQUNEakIscUJBQWlCLENBQUMsS0FBRCxDQUFqQjtBQUNELEdBTEQ7O0FBT0EsV0FBU2tCLGlCQUFULENBQTJCSixLQUEzQixFQUFrQztBQUNoQyxRQUFJQSxLQUFLLENBQUNLLEdBQU4sS0FBYyxLQUFsQixFQUF5QjtBQUN2QkwsV0FBSyxDQUFDTSxjQUFOO0FBQ0FwQix1QkFBaUIsQ0FBQyxLQUFELENBQWpCO0FBQ0Q7QUFDRixHQTNCMkIsQ0E2QjVCOzs7QUFDQSxRQUFNWSxhQUFhLEdBQUdULG9EQUFNLENBQUNKLGNBQUQsQ0FBNUI7QUFDQXNCLHlEQUFTLENBQUMsTUFBTTtBQUNkLFFBQUlULGFBQWEsQ0FBQ0csT0FBZCxLQUEwQixJQUExQixJQUFrQ2hCLGNBQWMsS0FBSyxLQUF6RCxFQUFnRTtBQUM5REcsZUFBUyxDQUFDYSxPQUFWLENBQWtCTyxLQUFsQjtBQUNEOztBQUVEVixpQkFBYSxDQUFDRyxPQUFkLEdBQXdCaEIsY0FBeEI7QUFDRCxHQU5RLEVBTU4sQ0FBQ0EsY0FBRCxDQU5NLENBQVQ7QUFRQSxTQUNFO0FBQUssYUFBUyxFQUFFRCxPQUFPLENBQUNYLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBRVcsT0FBTyxDQUFDUixFQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUMsa0JBQVQ7QUFBNEIsT0FBRyxFQUFDLGtCQUFoQztBQUFtRCxTQUFLLEVBQUMsS0FBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FERixDQURGLENBREY7QUFXRDs7R0FsRHVCTyxHO1VBQ05aLFM7OztLQURNWSxHIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTmF2L2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBBY2NvdW50Q2lyY2xlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjb3VudENpcmNsZSc7XG5pbXBvcnQgTWVudUxpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUxpc3QnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IEdyb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3Jvdyc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IFBvcHBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Qb3BwZXInO1xuaW1wb3J0IENsaWNrQXdheUxpc3RlbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NsaWNrQXdheUxpc3RlbmVyJztcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi4vQXV0aC9BdXRoQ29udGV4dCc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKCkgPT4gKHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBtYXJnaW46ICcxZW0gMGVtJyxcbiAgfSxcbiAgdWw6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgbGlzdFN0eWxlOiAnbm9uZScsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIHBhZGRpbmc6ICcwJyxcbiAgfSxcbiAgbmF2SXRlbXM6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgJyYgbGknOiB7XG4gICAgICBtYXJnaW46ICcwZW0gLjVlbScsXG4gICAgfSxcbiAgfSxcbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2KCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtpc01lbnVFeHBhbmRlZCwgc2V0SXNNZW51RXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBhbmNob3JSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGF1dGhDb250ZXh0ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG5cbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuICAgIGF1dGhDb250ZXh0LnNldEF1dGhUb2tlbnMoKTtcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoJ3Rva2VucycpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1lbnVPcGVuID0gKCkgPT4ge1xuICAgIHNldElzTWVudUV4cGFuZGVkKHByZXZNZW51U3RhdGUgPT4gIXByZXZNZW51U3RhdGUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1lbnVDbG9zZSA9IGV2ZW50ID0+IHtcbiAgICBpZiAoYW5jaG9yUmVmLmN1cnJlbnQgJiYgYW5jaG9yUmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRJc01lbnVFeHBhbmRlZChmYWxzZSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gaGFuZGxlTGlzdEtleURvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnVGFiJykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHNldElzTWVudUV4cGFuZGVkKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICAvLyByZXR1cm4gZm9jdXMgdG8gdGhlIGJ1dHRvbiB3aGVuIHdlIHRyYW5zaXRpb25lZCBmcm9tICFvcGVuIC0+IG9wZW5cbiAgY29uc3QgcHJldk1lbnVTdGF0ZSA9IHVzZVJlZihpc01lbnVFeHBhbmRlZCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByZXZNZW51U3RhdGUuY3VycmVudCA9PT0gdHJ1ZSAmJiBpc01lbnVFeHBhbmRlZCA9PT0gZmFsc2UpIHtcbiAgICAgIGFuY2hvclJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgcHJldk1lbnVTdGF0ZS5jdXJyZW50ID0gaXNNZW51RXhwYW5kZWQ7XG4gIH0sIFtpc01lbnVFeHBhbmRlZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8dWwgY2xhc3NOYW1lPXtjbGFzc2VzLnVsfT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvbG9nby5wbmdcIiBhbHQ9XCJDb2RlYnVkZGllcyBMb2dvXCIgd2lkdGg9XCIyMDBcIiAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9uYXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Nav/index.js\n'
      );

      /***/
    },
});