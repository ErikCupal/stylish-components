(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("typestyle"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["typestyle", "react"], factory);
	else if(typeof exports === 'object')
		exports["stylishComponents"] = factory(require("typestyle"), require("react"));
	else
		root["stylishComponents"] = factory(root["typestyle"], root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("typestyle");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.debug = exports.wbr = exports.video = exports.ul = exports.u = exports.track = exports.tr = exports.title = exports.time = exports.thead = exports.th = exports.tfoot = exports.textarea = exports.td = exports.tbody = exports.table = exports.sup = exports.summary = exports.sub = exports.strong = exports.span = exports.source = exports.small = exports.select = exports.section = exports.script = exports.samp = exports.s = exports.ruby = exports.rt = exports.rp = exports.q = exports.progress = exports.pre = exports.picture = exports.param = exports.p = exports.output = exports.option = exports.optgroup = exports.ol = exports.object = exports.noscript = exports.nav = exports.meter = exports.meta = exports.menuitem = exports.menu = exports.mark = exports.map = exports.main = exports.link = exports.li = exports.legend = exports.label = exports.keygen = exports.kbd = exports.ins = exports.input = exports.img = exports.iframe = exports.i = exports.html = exports.hr = exports.hgroup = exports.header = exports.head = exports.h6 = exports.h5 = exports.h4 = exports.h3 = exports.h2 = exports.h1 = exports.form = exports.footer = exports.figure = exports.figcaption = exports.fieldset = exports.embed = exports.em = exports.dt = exports.dl = exports.div = exports.dialog = exports.dfn = exports.details = exports.del = exports.dd = exports.datalist = exports.data = exports.colgroup = exports.col = exports.code = exports.cite = exports.caption = exports.canvas = exports.button = exports.br = exports.body = exports.blockquote = exports.big = exports.bdo = exports.bdi = exports.base = exports.b = exports.audio = exports.aside = exports.article = exports.area = exports.address = exports.abbr = exports.a = exports.transparent = exports.yellowgreen = exports.yellow = exports.whitesmoke = exports.white = exports.wheat = exports.violet = exports.turquoise = exports.tomato = exports.thistle = exports.teal = exports.tan = exports.steelblue = exports.springgreen = exports.snow = exports.slategrey = exports.slategray = exports.slateblue = exports.skyblue = exports.silver = exports.sienna = exports.seashell = exports.seagreen = exports.sandybrown = exports.salmon = exports.saddlebrown = exports.royalblue = exports.rosybrown = exports.red = exports.purple = exports.powderblue = exports.plum = exports.pink = exports.peru = exports.peachpuff = exports.papayawhip = exports.palevioletred = exports.paleturquoise = exports.palegreen = exports.palegoldenrod = exports.orchid = exports.orangered = exports.orange = exports.olivedrab = exports.olive = exports.oldlace = exports.navy = exports.navajowhite = exports.moccasin = exports.mistyrose = exports.mintcream = exports.midnightblue = exports.mediumvioletred = exports.mediumturquoise = exports.mediumspringgreen = exports.mediumslateblue = exports.mediumseagreen = exports.mediumpurple = exports.mediumorchid = exports.mediumblue = exports.mediumaquamarine = exports.maroon = exports.magenta = exports.linen = exports.limegreen = exports.lime = exports.lightyellow = exports.lightsteelblue = exports.lightslategrey = exports.lightslategray = exports.lightskyblue = exports.lightseagreen = exports.lightsalmon = exports.lightpink = exports.lightgrey = exports.lightgreen = exports.lightgray = exports.lightgoldenrodyellow = exports.lightcyan = exports.lightcoral = exports.lightblue = exports.lemonchiffon = exports.lawngreen = exports.lavenderblush = exports.lavender = exports.khaki = exports.ivory = exports.indigo = exports.indianred = exports.hotpink = exports.honeydew = exports.grey = exports.greenyellow = exports.green = exports.gray = exports.goldenrod = exports.gold = exports.ghostwhite = exports.gainsboro = exports.fuchsia = exports.forestgreen = exports.floralwhite = exports.firebrick = exports.dodgerblue = exports.dimgrey = exports.dimgray = exports.deepskyblue = exports.deeppink = exports.darkviolet = exports.darkturquoise = exports.darkslategrey = exports.darkslategray = exports.darkslateblue = exports.darkseagreen = exports.darksalmon = exports.darkred = exports.darkorchid = exports.darkorange = exports.darkolivegreen = exports.darkmagenta = exports.darkkhaki = exports.darkgrey = exports.darkgreen = exports.darkgray = exports.darkgoldenrod = exports.darkcyan = exports.darkblue = exports.cyan = exports.crimson = exports.cornsilk = exports.cornflowerblue = exports.coral = exports.chocolate = exports.chartreuse = exports.cadetblue = exports.burlywood = exports.brown = exports.blueviolet = exports.blue = exports.blanchedalmond = exports.black = exports.bisque = exports.beige = exports.azure = exports.aquamarine = exports.aqua = exports.antiquewhite = exports.aliceblue = exports.lg = exports.md = exports.sm = exports.factory = exports.extend = undefined;

var _stylish = __webpack_require__(4);

Object.defineProperty(exports, 'extend', {
    enumerable: true,
    get: function get() {
        return _stylish.extend;
    }
});
Object.defineProperty(exports, 'factory', {
    enumerable: true,
    get: function get() {
        return _stylish.factory;
    }
});

var _media = __webpack_require__(3);

Object.defineProperty(exports, 'sm', {
    enumerable: true,
    get: function get() {
        return _media.sm;
    }
});
Object.defineProperty(exports, 'md', {
    enumerable: true,
    get: function get() {
        return _media.md;
    }
});
Object.defineProperty(exports, 'lg', {
    enumerable: true,
    get: function get() {
        return _media.lg;
    }
});
exports.default = _stylish.extend;
// Colors

var aliceblue = exports.aliceblue = 'aliceblue';
var antiquewhite = exports.antiquewhite = 'antiquewhite';
var aqua = exports.aqua = 'aqua';
var aquamarine = exports.aquamarine = 'aquamarine';
var azure = exports.azure = 'azure';
var beige = exports.beige = 'beige';
var bisque = exports.bisque = 'bisque';
var black = exports.black = 'black';
var blanchedalmond = exports.blanchedalmond = 'blanchedalmond';
var blue = exports.blue = 'blue';
var blueviolet = exports.blueviolet = 'blueviolet';
var brown = exports.brown = 'brown';
var burlywood = exports.burlywood = 'burlywood';
var cadetblue = exports.cadetblue = 'cadetblue';
var chartreuse = exports.chartreuse = 'chartreuse';
var chocolate = exports.chocolate = 'chocolate';
var coral = exports.coral = 'coral';
var cornflowerblue = exports.cornflowerblue = 'cornflowerblue';
var cornsilk = exports.cornsilk = 'cornsilk';
var crimson = exports.crimson = 'crimson';
var cyan = exports.cyan = 'cyan';
var darkblue = exports.darkblue = 'darkblue';
var darkcyan = exports.darkcyan = 'darkcyan';
var darkgoldenrod = exports.darkgoldenrod = 'darkgoldenrod';
var darkgray = exports.darkgray = 'darkgray';
var darkgreen = exports.darkgreen = 'darkgreen';
var darkgrey = exports.darkgrey = 'darkgrey';
var darkkhaki = exports.darkkhaki = 'darkkhaki';
var darkmagenta = exports.darkmagenta = 'darkmagenta';
var darkolivegreen = exports.darkolivegreen = 'darkolivegreen';
var darkorange = exports.darkorange = 'darkorange';
var darkorchid = exports.darkorchid = 'darkorchid';
var darkred = exports.darkred = 'darkred';
var darksalmon = exports.darksalmon = 'darksalmon';
var darkseagreen = exports.darkseagreen = 'darkseagreen';
var darkslateblue = exports.darkslateblue = 'darkslateblue';
var darkslategray = exports.darkslategray = 'darkslategray';
var darkslategrey = exports.darkslategrey = 'darkslategrey';
var darkturquoise = exports.darkturquoise = 'darkturquoise';
var darkviolet = exports.darkviolet = 'darkviolet';
var deeppink = exports.deeppink = 'deeppink';
var deepskyblue = exports.deepskyblue = 'deepskyblue';
var dimgray = exports.dimgray = 'dimgray';
var dimgrey = exports.dimgrey = 'dimgrey';
var dodgerblue = exports.dodgerblue = 'dodgerblue';
var firebrick = exports.firebrick = 'firebrick';
var floralwhite = exports.floralwhite = 'floralwhite';
var forestgreen = exports.forestgreen = 'forestgreen';
var fuchsia = exports.fuchsia = 'fuchsia';
var gainsboro = exports.gainsboro = 'gainsboro';
var ghostwhite = exports.ghostwhite = 'ghostwhite';
var gold = exports.gold = 'gold';
var goldenrod = exports.goldenrod = 'goldenrod';
var gray = exports.gray = 'gray';
var green = exports.green = 'green';
var greenyellow = exports.greenyellow = 'greenyellow';
var grey = exports.grey = 'grey';
var honeydew = exports.honeydew = 'honeydew';
var hotpink = exports.hotpink = 'hotpink';
var indianred = exports.indianred = 'indianred';
var indigo = exports.indigo = 'indigo';
var ivory = exports.ivory = 'ivory';
var khaki = exports.khaki = 'khaki';
var lavender = exports.lavender = 'lavender';
var lavenderblush = exports.lavenderblush = 'lavenderblush';
var lawngreen = exports.lawngreen = 'lawngreen';
var lemonchiffon = exports.lemonchiffon = 'lemonchiffon';
var lightblue = exports.lightblue = 'lightblue';
var lightcoral = exports.lightcoral = 'lightcoral';
var lightcyan = exports.lightcyan = 'lightcyan';
var lightgoldenrodyellow = exports.lightgoldenrodyellow = 'lightgoldenrodyellow';
var lightgray = exports.lightgray = 'lightgray';
var lightgreen = exports.lightgreen = 'lightgreen';
var lightgrey = exports.lightgrey = 'lightgrey';
var lightpink = exports.lightpink = 'lightpink';
var lightsalmon = exports.lightsalmon = 'lightsalmon';
var lightseagreen = exports.lightseagreen = 'lightseagreen';
var lightskyblue = exports.lightskyblue = 'lightskyblue';
var lightslategray = exports.lightslategray = 'lightslategray';
var lightslategrey = exports.lightslategrey = 'lightslategrey';
var lightsteelblue = exports.lightsteelblue = 'lightsteelblue';
var lightyellow = exports.lightyellow = 'lightyellow';
var lime = exports.lime = 'lime';
var limegreen = exports.limegreen = 'limegreen';
var linen = exports.linen = 'linen';
var magenta = exports.magenta = 'magenta';
var maroon = exports.maroon = 'maroon';
var mediumaquamarine = exports.mediumaquamarine = 'mediumaquamarine';
var mediumblue = exports.mediumblue = 'mediumblue';
var mediumorchid = exports.mediumorchid = 'mediumorchid';
var mediumpurple = exports.mediumpurple = 'mediumpurple';
var mediumseagreen = exports.mediumseagreen = 'mediumseagreen';
var mediumslateblue = exports.mediumslateblue = 'mediumslateblue';
var mediumspringgreen = exports.mediumspringgreen = 'mediumspringgreen';
var mediumturquoise = exports.mediumturquoise = 'mediumturquoise';
var mediumvioletred = exports.mediumvioletred = 'mediumvioletred';
var midnightblue = exports.midnightblue = 'midnightblue';
var mintcream = exports.mintcream = 'mintcream';
var mistyrose = exports.mistyrose = 'mistyrose';
var moccasin = exports.moccasin = 'moccasin';
var navajowhite = exports.navajowhite = 'navajowhite';
var navy = exports.navy = 'navy';
var oldlace = exports.oldlace = 'oldlace';
var olive = exports.olive = 'olive';
var olivedrab = exports.olivedrab = 'olivedrab';
var orange = exports.orange = 'orange';
var orangered = exports.orangered = 'orangered';
var orchid = exports.orchid = 'orchid';
var palegoldenrod = exports.palegoldenrod = 'palegoldenrod';
var palegreen = exports.palegreen = 'palegreen';
var paleturquoise = exports.paleturquoise = 'paleturquoise';
var palevioletred = exports.palevioletred = 'palevioletred';
var papayawhip = exports.papayawhip = 'papayawhip';
var peachpuff = exports.peachpuff = 'peachpuff';
var peru = exports.peru = 'peru';
var pink = exports.pink = 'pink';
var plum = exports.plum = 'plum';
var powderblue = exports.powderblue = 'powderblue';
var purple = exports.purple = 'purple';
var red = exports.red = 'red';
var rosybrown = exports.rosybrown = 'rosybrown';
var royalblue = exports.royalblue = 'royalblue';
var saddlebrown = exports.saddlebrown = 'saddlebrown';
var salmon = exports.salmon = 'salmon';
var sandybrown = exports.sandybrown = 'sandybrown';
var seagreen = exports.seagreen = 'seagreen';
var seashell = exports.seashell = 'seashell';
var sienna = exports.sienna = 'sienna';
var silver = exports.silver = 'silver';
var skyblue = exports.skyblue = 'skyblue';
var slateblue = exports.slateblue = 'slateblue';
var slategray = exports.slategray = 'slategray';
var slategrey = exports.slategrey = 'slategrey';
var snow = exports.snow = 'snow';
var springgreen = exports.springgreen = 'springgreen';
var steelblue = exports.steelblue = 'steelblue';
var tan = exports.tan = 'tan';
var teal = exports.teal = 'teal';
var thistle = exports.thistle = 'thistle';
var tomato = exports.tomato = 'tomato';
var turquoise = exports.turquoise = 'turquoise';
var violet = exports.violet = 'violet';
var wheat = exports.wheat = 'wheat';
var white = exports.white = 'white';
var whitesmoke = exports.whitesmoke = 'whitesmoke';
var yellow = exports.yellow = 'yellow';
var yellowgreen = exports.yellowgreen = 'yellowgreen';
var transparent = exports.transparent = 'transparent';
// Styled
var a = exports.a = (0, _stylish.factory)('a');
var abbr = exports.abbr = (0, _stylish.factory)('abbr');
var address = exports.address = (0, _stylish.factory)('address');
var area = exports.area = (0, _stylish.factory)('area');
var article = exports.article = (0, _stylish.factory)('article');
var aside = exports.aside = (0, _stylish.factory)('aside');
var audio = exports.audio = (0, _stylish.factory)('audio');
var b = exports.b = (0, _stylish.factory)('b');
var base = exports.base = (0, _stylish.factory)('base');
var bdi = exports.bdi = (0, _stylish.factory)('bdi');
var bdo = exports.bdo = (0, _stylish.factory)('bdo');
var big = exports.big = (0, _stylish.factory)('big');
var blockquote = exports.blockquote = (0, _stylish.factory)('blockquote');
var body = exports.body = (0, _stylish.factory)('body');
var br = exports.br = (0, _stylish.factory)('br');
var button = exports.button = (0, _stylish.factory)('button');
var canvas = exports.canvas = (0, _stylish.factory)('canvas');
var caption = exports.caption = (0, _stylish.factory)('caption');
var cite = exports.cite = (0, _stylish.factory)('cite');
var code = exports.code = (0, _stylish.factory)('code');
var col = exports.col = (0, _stylish.factory)('col');
var colgroup = exports.colgroup = (0, _stylish.factory)('colgroup');
var data = exports.data = (0, _stylish.factory)('data');
var datalist = exports.datalist = (0, _stylish.factory)('datalist');
var dd = exports.dd = (0, _stylish.factory)('dd');
var del = exports.del = (0, _stylish.factory)('del');
var details = exports.details = (0, _stylish.factory)('details');
var dfn = exports.dfn = (0, _stylish.factory)('dfn');
var dialog = exports.dialog = (0, _stylish.factory)('dialog');
var div = exports.div = (0, _stylish.factory)('div');
var dl = exports.dl = (0, _stylish.factory)('dl');
var dt = exports.dt = (0, _stylish.factory)('dt');
var em = exports.em = (0, _stylish.factory)('em');
var embed = exports.embed = (0, _stylish.factory)('embed');
var fieldset = exports.fieldset = (0, _stylish.factory)('fieldset');
var figcaption = exports.figcaption = (0, _stylish.factory)('figcaption');
var figure = exports.figure = (0, _stylish.factory)('figure');
var footer = exports.footer = (0, _stylish.factory)('footer');
var form = exports.form = (0, _stylish.factory)('form');
var h1 = exports.h1 = (0, _stylish.factory)('h1');
var h2 = exports.h2 = (0, _stylish.factory)('h2');
var h3 = exports.h3 = (0, _stylish.factory)('h3');
var h4 = exports.h4 = (0, _stylish.factory)('h4');
var h5 = exports.h5 = (0, _stylish.factory)('h5');
var h6 = exports.h6 = (0, _stylish.factory)('h6');
var head = exports.head = (0, _stylish.factory)('head');
var header = exports.header = (0, _stylish.factory)('header');
var hgroup = exports.hgroup = (0, _stylish.factory)('hgroup');
var hr = exports.hr = (0, _stylish.factory)('hr');
var html = exports.html = (0, _stylish.factory)('html');
var i = exports.i = (0, _stylish.factory)('i');
var iframe = exports.iframe = (0, _stylish.factory)('iframe');
var img = exports.img = (0, _stylish.factory)('img');
var input = exports.input = (0, _stylish.factory)('input');
var ins = exports.ins = (0, _stylish.factory)('ins');
var kbd = exports.kbd = (0, _stylish.factory)('kbd');
var keygen = exports.keygen = (0, _stylish.factory)('keygen');
var label = exports.label = (0, _stylish.factory)('label');
var legend = exports.legend = (0, _stylish.factory)('legend');
var li = exports.li = (0, _stylish.factory)('li');
var link = exports.link = (0, _stylish.factory)('link');
var main = exports.main = (0, _stylish.factory)('main');
var map = exports.map = (0, _stylish.factory)('map');
var mark = exports.mark = (0, _stylish.factory)('mark');
var menu = exports.menu = (0, _stylish.factory)('menu');
var menuitem = exports.menuitem = (0, _stylish.factory)('menuitem');
var meta = exports.meta = (0, _stylish.factory)('meta');
var meter = exports.meter = (0, _stylish.factory)('meter');
var nav = exports.nav = (0, _stylish.factory)('nav');
var noscript = exports.noscript = (0, _stylish.factory)('noscript');
var object = exports.object = (0, _stylish.factory)('object');
var ol = exports.ol = (0, _stylish.factory)('ol');
var optgroup = exports.optgroup = (0, _stylish.factory)('optgroup');
var option = exports.option = (0, _stylish.factory)('option');
var output = exports.output = (0, _stylish.factory)('output');
var p = exports.p = (0, _stylish.factory)('p');
var param = exports.param = (0, _stylish.factory)('param');
var picture = exports.picture = (0, _stylish.factory)('picture');
var pre = exports.pre = (0, _stylish.factory)('pre');
var progress = exports.progress = (0, _stylish.factory)('progress');
var q = exports.q = (0, _stylish.factory)('q');
var rp = exports.rp = (0, _stylish.factory)('rp');
var rt = exports.rt = (0, _stylish.factory)('rt');
var ruby = exports.ruby = (0, _stylish.factory)('ruby');
var s = exports.s = (0, _stylish.factory)('s');
var samp = exports.samp = (0, _stylish.factory)('samp');
var script = exports.script = (0, _stylish.factory)('script');
var section = exports.section = (0, _stylish.factory)('section');
var select = exports.select = (0, _stylish.factory)('select');
var small = exports.small = (0, _stylish.factory)('small');
var source = exports.source = (0, _stylish.factory)('source');
var span = exports.span = (0, _stylish.factory)('span');
var strong = exports.strong = (0, _stylish.factory)('strong');
var sub = exports.sub = (0, _stylish.factory)('sub');
var summary = exports.summary = (0, _stylish.factory)('summary');
var sup = exports.sup = (0, _stylish.factory)('sup');
var table = exports.table = (0, _stylish.factory)('table');
var tbody = exports.tbody = (0, _stylish.factory)('tbody');
var td = exports.td = (0, _stylish.factory)('td');
var textarea = exports.textarea = (0, _stylish.factory)('textarea');
var tfoot = exports.tfoot = (0, _stylish.factory)('tfoot');
var th = exports.th = (0, _stylish.factory)('th');
var thead = exports.thead = (0, _stylish.factory)('thead');
var time = exports.time = (0, _stylish.factory)('time');
var title = exports.title = (0, _stylish.factory)('title');
var tr = exports.tr = (0, _stylish.factory)('tr');
var track = exports.track = (0, _stylish.factory)('track');
var u = exports.u = (0, _stylish.factory)('u');
var ul = exports.ul = (0, _stylish.factory)('ul');
var video = exports.video = (0, _stylish.factory)('video');
var wbr = exports.wbr = (0, _stylish.factory)('wbr');
var debug = exports.debug = {
    backgroundColor: 'rgba(211, 211, 211, 0.75)'
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/* Logic copied from ReactDOMUnknownPropertyHook */
var reactProps = ['children', 'dangerouslySetInnerHTML', 'key', 'ref', 'autoFocus', 'defaultValue', 'valueLink', 'defaultChecked', 'checkedLink', 'innerHTML', 'suppressContentEditableWarning', 'onFocusIn', 'onFocusOut', 'className',
/* List copied from https://facebook.github.io/react/docs/events.html */
'onCopy', 'onCut', 'onPaste', 'onCompositionEnd', 'onCompositionStart', 'onCompositionUpdate', 'onKeyDown', 'onKeyPress', 'onKeyUp', 'onFocus', 'onBlur', 'onChange', 'onInput', 'onSubmit', 'onClick', 'onContextMenu', 'onDoubleClick', 'onDrag', 'onDragEnd', 'onDragEnter', 'onDragExit', 'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp', 'onSelect', 'onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart', 'onScroll', 'onWheel', 'onAbort', 'onCanPlay', 'onCanPlayThrough', 'onDurationChange', 'onEmptied', 'onEncrypted', 'onEnded', 'onError', 'onLoadedData', 'onLoadedMetadata', 'onLoadStart', 'onPause', 'onPlay', 'onPlaying', 'onProgress', 'onRateChange', 'onSeeked', 'onSeeking', 'onStalled', 'onSuspend', 'onTimeUpdate', 'onVolumeChange', 'onWaiting', 'onLoad', 'onAnimationStart', 'onAnimationEnd', 'onAnimationIteration', 'onTransitionEnd', 'onCopyCapture', 'onCutCapture', 'onPasteCapture', 'onCompositionEndCapture', 'onCompositionStartCapture', 'onCompositionUpdateCapture', 'onKeyDownCapture', 'onKeyPressCapture', 'onKeyUpCapture', 'onFocusCapture', 'onBlurCapture', 'onChangeCapture', 'onInputCapture', 'onSubmitCapture', 'onClickCapture', 'onContextMenuCapture', 'onDoubleClickCapture', 'onDragCapture', 'onDragEndCapture', 'onDragEnterCapture', 'onDragExitCapture', 'onDragLeaveCapture', 'onDragOverCapture', 'onDragStartCapture', 'onDropCapture', 'onMouseDownCapture', 'onMouseEnterCapture', 'onMouseLeaveCapture', 'onMouseMoveCapture', 'onMouseOutCapture', 'onMouseOverCapture', 'onMouseUpCapture', 'onSelectCapture', 'onTouchCancelCapture', 'onTouchEndCapture', 'onTouchMoveCapture', 'onTouchStartCapture', 'onScrollCapture', 'onWheelCapture', 'onAbortCapture', 'onCanPlayCapture', 'onCanPlayThroughCapture', 'onDurationChangeCapture', 'onEmptiedCapture', 'onEncryptedCapture', 'onEndedCapture', 'onErrorCapture', 'onLoadedDataCapture', 'onLoadedMetadataCapture', 'onLoadStartCapture', 'onPauseCapture', 'onPlayCapture', 'onPlayingCapture', 'onProgressCapture', 'onRateChangeCapture', 'onSeekedCapture', 'onSeekingCapture', 'onStalledCapture', 'onSuspendCapture', 'onTimeUpdateCapture', 'onVolumeChangeCapture', 'onWaitingCapture', 'onLoadCapture', 'onAnimationStartCapture', 'onAnimationEndCapture', 'onAnimationIterationCapture', 'onTransitionEndCapture'];
/* From HTMLDOMPropertyConfig */
var htmlProps = [
/**
 * Standard Properties
 */
'accept', 'acceptCharset', 'accessKey', 'action', 'allowFullScreen', 'allowTransparency', 'alt',
// specifies target context for links with `preload` type
'as', 'async', 'autoComplete',
// autoFocus is polyfilled/normalized by AutoFocusUtils
// autoFocus: true,
'autoPlay', 'capture', 'cellPadding', 'cellSpacing', 'charSet', 'challenge', 'checked', 'cite', 'classID', 'className', 'cols', 'colSpan', 'content', 'contentEditable', 'contextMenu', 'controls', 'coords', 'crossOrigin', 'data', 'dateTime', 'default', 'defer', 'dir', 'disabled', 'download', 'draggable', 'encType', 'form', 'formAction', 'formEncType', 'formMethod', 'formNoValidate', 'formTarget', 'frameBorder', 'headers', 'height', 'hidden', 'high', 'href', 'hrefLang', 'htmlFor', 'httpEquiv', 'icon', 'id', 'inputMode', 'integrity', 'is', 'keyParams', 'keyType', 'kind', 'label', 'lang', 'list', 'loop', 'low', 'manifest', 'marginHeight', 'marginWidth', 'max', 'maxLength', 'media', 'mediaGroup', 'method', 'min', 'minLength',
// Caution; `option.selected` is not updated if `select.multiple` is
// disabled with `removeAttribute`.
'multiple', 'muted', 'name', 'nonce', 'noValidate', 'open', 'optimum', 'pattern', 'placeholder', 'playsInline', 'poster', 'preload', 'profile', 'radioGroup', 'readOnly', 'referrerPolicy', 'rel', 'required', 'reversed', 'role', 'rows', 'rowSpan', 'sandbox', 'scope', 'scoped', 'scrolling', 'seamless', 'selected', 'shape', 'size', 'sizes', 'span', 'spellCheck', 'src', 'srcDoc', 'srcLang', 'srcSet', 'start', 'step', 'style', 'summary', 'tabIndex', 'target', 'title',
// Setting .type throws on non-<input> tags
'type', 'useMap', 'value', 'width', 'wmode', 'wrap',
/**
 * RDFa Properties
 */
'about', 'datatype', 'inlist', 'prefix',
// property is also supported for OpenGraph in meta tags.
'property', 'resource', 'typeof', 'vocab',
/**
 * Non-standard Properties
 */
// autoCapitalize and autoCorrect are supported in Mobile Safari for
// keyboard hints.
'autoCapitalize', 'autoCorrect',
// autoSave allows WebKit/Blink to persist values of input fields on page reloads
'autoSave',
// color is for Safari mask-icon link
'color',
// itemProp, itemScope, itemType are for
// Microdata support. See http://schema.org/docs/gs.html
'itemProp', 'itemScope', 'itemType',
// itemID and itemRef are for Microdata support as well but
// only specified in the WHATWG spec document. See
// https://html.spec.whatwg.org/multipage/microdata.html#microdata-dom-api
'itemID', 'itemRef',
// results show looking glass icon and recent searches on input
// search fields in WebKit/Blink
'results',
// IE-only attribute that specifies security restrictions on an iframe
// as an alternative to the sandbox attribute on IE<10
'security'];
var isValidAttribute = function isValidAttribute(_ref) {
  var _ref2 = _slicedToArray(_ref, 1),
      name = _ref2[0];

  return reactProps.includes(name) || htmlProps.includes(name);
};
exports.default = isValidAttribute;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lg = exports.md = exports.sm = exports.large = exports.medium = exports.small = undefined;

var _typestyle = __webpack_require__(0);

var small = exports.small = function small() {
  for (var _len = arguments.length, properties = Array(_len), _key = 0; _key < _len; _key++) {
    properties[_key] = arguments[_key];
  }

  return _typestyle.media.apply(undefined, [{ minWidth: 500 }].concat(properties));
};
var medium = exports.medium = function medium() {
  for (var _len2 = arguments.length, properties = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    properties[_key2] = arguments[_key2];
  }

  return _typestyle.media.apply(undefined, [{ minWidth: 900 }].concat(properties));
};
var large = exports.large = function large() {
  for (var _len3 = arguments.length, properties = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    properties[_key3] = arguments[_key3];
  }

  return _typestyle.media.apply(undefined, [{ minWidth: 1200 }].concat(properties));
};
exports.sm = small;
exports.md = medium;
exports.lg = large;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.extend = exports.Helper = exports.factory = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _typestyle = __webpack_require__(0);

var _isValidAttribute = __webpack_require__(2);

var _isValidAttribute2 = _interopRequireDefault(_isValidAttribute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var filterObject = function filterObject(obj, fn) {
    return Object.entries(obj).filter(function (pair) {
        return fn(pair);
    }).reduce(function (accObj, _ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        accObj[key] = value;
        return accObj;
    }, {});
};
var factory = exports.factory = function factory(tag) {
    return function () {
        for (var _len = arguments.length, objects = Array(_len), _key = 0; _key < _len; _key++) {
            objects[_key] = arguments[_key];
        }

        return function (props) {
            var cssObjects = objects.map(function (obj) {
                if (typeof obj === 'function') {
                    var fn = obj;
                    return fn(props);
                }
                return obj;
            }).reduce(function (acc, cur) {
                return acc.concat(cur);
            }, []);
            var className = props.className;

            var computedClassName = _typestyle.style.apply(undefined, _toConsumableArray(cssObjects));
            var finalClassName = className ? className + ' + ' + computedClassName : computedClassName;
            var passedProps = Object.assign({}, filterObject(props, _isValidAttribute2.default), props, { className: finalClassName });
            return _react2.default.createElement(tag, passedProps, props.children);
        };
    };
};

var Helper = exports.Helper = function () {
    function Helper() {
        _classCallCheck(this, Helper);
    }

    _createClass(Helper, null, [{
        key: 'styled',
        value: function styled(type) {
            return function () {
                for (var _len2 = arguments.length, objects = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    objects[_key2] = arguments[_key2];
                }

                return function (props) {
                    var cssObjects = objects.map(function (obj) {
                        if (typeof obj === 'function') {
                            var fn = obj;
                            return fn(props);
                        }
                        return obj;
                    }).reduce(function (acc, cur) {
                        if (Array.isArray(cur)) {
                            return acc.concat(cur);
                        }
                        acc.push(cur);
                        return acc;
                    }, []);
                    var className = props.className;

                    var computedClassName = _typestyle.style.apply(undefined, _toConsumableArray(cssObjects));
                    var finalClassName = className ? className + ' + ' + computedClassName : computedClassName;
                    var passedProps = Object.assign({}, props, { className: finalClassName });
                    return _react2.default.createElement(type, passedProps, props.children);
                };
            };
        }
    }]);

    return Helper;
}();

var extend = exports.extend = Helper.styled;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ })
/******/ ]);
});