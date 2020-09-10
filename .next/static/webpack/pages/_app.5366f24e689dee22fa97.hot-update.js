webpackHotUpdate_N_E('pages/_app', {
  /***/ './src/components/Nav/index.js':
    /*!*************************************!*\
  !*** ./src/components/Nav/index.js ***!
  \*************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Nav; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");\n/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "./node_modules/@material-ui/icons/AccountCircle.js");\n/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/MenuList */ "./node_modules/@material-ui/core/esm/MenuList/index.js");\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");\n/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Grow */ "./node_modules/@material-ui/core/esm/Grow/index.js");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");\n/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Popper */ "./node_modules/@material-ui/core/esm/Popper/index.js");\n/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "./node_modules/@material-ui/core/esm/ClickAwayListener/index.js");\n/* harmony import */ var _Auth_AuthContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Auth/AuthContext */ "./src/components/Auth/AuthContext.js");\nvar _jsxFileName = "/Users/angelo.cordon/workspace/codebuddies/frontend/src/components/Nav/index.js",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(() => ({\n  root: {\n    display: \'flex\',\n    margin: \'1em 0em\'\n  },\n  ul: {\n    display: \'flex\',\n    listStyle: \'none\',\n    justifyContent: \'space-between\',\n    width: \'100%\',\n    padding: \'0\'\n  },\n  navItems: {\n    display: \'flex\',\n    alignItems: \'center\',\n    \'& li\': {\n      margin: \'0em .5em\'\n    }\n  }\n}));\nfunction Nav() {\n  _s();\n\n  const classes = useStyles();\n  const {\n    0: isMenuExpanded,\n    1: setIsMenuExpanded\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);\n  const anchorRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);\n  const authContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Auth_AuthContext__WEBPACK_IMPORTED_MODULE_11__["AuthContext"]);\n\n  const logout = () => {\n    authContext.setAuthTokens();\n    localStorage.clear(\'tokens\');\n  };\n\n  const handleMenuOpen = () => {\n    setIsMenuExpanded(prevMenuState => !prevMenuState);\n  };\n\n  const handleMenuClose = event => {\n    if (anchorRef.current && anchorRef.current.contains(event.target)) {\n      return;\n    }\n\n    setIsMenuExpanded(false);\n  };\n\n  function handleListKeyDown(event) {\n    if (event.key === \'Tab\') {\n      event.preventDefault();\n      setIsMenuExpanded(false);\n    }\n  } // return focus to the button when we transitioned from !open -> open\n\n\n  const prevMenuState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(isMenuExpanded);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {\n    if (prevMenuState.current === true && isMenuExpanded === false) {\n      anchorRef.current.focus();\n    }\n\n    prevMenuState.current = isMenuExpanded;\n  }, [isMenuExpanded]);\n  return __jsx("nav", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 5\n    }\n  }, __jsx("ul", {\n    className: classes.ul,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }\n  }, __jsx("li", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["Link"], {\n    href: "/",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 11\n    }\n  }, __jsx("img", {\n    src: "/assets/logo.png",\n    alt: "Codebuddies Logo",\n    width: "200",\n    className: classes.logo,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 13\n    }\n  })))));\n}\n\n_s(Nav, "HlinSMkbvI5Xp6unhAPUR+lVXcU=", false, function () {\n  return [useStyles];\n});\n\n_c = Nav;\n\nvar _c;\n\n$RefreshReg$(_c, "Nav");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2L2luZGV4LmpzP2M3YzAiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJkaXNwbGF5IiwibWFyZ2luIiwidWwiLCJsaXN0U3R5bGUiLCJqdXN0aWZ5Q29udGVudCIsIndpZHRoIiwicGFkZGluZyIsIm5hdkl0ZW1zIiwiYWxpZ25JdGVtcyIsIk5hdiIsImNsYXNzZXMiLCJpc01lbnVFeHBhbmRlZCIsInNldElzTWVudUV4cGFuZGVkIiwidXNlU3RhdGUiLCJhbmNob3JSZWYiLCJ1c2VSZWYiLCJhdXRoQ29udGV4dCIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsImxvZ291dCIsInNldEF1dGhUb2tlbnMiLCJsb2NhbFN0b3JhZ2UiLCJjbGVhciIsImhhbmRsZU1lbnVPcGVuIiwicHJldk1lbnVTdGF0ZSIsImhhbmRsZU1lbnVDbG9zZSIsImV2ZW50IiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiaGFuZGxlTGlzdEtleURvd24iLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsInVzZUVmZmVjdCIsImZvY3VzIiwibG9nbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLE9BQU87QUFDbENDLE1BQUksRUFBRTtBQUNKQyxXQUFPLEVBQUUsTUFETDtBQUVKQyxVQUFNLEVBQUU7QUFGSixHQUQ0QjtBQUtsQ0MsSUFBRSxFQUFFO0FBQ0ZGLFdBQU8sRUFBRSxNQURQO0FBRUZHLGFBQVMsRUFBRSxNQUZUO0FBR0ZDLGtCQUFjLEVBQUUsZUFIZDtBQUlGQyxTQUFLLEVBQUUsTUFKTDtBQUtGQyxXQUFPLEVBQUU7QUFMUCxHQUw4QjtBQVlsQ0MsVUFBUSxFQUFFO0FBQ1JQLFdBQU8sRUFBRSxNQUREO0FBRVJRLGNBQVUsRUFBRSxRQUZKO0FBR1IsWUFBUTtBQUNOUCxZQUFNLEVBQUU7QUFERjtBQUhBO0FBWndCLENBQVAsQ0FBRCxDQUE1QjtBQXFCZSxTQUFTUSxHQUFULEdBQWU7QUFBQTs7QUFDNUIsUUFBTUMsT0FBTyxHQUFHYixTQUFTLEVBQXpCO0FBQ0EsUUFBTTtBQUFBLE9BQUNjLGNBQUQ7QUFBQSxPQUFpQkM7QUFBakIsTUFBc0NDLHNEQUFRLENBQUMsS0FBRCxDQUFwRDtBQUNBLFFBQU1DLFNBQVMsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXhCO0FBQ0EsUUFBTUMsV0FBVyxHQUFHQyx3REFBVSxDQUFDQyw4REFBRCxDQUE5Qjs7QUFFQSxRQUFNQyxNQUFNLEdBQUcsTUFBTTtBQUNuQkgsZUFBVyxDQUFDSSxhQUFaO0FBQ0FDLGdCQUFZLENBQUNDLEtBQWIsQ0FBbUIsUUFBbkI7QUFDRCxHQUhEOztBQUtBLFFBQU1DLGNBQWMsR0FBRyxNQUFNO0FBQzNCWCxxQkFBaUIsQ0FBQ1ksYUFBYSxJQUFJLENBQUNBLGFBQW5CLENBQWpCO0FBQ0QsR0FGRDs7QUFJQSxRQUFNQyxlQUFlLEdBQUdDLEtBQUssSUFBSTtBQUMvQixRQUFJWixTQUFTLENBQUNhLE9BQVYsSUFBcUJiLFNBQVMsQ0FBQ2EsT0FBVixDQUFrQkMsUUFBbEIsQ0FBMkJGLEtBQUssQ0FBQ0csTUFBakMsQ0FBekIsRUFBbUU7QUFDakU7QUFDRDs7QUFDRGpCLHFCQUFpQixDQUFDLEtBQUQsQ0FBakI7QUFDRCxHQUxEOztBQU9BLFdBQVNrQixpQkFBVCxDQUEyQkosS0FBM0IsRUFBa0M7QUFDaEMsUUFBSUEsS0FBSyxDQUFDSyxHQUFOLEtBQWMsS0FBbEIsRUFBeUI7QUFDdkJMLFdBQUssQ0FBQ00sY0FBTjtBQUNBcEIsdUJBQWlCLENBQUMsS0FBRCxDQUFqQjtBQUNEO0FBQ0YsR0EzQjJCLENBNkI1Qjs7O0FBQ0EsUUFBTVksYUFBYSxHQUFHVCxvREFBTSxDQUFDSixjQUFELENBQTVCO0FBQ0FzQix5REFBUyxDQUFDLE1BQU07QUFDZCxRQUFJVCxhQUFhLENBQUNHLE9BQWQsS0FBMEIsSUFBMUIsSUFBa0NoQixjQUFjLEtBQUssS0FBekQsRUFBZ0U7QUFDOURHLGVBQVMsQ0FBQ2EsT0FBVixDQUFrQk8sS0FBbEI7QUFDRDs7QUFFRFYsaUJBQWEsQ0FBQ0csT0FBZCxHQUF3QmhCLGNBQXhCO0FBQ0QsR0FOUSxFQU1OLENBQUNBLGNBQUQsQ0FOTSxDQUFUO0FBUUEsU0FDRTtBQUFLLGFBQVMsRUFBRUQsT0FBTyxDQUFDWCxJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUVXLE9BQU8sQ0FBQ1IsRUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhDQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsT0FBRyxFQUFDLGtCQUROO0FBRUUsT0FBRyxFQUFDLGtCQUZOO0FBR0UsU0FBSyxFQUFDLEtBSFI7QUFJRSxhQUFTLEVBQUVRLE9BQU8sQ0FBQ3lCLElBSnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREYsQ0FERixDQURGO0FBZ0JEOztHQXZEdUIxQixHO1VBQ05aLFM7OztLQURNWSxHIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTmF2L2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQWNjb3VudENpcmNsZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FjY291bnRDaXJjbGUnO1xuaW1wb3J0IE1lbnVMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVMaXN0JztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBHcm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyb3cnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBQb3BwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUG9wcGVyJztcbmltcG9ydCBDbGlja0F3YXlMaXN0ZW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DbGlja0F3YXlMaXN0ZW5lcic7XG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gJy4uL0F1dGgvQXV0aENvbnRleHQnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCgpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgbWFyZ2luOiAnMWVtIDBlbScsXG4gIH0sXG4gIHVsOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGxpc3RTdHlsZTogJ25vbmUnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBwYWRkaW5nOiAnMCcsXG4gIH0sXG4gIG5hdkl0ZW1zOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICcmIGxpJzoge1xuICAgICAgbWFyZ2luOiAnMGVtIC41ZW0nLFxuICAgIH0sXG4gIH0sXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdigpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbaXNNZW51RXhwYW5kZWQsIHNldElzTWVudUV4cGFuZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgYW5jaG9yUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBhdXRoQ29udGV4dCA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xuXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcbiAgICBhdXRoQ29udGV4dC5zZXRBdXRoVG9rZW5zKCk7XG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCd0b2tlbnMnKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVNZW51T3BlbiA9ICgpID0+IHtcbiAgICBzZXRJc01lbnVFeHBhbmRlZChwcmV2TWVudVN0YXRlID0+ICFwcmV2TWVudVN0YXRlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVNZW51Q2xvc2UgPSBldmVudCA9PiB7XG4gICAgaWYgKGFuY2hvclJlZi5jdXJyZW50ICYmIGFuY2hvclJlZi5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0SXNNZW51RXhwYW5kZWQoZmFsc2UpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUxpc3RLZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ1RhYicpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBzZXRJc01lbnVFeHBhbmRlZChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gcmV0dXJuIGZvY3VzIHRvIHRoZSBidXR0b24gd2hlbiB3ZSB0cmFuc2l0aW9uZWQgZnJvbSAhb3BlbiAtPiBvcGVuXG4gIGNvbnN0IHByZXZNZW51U3RhdGUgPSB1c2VSZWYoaXNNZW51RXhwYW5kZWQpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcmV2TWVudVN0YXRlLmN1cnJlbnQgPT09IHRydWUgJiYgaXNNZW51RXhwYW5kZWQgPT09IGZhbHNlKSB7XG4gICAgICBhbmNob3JSZWYuY3VycmVudC5mb2N1cygpO1xuICAgIH1cblxuICAgIHByZXZNZW51U3RhdGUuY3VycmVudCA9IGlzTWVudUV4cGFuZGVkO1xuICB9LCBbaXNNZW51RXhwYW5kZWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPHVsIGNsYXNzTmFtZT17Y2xhc3Nlcy51bH0+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2xvZ28ucG5nXCJcbiAgICAgICAgICAgICAgYWx0PVwiQ29kZWJ1ZGRpZXMgTG9nb1wiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMjAwXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ299XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9uYXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Nav/index.js\n'
      );

      /***/
    },
});