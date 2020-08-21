/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../utils/colors.js":
/*!**************************!*\
  !*** ../utils/colors.js ***!
  \**************************/
/*! exports provided: colors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
const colors = [{
  name: 'transparent',
  color: 'transparent'
}, {
  name: 'white',
  color: '#fff'
}, {
  name: 'black',
  color: '#000'
}, {
  name: 'green',
  color: '#699D81'
}];

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/colors */ "../utils/colors.js");







class SDBulmaColumn extends _wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  static getInitialState(editFullHD, widthFullHD, editWidescreen, widthWidescreen, editDesktop, widthDesktop, editTablet, widthTablet, editMobile, widthMobile, colorBG) {
    return {
      editFullHD,
      widthFullHD,
      editWidescreen,
      widthWidescreen,
      editDesktop,
      widthDesktop,
      editTablet,
      widthTablet,
      editMobile,
      widthMobile,
      colorBG
    };
  }

  constructor() {
    super(...arguments);

    this.changeValue = (style, definition) => {
      const {
        setAttributes
      } = this.props;

      const stateObject = function () {
        const returnObj = {};
        returnObj[style] = definition;
        return returnObj;
      }.bind(style)();

      this.setState(stateObject);
      setAttributes(stateObject);
    };

    this.calcWidth = size => {
      return Math.round(100 / 12 * size);
    };

    const {
      editFullHD,
      widthFullHD,
      editWidescreen,
      widthWidescreen,
      editDesktop,
      widthDesktop,
      editTablet,
      widthTablet,
      editMobile,
      widthMobile,
      colorBG
    } = this.props.attributes;
    this.state = this.constructor.getInitialState(editFullHD, widthFullHD, editWidescreen, widthWidescreen, editDesktop, widthDesktop, editTablet, widthTablet, editMobile, widthMobile, colorBG);
  }

  render() {
    const {
      editFullHD,
      widthFullHD,
      editWidescreen,
      widthWidescreen,
      editDesktop,
      widthDesktop,
      editTablet,
      widthTablet,
      editMobile,
      widthMobile,
      colorBG
    } = this.state;
    const colClass = classnames__WEBPACK_IMPORTED_MODULE_4___default()({
      column: true
    });
    const styles = {
      backgroundColor: colorBG
    };
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], {
      key: "inspector"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
      title: "Column Sizes"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
      label: "Edit column width on mobile devices",
      checked: editMobile,
      help: editFullHD ? 'custom' : 'auto',
      onChange: editMobile => this.changeValue('editMobile', editMobile)
    }), editMobile ? /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
      label: "space used for viewports <= 768",
      value: widthMobile,
      onChange: widthMobile => this.changeValue('widthMobile', widthMobile),
      help: `${this.calcWidth(widthMobile)}%`,
      min: 1,
      max: 12
    }) : null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
      label: "Edit column width on tablet devices",
      checked: editTablet,
      help: editTablet ? 'custom' : 'auto',
      onChange: editTablet => this.changeValue('editTablet', editTablet)
    }), editTablet ? /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
      label: "space used for viewports >= 769px",
      value: widthTablet,
      onChange: widthTablet => this.changeValue('widthTablet', widthTablet),
      min: 1,
      max: 12
    }) : null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
      label: "Edit column width on desktop devices",
      checked: editDesktop,
      help: editDesktop ? 'custom' : 'auto',
      onChange: editDesktop => this.changeValue('editDesktop', editDesktop)
    }), editDesktop ? /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
      label: "Space used for viewports >= 1024px",
      value: widthDesktop,
      onChange: widthDesktop => this.changeValue('widthDesktop', widthDesktop),
      min: 1,
      max: 12
    }) : null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
      label: "Edit width on widescreen devices",
      checked: editWidescreen,
      help: editWidescreen ? 'custom' : 'auto',
      onChange: editWidescreen => this.changeValue('editWidescreen', editWidescreen)
    }), editWidescreen ? /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
      label: "Space used for viewports >= 1216px",
      value: widthWidescreen,
      onChange: widthWidescreen => this.changeValue('widthWidescreen', widthWidescreen),
      min: 1,
      max: 12
    }) : null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
      label: "Edit width for full HD devices",
      checked: editFullHD,
      help: editFullHD ? 'custom width' : 'auto width',
      onChange: editFullHD => this.changeValue('editFullHD', editFullHD)
    }), editFullHD ? /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
      label: "Space used for viewports >= 1408px",
      value: widthFullHD,
      onChange: widthFullHD => this.changeValue('widthFullHD', widthFullHD),
      min: 1,
      max: 12
    }) : null), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
      title: "Color options"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ColorPalette"], {
      colors: _utils_colors__WEBPACK_IMPORTED_MODULE_5__["colors"],
      value: colorBG,
      onChange: colorBG => this.changeValue('colorBG', colorBG)
    }))), /*#__PURE__*/React.createElement("div", {
      className: `${colClass}`,
      style: styles
    }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"], null)));
  }

}

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('sd/bulma-column', {
  title: 'SD Bulma Column',
  icon: 'layout',
  category: 'sd-gutenberg-bulma-grid',
  attributes: {
    editFullHD: {
      type: 'boolean',
      default: false
    },
    widthFullHD: {
      type: 'string',
      default: '6'
    },
    editWidescreen: {
      type: 'boolean',
      default: false
    },
    widthWidescreen: {
      type: 'string',
      default: '6'
    },
    editDesktop: {
      type: 'boolean',
      default: false
    },
    widthDesktop: {
      type: 'string',
      default: '6'
    },
    editTablet: {
      type: 'boolean',
      default: false
    },
    widthTablet: {
      type: 'string',
      default: '6'
    },
    editMobile: {
      type: 'boolean',
      default: false
    },
    widthMobile: {
      type: 'string',
      default: '12'
    },
    colorBG: {
      type: 'string',
      default: 'transparent'
    }
  },
  edit: SDBulmaColumn,

  save() {
    return /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"].Content, null);
  },

  parent: ['sd/bulma-columns']
});

/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map