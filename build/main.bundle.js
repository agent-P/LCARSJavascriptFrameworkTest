/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var svgNS = "http://www.w3.org/2000/svg";

/**
 *  ES_XXX - LCARS element styles
 */
var ES_SHAPE = 0x0000000F; // Mask for ES_SHAPE_XXX styles
var ES_LABEL = 0x000000F0; // Mask for ES_LABEL_XXX styles
var ES_COLOR = 0x0000FF00; // Mask for EC_XXX styles
var ES_FONT = 0x000F0000; // Mask for EF_XXX styles
var ES_BEHAVIOR = 0x0F000000; // Mask for EB_XXX styles
var ES_CLASS = 0xF0000000; // Mask for class specific styles
var ES_SELECTED = 0x00000000; // Element selected
var ES_DISABLED = 0x01000000; // Element disabled
var ES_SELDISED = 0x00000000; // Element selected and disabled
var ES_STATIC = 0x00100000; // Element does not accept user input
var ES_BLINKING = 0x00200000; // Element blinks
var ES_MODAL = 0x00400000; // Element is always opaque
var ES_SILENT = 0x00800000; // Element does not play a sound
var ES_NONE = 0x00000000; // Element does not have a style


/**
 *  ES_SHAPE_XXX - LCARS element shape orientation
 */
var ES_SHAPE_NW = 0x00000000; // Shape oriented to the north-west
var ES_SHAPE_SW = 0x00000001; // Shape oriented to the south-west
var ES_SHAPE_NE = 0x00000002; // Shape oriented to the north-east
var ES_SHAPE_SE = 0x00000004; // Shape oriented to the south-east
var ES_OUTLINE = 0x00000008; // Outline

/**
 *  ES_LABEL_XXX - LCARS element label position
 */
var ES_LABEL_SE = 0x00000010; // Label in the south-east - the default for LCARS components
var ES_LABEL_S = 0x00000020; // Label in the south
var ES_LABEL_SW = 0x00000030; // Label in the south-west
var ES_LABEL_W = 0x00000040; // Label in the west
var ES_LABEL_NW = 0x00000050; // Label in the north-west
var ES_LABEL_N = 0x00000060; // Label in the north
var ES_LABEL_NE = 0x00000070; // Label in the north-east
var ES_LABEL_E = 0x00000080; // Label in the east
var ES_LABEL_C = 0x00000090; // Label in the center

/**
 *  ES_RECT_XXX - LCARS Rectangle/Button element styles
 */
var ES_RECT_RND = 0x30000000; // Rounded rectangle shape
var ES_RECT_RND_E = 0x10000000; // Rounded rectangle shape in the east
var ES_RECT_RND_W = 0x20000000; // Rounded rectangle shape in the west

/**
 *  EC_XXX - Colors by Name
 */
var EC_WHITE = 0x00000000; //
var EC_L_BLUE = 0x00000400; //
var EC_M_BLUE = 0x00000800; //
var EC_BLUE = 0x00000C00; //
var EC_D_BLUE = 0x00001000; //
var EC_YELLOW = 0x00001400; //
var EC_ORANGE = 0x00001800;
var EC_RED = 0x00001C00;

/**
 *  EF_XXX - Fonts
 */
var EF_NORMAL = 0x00000000; // The normal LCARS font
var EF_TITLE = 0x00010000; // The title font
var EF_SUBTITLE = 0x00020000; // The subtitle font
var EF_BUTTON = 0x00030000; // The default button text font
var EF_BODY = 0x00040000; // The default body text font
var EF_TINY = 0x00050000; // A tiny font

var FONT_TITLE_SIZE = 60;
var FONT_SUBTITLE_SIZE = 40;
var FONT_BUTTON_SIZE = 25;
var FONT_BODY_SIZE = 20;
var FONT_TINY_SIZE = 10;

var LCARS_FONT = "Arial Narrow";
var LCARS_FONT_MOBILE = "Avenir Next Condensed Medium";
var LCARS_CHAR_SIZE_ARRAY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 26, 46, 63, 42, 105, 45, 20, 25, 25, 47, 39, 21, 34, 26, 36, 36, 28, 36, 36, 36, 36, 36, 36, 36, 36, 27, 27, 36, 35, 36, 35, 65, 42, 43, 42, 44, 35, 34, 43, 46, 25, 39, 40, 31, 59, 47, 43, 41, 43, 44, 39, 28, 44, 43, 65, 37, 39, 34, 37, 42, 37, 50, 37, 32, 43, 43, 39, 43, 40, 30, 42, 45, 23, 25, 39, 23, 67, 45, 41, 43, 42, 30, 40, 28, 45, 33, 52, 33, 36, 31, 39, 26, 39, 55];

/**
 * Keypad Class Styles
 */
var EKP_AUX_KEYS = 0x40000000;

/**
 * Key pad constants
 */
var KP_BUTTON_X_OFFSET = 175;
var KP_BUTTON_Y_OFFSET = 100;
var KP_BUTTON_X_SPACE = 25;
var KP_BUTTON_Y_SPACE = 40;

var TEXT_Y_INSET = 10;
var TEXT_X_INSET = 20;

var LCARS_BTN_HEIGHT = 60;
var LCARS_BTN_WIDTH = 150;
var LCARS_BTN_SPACING = 5;
var LCARS_SPACE = 5;
var LCARS_CORNER_HEIGHT = 92;

var SHAPE_SUFFIX = "_shape";
var TEXT_SUFFIX = "_text";
var AUX_TEXT_SUFFIX = "_aux_text";

var DAYS = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var MONTHS = ["\x00", /** substitution token to support parsing */
"January", /** MONTHS[1] = "January" */
"February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var MONTHS_ABBREVIATED = ["\x01", /** substitution token to support parsing */
"Jan", /** MONTHS_ABBREVIATED[1] = "Jan" */
"Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

var DAYS_OF_WEEK = ["\x02", /** substitution token to support parsing */
"Sunday", /** DAYS_OF_WEEK[1] = "Sunday" */
"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var DAYS_OF_WEEK_ABBREVIATED = ["\x03", /** substitution token to support parsing */
"Sun", /** DAYS_OF_WEEK_ABBREVIATED[1] = "Sunday" */
"Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

var BLINK_DURATION_ERROR = "0.5s";
var BLINK_DURATION_WARNING = "0.75s";

var lcarsFont = "";

/**
 * The base class for all of the non component specific functionality.
 *
 * @author Perry Spagnola
 * @version 1.0
 * @since 2017-02-17
 */

var LCARS = exports.LCARS = function () {
    function LCARS() {
        _classCallCheck(this, LCARS);
    }

    /**
     * Derive the LCARS color from the LCARS properties variable.
     * <p>
     * Masks the <code>properties</code> paramenter for <code>ES_COLOR</code>, and
     * returns the color value for the color property. The eight (8) color options are:
     * <ul>
     * <li> white:       #CCDDFF
     * <li> light blue:  #5599FF
     * <li> medium blue: #3366FF
     * <li> blue:        #0011EE
     * <li> dark blue:   #000088
     * <li> yellow:      #CCA300
     * <li> orange:      #CC6600
     * <li> red:         #A30000
     * </ul>
     *
     * @param properties The composite variable that contains all of the LCARS properties of an LCARS component.
     * @return the color value for the color property specified in the LCARS <code>properties</code> paramenter.
     */


    _createClass(LCARS, null, [{
        key: "getColor",
        value: function getColor(properties) {
            var color = "";

            switch (properties & ES_COLOR) {
                case EC_WHITE:
                    return "#CCDDFF";
                case EC_L_BLUE:
                    return "#5599FF";
                case EC_M_BLUE:
                    return "#3366FF";
                case EC_BLUE:
                    return "#0011EE";
                case EC_D_BLUE:
                    return "#000088";
                case EC_YELLOW:
                    return "#CCA300";
                case EC_ORANGE:
                    return "#CC6600";
                case EC_RED:
                    return "#A30000";
                default:
                    break;
            }

            return color;
        }

        /**
         * Derive the LCARS text color from the LCARS properties variable.
         * <p>
         * Masks the <code>properties</code> paramenter for <code>ES_COLOR</code>, and
         * returns the text color value for the color property. The eight (8) color options are:
         * <ul>
         * <li> white:       #CCDDFF
         * <li> light blue:  #5599FF
         * <li> medium blue: #3366FF
         * <li> blue:        #0011EE
         * <li> dark blue:   #000088
         * <li> yellow:      #CCA300
         * <li> orange:      #CC6600
         * <li> red:         #A30000
         * </ul>
         *
         * @param properties The composite variable that contains all of the LCARS properties of an LCARS component.
         * @return the text color value for the color property specified in the LCARS <code>properties</code> paramenter.
         */

    }, {
        key: "getTextColor",
        value: function getTextColor(properties) {

            switch (properties & ES_COLOR) {
                case EC_BLUE:
                case EC_D_BLUE:
                case EC_RED:
                    return "#CCDDFF";
                case EC_WHITE:
                case EC_YELLOW:
                case EC_ORANGE:
                case EC_L_BLUE:
                case EC_M_BLUE:
                default:
                    return "#000000";
            }
        }

        /**
         * Simple setter for setting the LCARS font to the font specified by the
         * argument.
         *
         * @param font the font to set as the LCARS font
         */

    }, {
        key: "setFont",
        value: function setFont(font) {
            lcarsFont = font;
        }

        /**
         * Simple getter for getting the LCARS font.
         *
         * @return the font that was set as the LCARS font
         */

    }, {
        key: "getFont",
        value: function getFont() {
            return lcarsFont;
        }

        /**
         * Derive the LCARS font size from the LCARS properties variable.
         * <p>
         * Masks the <code>properties</code> paramenter for <code>ES_FONT</code>, and
         * returns the font size value for the font size property.
         *
         * @param properties The composite variable that contains all of the LCARS properties of an LCARS component.
         * @return the color value for the color property specified in the LCARS <code>properties</code> paramenter.
         */

    }, {
        key: "getLCARSFontSize",
        value: function getLCARSFontSize(properties) {
            switch (properties & ES_FONT) {
                case EF_TITLE:
                    return FONT_TITLE_SIZE;
                case EF_SUBTITLE:
                    return FONT_SUBTITLE_SIZE;
                case EF_BUTTON:
                    return FONT_BUTTON_SIZE;
                case EF_TINY:
                    return FONT_TINY_SIZE;
                case EF_BODY:
                default:
                    return FONT_BODY_SIZE;
            }
        }

        /**
         * Uses canvas.measureText to compute and return the width of the given text of given font in pixels.
         *
         * @param {String} text The text to be rendered.
         * @param {String} font The css font descriptor that text is to be rendered with (e.g. "Arial Narrow").
         * @return the width of the <code>text</code> argument in context of the <code>font</code> argument.
         */

    }, {
        key: "getTextWidth",
        value: function getTextWidth(text, font) {
            var canvas = document.createElement("canvas");
            var context = canvas.getContext("2d");
            context.font = font;
            var metrics = context.measureText(text);
            return metrics.width;
        }

        /**
         * Uses canvas.measureText to compute and return the width of the given text of given font in pixels.
         * Calls <code>LCARS.getTextWidth()</code> for each character of the String argument <code>text</code>,
         * and returns the sum of the length of the characters.
         *
         * @param {String} text The text to be rendered.
         * @param {String} font The css font descriptor that text is to be rendered with (e.g. "Arial Narrow").
         * @return the width of the <code>text</code> argument in context of the <code>font</code> argument.
         */

    }, {
        key: "getTextWidth2",
        value: function getTextWidth2(text, font) {
            var width = 0;

            for (var i = 0; i < text.length; i++) {
                width += LCARS.getTextWidth(text.charAt(i), font);
            }

            return width;
        }
    }, {
        key: "getTextWidth3",
        value: function getTextWidth3(text, fontSize) {
            var width = 0;
            var scaleFactor = fontSize / 100;

            for (var i = 0; i < text.length; i++) {
                width = width + LCARS_CHAR_SIZE_ARRAY[text.charCodeAt(i)];
            }

            return width * scaleFactor;
        }
    }, {
        key: "svgNS",
        get: function get() {
            return svgNS;
        }
    }, {
        key: "ES_SHAPE",
        get: function get() {
            return ES_SHAPE;
        }
    }, {
        key: "ES_LABEL",
        get: function get() {
            return ES_LABEL;
        }
    }, {
        key: "ES_COLOR",
        get: function get() {
            return ES_COLOR;
        }
    }, {
        key: "ES_FONT",
        get: function get() {
            return ES_FONT;
        }
    }, {
        key: "ES_BEHAVIOR",
        get: function get() {
            return ES_BEHAVIOR;
        }
    }, {
        key: "ES_CLASS",
        get: function get() {
            return ES_CLASS;
        }
    }, {
        key: "ES_SELECTED",
        get: function get() {
            return ES_SELECTED;
        }
    }, {
        key: "ES_DISABLED",
        get: function get() {
            return ES_DISABLED;
        }
    }, {
        key: "ES_SELDISED",
        get: function get() {
            return ES_SELDISED;
        }
    }, {
        key: "ES_STATIC",
        get: function get() {
            return ES_STATIC;
        }
    }, {
        key: "ES_BLINKING",
        get: function get() {
            return ES_BLINKING;
        }
    }, {
        key: "ES_MODAL",
        get: function get() {
            return ES_MODAL;
        }
    }, {
        key: "ES_SILENT",
        get: function get() {
            return ES_SILENT;
        }
    }, {
        key: "ES_NONE",
        get: function get() {
            return ES_NONE;
        }
    }, {
        key: "ES_SHAPE_NW",
        get: function get() {
            return ES_SHAPE_NW;
        }
    }, {
        key: "ES_SHAPE_SW",
        get: function get() {
            return ES_SHAPE_SW;
        }
    }, {
        key: "ES_SHAPE_NE",
        get: function get() {
            return ES_SHAPE_NE;
        }
    }, {
        key: "ES_SHAPE_SE",
        get: function get() {
            return ES_SHAPE_SE;
        }
    }, {
        key: "ES_OUTLINE",
        get: function get() {
            return ES_OUTLINE;
        }
    }, {
        key: "ES_LABEL_SE",
        get: function get() {
            return ES_LABEL_SE;
        }
    }, {
        key: "ES_LABEL_S",
        get: function get() {
            return ES_LABEL_S;
        }
    }, {
        key: "ES_LABEL_SW",
        get: function get() {
            return ES_LABEL_SW;
        }
    }, {
        key: "ES_LABEL_W",
        get: function get() {
            return ES_LABEL_W;
        }
    }, {
        key: "ES_LABEL_NW",
        get: function get() {
            return ES_LABEL_NW;
        }
    }, {
        key: "ES_LABEL_N",
        get: function get() {
            return ES_LABEL_N;
        }
    }, {
        key: "ES_LABEL_NE",
        get: function get() {
            return ES_LABEL_NE;
        }
    }, {
        key: "ES_LABEL_E",
        get: function get() {
            return ES_LABEL_E;
        }
    }, {
        key: "ES_LABEL_C",
        get: function get() {
            return ES_LABEL_C;
        }
    }, {
        key: "ES_RECT_RND",
        get: function get() {
            return ES_RECT_RND;
        }
    }, {
        key: "ES_RECT_RND_E",
        get: function get() {
            return ES_RECT_RND_E;
        }
    }, {
        key: "ES_RECT_RND_W",
        get: function get() {
            return ES_RECT_RND_W;
        }
    }, {
        key: "EC_WHITE",
        get: function get() {
            return EC_WHITE;
        }
    }, {
        key: "EC_L_BLUE",
        get: function get() {
            return EC_L_BLUE;
        }
    }, {
        key: "EC_M_BLUE",
        get: function get() {
            return EC_M_BLUE;
        }
    }, {
        key: "EC_BLUE",
        get: function get() {
            return EC_BLUE;
        }
    }, {
        key: "EC_D_BLUE",
        get: function get() {
            return EC_D_BLUE;
        }
    }, {
        key: "EC_YELLOW",
        get: function get() {
            return EC_YELLOW;
        }
    }, {
        key: "EC_ORANGE",
        get: function get() {
            return EC_ORANGE;
        }
    }, {
        key: "EC_RED",
        get: function get() {
            return EC_RED;
        }
    }, {
        key: "EF_NORMAL",
        get: function get() {
            return EF_NORMAL;
        }
    }, {
        key: "EF_TITLE",
        get: function get() {
            return EF_TITLE;
        }
    }, {
        key: "EF_SUBTITLE",
        get: function get() {
            return EF_SUBTITLE;
        }
    }, {
        key: "EF_BUTTON",
        get: function get() {
            return EF_BUTTON;
        }
    }, {
        key: "EF_BODY",
        get: function get() {
            return EF_BODY;
        }
    }, {
        key: "EF_TINY",
        get: function get() {
            return EF_TINY;
        }
    }, {
        key: "FONT_TITLE_SIZE",
        get: function get() {
            return FONT_TITLE_SIZE;
        }
    }, {
        key: "FONT_SUBTITLE_SIZE",
        get: function get() {
            return FONT_SUBTITLE_SIZE;
        }
    }, {
        key: "FONT_BUTTON_SIZE",
        get: function get() {
            return FONT_BUTTON_SIZE;
        }
    }, {
        key: "FONT_BODY_SIZE",
        get: function get() {
            return FONT_BODY_SIZE;
        }
    }, {
        key: "FONT_TINY_SIZE",
        get: function get() {
            return FONT_TINY_SIZE;
        }
    }, {
        key: "LCARS_FONT",
        get: function get() {
            return LCARS_FONT;
        }
    }, {
        key: "LCARS_FONT_MOBILE",
        get: function get() {
            return LCARS_FONT_MOBILE;
        }
    }, {
        key: "EKP_AUX_KEYS",
        get: function get() {
            return EKP_AUX_KEYS;
        }
    }, {
        key: "KP_BUTTON_X_OFFSET",
        get: function get() {
            return KP_BUTTON_X_OFFSET;
        }
    }, {
        key: "KP_BUTTON_Y_OFFSET",
        get: function get() {
            return KP_BUTTON_Y_OFFSET;
        }
    }, {
        key: "KP_BUTTON_X_SPACE",
        get: function get() {
            return KP_BUTTON_X_SPACE;
        }
    }, {
        key: "KP_BUTTON_Y_SPACE",
        get: function get() {
            return KP_BUTTON_Y_SPACE;
        }
    }, {
        key: "TEXT_Y_INSET",
        get: function get() {
            return TEXT_Y_INSET;
        }
    }, {
        key: "TEXT_X_INSET",
        get: function get() {
            return TEXT_X_INSET;
        }
    }, {
        key: "LCARS_BTN_HEIGHT",
        get: function get() {
            return LCARS_BTN_HEIGHT;
        }
    }, {
        key: "LCARS_BTN_WIDTH",
        get: function get() {
            return LCARS_BTN_WIDTH;
        }
    }, {
        key: "LCARS_BTN_SPACING",
        get: function get() {
            return LCARS_BTN_SPACING;
        }
    }, {
        key: "LCARS_SPACE",
        get: function get() {
            return LCARS_SPACE;
        }
    }, {
        key: "LCARS_CORNER_HEIGHT",
        get: function get() {
            return LCARS_CORNER_HEIGHT;
        }
    }, {
        key: "BLINK_DURATION_ERROR",
        get: function get() {
            return BLINK_DURATION_ERROR;
        }
    }, {
        key: "BLINK_DURATION_WARNING",
        get: function get() {
            return BLINK_DURATION_WARNING;
        }
    }, {
        key: "MONTHS",
        get: function get() {
            return MONTHS;
        }
    }, {
        key: "MONTHS_ABBREVIATED",
        get: function get() {
            return MONTHS_ABBREVIATED;
        }
    }, {
        key: "DAYS",
        get: function get() {
            return DAYS;
        }
    }, {
        key: "DAYS_OF_WEEK",
        get: function get() {
            return DAYS_OF_WEEK;
        }
    }, {
        key: "DAYS_OF_WEEK_ABBREVIATED",
        get: function get() {
            return DAYS_OF_WEEK_ABBREVIATED;
        }
    }, {
        key: "SHAPE_SUFFIX",
        get: function get() {
            return SHAPE_SUFFIX;
        }
    }, {
        key: "TEXT_SUFFIX",
        get: function get() {
            return TEXT_SUFFIX;
        }
    }, {
        key: "AUX_TEXT_SUFFIX",
        get: function get() {
            return AUX_TEXT_SUFFIX;
        }
    }]);

    return LCARS;
}();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LCARSEllipsisSpinner = exports.LCARSCalendar = exports.LCARSClock = exports.LCARSClockAnalog = exports.LCARSKeypad = exports.LCARSTextArea = exports.LCARSText = exports.LCARSButton = exports.LCARSIcon = exports.LCARSIndicator = exports.LCARSRectangle = exports.LCARSCorner = exports.LCARSComponent = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LCARS = __webpack_require__(0);

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * LCARSComponent class
 */
var LCARSComponent = exports.LCARSComponent = function () {
    function LCARSComponent(id, label, x, y, properties) {
        _classCallCheck(this, LCARSComponent);

        this.composite = false;
        this.id = id;
        this.label = label;
        this.x = x;
        this.y = y;
        this.properties = properties;
        this.static = properties & _LCARS.LCARS.ES_STATIC;
        this.blinking = properties & _LCARS.LCARS.ES_BLINKING;
        this.color = this.getColor();
        this.overColor = this.getOverColor();
        this.downColor = this.getDownColor();
        this.textColor = this.getTextColor();
        this.fontSize = _LCARS.LCARS.getLCARSFontSize(this.properties);

        this.element = document.createElementNS(_LCARS.LCARS.svgNS, "g");
        this.element.setAttribute("id", this.id);
        this.element.setAttribute("x", 0);
        this.element.setAttribute("y", 0);
        this.element.setAttribute("transform", 'translate(' + x + ',' + y + ')');

        this.shapeElement = document.createElementNS(_LCARS.LCARS.svgNS, "path");
        this.textElement = document.createElementNS(_LCARS.LCARS.svgNS, "text");
        this.iconElement = document.createElementNS(_LCARS.LCARS.svgNS, "path");

        /** Create the DOM object for shape animation, and set its attributes. */
        this.animateElement = document.createElementNS(_LCARS.LCARS.svgNS, "animate");
        this.animateElement.setAttribute("id", this.element.id + "_shapeAnimate");
        this.animateElement.setAttribute("attributeType", "XML");
        this.animateElement.setAttribute("attributeName", "fill");
        this.animateElement.setAttribute("repeatCount", "indefinite");

        /** Create the DOM object for the shape's text animation, and set its attributes. */
        this.textAnimateElement = document.createElementNS(_LCARS.LCARS.svgNS, "animate");
        this.textAnimateElement.setAttribute("id", this.element.id + "_textAnimate");
        this.textAnimateElement.setAttribute("attributeType", "XML");
        this.textAnimateElement.setAttribute("attributeName", "fill");
        this.textAnimateElement.setAttribute("repeatCount", "indefinite");

        /** Set the component's dynamics. */
        this.setComponentDynamics();
    }

    _createClass(LCARSComponent, [{
        key: "getElement",
        value: function getElement() {
            return this.element;
        }
    }, {
        key: "getShapeElement",
        value: function getShapeElement() {
            return this.shapeElement;
        }
    }, {
        key: "getTextElement",
        value: function getTextElement() {
            return this.textElement;
        }
    }, {
        key: "addEventListener",
        value: function addEventListener(event, callback) {
            this.element.addEventListener(event, callback, false);
        }
    }, {
        key: "getColor",
        value: function getColor() {
            return _LCARS.LCARS.getColor(this.properties);
        }
    }, {
        key: "getTextColor",
        value: function getTextColor() {

            switch (this.properties & _LCARS.LCARS.ES_COLOR) {
                case _LCARS.LCARS.EC_BLUE:
                case _LCARS.LCARS.EC_D_BLUE:
                case _LCARS.LCARS.EC_RED:
                    return "#CCDDFF";
                case _LCARS.LCARS.EC_WHITE:
                case _LCARS.LCARS.EC_YELLOW:
                case _LCARS.LCARS.EC_ORANGE:
                case _LCARS.LCARS.EC_L_BLUE:
                case _LCARS.LCARS.EC_M_BLUE:
                default:
                    return "#000000";
            }
        }
    }, {
        key: "getOverColor",
        value: function getOverColor(overrideColor) {
            var defaultReturn = "";
            var color;

            if (overrideColor == null) {
                color = this.properties & _LCARS.LCARS.ES_COLOR;
            } else {
                color = overrideColor;
            }

            switch (color) {
                case _LCARS.LCARS.EC_WHITE:
                    return "#FFFFFF";
                case _LCARS.LCARS.EC_L_BLUE:
                    return "#77ADFF";
                case _LCARS.LCARS.EC_M_BLUE:
                    return "#5C85FF";
                case _LCARS.LCARS.EC_BLUE:
                    return "#3341F1";
                case _LCARS.LCARS.EC_D_BLUE:
                    return "#3333A0";
                case _LCARS.LCARS.EC_YELLOW:
                    return "#D6B533";
                case _LCARS.LCARS.EC_ORANGE:
                    return "#D68533";
                case _LCARS.LCARS.EC_RED:
                    return "#B53333";
                default:
                    break;
            }

            return defaultReturn;
        }
    }, {
        key: "getDownColor",
        value: function getDownColor(overrideColor) {
            var defaultReturn = "";
            var color;

            if (overrideColor == null) {
                color = this.properties & _LCARS.LCARS.ES_COLOR;
            } else {
                color = overrideColor;
            }

            switch (color) {
                case _LCARS.LCARS.EC_WHITE:
                    return "#B8C7E6";
                case _LCARS.LCARS.EC_L_BLUE:
                    return "#447ACC";
                case _LCARS.LCARS.EC_M_BLUE:
                    return "#2952CC";
                case _LCARS.LCARS.EC_BLUE:
                    return "#000EBE";
                case _LCARS.LCARS.EC_D_BLUE:
                    return "#00006D";
                case _LCARS.LCARS.EC_YELLOW:
                    return "#A38200";
                case _LCARS.LCARS.EC_ORANGE:
                    return "#A35200";
                case _LCARS.LCARS.EC_RED:
                    return "#820000";
                default:
                    break;
            }

            return defaultReturn;
        }

        /**
         * Method to create a string of color values from dark to light derived from the
         * LCARS color palette. I uses the Down color, the normal color, and the Over
         * color in that order.
         *
         * @param color the color to derive the string of colors from
         * @return the string of color values
         */

    }, {
        key: "getBlinkColors",
        value: function getBlinkColors(color) {

            if (color == null) {
                color = this.properties & _LCARS.LCARS.ES_COLOR;
            }

            var colorString = "#000;" + this.getDownColor(color) + ";" + _LCARS.LCARS.getColor(color) + ";" + this.getOverColor(color);

            return colorString;
        }

        /**
         * Method to set the visual dynamics of the component. If the component's <code>LCARS.ES_STATIC</code>
         * property is not set, the following dynamics are covered:
         * <ul>
         * <li> <code>onmouseover</code>
         * <li> <code>onmousedown</code>
         * <li> <code>onmouseup</code>
         * <li> <code>onmouseout</code>
         * </ul>
         */

    }, {
        key: "setComponentDynamics",
        value: function setComponentDynamics() {
            if (this.static != _LCARS.LCARS.ES_STATIC) {
                this.shapeElement.setAttribute("onmouseover", "evt.target.setAttribute('fill','" + this.overColor + "')");
                this.shapeElement.setAttribute("onmouseout", "evt.target.setAttribute('fill','" + this.color + "')");

                this.shapeElement.setAttribute("onclick", "evt.target.setAttribute('fill','" + this.downColor + "'); " + "setTimeout(function(){evt.target.setAttribute('fill','" + this.color + "')}, 250)");
            }

            if (this.blinking) {
                this.setBlinking(true);
            }
        }
    }, {
        key: "getTextX",
        value: function getTextX() {
            var x = 0;

            switch (this.properties & _LCARS.LCARS.ES_LABEL) {
                case _LCARS.LCARS.ES_LABEL_C:
                case _LCARS.LCARS.ES_LABEL_S:
                case _LCARS.LCARS.ES_LABEL_N:
                    x = this.width / 2;
                    break;
                case _LCARS.LCARS.ES_LABEL_SW:
                case _LCARS.LCARS.ES_LABEL_W:
                case _LCARS.LCARS.ES_LABEL_NW:
                    x = _LCARS.LCARS.TEXT_X_INSET;
                    break;
                case _LCARS.LCARS.ES_LABEL_NE:
                case _LCARS.LCARS.ES_LABEL_E:
                case _LCARS.LCARS.ES_LABEL_SE:
                default:
                    x = this.width - _LCARS.LCARS.TEXT_X_INSET;
                    break;
            }

            return x;
        }
    }, {
        key: "getTextY",
        value: function getTextY() {
            var y = 0;

            switch (this.properties & _LCARS.LCARS.ES_LABEL) {
                case _LCARS.LCARS.ES_LABEL_C:
                case _LCARS.LCARS.ES_LABEL_W:
                case _LCARS.LCARS.ES_LABEL_E:
                    y = this.height / 2 + _LCARS.LCARS.FONT_BUTTON_SIZE / 2;
                    break;
                case _LCARS.LCARS.ES_LABEL_NW:
                case _LCARS.LCARS.ES_LABEL_N:
                case _LCARS.LCARS.ES_LABEL_NE:
                    y = _LCARS.LCARS.FONT_BUTTON_SIZE;
                    break;
                case _LCARS.LCARS.ES_LABEL_S:
                case _LCARS.LCARS.ES_LABEL_SW:
                case _LCARS.LCARS.ES_LABEL_SE:
                default:
                    y = this.height - _LCARS.LCARS.TEXT_Y_INSET;
                    break;
            }

            return y;
        }
    }, {
        key: "getTextAnchor",
        value: function getTextAnchor() {
            var textAnchor = "";

            switch (this.properties & _LCARS.LCARS.ES_LABEL) {
                case _LCARS.LCARS.ES_LABEL_C:
                case _LCARS.LCARS.ES_LABEL_S:
                case _LCARS.LCARS.ES_LABEL_N:
                    textAnchor = "middle";
                    break;
                case _LCARS.LCARS.ES_LABEL_SW:
                case _LCARS.LCARS.ES_LABEL_W:
                case _LCARS.LCARS.ES_LABEL_NW:
                    textAnchor = "start";
                    break;
                case _LCARS.LCARS.ES_LABEL_NE:
                case _LCARS.LCARS.ES_LABEL_E:
                case _LCARS.LCARS.ES_LABEL_SE:
                default:
                    textAnchor = "end";
                    break;
            }

            return textAnchor;
        }
    }, {
        key: "drawShape",
        value: function drawShape() {
            var rectString = "M0,0";

            var westEndString;
            var eastEndString;
            var northString = " l";
            var southString = " l-";

            var hLength;

            var rectType = this.properties & _LCARS.LCARS.ES_RECT_RND;

            /** Create West end string. */
            switch (rectType) {
                case _LCARS.LCARS.ES_RECT_RND:
                case _LCARS.LCARS.ES_RECT_RND_W:
                    westEndString = " m" + this.height / 2 + "," + this.height + " c-" + this.height * .65 + ",0 -" + this.height * .65 + ",-" + this.height + " 0,-" + this.height;
                    break;
                case _LCARS.LCARS.ES_RECT_RND_E:
                default:
                    westEndString = " m0," + this.height + " l0,-" + this.height;
                    break;
            }

            /** Create the North and South edge strings. */
            switch (rectType) {
                case _LCARS.LCARS.ES_RECT_RND:
                    hLength = this.width - this.height;
                    break;
                case _LCARS.LCARS.ES_RECT_RND_E:
                case _LCARS.LCARS.ES_RECT_RND_W:
                    hLength = this.width - this.height / 2;
                    break;
                default:
                    hLength = this.width;
                    break;
            }
            northString += hLength + ",0";
            southString += hLength + ",0";

            /** Create the East end string */
            switch (rectType) {
                case _LCARS.LCARS.ES_RECT_RND:
                case _LCARS.LCARS.ES_RECT_RND_E:
                    eastEndString = " c" + this.height * .65 + ",0 " + this.height * .65 + "," + this.height + " 0," + this.height;
                    break;
                case _LCARS.LCARS.ES_RECT_RND_W:
                default:
                    eastEndString = " l0," + this.height;
                    break;
            }

            /** Create the rectangle path string. */
            rectString += westEndString + northString + eastEndString + southString;

            /** Create the DOM object, and set its attributes. */
            this.shapeElement.setAttribute("d", rectString);
            this.setShapeAttributes();

            this.element.appendChild(this.shapeElement);
        }
    }, {
        key: "setPosition",
        value: function setPosition(x, y) {
            this.element.setAttribute("transform", 'translate(' + x + ',' + y + ')');
        }
    }, {
        key: "setShapeAttributes",
        value: function setShapeAttributes() {
            this.shapeElement.setAttribute("id", this.id + _LCARS.LCARS.SHAPE_SUFFIX);
            this.shapeElement.setAttribute("fill", this.color);
            if (this.properties & _LCARS.LCARS.ES_DISABLED) {
                this.shapeElement.setAttribute("stroke", this.color);
                this.shapeElement.setAttribute("stroke-width", '2');
                this.shapeElement.setAttribute("fill-opacity", '0.1');
            } else {
                this.shapeElement.setAttribute("fill-opacity", '1.0');
            }
        }
    }, {
        key: "setEnabled",
        value: function setEnabled(enabled) {
            if (enabled) {
                this.element.setAttribute("pointer-events", "all");
                this.shapeElement.setAttribute("fill-opacity", '1.0');
                this.shapeElement.setAttribute("stroke-width", '0');
                this.textElement.setAttribute("fill", this.textColor);
                this.iconElement.setAttribute("fill", this.textColor);
            } else {
                this.element.setAttribute("pointer-events", "none");
                this.shapeElement.setAttribute("stroke", this.color);
                this.shapeElement.setAttribute("stroke-width", '2');
                this.shapeElement.setAttribute("fill-opacity", '0.1');
                this.textElement.setAttribute("fill", '#585858');
                this.iconElement.setAttribute("fill", '#585858');
            }
        }

        /**
         * Method to turn blinking on and off for the component. If the <code>enabled</code> argument
         * is <code>true</code>, it creates SVG shape and text animations for the component. Component
         * color and blink animation duration can be set. If left blank or specified as null, default
         * color and animation duration will be used.
         * <p>Color must be set using the LCARS palette constants, not specific color values. Duration
         * can be set using one of two constants <code>BLINK_DURATION_ERROR</code> or
         * <code>BLINK_DURATION_WARNING</code>, or it can be set to an arbitrary value using the form
         * <code>"0.0s"</code>. Note that the "s" suffix stands for seconds.
         *
         * @param enabled <code>true</code> if blinking is enabled, <code>false</code> if not
         * @param color the color to blink the component, default component color if null
         * @param duration the duration of the blink animation in the form <code>"0.0s"</code>, the "s" is for seconds, default if null
         */

    }, {
        key: "setBlinking",
        value: function setBlinking(enabled, color, duration) {
            /* If the duration argument is null, set a default blink duration. */
            if (duration == null) {
                duration = _LCARS.LCARS.BLINK_DURATION_WARNING;
            }

            /* If blinking is enabled... */
            if (enabled) {
                /* Update the DOM object for shape animation, with color and duration attributes. */
                this.animateElement.setAttribute("values", this.getBlinkColors(color));
                this.animateElement.setAttribute("dur", duration);
                /* Append the animation element to the shape element. */
                this.shapeElement.appendChild(this.animateElement);

                /* Update the DOM object for the shape's text animation, with color and duration attributes. */
                this.textAnimateElement.setAttribute("values", "#000;" + _LCARS.LCARS.getTextColor(color));
                this.textAnimateElement.setAttribute("dur", duration);
                /* Append the animation element to the text element. */
                this.textElement.appendChild(this.textAnimateElement);
            }
            /* Else if blinking is not enabled... */
            else {
                    /* If the shape animate element exists, remove it. */
                    if (this.animateElement != null) {
                        this.animateElement.remove();
                    }
                    /* If the text animate element exists, remove it. */
                    if (this.textAnimateElement != null) {
                        this.textAnimateElement.remove();
                    }
                }
        }

        /**
         * Method to blink a visible LCARS component "off" (make invisible) for 0.1 seconds.
         * Used for things like activity indicators.
         */

    }, {
        key: "offBlink",
        value: function offBlink(_duration) {
            var duration = _duration;
            if (duration == undefined) {
                duration = 100;
            }

            var thisObject = this;
            thisObject.setVisible(false);
            setTimeout(function () {
                thisObject.setVisible(true);
            }, duration);
        }

        /**
         * Method to blink an invisible LCARS component "on" (make visible) for 0.1 seconds.
         * Used for things like activity indicators.
         */

    }, {
        key: "onBlink",
        value: function onBlink(_duration) {
            var duration = _duration;
            if (duration == undefined) {
                duration = 100;
            }

            var thisObject = this;
            thisObject.setVisible(true);
            setTimeout(function () {
                thisObject.setVisible(false);
            }, duration);
        }

        /**
         * Method to blink an enabled LCARS component "off" (make disabled) for 0.1 seconds.
         * Used for things like activity indicators.
         */

    }, {
        key: "offBlinkOutline",
        value: function offBlinkOutline(_duration) {
            var duration = _duration;
            if (duration == undefined) {
                duration = 100;
            }

            var thisObject = this;
            thisObject.setEnabled(false);
            setTimeout(function () {
                thisObject.setEnabled(true);
            }, duration);
        }

        /**
         * Method to blink a disabled LCARS component "on" (make enabled) for 0.1 seconds.
         * Used for things like activity indicators.
         */

    }, {
        key: "onBlinkOutline",
        value: function onBlinkOutline(_duration) {
            var duration = _duration;
            if (duration == undefined) {
                duration = 100;
            }

            var thisObject = this;
            thisObject.setEnabled(true);
            setTimeout(function () {
                thisObject.setEnabled(false);
            }, duration);
        }

        /**
         * Method to draw the text of the LCARS component, if any. The text element is created
         * in the constructor. This method simply sets the text attributes, and the
         * component label specified in the constructor. It then appends the text element
         * to the parent SVG element.
         */

    }, {
        key: "drawText",
        value: function drawText() {
            this.setTextAttributes();
            this.setText(this.label);

            this.element.appendChild(this.textElement);
        }

        /**
         * Method to se the text attributes of the LCARS component. The text element is created
         * in the constructor. This method simply sets the text attributes that are specified
         * in the constructor. The attributes being set are:
         * <ul>
         * <li> component id</li>
         * <li> x coordinate</li>
         * <li> x coordinate</li>
         * <li> text anchor location</li>
         * <li> fill color dependent on enable/disable status of the component</li>
         * <li> font family</li>
         * <li> font size</li>
         * <li> pointer events, text elements do not respond to pointer events</li>
         * </ul>
         */

    }, {
        key: "setTextAttributes",
        value: function setTextAttributes() {
            this.textElement.setAttribute("id", this.id + _LCARS.LCARS.TEXT_SUFFIX);
            this.textElement.setAttribute("x", this.getTextX());
            this.textElement.setAttribute("y", this.getTextY());
            this.textElement.setAttribute("text-anchor", this.getTextAnchor());
            if (this.properties & _LCARS.LCARS.ES_DISABLED) {
                this.textElement.setAttribute("fill", '#585858');
            } else {
                this.textElement.setAttribute("fill", this.textColor);
            }
            this.textElement.setAttribute("font-family", _LCARS.LCARS.getFont());
            this.textElement.setAttribute("font-size", this.fontSize);
            this.textElement.setAttribute("pointer-events", "none");
        }

        /**
         * Method to set the LCARS component's text element to the string specified by the argument.
         *
         * @param textString the text to set for the component
         */

    }, {
        key: "setText",
        value: function setText(textString) {
            this.textElement.textContent = textString;
        }

        /**
         * Method to set the LCARS component's text element's font size to the size specified by the argument.
         * It also sets the object's <code>fontSize</code> attribute.
         *
         * @param textFontSize the font size to set for the component's text element
         */

    }, {
        key: "setTextFontSize",
        value: function setTextFontSize(textFontSize) {
            this.fontSize = textFontSize;
            this.textElement.setAttribute("font-size", this.fontSize);
        }

        /**
         * Method to control the visibility of the LCARS component. If the argument is set to
         * <code>false</code>, the component will be invisible. If <code>true</code>, the
         * component will be visible.
         *
         * @param visible visible, if <code>true</code>, invisible, if <code>false</code>
         */

    }, {
        key: "setVisible",
        value: function setVisible(visible) {
            if (visible) {
                this.element.setAttributeNS(null, 'display', 'inline');
            } else {
                this.element.setAttributeNS(null, 'display', 'none');
            }
        }
    }, {
        key: "setIcon",
        value: function setIcon(svgString) {
            this.iconScale = " scale(1.5) ";

            this.iconElement.setAttribute("d", svgString);
            this.iconElement.setAttribute("transform", this.iconScale);
            //this.iconElement.setAttribute("fill", this.getTextColor());
            if (this.properties & _LCARS.LCARS.ES_DISABLED) {
                this.iconElement.setAttribute("fill", '#585858');
            } else {
                this.iconElement.setAttribute("fill", this.textColor);
            }

            this.element.appendChild(this.iconElement);
        }
    }, {
        key: "setIconColor",
        value: function setIconColor(color) {
            this.iconElement.setAttribute("fill", _LCARS.LCARS.getColor(color));
        }
    }, {
        key: "setIconPosition",
        value: function setIconPosition(location) {
            this.iconTranslate = " translate(" + this.getIconX(location) + "," + this.getIconY(location) + ") ";
            this.iconElement.setAttribute("transform", this.iconTranslate + this.iconScale);
        }
    }, {
        key: "getIconX",
        value: function getIconX(location) {
            var x = 0;

            switch (location & _LCARS.LCARS.ES_LABEL) {
                case _LCARS.LCARS.ES_LABEL_C:
                case _LCARS.LCARS.ES_LABEL_S:
                case _LCARS.LCARS.ES_LABEL_N:
                    x = this.width / 2 - 24 * 1.5 / 2;
                    break;
                case _LCARS.LCARS.ES_LABEL_SW:
                case _LCARS.LCARS.ES_LABEL_W:
                case _LCARS.LCARS.ES_LABEL_NW:
                    x = 24 * 1.5 / 2;
                    break;
                case _LCARS.LCARS.ES_LABEL_NE:
                case _LCARS.LCARS.ES_LABEL_E:
                case _LCARS.LCARS.ES_LABEL_SE:
                default:
                    x = this.width - (24 * 1.5 + 24 * 1.5 / 2);
                    break;
            }

            return x;
        }
    }, {
        key: "getIconY",
        value: function getIconY(location) {
            var y = 0;

            switch (location & _LCARS.LCARS.ES_LABEL) {
                case _LCARS.LCARS.ES_LABEL_C:
                case _LCARS.LCARS.ES_LABEL_W:
                case _LCARS.LCARS.ES_LABEL_E:
                case _LCARS.LCARS.ES_LABEL_NW:
                case _LCARS.LCARS.ES_LABEL_N:
                case _LCARS.LCARS.ES_LABEL_NE:
                case _LCARS.LCARS.ES_LABEL_S:
                case _LCARS.LCARS.ES_LABEL_SW:
                case _LCARS.LCARS.ES_LABEL_SE:
                default:
                    y = this.height / 2 - 24 * 1.5 / 2;
                    break;
            }

            return y;
        }
    }]);

    return LCARSComponent;
}();

/**
 * LCARSCorner component
 */


var LCARSCorner = exports.LCARSCorner = function (_LCARSComponent) {
    _inherits(LCARSCorner, _LCARSComponent);

    function LCARSCorner(name, label, x, y, width, height, properties) {
        _classCallCheck(this, LCARSCorner);

        var _this = _possibleConstructorReturn(this, (LCARSCorner.__proto__ || Object.getPrototypeOf(LCARSCorner)).call(this, name, label, x, y, properties));

        _this.width = width;
        _this.height = _LCARS.LCARS.LCARS_CORNER_HEIGHT + (height - 1 < 0 ? 0 : height - 1) * _LCARS.LCARS.LCARS_BTN_HEIGHT + (height - 1 < 0 ? 0 : height - 1) * _LCARS.LCARS.LCARS_BTN_SPACING;
        _this.shape = properties & _LCARS.LCARS.ES_SHAPE;

        if ((_this.properties & _LCARS.LCARS.ES_FONT) == _LCARS.LCARS.EF_NORMAL) {
            _this.fontSize = _LCARS.LCARS.FONT_BUTTON_SIZE; // the default font for corner components
        }
        _this.drawShape();
        _this.drawText();

        return _this;
    }

    _createClass(LCARSCorner, [{
        key: "drawShape",
        value: function drawShape() {
            var pathString = "M0,0";
            var armStringW = this.width - 185 + ",0 l0,30 l-" + (this.width - 185);
            var armStringE = this.width - 185 + ",0 l0,-30 l" + (this.width - 185);
            var sideStringT = " l0," + (this.height - _LCARS.LCARS.LCARS_CORNER_HEIGHT) + " l-150,0 l0,-" + (this.height - _LCARS.LCARS.LCARS_CORNER_HEIGHT);
            var sideStringB = " l0,-" + (this.height - _LCARS.LCARS.LCARS_CORNER_HEIGHT) + " l150,0 l0," + (this.height - _LCARS.LCARS.LCARS_CORNER_HEIGHT);

            if (this.shape == _LCARS.LCARS.ES_SHAPE_NW) {
                pathString += " m150," + _LCARS.LCARS.LCARS_CORNER_HEIGHT + sideStringT + " l0,-17 q0,-75 75,-75 l110,0 l" + armStringW + ",0 q-35,0 -35,35 l0,27";
            } else if (this.shape == _LCARS.LCARS.ES_SHAPE_SW) {
                pathString += " m0," + (this.height - _LCARS.LCARS.LCARS_CORNER_HEIGHT) + sideStringB + "l0,27 q0,35 35,35 l" + armStringW + ",0 l-110,0 q-75,0 -75,-75 l0,-17";
            } else if (this.shape == _LCARS.LCARS.ES_SHAPE_SE) {
                pathString += " m" + (this.width - 150) + "," + (this.height - _LCARS.LCARS.LCARS_CORNER_HEIGHT) + sideStringB + " l0,17 q0,75 -75,75 l-110,0 l-" + armStringE + ",0 q35,0 35,-35 l0,-27";
            } else if (this.shape == _LCARS.LCARS.ES_SHAPE_NE) {
                pathString += " m" + (this.width - 185) + ",0 l110,0 q75,0 75,75 l0,17" + sideStringT + " l0,-27 q0,-35 -35,-35 l-" + armStringE + ",0";
            }

            this.shapeElement.setAttribute("d", pathString);
            this.setShapeAttributes();

            this.element.appendChild(this.shapeElement);
        }
    }, {
        key: "getTextX",
        value: function getTextX() {
            var x;

            switch (this.properties & _LCARS.LCARS.ES_SHAPE) {
                case _LCARS.LCARS.ES_SHAPE_SE:
                    x = this.width - 140;
                    break;
                case _LCARS.LCARS.ES_SHAPE_SW:
                    x = 140;
                    break;
                case _LCARS.LCARS.ES_SHAPE_NW:
                    x = 140;
                    break;
                case _LCARS.LCARS.ES_SHAPE_NE:
                    x = this.width - 140;
                    break;
            }

            return x;
        }
    }, {
        key: "getTextY",
        value: function getTextY() {
            var y;

            switch (this.properties & _LCARS.LCARS.ES_SHAPE) {
                case _LCARS.LCARS.ES_SHAPE_SE:
                    y = this.fontSize;
                    break;
                case _LCARS.LCARS.ES_SHAPE_SW:
                    y = this.fontSize;
                    break;
                case _LCARS.LCARS.ES_SHAPE_NW:
                    y = this.height - 10;
                    break;
                case _LCARS.LCARS.ES_SHAPE_NE:
                    y = this.height - 10;
                    break;
            }

            return y;
        }
    }, {
        key: "getTextAnchor",
        value: function getTextAnchor() {
            switch (this.properties & _LCARS.LCARS.ES_SHAPE) {
                case _LCARS.LCARS.ES_SHAPE_SE:
                    this.textAnchor = "start";
                    break;
                case _LCARS.LCARS.ES_SHAPE_SW:
                    this.textAnchor = "end";
                    break;
                case _LCARS.LCARS.ES_SHAPE_NW:
                    this.textAnchor = "end";
                    break;
                case _LCARS.LCARS.ES_SHAPE_NE:
                    this.textAnchor = "start";
                    break;
            }

            return this.textAnchor;
        }
    }, {
        key: "drawText",
        value: function drawText() {

            if (this.label != "" && this.label != null) {
                this.setTextAttributes();
                this.setText(this.label);

                this.element.appendChild(this.textElement);
            }
        }
    }]);

    return LCARSCorner;
}(LCARSComponent);

/**
 * LCARS Rctangle component
 */


var LCARSRectangle = exports.LCARSRectangle = function (_LCARSComponent2) {
    _inherits(LCARSRectangle, _LCARSComponent2);

    function LCARSRectangle(name, label, x, y, width, height, properties) {
        _classCallCheck(this, LCARSRectangle);

        // Rectangles are always static.
        var _this2 = _possibleConstructorReturn(this, (LCARSRectangle.__proto__ || Object.getPrototypeOf(LCARSRectangle)).call(this, name, label, x, y, properties | _LCARS.LCARS.ES_STATIC));

        _this2.width = width;
        _this2.height = height;

        _this2.drawShape();
        _this2.drawText();
        return _this2;
    }

    return LCARSRectangle;
}(LCARSComponent);

/**
 * LCARS Indicator component
 */


var LCARSIndicator = exports.LCARSIndicator = function (_LCARSComponent3) {
    _inherits(LCARSIndicator, _LCARSComponent3);

    function LCARSIndicator(name, label, x, y, width, height, properties) {
        _classCallCheck(this, LCARSIndicator);

        // Indicators are always static.
        var _this3 = _possibleConstructorReturn(this, (LCARSIndicator.__proto__ || Object.getPrototypeOf(LCARSIndicator)).call(this, name, label, x, y, properties | _LCARS.LCARS.ES_STATIC));

        _this3.width = width;
        _this3.height = height;

        _this3.drawShape();
        _this3.drawText();

        _this3.off(); // start in the off state
        return _this3;
    }

    _createClass(LCARSIndicator, [{
        key: "on",
        value: function on() {
            this.setBlinking(false);
            this.setEnabled(true);
        }
    }, {
        key: "off",
        value: function off() {
            this.setBlinking(false);
            this.setEnabled(false);
        }
    }, {
        key: "onBlink",
        value: function onBlink(_duration) {
            var duration = _duration;
            if (duration == undefined) {
                duration = 100;
            }
            this.onBlinkOutline(duration);
        }
    }, {
        key: "offBlink",
        value: function offBlink(_duration) {
            var duration = _duration;
            if (duration == undefined) {
                duration = 100;
            }
            this.offBlinkOutline(duration);
        }
    }, {
        key: "warning",
        value: function warning(color) {
            if (color == null || color == undefined) {
                color = _LCARS.LCARS.EC_YELLOW;
            }
            this.on();
            this.setBlinking(true, color, _LCARS.LCARS.BLINK_DURATION_WARNING);
        }
    }, {
        key: "error",
        value: function error(color) {
            if (color == null || color == undefined) {
                color = _LCARS.LCARS.EC_RED;
            }
            this.on();
            this.setBlinking(true, color, _LCARS.LCARS.BLINK_DURATION_ERROR);
        }
    }]);

    return LCARSIndicator;
}(LCARSComponent);

/**
 * LCARS Icon component
 */


var LCARSIcon = exports.LCARSIcon = function (_LCARSComponent4) {
    _inherits(LCARSIcon, _LCARSComponent4);

    function LCARSIcon(name, label, x, y, properties, svgString) {
        _classCallCheck(this, LCARSIcon);

        var _this4 = _possibleConstructorReturn(this, (LCARSIcon.__proto__ || Object.getPrototypeOf(LCARSIcon)).call(this, name, label, x, y, properties | _LCARS.LCARS.ES_STATIC));

        _this4.svgString = svgString;

        _this4.drawShape();
        return _this4;
    }

    _createClass(LCARSIcon, [{
        key: "drawShape",
        value: function drawShape() {
            this.shapeElement.setAttribute("d", this.svgString);
            this.shapeElement.setAttribute("transform", "scale(2.0)");
            this.setShapeAttributes();

            this.element.appendChild(this.shapeElement);
        }
    }, {
        key: "setShapeAttributes",
        value: function setShapeAttributes() {
            this.shapeElement.setAttribute("id", this.id + _LCARS.LCARS.SHAPE_SUFFIX);
            this.shapeElement.setAttribute("fill", this.color);
            if (this.properties & _LCARS.LCARS.ES_DISABLED) {
                this.shapeElement.setAttribute("fill-opacity", '0.4');
            } else {
                this.shapeElement.setAttribute("fill-opacity", '1.0');
            }
        }
    }, {
        key: "setEnabled",
        value: function setEnabled(enable) {
            if (enable) {
                this.shapeElement.setAttribute("fill-opacity", '1.0');
            } else {
                this.shapeElement.setAttribute("fill-opacity", '0.4');
            }
        }
    }, {
        key: "scale",
        value: function scale(scaleFactor) {
            this.shapeElement.setAttribute("transform", "scale(" + scaleFactor + ")");
        }
    }]);

    return LCARSIcon;
}(LCARSComponent);

/**
 * LCARS Button component
 */


var LCARSButton = exports.LCARSButton = function (_LCARSComponent5) {
    _inherits(LCARSButton, _LCARSComponent5);

    function LCARSButton(name, label, x, y, height, properties, auxLabel, auxLabelProperties) {
        _classCallCheck(this, LCARSButton);

        var _this5 = _possibleConstructorReturn(this, (LCARSButton.__proto__ || Object.getPrototypeOf(LCARSButton)).call(this, name, label, x, y, properties));

        _this5.auxLabel = auxLabel;
        _this5.auxLabelProperties = auxLabelProperties;

        _this5.width = _LCARS.LCARS.LCARS_BTN_WIDTH;

        if ((properties & _LCARS.LCARS.ES_RECT_RND) == 0) {
            _this5.height = height * _LCARS.LCARS.LCARS_BTN_HEIGHT + (height - 1) * _LCARS.LCARS.LCARS_BTN_SPACING;
        } else {
            _this5.height = _LCARS.LCARS.LCARS_BTN_HEIGHT;
        }

        if ((_this5.properties & _LCARS.LCARS.ES_FONT) == _LCARS.LCARS.EF_NORMAL) {
            _this5.fontSize = _LCARS.LCARS.FONT_BUTTON_SIZE; // the default font for button components
        }

        _this5.drawShape();
        _this5.drawText();

        if (_this5.auxLabel != "" && _this5.auxLabel != undefined) {
            _this5.drawAuxText();
        }
        return _this5;
    }

    _createClass(LCARSButton, [{
        key: "setAuxText",
        value: function setAuxText(textString) {
            this.auxTextElement.textContent = textString;
        }
    }, {
        key: "drawAuxText",
        value: function drawAuxText() {
            this.auxTextElement = document.createElementNS(_LCARS.LCARS.svgNS, "text");
            this.auxTextElement.setAttribute("id", this.id + _LCARS.LCARS.AUX_TEXT_SUFFIX);
            this.auxTextElement.setAttribute("x", this.getAuxTextX());
            this.auxTextElement.setAttribute("y", this.getAuxTextY());
            this.auxTextElement.setAttribute("text-anchor", this.getAuxTextAnchor());
            if (this.properties & _LCARS.LCARS.ES_DISABLED) {
                this.auxTextElement.setAttribute("fill", '#585858');
            } else {
                this.auxTextElement.setAttribute("fill", _LCARS.LCARS.getColor(this.auxLabelProperties & _LCARS.LCARS.ES_COLOR));
            }
            this.auxTextElement.setAttribute("font-family", _LCARS.LCARS.getFont());
            this.auxTextElement.setAttribute("font-size", this.getAuxLabelFontSize());
            this.auxTextElement.setAttribute("pointer-events", "none");

            this.setAuxText(this.auxLabel);

            this.element.appendChild(this.auxTextElement);
        }
    }, {
        key: "getAuxTextX",
        value: function getAuxTextX() {
            var x = 0;

            switch (this.auxLabelProperties & _LCARS.LCARS.ES_LABEL) {
                case _LCARS.LCARS.ES_LABEL_C:
                case _LCARS.LCARS.ES_LABEL_S:
                case _LCARS.LCARS.ES_LABEL_N:
                    x = this.width / 2;
                    break;
                case _LCARS.LCARS.ES_LABEL_SW:
                case _LCARS.LCARS.ES_LABEL_W:
                case _LCARS.LCARS.ES_LABEL_NW:
                    x = _LCARS.LCARS.TEXT_X_INSET;
                    break;
                case _LCARS.LCARS.ES_LABEL_NE:
                case _LCARS.LCARS.ES_LABEL_E:
                case _LCARS.LCARS.ES_LABEL_SE:
                default:
                    x = this.width - _LCARS.LCARS.TEXT_X_INSET;
                    break;
            }

            return x;
        }
    }, {
        key: "getAuxTextY",
        value: function getAuxTextY() {
            var y = 0;

            switch (this.auxLabelProperties & _LCARS.LCARS.ES_LABEL) {
                case _LCARS.LCARS.ES_LABEL_C:
                case _LCARS.LCARS.ES_LABEL_W:
                case _LCARS.LCARS.ES_LABEL_E:
                    y = this.height / 2 + _LCARS.LCARS.FONT_BUTTON_SIZE / 2;
                    break;
                case _LCARS.LCARS.ES_LABEL_NW:
                case _LCARS.LCARS.ES_LABEL_N:
                case _LCARS.LCARS.ES_LABEL_NE:
                    y = _LCARS.LCARS.FONT_BUTTON_SIZE;
                    break;
                case _LCARS.LCARS.ES_LABEL_S:
                case _LCARS.LCARS.ES_LABEL_SW:
                case _LCARS.LCARS.ES_LABEL_SE:
                default:
                    y = this.height - _LCARS.LCARS.TEXT_Y_INSET;
                    break;
            }

            return y;
        }
    }, {
        key: "getAuxTextAnchor",
        value: function getAuxTextAnchor() {
            var textAnchor = "";

            switch (this.auxLabelProperties & _LCARS.LCARS.ES_LABEL) {
                case _LCARS.LCARS.ES_LABEL_C:
                case _LCARS.LCARS.ES_LABEL_S:
                case _LCARS.LCARS.ES_LABEL_N:
                    textAnchor = "middle";
                    break;
                case _LCARS.LCARS.ES_LABEL_SW:
                case _LCARS.LCARS.ES_LABEL_W:
                case _LCARS.LCARS.ES_LABEL_NW:
                    textAnchor = "start";
                    break;
                case _LCARS.LCARS.ES_LABEL_NE:
                case _LCARS.LCARS.ES_LABEL_E:
                case _LCARS.LCARS.ES_LABEL_SE:
                default:
                    textAnchor = "end";
                    break;
            }

            return textAnchor;
        }
    }, {
        key: "getAuxLabelFontSize",
        value: function getAuxLabelFontSize() {
            switch (this.auxLabelProperties & _LCARS.LCARS.ES_FONT) {
                case _LCARS.LCARS.EF_TITLE:
                    return _LCARS.LCARS.FONT_TITLE_SIZE;
                case _LCARS.LCARS.EF_SUBTITLE:
                    return _LCARS.LCARS.FONT_SUBTITLE_SIZE;
                case _LCARS.LCARS.EF_BUTTON:
                    return _LCARS.LCARS.FONT_BUTTON_SIZE;
                case _LCARS.LCARS.EF_TINY:
                    return _LCARS.LCARS.FONT_TINY_SIZE;
                case _LCARS.LCARS.EF_BODY:
                default:
                    return _LCARS.LCARS.FONT_BODY_SIZE;
            }
        }
    }]);

    return LCARSButton;
}(LCARSComponent);

/**
 * LCARS Text component
 */


var LCARSText = exports.LCARSText = function (_LCARSComponent6) {
    _inherits(LCARSText, _LCARSComponent6);

    function LCARSText(name, label, x, y, properties) {
        _classCallCheck(this, LCARSText);

        var _this6 = _possibleConstructorReturn(this, (LCARSText.__proto__ || Object.getPrototypeOf(LCARSText)).call(this, name, label, x, y, properties));

        _this6.static = _LCARS.LCARS.ES_STATIC; // Text is always static.
        _this6.textColor = _this6.getColor();

        _this6.drawText();

        if (_this6.blinking) {
            _this6.setBlinking(true);
        }
        return _this6;
    }

    _createClass(LCARSText, [{
        key: "getTextAnchor",
        value: function getTextAnchor() {
            if ((this.properties & _LCARS.LCARS.ES_LABEL) == 0) {
                this.properties |= _LCARS.LCARS.ES_LABEL_W;
            }

            return _get(LCARSText.prototype.__proto__ || Object.getPrototypeOf(LCARSText.prototype), "getTextAnchor", this).call(this);
        }
    }, {
        key: "drawShape",
        value: function drawShape() {
            return "";
        }
    }, {
        key: "getTextX",
        value: function getTextX() {
            return 0;
        }
    }, {
        key: "getTextY",
        value: function getTextY() {
            return 0;
        }
    }, {
        key: "setBlinking",
        value: function setBlinking(enabled, color, duration) {
            /** If the duration argument is null, set a default blink duration. */
            if (duration == null) {
                duration = _LCARS.LCARS.BLINK_DURATION_WARNING;
            }

            /** If blinking is enabled... */
            if (enabled) {
                /** Create the DOM object for the shape's text animation, and set its attributes. */
                this.textAnimateElement = document.createElementNS(_LCARS.LCARS.svgNS, "animate");
                this.textAnimateElement.setAttribute("attributeType", "XML");
                this.textAnimateElement.setAttribute("attributeName", "fill");
                this.textAnimateElement.setAttribute("values", this.getBlinkColors(color));
                this.textAnimateElement.setAttribute("dur", duration);
                this.textAnimateElement.setAttribute("repeatCount", "indefinite");
                /** Append the animation element to the text element. */
                this.textElement.appendChild(this.textAnimateElement);
            }
            /** Else if blinking is not enabled... */
            else {
                    /** If the text animate element exists, remove it. */
                    if (this.textAnimateElement != null) {
                        this.textElement.removeChild(this.textAnimateElement);
                    }
                }
        }
    }]);

    return LCARSText;
}(LCARSComponent);

/**
 * LCARS TextArea component
 */


var LCARSTextArea = exports.LCARSTextArea = function (_LCARSComponent7) {
    _inherits(LCARSTextArea, _LCARSComponent7);

    function LCARSTextArea(name, label, x, y, width, rows, properties) {
        _classCallCheck(this, LCARSTextArea);

        var _this7 = _possibleConstructorReturn(this, (LCARSTextArea.__proto__ || Object.getPrototypeOf(LCARSTextArea)).call(this, name, label, x, y, properties));

        _this7.composite = false;
        _this7.static = _LCARS.LCARS.ES_STATIC; // TextAreas are always static.
        _this7.textColor = _this7.getColor();

        _this7.width = width;
        _this7.rows = rows;

        _this7.lineSpacing = 1.0;

        _this7.nowrap = true; // Default to not wrapping lines of text
        _this7.canvasFont = Math.round(_this7.fontSize * 1.1) + "pt " + _LCARS.LCARS.getFont();

        _this7.drawText();
        return _this7;
    }

    _createClass(LCARSTextArea, [{
        key: "getTextAnchor",
        value: function getTextAnchor() {
            if ((this.properties & _LCARS.LCARS.ES_LABEL) == 0) {
                this.properties |= _LCARS.LCARS.ES_LABEL_W;
            }

            return _get(LCARSTextArea.prototype.__proto__ || Object.getPrototypeOf(LCARSTextArea.prototype), "getTextAnchor", this).call(this);
        }
    }, {
        key: "drawText",
        value: function drawText() {
            this.textElement.setAttribute("id", this.id + _LCARS.LCARS.TEXT_SUFFIX);
            this.textElement.setAttribute("font-family", _LCARS.LCARS.getFont());
            this.textElement.setAttribute("font-size", this.fontSize);
            this.textElement.setAttribute("fill", this.textColor);

            this.lineElements = [];
            for (var index = 0; index < this.rows; index++) {

                this.lineElements.push(document.createElementNS(_LCARS.LCARS.svgNS, "tspan"));
                this.lineElements[index].setAttribute("id", this.id + "_" + index + _LCARS.LCARS.TEXT_SUFFIX);
                this.lineElements[index].setAttribute("x", 0);
                this.lineElements[index].setAttribute("dy", this.fontSize * this.lineSpacing);

                /* Set <code>tspan</code> attribute to preserve the space for blank lines, and initialize
                 the line as blank. */
                this.lineElements[index].setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
                this.lineElements[index].textContent = "";

                /* Add the <code>tspan</code> SVG element to the parent SVG <code>textElement</code>. */
                this.textElement.appendChild(this.lineElements[index]);
            }

            this.element.appendChild(this.textElement);

            return "";
        }
    }, {
        key: "appendLine",
        value: function appendLine(lineOfText) {

            var resultString = this.wrap(lineOfText);
            var resultStringLength = resultString.length;

            for (var index = 0; index < resultStringLength; index++) {
                this.addLine(resultString[index]);
            }
        }
    }, {
        key: "addLine",
        value: function addLine(lineOfText) {

            for (var index = 0; index < this.rows; index++) {
                if (this.lineElements[index] == "") {
                    this.lineElements[index].textContent = lineOfText;
                    break;
                } else {
                    this.scrollUp();
                    this.lineElements[this.rows - 1].textContent = lineOfText;
                    break;
                }
            }
        }
    }, {
        key: "wrap",
        value: function wrap(lineOfText) {
            var resultStrings = [];

            var words = lineOfText.split(' ');
            var w, x, i, l;
            //        var spaceWidth = LCARS.getTextWidth(' ', this.canvasFont);
            var spaceWidth = _LCARS.LCARS.getTextWidth3(' ', this.fontSize);
            var spaceLeft = this.width;

            var line = [];
            resultStrings.push(line);

            for (i = 0, l = words.length; i < l; i++) {
                w = words[i];
                //            x = LCARS.getTextWidth(w, this.canvasFont) + spaceWidth;
                x = _LCARS.LCARS.getTextWidth3(w, this.fontSize) + spaceWidth;

                if (x > spaceLeft) {
                    line = [];
                    resultStrings.push(line);
                    line.push(w);
                    spaceLeft = this.width - x;
                } else {
                    spaceLeft = spaceLeft - x;
                    line.push(w);
                }
            }

            for (i = 0, l = resultStrings.length; i < l; i++) {
                resultStrings[i] = resultStrings[i].join(' ');

                if (this.nowrap == true) {
                    if (i != 0) {
                        delete resultStrings[i];
                    }
                }
            }

            return resultStrings;
        }
    }, {
        key: "truncate",
        value: function truncate(lineOfText) {
            var resultString = [];
            //var canvasFont = Math.round(this.fontSize*0.49) + "pt " + LCARS.getFont();

            var i = 0;
            while (_LCARS.LCARS.getTextWidth(resultString, this.canvasFont) < this.width) {
                resultString[i] = lineOfText[i];
                i++;
            }

            return resultString.join('');
        }
    }, {
        key: "setNoWrap",
        value: function setNoWrap(nowrap) {
            this.nowrap = nowrap;
        }
    }, {
        key: "initTextArea",
        value: function initTextArea() {
            for (var index = 0; index < this.rows; index++) {
                this.lineElements[index].textContent = " ";
            }
        }
    }, {
        key: "setLineSpacing",
        value: function setLineSpacing(spacing) {
            this.lineSpacing = spacing;
            for (var index = 0; index < this.rows; index++) {
                this.lineElements[index].setAttribute("dy", this.fontSize * this.lineSpacing);
            }
        }
    }, {
        key: "setTextFontSize",
        value: function setTextFontSize(textFontSize) {
            this.fontSize = textFontSize;
            this.textElement.setAttribute("font-size", this.fontSize);
            this.setLineSpacing(this.lineSpacing);
        }
    }, {
        key: "setText",
        value: function setText(index, lineOfText) {
            this.lineElements[index].textContent = lineOfText;
        }
    }, {
        key: "clearText",
        value: function clearText(index) {
            this.lineElements[index].textContent = " ";
        }
    }, {
        key: "clearTextArea",
        value: function clearTextArea() {
            for (var index = 0; index < this.rows; index++) {
                this.lineElements[index].textContent = "";
            }
        }
    }, {
        key: "scrollUp",
        value: function scrollUp() {
            for (var index = 0; index < this.rows - 1; index++) {
                this.lineElements[index].textContent = this.lineElements[index + 1].textContent;
            }

            this.lineElements[this.rows - 1].textContent = "";
        }
    }, {
        key: "getTextX",
        value: function getTextX() {
            return 0;
        }
    }, {
        key: "getTextY",
        value: function getTextY() {
            return 0;
        }
    }]);

    return LCARSTextArea;
}(LCARSComponent);

/**
 * LCARS Keypad component
 */


var LCARSKeypad = exports.LCARSKeypad = function (_LCARSComponent8) {
    _inherits(LCARSKeypad, _LCARSComponent8);

    function LCARSKeypad(name, x, y, properties, auxLabelProperties) {
        _classCallCheck(this, LCARSKeypad);

        /** Keypads don't have labels */

        var _this8 = _possibleConstructorReturn(this, (LCARSKeypad.__proto__ || Object.getPrototypeOf(LCARSKeypad)).call(this, name, "", x, y, properties));

        _this8.auxLabelProperties = auxLabelProperties;

        _this8.drawShape();
        return _this8;
    }

    _createClass(LCARSKeypad, [{
        key: "drawShape",
        value: function drawShape() {

            this.button_1 = new LCARSButton("1", "1", 0, 0, 0, this.properties, " ", this.auxLabelProperties);
            this.element.appendChild(this.button_1.element);

            this.button_2 = new LCARSButton("2", "2", _LCARS.LCARS.LCARS_BTN_WIDTH + _LCARS.LCARS.KP_BUTTON_X_SPACE, 0, 0, this.properties, " ", this.auxLabelProperties);
            this.element.appendChild(this.button_2.element);

            this.button_3 = new LCARSButton("3", "3", 2 * _LCARS.LCARS.LCARS_BTN_WIDTH + 2 * _LCARS.LCARS.KP_BUTTON_X_SPACE, 0, 0, this.properties, " ", this.auxLabelProperties);
            this.element.appendChild(this.button_3.element);

            this.button_4 = new LCARSButton("4", "4", 0, _LCARS.LCARS.LCARS_BTN_HEIGHT + _LCARS.LCARS.KP_BUTTON_Y_SPACE, 0, this.properties, " ", this.auxLabelProperties);
            this.element.appendChild(this.button_4.element);

            this.button_5 = new LCARSButton("5", "5", _LCARS.LCARS.LCARS_BTN_WIDTH + _LCARS.LCARS.KP_BUTTON_X_SPACE, _LCARS.LCARS.LCARS_BTN_HEIGHT + _LCARS.LCARS.KP_BUTTON_Y_SPACE, 0, this.properties, " ", this.auxLabelProperties);
            this.element.appendChild(this.button_5.element);

            this.button_6 = new LCARSButton("6", "6", 2 * _LCARS.LCARS.LCARS_BTN_WIDTH + 2 * _LCARS.LCARS.KP_BUTTON_X_SPACE, _LCARS.LCARS.LCARS_BTN_HEIGHT + _LCARS.LCARS.KP_BUTTON_Y_SPACE, 0, this.properties, " ", this.auxLabelProperties);
            this.element.appendChild(this.button_6.element);

            this.button_7 = new LCARSButton("7", "7", 0, 2 * _LCARS.LCARS.LCARS_BTN_HEIGHT + 2 * _LCARS.LCARS.KP_BUTTON_Y_SPACE, 0, this.properties, " ", this.auxLabelProperties);
            this.element.appendChild(this.button_7.element);

            this.button_8 = new LCARSButton("8", "8", _LCARS.LCARS.LCARS_BTN_WIDTH + _LCARS.LCARS.KP_BUTTON_X_SPACE, 2 * _LCARS.LCARS.LCARS_BTN_HEIGHT + 2 * _LCARS.LCARS.KP_BUTTON_Y_SPACE, 0, this.properties, " ", this.auxLabelProperties);
            this.element.appendChild(this.button_8.element);

            this.button_9 = new LCARSButton("9", "9", 2 * _LCARS.LCARS.LCARS_BTN_WIDTH + 2 * _LCARS.LCARS.KP_BUTTON_X_SPACE, 2 * _LCARS.LCARS.LCARS_BTN_HEIGHT + 2 * _LCARS.LCARS.KP_BUTTON_Y_SPACE, 0, this.properties, " ", this.auxLabelProperties);
            this.element.appendChild(this.button_9.element);

            this.button_star = new LCARSButton("*", "*", 0, 3 * _LCARS.LCARS.LCARS_BTN_HEIGHT + 3 * _LCARS.LCARS.KP_BUTTON_Y_SPACE, 0, this.properties, " ", this.auxLabelProperties);

            this.button_0 = new LCARSButton("0", "0", _LCARS.LCARS.LCARS_BTN_WIDTH + _LCARS.LCARS.KP_BUTTON_X_SPACE, 3 * _LCARS.LCARS.LCARS_BTN_HEIGHT + 3 * _LCARS.LCARS.KP_BUTTON_Y_SPACE, 0, this.properties, " ", this.auxLabelProperties);
            this.element.appendChild(this.button_0.element);

            this.button_hash = new LCARSButton("#", "#", 2 * _LCARS.LCARS.LCARS_BTN_WIDTH + 2 * _LCARS.LCARS.KP_BUTTON_X_SPACE, 3 * _LCARS.LCARS.LCARS_BTN_HEIGHT + 3 * _LCARS.LCARS.KP_BUTTON_Y_SPACE, 0, this.properties, " ", this.auxLabelProperties);

            if ((this.auxLabelProperties & _LCARS.LCARS.ES_CLASS) == _LCARS.LCARS.EKP_AUX_KEYS) {
                this.element.appendChild(this.button_star.element);
                this.element.appendChild(this.button_hash.element);
            }
        }
    }, {
        key: "addEventListener",
        value: function addEventListener(event, listener) {
            this.button_1.addEventListener(event, listener);
            this.button_2.addEventListener(event, listener);
            this.button_3.addEventListener(event, listener);
            this.button_4.addEventListener(event, listener);
            this.button_5.addEventListener(event, listener);
            this.button_6.addEventListener(event, listener);
            this.button_7.addEventListener(event, listener);
            this.button_8.addEventListener(event, listener);
            this.button_9.addEventListener(event, listener);
            this.button_0.addEventListener(event, listener);
            this.button_star.addEventListener(event, listener);
            this.button_hash.addEventListener(event, listener);
        }
    }, {
        key: "getElementForButton",
        value: function getElementForButton(button) {

            var _element;

            if (button == "1") {
                _element = this.button_1;
            } else if (button == "2") {
                _element = this.button_2;
            } else if (button == "3") {
                _element = this.button_3;
            } else if (button == "4") {
                _element = this.button_4;
            } else if (button == "5") {
                _element = this.button_5;
            } else if (button == "6") {
                _element = this.button_6;
            } else if (button == "7") {
                _element = this.button_7;
            } else if (button == "8") {
                _element = this.button_8;
            } else if (button == "9") {
                _element = this.button_9;
            } else if (button == "0") {
                _element = this.button_0;
            } else if (button == "*") {
                _element = this.button_star;
            } else if (button == "#") {
                _element = this.button_hash;
            }

            return _element;
        }
    }, {
        key: "addButtonEventListener",
        value: function addButtonEventListener(button, event, listener) {

            var _element;

            _element = this.getElementForButton(button);

            _element.addEventListener(event, listener);
        }
    }, {
        key: "setAuxText",
        value: function setAuxText(one, two, three, four, five, six, seven, eight, nine, zero, star, hash) {
            this.button_1.setAuxText(one);
            this.button_2.setAuxText(two);
            this.button_3.setAuxText(three);
            this.button_4.setAuxText(four);
            this.button_5.setAuxText(five);
            this.button_6.setAuxText(six);
            this.button_7.setAuxText(seven);
            this.button_8.setAuxText(eight);
            this.button_9.setAuxText(nine);
            this.button_0.setAuxText(zero);
            this.button_star.setAuxText(star);
            this.button_hash.setAuxText(hash);
        }
    }, {
        key: "setButtonAuxText",
        value: function setButtonAuxText(button, text) {

            var _element;

            _element = this.getElementForButton(button);

            _element.setAuxText(text);
        }
    }]);

    return LCARSKeypad;
}(LCARSComponent);

/**
 * LCARS Analog Clock component
 */


var LCARSClockAnalog = exports.LCARSClockAnalog = function (_LCARSComponent9) {
    _inherits(LCARSClockAnalog, _LCARSComponent9);

    function LCARSClockAnalog(name, label, x, y, radius, properties, updateInterval, format) {
        _classCallCheck(this, LCARSClockAnalog);

        var _this9 = _possibleConstructorReturn(this, (LCARSClockAnalog.__proto__ || Object.getPrototypeOf(LCARSClockAnalog)).call(this, name, label, x, y, properties));

        _this9.static = _LCARS.LCARS.ES_STATIC; // Text is always static.
        _this9.textColor = _this9.getColor();

        /** Set the size of the clock face. */
        _this9.element.style.height = radius * 2 + "px";
        _this9.element.style.width = radius * 2 + "px";

        _this9.radius = radius;

        _this9.updateInterval = updateInterval;
        _this9.format = format;

        _this9.intervalVariable = null;

        _this9.drawShape();

        _this9.update();

        _this9.start();
        return _this9;
    }

    /**
     * Function to start the clock. It retrieves a reference to the clock object,
     * and passes it to an interval timer. The update interval is a class
     * variable, and is passed to the constructor of the object.
     */


    _createClass(LCARSClockAnalog, [{
        key: "start",
        value: function start() {

            var thisObj = this; // Can't just pass "this" to the setInterval function.

            thisObj.intervalVariable = setInterval(function (thisObj) {
                return function () {
                    thisObj.update();
                };
            }(this), thisObj.updateInterval);
        }

        /**
         * Function to stop the clock. It test the interval variable, and if it is not
         * null, it clears it.
         */

    }, {
        key: "stop",
        value: function stop() {
            if (!(this.intervalVariable == null)) {
                clearInterval(this.intervalVariable);
            }
        }

        /**
         * Function to update the clock with the current time. It gets passed to an
         * interval timer and will update the time and date at the rate set by the
         * interval variable.
         */

    }, {
        key: "update",
        value: function update() {

            /** Update to the current date and time. */
            var now = new Date();

            /** Calculate the angles in degrees for the secons, minutes, and hours hands. */
            var secondsDegrees = 6 * now.getSeconds();
            var minuteDegrees = 6 * now.getMinutes();
            var hourDegrees = 30 * (now.getHours() % 12) + now.getMinutes() / 2;

            /** Rotate the hands of the clock. */
            this.secondHand.setAttribute('transform', 'rotate(' + secondsDegrees + ' ' + centerX + ' ' + centerY + ')');
            this.minuteHand.setAttribute('transform', 'rotate(' + minuteDegrees + ' ' + centerX + ' ' + centerY + ')');
            this.hourHand.setAttribute('transform', 'rotate(' + hourDegrees + ' ' + centerX + ' ' + centerY + ')');
        }
    }, {
        key: "drawShape",
        value: function drawShape() {

            this.drawClockFace();

            this.drawClockHands();

            return "";
        }
    }, {
        key: "drawClockHands",
        value: function drawClockHands() {

            this.drawClockFace();

            var centerX = this.radius;
            var centerY = this.radius;

            this.hourHand = document.createElementNS(_LCARS.LCARS.svgNS, "line");
            this.hourHand.setAttribute('x1', centerX);
            this.hourHand.setAttribute('y1', centerY);
            this.hourHand.setAttribute('x2', centerX);
            this.hourHand.setAttribute('y2', this.radius * 0.5);
            this.hourHand.setAttribute('stroke', this.color);
            this.hourHand.setAttribute('stroke-width', this.radius / 10);
            this.hourHand.setAttribute('stroke-linecap', 'round');

            this.minuteHand = document.createElementNS(_LCARS.LCARS.svgNS, "line");
            this.minuteHand.setAttribute('x1', centerX);
            this.minuteHand.setAttribute('y1', centerY);
            this.minuteHand.setAttribute('x2', centerX);
            this.minuteHand.setAttribute('y2', this.radius * 0.25);
            this.minuteHand.setAttribute('stroke', this.color);
            this.minuteHand.setAttribute('stroke-width', this.radius / 20);
            this.minuteHand.setAttribute('stroke-linecap', 'round');

            this.secondHand = document.createElementNS(_LCARS.LCARS.svgNS, "line");
            this.secondHand.setAttribute('x1', centerX);
            this.secondHand.setAttribute('y1', centerY);
            this.secondHand.setAttribute('x2', centerX);
            this.secondHand.setAttribute('y2', this.radius * 0.15);
            this.secondHand.setAttribute('stroke', this.color);
            this.secondHand.setAttribute('stroke-width', this.radius / 40);
            this.secondHand.setAttribute('stroke-linecap', 'round');

            this.element.appendChild(this.hourHand);
            this.element.appendChild(this.minuteHand);
            this.element.appendChild(this.secondHand);
        }
    }, {
        key: "drawClockFace",
        value: function drawClockFace() {

            var centerX = this.radius;
            var centerY = this.radius;

            var xOffset = this.radius / 35;
            var yOffset = this.radius / 15;

            var angleIncrement = 360 / 12;

            for (var i = 12; i >= 1; i--) {

                /** Set the angle and convert to radians. */
                var angle = (angleIncrement * i - 90) * (Math.PI / 180);

                /** Calculate the x, y coordinates of the hour text. */
                var x = centerX + this.radius * Math.cos(angle);
                var y = centerY + this.radius * Math.sin(angle);

                var adjustedOffsetX = xOffset;
                if (i >= 10) {
                    adjustedOffsetX = xOffset * 2;
                }

                /** Create the hour text object and add it to the parent SVG. */
                var clockHourText = new LCARSText("hour_" + i.toString(), i.toString(), x - adjustedOffsetX, y + yOffset, this.properties);
                //clockHourText.setTextFontSize(this.font_size);
                clockHourText.setTextFontSize(this.radius / 5);

                this.element.appendChild(clockHourText.element);
            }
        }
    }]);

    return LCARSClockAnalog;
}(LCARSComponent);

/**
 * LCARS Clock component
 *
 */


var LCARSClock = function (_LCARSComponent10) {
    _inherits(LCARSClock, _LCARSComponent10);

    function LCARSClock(name, label, x, y, properties, format) {
        _classCallCheck(this, LCARSClock);

        var _this10 = _possibleConstructorReturn(this, (LCARSClock.__proto__ || Object.getPrototypeOf(LCARSClock)).call(this, name, label, x, y, properties));

        _this10.static = _LCARS.LCARS.ES_STATIC; // Text is always static.
        _this10.textColor = _this10.getColor();

        _this10.format = format;

        _this10.timeoutVariable = null;

        _this10.drawText();

        _this10.update();

        _this10.start();
        return _this10;
    }

    /**
     * Function to start the clock. It retrieves a reference to the clock object,
     * and passes it to an interval timer. The update interval is a class
     * variable, and is passed to the constructor of the object.
     */


    _createClass(LCARSClock, [{
        key: "start",
        value: function start() {
            this.update();
        }

        /**
         * Function to stop the clock. It test the interval variable, and if it is not
         * null, it clears it.
         */

    }, {
        key: "stop",
        value: function stop() {
            if (!(this.timeoutVariable == null)) {
                clearTimeout(this.timeoutVariable);
            }
        }

        /**
         * Function to update the clock with the current time. It gets passed to an
         * interval timer and will update the time and date at the rate set by the
         * interval variable.
         */

    }, {
        key: "update",
        value: function update() {

            /** Update to the current date and time. */
            var now = new Date();

            /** Initialize the format for the updated time date string. */
            var clockString = this.format;

            /** Format the updated current time date, and set the text field. */
            this.setText(this.formatString(clockString, now));

            var thisObj = this; // Can't just pass "this" to the setInterval function.
            var milliseconds = now.getMilliseconds();
            var newTimeout = 1000 - milliseconds;
            this.timeoutVariable = setTimeout(function (thisObj) {
                return function () {
                    thisObj.update();
                };
            }(this), newTimeout);
        }

        /**
         * Function to add a leading zero in front of numbers to the limit of the
         * length argument to support hours, minutes, seconds, and milliseconds.
         *
         * @param numberArg the number to pad with a leading zero
         * @param lengthArg the length of the number to pad leading zeros to
         */

    }, {
        key: "padLeadingZero",
        value: function padLeadingZero(numberArg, lengthArg) {

            var number = numberArg + "";
            var length = lengthArg || 2;

            while (number.length < length) {
                number = "0" + number;
            }

            return number;
        }

        /**
         * Function to format the time and date output associated with the Date
         * object <code>now</code> argument based on the <code>formatString</code> argument.
         * <p>
         * Note that the order of the parse is important to support the regular expressions that
         * are used. See the notes embedded in the code.
         * <p>
         * The date format parameters are as follows:
         * <ul>
         * <li> yyyy - the four digit year
         * <li> yy   - the two digit year
         * <li> y    - the four digit year
         * <li> MMMM - the full name of the month
         * <li> MMM  - the abbreviated name of the month
         * <li> MM   - the month number with a leading zero
         * <li> M    - the month number without a leading zero
         * <li> dddd - the full name of the day
         * <li> ddd  - the abbreviated name of the day
         * <li> dd   - the day number with a leading zero
         * <li> d    - the day number without a leading zero
         * <li> HH   - the 24 hour number with a leading zero
         * <li> H    - the 24 hour number without a leading zero
         * <li> hh   - the 12 hour number with a leading zero
         * <li> h    - the 12 hour number without a leading zero
         * <li> mm   - the minutes number with a leading zero
         * <li> m    - the minutes number without a leading zero
         * <li> ss   - the seconds number with a leading zero
         * <li> s    - the seconds number without a leading zero
         * <li> fff  - the milliseconds number with two leading zeroes
         * <li> ff   - the milliseconds number with one leading zero
         * <li> f    - the milliseconds number without leading zeroes
         * <li> TT   - AM - PM upper case
         * <li> T    - AM - PM upper case single character (A, P)
         * <li> tt   - AM - PM lower case
         * <li> t    - AM - PM lower case single character (a, p)
         * <li> K    - the time zone offset from UTC in the form +/-00:00
         * <li> Z    - the three character abbreviated time zone
         *</ul>
         *
         * @param formatString the string to parse for the format parameters
         * @param now the Date object to format
         * @return the formatted date string
         */

    }, {
        key: "formatString",
        value: function formatString(_formatString, now) {

            /** Get all the time and date paramenters for the <code>now</code> argument. */
            var year = now.getFullYear();
            var month = now.getMonth() + 1; /** add 1, because January is zero. */
            var day = now.getDate();
            var dayOfWeek = now.getDay() + 1; /** add 1, because Sunday is zero. */
            var hour24 = now.getHours();
            var hour12 = hour24 > 12 ? hour24 - 12 : hour24 == 0 ? 12 : hour24;
            var meridiem = hour24 > 12 ? "PM" : "AM";
            var minute = now.getMinutes();
            var second = now.getSeconds();
            var millisecond = now.getMilliseconds();
            var timeZoneOffset = Math.abs(now.getTimezoneOffset());
            //var timeZoneOffset = Math.abs(timeZoneOffset);
            var tzHrs = Math.floor(timeZoneOffset / 60);
            var tzMin = timeZoneOffset % 60;
            var timeZoneOffsetString = timeZoneOffset > 0 ? "-" : "+";
            var timeZoneString = String(String(now).split("(")[1]).split(")")[0];

            timeZoneOffsetString += this.padLeadingZero(tzHrs) + ":" + this.padLeadingZero(tzMin);

            /** Parse the year paramenter, and replace it with the built year string. */
            _formatString = _formatString.replace(/(^|[^\\])yyyy+/g, "$1" + year);
            _formatString = _formatString.replace(/(^|[^\\])yy/g, "$1" + year.toString().substr(2, 2));
            _formatString = _formatString.replace(/(^|[^\\])y/g, "$1" + year);

            /** Parse the month parameter, and replace it with the built month string. Note that
             month names are replaced by tokens to allow the rest of the parse to complete. They
             are replaced by the month strings when the rest of the parse is finished. */
            _formatString = _formatString.replace(/(^|[^\\])MMMM+/g, "$1" + _LCARS.LCARS.MONTHS[0]);
            _formatString = _formatString.replace(/(^|[^\\])MMM/g, "$1" + _LCARS.LCARS.MONTHS_ABBREVIATED[0]);
            _formatString = _formatString.replace(/(^|[^\\])MM/g, "$1" + this.padLeadingZero(month));
            _formatString = _formatString.replace(/(^|[^\\])M/g, "$1" + month);

            /** Parse the day parameter, and replace it with the built day string. Note that
             day names are replaced by tokens to allow the rest of the parse to complete. They
             are replaced by the day strings when the rest of the parse is finished. */
            _formatString = _formatString.replace(/(^|[^\\])dddd+/g, "$1" + _LCARS.LCARS.DAYS_OF_WEEK[0]);
            _formatString = _formatString.replace(/(^|[^\\])ddd/g, "$1" + _LCARS.LCARS.DAYS_OF_WEEK_ABBREVIATED[0]);
            _formatString = _formatString.replace(/(^|[^\\])dd/g, "$1" + this.padLeadingZero(day));
            _formatString = _formatString.replace(/(^|[^\\])d/g, "$1" + day);

            /** Parse the hour paramenter, and replace it with the built hour string. */
            _formatString = _formatString.replace(/(^|[^\\])HH+/g, "$1" + this.padLeadingZero(hour24));
            _formatString = _formatString.replace(/(^|[^\\])H/g, "$1" + hour24);
            _formatString = _formatString.replace(/(^|[^\\])hh+/g, "$1" + this.padLeadingZero(hour12));
            _formatString = _formatString.replace(/(^|[^\\])h/g, "$1" + hour12);

            /** Parse the minutes paramenter, and replace it with the built minutes string. */
            _formatString = _formatString.replace(/(^|[^\\])mm+/g, "$1" + this.padLeadingZero(minute));
            _formatString = _formatString.replace(/(^|[^\\])m/g, "$1" + minute);

            /** Parse the seconds paramenter, and replace it with the built seconds string. */
            _formatString = _formatString.replace(/(^|[^\\])ss+/g, "$1" + this.padLeadingZero(second));
            _formatString = _formatString.replace(/(^|[^\\])s/g, "$1" + second);

            /** Parse the year milliseconds, and replace it with the built milliseconds string. */
            _formatString = _formatString.replace(/(^|[^\\])fff+/g, "$1" + this.padLeadingZero(millisecond, 3));
            millisecond = Math.round(millisecond / 10);
            _formatString = _formatString.replace(/(^|[^\\])ff/g, "$1" + this.padLeadingZero(millisecond));
            millisecond = Math.round(millisecond / 10);
            _formatString = _formatString.replace(/(^|[^\\])f/g, "$1" + millisecond);

            /** Parse the meridiem paramenter, and replace it with the built meridiem string. */
            _formatString = _formatString.replace(/(^|[^\\])TT+/g, "$1" + meridiem);
            _formatString = _formatString.replace(/(^|[^\\])T/g, "$1" + meridiem.charAt(0));
            _formatString = _formatString.replace(/(^|[^\\])tt+/g, "$1" + meridiem.toLowerCase());
            _formatString = _formatString.replace(/(^|[^\\])t/g, "$1" + meridiem.toLowerCase().charAt(0));

            /** Parse the timezone offset paramenter, and replace it with the built timezone offset string. */
            _formatString = _formatString.replace(/(^|[^\\])K/g, "$1" + timeZoneOffsetString);

            /** Parse the timezone paramenter, and replace it with the timezone abbreviated name. */
            _formatString = _formatString.replace(/(^|[^\\])Z/g, "$1" + timeZoneString);

            /** Parse the month paramenter token, and replace it with the built month string. */
            _formatString = _formatString.replace(new RegExp(_LCARS.LCARS.MONTHS[0], "g"), _LCARS.LCARS.MONTHS[month]);
            _formatString = _formatString.replace(new RegExp(_LCARS.LCARS.MONTHS_ABBREVIATED[0], "g"), _LCARS.LCARS.MONTHS_ABBREVIATED[month]);

            /** Parse the day paramenter token, and replace it with the built day string. */
            _formatString = _formatString.replace(new RegExp(_LCARS.LCARS.DAYS_OF_WEEK[0], "g"), _LCARS.LCARS.DAYS_OF_WEEK[dayOfWeek]);
            _formatString = _formatString.replace(new RegExp(_LCARS.LCARS.DAYS_OF_WEEK_ABBREVIATED[0], "g"), _LCARS.LCARS.DAYS_OF_WEEK_ABBREVIATED[dayOfWeek]);

            /** return the formatted string. */
            return _formatString;
        }
    }, {
        key: "getTextAnchor",
        value: function getTextAnchor() {
            if ((this.properties & _LCARS.LCARS.ES_LABEL) == 0) {
                this.properties |= _LCARS.LCARS.ES_LABEL_W;
            }

            return _get(LCARSClock.prototype.__proto__ || Object.getPrototypeOf(LCARSClock.prototype), "getTextAnchor", this).call(this);
        }
    }, {
        key: "drawShape",
        value: function drawShape() {
            return "";
        }
    }]);

    return LCARSClock;
}(LCARSComponent);

exports.LCARSClock = LCARSClock;


var MAX_DAYS_IN_MONTH_DISPLAY = 42; /** 6 lines of 7 days */
/**
 * LCARS Calendar component - It provides a maximum six (6) week, seven (7) day array of days
 * with a month and year header.
 * <p>
 * The format of the days array is based on the starting day of the week for the month and the
 * number of days in the month. The weeks start on Sundays and end on Saturdays. Days for the
 * preceding and following months are blank. The days are color coded as follows:
 * <ul>
 * <li> Sunday    orange          <code>[EC_ORANGE]</code>
 * <li> Weekday   light blue      <code>[EC_L_BLUE]</code>
 * <li> Saturday  blue            <code>[EC_BLUE]</code>
 * <li> Today     yellow          <code>[EC_YELLOW]</code>
 * </ul>
 * <p>
 * Note: There is currently no convenience method for changing the color coding of the days.
 *
 * @author Perry Spagnola
 * Aversion 1.0
 */

var LCARSCalendar = exports.LCARSCalendar = function (_LCARSComponent11) {
    _inherits(LCARSCalendar, _LCARSComponent11);

    function LCARSCalendar(name, x, y, font_size, daySpacing, properties) {
        _classCallCheck(this, LCARSCalendar);

        /** Calendar doesn't have a label. */
        var _this11 = _possibleConstructorReturn(this, (LCARSCalendar.__proto__ || Object.getPrototypeOf(LCARSCalendar)).call(this, name, "", x, y, properties | _LCARS.LCARS.ES_LABEL_E));

        _this11.static = _LCARS.LCARS.ES_STATIC; /** Calendar is always static. */
        _this11.textColor = _this11.getColor();

        _this11.font_size = font_size;

        _this11.daySpacing = daySpacing;

        /** Set the curretn day as today. */
        _this11.setToday();

        _this11.intervalVariable = null;

        /** Set the initial displayed month and year. */
        _this11.displayMonth = _this11.currentMonth;
        _this11.displayYear = _this11.currentYear;

        /** Create an array to hold 6 lines of 7 days. */
        _this11.displayDays = new Array(MAX_DAYS_IN_MONTH_DISPLAY);

        /** Draw the calendar SVG shape. */
        _this11.drawShape();

        /** Populate the calendar with month, year, and days. */
        _this11.updateCalendar();

        return _this11;
    }

    /**
     * Draw the calendar component SVG shape.
     * <p>
     * Creates all of the SVG Text elements within a parent SVG element. There are two (2)
     * elements for the month and year header, and forty-two (42) <code>MAX_DAYS_IN_MONTH_DISPLAY</code>
     * elements for the days array of six (6) rows or weeks, and seven (7) cloumns or days.
     *
     * @return an empty string.
     */


    _createClass(LCARSCalendar, [{
        key: "drawShape",
        value: function drawShape() {

            var header_offset = this.font_size * 2;

            this.monthText = new LCARSText("", this.displayMonthString, 0, 0, _LCARS.LCARS.ES_LABEL_C | _LCARS.LCARS.EC_L_BLUE);
            this.monthText.setTextFontSize(this.font_size);
            this.element.appendChild(this.monthText.element);

            this.yearText = new LCARSText("", this.displayYearString, 6 * this.font_size * this.daySpacing, 0, _LCARS.LCARS.ES_LABEL_E | _LCARS.LCARS.EC_L_BLUE);
            this.yearText.setTextFontSize(this.font_size);
            this.element.appendChild(this.yearText.element);

            for (var i = 0; i < MAX_DAYS_IN_MONTH_DISPLAY; i++) {

                var y_offset = parseInt(i / 7) * this.font_size * 2;
                var x_offset = i % 7 * this.font_size * this.daySpacing;

                this.displayDays[i] = new LCARSText("day_" + i.toString(), i.toString(), x_offset, i + y_offset + header_offset, this.properties);
                this.displayDays[i].setTextFontSize(this.font_size);

                if (parseInt(i / 7) == 1) {
                    this.displayDays[i].textElement.setAttribute("x", 0);
                }

                this.element.appendChild(this.displayDays[i].element);
            }

            return "";
        }

        /**
         * This method updates the displayed calendar.
         * <p>
         * It retrieves the appropriate string literals, and formats the standard seven (7) day,
         * four (4) to six (6) week month array based on the starting day of the week for the
         * particular month. The weeks start on Sundays and end on Saturdays. The days are color
         * coded as follows:
         * <ul>
         * <li> Sunday    orange          <code>[EC_ORANGE]</code>
         * <li> Weekday   light blue      <code>[EC_L_BLUE]</code>
         * <li> Saturday  blue            <code>[EC_BLUE]</code>
         * <li> Today     yellow          <code>[EC_YELLOW]</code>
         * </ul>
         */

    }, {
        key: "updateCalendar",
        value: function updateCalendar() {

            /**
             * Get the strings for the display month and the display year for the calendar header.
             */
            this.displayMonthString = _LCARS.LCARS.MONTHS[this.displayMonth + 1];
            this.displayYearString = this.displayYear.toString();

            /**
             * Set the month and year text for the calendar header.
             */
            this.monthText.setText(this.displayMonthString);
            this.yearText.setText(this.displayYearString);

            /**
             * Get the starting day of week for the month.
             */
            var startDay = this.dayOfWeek(this.displayMonth, 1, this.displayYear);

            /**
             * Get the number of the days in the display month.
             */
            var daysInMonth = this.getDaysInMonth(this.displayMonth, this.displayYear);

            /**
             * Clear the calendar of text, and fill it with the appropriate days
             * for the display month and the display year.
             */
            for (var i = 0; i < MAX_DAYS_IN_MONTH_DISPLAY; i++) {
                if (i < startDay || i > startDay + daysInMonth - 1) {
                    this.displayDays[i].setText("");
                } else {
                    var day = i - startDay + 1;
                    this.displayDays[i].setText(day);

                    if (this.isWeekday(day)) {
                        this.displayDays[i].textElement.setAttribute("fill", _LCARS.LCARS.getColor(_LCARS.LCARS.EC_L_BLUE));
                    }
                    if (this.isSunday(parseInt(day))) {
                        this.displayDays[i].textElement.setAttribute("fill", _LCARS.LCARS.getColor(_LCARS.LCARS.EC_ORANGE));
                    }
                    if (this.isSaturday(day)) {
                        this.displayDays[i].textElement.setAttribute("fill", _LCARS.LCARS.getColor(_LCARS.LCARS.EC_BLUE));
                    }

                    if (this.isToday(day)) {
                        this.displayDays[i].textElement.setAttribute("fill", _LCARS.LCARS.getColor(_LCARS.LCARS.EC_YELLOW));
                    }
                }
            }
        }

        /**
         * This method is run once a second to detect the day roll-over. So, the calendar can
         * be automatically updated. When the roll-over is detected, the new day is set as "today",
         * and the display is updated.
         */

    }, {
        key: "update",
        value: function update() {

            /** Get the current date. */
            var rightNow = new Date();

            /**
             * Compare the current date (year, month, and day of month) to the date stored by
             * the <code>setToday()</code> method. If they are not the same, set the new today,
             * and update the displayed calendar.
             */
            if (!(rightNow.getYear() == this.now.getYear()) || !(rightNow.getMonth() == this.now.getMonth()) || !(rightNow.getDate() == this.now.getDate())) {
                //alert("now: " + this.now.getYear() + ", " + this.now.getMonth() + ", " + this.now.getDate() +
                //      "  right now: " + rightNow.getYear() + ", " + rightNow.getMonth() + ", " + rightNow.getDate());
                this.setToday();
                this.displayMonth = this.currentMonth;
                this.displayYear = this.currentYear;
                this.updateCalendar();
            }
        }

        /**
         * Function to start the auto update of the calendar. It retrieves a reference
         * to the calendar object, and passes it to an interval timer. The update interval
         * is fixed to one second.
         */

    }, {
        key: "startAutoUpdate",
        value: function startAutoUpdate() {
            var thisObj = this; // Can't just pass "this" to the setInterval function.

            thisObj.intervalVariable = setInterval(function (thisObj) {
                return function () {
                    thisObj.update();
                };
            }(this), 1000); // Update is fixed to one second.
        }

        /**
         * Function to stop the auto update of the calendar. It test the interval variable,
         * and if it is not null, it clears it.
         */

    }, {
        key: "stopAutoUpdate",
        value: function stopAutoUpdate() {
            if (!(this.intervalVariable == null)) {
                clearInterval(this.intervalVariable);
            }
        }

        /**
         * Function to clear the calendar day SVG elements of text.
         * <p>
         * A convenience function for clearing the day elements of text. The SVG text of each
         * element is set to an empty string. Not really necessary, since the method that updates
         * the calendar array of days resets the text of the entire array.
         */

    }, {
        key: "clearCalendarText",
        value: function clearCalendarText() {
            for (var i = 0; i < MAX_DAYS_IN_MONTH_DISPLAY; i++) {
                this.displayDays[i].setText("");
            }
        }

        /** Function to set the spacing between the day elements of the calendar.
         *
         * @param spaceMultiplier multiplies the font size to produce a space between the day elements
         */

    }, {
        key: "setDaySpacing",
        value: function setDaySpacing(spaceMultiplier) {
            this.daySpacing = spaceMultiplier;
        }

        /**
         * Set the calendar object's date to today's date.
         */

    }, {
        key: "setToday",
        value: function setToday() {
            /** Get the current date and time. */
            this.now = new Date();

            /** Set the object's <code>today</code> attribute to the current date. */
            this.today = this.now.getDate();

            /** Set the object's current month and year from the current date/time.
             Add 1900 to the current year to get a valid four digit year. Note: javascript
             counts years from 1900 (a Y2K thing). */
            this.currentMonth = this.now.getMonth();
            this.currentYear = this.now.getYear();
            this.currentYear += 1900;
        }

        /**
         * Returns <code>true</code> if the year is a four (4) digit year.
         *
         * @param year the year as a number
         */

    }, {
        key: "isFourDigitYear",
        value: function isFourDigitYear(year) {

            /** First, check to make sure the argument is a number. If not, return <code>false</code>. */
            if (isNaN(year)) {
                return false;
            }
            /** If it is a number, check the length. If length is 4, return <code>true</code>,
             else <code>false</code>. */
            else if (year.toString().length == 4) {
                    return true;
                } else {
                    return false;
                }
        }

        /**
         * Decrement the year for the displayed calendar month.
         */

    }, {
        key: "decrementYear",
        value: function decrementYear() {
            var year = this.displayYear - 1;
            if (this.isFourDigitYear(year)) {
                this.displayYear = year;
                this.updateCalendar();
            }
        }

        /**
         * Decrement the month for the displayed calendar.
         */

    }, {
        key: "decrementMonth",
        value: function decrementMonth() {
            var month = this.displayMonth - 1;
            if (month < 0) {
                month = 11;
            }
            this.displayMonth = month;
            this.updateCalendar();
        }

        /**
         * Increment the year for the displayed calendar month.
         */

    }, {
        key: "incrementYear",
        value: function incrementYear() {
            var year = this.displayYear + 1;
            if (this.isFourDigitYear(year)) {
                this.displayYear = year;
                this.updateCalendar();
            } else {
                alert("displayYear + 1: " + this.displayYear + "  is not a 4 digit year.");
            }
        }

        /**
         * Increment the month for the displayed calendar.
         */

    }, {
        key: "incrementMonth",
        value: function incrementMonth() {
            var month = this.displayMonth + 1;
            if (month > 11) {
                month = 0;
            }
            this.displayMonth = month;
            this.updateCalendar();
        }

        /**
         * Returns true if the argument specified four digit year is a leap year.
         *
         * @param year the four digit year
         * @return  true if the given year is a leap year, false, if not
         */

    }, {
        key: "isLeapYear",
        value: function isLeapYear(year) {
            /**
             * If the current year is evenly divisible by 4 and not by 100, return true.
             */
            if (year % 4 == 0 && year % 100 != 0) {
                return true;
            }

            /**
             * If the current year is evenly divisible by 400, return true.
             */
            if (year % 400 == 0) {
                return true;
            }

            /**
             * If none of the leap year conditions is met, method falls through,
             * and returns false.
             */
            return false;
        }

        /**
         * Returns the day of the week according to the Gregorian calendar, given
         * the <code>month</code>, <code>day</code>, and <code>year</code>.
         * January through December equal 0 - 11, and Sunday through Saturday equal
         * 0 - 6.
         * @param month  the month of the date
         * @param day  the day of the date
         * @param year  the year of the date
         * @return  the day of the week according to the Gregorian calendar
         */

    }, {
        key: "dayOfWeek",
        value: function dayOfWeek(month, day, year) {

            var date = new Date(year, month, day);

            return date.getDay();
        }

        /**
         * Returns <code>true</code> if the day of the week integer argument is greater
         * than Sunday (0) and less than Saturday (6).
         * <ul>
         * <li>Sunday = 0</li>
         * <li>Monday = 1</li>
         * <li>Tuesday = 2</li>
         * <li>Wednesday = 3</li>
         * <li>Thursday = 4</li>
         * <li>Friday = 5</li>
         * <li>Saturday = 6</li>
         * </ul>
         *
         * @param day an integer between 1 and 5 inclusive to return <code>true</code>, else <code>false</code>
         * @return <code>true</code> if weekday (Mon - Fri), <code>false</code> if not
         */

    }, {
        key: "isWeekday",
        value: function isWeekday(day) {
            var _day = this.dayOfWeek(this.displayMonth, day, this.displayYear);

            if (_day > 0 && _day < 6) {
                return true;
            } else {
                return false;
            }
        }

        /**
         * Returns <code>true</code> if the <code>day</code> argument indicates a Sunday, an integer 0.
         *
         * @param day an integer value for the day
         * @return <code>true</code> if Sunday, <code>false</code> if not
         */

    }, {
        key: "isSunday",
        value: function isSunday(day) {

            var date = new Date(this.displayYear, this.displayMonth, day);

            var _day = date.getDay();

            if (_day == 0) {
                return true;
            } else {
                return false;
            }
        }

        /**
         * Returns <code>true</code> if the <code>day</code> argument indicates a Saturday, an integer 6.
         *
         * @param day an integer value for the day
         * @return <code>true</code> if Saturday, <code>false</code> if not
         */

    }, {
        key: "isSaturday",
        value: function isSaturday(day) {
            var _day = this.dayOfWeek(this.displayMonth, day, this.displayYear);

            if (_day == 6) {
                return true;
            } else {
                return false;
            }
        }

        /**
         * Returns <code>true</code> if the <code>day</code> argument indicates the current day.
         *
         * @param day an integer value for the day
         * @return <code>true</code> if today, <code>false</code> if not
         */

    }, {
        key: "isToday",
        value: function isToday(day) {
            if (this.displayYear == this.currentYear && this.displayMonth == this.currentMonth && day == this.today) {
                return true;
            } else {
                return false;
            }
        }

        /**
         * Returns the number of days in the argument specified month and year.
         *
         * @param month  the integer (0 - 11) identifier of the month
         * @param year  the four digit year
         */

    }, {
        key: "getDaysInMonth",
        value: function getDaysInMonth(month, year) {
            var days = 31;

            if (month == 3 || month == 5 || month == 8 || month == 10) {
                days = 30;
            } else if (month == 1) {
                if (this.isLeapYear(year)) {
                    days = 29;
                } else {
                    days = 28;
                }
            }
            return days;
        }
    }]);

    return LCARSCalendar;
}(LCARSComponent);

/**
 *
 */


var LCARSEllipsisSpinner = exports.LCARSEllipsisSpinner = function (_LCARSComponent12) {
    _inherits(LCARSEllipsisSpinner, _LCARSComponent12);

    function LCARSEllipsisSpinner(id, x, y, properties) {
        _classCallCheck(this, LCARSEllipsisSpinner);

        var _this12 = _possibleConstructorReturn(this, (LCARSEllipsisSpinner.__proto__ || Object.getPrototypeOf(LCARSEllipsisSpinner)).call(this, id, "", x, y, properties));

        _this12.animated = false;

        _this12.radius = _this12.fontSize / 10;

        /* Create the DOM object for the first period shape animation, and set its attributes. */
        _this12.animateElement1 = document.createElementNS(_LCARS.LCARS.svgNS, "animate");
        _this12.animateElement1.setAttribute("id", _this12.element.id + "_shape_1_Animate");
        _this12.animateElement1.setAttribute("attributeType", "XML");
        _this12.animateElement1.setAttribute("attributeName", "opacity");
        _this12.animateElement1.setAttribute("repeatCount", "indefinite");
        _this12.animateElement1.setAttribute("dur", "1s");
        _this12.animateElement1.setAttribute("values", "0;1;0");
        _this12.animateElement1.setAttribute("begin", "0.1");

        /* Create the DOM object for the first period shape animation, and set its attributes. */
        _this12.animateElement2 = document.createElementNS(_LCARS.LCARS.svgNS, "animate");
        _this12.animateElement2.setAttribute("id", _this12.element.id + "_shape_2_Animate");
        _this12.animateElement2.setAttribute("attributeType", "XML");
        _this12.animateElement2.setAttribute("attributeName", "opacity");
        _this12.animateElement2.setAttribute("repeatCount", "indefinite");
        _this12.animateElement2.setAttribute("dur", "1s");
        _this12.animateElement2.setAttribute("values", "0;1;0");
        _this12.animateElement2.setAttribute("begin", "0.2");

        /* Create the DOM object for the first period shape animation, and set its attributes. */
        _this12.animateElement3 = document.createElementNS(_LCARS.LCARS.svgNS, "animate");
        _this12.animateElement3.setAttribute("id", _this12.element.id + "_shape_3_Animate");
        _this12.animateElement3.setAttribute("attributeType", "XML");
        _this12.animateElement3.setAttribute("attributeName", "opacity");
        _this12.animateElement3.setAttribute("repeatCount", "indefinite");
        _this12.animateElement3.setAttribute("dur", "1s");
        _this12.animateElement3.setAttribute("values", "0;1;0");
        _this12.animateElement3.setAttribute("begin", "0.3");

        _this12.drawShape();

        _this12.start();
        return _this12;
    }

    _createClass(LCARSEllipsisSpinner, [{
        key: "drawShape",
        value: function drawShape() {
            this.shapeElement1 = document.createElementNS(_LCARS.LCARS.svgNS, "circle");
            this.shapeElement1.setAttributeNS(null, "cx", this.radius);
            this.shapeElement1.setAttributeNS(null, "cy", 0);
            this.shapeElement1.setAttributeNS(null, "r", this.radius);
            this.shapeElement1.setAttributeNS(null, "fill", this.color);
            this.shapeElement1.setAttributeNS(null, "stroke", "none");

            this.shapeElement2 = document.createElementNS(_LCARS.LCARS.svgNS, "circle");
            this.shapeElement2.setAttributeNS(null, "cx", this.radius + this.radius * 3.33);
            this.shapeElement2.setAttributeNS(null, "cy", 0);
            this.shapeElement2.setAttributeNS(null, "r", this.radius);
            this.shapeElement2.setAttributeNS(null, "fill", this.color);
            this.shapeElement2.setAttributeNS(null, "stroke", "none");

            this.shapeElement3 = document.createElementNS(_LCARS.LCARS.svgNS, "circle");
            this.shapeElement3.setAttributeNS(null, "cx", this.radius + this.radius * 3.33 * 2);
            this.shapeElement3.setAttributeNS(null, "cy", 0);
            this.shapeElement3.setAttributeNS(null, "r", this.radius);
            this.shapeElement3.setAttributeNS(null, "fill", this.color);
            this.shapeElement3.setAttributeNS(null, "stroke", "none");

            this.element.appendChild(this.shapeElement1);
            this.element.appendChild(this.shapeElement2);
            this.element.appendChild(this.shapeElement3);
        }
    }, {
        key: "start",
        value: function start() {
            if (this.animated == false) {
                this.shapeElement1.appendChild(this.animateElement1);
                this.shapeElement2.appendChild(this.animateElement2);
                this.shapeElement3.appendChild(this.animateElement3);

                this.animated = true;
            }
        }
    }, {
        key: "stop",
        value: function stop() {
            if (this.animated == true) {
                if (this.animateElement1 != null) {
                    this.animateElement1.remove();
                }
                if (this.animateElement2 != null) {
                    this.animateElement2.remove();
                }
                if (this.animateElement3 != null) {
                    this.animateElement3.remove();
                }

                this.animated = false;
            }
        }
    }]);

    return LCARSEllipsisSpinner;
}(LCARSComponent);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var POWER_BUTTON_SVG = "M14 12h-4v-12h4v12zm4.213-10.246l-1.213 1.599c2.984 1.732 5 4.955 5 8.647 0 5.514-4.486 10-10 10s-10-4.486-10-10c0-3.692 2.016-6.915 5-8.647l-1.213-1.599c-3.465 2.103-5.787 5.897-5.787 10.246 0 6.627 5.373 12 12 12s12-5.373 12-12c0-4.349-2.322-8.143-5.787-10.246z";

var NETWORK_CONNECTION = "M12 0c-4.971 0-9 4.03-9 9s4.029 9 9 9 9-4.03 9-9-4.029-9-9-9zm4.298 15.137c-.079-.395-.177-.784-.299-1.166.673-.608.646-1.648-.054-2.162.436-1.739.458-3.636-.002-5.465.139-.083.261-.191.355-.319 1.101.309 2.124.8 3.04 1.434.105.497.162 1.012.162 1.541 0 2.537-1.269 4.779-3.202 6.137zm-11.798-6.137c0-.642.09-1.261.242-1.856.523-.033 1.044-.03 1.61.024l.03.169c-.691.581-1.312 1.246-1.864 2.005l-.018-.342zm2.387-.893c.636.482 1.562.327 1.997-.368 2.174.795 4.004 2.308 5.205 4.25-.575.581-.567 1.498.014 2.021-.511.923-1.161 1.758-1.919 2.48-3.678.087-6.693-2.446-7.477-5.773.578-.986 1.315-1.869 2.18-2.61zm2.165-1.425c1.493-.73 3.116-1.074 4.743-1.033.229.458.697.807 1.249.875h.005c.417 1.618.437 3.354.021 5.025l-.167.017c-1.294-2.119-3.325-3.849-5.823-4.726l-.028-.158zm4.546 9.643c.527-.613.983-1.271 1.36-1.971l.203-.006c.129.421.229.854.306 1.297-.582.305-1.209.536-1.869.68zm5.328-10.199c-.758-.42-1.557-.752-2.393-.983-.081-.746-.78-1.368-1.589-1.362-.415-.764-.924-1.481-1.517-2.141 2.49.482 4.546 2.197 5.499 4.486zm-4.855-2.031c-.192.165-.333.386-.393.644-1.842-.022-3.585.395-5.137 1.174-.637-.479-1.551-.316-1.982.361-.547-.056-1.036-.068-1.518-.053 1.106-2.763 3.806-4.721 6.959-4.721h.001c.822.745 1.525 1.62 2.07 2.595zm-6.071 19.905v-2h3v-2h2v2h3v2h-8zm9-2v2h3v-2h-3zm-10 0h-3v2h3v-2z";

var NETWORK_CONNECTION_NEGATIVE = "M14.741 12.48c-.567.554-.552 1.452.029 1.953-.69 1.35-1.62 2.558-2.732 3.567-4.359.029-8.103-3.103-8.889-7.354.794-1.334 1.831-2.508 3.048-3.46.547.37 1.299.265 1.75-.246 2.877.968 5.286 2.96 6.794 5.54zm-11.331-6.175c-.272.868-.41 1.771-.41 2.696l.003.26c.752-1.049 1.647-1.985 2.682-2.791l-.016-.063c-.774-.106-1.514-.136-2.259-.102zm17.26.274c-1.103-.723-2.324-1.276-3.632-1.622-.104.193-.265.35-.463.458.587 2.266.571 4.675-.054 6.936.644.495.675 1.455.059 2.026.229.661.404 1.341.525 2.035 2.53-1.746 3.895-4.551 3.895-7.416 0-.809-.108-1.622-.33-2.417zm-6.25-2.022c-2.139-.097-4.242.353-6.14 1.308l.009.261c3.156 1.074 5.695 3.279 7.246 5.966l.149-.011c.585-2.126.593-4.384.021-6.517-.601-.082-1.1-.496-1.285-1.007zm1.253-1.592c.687.033 1.281.509 1.452 1.107 1.069.269 2.098.669 3.064 1.192-1.169-2.559-3.502-4.474-6.32-5.07.721.854 1.324 1.784 1.804 2.771zm-11.933 2.456c.676-.012 1.34.023 2.035.117.393-.805 1.44-1.031 2.091-.451 2.075-1.047 4.338-1.5 6.564-1.404.08-.191.212-.352.38-.474-.596-1.185-1.376-2.262-2.301-3.194l-.514-.015c-3.677 0-6.864 2.216-8.255 5.421zm11.86 9.328c-.57 1.135-1.307 2.193-2.197 3.143 1.035-.162 2.012-.5 2.897-.983-.111-.746-.288-1.47-.525-2.167l-.175.007zm-7.6 9.251v-2h3v-2h2v2h3v2h-8zm9-2v2h3v-2h-3zm-10 0h-3v2h3v-2z";

var BATTERY_HALF = "M19 8v8h-5.952l-5.087-8h11.039zm2-2h-21v12h21v-12zm1 9h.75c.69 0 1.25-.56 1.25-1.25v-3.5c0-.69-.56-1.25-1.25-1.25h-.75v6z";

var BATTERY_FULL = "M21 6h-21v12h21v-12zm1 9h.75c.69 0 1.25-.56 1.25-1.25v-3.5c0-.69-.56-1.25-1.25-1.25h-.75v6z";

var BATTERY_EMPTY = "M19 8v8h-17v-8h17zm2-2h-21v12h21v-12zm1 9h.75c.69 0 1.25-.56 1.25-1.25v-3.5c0-.69-.56-1.25-1.25-1.25h-.75v6z";

var BATTERY_ON_AC = "M0 18h21v-12h-21v12zm5-7h2.998c1.384 0 .965-2 6.002-2v1h1.499c.277 0 .501.224.501.5s-.224.5-.501.5h-1.499v2h1.499c.277 0 .501.224.501.5s-.224.5-.501.5h-1.499v1c-5 0-4.627-2-6-2h-3v-2zm19-.75v3.5c0 .69-.56 1.25-1.25 1.25h-.75v-6h.75c.69 0 1.25.56 1.25 1.25z";

var BATTERY_ON_AC_NEGATIVE = "M19 8v8h-17v-8h17zm2-2h-21v12h21v-12zm1 9h.75c.69 0 1.25-.56 1.25-1.25v-3.5c0-.69-.56-1.25-1.25-1.25h-.75v6zm-6.501-2h-1.499v-2h1.499c.277 0 .501-.224.501-.5s-.224-.5-.501-.5h-1.499v-1c-5.037 0-4.618 2-6.002 2h-2.998v2h3c1.373 0 1 2 6 2v-1h1.499c.277 0 .501-.224.501-.5s-.224-.5-.501-.5z";

var WEATHER_PARTLY_CLOUDY_DAY = "M2.396 12h-2.396v-2h2.396v2zm7.604-6.458v-3.542h-2v3.542h2zm-4.793.876l-2.156-2.156-1.414 1.414 2.156 2.156 1.414-1.414zm9.461-2.396l-2.115 2.114 1.414 1.414 2.115-2.114-1.414-1.414zm-11.7 10.907l-2.198 1.919 1.303 1.517 2.198-1.919-1.303-1.517zm21.032 2.793c0 2.362-1.95 4.278-4.354 4.278h-10.292c-2.404 0-4.354-1.916-4.354-4.278 0-.77.211-1.49.574-2.113-.964-.907-1.574-2.18-1.574-3.609 0-2.762 2.238-5 5-5 1.329 0 2.523.528 3.414 1.376.649-.24 1.35-.376 2.086-.376 3.171 0 5.753 2.443 5.921 5.516 2.034.359 3.579 2.105 3.579 4.206zm-18-5.722c0 .86.37 1.628.955 2.172.485-.316 1.029-.551 1.624-.656.088-1.61.843-3.042 1.994-4.046-.46-.288-.991-.47-1.573-.47-1.654 0-3 1.346-3 3zm16 5.722c0-2.076-1.979-2.618-3.489-2.512.218-1.439-.24-5.21-4.011-5.21-3.875 0-4.062 3.854-4.011 5.209-1.385-.084-3.489.395-3.489 2.513 0 1.256 1.056 2.278 2.354 2.278h10.291c1.299 0 2.355-1.022 2.355-2.278z";

var WEATHER_PARTLY_CLOUDY_NIGHT = "M20.422 11.516c-.169-3.073-2.75-5.516-5.922-5.516-1.229 0-2.368.37-3.313.999-1.041-1.79-2.974-2.999-5.19-2.999-.468 0-.947.054-1.434.167 1.347 3.833-.383 6.416-4.563 5.812-.006 3.027 2.197 5.468 5.02 5.935.104 2.271 1.996 4.086 4.334 4.086h10.291c2.406 0 4.355-1.916 4.355-4.278 0-2.101-1.545-3.847-3.578-4.206zm-15.016 2.439c-1.285-.192-2.384-.997-2.964-2.125 2.916-.119 5.063-2.846 4.451-5.729 1.259.29 2.282 1.18 2.778 2.346-.635.875-1.031 1.928-1.094 3.069-1.419.251-2.588 1.186-3.171 2.439zm14.24 4.045h-10.292c-1.297 0-2.354-1.022-2.354-2.278 0-2.118 2.104-2.597 3.488-2.512-.05-1.356.137-5.21 4.012-5.21 3.771 0 4.229 3.771 4.012 5.209 1.509-.105 3.488.437 3.488 2.513 0 1.256-1.057 2.278-2.354 2.278z";

var WEATHER_CLEAR_DAY = "M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm2.312-4.897c0 2.206 1.794 4 4 4s4-1.794 4-4-1.794-4-4-4-4 1.794-4 4zm10 0c0 3.314-2.686 6-6 6s-6-2.686-6-6 2.686-6 6-6 6 2.686 6 6z";

var WEATHER_CLEAR_NIGHT = "M11 6.999c2.395.731 4.27 2.607 4.999 5.001.733-2.395 2.608-4.269 5.001-5-2.393-.731-4.268-2.605-5.001-5-.729 2.394-2.604 4.268-4.999 4.999zm7 7c1.437.438 2.562 1.564 2.999 3.001.44-1.437 1.565-2.562 3.001-3-1.436-.439-2.561-1.563-3.001-3-.437 1.436-1.562 2.561-2.999 2.999zm-6 5.501c1.198.365 2.135 1.303 2.499 2.5.366-1.198 1.304-2.135 2.501-2.5-1.197-.366-2.134-1.302-2.501-2.5-.364 1.197-1.301 2.134-2.499 2.5zm-6-8.272c.522.658 1.118 1.253 1.775 1.775-.657.522-1.252 1.117-1.773 1.774-.522-.658-1.118-1.253-1.776-1.776.658-.521 1.252-1.116 1.774-1.773zm-.001-4.228c-.875 2.873-3.128 5.125-5.999 6.001 2.876.88 5.124 3.128 6.004 6.004.875-2.874 3.128-5.124 5.996-6.004-2.868-.874-5.121-3.127-6.001-6.001z";

var WEATHER_CLEAR_MOON_NIGHT = "M10.719 2.082c-2.572 2.028-4.719 5.212-4.719 9.918 0 4.569 1.938 7.798 4.548 9.895-4.829-.705-8.548-4.874-8.548-9.895 0-5.08 3.808-9.288 8.719-9.918zm1.281-2.082c-6.617 0-12 5.383-12 12s5.383 12 12 12c1.894 0 3.87-.333 5.37-1.179-3.453-.613-9.37-3.367-9.37-10.821 0-7.555 6.422-10.317 9.37-10.821-1.74-.682-3.476-1.179-5.37-1.179zm0 10.999c1.437.438 2.562 1.564 2.999 3.001.44-1.437 1.565-2.562 3.001-3-1.436-.439-2.561-1.563-3.001-3-.437 1.436-1.562 2.561-2.999 2.999zm8.001.001c.958.293 1.707 1.042 2 2.001.291-.959 1.042-1.709 1.999-2.001-.957-.292-1.707-1.042-2-2-.293.958-1.042 1.708-1.999 2zm-1-9c-.437 1.437-1.563 2.562-2.998 3.001 1.438.44 2.561 1.564 3.001 3.002.437-1.438 1.563-2.563 2.996-3.002-1.433-.437-2.559-1.564-2.999-3.001z";

var WEATHER_RAIN = "M20.422 7.516c-.178-3.233-3.031-5.778-6.432-5.492-1.087-1.239-2.693-2.024-4.49-2.024-3.172 0-5.754 2.443-5.922 5.516-2.033.359-3.578 2.105-3.578 4.206 0 2.362 1.949 4.278 4.354 4.278h1.326c.771 1.198 2.124 2 3.674 2h10.291c2.406 0 4.355-1.916 4.355-4.278 0-2.101-1.545-3.847-3.578-4.206zm-15.395 4.484h-.673c-1.297 0-2.354-1.022-2.354-2.278 0-2.118 2.104-2.597 3.488-2.512-.05-1.356.137-5.21 4.012-5.21.967 0 1.714.25 2.29.644-1.823.922-3.096 2.746-3.212 4.872-2.022.358-3.697 2.127-3.551 4.484zm14.618 2h-10.291c-1.297 0-2.354-1.022-2.354-2.278 0-2.118 2.104-2.597 3.488-2.512-.05-1.356.137-5.21 4.012-5.21 3.771 0 4.229 3.771 4.012 5.209 1.509-.105 3.488.437 3.488 2.513 0 1.256-1.057 2.278-2.355 2.278zm-12.776 6.713l-1.41-1.41 2.303-2.303 1.41 1.41-2.303 2.303zm-3.3 3.287l-1.41-1.397 2.303-2.303 1.41 1.41-2.303 2.29zm8.253-3.287l-1.41-1.41 2.303-2.303 1.41 1.41-2.303 2.303zm-3.3 3.287l-1.41-1.397 2.303-2.303 1.41 1.41-2.303 2.29zm8.175-3.287l-1.41-1.41 2.303-2.303 1.41 1.41-2.303 2.303zm-3.301 3.287l-1.41-1.397 2.303-2.303 1.41 1.41-2.303 2.29z";

var WEATHER_RAIN_HEAVY = "M20.422 8.516c-.178-3.233-3.031-5.778-6.432-5.492-1.087-1.239-2.693-2.024-4.49-2.024-3.172 0-5.754 2.443-5.922 5.516-2.033.359-3.578 2.105-3.578 4.206 0 2.362 1.949 4.278 4.354 4.278h1.326c.771 1.198 2.124 2 3.674 2h10.291c2.406 0 4.355-1.916 4.355-4.278 0-2.101-1.545-3.847-3.578-4.206zm-15.395 4.484h-.673c-1.297 0-2.354-1.022-2.354-2.278 0-2.118 2.104-2.597 3.488-2.512-.05-1.356.137-5.21 4.012-5.21.967 0 1.714.25 2.29.644-1.823.922-3.096 2.746-3.212 4.872-2.022.358-3.697 2.127-3.551 4.484zm14.618 2h-10.291c-1.297 0-2.354-1.022-2.354-2.278 0-2.118 2.104-2.597 3.488-2.512-.05-1.356.137-5.21 4.012-5.21 3.771 0 4.229 3.771 4.012 5.209 1.509-.105 3.488.437 3.488 2.513 0 1.256-1.057 2.278-2.355 2.278zm-14.063 8l-1.41-1.41 3.59-3.59 1.41 1.41-3.59 3.59zm8.543-3.59l-1.41-1.41-3.59 3.59 1.41 1.41 3.59-3.59zm4.875 0l-1.41-1.41-3.59 3.59 1.41 1.41 3.59-3.59z";

var WEATHER_RAIN_LIGHT = "M20.422 7.516c-.178-3.232-3.031-5.777-6.432-5.491-1.087-1.24-2.693-2.025-4.49-2.025-3.172 0-5.754 2.443-5.922 5.516-2.033.359-3.578 2.105-3.578 4.206 0 2.362 1.949 4.278 4.354 4.278h1.326c.771 1.198 2.124 2 3.674 2h10.291c2.406 0 4.355-1.916 4.355-4.278 0-2.101-1.545-3.847-3.578-4.206zm-15.395 4.484h-.673c-1.297 0-2.354-1.021-2.354-2.278 0-2.118 2.104-2.597 3.488-2.513-.05-1.355.137-5.209 4.012-5.209.967 0 1.714.25 2.29.645-1.823.921-3.096 2.745-3.212 4.871-2.022.357-3.697 2.127-3.551 4.484zm14.618 2h-10.291c-1.297 0-2.354-1.021-2.354-2.278 0-2.118 2.104-2.597 3.488-2.513-.05-1.355.137-5.209 4.012-5.209 3.771 0 4.229 3.771 4.012 5.209 1.509-.105 3.488.437 3.488 2.513 0 1.257-1.057 2.278-2.355 2.278zm-14.291 6.933l1.59-1.59.706.707-1.59 1.59-.706-.707zm4.714.699l1.59-1.591-.707-.707-1.59 1.591.707.707zm-2.418-2.996l.707.707 1.635-1.636-.707-.707-1.635 1.636zm-3.004 3.004l-1.646 1.645.707.707 1.646-1.646-.707-.706zm9.425.011l1.591-1.591-.707-.707-1.591 1.591.707.707zm-5.417-.019l-1.654 1.653.707.707 1.654-1.653-.707-.707zm7.008-2.986l.707.707 1.639-1.639-.707-.707-1.639 1.639zm-3.004 3.005l-1.643 1.642.708.707 1.642-1.642-.707-.707z";

var WEATHER_RAIN_CHANCE_DAY = "M2.396 9h-2.396v-2h2.396v2zm7.604-6.458v-2.542h-2v2.542h2zm-4.793.876l-1.859-1.859-1.414 1.414 1.859 1.859 1.414-1.414zm9.222-2.156l-1.875 1.875 1.414 1.414 1.875-1.875-1.414-1.414zm-11.46 10.667l-2.053 1.773 1.303 1.517 2.053-1.773-1.303-1.517zm21.031 2.793c0 2.362-1.949 4.278-4.354 4.278h-10.292c-2.405 0-4.354-1.916-4.354-4.278 0-.77.211-1.49.574-2.113-.965-.907-1.574-2.18-1.574-3.609 0-2.762 2.238-5 5-5 1.328 0 2.523.528 3.414 1.376.648-.24 1.35-.376 2.086-.376 3.172 0 5.753 2.443 5.922 5.516 2.033.359 3.578 2.105 3.578 4.206zm-18-5.722c0 .86.37 1.628.955 2.172.484-.316 1.029-.551 1.623-.656.089-1.61.844-3.042 1.994-4.046-.459-.288-.99-.47-1.572-.47-1.654 0-3 1.346-3 3zm16 5.722c0-2.076-1.979-2.618-3.488-2.512.217-1.439-.241-5.21-4.012-5.21-3.875 0-4.062 3.854-4.012 5.209-1.384-.084-3.488.395-3.488 2.513 0 1.256 1.057 2.278 2.354 2.278h10.291c1.298 0 2.355-1.022 2.355-2.278zm-15.58 9.278l-1.41-1.41 2.59-2.59 1.41 1.41-2.59 2.59zm7.543-2.59l-1.41-1.41-2.59 2.59 1.41 1.41 2.59-2.59zm4.875 0l-1.41-1.41-2.59 2.59 1.41 1.41 2.59-2.59z";

var WEATHER_RAIN_CHANCE_NIGHT = "M6.869 20.713l-1.41-1.41 2.303-2.303 1.41 1.41-2.303 2.303zm-3.3 3.287l-1.41-1.397 2.303-2.303 1.41 1.41-2.303 2.29zm8.253-3.287l-1.41-1.41 2.303-2.303 1.41 1.41-2.303 2.303zm-3.3 3.287l-1.41-1.397 2.303-2.303 1.41 1.41-2.303 2.29zm8.175-3.287l-1.41-1.41 2.303-2.303 1.41 1.41-2.303 2.303zm-3.301 3.287l-1.41-1.397 2.303-2.303 1.41 1.41-2.303 2.29zm7.026-16.484c-.168-3.073-2.75-5.516-5.922-5.516-1.229 0-2.367.37-3.312.999-1.042-1.79-2.975-2.999-5.19-2.999-.469 0-.947.054-1.434.167 1.346 3.833-.384 6.416-4.564 5.812-.006 3.027 2.197 5.468 5.02 5.935.105 2.271 1.996 4.086 4.335 4.086h10.291c2.405 0 4.354-1.916 4.354-4.278 0-2.101-1.545-3.847-3.578-4.206zm-15.016 2.439c-1.285-.192-2.383-.997-2.963-2.125 2.916-.12 5.063-2.846 4.452-5.729 1.258.29 2.281 1.18 2.777 2.346-.635.875-1.031 1.928-1.094 3.069-1.42.251-2.588 1.186-3.172 2.439zm14.24 4.045h-10.291c-1.298 0-2.355-1.022-2.355-2.278 0-2.118 2.104-2.597 3.488-2.512-.05-1.356.137-5.21 4.012-5.21 3.771 0 4.229 3.771 4.012 5.209 1.509-.105 3.488.437 3.488 2.513 0 1.256-1.057 2.278-2.354 2.278z";

var WEATHER_HEAT_WARNING = "M21.192 4.221l-2.881 2.881c-.411-.528-.886-1.003-1.414-1.414l2.881-2.881 1.414 1.414zm-8.192-.152v-4.069h-2v4.069c.328-.041.66-.069 1-.069s.672.028 1 .069zm6.931 6.931c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-1.931 1c0 .341-.035.674-.09 1h-11.82c-.055-.326-.09-.659-.09-1 0-3.314 2.686-6 6-6s6 2.686 6 6zm-2.142-1c-.448-1.72-2.001-3-3.858-3-1.858 0-3.41 1.28-3.857 3h7.715zm-8.754-5.312l-2.881-2.881-1.415 1.414 2.881 2.881c.411-.529.885-1.003 1.415-1.414zm-7.104 5.312v2h4.069c-.041-.328-.069-.661-.069-1s.028-.672.069-1h-4.069zm9.062 11.667c-1.205-1.195-1.364-1.893-.312-3.26.37-.481.529-.942.529-1.4 0-.959-.699-1.906-1.622-3.006l-1.448 1.379c1.375 1.6 1.246 1.772.26 3.184-.316.453-.446.908-.446 1.355 0 1.159.876 2.259 1.665 3.082l1.374-1.334zm8.688 0c-1.205-1.195-1.364-1.893-.312-3.26.37-.481.529-.942.529-1.4 0-.959-.699-1.906-1.622-3.006l-1.448 1.379c1.375 1.6 1.246 1.772.26 3.184-.316.453-.446.908-.446 1.355 0 1.159.876 2.259 1.665 3.082l1.374-1.334zm-4.396 0c-1.205-1.195-1.364-1.893-.312-3.26.37-.481.529-.942.529-1.4 0-.959-.699-1.906-1.622-3.006l-1.448 1.379c1.375 1.6 1.246 1.772.26 3.184-.316.453-.446.908-.446 1.355 0 1.159.876 2.259 1.665 3.082l1.374-1.334z";

var WEATHER_SNOW = "M14 19.25c0 .689-.559 1.25-1.25 1.25s-1.25-.561-1.25-1.25.559-1.25 1.25-1.25 1.25.561 1.25 1.25zm-3.75 1.25c-.691 0-1.25.561-1.25 1.25s.559 1.25 1.25 1.25 1.25-.561 1.25-1.25-.559-1.25-1.25-1.25zm8.75-1.25c0 .689-.559 1.25-1.25 1.25s-1.25-.561-1.25-1.25.559-1.25 1.25-1.25 1.25.561 1.25 1.25zm-3.75 1.25c-.691 0-1.25.561-1.25 1.25s.559 1.25 1.25 1.25 1.25-.561 1.25-1.25-.559-1.25-1.25-1.25zm-6.25-1.25c0 .689-.559 1.25-1.25 1.25s-1.25-.561-1.25-1.25.559-1.25 1.25-1.25 1.25.561 1.25 1.25zm-3.75 1.25c-.691 0-1.25.561-1.25 1.25s.559 1.25 1.25 1.25 1.25-.561 1.25-1.25-.559-1.25-1.25-1.25zm18.75-7.778c0 2.362-1.949 4.278-4.355 4.278h-10.291c-1.55 0-2.902-.802-3.674-2h-1.326c-2.405 0-4.354-1.916-4.354-4.278 0-2.101 1.545-3.847 3.578-4.206.168-3.073 2.75-5.516 5.922-5.516 1.797 0 3.403.785 4.49 2.024 3.4-.286 6.254 2.259 6.432 5.491 2.033.36 3.578 2.106 3.578 4.207zm-15.422-4.206c.116-2.126 1.389-3.95 3.212-4.871-.576-.395-1.323-.645-2.29-.645-3.875 0-4.062 3.854-4.012 5.209-1.384-.084-3.488.395-3.488 2.513 0 1.257 1.057 2.278 2.354 2.278h.674c-.147-2.357 1.528-4.127 3.55-4.484zm13.422 4.206c0-2.075-1.979-2.618-3.488-2.513.217-1.438-.241-5.209-4.012-5.209-3.875 0-4.062 3.854-4.012 5.209-1.384-.084-3.488.395-3.488 2.513 0 1.257 1.057 2.278 2.354 2.278h10.291c1.298 0 2.355-1.021 2.355-2.278zm-5.521-3.97l-1.479.881v-1.633h-1v1.633l-1.494-.896-.506.867 1.499.896-1.499.865.537.867 1.463-.865v1.633h1v-1.633l1.467.869.533-.867-1.499-.869 1.499-.881-.521-.867z";

var WEATHER_SNOW_HEAVY = "M21.75 19.25c0 .689-.559 1.25-1.25 1.25s-1.25-.561-1.25-1.25.559-1.25 1.25-1.25 1.25.561 1.25 1.25zm-4 0c0 .689-.559 1.25-1.25 1.25s-1.25-.561-1.25-1.25.559-1.25 1.25-1.25 1.25.561 1.25 1.25zm-4 0c0 .689-.559 1.25-1.25 1.25s-1.25-.561-1.25-1.25.559-1.25 1.25-1.25 1.25.561 1.25 1.25zm-4 0c0 .689-.559 1.25-1.25 1.25s-1.25-.561-1.25-1.25.559-1.25 1.25-1.25 1.25.561 1.25 1.25zm2 2.5c0 .689-.559 1.25-1.25 1.25s-1.25-.561-1.25-1.25.559-1.25 1.25-1.25 1.25.561 1.25 1.25zm4.094 0c0 .689-.559 1.25-1.25 1.25s-1.25-.561-1.25-1.25.559-1.25 1.25-1.25 1.25.561 1.25 1.25zm3.906 0c0 .689-.559 1.25-1.25 1.25s-1.25-.561-1.25-1.25.559-1.25 1.25-1.25 1.25.561 1.25 1.25zm4.25-9.028c0 2.362-1.949 4.278-4.355 4.278h-10.291c-1.55 0-2.902-.802-3.674-2h-1.326c-2.405 0-4.354-1.916-4.354-4.278 0-2.101 1.545-3.847 3.578-4.206.168-3.073 2.75-5.516 5.922-5.516 1.797 0 3.403.785 4.49 2.024 3.4-.286 6.254 2.259 6.432 5.491 2.033.36 3.578 2.106 3.578 4.207zm-15.422-4.206c.116-2.126 1.389-3.95 3.212-4.871-.576-.395-1.323-.645-2.29-.645-3.875 0-4.062 3.854-4.012 5.209-1.384-.084-3.488.395-3.488 2.513 0 1.257 1.057 2.278 2.354 2.278h.674c-.147-2.357 1.528-4.127 3.55-4.484zm13.422 4.206c0-2.075-1.979-2.618-3.488-2.513.217-1.438-.241-5.209-4.012-5.209-3.875 0-4.062 3.854-4.012 5.209-1.384-.084-3.488.395-3.488 2.513 0 1.257 1.057 2.278 2.354 2.278h10.291c1.298 0 2.355-1.021 2.355-2.278zm-5.521-3.97l-1.479.881v-1.633h-1v1.633l-1.494-.896-.506.867 1.499.896-1.499.865.537.867 1.463-.865v1.633h1v-1.633l1.467.869.533-.867-1.499-.869 1.499-.881-.521-.867z";

var WEATHER_SNOW_CHANCE_DAY = "M 2.396,9 0,9 0,7 l 2.396,0 0,2 z M 10,2.542 10,0 8,0 l 0,2.542 2,0 z M 5.207,3.418 3.348,1.559 1.934,2.973 3.793,4.832 5.207,3.418 Z M 14.429,1.262 12.554,3.137 13.968,4.551 15.843,2.676 14.429,1.262 Z M 2.969,11.929 0.916,13.702 2.219,15.219 4.272,13.446 2.969,11.929 Z M 24,14.722 C 24,17.084 22.051,19 19.646,19 L 9.354,19 C 6.949,19 5,17.084 5,14.722 5,13.952 5.211,13.232 5.574,12.609 4.609,11.702 4,10.429 4,9 4,6.238 6.238,4 9,4 10.328,4 11.523,4.528 12.414,5.376 13.062,5.136 13.764,5 14.5,5 17.672,5 20.253,7.443 20.422,10.516 22.455,10.875 24,12.621 24,14.722 Z M 6,9 C 6,9.86 6.37,10.628 6.955,11.172 7.439,10.856 7.984,10.621 8.578,10.516 8.667,8.906 9.422,7.474 10.572,6.47 10.113,6.182 9.582,6 9,6 7.346,6 6,7.346 6,9 Z m 16,5.722 C 22,12.646 20.021,12.104 18.512,12.21 18.729,10.771 18.271,7 14.5,7 10.625,7 10.438,10.854 10.488,12.209 9.104,12.125 7,12.604 7,14.722 7,15.978 8.057,17 9.354,17 l 10.291,0 C 20.943,17 22,15.978 22,14.722 Z M 16.479,10.752 15,11.633 15,10 14,10 14,11.633 12.506,10.737 12,11.604 13.499,12.5 12,13.365 12.537,14.232 14,13.367 14,15 l 1,0 0,-1.633 1.467,0.869 L 17,13.369 15.501,12.5 17,11.619 16.479,10.752 Z m 5.104,10.25 c 0,0.689 -0.559,1.25 -1.25,1.25 -0.691,0 -1.25,-0.561 -1.25,-1.25 0,-0.689 0.559,-1.25 1.25,-1.25 0.691,0 1.25,0.561 1.25,1.25 z m -4,0 c 0,0.689 -0.559,1.25 -1.25,1.25 -0.691,0 -1.25,-0.561 -1.25,-1.25 0,-0.689 0.559,-1.25 1.25,-1.25 0.691,0 1.25,0.561 1.25,1.25 z m -4,0 c 0,0.689 -0.559,1.25 -1.25,1.25 -0.691,0 -1.25,-0.561 -1.25,-1.25 0,-0.689 0.559,-1.25 1.25,-1.25 0.691,0 1.25,0.561 1.25,1.25 z m -4,0 c 0,0.689 -0.559,1.25 -1.25,1.25 -0.691,0 -1.25,-0.561 -1.25,-1.25 0,-0.689 0.559,-1.25 1.25,-1.25 0.691,0 1.25,0.561 1.25,1.25 z m 2,2.5 c 0,0.689 -0.559,1.25 -1.25,1.25 -0.691,0 -1.25,-0.561 -1.25,-1.25 0,-0.689 0.559,-1.25 1.25,-1.25 0.691,0 1.25,0.561 1.25,1.25 z m 4.094,0 c 0,0.689 -0.559,1.25 -1.25,1.25 -0.691,0 -1.25,-0.561 -1.25,-1.25 0,-0.689 0.559,-1.25 1.25,-1.25 0.691,0 1.25,0.561 1.25,1.25 z m 3.906,0 c 0,0.689 -0.559,1.25 -1.25,1.25 -0.691,0 -1.25,-0.561 -1.25,-1.25 0,-0.689 0.559,-1.25 1.25,-1.25 0.691,0 1.25,0.561 1.25,1.25 z";

var WEATHER_SNOW_CHANCE_NIGHT = "M 20.422,8.516 C 20.253,5.443 17.672,3 14.5,3 13.271,3 12.132,3.37 11.187,3.999 10.146,2.209 8.213,1 5.997,1 5.529,1 5.05,1.054 4.563,1.167 5.91,5 4.18,7.584 0,6.979 -0.006,10.006 2.197,12.448 5.02,12.914 5.124,15.186 7.016,17 9.354,17 l 10.291,0 C 22.051,17 24,15.084 24,12.722 24,10.621 22.455,8.875 20.422,8.516 Z M 5.406,10.955 C 4.121,10.763 3.022,9.957 2.442,8.83 5.358,8.711 7.505,5.984 6.893,3.101 8.152,3.39 9.175,4.281 9.671,5.447 9.037,6.322 8.641,7.375 8.578,8.516 7.158,8.768 5.989,9.702 5.406,10.955 Z M 19.646,15 9.354,15 C 8.057,15 7,13.979 7,12.722 7,10.604 9.104,10.125 10.488,10.209 10.438,8.854 10.625,5 14.5,5 18.271,5 18.729,8.771 18.512,10.209 20.021,10.104 22,10.646 22,12.722 22,13.979 20.943,15 19.646,15 Z m 2.104,4.25 c 0,0.689 -0.559,1.25 -1.25,1.25 -0.691,0 -1.25,-0.561 -1.25,-1.25 0,-0.689 0.559,-1.25 1.25,-1.25 0.691,0 1.25,0.561 1.25,1.25 z m -4,0 c 0,0.689 -0.559,1.25 -1.25,1.25 -0.691,0 -1.25,-0.561 -1.25,-1.25 0,-0.689 0.559,-1.25 1.25,-1.25 0.691,0 1.25,0.561 1.25,1.25 z m -4,0 c 0,0.689 -0.559,1.25 -1.25,1.25 -0.691,0 -1.25,-0.561 -1.25,-1.25 0,-0.689 0.559,-1.25 1.25,-1.25 0.691,0 1.25,0.561 1.25,1.25 z m -4,0 C 9.75,19.939 9.191,20.5 8.5,20.5 7.809,20.5 7.25,19.939 7.25,19.25 7.25,18.561 7.809,18 8.5,18 c 0.691,0 1.25,0.561 1.25,1.25 z m 2,2.5 c 0,0.689 -0.559,1.25 -1.25,1.25 -0.691,0 -1.25,-0.561 -1.25,-1.25 0,-0.689 0.559,-1.25 1.25,-1.25 0.691,0 1.25,0.561 1.25,1.25 z m 4.094,0 c 0,0.689 -0.559,1.25 -1.25,1.25 -0.691,0 -1.25,-0.561 -1.25,-1.25 0,-0.689 0.559,-1.25 1.25,-1.25 0.691,0 1.25,0.561 1.25,1.25 z m 3.906,0 c 0,0.689 -0.559,1.25 -1.25,1.25 -0.691,0 -1.25,-0.561 -1.25,-1.25 0,-0.689 0.559,-1.25 1.25,-1.25 0.691,0 1.25,0.561 1.25,1.25 z M 16.229,8.78 14.75,9.661 l 0,-1.633 -1,0 0,1.633 -1.494,-0.896 -0.506,0.867 1.499,0.896 -1.499,0.865 0.537,0.867 1.463,-0.865 0,1.633 1,0 0,-1.633 1.467,0.869 L 16.75,11.397 15.251,10.528 16.75,9.647 16.229,8.78 Z";

var WEATHER_SNOW_RAIN = "M9.125 19.41l-3.59 3.59-1.41-1.41 3.59-3.59 1.41 1.41zm1.125 1.09c-.691 0-1.25.56-1.25 1.25s.559 1.25 1.25 1.25 1.25-.56 1.25-1.25-.559-1.25-1.25-1.25zm13.75-7.778c0 2.362-1.949 4.278-4.355 4.278h-10.291c-1.55 0-2.902-.802-3.674-2h-1.326c-2.405 0-4.354-1.916-4.354-4.278 0-2.101 1.545-3.846 3.578-4.206.168-3.073 2.75-5.516 5.922-5.516 1.797 0 3.403.785 4.49 2.024 3.4-.286 6.254 2.258 6.432 5.492 2.033.359 3.578 2.105 3.578 4.206zm-15.422-4.206c.116-2.126 1.389-3.95 3.212-4.872-.576-.394-1.323-.644-2.29-.644-3.875 0-4.062 3.854-4.012 5.209-1.384-.084-3.488.395-3.488 2.513 0 1.256 1.057 2.278 2.354 2.278h.674c-.147-2.357 1.528-4.126 3.55-4.484zm13.422 4.206c0-2.076-1.979-2.618-3.488-2.512.217-1.439-.241-5.21-4.012-5.21-3.875 0-4.062 3.854-4.012 5.209-1.384-.084-3.488.395-3.488 2.513 0 1.256 1.057 2.278 2.354 2.278h10.291c1.298 0 2.355-1.022 2.355-2.278zm-9.25 5.278c-.691 0-1.25.56-1.25 1.25s.559 1.25 1.25 1.25 1.25-.56 1.25-1.25-.559-1.25-1.25-1.25zm1.25 3.59l1.41 1.41 3.59-3.59-1.41-1.41-3.59 3.59zm2.479-12.838l-1.479.881v-1.633h-1v1.633l-1.494-.896-.506.867 1.499.896-1.499.865.537.867 1.463-.865v1.633h1v-1.633l1.467.869.533-.867-1.499-.869 1.499-.88-.521-.868z";

var WEATHER_SNOW_BLOWING = "M11 11h-11v-2h11c.552 0 1-.448 1-1s-.448-1-1-1c-.403 0-.747.242-.905.587l-1.749-.956c.499-.965 1.494-1.631 2.654-1.631 3.971 0 3.969 6 0 6zm7 7c0-1.656-1.344-3-3-3h-15v2h15c.552 0 1 .448 1 1s-.448 1-1 1c-.403 0-.747-.242-.905-.587l-1.749.956c.499.965 1.494 1.631 2.654 1.631 1.656 0 3-1.344 3-3zm1.014-7.655c.082-.753.712-1.345 1.486-1.345.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5h-20.5v2h20.5c1.932 0 3.5-1.568 3.5-3.5s-1.568-3.5-3.5-3.5c-1.624 0-2.977 1.116-3.372 2.617l1.886.728zm-16.764-8.345c-.691 0-1.25.561-1.25 1.25s.559 1.25 1.25 1.25 1.25-.561 1.25-1.25-.559-1.25-1.25-1.25zm0 17.5c-.691 0-1.25.561-1.25 1.25s.559 1.25 1.25 1.25 1.25-.561 1.25-1.25-.559-1.25-1.25-1.25zm7.75 0c-.691 0-1.25.561-1.25 1.25s.559 1.25 1.25 1.25 1.25-.561 1.25-1.25-.559-1.25-1.25-1.25zm10 0c-.691 0-1.25.561-1.25 1.25s.559 1.25 1.25 1.25 1.25-.561 1.25-1.25-.559-1.25-1.25-1.25zm-14-1.75c-.691 0-1.25.561-1.25 1.25s.559 1.25 1.25 1.25 1.25-.561 1.25-1.25-.559-1.25-1.25-1.25zm16.75-1.75c-.691 0-1.25.561-1.25 1.25s.559 1.25 1.25 1.25 1.25-.561 1.25-1.25-.559-1.25-1.25-1.25zm-17.75-11.25c-.691 0-1.25.561-1.25 1.25s.559 1.25 1.25 1.25 1.25-.561 1.25-1.25-.559-1.25-1.25-1.25zm3-2.75c-.691 0-1.25.561-1.25 1.25s.559 1.25 1.25 1.25 1.25-.561 1.25-1.25-.559-1.25-1.25-1.25zm13.75 0c-.691 0-1.25.561-1.25 1.25s.559 1.25 1.25 1.25 1.25-.561 1.25-1.25-.559-1.25-1.25-1.25zm-3.75 1.75c-.691 0-1.25.561-1.25 1.25s.559 1.25 1.25 1.25 1.25-.561 1.25-1.25-.559-1.25-1.25-1.25zm-4-1.75c-.691 0-1.25.561-1.25 1.25s.559 1.25 1.25 1.25 1.25-.561 1.25-1.25-.559-1.25-1.25-1.25z";

var WEATHER_HAIL = "M20.422 7.516c-.178-3.233-3.031-5.778-6.432-5.492-1.087-1.239-2.693-2.024-4.49-2.024-3.172 0-5.754 2.443-5.922 5.516-2.033.359-3.578 2.105-3.578 4.206 0 2.362 1.949 4.278 4.354 4.278h1.326c.771 1.198 2.124 2 3.674 2h10.291c2.406 0 4.355-1.916 4.355-4.278 0-2.101-1.545-3.847-3.578-4.206zm-15.395 4.484h-.673c-1.297 0-2.354-1.022-2.354-2.278 0-2.118 2.104-2.597 3.488-2.512-.05-1.356.137-5.21 4.012-5.21.967 0 1.714.25 2.29.644-1.823.922-3.096 2.746-3.212 4.872-2.022.358-3.697 2.127-3.551 4.484zm14.618 2h-10.291c-1.297 0-2.354-1.022-2.354-2.278 0-2.118 2.104-2.597 3.488-2.512-.05-1.356.137-5.21 4.012-5.21 3.771 0 4.229 3.771 4.012 5.209 1.509-.105 3.488.437 3.488 2.513 0 1.256-1.057 2.278-2.355 2.278zm-4.645 8.5c0 .828-.67 1.5-1.5 1.5s-1.5-.672-1.5-1.5.67-1.5 1.5-1.5 1.5.672 1.5 1.5zm1.199-1.287l2.801-4.197-.016-.016-4.176 2.813c.608.298 1.098.79 1.391 1.4zm-6.199 1.287c0 .828-.67 1.5-1.5 1.5s-1.5-.672-1.5-1.5.67-1.5 1.5-1.5 1.5.672 1.5 1.5zm1.199-1.287l2.801-4.197-.016-.016-4.176 2.813c.608.298 1.098.79 1.391 1.4zm-6.199 1.287c0 .828-.67 1.5-1.5 1.5s-1.5-.672-1.5-1.5.67-1.5 1.5-1.5 1.5.672 1.5 1.5zm1.199-1.287l2.801-4.197-.016-.016-4.176 2.813c.608.298 1.098.79 1.391 1.4z";

var WEATHER_WIND = "M11 10h-11v-2h11c.552 0 1-.448 1-1s-.448-1-1-1c-.403 0-.747.242-.905.587l-1.749-.956c.499-.965 1.494-1.631 2.654-1.631 3.971 0 3.969 6 0 6zm7 7c0-1.656-1.344-3-3-3h-15v2h15c.552 0 1 .448 1 1s-.448 1-1 1c-.403 0-.747-.242-.905-.587l-1.749.956c.499.965 1.494 1.631 2.654 1.631 1.656 0 3-1.344 3-3zm1.014-7.655c.082-.753.712-1.345 1.486-1.345.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5h-20.5v2h20.5c1.932 0 3.5-1.568 3.5-3.5s-1.568-3.5-3.5-3.5c-1.624 0-2.977 1.116-3.372 2.617l1.886.728z";

var WEATHER_WIND_BREEZY = "M11 10h-5v-2h5c.552 0 1-.448 1-1s-.448-1-1-1c-.403 0-.747.242-.905.587l-1.749-.956c.499-.965 1.494-1.631 2.654-1.631 3.971 0 3.969 6 0 6zm7 7c0-1.656-1.344-3-3-3h-7v2h7c.552 0 1 .448 1 1s-.448 1-1 1c-.403 0-.747-.242-.905-.587l-1.749.956c.499.965 1.494 1.631 2.654 1.631 1.656 0 3-1.344 3-3zm1.014-7.655c.082-.753.712-1.345 1.486-1.345.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5h-8.5v2h8.5c1.932 0 3.5-1.568 3.5-3.5s-1.568-3.5-3.5-3.5c-1.624 0-2.977 1.116-3.372 2.617l1.886.728zm-9.014 1.655h-8v2h8v-2zm-4 3h-6v2h6v-2zm-2-6h-4v2h4v-2z";

var WEATHER_WIND_CLOUDY = "M18 20c0-1.656-1.344-3-3-3h-15v2h15c.552 0 1 .448 1 1s-.448 1-1 1c-.403 0-.747-.242-.905-.587l-1.749.956c.499.965 1.494 1.631 2.654 1.631 1.656 0 3-1.344 3-3zm1.014-7.655c.082-.753.712-1.345 1.486-1.345.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5h-20.5v2h20.5c1.932 0 3.5-1.568 3.5-3.5s-1.568-3.5-3.5-3.5c-1.624 0-2.977 1.116-3.372 2.617l1.886.728zm-11.014-9.345c3.213 0 3.367 3.293 3.185 4.281.977-.036 2.815.22 2.815 2.052 0 1.004-.869 1.667-1.854 1.667h-8.312c-.985 0-1.834-.663-1.834-1.667 0-1.818 1.779-2.116 2.815-2.052-.08-.901-.134-4.281 3.185-4.281zm0-2c-2.671 0-4.845 2.093-4.986 4.729-1.713.307-3.014 1.803-3.014 3.604 0 2.024 1.642 3.667 3.667 3.667h8.666c2.025 0 3.667-1.643 3.667-3.667 0-1.801-1.301-3.297-3.014-3.604-.141-2.636-2.315-4.729-4.986-4.729z";

var WEATHER_SUN_SET = "M4.069 17c-.041.328-.069.661-.069 1s.028.672.069 1h-4.069v-2h4.069zm8.931-16h-2v5h-3l4 4 4-4h-3v-5zm-5.897 10.688l-2.88-2.881-1.415 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm12.828 5.312c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-1.931 1c0 .341-.035.674-.09 1h-11.82c-.055-.326-.09-.659-.09-1 0-3.314 2.685-6 6-6 3.314 0 6 2.686 6 6zm-2.142-1c-.448-1.72-2.001-3-3.858-3-1.858 0-3.41 1.28-3.857 3h7.715zm3.92-8.193l-2.881 2.881c.528.411 1.003.886 1.414 1.414l2.881-2.881-1.414-1.414zm4.222 12.193h-24v2h24v-2z";

var WEATHER_SUN_RISE = "M4.069 17c-.041.328-.069.661-.069 1s.028.672.069 1h-4.069v-2h4.069zm6.931-7h2v-5h3l-4-4-4 4h3v5zm-3.897 1.688l-2.88-2.881-1.415 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm12.828 5.312c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-1.931 1c0 .341-.035.674-.09 1h-11.82c-.055-.326-.09-.659-.09-1 0-3.314 2.686-6 6-6s6 2.686 6 6zm-2.142-1c-.448-1.72-2.001-3-3.858-3-1.858 0-3.41 1.28-3.857 3h7.715zm3.92-8.193l-2.881 2.881c.528.411 1.003.886 1.414 1.414l2.881-2.881-1.414-1.414zm4.222 12.193h-24v2h24v-2z";

var WEATHER_MOON_SET = "M24 24h-24v-2h24v2zm-13-19h-3l4 4 4-4h-3v-5h-2v5zm1.797 8.064c2.38.384 4.203 2.451 4.203 4.936 0 .712-.155 1.386-.424 2h2.129c.19-.634.295-1.305.295-2 0-3.86-3.141-7-7.003-7-.546 0-1.105.063-1.673.195 1.571 4.472-.448 7.486-5.324 6.78-.002.707.104 1.385.294 2.025 5.548.444 7.918-2.92 7.503-6.936z";

var WEATHER_MOON_RISE = "M24 24h-24v-2h24v2zm-13-15h2v-5h3l-4-4-4 4h3v5zm1.797 4.064c2.38.384 4.203 2.451 4.203 4.936 0 .712-.155 1.386-.424 2h2.129c.19-.634.295-1.305.295-2 0-3.86-3.141-7-7.003-7-.546 0-1.105.063-1.673.195 1.571 4.472-.448 7.486-5.324 6.78-.002.707.104 1.385.294 2.025 5.548.444 7.918-2.92 7.503-6.936z";

var WEATHER_RAIN_THUNDERSTORM = "M6.406 17h3.594l-3.416 3h1.688l-6.272 4 2.542-3h-2.167l4.031-4zm14.016-9.484c-.178-3.232-3.031-5.777-6.432-5.491-1.087-1.24-2.693-2.025-4.49-2.025-3.172 0-5.754 2.443-5.922 5.516-2.033.359-3.578 2.105-3.578 4.206 0 2.362 1.949 4.278 4.354 4.278h1.326c.771 1.198 2.124 2 3.674 2h10.291c2.406 0 4.355-1.916 4.355-4.278 0-2.101-1.545-3.847-3.578-4.206zm-15.395 4.484h-.673c-1.297 0-2.354-1.021-2.354-2.278 0-2.118 2.104-2.597 3.488-2.513-.05-1.355.137-5.209 4.012-5.209.967 0 1.714.25 2.29.645-1.823.921-3.096 2.745-3.212 4.871-2.022.357-3.697 2.127-3.551 4.484zm14.618 2h-10.291c-1.297 0-2.354-1.021-2.354-2.278 0-2.118 2.104-2.597 3.488-2.513-.05-1.355.137-5.209 4.012-5.209 3.771 0 4.229 3.771 4.012 5.209 1.509-.105 3.488.437 3.488 2.513 0 1.257-1.057 2.278-2.355 2.278zm-6.935 6.713l-1.41-1.41 2.303-2.303 1.41 1.41-2.303 2.303zm-3.3 3.287l-1.41-1.397 2.303-2.303 1.41 1.41-2.303 2.29zm8.175-3.287l-1.41-1.41 2.303-2.303 1.41 1.41-2.303 2.303zm-3.301 3.287l-1.41-1.397 2.303-2.303 1.41 1.41-2.303 2.29z";

var WEATHER_LIGHTNING = "M13.802 13h3.042l-1.844 4h3l-6 7 2-5h-3l2.802-6zm6.62-5.484c-.178-3.232-3.031-5.777-6.432-5.491-1.087-1.24-2.693-2.025-4.49-2.025-3.172 0-5.754 2.443-5.922 5.516-2.033.359-3.578 2.105-3.578 4.206 0 2.362 1.949 4.278 4.354 4.278h1.326c.771 1.198 2.124 2 3.674 2h1.381l.935-2h-2.316c-1.297 0-2.354-1.021-2.354-2.278 0-2.118 2.104-2.597 3.488-2.513-.05-1.355.137-5.209 4.012-5.209 3.771 0 4.229 3.771 4.012 5.209 1.509-.105 3.488.437 3.488 2.513 0 1.257-1.057 2.278-2.355 2.278h-1.598l-.922 2h2.52c2.406 0 4.355-1.916 4.355-4.278 0-2.101-1.545-3.847-3.578-4.206zm-11.844 0c-2.022.357-3.697 2.127-3.551 4.484h-.673c-1.297 0-2.354-1.021-2.354-2.278 0-2.118 2.104-2.597 3.488-2.513-.05-1.355.137-5.209 4.012-5.209.967 0 1.714.25 2.29.645-1.823.921-3.096 2.745-3.212 4.871z";

var ICONS = exports.ICONS = function () {
    function ICONS() {
        _classCallCheck(this, ICONS);
    }

    _createClass(ICONS, null, [{
        key: "POWER_BUTTON_SVG",
        get: function get() {
            return POWER_BUTTON_SVG;
        }
    }, {
        key: "NETWORK_CONNECTION",
        get: function get() {
            return NETWORK_CONNECTION;
        }
    }, {
        key: "NETWORK_CONNECTION_NEGATIVE",
        get: function get() {
            return NETWORK_CONNECTION_NEGATIVE;
        }
    }, {
        key: "BATTERY_HALF",
        get: function get() {
            return BATTERY_HALF;
        }
    }, {
        key: "BATTERY_FULL",
        get: function get() {
            return BATTERY_FULL;
        }
    }, {
        key: "BATTERY_EMPTY",
        get: function get() {
            return BATTERY_EMPTY;
        }
    }, {
        key: "BATTERY_ON_AC",
        get: function get() {
            return BATTERY_ON_AC;
        }
    }, {
        key: "WEATHER_PARTLY_CLOUDY_DAY",
        get: function get() {
            return WEATHER_PARTLY_CLOUDY_DAY;
        }
    }, {
        key: "WEATHER_CLEAR_DAY",
        get: function get() {
            return WEATHER_CLEAR_DAY;
        }
    }, {
        key: "WEATHER_CLEAR_NIGHT",
        get: function get() {
            return WEATHER_CLEAR_NIGHT;
        }
    }, {
        key: "WEATHER_CLEAR_MOON_NIGHT",
        get: function get() {
            return WEATHER_CLEAR_MOON_NIGHT;
        }
    }, {
        key: "WEATHER_PARTLY_CLOUDY_NIGHT",
        get: function get() {
            return WEATHER_PARTLY_CLOUDY_NIGHT;
        }
    }, {
        key: "WEATHER_RAIN",
        get: function get() {
            return WEATHER_RAIN;
        }
    }, {
        key: "WEATHER_RAIN_HEAVY",
        get: function get() {
            return WEATHER_RAIN_HEAVY;
        }
    }, {
        key: "WEATHER_RAIN_LIGHT",
        get: function get() {
            return WEATHER_RAIN_LIGHT;
        }
    }, {
        key: "WEATHER_RAIN_CHANCE_DAY",
        get: function get() {
            return WEATHER_RAIN_CHANCE_DAY;
        }
    }, {
        key: "WEATHER_RAIN_CHANCE_NIGHT",
        get: function get() {
            return WEATHER_RAIN_CHANCE_NIGHT;
        }
    }, {
        key: "WEATHER_HEAT_WARNING",
        get: function get() {
            return WEATHER_HEAT_WARNING;
        }
    }, {
        key: "WEATHER_SNOW",
        get: function get() {
            return WEATHER_SNOW;
        }
    }, {
        key: "WEATHER_SNOW_HEAVY",
        get: function get() {
            return WEATHER_SNOW_HEAVY;
        }
    }, {
        key: "WEATHER_SNOW_RAIN",
        get: function get() {
            return WEATHER_SNOW_RAIN;
        }
    }, {
        key: "WEATHER_SNOW_CHANCE_DAY",
        get: function get() {
            return WEATHER_SNOW_CHANCE_DAY;
        }
    }, {
        key: "WEATHER_SNOW_CHANCE_NIGHT",
        get: function get() {
            return WEATHER_SNOW_CHANCE_NIGHT;
        }
    }, {
        key: "WEATHER_SNOW_BLOWING",
        get: function get() {
            return WEATHER_SNOW_BLOWING;
        }
    }, {
        key: "WEATHER_HAIL",
        get: function get() {
            return WEATHER_HAIL;
        }
    }, {
        key: "WEATHER_WIND",
        get: function get() {
            return WEATHER_WIND;
        }
    }, {
        key: "WEATHER_WIND_BREEZY",
        get: function get() {
            return WEATHER_WIND_BREEZY;
        }
    }, {
        key: "WEATHER_WIND_CLOUDY",
        get: function get() {
            return WEATHER_WIND_CLOUDY;
        }
    }, {
        key: "WEATHER_SUN_SET",
        get: function get() {
            return WEATHER_SUN_SET;
        }
    }, {
        key: "WEATHER_SUN_RISE",
        get: function get() {
            return WEATHER_SUN_RISE;
        }
    }, {
        key: "WEATHER_MOON_SET",
        get: function get() {
            return WEATHER_MOON_SET;
        }
    }, {
        key: "WEATHER_MOON_RISE",
        get: function get() {
            return WEATHER_MOON_RISE;
        }
    }, {
        key: "WEATHER_RAIN_THUNDERSTORM",
        get: function get() {
            return WEATHER_RAIN_THUNDERSTORM;
        }
    }, {
        key: "WEATHER_LIGHTNING",
        get: function get() {
            return WEATHER_LIGHTNING;
        }
    }]);

    return ICONS;
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HTTPStatusScreen = exports.LCARSBasicScreen = exports.LCARSBlankScreen = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LCARS = __webpack_require__(0);

var _LCARSComponents = __webpack_require__(1);

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LCARSScreen = function () {
    function LCARSScreen(id, title, width, height, properties) {
        _classCallCheck(this, LCARSScreen);

        this.id = id;
        this.title = title;
        this.subtitle = "";
        this.width = width;
        this.height = height;
        this.properties = properties;

        if (this.properties == undefined) {
            this.properties = _LCARS.LCARS.EF_TITLE | _LCARS.LCARS.EC_ORANGE | _LCARS.LCARS.ES_LABEL_E;
        }

        this.fontSize = _LCARS.LCARS.getLCARSFontSize(this.properties);

        document.body.style.MozUserSelect = 'none';
        document.body.style.WebkitUserSelect = 'none';

        this.LEFT = 10;
        this.TOP = 5;
        this.RIGHT = 10;
        this.BOTTOM = 15;

        this.element = document.createElementNS(_LCARS.LCARS.svgNS, "svg");

        this.element.setAttribute("id", this.id);
        this.element.setAttribute("width", this.width);
        this.element.setAttribute("height", this.height);
    }

    _createClass(LCARSScreen, [{
        key: 'drawScreen',
        value: function drawScreen() {}
    }, {
        key: 'drawHeader',
        value: function drawHeader() {

            this.CAP_WIDTH = this.fontSize * 0.6;
            this.headerThickness = this.fontSize * 0.9;

            this.titleElement = new _LCARSComponents.LCARSText("screen_title", this.title, this.width - (this.CAP_WIDTH + this.RIGHT + _LCARS.LCARS.LCARS_SPACE), this.fontSize - 2, this.properties);
            this.addComponent(this.titleElement);

            var textWidth1 = _LCARS.LCARS.getTextWidth(this.title, Math.round(this.fontSize * 1.0) + "pt " + _LCARS.LCARS.getFont());
            var textWidth2 = _LCARS.LCARS.getTextWidth2(this.title, Math.round(this.fontSize * 1.0) + "pt " + _LCARS.LCARS.getFont());
            var textWidth3 = _LCARS.LCARS.getTextWidth3(this.title, this.fontSize);
            //console.log("TextWidth-1 textWidth1: " + textWidth1);
            //console.log("TextWidth-2 textWidth2: " + textWidth2);
            //console.log("TextWidth-3 textWidth3: " + textWidth3);
            var textWidth = textWidth3;

            /**
             * Create the title bar with end caps.
             */
            this.hb_end_cap_w = new _LCARSComponents.LCARSRectangle("hb_end_cap_w", "", this.LEFT, this.TOP, this.CAP_WIDTH, this.headerThickness, _LCARS.LCARS.ES_RECT_RND_W | this.properties);
            this.addComponent(this.hb_end_cap_w);

            this.rect_title_bar = new _LCARSComponents.LCARSRectangle("rect_title_bar", "", this.LEFT + this.CAP_WIDTH + _LCARS.LCARS.LCARS_SPACE, this.TOP, this.width - 3 * _LCARS.LCARS.LCARS_SPACE - 2 * this.CAP_WIDTH - this.LEFT - this.RIGHT - textWidth, this.headerThickness, this.properties);
            this.addComponent(this.rect_title_bar);

            this.hb_end_cap_e = new _LCARSComponents.LCARSRectangle("hb_end_cap_e", "", this.width - (this.CAP_WIDTH + this.RIGHT), this.TOP, this.CAP_WIDTH, this.headerThickness, _LCARS.LCARS.ES_RECT_RND_E | this.properties);
            this.addComponent(this.hb_end_cap_e);
        }
    }, {
        key: 'drawFooter',
        value: function drawFooter() {

            this.CAP_WIDTH = this.fontSize * 0.6;
            this.footerThickness = this.fontSize * 0.9;

            /**
             * Create the title bar with end caps.
             */
            this.fb_end_cap_w = new _LCARSComponents.LCARSRectangle("fb_end_cap_w", "", this.LEFT, this.height - this.footerThickness - this.BOTTOM, this.CAP_WIDTH, this.footerThickness, _LCARS.LCARS.ES_RECT_RND_W | this.properties);
            this.addComponent(this.fb_end_cap_w);

            this.rect_footr_bar = new _LCARSComponents.LCARSRectangle("rect_footr_bar", "", this.LEFT + this.CAP_WIDTH + _LCARS.LCARS.LCARS_SPACE, this.height - this.footerThickness - this.BOTTOM, this.width - 2 * _LCARS.LCARS.LCARS_SPACE - 2 * this.CAP_WIDTH - this.LEFT - this.RIGHT, this.footerThickness, this.properties);
            this.addComponent(this.rect_footr_bar);

            this.fb_end_cap_e = new _LCARSComponents.LCARSRectangle("fb_end_cap_e", "", this.width - (this.CAP_WIDTH + this.RIGHT), this.height - this.footerThickness - this.BOTTOM, this.CAP_WIDTH, this.footerThickness, _LCARS.LCARS.ES_RECT_RND_E | this.properties);
            this.addComponent(this.fb_end_cap_e);
        }
    }, {
        key: 'setViewBox',
        value: function setViewBox(vb_x, vb_y, vb_width, vb_height) {
            this.vb_x = vb_x;
            this.vb_y = vb_y;
            this.vb_width = vb_width;
            this.vb_height = vb_height;

            this.element.setAttribute("width", '100%');
            this.element.setAttribute("height", '100%');

            this.element.setAttribute("viewBox", this.vb_x + " " + this.vb_y + " " + this.vb_width + " " + this.vb_height);
        }
    }, {
        key: 'setTransform',
        value: function setTransform(transform) {
            this.element.style.webkitTransform = transform;
        }
    }, {
        key: 'addComponent',
        value: function addComponent(component) {
            this.element.appendChild(component.element);
        }
    }]);

    return LCARSScreen;
}();

/**
 * Blank Screen - No header or footer or title
 */


var LCARSBlankScreen = exports.LCARSBlankScreen = function (_LCARSScreen) {
    _inherits(LCARSBlankScreen, _LCARSScreen);

    function LCARSBlankScreen(id, title, width, height, properties) {
        _classCallCheck(this, LCARSBlankScreen);

        var _this = _possibleConstructorReturn(this, (LCARSBlankScreen.__proto__ || Object.getPrototypeOf(LCARSBlankScreen)).call(this, id, title, width, height, properties));

        _this.drawScreen();

        return _this;
    }

    return LCARSBlankScreen;
}(LCARSScreen);

/**
 * Basic Screen - Includes a header, including the screen title, and a footer.
 */


var LCARSBasicScreen = exports.LCARSBasicScreen = function (_LCARSScreen2) {
    _inherits(LCARSBasicScreen, _LCARSScreen2);

    function LCARSBasicScreen(id, title, width, height, properties) {
        _classCallCheck(this, LCARSBasicScreen);

        var _this2 = _possibleConstructorReturn(this, (LCARSBasicScreen.__proto__ || Object.getPrototypeOf(LCARSBasicScreen)).call(this, id, title, width, height, properties));

        _this2.drawScreen();

        _this2.drawHeader();

        _this2.drawFooter();
        return _this2;
    }

    return LCARSBasicScreen;
}(LCARSScreen);

var HTTP_STATUS_CODES = {
    '200': 'OK',
    '201': 'Created',
    '202': 'Accepted',
    '203': 'Non-Authoritative Information',
    '204': 'No Content',
    '205': 'Reset Content',
    '206': 'Partial Content',
    '300': 'Multiple Choices',
    '301': 'Moved Permanently',
    '302': 'Found',
    '303': 'See Other',
    '304': 'Not Modified',
    '305': 'Use Proxy',
    '307': 'Temporary Redirect',
    '400': 'Bad Request',
    '401': 'Unauthorized',
    '402': 'Payment Required',
    '403': 'Forbidden',
    '404': 'Not Found',
    '405': 'Method Not Allowed',
    '406': 'Not Acceptable',
    '407': 'Proxy Authentication Required',
    '408': 'Request Timeout',
    '409': 'Conflict',
    '410': 'Gone',
    '411': 'Length Required',
    '412': 'Precondition Failed',
    '413': 'Request Entity Too Large',
    '414': 'Request-URI Too Long',
    '415': 'Unsupported Media Type',
    '416': 'Requested Range Not Satisfiable',
    '417': 'Expectation Failed',
    '500': 'Internal Server Error',
    '501': 'Not Implemented',
    '502': 'Bad Gateway',
    '503': 'Service Unavailable',
    '504': 'Gateway Timeout',
    '505': 'HTTP Version Not Supported'
};

/**
 * HTTP Status Screen - Includes a header, including the HTTP status as the screen title, and a footer.
 */

var HTTPStatusScreen = exports.HTTPStatusScreen = function (_LCARSScreen3) {
    _inherits(HTTPStatusScreen, _LCARSScreen3);

    function HTTPStatusScreen(id, width, height, properties, statusCode, statusDetailMessage) {
        _classCallCheck(this, HTTPStatusScreen);

        var _this3 = _possibleConstructorReturn(this, (HTTPStatusScreen.__proto__ || Object.getPrototypeOf(HTTPStatusScreen)).call(this, id, statusCode + " - " + HTTP_STATUS_CODES[statusCode].toUpperCase(), width, height, properties));

        _this3.statusCode = statusCode;
        _this3.statusDetailMessage = statusDetailMessage;
        _this3.statusMessage = "Unknown";

        if (statusCode >= 200 && statusCode < 300) {
            _this3.statusMessage = "Success";
        } else if (statusCode >= 300 && statusCode < 400) {
            _this3.statusMessage = "Redirection";
        } else if (statusCode >= 400 && statusCode < 500) {
            _this3.statusMessage = "Access Denied";
        } else if (statusCode >= 500 && statusCode < 600) {
            _this3.statusMessage = "Server Error";
        }

        _this3.drawHeader();

        _this3.drawFooter();

        _this3.drawScreen();

        return _this3;
    }

    _createClass(HTTPStatusScreen, [{
        key: 'drawScreen',
        value: function drawScreen() {

            var startx = this.width * 0.12;
            var starty = this.height * 0.25;
            var indentx = startx + 100;

            this.text_message = new _LCARSComponents.LCARSText(this.id + "_text_message", this.statusMessage.toUpperCase(), startx, starty, _LCARS.LCARS.EF_TITLE | _LCARS.LCARS.EC_RED);
            this.text_message.setTextFontSize(110);
            this.addComponent(this.text_message);

            this.text_message_sub_1 = new _LCARSComponents.LCARSText(this.id + "_text_message_sub_1", this.statusDetailMessage.toUpperCase(), indentx, starty + 100, _LCARS.LCARS.EF_SUBTITLE | _LCARS.LCARS.EC_RED);
            this.addComponent(this.text_message_sub_1);

            this.text_message_sub_2 = new _LCARSComponents.LCARSText(this.id + "_text_message_sub_2", "STATUS: " + this.title, indentx, starty + 150, _LCARS.LCARS.EF_SUBTITLE | _LCARS.LCARS.EC_RED);
            this.addComponent(this.text_message_sub_2);
        }
    }]);

    return HTTPStatusScreen;
}(LCARSScreen);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _LCARS = __webpack_require__(0);

var _ICONS = __webpack_require__(2);

var _LCARSComponents = __webpack_require__(1);

var _LCARSScreens = __webpack_require__(3);

_LCARS.LCARS.setFont("LCARS");

var testScreen = new _LCARSScreens.LCARSBasicScreen('test', 'LCARS COMPONENT TEST SCREEN', 1920, 1550);
testScreen.setViewBox(0, 0, 1920, 1550);
document.body.appendChild(testScreen.element);

var ulc = new _LCARSComponents.LCARSCorner("ULC", "Upper Left", 5, 100, 1000, 1, _LCARS.LCARS.ES_SHAPE_NW | _LCARS.LCARS.EC_ORANGE | _LCARS.LCARS.ES_STATIC);
testScreen.addComponent(ulc);
var llc = new _LCARSComponents.LCARSCorner("LLC", "Lower Left", 5, 197, 1000, 1, _LCARS.LCARS.ES_SHAPE_SW | _LCARS.LCARS.EC_ORANGE | _LCARS.LCARS.ES_STATIC);
testScreen.addComponent(llc);
var urc = new _LCARSComponents.LCARSCorner("URC", "Upper Right", 1010, 100, 905, 1, _LCARS.LCARS.ES_SHAPE_NE | _LCARS.LCARS.EC_ORANGE | _LCARS.LCARS.ES_STATIC);
testScreen.addComponent(urc);
var lrc = new _LCARSComponents.LCARSCorner("LRC", "Lower Right", 1010, 197, 905, 1, _LCARS.LCARS.ES_SHAPE_SE | _LCARS.LCARS.EC_ORANGE | _LCARS.LCARS.ES_STATIC);
testScreen.addComponent(lrc);

var ulc1 = new _LCARSComponents.LCARSCorner("ULC1", "Text", 5, 299, 500, 5, _LCARS.LCARS.ES_SHAPE_NW | _LCARS.LCARS.EC_WHITE | _LCARS.LCARS.ES_BLINKING);
testScreen.addComponent(ulc1);
var ulc2 = new _LCARSComponents.LCARSCorner("ULC2", "Text", 160, 339, 500, 4, _LCARS.LCARS.ES_SHAPE_NW | _LCARS.LCARS.EC_L_BLUE);
testScreen.addComponent(ulc2);
var ulc3 = new _LCARSComponents.LCARSCorner("ULC3", "Text", 320, 379, 500, 3, _LCARS.LCARS.ES_SHAPE_NW | _LCARS.LCARS.EC_M_BLUE);
testScreen.addComponent(ulc3);
var ulc4 = new _LCARSComponents.LCARSCorner("ULC4", "Text", 480, 419, 500, 2, _LCARS.LCARS.ES_SHAPE_NW | _LCARS.LCARS.EC_BLUE);
testScreen.addComponent(ulc4);
var ulc5 = new _LCARSComponents.LCARSCorner("ULC5", "Text", 640, 459, 500, 1, _LCARS.LCARS.ES_SHAPE_NW | _LCARS.LCARS.EC_D_BLUE);
testScreen.addComponent(ulc5);
var ulc6 = new _LCARSComponents.LCARSCorner("ULC6", "Text", 800, 499, 500, 1, _LCARS.LCARS.ES_SHAPE_NW | _LCARS.LCARS.EC_YELLOW);
testScreen.addComponent(ulc6);
var ulc7 = new _LCARSComponents.LCARSCorner("ULC7", "Text", 960, 539, 500, 1, _LCARS.LCARS.ES_SHAPE_NW | _LCARS.LCARS.EC_ORANGE);
testScreen.addComponent(ulc7);
var ulc8 = new _LCARSComponents.LCARSCorner("ULC8", "Text", 1120, 579, 500, 1, _LCARS.LCARS.ES_SHAPE_NW | _LCARS.LCARS.EC_RED);
testScreen.addComponent(ulc8);
var text_corner = new _LCARSComponents.LCARSText("text_corner", "LCARS Button Text Corner", 1625, 579 + _LCARS.LCARS.FONT_BUTTON_SIZE - 3, _LCARS.LCARS.EF_BUTTON | _LCARS.LCARS.EC_ORANGE);
testScreen.addComponent(text_corner);

var indicator_1 = new _LCARSComponents.LCARSIndicator("indicator_1", "indicator_off", 10, 680, 150, 60, _LCARS.LCARS.EC_ORANGE);
testScreen.addComponent(indicator_1);
var indicator_2 = new _LCARSComponents.LCARSIndicator("indicator_2", "indicator_on", 170, 680, 150, 60, _LCARS.LCARS.EC_ORANGE);
testScreen.addComponent(indicator_2);
indicator_2.on();
var indicator_3 = new _LCARSComponents.LCARSIndicator("indicator_3", "indicator_warn", 330, 680, 150, 60, _LCARS.LCARS.EC_ORANGE);
testScreen.addComponent(indicator_3);
indicator_3.warning();
var indicator_4 = new _LCARSComponents.LCARSIndicator("indicator_4", "indicator_error", 490, 680, 150, 60, _LCARS.LCARS.EC_ORANGE);
testScreen.addComponent(indicator_4);
indicator_4.error();
var indicator_5 = new _LCARSComponents.LCARSIndicator("indicator_5", "blink_off", 650, 680, 150, 60, _LCARS.LCARS.ES_RECT_RND | _LCARS.LCARS.EC_ORANGE);
testScreen.addComponent(indicator_5);
indicator_5.error();
indicator_5.off();
var indicator_6 = new _LCARSComponents.LCARSIndicator("indicator_6", "off_blink", 810, 680, 150, 60, _LCARS.LCARS.ES_LABEL_W | _LCARS.LCARS.ES_RECT_RND_W | _LCARS.LCARS.EC_ORANGE);
testScreen.addComponent(indicator_6);
indicator_6.on();
setInterval(function () {
    indicator_6.offBlink();
}, 500);
var indicator_7 = new _LCARSComponents.LCARSIndicator("indicator_7", "on_blink", 970, 680, 150, 60, _LCARS.LCARS.ES_LABEL_E | _LCARS.LCARS.ES_RECT_RND_E | _LCARS.LCARS.EC_ORANGE);
testScreen.addComponent(indicator_7);
setInterval(function () {
    indicator_7.onBlink();
}, 500);

var rect_2 = new _LCARSComponents.LCARSRectangle("RECT2", "rect2", 10, 750, 150, 60, _LCARS.LCARS.EC_ORANGE);
testScreen.addComponent(rect_2);
var rect_3 = new _LCARSComponents.LCARSRectangle("RECT3", "rect3", 10, 820, 150, 60, _LCARS.LCARS.ES_RECT_RND | _LCARS.LCARS.EC_ORANGE);
testScreen.addComponent(rect_3);
var rect_4 = new _LCARSComponents.LCARSRectangle("RECT4", "rect4", 10, 890, 150, 60, _LCARS.LCARS.ES_DISABLED | _LCARS.LCARS.ES_RECT_RND_W | _LCARS.LCARS.EC_ORANGE);
testScreen.addComponent(rect_4);
var rect_5 = new _LCARSComponents.LCARSRectangle("RECT5", "rect5", 10, 960, 150, 60, _LCARS.LCARS.ES_RECT_RND_E | _LCARS.LCARS.EC_ORANGE);
testScreen.addComponent(rect_5);

var rect_c = new _LCARSComponents.LCARSRectangle("rect_c", "CENTER", 500, 890, 150, 60, _LCARS.LCARS.ES_LABEL_C | _LCARS.LCARS.ES_RECT_RND | _LCARS.LCARS.EC_ORANGE);
testScreen.addComponent(rect_c);
var rect_s = new _LCARSComponents.LCARSRectangle("rect_s", "South", 500, 960, 150, 60, _LCARS.LCARS.ES_LABEL_S | _LCARS.LCARS.ES_RECT_RND | _LCARS.LCARS.EC_ORANGE);
testScreen.addComponent(rect_s);
var rect_sw = new _LCARSComponents.LCARSRectangle("rect_sw", "Southwest", 345, 960, 150, 60, _LCARS.LCARS.ES_LABEL_SW | _LCARS.LCARS.ES_RECT_RND | _LCARS.LCARS.EC_ORANGE);
testScreen.addComponent(rect_sw);
var rect_w = new _LCARSComponents.LCARSRectangle("rect_w", "West", 345, 890, 150, 60, _LCARS.LCARS.ES_LABEL_W | _LCARS.LCARS.ES_RECT_RND | _LCARS.LCARS.EC_ORANGE);
testScreen.addComponent(rect_w);
var rect_nw = new _LCARSComponents.LCARSRectangle("rect_nw", "Northwest", 345, 820, 150, 60, _LCARS.LCARS.ES_LABEL_NW | _LCARS.LCARS.ES_RECT_RND | _LCARS.LCARS.EC_ORANGE);
testScreen.addComponent(rect_nw);
var rect_n = new _LCARSComponents.LCARSRectangle("rect_n", "North", 500, 820, 150, 60, _LCARS.LCARS.ES_LABEL_N | _LCARS.LCARS.ES_RECT_RND | _LCARS.LCARS.EC_ORANGE);
testScreen.addComponent(rect_n);
var rect_ne = new _LCARSComponents.LCARSRectangle("rect_ne", "Northeast", 655, 820, 150, 60, _LCARS.LCARS.ES_LABEL_NE | _LCARS.LCARS.ES_RECT_RND | _LCARS.LCARS.EC_ORANGE);
testScreen.addComponent(rect_ne);
var rect_e = new _LCARSComponents.LCARSRectangle("rect_e", "East", 655, 890, 150, 60, _LCARS.LCARS.ES_LABEL_E | _LCARS.LCARS.ES_RECT_RND | _LCARS.LCARS.EC_ORANGE);
testScreen.addComponent(rect_e);
var rect_se = new _LCARSComponents.LCARSRectangle("rect_se", "Southeast", 655, 960, 150, 60, _LCARS.LCARS.ES_LABEL_SE | _LCARS.LCARS.ES_RECT_RND | _LCARS.LCARS.EC_ORANGE);
testScreen.addComponent(rect_se);

var button_1 = new _LCARSComponents.LCARSButton("button_1", "Button 1", 850, 750, 1, _LCARS.LCARS.EC_ORANGE);
testScreen.addComponent(button_1);
var button_2 = new _LCARSComponents.LCARSButton("button_2", "Button 2", 1005, 750, 2, _LCARS.LCARS.EC_ORANGE);
testScreen.addComponent(button_2);
var button_3 = new _LCARSComponents.LCARSButton("button_3", "Button 3", 1160, 750, 3, _LCARS.LCARS.EC_ORANGE);
testScreen.addComponent(button_3);
var button_4 = new _LCARSComponents.LCARSButton("button_4", "Button 4", 1315, 750, 4, _LCARS.LCARS.EC_ORANGE);
testScreen.addComponent(button_4);
var button_5 = new _LCARSComponents.LCARSButton("button_5", "Button 5", 850, 945, 0, _LCARS.LCARS.ES_RECT_RND | _LCARS.LCARS.EC_ORANGE);
button_5.setBlinking(true, _LCARS.LCARS.EC_D_BLUE, _LCARS.LCARS.BLINK_DURATION_WARNING);
testScreen.addComponent(button_5);
var button_6 = new _LCARSComponents.LCARSButton("button_6", "Button 6", 1005, 945, 0, _LCARS.LCARS.ES_RECT_RND | _LCARS.LCARS.EC_ORANGE);
button_6.setBlinking(true, null, _LCARS.LCARS.BLINK_DURATION_ERROR);
testScreen.addComponent(button_6);
var button_7 = new _LCARSComponents.LCARSButton("button_7", "Button 7", 1160, 945, 0, _LCARS.LCARS.ES_RECT_RND | _LCARS.LCARS.EC_ORANGE);
button_7.setBlinking(true);
testScreen.addComponent(button_7);

var text_1 = new _LCARSComponents.LCARSText("text_1", "LCARS Title Text", 1490, 750 + _LCARS.LCARS.FONT_TITLE_SIZE, _LCARS.LCARS.EF_TITLE | _LCARS.LCARS.EC_ORANGE | _LCARS.LCARS.ES_BLINKING);
testScreen.addComponent(text_1);
var text_2 = new _LCARSComponents.LCARSText("text_2", "LCARS Subtitle Text", 1490, 820 + _LCARS.LCARS.FONT_SUBTITLE_SIZE, _LCARS.LCARS.EF_SUBTITLE | _LCARS.LCARS.EC_ORANGE);
testScreen.addComponent(text_2);
var text_3 = new _LCARSComponents.LCARSText("text_3", "LCARS Button Text", 1490, 870 + _LCARS.LCARS.FONT_BUTTON_SIZE, _LCARS.LCARS.EF_BUTTON | _LCARS.LCARS.EC_ORANGE);
testScreen.addComponent(text_3);
var text_4 = new _LCARSComponents.LCARSText("text_4", "LCARS Body Text", 1490, 905 + _LCARS.LCARS.FONT_BODY_SIZE, _LCARS.LCARS.EF_BODY | _LCARS.LCARS.EC_ORANGE);
testScreen.addComponent(text_4);
var text_5 = new _LCARSComponents.LCARSText("text_5", "LCARS Tiny Text", 1490, 935 + _LCARS.LCARS.FONT_TINY_SIZE, _LCARS.LCARS.EF_TINY | _LCARS.LCARS.EC_ORANGE);
testScreen.addComponent(text_5);

var ellipsis_spinner = new _LCARSComponents.LCARSEllipsisSpinner("ellipsis_t", 1820, 750 + _LCARS.LCARS.FONT_TITLE_SIZE, _LCARS.LCARS.EF_TITLE | _LCARS.LCARS.EC_ORANGE);
testScreen.addComponent(ellipsis_spinner);
var ellipsis_spinner_st = new _LCARSComponents.LCARSEllipsisSpinner("ellipsis_st", 1820, 820 + _LCARS.LCARS.FONT_SUBTITLE_SIZE, _LCARS.LCARS.EF_SUBTITLE | _LCARS.LCARS.EC_ORANGE);
testScreen.addComponent(ellipsis_spinner_st);
var ellipsis_spinner_button = new _LCARSComponents.LCARSEllipsisSpinner("ellipsis_button", 1820, 870 + _LCARS.LCARS.FONT_BUTTON_SIZE, _LCARS.LCARS.EF_BUTTON | _LCARS.LCARS.EC_ORANGE);
testScreen.addComponent(ellipsis_spinner_button);
var ellipsis_spinner_body = new _LCARSComponents.LCARSEllipsisSpinner("ellipsis_body", 1820, 905 + _LCARS.LCARS.FONT_BODY_SIZE, _LCARS.LCARS.EF_BODY | _LCARS.LCARS.EC_ORANGE);
testScreen.addComponent(ellipsis_spinner_body);
var ellipsis_spinner_tiny = new _LCARSComponents.LCARSEllipsisSpinner("ellipsis_tiny", 1820, 935 + _LCARS.LCARS.FONT_TINY_SIZE, _LCARS.LCARS.EF_TINY | _LCARS.LCARS.EC_ORANGE);
testScreen.addComponent(ellipsis_spinner_tiny);

var testListener = function testListener(event) {
    console.log("testListener: " + event.target.id[0]);
};

var caption_keypad = new _LCARSComponents.LCARSText("caption_keypad", "Keypad Test", 30, 1100 - 10, _LCARS.LCARS.EF_BUTTON | _LCARS.LCARS.EC_ORANGE);
testScreen.addComponent(caption_keypad);

var keypad = new _LCARSComponents.LCARSKeypad("keypad_1", 20, 1100, _LCARS.LCARS.EF_SUBTITLE | _LCARS.LCARS.ES_RECT_RND | _LCARS.LCARS.EC_ORANGE, _LCARS.LCARS.EKP_AUX_KEYS | _LCARS.LCARS.ES_LABEL_SW | _LCARS.LCARS.EF_BUTTON | _LCARS.LCARS.EC_BLUE);
keypad.addEventListener("click", testListener);
keypad.setAuxText("", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE", "ZERO", "STAR", "HASH");
keypad.setButtonAuxText("1", "ONE");
testScreen.addComponent(keypad);

var rect_text_width = new _LCARSComponents.LCARSRectangle("rect_text_width", "", 600, 1100 - 5, 600, 5, _LCARS.LCARS.EC_ORANGE);
testScreen.addComponent(rect_text_width);
var caption_textarea = new _LCARSComponents.LCARSText("caption_textarea", "Text Area Wrap Test", 600, 1100 - 10, _LCARS.LCARS.EF_BUTTON | _LCARS.LCARS.EC_ORANGE);
testScreen.addComponent(caption_textarea);

var textArea = new _LCARSComponents.LCARSTextArea("textArea", "", 600, 1100, 600, 12, _LCARS.LCARS.EF_BUTTON | _LCARS.LCARS.EC_ORANGE);
testScreen.addComponent(textArea);

textArea.setNoWrap(false);
textArea.setLineSpacing(1.2);
textArea.appendLine("Ne malis tractatos vel. Mucius labores id mei. Per at purto sententiae appellantur. Id cibo vivendo epicuri nec. Nibh munere no mei, populo accusam vix ut, at mei epicuri dignissim. Prima laudem pri te.");
textArea.appendLine(" ");
textArea.appendLine("Eu mel regione luptatum adolescens, vim error graece ne, eu sea possim consectetuer. Id has copiosae praesent forensibus, bonorum qualisque sententiae nec in. Gubergren efficiantur te usu. Veniam aliquando repudiandae in nam, eu vel vituperata appellantur, eu civibus referrentur sit. Eius labores has an, per ea saperet nusquam indoctum. Est fugit forensibus ei. Appareat partiendo ut pro, at vocibus postulant pri, ea meis alienum accusamus cum.");

var rect_scrollingText_width = new _LCARSComponents.LCARSRectangle("rect_scrollingText_width", "", 1490, 1100 - 5, 400, 5, _LCARS.LCARS.EC_ORANGE);
testScreen.addComponent(rect_scrollingText_width);
var caption_scrolling_textarea = new _LCARSComponents.LCARSText("caption_scrolling_textarea", "Scrolling Text Area Test", 1490, 1100 - 10, _LCARS.LCARS.EF_BUTTON | _LCARS.LCARS.EC_ORANGE);
testScreen.addComponent(caption_scrolling_textarea);

var scrollingTextArea = new _LCARSComponents.LCARSTextArea("scrollingTextArea", "", 1490, 1100, 500, 10, _LCARS.LCARS.EF_BUTTON | _LCARS.LCARS.EC_ORANGE);
testScreen.addComponent(scrollingTextArea);

scrollingTextArea.setNoWrap(true);
scrollingTextArea.setTextFontSize(30);
scrollingTextArea.setLineSpacing(1.25);

var scrollTestInterval = setInterval(function () {
    textAreaScrollTest();
}, 1000);

var clock_1 = new _LCARSComponents.LCARSClock("clock_1", "LCARS clock_1 Text", 400, 175 + _LCARS.LCARS.FONT_TITLE_SIZE, _LCARS.LCARS.EF_TITLE | _LCARS.LCARS.EC_ORANGE, "dddd h:mm:ss TT d MMM yyyy");
testScreen.addComponent(clock_1);

clock_1.setTextFontSize(100);

setTimeout(function () {
    button_5.setBlinking(false);
}, 3000);
setTimeout(function () {
    button_5.setBlinking(true, _LCARS.LCARS.EC_D_BLUE, _LCARS.LCARS.BLINK_DURATION_WARNING);
}, 5000);
setTimeout(function () {
    button_5.setBlinking(false);
}, 10000);

setInterval(function () {
    button_4.offBlink();
}, 3000);
button_1.setVisible(false);
setInterval(function () {
    button_1.onBlink(10);
}, 100);

//calendar = new LCARSCalendar("calendar test", "LCARS Body Text", 1490, 850 + LCARS.FONT_BODY_SIZE, LCARS.EF_BODY | LCARS.EC_ORANGE);
//testScreen.addComponent(calendar);

var count = 1;
var textAreaScrollTest = function textAreaScrollTest() {
    scrollingTextArea.appendLine("added line " + count + " to test scrolling...");
    count += 10;
};

var powerButton = new _LCARSComponents.LCARSButton("power_button", "", 180, 820, 0, _LCARS.LCARS.ES_RECT_RND | _LCARS.LCARS.EC_ORANGE);
powerButton.setIcon(_ICONS.ICONS.POWER_BUTTON_SVG);
powerButton.setIconColor(_LCARS.LCARS.EC_BLUE);
powerButton.setIconPosition(_LCARS.LCARS.ES_LABEL_C);
testScreen.addComponent(powerButton);

var powerButton2 = new _LCARSComponents.LCARSButton("power_button2", "Power", 180, 890, 0, _LCARS.LCARS.ES_RECT_RND | _LCARS.LCARS.EC_ORANGE);
powerButton2.setIcon(_ICONS.ICONS.POWER_BUTTON_SVG);
powerButton2.setIconPosition(_LCARS.LCARS.ES_LABEL_W);
powerButton2.setEnabled(false);
testScreen.addComponent(powerButton2);

var powerButton3 = new _LCARSComponents.LCARSButton("power_button3", "Power", 180, 960, 0, _LCARS.LCARS.ES_LABEL_W | _LCARS.LCARS.ES_RECT_RND | _LCARS.LCARS.EC_ORANGE);
powerButton3.setIcon(_ICONS.ICONS.POWER_BUTTON_SVG);
powerButton3.setIconPosition(_LCARS.LCARS.ES_LABEL_E);
testScreen.addComponent(powerButton3);

var icon = new _LCARSComponents.LCARSIcon("power_button_icon", "", 200, 750, _LCARS.LCARS.EC_ORANGE, _ICONS.ICONS.POWER_BUTTON_SVG);
testScreen.addComponent(icon);

var icon2 = new _LCARSComponents.LCARSIcon("net_connection_icon", "", 265, 750, _LCARS.LCARS.EC_ORANGE, _ICONS.ICONS.NETWORK_CONNECTION);
testScreen.addComponent(icon2);

var icon3 = new _LCARSComponents.LCARSIcon("net_connection_neg_icon", "", 330, 750, _LCARS.LCARS.EC_ORANGE, _ICONS.ICONS.NETWORK_CONNECTION_NEGATIVE);
testScreen.addComponent(icon3);

var icon4 = new _LCARSComponents.LCARSIcon("battery_on_ac_icon", "", 395, 750, _LCARS.LCARS.EC_M_BLUE, _ICONS.ICONS.BATTERY_ON_AC);
testScreen.addComponent(icon4);

var icon5 = new _LCARSComponents.LCARSIcon("battery_full_icon", "", 460, 750, _LCARS.LCARS.EC_M_BLUE, _ICONS.ICONS.BATTERY_FULL);
testScreen.addComponent(icon5);

var icon6 = new _LCARSComponents.LCARSIcon("battery_half_icon", "", 525, 750, _LCARS.LCARS.EC_YELLOW, _ICONS.ICONS.BATTERY_HALF);
icon6.setBlinking(true);
testScreen.addComponent(icon6);

var icon7 = new _LCARSComponents.LCARSIcon("battery_empty_icon", "", 590, 750, _LCARS.LCARS.EC_RED, _ICONS.ICONS.BATTERY_EMPTY);
icon7.setBlinking(true, null, _LCARS.LCARS.BLINK_DURATION_ERROR);
testScreen.addComponent(icon7);

var icon8 = new _LCARSComponents.LCARSIcon("icon8", "", 1130, 680, _LCARS.LCARS.EC_ORANGE, _ICONS.ICONS.NETWORK_CONNECTION);
testScreen.addComponent(icon8);

var icon9 = new _LCARSComponents.LCARSIcon("icon9", "", 1195, 680, _LCARS.LCARS.EC_ORANGE, _ICONS.ICONS.NETWORK_CONNECTION_NEGATIVE);
testScreen.addComponent(icon9);

var icon8_disabled = new _LCARSComponents.LCARSIcon("icon8_disabled", "", 1260, 680, _LCARS.LCARS.ES_DISABLED | _LCARS.LCARS.EC_ORANGE, _ICONS.ICONS.NETWORK_CONNECTION);
testScreen.addComponent(icon8_disabled);
//icon8_disabled.setEnabled(false);

var icon9_disabled = new _LCARSComponents.LCARSIcon("icon9_disabled", "", 1325, 680, _LCARS.LCARS.EC_ORANGE, _ICONS.ICONS.NETWORK_CONNECTION_NEGATIVE);
testScreen.addComponent(icon9_disabled);
icon9_disabled.setEnabled(false);

var weather_icon_heat = new _LCARSComponents.LCARSIcon("weather_heat_warn", "", 675, 300, _LCARS.LCARS.EC_RED, _ICONS.ICONS.WEATHER_HEAT_WARNING);
weather_icon_heat.setBlinking(true);
testScreen.addComponent(weather_icon_heat);

var weather_icon1 = new _LCARSComponents.LCARSIcon("weather_clear_day", "", 740, 300, _LCARS.LCARS.EC_YELLOW, _ICONS.ICONS.WEATHER_CLEAR_DAY);
testScreen.addComponent(weather_icon1);

var weather_icon3 = new _LCARSComponents.LCARSIcon("weather_clear_night", "", 805, 300, _LCARS.LCARS.EC_L_BLUE, _ICONS.ICONS.WEATHER_CLEAR_NIGHT);
testScreen.addComponent(weather_icon3);

var weather_icon4 = new _LCARSComponents.LCARSIcon("weather_clear_moon", "", 870, 300, _LCARS.LCARS.EC_L_BLUE, _ICONS.ICONS.WEATHER_CLEAR_MOON_NIGHT);
testScreen.addComponent(weather_icon4);

var weather_icon2 = new _LCARSComponents.LCARSIcon("weather_part_cloud_day", "", 935, 300, _LCARS.LCARS.EC_YELLOW, _ICONS.ICONS.WEATHER_PARTLY_CLOUDY_DAY);
testScreen.addComponent(weather_icon2);

var weather_icon5 = new _LCARSComponents.LCARSIcon("weather_part_cloud_night", "", 1000, 300, _LCARS.LCARS.EC_L_BLUE, _ICONS.ICONS.WEATHER_PARTLY_CLOUDY_NIGHT);
testScreen.addComponent(weather_icon5);

var weather_icon6 = new _LCARSComponents.LCARSIcon("weather_rain", "", 1065, 300, _LCARS.LCARS.EC_ORANGE, _ICONS.ICONS.WEATHER_RAIN);
testScreen.addComponent(weather_icon6);

var weather_icon7 = new _LCARSComponents.LCARSIcon("weather_rain_heavy", "", 1130, 300, _LCARS.LCARS.EC_ORANGE, _ICONS.ICONS.WEATHER_RAIN_HEAVY);
testScreen.addComponent(weather_icon7);

var weather_icon8 = new _LCARSComponents.LCARSIcon("weather_rain_light", "", 1195, 300, _LCARS.LCARS.EC_ORANGE, _ICONS.ICONS.WEATHER_RAIN_LIGHT);
testScreen.addComponent(weather_icon8);

var weather_icon9 = new _LCARSComponents.LCARSIcon("weather_rain_chance_day", "", 1195, 360, _LCARS.LCARS.EC_YELLOW, _ICONS.ICONS.WEATHER_RAIN_CHANCE_DAY);
testScreen.addComponent(weather_icon9);

var weather_icon10 = new _LCARSComponents.LCARSIcon("weather_rain_chance_night", "", 1195, 420, _LCARS.LCARS.EC_L_BLUE, _ICONS.ICONS.WEATHER_RAIN_CHANCE_NIGHT);
testScreen.addComponent(weather_icon10);

var weather_icon11 = new _LCARSComponents.LCARSIcon("weather_snow", "", 1260, 300, _LCARS.LCARS.EC_WHITE, _ICONS.ICONS.WEATHER_SNOW);
testScreen.addComponent(weather_icon11);

var weather_icon12 = new _LCARSComponents.LCARSIcon("weather_snow_heavy", "", 1325, 300, _LCARS.LCARS.EC_WHITE, _ICONS.ICONS.WEATHER_SNOW_HEAVY);
testScreen.addComponent(weather_icon12);

var weather_icon13 = new _LCARSComponents.LCARSIcon("weather_snow_rain", "", 1390, 300, _LCARS.LCARS.EC_WHITE, _ICONS.ICONS.WEATHER_SNOW_RAIN);
testScreen.addComponent(weather_icon13);

var weather_icon14 = new _LCARSComponents.LCARSIcon("weather_snow_chance_day", "", 1390, 360, _LCARS.LCARS.EC_WHITE, _ICONS.ICONS.WEATHER_SNOW_CHANCE_DAY);
testScreen.addComponent(weather_icon14);

var weather_icon15 = new _LCARSComponents.LCARSIcon("weather_snow_chance_night", "", 1390, 420, _LCARS.LCARS.EC_L_BLUE, _ICONS.ICONS.WEATHER_SNOW_CHANCE_NIGHT);
testScreen.addComponent(weather_icon15);

var weather_icon16 = new _LCARSComponents.LCARSIcon("weather_snow_blowing", "", 1455, 300, _LCARS.LCARS.EC_WHITE, _ICONS.ICONS.WEATHER_SNOW_BLOWING);
testScreen.addComponent(weather_icon16);

var weather_icon17 = new _LCARSComponents.LCARSIcon("weather_wind", "", 1520, 300, _LCARS.LCARS.EC_WHITE, _ICONS.ICONS.WEATHER_WIND);
testScreen.addComponent(weather_icon17);

var weather_icon18 = new _LCARSComponents.LCARSIcon("weather_hail", "", 1585, 300, _LCARS.LCARS.EC_ORANGE, _ICONS.ICONS.WEATHER_HAIL);
testScreen.addComponent(weather_icon18);

var weather_icon19 = new _LCARSComponents.LCARSIcon("weather_lightning", "", 1650, 300, _LCARS.LCARS.EC_ORANGE, _ICONS.ICONS.WEATHER_LIGHTNING);
testScreen.addComponent(weather_icon19);

var weather_icon20 = new _LCARSComponents.LCARSIcon("weather_rain-thunderstorm", "", 1715, 300, _LCARS.LCARS.EC_ORANGE, _ICONS.ICONS.WEATHER_RAIN_THUNDERSTORM);
testScreen.addComponent(weather_icon20);

var weather_icon21 = new _LCARSComponents.LCARSIcon("weather_sun_rise", "", 1845, 300, _LCARS.LCARS.EC_YELLOW, _ICONS.ICONS.WEATHER_SUN_RISE);
testScreen.addComponent(weather_icon21);

var weather_icon22 = new _LCARSComponents.LCARSIcon("weather_sun_set", "", 1845, 360, _LCARS.LCARS.EC_YELLOW, _ICONS.ICONS.WEATHER_SUN_SET);
testScreen.addComponent(weather_icon22);

var weather_icon23 = new _LCARSComponents.LCARSIcon("weather_moon_rise", "", 1845, 420, _LCARS.LCARS.EC_L_BLUE, _ICONS.ICONS.WEATHER_MOON_RISE);
testScreen.addComponent(weather_icon23);

var weather_icon24 = new _LCARSComponents.LCARSIcon("weather_moon_set", "", 1845, 480, _LCARS.LCARS.EC_L_BLUE, _ICONS.ICONS.WEATHER_MOON_SET);
testScreen.addComponent(weather_icon24);

var weather_icon25 = new _LCARSComponents.LCARSIcon("weather_wind_breezy", "", 1520, 360, _LCARS.LCARS.EC_WHITE, _ICONS.ICONS.WEATHER_WIND_BREEZY);
testScreen.addComponent(weather_icon25);

var weather_icon26 = new _LCARSComponents.LCARSIcon("weather_wind_cloudy", "", 1520, 420, _LCARS.LCARS.EC_WHITE, _ICONS.ICONS.WEATHER_WIND_CLOUDY);
testScreen.addComponent(weather_icon26);

/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map