define(["app/core/app_events","app/core/time_series2","app/core/utils/kbn","app/plugins/sdk","jquery","lodash"], function(__WEBPACK_EXTERNAL_MODULE_grafana_app_core_app_events__, __WEBPACK_EXTERNAL_MODULE_grafana_app_core_time_series2__, __WEBPACK_EXTERNAL_MODULE_grafana_app_core_utils_kbn__, __WEBPACK_EXTERNAL_MODULE_grafana_app_plugins_sdk__, __WEBPACK_EXTERNAL_MODULE_jquery__, __WEBPACK_EXTERNAL_MODULE_lodash__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css":
/*!******************************************************************************!*\
  !*** ../node_modules/@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../css-loader/dist/cjs.js??ref--8-1!../../../postcss-loader/src??ref--8-2!../../../sass-loader/lib/loader.js!./leaflet-geoman.css */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/lib/loader.js!../node_modules/@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "../node_modules/@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.min.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.min.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=55)}([function(t,e,r){var n=r(123);t.exports=function(t,e,r){var i=null==t?void 0:n(t,e);return void 0===i?r:i}},function(t,e,r){"use strict";function n(t,e,r){void 0===r&&(r={});var n={type:"Feature"};return 0!==r.id&&!r.id||(n.id=r.id),r.bbox&&(n.bbox=r.bbox),n.properties=e||{},n.geometry=t,n}function i(t,e,r){return void 0===r&&(r={}),n({type:"Point",coordinates:t},e,r)}function o(t,e,r){void 0===r&&(r={});for(var i=0,o=t;i<o.length;i++){var a=o[i];if(a.length<4)throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");for(var s=0;s<a[a.length-1].length;s++)if(a[a.length-1][s]!==a[0][s])throw new Error("First and last Position are not equivalent.")}return n({type:"Polygon",coordinates:t},e,r)}function a(t,e,r){if(void 0===r&&(r={}),t.length<2)throw new Error("coordinates must be an array of two or more positions");return n({type:"LineString",coordinates:t},e,r)}function s(t,e){void 0===e&&(e={});var r={type:"FeatureCollection"};return e.id&&(r.id=e.id),e.bbox&&(r.bbox=e.bbox),r.features=t,r}function l(t,e,r){return void 0===r&&(r={}),n({type:"MultiLineString",coordinates:t},e,r)}function h(t,e,r){return void 0===r&&(r={}),n({type:"MultiPoint",coordinates:t},e,r)}function c(t,e,r){return void 0===r&&(r={}),n({type:"MultiPolygon",coordinates:t},e,r)}function u(t,r){void 0===r&&(r="kilometers");var n=e.factors[r];if(!n)throw new Error(r+" units is invalid");return t*n}function p(t,r){void 0===r&&(r="kilometers");var n=e.factors[r];if(!n)throw new Error(r+" units is invalid");return t/n}function f(t){return t%(2*Math.PI)*180/Math.PI}function d(t){return!isNaN(t)&&null!==t&&!Array.isArray(t)&&!/^\s*$/.test(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.earthRadius=6371008.8,e.factors={centimeters:100*e.earthRadius,centimetres:100*e.earthRadius,degrees:e.earthRadius/111325,feet:3.28084*e.earthRadius,inches:39.37*e.earthRadius,kilometers:e.earthRadius/1e3,kilometres:e.earthRadius/1e3,meters:e.earthRadius,metres:e.earthRadius,miles:e.earthRadius/1609.344,millimeters:1e3*e.earthRadius,millimetres:1e3*e.earthRadius,nauticalmiles:e.earthRadius/1852,radians:1,yards:e.earthRadius/1.0936},e.unitsFactors={centimeters:100,centimetres:100,degrees:1/111325,feet:3.28084,inches:39.37,kilometers:.001,kilometres:.001,meters:1,metres:1,miles:1/1609.344,millimeters:1e3,millimetres:1e3,nauticalmiles:1/1852,radians:1/e.earthRadius,yards:1/1.0936},e.areaFactors={acres:247105e-9,centimeters:1e4,centimetres:1e4,feet:10.763910417,inches:1550.003100006,kilometers:1e-6,kilometres:1e-6,meters:1,metres:1,miles:386e-9,millimeters:1e6,millimetres:1e6,yards:1.195990046},e.feature=n,e.geometry=function(t,e,r){switch(void 0===r&&(r={}),t){case"Point":return i(e).geometry;case"LineString":return a(e).geometry;case"Polygon":return o(e).geometry;case"MultiPoint":return h(e).geometry;case"MultiLineString":return l(e).geometry;case"MultiPolygon":return c(e).geometry;default:throw new Error(t+" is invalid")}},e.point=i,e.points=function(t,e,r){return void 0===r&&(r={}),s(t.map((function(t){return i(t,e)})),r)},e.polygon=o,e.polygons=function(t,e,r){return void 0===r&&(r={}),s(t.map((function(t){return o(t,e)})),r)},e.lineString=a,e.lineStrings=function(t,e,r){return void 0===r&&(r={}),s(t.map((function(t){return a(t,e)})),r)},e.featureCollection=s,e.multiLineString=l,e.multiPoint=h,e.multiPolygon=c,e.geometryCollection=function(t,e,r){return void 0===r&&(r={}),n({type:"GeometryCollection",geometries:t},e,r)},e.round=function(t,e){if(void 0===e&&(e=0),e&&!(0<=e))throw new Error("precision must be a positive number");var r=Math.pow(10,e||0);return Math.round(t*r)/r},e.radiansToLength=u,e.lengthToRadians=p,e.lengthToDegrees=function(t,e){return f(p(t,e))},e.bearingToAzimuth=function(t){var e=t%360;return e<0&&(e+=360),e},e.radiansToDegrees=f,e.degreesToRadians=function(t){return t%360*Math.PI/180},e.convertLength=function(t,e,r){if(void 0===e&&(e="kilometers"),void 0===r&&(r="kilometers"),!(0<=t))throw new Error("length must be a positive number");return u(p(t,e),r)},e.convertArea=function(t,r,n){if(void 0===r&&(r="meters"),void 0===n&&(n="kilometers"),!(0<=t))throw new Error("area must be a positive number");var i=e.areaFactors[r];if(!i)throw new Error("invalid original units");var o=e.areaFactors[n];if(!o)throw new Error("invalid final units");return t/i*o},e.isNumber=d,e.isObject=function(t){return!!t&&t.constructor===Object},e.validateBBox=function(t){if(!t)throw new Error("bbox is required");if(!Array.isArray(t))throw new Error("bbox must be an Array");if(4!==t.length&&6!==t.length)throw new Error("bbox must be an Array of 4 or 6 numbers");t.forEach((function(t){if(!d(t))throw new Error("bbox must only contain numbers")}))},e.validateId=function(t){if(!t)throw new Error("id is required");if(-1===["string","number"].indexOf(typeof t))throw new Error("id must be a number or a string")},e.radians2degrees=function(){throw new Error("method has been renamed to `radiansToDegrees`")},e.degrees2radians=function(){throw new Error("method has been renamed to `degreesToRadians`")},e.distanceToDegrees=function(){throw new Error("method has been renamed to `lengthToDegrees`")},e.distanceToRadians=function(){throw new Error("method has been renamed to `lengthToRadians`")},e.radiansToDistance=function(){throw new Error("method has been renamed to `radiansToLength`")},e.bearingToAngle=function(){throw new Error("method has been renamed to `bearingToAzimuth`")},e.convertDistance=function(){throw new Error("method has been renamed to `convertLength`")}},function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e,r){var n=r(28),i="object"==typeof self&&self&&self.Object===Object&&self,o=n||i||Function("return this")();t.exports=o},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e){var r=Array.isArray;t.exports=r},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(1);function i(t,e,r,n,i,o,a,s){var l,h,c,u,p={x:null,y:null,onLine1:!1,onLine2:!1};return 0==(l=(s-o)*(r-t)-(a-i)*(n-e))?null!==p.x&&null!==p.y&&p:(u=(r-t)*(h=e-o)-(n-e)*(c=t-i),h=((a-i)*h-(s-o)*c)/l,c=u/l,p.x=t+h*(r-t),p.y=e+h*(n-e),0<=h&&h<=1&&(p.onLine1=!0),0<=c&&c<=1&&(p.onLine2=!0),!(!p.onLine1||!p.onLine2)&&[p.x,p.y])}e.default=function(t){var e,r,o={type:"FeatureCollection",features:[]};if("LineString"===(r="Feature"===t.type?t.geometry:t).type)e=[r.coordinates];else if("MultiLineString"===r.type)e=r.coordinates;else if("MultiPolygon"===r.type)e=[].concat.apply([],r.coordinates);else{if("Polygon"!==r.type)throw new Error("Input must be a LineString, MultiLineString, Polygon, or MultiPolygon Feature or Geometry");e=r.coordinates}return e.forEach((function(t){e.forEach((function(e){for(var r=0;r<t.length-1;r++)for(var a=r;a<e.length-1;a++){if(t===e){if(1===Math.abs(r-a))continue;if(0===r&&a===t.length-2&&t[r][0]===t[t.length-1][0]&&t[r][1]===t[t.length-1][1])continue}var s=i(t[r][0],t[r][1],t[r+1][0],t[r+1][1],e[a][0],e[a][1],e[a+1][0],e[a+1][1]);s&&o.features.push(n.point([s[0],s[1]]))}}))})),o}},function(t,e,r){var n=r(16),i=r(71),o=r(72),a=n?n.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?i(t):o(t)}},function(t,e,r){var n=r(59),i=r(60),o=r(61),a=r(62),s=r(63);function l(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}l.prototype.clear=n,l.prototype.delete=i,l.prototype.get=o,l.prototype.has=a,l.prototype.set=s,t.exports=l},function(t,e,r){var n=r(10);t.exports=function(t,e){for(var r=t.length;r--;)if(n(t[r][0],e))return r;return-1}},function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},function(t,e,r){var n=r(14)(Object,"create");t.exports=n},function(t,e,r){var n=r(85);t.exports=function(t,e){var r=t.__data__;return n(e)?r["string"==typeof e?"string":"hash"]:r.map}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(1);e.getCoord=function(t){if(!t)throw new Error("coord is required");if(!Array.isArray(t)){if("Feature"===t.type&&null!==t.geometry&&"Point"===t.geometry.type)return t.geometry.coordinates;if("Point"===t.type)return t.coordinates}if(Array.isArray(t)&&2<=t.length&&!Array.isArray(t[0])&&!Array.isArray(t[1]))return t;throw new Error("coord must be GeoJSON Point or an Array of numbers")},e.getCoords=function(t){if(Array.isArray(t))return t;if("Feature"===t.type){if(null!==t.geometry)return t.geometry.coordinates}else if(t.coordinates)return t.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")},e.containsNumber=function t(e){if(1<e.length&&n.isNumber(e[0])&&n.isNumber(e[1]))return!0;if(Array.isArray(e[0])&&e[0].length)return t(e[0]);throw new Error("coordinates must only contain numbers")},e.geojsonType=function(t,e,r){if(!e||!r)throw new Error("type and name required");if(!t||t.type!==e)throw new Error("Invalid input to "+r+": must be a "+e+", given "+t.type)},e.featureOf=function(t,e,r){if(!t)throw new Error("No feature passed");if(!r)throw new Error(".featureOf() requires a name");if(!t||"Feature"!==t.type||!t.geometry)throw new Error("Invalid input to "+r+", Feature with geometry required");if(!t.geometry||t.geometry.type!==e)throw new Error("Invalid input to "+r+": must be a "+e+", given "+t.geometry.type)},e.collectionOf=function(t,e,r){if(!t)throw new Error("No featureCollection passed");if(!r)throw new Error(".collectionOf() requires a name");if(!t||"FeatureCollection"!==t.type)throw new Error("Invalid input to "+r+", FeatureCollection required");for(var n=0,i=t.features;n<i.length;n++){var o=i[n];if(!o||"Feature"!==o.type||!o.geometry)throw new Error("Invalid input to "+r+", Feature with geometry required");if(!o.geometry||o.geometry.type!==e)throw new Error("Invalid input to "+r+": must be a "+e+", given "+o.geometry.type)}},e.getGeom=function(t){return"Feature"===t.type?t.geometry:t},e.getType=function(t,e){return"FeatureCollection"===t.type?"FeatureCollection":"GeometryCollection"===t.type?"GeometryCollection":"Feature"===t.type&&null!==t.geometry?t.geometry.type:t.type}},function(t,e,r){var n=r(69),i=r(76);t.exports=function(t,e){var r=i(t,e);return n(r)?r:void 0}},function(t,e,r){var n=r(7),i=r(2);t.exports=function(t){if(!i(t))return!1;var e=n(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},function(t,e,r){var n=r(3).Symbol;t.exports=n},function(t,e,r){var n=r(31);t.exports=function(t,e,r){"__proto__"==e&&n?n(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,r){var n=r(100),i=r(4),o=Object.prototype,a=o.hasOwnProperty,s=o.propertyIsEnumerable,l=n(function(){return arguments}())?n:function(t){return i(t)&&a.call(t,"callee")&&!s.call(t,"callee")};t.exports=l},function(t,e,r){var n=r(15),i=r(21);t.exports=function(t){return null!=t&&i(t.length)&&!n(t)}},function(t,e){t.exports=function(t){return"number"==typeof t&&-1<t&&t%1==0&&t<=9007199254740991}},function(t,e){var r=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){var n=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&r.test(t))&&-1<t&&t%1==0&&t<e}},function(t,e,r){var n=r(7),i=r(4);t.exports=function(t){return"symbol"==typeof t||i(t)&&"[object Symbol]"==n(t)}},function(t,e,r){!function(t){"use strict";function e(t,e){return e<t?1:t<e?-1:0}var r=function(t,r){void 0===t&&(t=e),void 0===r&&(r=!1),this._compare=t,this._root=null,this._size=0,this._noDuplicates=!!r},n={size:{configurable:!0}};r.prototype.rotateLeft=function(t){var e=t.right;e&&(t.right=e.left,e.left&&(e.left.parent=t),e.parent=t.parent),t.parent?t===t.parent.left?t.parent.left=e:t.parent.right=e:this._root=e,e&&(e.left=t),t.parent=e},r.prototype.rotateRight=function(t){var e=t.left;e&&(t.left=e.right,e.right&&(e.right.parent=t),e.parent=t.parent),t.parent?t===t.parent.left?t.parent.left=e:t.parent.right=e:this._root=e,e&&(e.right=t),t.parent=e},r.prototype._splay=function(t){for(var e=this;t.parent;){var r=t.parent;r.parent?r.left===t&&r.parent.left===r?(e.rotateRight(r.parent),e.rotateRight(r)):r.right===t&&r.parent.right===r?(e.rotateLeft(r.parent),e.rotateLeft(r)):r.left===t&&r.parent.right===r?(e.rotateRight(r),e.rotateLeft(r)):(e.rotateLeft(r),e.rotateRight(r)):r.left===t?e.rotateRight(r):e.rotateLeft(r)}},r.prototype.splay=function(t){for(var e,r,n,i,o;t.parent;)(r=(e=t.parent).parent)&&r.parent?((n=r.parent).left===r?n.left=t:n.right=t,t.parent=n):(t.parent=null,this._root=t),i=t.left,o=t.right,t===e.left?(r&&(r.left===e?(e.right?(r.left=e.right,r.left.parent=r):r.left=null,(e.right=r).parent=e):(i?(r.right=i).parent=r:r.right=null,(t.left=r).parent=t)),o?(e.left=o).parent=e:e.left=null,(t.right=e).parent=t):(r&&(r.right===e?(e.left?(r.right=e.left,r.right.parent=r):r.right=null,(e.left=r).parent=e):(o?(r.left=o).parent=r:r.left=null,(t.right=r).parent=t)),i?(e.right=i).parent=e:e.right=null,(t.left=e).parent=t)},r.prototype.replace=function(t,e){t.parent?t===t.parent.left?t.parent.left=e:t.parent.right=e:this._root=e,e&&(e.parent=t.parent)},r.prototype.minNode=function(t){if(void 0===t&&(t=this._root),t)for(;t.left;)t=t.left;return t},r.prototype.maxNode=function(t){if(void 0===t&&(t=this._root),t)for(;t.right;)t=t.right;return t},r.prototype.insert=function(t,e){var r=this._root,n=null,i=this._compare;if(this._noDuplicates)for(;r;){if(0===i((n=r).key,t))return;r=i(r.key,t)<0?r.right:r.left}else for(;r;)r=i((n=r).key,t)<0?r.right:r.left;return r={key:t,data:e,left:null,right:null,parent:n},n?i(n.key,r.key)<0?n.right=r:n.left=r:this._root=r,this.splay(r),this._size++,r},r.prototype.find=function(t){for(var e=this._root,r=this._compare;e;){var n=r(e.key,t);if(n<0)e=e.right;else{if(!(0<n))return e;e=e.left}}return null},r.prototype.contains=function(t){for(var e=this._root,r=this._compare;e;){var n=r(t,e.key);if(0===n)return!0;e=n<0?e.left:e.right}return!1},r.prototype.remove=function(t){var e=this.find(t);if(!e)return!1;if(this.splay(e),e.left)if(e.right){var r=this.minNode(e.right);r.parent!==e&&(this.replace(r,r.right),r.right=e.right,r.right.parent=r),this.replace(e,r),r.left=e.left,r.left.parent=r}else this.replace(e,e.left);else this.replace(e,e.right);return this._size--,!0},r.prototype.removeNode=function(t){if(!t)return!1;if(this.splay(t),t.left)if(t.right){var e=this.minNode(t.right);e.parent!==t&&(this.replace(e,e.right),e.right=t.right,e.right.parent=e),this.replace(t,e),e.left=t.left,e.left.parent=e}else this.replace(t,t.left);else this.replace(t,t.right);return this._size--,!0},r.prototype.erase=function(t){var e=this.find(t);if(e){this.splay(e);var r=e.left,n=e.right,i=null;r&&(r.parent=null,i=this.maxNode(r),this.splay(i),this._root=i),n&&(r?i.right=n:this._root=n,n.parent=i),this._size--}},r.prototype.pop=function(){var t=this._root,e=null;if(t){for(;t.left;)t=t.left;e={key:t.key,data:t.data},this.remove(t.key)}return e},r.prototype.next=function(t){var e=t;if(e)if(e.right)for(e=e.right;e&&e.left;)e=e.left;else for(e=t.parent;e&&e.right===t;)e=(t=e).parent;return e},r.prototype.prev=function(t){var e=t;if(e)if(e.left)for(e=e.left;e&&e.right;)e=e.right;else for(e=t.parent;e&&e.left===t;)e=(t=e).parent;return e},r.prototype.forEach=function(t){for(var e=this._root,r=[],n=!1,i=0;!n;)e?(r.push(e),e=e.left):0<r.length?(t(e=r.pop(),i++),e=e.right):n=!0;return this},r.prototype.range=function(t,e,r,n){for(var i=[],o=this._compare,a=this._root;0!==i.length||a;)if(a)i.push(a),a=a.left;else{if(0<o((a=i.pop()).key,e))break;if(0<=o(a.key,t)&&r.call(n,a))return this;a=a.right}return this},r.prototype.keys=function(){for(var t=this._root,e=[],r=[],n=!1;!n;)t?(e.push(t),t=t.left):0<e.length?(t=e.pop(),r.push(t.key),t=t.right):n=!0;return r},r.prototype.values=function(){for(var t=this._root,e=[],r=[],n=!1;!n;)t?(e.push(t),t=t.left):0<e.length?(t=e.pop(),r.push(t.data),t=t.right):n=!0;return r},r.prototype.at=function(t){for(var e=this._root,r=[],n=!1,i=0;!n;)if(e)r.push(e),e=e.left;else if(0<r.length){if(e=r.pop(),i===t)return e;i++,e=e.right}else n=!0;return null},r.prototype.load=function(t,e,r){if(void 0===t&&(t=[]),void 0===e&&(e=[]),void 0===r&&(r=!1),0!==this._size)throw new Error("bulk-load: tree is not empty");var n=t.length;return r&&function t(e,r,n,i,o){if(!(i<=n)){for(var a=e[n+i>>1],s=n-1,l=i+1;;){for(;o(e[++s],a)<0;);for(;0<o(e[--l],a););if(l<=s)break;var h=e[s];e[s]=e[l],e[l]=h,h=r[s],r[s]=r[l],r[l]=h}t(e,r,n,l,o),t(e,r,l+1,i,o)}}(t,e,0,n-1,this._compare),this._root=function t(e,r,n,i,o){var a=o-i;if(0<a){var s=i+Math.floor(a/2),l={key:r[s],data:n[s],parent:e};return l.left=t(l,r,n,i,s),l.right=t(l,r,n,s+1,o),l}return null}(null,t,e,0,n),this._size=n,this},r.prototype.min=function(){var t=this.minNode(this._root);return t?t.key:null},r.prototype.max=function(){var t=this.maxNode(this._root);return t?t.key:null},r.prototype.isEmpty=function(){return null===this._root},n.size.get=function(){return this._size},r.createTree=function(t,e,n,i,o){return new r(n,o).load(t,e,i)},Object.defineProperties(r.prototype,n);var i=0,o=1,a=2,s=3,l=0,h=1,c=2,u=3;function p(t,e,r){null===e?(t.inOut=!1,t.otherInOut=!0):(t.isSubject===e.isSubject?(t.inOut=!e.inOut,t.otherInOut=e.otherInOut):(t.inOut=!e.otherInOut,t.otherInOut=e.isVertical()?!e.inOut:e.inOut),e&&(t.prevInResult=!f(e,r)||e.isVertical()?e.prevInResult:e)),t.inResult=f(t,r)}function f(t,e){switch(t.type){case i:switch(e){case l:return!t.otherInOut;case h:return t.otherInOut;case c:return t.isSubject&&t.otherInOut||!t.isSubject&&!t.otherInOut;case u:return!0}break;case a:return e===l||e===h;case s:return e===c;case o:return!1}return!1}var d=function(t,e,r,n,o){this.left=e,this.point=t,this.otherEvent=r,this.isSubject=n,this.type=o||i,this.inOut=!1,this.otherInOut=!1,this.prevInResult=null,this.inResult=!1,this.resultInOut=!1,this.isExteriorRing=!0};function g(t,e){return t[0]===e[0]&&t[1]===e[1]}function _(t,e,r){return(t[0]-r[0])*(e[1]-r[1])-(e[0]-r[0])*(t[1]-r[1])}function m(t,e){var r=t.point,n=e.point;return r[0]>n[0]?1:r[0]<n[0]?-1:r[1]!==n[1]?r[1]>n[1]?1:-1:function(t,e,r,n){return t.left===e.left?0===_(r,t.otherEvent.point,e.otherEvent.point)?!t.isSubject&&e.isSubject?1:-1:t.isBelow(e.otherEvent.point)?-1:1:t.left?1:-1}(t,e,r)}function y(t,e,r){var n=new d(e,!1,t,t.isSubject),i=new d(e,!0,t.otherEvent,t.isSubject);return g(t.point,t.otherEvent.point)&&console.warn("what is that, a collapsed segment?",t),n.contourId=i.contourId=t.contourId,0<m(i,t.otherEvent)&&(t.otherEvent.left=!0,i.left=!1),t.otherEvent.otherEvent=i,t.otherEvent=n,r.push(i),r.push(n),r}function v(t,e){return t[0]*e[1]-t[1]*e[0]}function L(t,e){return t[0]*e[0]+t[1]*e[1]}function b(t,e,r){var n=function(t,e,r,n,i){var o=[e[0]-t[0],e[1]-t[1]],a=[n[0]-r[0],n[1]-r[1]];function s(t,e,r){return[t[0]+e*r[0],t[1]+e*r[1]]}var l=[r[0]-t[0],r[1]-t[1]],h=v(o,a),c=h*h,u=L(o,o);if(0<c){var p=v(l,a)/h;if(p<0||1<p)return null;var f=v(l,o)/h;return f<0||1<f?null:0==p||1==p?i?null:[s(t,p,o)]:0==f||1==f?i?null:[s(r,f,a)]:[s(t,p,o)]}if(0<(c=(h=v(l,o))*h))return null;var d=L(o,l)/u,g=d+L(o,a)/u,_=Math.min(d,g),m=Math.max(d,g);return _<=1&&0<=m?1===_?i?null:[s(t,0<_?_:0,o)]:0===m?i?null:[s(t,m<1?m:1,o)]:i&&0===_&&1===m?null:[s(t,0<_?_:0,o),s(t,m<1?m:1,o)]:null}(t.point,t.otherEvent.point,e.point,e.otherEvent.point),i=n?n.length:0;if(0===i)return 0;if(1===i&&(g(t.point,e.point)||g(t.otherEvent.point,e.otherEvent.point)))return 0;if(2===i&&t.isSubject===e.isSubject)return 0;if(1===i)return g(t.point,n[0])||g(t.otherEvent.point,n[0])||y(t,n[0],r),g(e.point,n[0])||g(e.otherEvent.point,n[0])||y(e,n[0],r),1;var l=[],h=!1,c=!1;return g(t.point,e.point)?h=!0:1===m(t,e)?l.push(e,t):l.push(t,e),g(t.otherEvent.point,e.otherEvent.point)?c=!0:1===m(t.otherEvent,e.otherEvent)?l.push(e.otherEvent,t.otherEvent):l.push(t.otherEvent,e.otherEvent),h&&c||h?(e.type=o,t.type=e.inOut===t.inOut?a:s,h&&!c&&y(l[1].otherEvent,l[0].point,r),2):(c?y(l[0],l[1].point,r):l[0]!==l[3].otherEvent?(y(l[0],l[1].point,r),y(l[1],l[2].point,r)):(y(l[0],l[1].point,r),y(l[3].otherEvent,l[2].point,r)),3)}function k(t,e){if(t===e)return 0;if(0!==_(t.point,t.otherEvent.point,e.point)||0!==_(t.point,t.otherEvent.point,e.otherEvent.point))return g(t.point,e.point)?t.isBelow(e.otherEvent.point)?-1:1:t.point[0]===e.point[0]?t.point[1]<e.point[1]?-1:1:1===m(t,e)?e.isAbove(t.point)?-1:1:t.isBelow(e.point)?-1:1;if(t.isSubject!==e.isSubject)return t.isSubject?-1:1;var r=t.point,n=e.point;return r[0]===n[0]&&r[1]===n[1]?(r=t.otherEvent.point,n=e.otherEvent.point,r[0]===n[0]&&r[1]===n[1]?0:t.contourId>e.contourId?1:-1):1===m(t,e)?1:-1}function M(t,e,r,n){var i=t+1,o=e.length;if(o-1<i)return t-1;for(var a=e[t].point,s=e[i].point;i<o&&s[0]===a[0]&&s[1]===a[1];){if(!r[i])return i;s=e[++i].point}for(i=t-1;r[i]&&n<=i;)i--;return i}d.prototype.isBelow=function(t){var e=this.point,r=this.otherEvent.point;return this.left?0<(e[0]-t[0])*(r[1]-t[1])-(r[0]-t[0])*(e[1]-t[1]):0<(r[0]-t[0])*(e[1]-t[1])-(e[0]-t[0])*(r[1]-t[1])},d.prototype.isAbove=function(t){return!this.isBelow(t)},d.prototype.isVertical=function(){return this.point[0]===this.otherEvent.point[0]},d.prototype.clone=function(){var t=new d(this.point,this.left,this.otherEvent,this.isSubject,this.type);return t.inResult=this.inResult,t.prevInResult=this.prevInResult,t.isExteriorRing=this.isExteriorRing,t.inOut=this.inOut,t.otherInOut=this.otherInOut,t};var w=x,C=x;function x(t,e){if(!(this instanceof x))return new x(t,e);if(this.data=t||[],this.length=this.data.length,this.compare=e||S,0<this.length)for(var r=(this.length>>1)-1;0<=r;r--)this._down(r)}function S(t,e){return t<e?-1:e<t?1:0}x.prototype={push:function(t){this.data.push(t),this.length++,this._up(this.length-1)},pop:function(){if(0!==this.length){var t=this.data[0];return this.length--,0<this.length&&(this.data[0]=this.data[this.length],this._down(0)),this.data.pop(),t}},peek:function(){return this.data[0]},_up:function(t){for(var e=this.data,r=this.compare,n=e[t];0<t;){var i=t-1>>1,o=e[i];if(0<=r(n,o))break;e[t]=o,t=i}e[t]=n},_down:function(t){for(var e=this.data,r=this.compare,n=this.length>>1,i=e[t];t<n;){var o=1+(t<<1),a=o+1,s=e[o];if(a<this.length&&r(e[a],s)<0&&(s=e[o=a]),0<=r(s,i))break;e[t]=s,t=o}e[t]=i}},w.default=C;var E=Math.max,P=Math.min,O=0;function B(t,e,r,n,i,o){var a,s,l,h,c,u;for(a=0,s=t.length-1;a<s;a++)if(l=t[a],h=t[a+1],c=new d(l,!1,void 0,e),u=new d(h,!1,c,e),c.otherEvent=u,l[0]!==h[0]||l[1]!==h[1]){c.contourId=u.contourId=r,o||(c.isExteriorRing=!1,u.isExteriorRing=!1),0<m(c,u)?u.left=!0:c.left=!0;var p=l[0],f=l[1];i[0]=P(i[0],p),i[1]=P(i[1],f),i[2]=E(i[2],p),i[3]=E(i[3],f),n.push(c),n.push(u)}}var T=[];function D(t,e,n){"number"==typeof t[0][0][0]&&(t=[t]),"number"==typeof e[0][0][0]&&(e=[e]);var i=function(t,e,r){var n=null;return t.length*e.length==0&&(r===l?n=T:r===c?n=t:r!==h&&r!==u||(n=0===t.length?e:t)),n}(t,e,n);if(i)return i===T?null:i;var o=[1/0,1/0,-1/0,-1/0],a=[1/0,1/0,-1/0,-1/0],s=function(t,e,r,n,i){var o,a,s,l,h,u,p=new w(null,m);for(s=0,l=t.length;s<l;s++)for(h=0,u=(o=t[s]).length;h<u;h++)(a=0===h)&&O++,B(o[h],!0,O,p,r,a);for(s=0,l=e.length;s<l;s++)for(h=0,u=(o=e[s]).length;h<u;h++)a=0===h,i===c&&(a=!1),a&&O++,B(o[h],!1,O,p,n,a);return p}(t,e,o,a,n);return(i=function(t,e,r,n,i){var o=null;return(r[0]>n[2]||n[0]>r[2]||r[1]>n[3]||n[1]>r[3])&&(i===l?o=T:i===c?o=t:i!==h&&i!==u||(o=t.concat(e))),o}(t,e,o,a,n))?i===T?null:i:function(t,e){var r,n,i,o=function(t){var e,r,n,i,o=[];for(r=0,n=t.length;r<n;r++)((e=t[r]).left&&e.inResult||!e.left&&e.otherEvent.inResult)&&o.push(e);for(var a=!1;!a;)for(a=!0,r=0,n=o.length;r<n;r++)r+1<n&&1===m(o[r],o[r+1])&&(i=o[r],o[r]=o[r+1],o[r+1]=i,a=!1);for(r=0,n=o.length;r<n;r++)(e=o[r]).pos=r;for(r=0,n=o.length;r<n;r++)(e=o[r]).left||(i=e.pos,e.pos=e.otherEvent.pos,e.otherEvent.pos=i);return o}(t),a={},s=[];for(r=0,n=o.length;r<n;r++)if(!a[r]){var l=[[]];o[r].isExteriorRing?e===c&&!o[r].isSubject&&1<s.length?s[s.length-1].push(l[0]):s.push(l):e!==c||o[r].isSubject||0!==s.length?0===s.length?s.push([[l]]):s[s.length-1].push(l[0]):s.push(l);var h=s.length-1,u=r,p=o[r].point;for(l[0].push(p);r<=u;)i=o[u],a[u]=!0,i.left?(i.resultInOut=!1,i.contourId=h):(i.otherEvent.resultInOut=!0,i.otherEvent.contourId=h),a[u=i.pos]=!0,l[0].push(o[u].point),u=M(u,o,a,r);i=o[u=-1===u?r:u],a[u]=a[i.pos]=!0,i.otherEvent.resultInOut=!0,i.otherEvent.contourId=h}return s}(function(t,e,n,i,o,a){for(var s,h,u,f=new r(k),d=[],g=Math.min(i[2],o[2]);0!==t.length;){var _=t.pop();if(d.push(_),a===l&&_.point[0]>g||a===c&&_.point[0]>i[2])break;if(_.left){h=s=f.insert(_),s=s!==(u=f.minNode())?f.prev(s):null,h=f.next(h);var m=s?s.key:null;if(p(_,m,a),h&&2===b(_,h.key,t)&&(p(_,m,a),p(_,h.key,a)),s&&2===b(s.key,_,t)){var y=s;p(m,(y=y!==u?f.prev(y):null)?y.key:null,a),p(_,m,a)}}else _=_.otherEvent,h=s=f.find(_),s&&h&&(s=s!==u?f.prev(s):null,h=f.next(h),f.remove(_),h&&s&&b(s.key,h.key,t))}return d}(s,0,0,o,a,n),n)}var j={UNION:h,DIFFERENCE:c,INTERSECTION:l,XOR:u};t.union=function(t,e){return D(t,e,h)},t.diff=function(t,e){return D(t,e,c)},t.xor=function(t,e){return D(t,e,u)},t.intersection=function(t,e){return D(t,e,l)},t.operations=j,Object.defineProperty(t,"__esModule",{value:!0})}(e)},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(1);function i(t,e,r){if(null!==t)for(var n,o,a,s,l,h,c,u,p=0,f=0,d=t.type,g="FeatureCollection"===d,_="Feature"===d,m=g?t.features.length:1,y=0;y<m;y++){l=(u=!!(c=g?t.features[y].geometry:_?t.geometry:t)&&"GeometryCollection"===c.type)?c.geometries.length:1;for(var v=0;v<l;v++){var L=0,b=0;if(null!==(s=u?c.geometries[v]:c)){h=s.coordinates;var k=s.type;switch(p=!r||"Polygon"!==k&&"MultiPolygon"!==k?0:1,k){case null:break;case"Point":if(!1===e(h,f,y,L,b))return!1;f++,L++;break;case"LineString":case"MultiPoint":for(n=0;n<h.length;n++){if(!1===e(h[n],f,y,L,b))return!1;f++,"MultiPoint"===k&&L++}"LineString"===k&&L++;break;case"Polygon":case"MultiLineString":for(n=0;n<h.length;n++){for(o=0;o<h[n].length-p;o++){if(!1===e(h[n][o],f,y,L,b))return!1;f++}"MultiLineString"===k&&L++,"Polygon"===k&&b++}"Polygon"===k&&L++;break;case"MultiPolygon":for(n=0;n<h.length;n++){for(o=b=0;o<h[n].length;o++){for(a=0;a<h[n][o].length-p;a++){if(!1===e(h[n][o][a],f,y,L,b))return!1;f++}b++}L++}break;case"GeometryCollection":for(n=0;n<s.geometries.length;n++)if(!1===i(s.geometries[n],e,r))return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function o(t,e){var r;switch(t.type){case"FeatureCollection":for(r=0;r<t.features.length&&!1!==e(t.features[r].properties,r);r++);break;case"Feature":e(t.properties,0)}}function a(t,e){if("Feature"===t.type)e(t,0);else if("FeatureCollection"===t.type)for(var r=0;r<t.features.length&&!1!==e(t.features[r],r);r++);}function s(t,e){var r,n,i,o,a,s,l,h,c,u,p=0,f="FeatureCollection"===t.type,d="Feature"===t.type,g=f?t.features.length:1;for(r=0;r<g;r++){for(s=f?t.features[r].geometry:d?t.geometry:t,h=f?t.features[r].properties:d?t.properties:{},c=f?t.features[r].bbox:d?t.bbox:void 0,u=f?t.features[r].id:d?t.id:void 0,a=(l=!!s&&"GeometryCollection"===s.type)?s.geometries.length:1,i=0;i<a;i++)if(null!==(o=l?s.geometries[i]:s))switch(o.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":if(!1===e(o,p,h,c,u))return!1;break;case"GeometryCollection":for(n=0;n<o.geometries.length;n++)if(!1===e(o.geometries[n],p,h,c,u))return!1;break;default:throw new Error("Unknown Geometry Type")}else if(!1===e(null,p,h,c,u))return!1;p++}}function l(t,e){s(t,(function(t,r,i,o,a){var s,l=null===t?null:t.type;switch(l){case null:case"Point":case"LineString":case"Polygon":return!1!==e(n.feature(t,i,{bbox:o,id:a}),r,0)&&void 0}switch(l){case"MultiPoint":s="Point";break;case"MultiLineString":s="LineString";break;case"MultiPolygon":s="Polygon"}for(var h=0;h<t.coordinates.length;h++){var c={type:s,coordinates:t.coordinates[h]};if(!1===e(n.feature(c,i),r,h))return!1}}))}function h(t,e){l(t,(function(t,r,o){var a=0;if(t.geometry){var s=t.geometry.type;if("Point"!==s&&"MultiPoint"!==s){var l,h=0,c=0,u=0;return!1!==i(t,(function(i,s,p,f,d){if(void 0===l||h<r||c<f||u<d)return l=i,h=r,c=f,u=d,void(a=0);var g=n.lineString([l,i],t.properties);if(!1===e(g,r,o,d,a))return!1;a++,l=i}))&&void 0}}}))}function c(t,e){if(!t)throw new Error("geojson is required");l(t,(function(t,r,i){if(null!==t.geometry){var o=t.geometry.type,a=t.geometry.coordinates;switch(o){case"LineString":if(!1===e(t,r,i,0,0))return!1;break;case"Polygon":for(var s=0;s<a.length;s++)if(!1===e(n.lineString(a[s],t.properties),r,i,s))return!1}}}))}e.coordEach=i,e.coordReduce=function(t,e,r,n){var o=r;return i(t,(function(t,n,i,a,s){o=0===n&&void 0===r?t:e(o,t,n,i,a,s)}),n),o},e.propEach=o,e.propReduce=function(t,e,r){var n=r;return o(t,(function(t,i){n=0===i&&void 0===r?t:e(n,t,i)})),n},e.featureEach=a,e.featureReduce=function(t,e,r){var n=r;return a(t,(function(t,i){n=0===i&&void 0===r?t:e(n,t,i)})),n},e.coordAll=function(t){var e=[];return i(t,(function(t){e.push(t)})),e},e.geomEach=s,e.geomReduce=function(t,e,r){var n=r;return s(t,(function(t,i,o,a,s){n=0===i&&void 0===r?t:e(n,t,i,o,a,s)})),n},e.flattenEach=l,e.flattenReduce=function(t,e,r){var n=r;return l(t,(function(t,i,o){n=0===i&&0===o&&void 0===r?t:e(n,t,i,o)})),n},e.segmentEach=h,e.segmentReduce=function(t,e,r){var n=r,i=!1;return h(t,(function(t,o,a,s,l){n=!1===i&&void 0===r?t:e(n,t,o,a,s,l),i=!0})),n},e.lineEach=c,e.lineReduce=function(t,e,r){var n=r;return c(t,(function(t,i,o,a){n=0===i&&void 0===r?t:e(n,t,i,o,a)})),n},e.findSegment=function(t,e){if(e=e||{},!n.isObject(e))throw new Error("options is invalid");var r,i=e.featureIndex||0,o=e.multiFeatureIndex||0,a=e.geometryIndex||0,s=e.segmentIndex||0,l=e.properties;switch(t.type){case"FeatureCollection":i<0&&(i=t.features.length+i),l=l||t.features[i].properties,r=t.features[i].geometry;break;case"Feature":l=l||t.properties,r=t.geometry;break;case"Point":case"MultiPoint":return null;case"LineString":case"Polygon":case"MultiLineString":case"MultiPolygon":r=t;break;default:throw new Error("geojson is invalid")}if(null===r)return null;var h=r.coordinates;switch(r.type){case"Point":case"MultiPoint":return null;case"LineString":return s<0&&(s=h.length+s-1),n.lineString([h[s],h[s+1]],l,e);case"Polygon":return a<0&&(a=h.length+a),s<0&&(s=h[a].length+s-1),n.lineString([h[a][s],h[a][s+1]],l,e);case"MultiLineString":return o<0&&(o=h.length+o),s<0&&(s=h[o].length+s-1),n.lineString([h[o][s],h[o][s+1]],l,e);case"MultiPolygon":return o<0&&(o=h.length+o),a<0&&(a=h[o].length+a),s<0&&(s=h[o][a].length-s-1),n.lineString([h[o][a][s],h[o][a][s+1]],l,e)}throw new Error("geojson is invalid")},e.findPoint=function(t,e){if(e=e||{},!n.isObject(e))throw new Error("options is invalid");var r,i=e.featureIndex||0,o=e.multiFeatureIndex||0,a=e.geometryIndex||0,s=e.coordIndex||0,l=e.properties;switch(t.type){case"FeatureCollection":i<0&&(i=t.features.length+i),l=l||t.features[i].properties,r=t.features[i].geometry;break;case"Feature":l=l||t.properties,r=t.geometry;break;case"Point":case"MultiPoint":return null;case"LineString":case"Polygon":case"MultiLineString":case"MultiPolygon":r=t;break;default:throw new Error("geojson is invalid")}if(null===r)return null;var h=r.coordinates;switch(r.type){case"Point":return n.point(h,l,e);case"MultiPoint":return o<0&&(o=h.length+o),n.point(h[o],l,e);case"LineString":return s<0&&(s=h.length+s),n.point(h[s],l,e);case"Polygon":return a<0&&(a=h.length+a),s<0&&(s=h[a].length+s),n.point(h[a][s],l,e);case"MultiLineString":return o<0&&(o=h.length+o),s<0&&(s=h[o].length+s),n.point(h[o][s],l,e);case"MultiPolygon":return o<0&&(o=h.length+o),a<0&&(a=h[o].length+a),s<0&&(s=h[o][a].length-s),n.point(h[o][a][s],l,e)}throw new Error("geojson is invalid")}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(25),i=6378137;function o(t){var e=0;if(t&&0<t.length){e+=Math.abs(a(t[0]));for(var r=1;r<t.length;r++)e-=Math.abs(a(t[r]))}return e}function a(t){var e,r,n,o,a,l,h=0,c=t.length;if(2<c){for(l=0;l<c;l++)a=l===c-2?(n=c-2,o=c-1,0):l===c-1?(n=c-1,o=0,1):(o=(n=l)+1,l+2),e=t[n],r=t[o],h+=(s(t[a][0])-s(e[0]))*Math.sin(s(r[1]));h=h*i*i/2}return h}function s(t){return t*Math.PI/180}e.default=function(t){return n.geomReduce(t,(function(t,e){return t+function(t){var e,r=0;switch(t.type){case"Polygon":return o(t.coordinates);case"MultiPolygon":for(e=0;e<t.coordinates.length;e++)r+=o(t.coordinates[e]);return r;case"Point":case"MultiPoint":case"LineString":case"MultiLineString":return 0}return 0}(e)}),0)}},function(t,e,r){var n=r(14)(r(3),"Map");t.exports=n},function(t,e,r){(function(e){var r="object"==typeof e&&e&&e.Object===Object&&e;t.exports=r}).call(this,r(70))},function(t,e,r){var n=r(77),i=r(84),o=r(86),a=r(87),s=r(88);function l(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}l.prototype.clear=n,l.prototype.delete=i,l.prototype.get=o,l.prototype.has=a,l.prototype.set=s,t.exports=l},function(t,e,r){var n=r(17),i=r(10);t.exports=function(t,e,r){(void 0===r||i(t[e],r))&&(void 0!==r||e in t)||n(t,e,r)}},function(t,e,r){var n=r(14),i=function(){try{var t=n(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=i},function(t,e,r){var n=r(99)(Object.getPrototypeOf,Object);t.exports=n},function(t,e){var r=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||r)}},function(t,e,r){(function(t){var n=r(3),i=r(102),o=e&&!e.nodeType&&e,a=o&&"object"==typeof t&&t&&!t.nodeType&&t,s=a&&a.exports===o?n.Buffer:void 0,l=(s?s.isBuffer:void 0)||i;t.exports=l}).call(this,r(18)(t))},function(t,e,r){var n=r(104),i=r(105),o=r(106),a=o&&o.isTypedArray,s=a?i(a):n;t.exports=s},function(t,e){t.exports=function(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]}},function(t,e,r){var n=r(110),i=r(112),o=r(20);t.exports=function(t){return o(t)?n(t,!0):i(t)}},function(t,e){t.exports=function(t){return t}},function(t,e,r){var n=r(5),i=r(124),o=r(125),a=r(128);t.exports=function(t,e){return n(t)?t:i(t,e)?[t]:o(a(t))}},function(t,e,r){var n=r(23);t.exports=function(t){if("string"==typeof t||n(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}},function(t){t.exports=JSON.parse('{"a":"2.3.0"}')},function(t,e,r){var n=r(57),i=r(114)((function(t,e,r){n(t,e,r)}));t.exports=i},function(t){t.exports=JSON.parse('{"tooltips":{"placeMarker":"Click to place marker","firstVertex":"Click to place first vertex","continueLine":"Click to continue drawing","finishLine":"Click any existing marker to finish","finishPoly":"Click first marker to finish","finishRect":"Click to finish","startCircle":"Click to place circle center","finishCircle":"Click to finish circle","placeCircleMarker":"Click to place circle marker"},"actions":{"finish":"Finish","cancel":"Cancel","removeLastVertex":"Remove Last Vertex"},"buttonTitles":{"drawMarkerButton":"Draw Marker","drawPolyButton":"Draw Polygons","drawLineButton":"Draw Polyline","drawCircleButton":"Draw Circle","drawRectButton":"Draw Rectangle","editButton":"Edit Layers","dragButton":"Drag Layers","cutButton":"Cut Layers","deleteButton":"Remove Layers","drawCircleMarkerButton":"Draw Circle Marker"}}')},function(t){t.exports=JSON.parse('{"tooltips":{"placeMarker":"Platziere den Marker mit Klick","firstVertex":"Platziere den ersten Marker mit Klick","continueLine":"Klicke, um weiter zu zeichnen","finishLine":"Beende mit Klick auf existierenden Marker","finishPoly":"Beende mit Klick auf ersten Marker","finishRect":"Beende mit Klick","startCircle":"Platziere das Kreiszentrum mit Klick","finishCircle":"Beende den Kreis mit Klick","placeCircleMarker":"Platziere den Kreismarker mit Klick"},"actions":{"finish":"Beenden","cancel":"Abbrechen","removeLastVertex":"Letzten Vertex löschen"},"buttonTitles":{"drawMarkerButton":"Marker zeichnen","drawPolyButton":"Polygon zeichnen","drawLineButton":"Polyline zeichnen","drawCircleButton":"Kreis zeichnen","drawRectButton":"Rechteck zeichnen","editButton":"Layer editieren","dragButton":"Layer bewegen","cutButton":"Layer schneiden","deleteButton":"Layer löschen","drawCircleMarkerButton":"Kreismarker zeichnen"}}')},function(t){t.exports=JSON.parse('{"tooltips":{"placeMarker":"Clicca per posizionare un Marker","firstVertex":"Clicca per posizionare il primo vertice","continueLine":"Clicca per continuare a disegnare","finishLine":"Clicca qualsiasi marker esistente per terminare","finishPoly":"Clicca il primo marker per terminare","finishRect":"Clicca per terminare","startCircle":"Clicca per posizionare il punto centrale del cerchio","finishCircle":"Clicca per terminare il cerchio","placeCircleMarker":"Clicca per posizionare un Marker del cherchio"},"actions":{"finish":"Termina","cancel":"Annulla","removeLastVertex":"Rimuovi l\'ultimo vertice"},"buttonTitles":{"drawMarkerButton":"Disegna Marker","drawPolyButton":"Disegna Poligoni","drawLineButton":"Disegna Polilinea","drawCircleButton":"Disegna Cerchio","drawRectButton":"Disegna Rettangolo","editButton":"Modifica Livelli","dragButton":"Sposta Livelli","cutButton":"Ritaglia Livelli","deleteButton":"Elimina Livelli","drawCircleMarkerButton":"Disegna Marker del Cherchio"}}')},function(t){t.exports=JSON.parse('{"tooltips":{"placeMarker":"Adaugă un punct","firstVertex":"Apasă aici pentru a adăuga primul Vertex","continueLine":"Apasă aici pentru a continua desenul","finishLine":"Apasă pe orice obiect pentru a finisa desenul","finishPoly":"Apasă pe primul obiect pentru a finisa","finishRect":"Apasă pentru a finisa","startCircle":"Apasă pentru a desena un cerc","finishCircle":"Apasă pentru a finisa un cerc","placeCircleMarker":"Adaugă un punct"},"actions":{"finish":"Termină","cancel":"Anulează","removeLastVertex":"Șterge ultimul Vertex"},"buttonTitles":{"drawMarkerButton":"Adaugă o bulină","drawPolyButton":"Desenează un poligon","drawLineButton":"Desenează o linie","drawCircleButton":"Desenează un cerc","drawRectButton":"Desenează un dreptunghi","editButton":"Editează straturile","dragButton":"Mută straturile","cutButton":"Taie straturile","deleteButton":"Șterge straturile","placeCircleMarker":"Adaugă o bulină"}}')},function(t){t.exports=JSON.parse('{"tooltips":{"placeMarker":"Щелкните, чтобы поместить маркер","firstVertex":"Нажмите, чтобы поместить первый объект","continueLine":"Нажмите, чтобы продолжить рисование","finishLine":"Щелкните любой существующий маркер для завершения","finishPoly":"Выберите первую точку, чтобы закончить","finishRect":"Нажмите, чтобы закончить","startCircle":"Нажмите чтобы добавить круг","finishCircle":"Нажмите чтобы закончить круг","placeCircleMarker":"Click to place circle marker"},"actions":{"finish":"Заканчивать","cancel":"Отмена","removeLastVertex":"Удалить последний объект на карте"},"buttonTitles":{"drawMarkerButton":"Добавить маркер","drawPolyButton":"Рисовать полигон","drawLineButton":"Рисовать Полилинию","drawCircleButton":"Рисовать круг","drawRectButton":"Рисовать Прямоугольник","editButton":"Редактировать слой","dragButton":"Перетаскивать слой","cutButton":"Вырезать слой","deleteButton":"Удалить слой","placeCircleMarker":"Щелкните, чтобы поместить маркер"}}')},function(t){t.exports=JSON.parse('{"tooltips":{"placeMarker":"Presiona para colocar un marcador","firstVertex":"Presiona para colocar el primer vértice","continueLine":"Presiona para continuar dibujando","finishLine":"Presiona cualquier marcador existente para finalizar","finishPoly":"Presiona el primer marcador para finalizar","finishRect":"Presiona para finalizar","startCircle":"Presiona para colocar el centro del circulo","finishCircle":"Presiona para finalizar el circulo","placeCircleMarker":"Presiona para colocar un marcador de circulo"},"actions":{"finish":"Finalizar","cancel":"Cancelar","removeLastVertex":"Remover ultimo vértice"},"buttonTitles":{"drawMarkerButton":"Dibujar Marcador","drawPolyButton":"Dibujar Polígono","drawLineButton":"Dibujar Línea","drawCircleButton":"Dibujar Circulo","drawRectButton":"Dibujar Rectángulo","editButton":"Editar Capas","dragButton":"Arrastrar Capas","cutButton":"Cortar Capas","deleteButton":"Remover Capas","drawCircleMarkerButton":"Dibujar Marcador de Circulo"}}')},function(t){t.exports=JSON.parse('{"tooltips":{"placeMarker":"Klik om een marker te plaatsen","firstVertex":"Klik om het eerste punt te plaatsen","continueLine":"Klik om te blijven tekenen","finishLine":"Klik op een bestaand punt om te beëindigen","finishPoly":"Klik op het eerst punt om te beëindigen","finishRect":"Klik om te beëindigen","startCircle":"Klik om het middelpunt te plaatsen","finishCircle":"Klik om de cirkel te beëindigen","placeCircleMarker":"Klik om een marker te plaatsen"},"actions":{"finish":"Bewaar","cancel":"Annuleer","removeLastVertex":"Verwijder laatste punt"},"buttonTitles":{"drawMarkerButton":"Plaats Marker","drawPolyButton":"Teken een vlak","drawLineButton":"Teken een lijn","drawCircleButton":"Teken een cirkel","drawRectButton":"Teken een vierkant","editButton":"Bewerk","dragButton":"Verplaats","cutButton":"Knip","deleteButton":"Verwijder","drawCircleMarkerButton":"Plaats Marker"}}')},function(t){t.exports=JSON.parse('{"tooltips":{"placeMarker":"Cliquez pour placer un marqueur","firstVertex":"Cliquez pour placer le premier sommet","continueLine":"Cliquez pour continuer à dessiner","finishLine":"Cliquez sur n\'importe quel marqueur pour terminer","finishPoly":"Cliquez sur le premier marqueur pour terminer","finishRect":"Cliquez pour terminer","startCircle":"Cliquez pour placer le centre du cercle","finishCircle":"Cliquez pour finir le cercle"},"actions":{"finish":"Terminer","cancel":"Annuler","removeLastVertex":"Retirer le dernier sommet"},"buttonTitles":{"drawMarkerButton":"Placer des marqueurs","drawPolyButton":"Dessiner des polygones","drawLineButton":"Dessiner des polylignes","drawCircleButton":"Dessiner un cercle","drawRectButton":"Dessiner un rectangle","editButton":"Éditer des calques","dragButton":"Déplacer des calques","cutButton":"Couper des calques","deleteButton":"Supprimer des calques"}}')},function(t){t.exports=JSON.parse('{"tooltips":{"placeMarker":"单击放置标记","firstVertex":"单击放置首个顶点","continueLine":"单击继续绘制","finishLine":"单击任何存在的标记以完成","finishPoly":"单击第一个标记以完成","finishRect":"单击完成","startCircle":"单击放置圆心","finishCircle":"单击完成圆形"},"actions":{"finish":"完成","cancel":"取消","removeLastVertex":"移除最后的顶点"},"buttonTitles":{"drawMarkerButton":"绘制标记","drawPolyButton":"绘制多边形","drawLineButton":"绘制线段","drawCircleButton":"绘制圆形","drawRectButton":"绘制长方形","editButton":"编辑图层","dragButton":"拖拽图层","cutButton":"剪切图层","deleteButton":"删除图层"}}')},function(t){t.exports=JSON.parse('{"tooltips":{"placeMarker":"Clique para posicionar o marcador","firstVertex":"Clique para posicionar o primeiro vértice","continueLine":"Clique para continuar desenhando","finishLine":"Clique em qualquer marcador existente para finalizar","finishPoly":"Clique no primeiro ponto para fechar o polígono","finishRect":"Clique para finalizar","startCircle":"Clique para posicionar o centro do círculo","finishCircle":"Clique para fechar o círculo"},"actions":{"finish":"Finalizar","cancel":"Cancelar","removeLastVertex":"Remover último vértice"},"buttonTitles":{"drawMarkerButton":"Desenhar um marcador","drawPolyButton":"Desenhar um polígono","drawLineButton":"Desenhar uma polilinha","drawCircleButton":"Desenhar um círculo","drawRectButton":"Desenhar um retângulo","editButton":"Editar camada(s)","dragButton":"Mover camada(s)","cutButton":"Recortar camada(s)","deleteButton":"Remover camada(s)"}}')},function(t,e,r){var n=r(131),i=r(132);t.exports=function(t,e){return null!=t&&i(t,e,n)}},function(t,e,r){"use strict";var n=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var i=r(1),o=r(13),a=n(r(24));e.default=function t(e,r,n){void 0===n&&(n={});var s=o.getGeom(e),l=o.getGeom(r);if("Polygon"===s.type&&"Polygon"===l.type){var h=a.intersection(s.coordinates,l.coordinates);if(null===h||0===h.length)return null;if(1!==h.length)return i.multiPolygon(h,n.properties);var c=h[0][0][0],u=h[0][0][h[0][0].length-1];return c[0]===u[0]&&c[1]===u[1]?i.polygon(h[0],n.properties):null}if("MultiPolygon"===s.type){for(var p=[],f=0,d=s.coordinates;f<d.length;f++){var g=d[f],_=t(o.getGeom(i.polygon(g)),l);if(_){var m=o.getGeom(_);if("Polygon"===m.type)p.push(m.coordinates);else{if("MultiPolygon"!==m.type)throw new Error("intersection is invalid");p=p.concat(m.coordinates)}}}return 0===p.length?null:1===p.length?i.polygon(p[0],n.properties):i.multiPolygon(p,n.properties)}if("MultiPolygon"===l.type)return t(l,s);throw new Error("poly1 and poly2 must be either polygons or multiPolygons")}},function(t,e,r){t.exports=r(135)},function(t,e){Array.prototype.findIndex=Array.prototype.findIndex||function(t){if(null===this)throw new TypeError("Array.prototype.findIndex called on null or undefined");if("function"!=typeof t)throw new TypeError("callback must be a function");for(var e=Object(this),r=e.length>>>0,n=arguments[1],i=0;i<r;i++)if(t.call(n,e[i],i,e))return i;return-1},Array.prototype.find=Array.prototype.find||function(t){if(null===this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!=typeof t)throw new TypeError("callback must be a function");for(var e=Object(this),r=e.length>>>0,n=arguments[1],i=0;i<r;i++){var o=e[i];if(t.call(n,o,i,e))return o}},"function"!=typeof Object.assign&&(Object.assign=function(t){"use strict";if(null==t)throw new TypeError("Cannot convert undefined or null to object");t=Object(t);for(var e=1;e<arguments.length;e++){var r=arguments[e];if(null!=r)for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}),[Element.prototype,CharacterData.prototype,DocumentType.prototype].forEach((function(t){t.hasOwnProperty("remove")||Object.defineProperty(t,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})}))},function(t,e,r){var n=r(58),i=r(30),o=r(89),a=r(91),s=r(2),l=r(37),h=r(36);t.exports=function t(e,r,c,u,p){e!==r&&o(r,(function(o,l){if(p=p||new n,s(o))a(e,r,l,c,t,u,p);else{var f=u?u(h(e,l),o,l+"",e,r,p):void 0;void 0===f&&(f=o),i(e,l,f)}}),l)}},function(t,e,r){var n=r(8),i=r(64),o=r(65),a=r(66),s=r(67),l=r(68);function h(t){var e=this.__data__=new n(t);this.size=e.size}h.prototype.clear=i,h.prototype.delete=o,h.prototype.get=a,h.prototype.has=s,h.prototype.set=l,t.exports=h},function(t,e){t.exports=function(){this.__data__=[],this.size=0}},function(t,e,r){var n=r(9),i=Array.prototype.splice;t.exports=function(t){var e=this.__data__,r=n(e,t);return!(r<0||(r==e.length-1?e.pop():i.call(e,r,1),--this.size,0))}},function(t,e,r){var n=r(9);t.exports=function(t){var e=this.__data__,r=n(e,t);return r<0?void 0:e[r][1]}},function(t,e,r){var n=r(9);t.exports=function(t){return-1<n(this.__data__,t)}},function(t,e,r){var n=r(9);t.exports=function(t,e){var r=this.__data__,i=n(r,t);return i<0?(++this.size,r.push([t,e])):r[i][1]=e,this}},function(t,e,r){var n=r(8);t.exports=function(){this.__data__=new n,this.size=0}},function(t,e){t.exports=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}},function(t,e){t.exports=function(t){return this.__data__.get(t)}},function(t,e){t.exports=function(t){return this.__data__.has(t)}},function(t,e,r){var n=r(8),i=r(27),o=r(29);t.exports=function(t,e){var r=this.__data__;if(r instanceof n){var a=r.__data__;if(!i||a.length<199)return a.push([t,e]),this.size=++r.size,this;r=this.__data__=new o(a)}return r.set(t,e),this.size=r.size,this}},function(t,e,r){var n=r(15),i=r(73),o=r(2),a=r(75),s=/^\[object .+?Constructor\]$/,l=Function.prototype,h=Object.prototype,c=l.toString,u=h.hasOwnProperty,p=RegExp("^"+c.call(u).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!o(t)||i(t))&&(n(t)?p:s).test(a(t))}},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){var n=r(16),i=Object.prototype,o=i.hasOwnProperty,a=i.toString,s=n?n.toStringTag:void 0;t.exports=function(t){var e=o.call(t,s),r=t[s];try{t[s]=void 0;var n=!0}catch(t){}var i=a.call(t);return n&&(e?t[s]=r:delete t[s]),i}},function(t,e){var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},function(t,e,r){var n,i=r(74),o=(n=/[^.]+$/.exec(i&&i.keys&&i.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";t.exports=function(t){return!!o&&o in t}},function(t,e,r){var n=r(3)["__core-js_shared__"];t.exports=n},function(t,e){var r=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return r.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},function(t,e,r){var n=r(78),i=r(8),o=r(27);t.exports=function(){this.size=0,this.__data__={hash:new n,map:new(o||i),string:new n}}},function(t,e,r){var n=r(79),i=r(80),o=r(81),a=r(82),s=r(83);function l(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}l.prototype.clear=n,l.prototype.delete=i,l.prototype.get=o,l.prototype.has=a,l.prototype.set=s,t.exports=l},function(t,e,r){var n=r(11);t.exports=function(){this.__data__=n?n(null):{},this.size=0}},function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},function(t,e,r){var n=r(11),i=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(n){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return i.call(e,t)?e[t]:void 0}},function(t,e,r){var n=r(11),i=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return n?void 0!==e[t]:i.call(e,t)}},function(t,e,r){var n=r(11);t.exports=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=n&&void 0===e?"__lodash_hash_undefined__":e,this}},function(t,e,r){var n=r(12);t.exports=function(t){var e=n(this,t).delete(t);return this.size-=e?1:0,e}},function(t,e){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},function(t,e,r){var n=r(12);t.exports=function(t){return n(this,t).get(t)}},function(t,e,r){var n=r(12);t.exports=function(t){return n(this,t).has(t)}},function(t,e,r){var n=r(12);t.exports=function(t,e){var r=n(this,t),i=r.size;return r.set(t,e),this.size+=r.size==i?0:1,this}},function(t,e,r){var n=r(90)();t.exports=n},function(t,e){t.exports=function(t){return function(e,r,n){for(var i=-1,o=Object(e),a=n(e),s=a.length;s--;){var l=a[t?s:++i];if(!1===r(o[l],l,o))break}return e}}},function(t,e,r){var n=r(30),i=r(92),o=r(93),a=r(96),s=r(97),l=r(19),h=r(5),c=r(101),u=r(34),p=r(15),f=r(2),d=r(103),g=r(35),_=r(36),m=r(107);t.exports=function(t,e,r,y,v,L,b){var k=_(t,r),M=_(e,r),w=b.get(M);if(w)n(t,r,w);else{var C=L?L(k,M,r+"",t,e,b):void 0,x=void 0===C;if(x){var S=h(M),E=!S&&u(M),P=!S&&!E&&g(M);C=M,S||E||P?C=h(k)?k:c(k)?a(k):E?i(M,!(x=!1)):P?o(M,!(x=!1)):[]:d(M)||l(M)?l(C=k)?C=m(k):f(k)&&!p(k)||(C=s(M)):x=!1}x&&(b.set(M,C),v(C,M,y,L,b),b.delete(M)),n(t,r,C)}}},function(t,e,r){(function(t){var n=r(3),i=e&&!e.nodeType&&e,o=i&&"object"==typeof t&&t&&!t.nodeType&&t,a=o&&o.exports===i?n.Buffer:void 0,s=a?a.allocUnsafe:void 0;t.exports=function(t,e){if(e)return t.slice();var r=t.length,n=s?s(r):new t.constructor(r);return t.copy(n),n}}).call(this,r(18)(t))},function(t,e,r){var n=r(94);t.exports=function(t,e){var r=e?n(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}},function(t,e,r){var n=r(95);t.exports=function(t){var e=new t.constructor(t.byteLength);return new n(e).set(new n(t)),e}},function(t,e,r){var n=r(3).Uint8Array;t.exports=n},function(t,e){t.exports=function(t,e){var r=-1,n=t.length;for(e=e||Array(n);++r<n;)e[r]=t[r];return e}},function(t,e,r){var n=r(98),i=r(32),o=r(33);t.exports=function(t){return"function"!=typeof t.constructor||o(t)?{}:n(i(t))}},function(t,e,r){var n=r(2),i=Object.create;function o(){}t.exports=function(t){if(!n(t))return{};if(i)return i(t);o.prototype=t;var e=new o;return o.prototype=void 0,e}},function(t,e){t.exports=function(t,e){return function(r){return t(e(r))}}},function(t,e,r){var n=r(7),i=r(4);t.exports=function(t){return i(t)&&"[object Arguments]"==n(t)}},function(t,e,r){var n=r(20),i=r(4);t.exports=function(t){return i(t)&&n(t)}},function(t,e){t.exports=function(){return!1}},function(t,e,r){var n=r(7),i=r(32),o=r(4),a=Function.prototype,s=Object.prototype,l=a.toString,h=s.hasOwnProperty,c=l.call(Object);t.exports=function(t){if(!o(t)||"[object Object]"!=n(t))return!1;var e=i(t);if(null===e)return!0;var r=h.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&l.call(r)==c}},function(t,e,r){var n=r(7),i=r(21),o=r(4),a={};a["[object Float32Array]"]=a["[object Float64Array]"]=a["[object Int8Array]"]=a["[object Int16Array]"]=a["[object Int32Array]"]=a["[object Uint8Array]"]=a["[object Uint8ClampedArray]"]=a["[object Uint16Array]"]=a["[object Uint32Array]"]=!0,a["[object Arguments]"]=a["[object Array]"]=a["[object ArrayBuffer]"]=a["[object Boolean]"]=a["[object DataView]"]=a["[object Date]"]=a["[object Error]"]=a["[object Function]"]=a["[object Map]"]=a["[object Number]"]=a["[object Object]"]=a["[object RegExp]"]=a["[object Set]"]=a["[object String]"]=a["[object WeakMap]"]=!1,t.exports=function(t){return o(t)&&i(t.length)&&!!a[n(t)]}},function(t,e){t.exports=function(t){return function(e){return t(e)}}},function(t,e,r){(function(t){var n=r(28),i=e&&!e.nodeType&&e,o=i&&"object"==typeof t&&t&&!t.nodeType&&t,a=o&&o.exports===i&&n.process,s=function(){try{return o&&o.require&&o.require("util").types||a&&a.binding&&a.binding("util")}catch(t){}}();t.exports=s}).call(this,r(18)(t))},function(t,e,r){var n=r(108),i=r(37);t.exports=function(t){return n(t,i(t))}},function(t,e,r){var n=r(109),i=r(17);t.exports=function(t,e,r,o){var a=!r;r=r||{};for(var s=-1,l=e.length;++s<l;){var h=e[s],c=o?o(r[h],t[h],h,r,t):void 0;void 0===c&&(c=t[h]),a?i(r,h,c):n(r,h,c)}return r}},function(t,e,r){var n=r(17),i=r(10),o=Object.prototype.hasOwnProperty;t.exports=function(t,e,r){var a=t[e];o.call(t,e)&&i(a,r)&&(void 0!==r||e in t)||n(t,e,r)}},function(t,e,r){var n=r(111),i=r(19),o=r(5),a=r(34),s=r(22),l=r(35),h=Object.prototype.hasOwnProperty;t.exports=function(t,e){var r=o(t),c=!r&&i(t),u=!r&&!c&&a(t),p=!r&&!c&&!u&&l(t),f=r||c||u||p,d=f?n(t.length,String):[],g=d.length;for(var _ in t)!e&&!h.call(t,_)||f&&("length"==_||u&&("offset"==_||"parent"==_)||p&&("buffer"==_||"byteLength"==_||"byteOffset"==_)||s(_,g))||d.push(_);return d}},function(t,e){t.exports=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}},function(t,e,r){var n=r(2),i=r(33),o=r(113),a=Object.prototype.hasOwnProperty;t.exports=function(t){if(!n(t))return o(t);var e=i(t),r=[];for(var s in t)("constructor"!=s||!e&&a.call(t,s))&&r.push(s);return r}},function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e}},function(t,e,r){var n=r(115),i=r(122);t.exports=function(t){return n((function(e,r){var n=-1,o=r.length,a=1<o?r[o-1]:void 0,s=2<o?r[2]:void 0;for(a=3<t.length&&"function"==typeof a?(o--,a):void 0,s&&i(r[0],r[1],s)&&(a=o<3?void 0:a,o=1),e=Object(e);++n<o;){var l=r[n];l&&t(e,l,n,a)}return e}))}},function(t,e,r){var n=r(38),i=r(116),o=r(118);t.exports=function(t,e){return o(i(t,e,n),t+"")}},function(t,e,r){var n=r(117),i=Math.max;t.exports=function(t,e,r){return e=i(void 0===e?t.length-1:e,0),function(){for(var o=arguments,a=-1,s=i(o.length-e,0),l=Array(s);++a<s;)l[a]=o[e+a];a=-1;for(var h=Array(e+1);++a<e;)h[a]=o[a];return h[e]=r(l),n(t,this,h)}}},function(t,e){t.exports=function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}},function(t,e,r){var n=r(119),i=r(121)(n);t.exports=i},function(t,e,r){var n=r(120),i=r(31),o=r(38),a=i?function(t,e){return i(t,"toString",{configurable:!0,enumerable:!1,value:n(e),writable:!0})}:o;t.exports=a},function(t,e){t.exports=function(t){return function(){return t}}},function(t,e){var r=Date.now;t.exports=function(t){var e=0,n=0;return function(){var i=r(),o=16-(i-n);if(n=i,0<o){if(800<=++e)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}},function(t,e,r){var n=r(10),i=r(20),o=r(22),a=r(2);t.exports=function(t,e,r){if(!a(r))return!1;var s=typeof e;return!!("number"==s?i(r)&&o(e,r.length):"string"==s&&e in r)&&n(r[e],t)}},function(t,e,r){var n=r(39),i=r(40);t.exports=function(t,e){for(var r=0,o=(e=n(e,t)).length;null!=t&&r<o;)t=t[i(e[r++])];return r&&r==o?t:void 0}},function(t,e,r){var n=r(5),i=r(23),o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/;t.exports=function(t,e){if(n(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!i(t))||a.test(t)||!o.test(t)||null!=e&&t in Object(e)}},function(t,e,r){var n=r(126),i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o=/\\(\\)?/g,a=n((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(i,(function(t,r,n,i){e.push(n?i.replace(o,"$1"):r||t)})),e}));t.exports=a},function(t,e,r){var n=r(127);t.exports=function(t){var e=n(t,(function(t){return 500===r.size&&r.clear(),t})),r=e.cache;return e}},function(t,e,r){var n=r(29),i="Expected a function";function o(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(i);var r=function(){var n=arguments,i=e?e.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=t.apply(this,n);return r.cache=o.set(i,a)||o,a};return r.cache=new(o.Cache||n),r}o.Cache=n,t.exports=o},function(t,e,r){var n=r(129);t.exports=function(t){return null==t?"":n(t)}},function(t,e,r){var n=r(16),i=r(130),o=r(5),a=r(23),s=n?n.prototype:void 0,l=s?s.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(o(e))return i(e,t)+"";if(a(e))return l?l.call(e):"";var r=e+"";return"0"==r&&1/e==-1/0?"-0":r}},function(t,e){t.exports=function(t,e){for(var r=-1,n=null==t?0:t.length,i=Array(n);++r<n;)i[r]=e(t[r],r,t);return i}},function(t,e){var r=Object.prototype.hasOwnProperty;t.exports=function(t,e){return null!=t&&r.call(t,e)}},function(t,e,r){var n=r(39),i=r(19),o=r(5),a=r(22),s=r(21),l=r(40);t.exports=function(t,e,r){for(var h=-1,c=(e=n(e,t)).length,u=!1;++h<c;){var p=l(e[h]);if(!(u=null!=t&&r(t,p)))break;t=t[p]}return u||++h!=c?u:!!(c=null==t?0:t.length)&&s(c)&&a(p,c)&&(o(t)||i(t))}},function(t,e,r){},function(t,e,r){},function(t,e,r){"use strict";r.r(e),r(56);var n=r(41),i=r(42),o=r.n(i),a=r(43),s=r(44),l=r(45),h=r(46),c=r(47),u=r(48),p=r(49),f=r(50),d=r(51),g={en:a,de:s,it:l,ro:h,ru:c,es:u,nl:p,fr:f,pt_br:r(52),zh:d},_=L.Class.extend({initialize:function(t){this.map=t,this.Draw=new L.PM.Draw(t),this.Toolbar=new L.PM.Toolbar(t),this._globalRemovalMode=!1},setLang:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"en",e=1<arguments.length?arguments[1]:void 0,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"en";e&&(g[t]=o()(g[r],e)),L.PM.activeLang=t,this.map.pm.Toolbar.reinit()},addControls:function(t){this.Toolbar.addControls(t)},removeControls:function(){this.Toolbar.removeControls()},toggleControls:function(){this.Toolbar.toggleControls()},controlsVisible:function(){return this.Toolbar.isVisible},enableDraw:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"Polygon",e=1<arguments.length?arguments[1]:void 0;"Poly"===t&&(t="Polygon"),this.Draw.enable(t,e)},disableDraw:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"Polygon";"Poly"===t&&(t="Polygon"),this.Draw.disable(t)},setPathOptions:function(t){this.Draw.setPathOptions(t)},findLayers:function(){var t=[];return this.map.eachLayer((function(e){(e instanceof L.Polyline||e instanceof L.Marker||e instanceof L.Circle||e instanceof L.CircleMarker)&&t.push(e)})),t=(t=t.filter((function(t){return!!t.pm}))).filter((function(t){return!t._pmTempLayer}))},removeLayer:function(t){var e=t.target;e._pmTempLayer||e.pm&&e.pm.dragging()||(e.remove(),this.map.fire("pm:remove",{layer:e}))},globalDragModeEnabled:function(){return!!this._globalDragMode},enableGlobalDragMode:function(){var t=this.findLayers();this._globalDragMode=!0,t.forEach((function(t){t.pm.enableLayerDrag()})),this.map.on("layeradd",this.layerAddHandler,this),this.Toolbar.toggleButton("dragMode",this._globalDragMode),this._fireDragModeEvent(!0)},disableGlobalDragMode:function(){var t=this.findLayers();this._globalDragMode=!1,t.forEach((function(t){t.pm.disableLayerDrag()})),this.map.off("layeradd",this.layerAddHandler,this),this.Toolbar.toggleButton("dragMode",this._globalDragMode),this._fireDragModeEvent(!1)},_fireDragModeEvent:function(t){this.map.fire("pm:globaldragmodetoggled",{enabled:t,map:this.map})},toggleGlobalDragMode:function(){this.globalDragModeEnabled()?this.disableGlobalDragMode():this.enableGlobalDragMode()},layerAddHandler:function(t){var e=t.layer;!e.pm||e._pmTempLayer||(this.globalRemovalEnabled()&&(this.disableGlobalRemovalMode(),this.enableGlobalRemovalMode()),this.globalEditEnabled()&&(this.disableGlobalEditMode(),this.enableGlobalEditMode()),this.globalDragModeEnabled()&&(this.disableGlobalDragMode(),this.enableGlobalDragMode()))},disableGlobalRemovalMode:function(){var t=this;this._globalRemovalMode=!1,this.map.eachLayer((function(e){e.off("click",t.removeLayer,t)})),this.map.off("layeradd",this.layerAddHandler,this),this.Toolbar.toggleButton("deleteLayer",this._globalRemovalMode),this._fireRemovalModeEvent(!1)},enableGlobalRemovalMode:function(){var t=this;this._globalRemovalMode=!0,this.map.eachLayer((function(e){(function(t){return t.pm&&!(t.pm.options&&t.pm.options.preventMarkerRemoval)&&!(t instanceof L.LayerGroup)})(e)&&e.on("click",t.removeLayer,t)})),this.map.on("layeradd",this.layerAddHandler,this),this.Toolbar.toggleButton("deleteLayer",this._globalRemovalMode),this._fireRemovalModeEvent(!0)},_fireRemovalModeEvent:function(t){this.map.fire("pm:globalremovalmodetoggled",{enabled:t,map:this.map})},toggleGlobalRemovalMode:function(){this.globalRemovalEnabled()?this.disableGlobalRemovalMode():this.enableGlobalRemovalMode()},globalRemovalEnabled:function(){return!!this._globalRemovalMode},globalEditEnabled:function(){return this._globalEditMode},enableGlobalEditMode:function(t){var e=this.findLayers();this._globalEditMode=!0,e.forEach((function(e){e.pm.enable(t)})),this.map.on("layeradd",this.layerAddHandler,this),this.Toolbar.toggleButton("editPolygon",this._globalEditMode),this._fireEditModeEvent(!0)},disableGlobalEditMode:function(){var t=this.findLayers();this._globalEditMode=!1,t.forEach((function(t){t.pm.disable()})),this.map.on("layeroff",this.layerAddHandler,this),this.Toolbar.toggleButton("editPolygon",this._globalEditMode),this._fireEditModeEvent(!1)},_fireEditModeEvent:function(t){this.map.fire("pm:globaleditmodetoggled",{enabled:t,map:this.map})},toggleGlobalEditMode:function(t){this.globalEditEnabled()?this.disableGlobalEditMode():this.enableGlobalEditMode(t)}}),m=r(0),y=r.n(m),v=r(53),b=r.n(v);function k(t){var e=L.PM.activeLang;return b()(g,e)||(e="en"),y()(g[e],t)}var M=L.Control.extend({options:{position:"topleft"},initialize:function(t){this._button=L.Util.setOptions(this,t)},onAdd:function(t){return this._map=t,this._container="edit"===this._button.tool?this._map.pm.Toolbar.editContainer:this._map.pm.Toolbar.drawContainer,this.buttonsDomNode=this._makeButton(this._button),this._container.appendChild(this.buttonsDomNode),this._container},onRemove:function(){return this.buttonsDomNode.remove(),this._container},getText:function(){return this._button.text},getIconUrl:function(){return this._button.iconUrl},destroy:function(){this._button={},this._update()},toggle:function(t){return this._button.toggleStatus="boolean"==typeof t?t:!this._button.toggleStatus,this._applyStyleClasses(),this._button.toggleStatus},toggled:function(){return this._button.toggleStatus},onCreate:function(){this.toggle(!1)},_triggerClick:function(t){this._button.onClick(t),this._clicked(t),this._button.afterClick(t)},_makeButton:function(t){var e=this,r=L.DomUtil.create("div","button-container",this._container),n=L.DomUtil.create("a","leaflet-buttons-control-button",r),i=L.DomUtil.create("div","leaflet-pm-actions-container",r),o=t.actions,a={cancel:{text:k("actions.cancel"),onClick:function(){this._triggerClick()}},removeLastVertex:{text:k("actions.removeLastVertex"),onClick:function(){this._map.pm.Draw[t.jsClass]._removeLastVertex()}},finish:{text:k("actions.finish"),onClick:function(e){this._map.pm.Draw[t.jsClass]._finishShape(e)}}};o.forEach((function(t){var r=a[t],n=L.DomUtil.create("a","leaflet-pm-action action-".concat(t),i);n.innerHTML=r.text,L.DomEvent.addListener(n,"click",r.onClick,e),L.DomEvent.disableClickPropagation(n)})),t.toggleStatus&&L.DomUtil.addClass(n,"active");var s=L.DomUtil.create("div","control-icon",n);return t.title&&s.setAttribute("title",t.title),t.iconUrl&&s.setAttribute("src",t.iconUrl),t.className&&L.DomUtil.addClass(s,t.className),L.DomEvent.addListener(n,"click",(function(){e._button.disableOtherButtons&&e._map.pm.Toolbar.triggerClickOnToggledButtons(e)})),L.DomEvent.addListener(n,"click",this._triggerClick,this),L.DomEvent.disableClickPropagation(n),r},_applyStyleClasses:function(){this._container&&(this._button.toggleStatus?L.DomUtil.addClass(this.buttonsDomNode,"active"):L.DomUtil.removeClass(this.buttonsDomNode,"active"))},_clicked:function(){this._button.doToggle&&this.toggle()}});L.Control.PMButton=M;var w=L.Class.extend({options:{drawMarker:!0,drawRectangle:!0,drawPolyline:!0,drawPolygon:!0,drawCircle:!0,drawCircleMarker:!0,editMode:!0,dragMode:!0,cutPolygon:!0,removalMode:!0,position:"topleft"},initialize:function(t){this.init(t)},reinit:function(){var t=this.isVisible;this.removeControls(),this._defineButtons(),t&&this.addControls()},init:function(t){this.map=t,this.buttons={},this.isVisible=!1,this.drawContainer=L.DomUtil.create("div","leaflet-pm-toolbar leaflet-pm-draw leaflet-bar leaflet-control"),this.editContainer=L.DomUtil.create("div","leaflet-pm-toolbar leaflet-pm-edit leaflet-bar leaflet-control"),this._defineButtons()},getButtons:function(){return this.buttons},addControls:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this.options;void 0!==t.editPolygon&&(t.editMode=t.editPolygon),void 0!==t.deleteLayer&&(t.removalMode=t.deleteLayer),L.Util.setOptions(this,t),this.applyIconStyle(),this._showHideButtons(),this.isVisible=!0},applyIconStyle:function(){var t=this.getButtons(),e={geomanIcons:{drawMarker:"control-icon leaflet-pm-icon-marker",drawPolyline:"control-icon leaflet-pm-icon-polyline",drawRectangle:"control-icon leaflet-pm-icon-rectangle",drawPolygon:"control-icon leaflet-pm-icon-polygon",drawCircle:"control-icon leaflet-pm-icon-circle",drawCircleMarker:"control-icon leaflet-pm-icon-circle-marker",editMode:"control-icon leaflet-pm-icon-edit",dragMode:"control-icon leaflet-pm-icon-drag",cutPolygon:"control-icon leaflet-pm-icon-cut",removalMode:"control-icon leaflet-pm-icon-delete"}};for(var r in t){var n=t[r];L.Util.setOptions(n,{className:e.geomanIcons[r]})}},removeControls:function(){var t=this.getButtons();for(var e in t)t[e].remove();this.isVisible=!1},toggleControls:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this.options;this.isVisible?this.removeControls():this.addControls(t)},_addButton:function(t,e){return this.buttons[t]=e,this.options[t]=this.options[t]||!1,this.buttons[t]},triggerClickOnToggledButtons:function(t){for(var e in this.buttons)this.buttons[e]!==t&&this.buttons[e].toggled()&&this.buttons[e]._triggerClick()},toggleButton:function(t,e){return"editPolygon"===t&&(t="editMode"),"deleteLayer"===t&&(t="removalMode"),this.triggerClickOnToggledButtons(this.buttons[t]),this.buttons[t].toggle(e)},_defineButtons:function(){var t=this,e={className:"control-icon leaflet-pm-icon-marker",title:k("buttonTitles.drawMarkerButton"),jsClass:"Marker",onClick:function(){},afterClick:function(){t.map.pm.Draw.Marker.toggle()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,actions:["cancel"]},r={title:k("buttonTitles.drawPolyButton"),className:"control-icon leaflet-pm-icon-polygon",jsClass:"Polygon",onClick:function(){},afterClick:function(){t.map.pm.Draw.Polygon.toggle()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,actions:["finish","removeLastVertex","cancel"]},n={className:"control-icon leaflet-pm-icon-polyline",title:k("buttonTitles.drawLineButton"),jsClass:"Line",onClick:function(){},afterClick:function(){t.map.pm.Draw.Line.toggle()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,actions:["finish","removeLastVertex","cancel"]},i={title:k("buttonTitles.drawCircleButton"),className:"control-icon leaflet-pm-icon-circle",jsClass:"Circle",onClick:function(){},afterClick:function(){t.map.pm.Draw.Circle.toggle()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,actions:["cancel"]},o={title:k("buttonTitles.drawCircleMarkerButton"),className:"control-icon leaflet-pm-icon-circle-marker",jsClass:"CircleMarker",onClick:function(){},afterClick:function(){t.map.pm.Draw.CircleMarker.toggle()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,actions:["cancel"]},a={title:k("buttonTitles.drawRectButton"),className:"control-icon leaflet-pm-icon-rectangle",jsClass:"Rectangle",onClick:function(){},afterClick:function(){t.map.pm.Draw.Rectangle.toggle()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,actions:["cancel"]},s={title:k("buttonTitles.editButton"),className:"control-icon leaflet-pm-icon-edit",onClick:function(){},afterClick:function(){t.map.pm.toggleGlobalEditMode()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,tool:"edit",actions:["cancel"]},l={title:k("buttonTitles.dragButton"),className:"control-icon leaflet-pm-icon-drag",onClick:function(){},afterClick:function(){t.map.pm.toggleGlobalDragMode()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,tool:"edit",actions:["cancel"]},h={title:k("buttonTitles.cutButton"),className:"control-icon leaflet-pm-icon-cut",jsClass:"Cut",onClick:function(){},afterClick:function(){t.map.pm.Draw.Cut.toggle({snappable:!0,cursorMarker:!0,allowSelfIntersection:!1})},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,tool:"edit",actions:["finish","removeLastVertex","cancel"]},c={title:k("buttonTitles.deleteButton"),className:"control-icon leaflet-pm-icon-delete",onClick:function(){},afterClick:function(){t.map.pm.toggleGlobalRemovalMode()},doToggle:!0,toggleStatus:!1,disableOtherButtons:!0,position:this.options.position,tool:"edit",actions:["cancel"]};this._addButton("drawMarker",new L.Control.PMButton(e)),this._addButton("drawPolyline",new L.Control.PMButton(n)),this._addButton("drawRectangle",new L.Control.PMButton(a)),this._addButton("drawPolygon",new L.Control.PMButton(r)),this._addButton("drawCircle",new L.Control.PMButton(i)),this._addButton("drawCircleMarker",new L.Control.PMButton(o)),this._addButton("editMode",new L.Control.PMButton(s)),this._addButton("dragMode",new L.Control.PMButton(l)),this._addButton("cutPolygon",new L.Control.PMButton(h)),this._addButton("removalMode",new L.Control.PMButton(c))},_showHideButtons:function(){this.removeControls();var t=this.getButtons();for(var e in t)this.options[e]&&(t[e].setPosition(this.options.position),t[e].addTo(this.map))}}),C=function(t,e,r){var n=t.project(e),i=t.project(r);return t.unproject(n._add(i)._divideBy(2))},x={_initSnappableMarkers:function(){this.options.snapDistance=this.options.snapDistance||30,this._assignEvents(this._markers),this._layer.off("pm:dragstart",this._unsnap,this),this._layer.on("pm:dragstart",this._unsnap,this)},_assignEvents:function(t){var e=this;t.forEach((function(t){Array.isArray(t)?e._assignEvents(t):(t.off("drag",e._handleSnapping,e),t.on("drag",e._handleSnapping,e),t.off("dragend",e._cleanupSnapping,e),t.on("dragend",e._cleanupSnapping,e))}))},_unsnap:function(){delete this._snapLatLng},_cleanupSnapping:function(){delete this._snapList,this._map.off("pm:remove",this._handleSnapLayerRemoval,this),this.debugIndicatorLines&&this.debugIndicatorLines.forEach((function(t){t.remove()}))},_handleSnapLayerRemoval:function(t){var e=t.layer,r=this._snapList.findIndex((function(t){return t._leaflet_id===e._leaflet_id}));this._snapList.splice(r,1)},_handleSnapping:function(t){var e=this;if(t.originalEvent.altKey)return!1;if(void 0===this._snapList&&(this._createSnapList(),this._map.off("layeradd",this._createSnapList,this),this._map.on("layeradd",this._createSnapList,this)),this._snapList.length<=0)return!1;var r,n=t.target,i=this._calcClosestLayer(n.getLatLng(),this._snapList),o=i.layer instanceof L.Marker||i.layer instanceof L.CircleMarker;r=o?i.latlng:this._checkPrioritiySnapping(i);var a=this.options.snapDistance,s={marker:n,snapLatLng:r,segment:i.segment,layer:this._layer,layerInteractedWith:i.layer,distance:i.distance};if(s.marker.fire("pm:snapdrag",s),this._layer.fire("pm:snapdrag",s),i.distance<a){n.setLatLng(r),n._snapped=!0;var l=this._snapLatLng||{},h=r||{};l.lat===h.lat&&l.lng===h.lng||(e._snapLatLng=r,n.fire("pm:snap",s),e._layer.fire("pm:snap",s))}else this._snapLatLng&&(this._unsnap(s),n._snapped=!1,s.marker.fire("pm:unsnap",s),this._layer.fire("pm:unsnap",s));return!0},_checkPrioritiySnapping:function(t){var e,r=this._map,n=t.segment[0],i=t.segment[1],o=t.latlng,a=this._getDistance(r,n,o),s=this._getDistance(r,i,o),l=a<s?n:i,h=a<s?a:s;if(this.options.snapMiddle){var c=C(r,n,i),u=this._getDistance(r,c,o);u<a&&u<s&&(l=c,h=u)}return e=h<this.options.snapDistance?l:o,Object.assign({},e)},_createSnapList:function(){var t=this,e=[],r=[],n=this._map;n.off("pm:remove",this._handleSnapLayerRemoval,this),n.on("pm:remove",this._handleSnapLayerRemoval,this),n.eachLayer((function(t){if((t instanceof L.Polyline||t instanceof L.Marker||t instanceof L.CircleMarker)&&!0!==t.options.snapIgnore){e.push(t);var n=L.polyline([],{color:"red",pmIgnore:!0});n._pmTempLayer=!0,r.push(n)}})),e=(e=(e=e.filter((function(e){return t._layer!==e}))).filter((function(t){return t._latlng||t._latlngs&&0<t._latlngs.length}))).filter((function(t){return!t._pmTempLayer})),this._otherSnapLayers?this._snapList=e.concat(this._otherSnapLayers):this._snapList=e,this.debugIndicatorLines=r},_calcClosestLayer:function(t,e){var r=this,n={};return e.forEach((function(e,i){var o=r._calcLayerDistances(t,e);r.debugIndicatorLines[i].setLatLngs([t,o.latlng]),(void 0===n.distance||o.distance<n.distance)&&((n=o).layer=e)})),n},_calcLayerDistances:function(t,e){var r,n,i=this,o=this._map,a=e instanceof L.Marker||e instanceof L.CircleMarker,s=e instanceof L.Polygon,l=t,h=a?e.getLatLng():e.getLatLngs();if(a)return{latlng:Object.assign({},h),distance:this._getDistance(o,h,l)};!function t(e){e.forEach((function(a,h){if(Array.isArray(a))t(a);else{var c,u=a;c=s?h+1===e.length?0:h+1:h+1===e.length?void 0:h+1;var p=e[c];if(p){var f=i._getDistanceToSegment(o,l,u,p);(void 0===n||f<n)&&(n=f,r=[u,p])}}}))}(h);var c=this._getClosestPointOnSegment(o,t,r[0],r[1]);return{latlng:Object.assign({},c),segment:r,distance:n}},_getClosestPointOnSegment:function(t,e,r,n){var i=t.getMaxZoom();i===1/0&&(i=t.getZoom());var o=t.project(e,i),a=t.project(r,i),s=t.project(n,i),l=L.LineUtil.closestPointOnSegment(o,a,s);return t.unproject(l,i)},_getDistanceToSegment:function(t,e,r,n){var i=t.latLngToLayerPoint(e),o=t.latLngToLayerPoint(r),a=t.latLngToLayerPoint(n);return L.LineUtil.pointToSegmentDistance(i,o,a)},_getDistance:function(t,e,r){return t.latLngToLayerPoint(e).distanceTo(t.latLngToLayerPoint(r))}},S=L.Class.extend({includes:[x],options:{snappable:!0,snapDistance:20,tooltips:!0,cursorMarker:!0,finishOnDoubleClick:!1,finishOn:null,allowSelfIntersection:!0,templineStyle:{},hintlineStyle:{color:"#3388ff",dashArray:"5,5"},markerStyle:{draggable:!0}},initialize:function(t){var e=this;this._map=t,this.shapes=["Marker","CircleMarker","Line","Polygon","Rectangle","Circle","Cut"],this.shapes.forEach((function(t){e[t]=new L.PM.Draw[t](e._map)}))},setPathOptions:function(t){this.options.pathOptions=t},getShapes:function(){return this.shapes},enable:function(t,e){if(!t)throw new Error("Error: Please pass a shape as a parameter. Possible shapes are: ".concat(this.getShapes().join(",")));this.disable(),this[t].enable(e)},disable:function(){var t=this;this.shapes.forEach((function(e){t[e].disable()}))},addControls:function(){var t=this;this.shapes.forEach((function(e){t[e].addButton()}))}});S.Marker=S.extend({initialize:function(t){this._map=t,this._shape="Marker",this.toolbarButtonName="drawMarker"},enable:function(t){var e=this;L.Util.setOptions(this,t),this._enabled=!0,this._map.on("click",this._createMarker,this),this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!0),this._hintMarker=L.marker([0,0],this.options.markerStyle),this._hintMarker._pmTempLayer=!0,this._hintMarker.addTo(this._map),this.options.tooltips&&this._hintMarker.bindTooltip(k("tooltips.placeMarker"),{permanent:!0,offset:L.point(0,10),direction:"bottom",opacity:.8}).openTooltip(),this._layer=this._hintMarker,this._map.on("mousemove",this._syncHintMarker,this),this._map.fire("pm:drawstart",{shape:this._shape,workingLayer:this._layer}),this._map.eachLayer((function(t){e.isRelevantMarker(t)&&t.pm.enable()}))},disable:function(){var t=this;this._enabled&&(this._map.off("click",this._createMarker,this),this._hintMarker.remove(),this._map.off("mousemove",this._syncHintMarker,this),this._map.eachLayer((function(e){t.isRelevantMarker(e)&&e.pm.disable()})),this._map.fire("pm:drawend",{shape:this._shape}),this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!1),this.options.snappable&&this._cleanupSnapping(),this._enabled=!1)},isRelevantMarker:function(t){return t instanceof L.Marker&&t.pm&&!t._pmTempLayer},enabled:function(){return this._enabled},toggle:function(t){this.enabled()?this.disable():this.enable(t)},_createMarker:function(t){if(t.latlng){this._hintMarker._snapped||this._hintMarker.setLatLng(t.latlng);var e=this._hintMarker.getLatLng(),r=new L.Marker(e,this.options.markerStyle);r.addTo(this._map),r.pm.enable(),this._map.fire("pm:create",{shape:this._shape,marker:r,layer:r}),this._cleanupSnapping()}},_syncHintMarker:function(t){if(this._hintMarker.setLatLng(t.latlng),this.options.snappable){var e=t;e.target=this._hintMarker,this._handleSnapping(e)}}});var E=r(6),P=r.n(E);S.Line=S.extend({initialize:function(t){this._map=t,this._shape="Line",this.toolbarButtonName="drawPolyline",this._doesSelfIntersect=!1},enable:function(t){L.Util.setOptions(this,t),this.options.finishOnDoubleClick&&!this.options.finishOn&&(this.options.finishOn="dblclick"),this._enabled=!0,this._layerGroup=new L.LayerGroup,this._layerGroup._pmTempLayer=!0,this._layerGroup.addTo(this._map),this._layer=L.polyline([],this.options.templineStyle),this._layer._pmTempLayer=!0,this._layerGroup.addLayer(this._layer),this._hintline=L.polyline([],this.options.hintlineStyle),this._hintline._pmTempLayer=!0,this._layerGroup.addLayer(this._hintline),this._hintMarker=L.marker(this._map.getCenter(),{icon:L.divIcon({className:"marker-icon cursor-marker"})}),this._hintMarker._pmTempLayer=!0,this._layerGroup.addLayer(this._hintMarker),this.options.cursorMarker&&L.DomUtil.addClass(this._hintMarker._icon,"visible"),this.options.tooltips&&this._hintMarker.bindTooltip(k("tooltips.firstVertex"),{permanent:!0,offset:L.point(0,10),direction:"bottom",opacity:.8}).openTooltip(),this._map._container.style.cursor="crosshair",this._map.on("click",this._createVertex,this),this.options.finishOn&&this._map.on(this.options.finishOn,this._finishShape,this),"dblclick"===this.options.finishOn&&(this.tempMapDoubleClickZoomState=this._map.doubleClickZoom._enabled,this.tempMapDoubleClickZoomState&&this._map.doubleClickZoom.disable()),this._map.on("mousemove",this._syncHintMarker,this),this._hintMarker.on("move",this._syncHintLine,this),this._map.fire("pm:drawstart",{shape:this._shape,workingLayer:this._layer}),this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!0),this._otherSnapLayers=[]},disable:function(){this._enabled&&(this._enabled=!1,this._map._container.style.cursor="",this._map.off("click",this._createVertex,this),this._map.off("mousemove",this._syncHintMarker,this),this.options.finishOn&&this._map.off(this.options.finishOn,this._finishShape,this),this.tempMapDoubleClickZoomState&&this._map.doubleClickZoom.enable(),this._map.removeLayer(this._layerGroup),this._map.fire("pm:drawend",{shape:this._shape}),this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!1),this.options.snappable&&this._cleanupSnapping())},enabled:function(){return this._enabled},toggle:function(t){this.enabled()?this.disable():this.enable(t)},hasSelfIntersection:function(){return 0<P()(this._layer.toGeoJSON(15)).features.length},_syncHintLine:function(){var t=this._layer.getLatLngs();if(0<t.length){var e=t[t.length-1];this._hintline.setLatLngs([e,this._hintMarker.getLatLng()])}},_syncHintMarker:function(t){if(this._hintMarker.setLatLng(t.latlng),this.options.snappable){var e=t;e.target=this._hintMarker,this._handleSnapping(e)}this.options.allowSelfIntersection||this._handleSelfIntersection(!0,t.latlng)},_handleSelfIntersection:function(t,e){var r=L.polyline(this._layer.getLatLngs());t&&(e=e||this._hintMarker.getLatLng(),r.addLatLng(e));var n=P()(r.toGeoJSON(15));this._doesSelfIntersect=0<n.features.length,this._doesSelfIntersect?this._hintline.setStyle({color:"red"}):this._hintline.setStyle(this.options.hintlineStyle)},_removeLastVertex:function(){var t=this._layer.getLatLngs(),e=t.pop();if(t.length<1)this.disable();else{var r=this._layerGroup.getLayers().filter((function(t){return t instanceof L.Marker})).filter((function(t){return!L.DomUtil.hasClass(t._icon,"cursor-marker")})).find((function(t){return t.getLatLng()===e}));this._layerGroup.removeLayer(r),this._layer.setLatLngs(t),this._syncHintLine()}},_createVertex:function(t){if(this.options.allowSelfIntersection||(this._handleSelfIntersection(!0,t.latlng),!this._doesSelfIntersect)){this._hintMarker._snapped||this._hintMarker.setLatLng(t.latlng);var e=this._hintMarker.getLatLng();if(e.equals(this._layer.getLatLngs()[0]))this._finishShape(t);else{var r=0===this._layer.getLatLngs().length;this._layer.addLatLng(e);var n=this._createMarker(e,r);this._hintline.setLatLngs([e,e]),this._layer.fire("pm:vertexadded",{shape:this._shape,workingLayer:this._layer,marker:n,latlng:e})}}},_finishShape:function(){if(this.options.allowSelfIntersection||(this._handleSelfIntersection(!1),!this._doesSelfIntersect)){var t=this._layer.getLatLngs();if(!(t.length<=1)){var e=L.polyline(t,this.options.pathOptions).addTo(this._map);this.disable(),this._map.fire("pm:create",{shape:this._shape,layer:e}),this.options.snappable&&this._cleanupSnapping()}}},_createMarker:function(t,e){var r=new L.Marker(t,{draggable:!1,icon:L.divIcon({className:"marker-icon"})});return r._pmTempLayer=!0,this._layerGroup.addLayer(r),r.on("click",this._finishShape,this),e&&this._hintMarker.setTooltipContent(k("tooltips.continueLine")),2===this._layer.getLatLngs().length&&this._hintMarker.setTooltipContent(k("tooltips.finishLine")),r}}),S.Polygon=S.Line.extend({initialize:function(t){this._map=t,this._shape="Polygon",this.toolbarButtonName="drawPolygon"},_finishShape:function(t){if(this.options.allowSelfIntersection||(this._handleSelfIntersection(!1),!this._doesSelfIntersect)){var e=this._layer.getLatLngs();if(!(e.length<=2)){t&&"dblclick"===t.type&&e.splice(e.length-1,1);var r=L.polygon(e,this.options.pathOptions).addTo(this._map);this.disable(),this._map.fire("pm:create",{shape:this._shape,layer:r}),this._cleanupSnapping(),this._otherSnapLayers.splice(this._tempSnapLayerIndex,1),delete this._tempSnapLayerIndex}}},_createMarker:function(t,e){var r=new L.Marker(t,{draggable:!1,icon:L.divIcon({className:"marker-icon"})});return r._pmTempLayer=!0,this._layerGroup.addLayer(r),e&&(r.on("click",this._finishShape,this),this._tempSnapLayerIndex=this._otherSnapLayers.push(r)-1,this.options.snappable&&this._cleanupSnapping()),e&&this._hintMarker.setTooltipContent(k("tooltips.continueLine")),3===this._layer.getLatLngs().length&&this._hintMarker.setTooltipContent(k("tooltips.finishPoly")),r}}),S.Rectangle=S.extend({initialize:function(t){this._map=t,this._shape="Rectangle",this.toolbarButtonName="drawRectangle"},enable:function(t){if(L.Util.setOptions(this,t),this._enabled=!0,this._layerGroup=new L.LayerGroup,this._layerGroup._pmTempLayer=!0,this._layerGroup.addTo(this._map),this._layer=L.rectangle([[0,0],[0,0]],this.options.pathOptions),this._layer._pmTempLayer=!0,this._startMarker=L.marker([0,0],{icon:L.divIcon({className:"marker-icon rect-start-marker"}),draggable:!0,zIndexOffset:100,opacity:this.options.cursorMarker?1:0}),this._startMarker._pmTempLayer=!0,this._layerGroup.addLayer(this._startMarker),this._hintMarker=L.marker([0,0],{icon:L.divIcon({className:"marker-icon cursor-marker"})}),this._hintMarker._pmTempLayer=!0,this._layerGroup.addLayer(this._hintMarker),this.options.tooltips&&this._hintMarker.bindTooltip(k("tooltips.firstVertex"),{permanent:!0,offset:L.point(0,10),direction:"bottom",opacity:.8}).openTooltip(),this.options.cursorMarker){L.DomUtil.addClass(this._hintMarker._icon,"visible"),this._styleMarkers=[];for(var e=0;e<2;e+=1){var r=L.marker([0,0],{icon:L.divIcon({className:"marker-icon rect-style-marker"}),draggable:!0,zIndexOffset:100});r._pmTempLayer=!0,this._layerGroup.addLayer(r),this._styleMarkers.push(r)}}this._map._container.style.cursor="crosshair",this._map.on("click",this._placeStartingMarkers,this),this._map.on("mousemove",this._syncHintMarker,this),this._map.fire("pm:drawstart",{shape:this._shape,workingLayer:this._layer}),this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!0),this._otherSnapLayers=[]},disable:function(){this._enabled&&(this._enabled=!1,this._map._container.style.cursor="",this._map.off("click",this._finishShape,this),this._map.off("click",this._placeStartingMarkers,this),this._map.off("mousemove",this._syncHintMarker,this),this._map.removeLayer(this._layerGroup),this._map.fire("pm:drawend",{shape:this._shape}),this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!1),this.options.snappable&&this._cleanupSnapping())},enabled:function(){return this._enabled},toggle:function(t){this.enabled()?this.disable():this.enable(t)},_placeStartingMarkers:function(t){this._hintMarker._snapped||this._hintMarker.setLatLng(t.latlng);var e=this._hintMarker.getLatLng();L.DomUtil.addClass(this._startMarker._icon,"visible"),this._startMarker.setLatLng(e),this.options.cursorMarker&&this._styleMarkers&&this._styleMarkers.forEach((function(t){L.DomUtil.addClass(t._icon,"visible"),t.setLatLng(e)})),this._map.off("click",this._placeStartingMarkers,this),this._map.on("click",this._finishShape,this),this._hintMarker.setTooltipContent(k("tooltips.finishRect")),this._setRectangleOrigin()},_setRectangleOrigin:function(){var t=this._startMarker.getLatLng();t&&(this._layerGroup.addLayer(this._layer),this._layer.setLatLngs([t,t]),this._hintMarker.on("move",this._syncRectangleSize,this))},_syncHintMarker:function(t){if(this._hintMarker.setLatLng(t.latlng),this.options.snappable){var e=t;e.target=this._hintMarker,this._handleSnapping(e)}},_syncRectangleSize:function(){var t=this,e=this._startMarker.getLatLng(),r=this._hintMarker.getLatLng();if(this._layer.setBounds([e,r]),this.options.cursorMarker&&this._styleMarkers){var n=this._findCorners(),i=[];n.forEach((function(e){e.equals(t._startMarker.getLatLng())||e.equals(t._hintMarker.getLatLng())||i.push(e)})),i.forEach((function(e,r){t._styleMarkers[r].setLatLng(e)}))}},_finishShape:function(t){this._hintMarker._snapped||this._hintMarker.setLatLng(t.latlng);var e=this._hintMarker.getLatLng(),r=this._startMarker.getLatLng(),n=L.rectangle([r,e],this.options.pathOptions).addTo(this._map);this.disable(),this._map.fire("pm:create",{shape:this._shape,layer:n})},_findCorners:function(){var t=this._layer.getBounds();return[t.getNorthWest(),t.getNorthEast(),t.getSouthEast(),t.getSouthWest()]}}),S.Circle=S.extend({initialize:function(t){this._map=t,this._shape="Circle",this.toolbarButtonName="drawCircle"},enable:function(t){L.Util.setOptions(this,t),this.options.radius=0,this._enabled=!0,this._layerGroup=new L.LayerGroup,this._layerGroup._pmTempLayer=!0,this._layerGroup.addTo(this._map),this._layer=L.circle([0,0],this.options.templineStyle),this._layer._pmTempLayer=!0,this._layerGroup.addLayer(this._layer),this._centerMarker=L.marker([0,0],{icon:L.divIcon({className:"marker-icon"}),draggable:!1,zIndexOffset:100}),this._centerMarker._pmTempLayer=!0,this._layerGroup.addLayer(this._centerMarker),this._hintMarker=L.marker([0,0],{icon:L.divIcon({className:"marker-icon cursor-marker"})}),this._hintMarker._pmTempLayer=!0,this._layerGroup.addLayer(this._hintMarker),this.options.cursorMarker&&L.DomUtil.addClass(this._hintMarker._icon,"visible"),this.options.tooltips&&this._hintMarker.bindTooltip(k("tooltips.startCircle"),{permanent:!0,offset:L.point(0,10),direction:"bottom",opacity:.8}).openTooltip(),this._hintline=L.polyline([],this.options.hintlineStyle),this._hintline._pmTempLayer=!0,this._layerGroup.addLayer(this._hintline),this._map._container.style.cursor="crosshair",this._map.on("click",this._placeCenterMarker,this),this._map.on("mousemove",this._syncHintMarker,this),this._map.fire("pm:drawstart",{shape:this._shape,workingLayer:this._layer}),this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!0),this._otherSnapLayers=[]},disable:function(){this._enabled&&(this._enabled=!1,this._map._container.style.cursor="",this._map.off("click",this._finishShape,this),this._map.off("click",this._placeCenterMarker,this),this._map.off("mousemove",this._syncHintMarker,this),this._map.removeLayer(this._layerGroup),this._map.fire("pm:drawend",{shape:this._shape}),this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!1),this.options.snappable&&this._cleanupSnapping())},enabled:function(){return this._enabled},toggle:function(t){this.enabled()?this.disable():this.enable(t)},_syncHintLine:function(){var t=this._centerMarker.getLatLng();this._hintline.setLatLngs([t,this._hintMarker.getLatLng()])},_syncCircleRadius:function(){var t=this._centerMarker.getLatLng(),e=this._hintMarker.getLatLng(),r=t.distanceTo(e);this._layer.setRadius(r)},_syncHintMarker:function(t){if(this._hintMarker.setLatLng(t.latlng),this.options.snappable){var e=t;e.target=this._hintMarker,this._handleSnapping(e)}},_placeCenterMarker:function(t){this._hintMarker._snapped||this._hintMarker.setLatLng(t.latlng);var e=this._hintMarker.getLatLng();this._centerMarker.setLatLng(e),this._map.off("click",this._placeCenterMarker,this),this._map.on("click",this._finishShape,this),this._placeCircleCenter()},_placeCircleCenter:function(){var t=this._centerMarker.getLatLng();t&&(this._layer.setLatLng(t),this._hintMarker.on("move",this._syncHintLine,this),this._hintMarker.on("move",this._syncCircleRadius,this),this._hintMarker.setTooltipContent(k("tooltips.finishCircle")),this._layer.fire("pm:centerplaced",{shape:this._shape,workingLayer:this._layer,latlng:t}))},_finishShape:function(t){var e=this._centerMarker.getLatLng(),r=t.latlng,n=e.distanceTo(r),i=Object.assign({},this.options.pathOptions,{radius:n}),o=L.circle(e,i).addTo(this._map);this.disable(),this._map.fire("pm:create",{shape:this._shape,layer:o})},_createMarker:function(t){var e=new L.Marker(t,{draggable:!1,icon:L.divIcon({className:"marker-icon"})});return e._pmTempLayer=!0,this._layerGroup.addLayer(e),e}}),S.CircleMarker=S.Marker.extend({initialize:function(t){this._map=t,this._shape="CircleMarker",this.toolbarButtonName="drawCircleMarker"},enable:function(t){var e=this;L.Util.setOptions(this,t),this._enabled=!0,this._map.on("click",this._createMarker,this),this._map.pm.Toolbar.toggleButton(this.toolbarButtonName,!0),this._hintMarker=L.circleMarker([0,0],this.options.templineStyle),this._hintMarker._pmTempLayer=!0,this._hintMarker.addTo(this._map),this.options.tooltips&&this._hintMarker.bindTooltip(k("tooltips.placeCircleMarker"),{permanent:!0,offset:L.point(0,10),direction:"bottom",opacity:.8}).openTooltip(),this._layer=this._hintMarker,this._map.on("mousemove",this._syncHintMarker,this),this._map.fire("pm:drawstart",{shape:this._shape,workingLayer:this._layer}),this._map.eachLayer((function(t){e.isRelevantMarker(t)&&t.pm.enable()}))},isRelevantMarker:function(t){return t instanceof L.CircleMarker&&!(t instanceof L.Circle)&&t.pm&&!t._pmTempLayer},_createMarker:function(t){if(t.latlng){this._hintMarker._snapped||this._hintMarker.setLatLng(t.latlng);var e=this._hintMarker.getLatLng(),r=L.circleMarker(e,this.options.pathOptions);r.addTo(this._map),r.pm.enable(),this._map.fire("pm:create",{shape:this._shape,marker:r,layer:r}),this._cleanupSnapping()}}});var O=r(54),B=r.n(O),T=r(24),D=r(26),j=r.n(D),I=r(1),R=r(13),G=r(25);function A(t){switch(t.type){case"Polygon":return 1<j()(t)?t:null;case"MultiPolygon":var e=[];if(Object(G.flattenEach)(t,(function(t){1<j()(t)&&e.push(t.geometry.coordinates)})),e.length)return{type:"MultiPolygon",coordinates:e}}}S.Cut=S.Polygon.extend({initialize:function(t){this._map=t,this._shape="Cut",this.toolbarButtonName="cutPolygon"},_cut:function(t){var e=this,r=this._map._layers;Object.keys(r).map((function(t){return r[t]})).filter((function(t){return t.pm})).filter((function(t){return t instanceof L.Polygon})).filter((function(e){return e!==t})).filter((function(e){try{return!!B()(t.toGeoJSON(15),e.toGeoJSON(15))}catch(t){return console.error("You cant cut polygons with self-intersections"),!1}})).forEach((function(r){var n=function(t,e){var r=Object(R.getGeom)(t),n=Object(R.getGeom)(e),i=t.properties||{};if(r=A(r),n=A(n),!r)return null;if(!n)return Object(I.feature)(r,i);var o=T.diff(r.coordinates,n.coordinates);return 0===o.length?null:1===o.length?Object(I.polygon)(o[0],i):Object(I.multiPolygon)(o,i)}(r.toGeoJSON(15),t.toGeoJSON(15)),i=L.geoJSON(n,r.options).addTo(e._map);i.addTo(e._map),i.pm.enable(e.options),i.pm.disable(),r.fire("pm:cut",{shape:e._shape,layer:i,originalLayer:r}),e._map.fire("pm:cut",{shape:e._shape,layer:i,originalLayer:r}),r._pmTempLayer=!0,t._pmTempLayer=!0,r.remove(),t.remove(),0===i.getLayers().length&&e._map.pm.removeLayer({target:i})}))},_finishShape:function(){if(this.options.allowSelfIntersection||(this._handleSelfIntersection(!1),!this._doesSelfIntersect)){var t=this._layer.getLatLngs(),e=L.polygon(t,this.options.pathOptions);this._cut(e),this.disable(),this._cleanupSnapping(),this._otherSnapLayers.splice(this._tempSnapLayerIndex,1),delete this._tempSnapLayerIndex}}});var N={enableLayerDrag:function(){if(this._layer instanceof L.Marker)this._layer.dragging.enable();else{this._tempDragCoord=null;var t=this._layer._path?this._layer._path:this._layer._renderer._container;L.DomUtil.addClass(t,"leaflet-pm-draggable"),this._originalMapDragState=this._layer._map.dragging._enabled,this._safeToCacheDragState=!0,this._layer.on("mousedown",this._dragMixinOnMouseDown,this)}},disableLayerDrag:function(){if(this._layer instanceof L.Marker)this._layer.dragging.disable();else{var t=this._layer._path?this._layer._path:this._layer._renderer._container;L.DomUtil.removeClass(t,"leaflet-pm-draggable"),this._safeToCacheDragState=!1,this._layer.off("mousedown",this._dragMixinOnMouseDown,this)}},_dragMixinOnMouseUp:function(){var t=this,e=this._layer._path?this._layer._path:this._layer._renderer._container;return this._originalMapDragState&&this._layer._map.dragging.enable(),this._safeToCacheDragState=!0,this._layer._map.off("mousemove",this._dragMixinOnMouseMove,this),this._layer._map.off("mouseup",this._dragMixinOnMouseUp,this),!!this._dragging&&(window.setTimeout((function(){t._dragging=!1,L.DomUtil.removeClass(e,"leaflet-pm-dragging"),t._layer.fire("pm:dragend"),t._fireEdit()}),10),!0)},_dragMixinOnMouseMove:function(t){var e=this._layer._path?this._layer._path:this._layer._renderer._container;this._dragging||(this._dragging=!0,L.DomUtil.addClass(e,"leaflet-pm-dragging"),this._layer.bringToFront(),this._originalMapDragState&&this._layer._map.dragging.disable(),this._layer.fire("pm:dragstart")),this._onLayerDrag(t)},_dragMixinOnMouseDown:function(t){0<t.originalEvent.button||(this._safeToCacheDragState&&(this._originalMapDragState=this._layer._map.dragging._enabled,this._safeToCacheDragState=!1),this._tempDragCoord=t.latlng,this._layer._map.on("mouseup",this._dragMixinOnMouseUp,this),this._layer._map.on("mousemove",this._dragMixinOnMouseMove,this))},dragging:function(){return this._dragging},_onLayerDrag:function(t){var e=t.latlng,r=e.lat-this._tempDragCoord.lat,n=e.lng-this._tempDragCoord.lng;if(this._layer instanceof L.CircleMarker)this._layer.setLatLng(e);else{var i=function t(e){return e.map((function(e){return Array.isArray(e)?t(e):{lat:e.lat+r,lng:e.lng+n}}))}(this._layer.getLatLngs());this._layer.setLatLngs(i)}this._tempDragCoord=e,this._layer.fire("pm:drag",t)}},z=L.Class.extend({includes:[N,x],options:{snappable:!0,snapDistance:20,allowSelfIntersection:!0,draggable:!0},isPolygon:function(){return this._layer instanceof L.Polygon}});z.LayerGroup=L.Class.extend({initialize:function(t){var e=this;this._layerGroup=t,this._layers=this.findLayers(),this._layers.forEach((function(t){return e._initLayer(t)})),this._layerGroup.on("layeradd",(function(t){t.target._pmTempLayer||(e._layers=e.findLayers(),t.layer.pm&&e._initLayer(t.layer),t.target.pm.enabled()&&e.enable(e.getOptions()))}))},findLayers:function(){var t=this._layerGroup.getLayers();return(t=(t=t.filter((function(t){return!(t instanceof L.LayerGroup)}))).filter((function(t){return!!t.pm}))).filter((function(t){return!t._pmTempLayer}))},_initLayer:function(t){var e=this;["pm:edit","pm:update","pm:remove","pm:dragstart","pm:drag","pm:dragend","pm:snap","pm:unsnap","pm:cut","pm:intersect","pm:raiseMarkers","pm:markerdragend","pm:markerdragstart","pm:vertexadded","pm:vertexremoved","pm:centerplaced"].forEach((function(r){t.on(r,e._fireEvent,e)})),t.pm._layerGroup=this._layerGroup},_fireEvent:function(t){this._layerGroup.fireEvent(t.type,t)},toggleEdit:function(t){this._options=t,this._layers.forEach((function(e){e.pm.toggleEdit(t)}))},enable:function(t){this._options=t,this._layers.forEach((function(e){e.pm.enable(t)}))},disable:function(){this._layers.forEach((function(t){t.pm.disable()}))},enabled:function(){var t=this._layers.find((function(t){return t.pm.enabled()}));return!!t},dragging:function(){var t=this._layers.find((function(t){return t.pm.dragging()}));return!!t},getOptions:function(){return this._options}}),z.Marker=z.extend({initialize:function(t){this._layer=t,this._enabled=!1,this._layer.on("dragend",this._onDragEnd,this)},toggleEdit:function(t){this.enabled()?this.disable():this.enable(t)},enable:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{draggable:!0,snappable:!0};L.Util.setOptions(this,t),this._map=this._layer._map,this.enabled()||(this._enabled=!0,this.options.preventMarkerRemoval||this._layer.on("contextmenu",this._removeMarker,this),this.options.draggable&&this._layer.dragging.enable(),this.options.snappable&&this._initSnappableMarkers())},enabled:function(){return this._enabled},disable:function(){this._enabled=!1,this._layer.dragging&&this._layer.dragging.disable(),this._layer.off("contextmenu",this._removeMarker,this),this._layerEdited&&this._layer.fire("pm:update",{}),this._layerEdited=!1},_removeMarker:function(t){var e=t.target;e.remove(),e.fire("pm:remove")},_onDragEnd:function(t){t.target.fire("pm:edit"),this._layerEdited=!0},_initSnappableMarkers:function(){var t=this._layer;this.options.snapDistance=this.options.snapDistance||30,t.off("drag",this._handleSnapping,this),t.on("drag",this._handleSnapping,this),t.off("dragend",this._cleanupSnapping,this),t.on("dragend",this._cleanupSnapping,this),t.off("pm:dragstart",this._unsnap,this),t.on("pm:dragstart",this._unsnap,this)}}),z.Line=z.extend({initialize:function(t){this._layer=t,this._enabled=!1},toggleEdit:function(t){return this.enabled()?this.disable():this.enable(t),this.enabled()},enable:function(t){L.Util.setOptions(this,t),this._map=this._layer._map,this._map&&(this.enabled()||this.disable(),this._enabled=!0,this._initMarkers(),this._layer.on("remove",this._onLayerRemove,this),this.options.allowSelfIntersection||this._layer.on("pm:vertexremoved",this._handleSelfIntersectionOnVertexRemoval,this),this.options.allowSelfIntersection||(this.cachedColor=this._layer.options.color,this.isRed=!1,this._handleLayerStyle()))},_onLayerRemove:function(t){this.disable(t.target)},enabled:function(){return this._enabled},disable:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this._layer;if(!this.enabled())return!1;if(t.pm._dragging)return!1;t.pm._enabled=!1,t.pm._markerGroup.clearLayers(),t.off("mousedown"),t.off("mouseup"),this._layer.off("remove",this._onLayerRemove,this),this.options.allowSelfIntersection||this._layer.off("pm:vertexremoved",this._handleSelfIntersectionOnVertexRemoval);var e=t._path?t._path:this._layer._renderer._container;return L.DomUtil.removeClass(e,"leaflet-pm-draggable"),this.hasSelfIntersection()&&L.DomUtil.removeClass(e,"leaflet-pm-invalid"),this._layerEdited&&this._layer.fire("pm:update",{}),!(this._layerEdited=!1)},hasSelfIntersection:function(){return 0<P()(this._layer.toGeoJSON(15)).features.length},_handleSelfIntersectionOnVertexRemoval:function(){this._handleLayerStyle(!0),this.hasSelfIntersection()&&(this._layer.setLatLngs(this._coordsBeforeEdit),this._coordsBeforeEdit=null,this._initMarkers())},_handleLayerStyle:function(t){var e=this,r=this._layer;if(this.hasSelfIntersection()){if(this.isRed)return;t?(r.setStyle({color:"red"}),this.isRed=!0,window.setTimeout((function(){r.setStyle({color:e.cachedColor}),e.isRed=!1}),200)):(r.setStyle({color:"red"}),this.isRed=!0),this._layer.fire("pm:intersect",{intersection:P()(this._layer.toGeoJSON(15))})}else r.setStyle({color:this.cachedColor}),this.isRed=!1},_initMarkers:function(){var t=this,e=this._map,r=this._layer.getLatLngs();this._markerGroup&&this._markerGroup.clearLayers(),this._markerGroup=new L.LayerGroup,this._markerGroup._pmTempLayer=!0,e.addLayer(this._markerGroup);this._markers=function e(r){if(Array.isArray(r[0]))return r.map(e,t);var n=r.map(t._createMarker,t);return r.map((function(e,i){var o=t.isPolygon()?(i+1)%r.length:i+1;return t._createMiddleMarker(n[i],n[o])})),n}(r),this.options.snappable&&this._initSnappableMarkers()},_createMarker:function(t){var e=new L.Marker(t,{draggable:!0,icon:L.divIcon({className:"marker-icon"})});return e._pmTempLayer=!0,e.on("dragstart",this._onMarkerDragStart,this),e.on("move",this._onMarkerDrag,this),e.on("dragend",this._onMarkerDragEnd,this),this.options.preventMarkerRemoval||e.on("contextmenu",this._removeMarker,this),this._markerGroup.addLayer(e),e},_createMiddleMarker:function(t,e){var r=this;if(!t||!e)return!1;var n=C(this._map,t.getLatLng(),e.getLatLng()),i=this._createMarker(n),o=L.divIcon({className:"marker-icon marker-icon-middle"});return i.setIcon(o),t._middleMarkerNext=i,(e._middleMarkerPrev=i).on("click",(function(){var n=L.divIcon({className:"marker-icon"});i.setIcon(n),r._addMarker(i,t,e)})),i.on("movestart",(function(){i.on("moveend",(function(){var t=L.divIcon({className:"marker-icon"});i.setIcon(t),i.off("moveend")})),r._addMarker(i,t,e)})),i},_addMarker:function(t,e,r){t.off("movestart"),t.off("click");var n=t.getLatLng(),i=this._layer._latlngs,o=this.findDeepMarkerIndex(this._markers,e),a=o.indexPath,s=o.index,l=o.parentPath,h=1<a.length?y()(i,l):i,c=1<a.length?y()(this._markers,l):this._markers;h.splice(s+1,0,n),c.splice(s+1,0,t),this._layer.setLatLngs(i),this._createMiddleMarker(e,t),this._createMiddleMarker(t,r),this._fireEdit(),this._layer.fire("pm:vertexadded",{layer:this._layer,marker:t,indexPath:this.findDeepMarkerIndex(this._markers,t).indexPath,latlng:n}),this.options.snappable&&this._initSnappableMarkers()},_removeMarker:function(t){if(!this.options.allowSelfIntersection){var e=this._layer.getLatLngs();this._coordsBeforeEdit=JSON.parse(JSON.stringify(e))}var r=t.target,n=this._layer.getLatLngs(),i=this.findDeepMarkerIndex(this._markers,r),o=i.indexPath,a=i.index,s=i.parentPath;if(o){var l,h,c=1<o.length?y()(n,s):n,u=1<o.length?y()(this._markers,s):this._markers;if(c.splice(a,1),this._layer.setLatLngs(n),c.length<=1&&(c.splice(0,c.length),this._layer.setLatLngs(n),this.disable(),this.enable(this.options)),function(t){return!function t(e){return e.filter((function(t){return![null,"",void 0].includes(t)})).reduce((function(e,r){return e.concat(Array.isArray(r)?t(r):r)}),[])}(t).length}(n)&&this._layer.remove(),r._middleMarkerPrev&&this._markerGroup.removeLayer(r._middleMarkerPrev),r._middleMarkerNext&&this._markerGroup.removeLayer(r._middleMarkerNext),this._markerGroup.removeLayer(r),this.isPolygon()?(l=(a+1)%u.length,h=(a+(u.length-1))%u.length):(h=a-1<0?void 0:a-1,l=a+1>=u.length?void 0:a+1),l!==h){var p=u[h],f=u[l];this._createMiddleMarker(p,f)}u.splice(a,1),this._fireEdit(),this._layer.fire("pm:vertexremoved",{layer:this._layer,marker:r,indexPath:o})}},findDeepMarkerIndex:function(t,e){var r;t.some(function t(n){return function(i,o){var a=n.concat(o);return i._leaflet_id===e._leaflet_id?(r=a,!0):Array.isArray(i)&&i.some(t(a))}}([]));var n={};return r&&(n={indexPath:r,index:r[r.length-1],parentPath:r.slice(0,r.length-1)}),n},updatePolygonCoordsFromMarkerDrag:function(t){var e=this._layer.getLatLngs(),r=t.getLatLng(),n=this.findDeepMarkerIndex(this._markers,t),i=n.indexPath,o=n.index,a=n.parentPath;(1<i.length?y()(e,a):e).splice(o,1,r),this._layer.setLatLngs(e)},_onMarkerDrag:function(t){var e=t.target,r=this.findDeepMarkerIndex(this._markers,e),n=r.indexPath,i=r.index,o=r.parentPath;if(n){this.updatePolygonCoordsFromMarkerDrag(e);var a=1<n.length?y()(this._markers,o):this._markers,s=(i+1)%a.length,l=(i+(a.length-1))%a.length,h=e.getLatLng(),c=a[l].getLatLng(),u=a[s].getLatLng();if(e._middleMarkerNext){var p=C(this._map,h,u);e._middleMarkerNext.setLatLng(p)}if(e._middleMarkerPrev){var f=C(this._map,h,c);e._middleMarkerPrev.setLatLng(f)}this.options.allowSelfIntersection||this._handleLayerStyle()}},_onMarkerDragEnd:function(t){var e=t.target,r=this.findDeepMarkerIndex(this._markers,e).indexPath;if(!this.options.allowSelfIntersection&&this.hasSelfIntersection())return this._layer.setLatLngs(this._coordsBeforeEdit),this._coordsBeforeEdit=null,this._initMarkers(),void this._handleLayerStyle();this._layer.fire("pm:markerdragend",{markerEvent:t,indexPath:r}),this._fireEdit()},_onMarkerDragStart:function(t){var e=t.target,r=this.findDeepMarkerIndex(this._markers,e).indexPath;this._layer.fire("pm:markerdragstart",{markerEvent:t,indexPath:r}),this.options.allowSelfIntersection||(this._coordsBeforeEdit=this._layer.getLatLngs()),this.cachedColor=this._layer.options.color},_fireEdit:function(){this._layerEdited=!0,this._layer.fire("pm:edit")}}),z.Polygon=z.Line.extend({}),z.Rectangle=z.Polygon.extend({_initMarkers:function(){var t=this._map,e=this._findCorners();this._markerGroup&&this._markerGroup.clearLayers(),this._markerGroup=new L.LayerGroup,this._markerGroup._pmTempLayer=!0,t.addLayer(this._markerGroup),this._markers=[],this._markers[0]=e.map(this._createMarker,this);var r=function(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var r=[],n=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){i=!0,o=t}finally{try{n||null==s.return||s.return()}finally{if(i)throw o}}return r}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(this._markers,1);this._cornerMarkers=r[0],this.options.snappable&&this._initSnappableMarkers()},_createMarker:function(t,e){var r=new L.Marker(t,{draggable:!0,icon:L.divIcon({className:"marker-icon"})});return r._origLatLng=t,r._index=e,r._pmTempLayer=!0,r.on("dragstart",this._onMarkerDragStart,this),r.on("drag",this._onMarkerDrag,this),r.on("dragend",this._onMarkerDragEnd,this),r.on("pm:snap",this._adjustRectangleForMarkerSnap,this),this.options.preventMarkerRemoval||r.on("contextmenu",this._removeMarker,this),this._markerGroup.addLayer(r),r},_removeMarker:function(){return null},_onMarkerDragStart:function(t){var e=t.target,r=this._findCorners();e._oppositeCornerLatLng=r[(e._index+2)%4],e._snapped=!1,this._layer.fire("pm:markerdragstart",{markerEvent:t})},_onMarkerDrag:function(t){var e=t.target;void 0!==e._index&&(e._snapped||this._adjustRectangleForMarkerMove(e))},_onMarkerDragEnd:function(t){var e=this._findCorners();this._adjustAllMarkers(e),this._cornerMarkers.forEach((function(t){delete t._oppositeCornerLatLng})),this._layer.setLatLngs(e),this._layer.fire("pm:markerdragend",{markerEvent:t}),this._fireEdit()},_adjustRectangleForMarkerMove:function(t){L.extend(t._origLatLng,t._latlng);var e=t.getLatLng();this._layer.setBounds(L.latLngBounds(e,t._oppositeCornerLatLng)),this._adjustAdjacentMarkers(t),this._layer.redraw()},_adjustRectangleForMarkerSnap:function(t){if(this.options.snappable){var e=t.target;this._adjustRectangleForMarkerMove(e)}},_adjustAllMarkers:function(t){t.length&&4===t.length?this._cornerMarkers.forEach((function(e,r){e.setLatLng(t[r])})):console.error("_adjustAllMarkers() requires an array of EXACTLY 4 LatLng coordinates")},_adjustAdjacentMarkers:function(t){if(t&&t.getLatLng&&t._oppositeCornerLatLng){var e=t.getLatLng(),r=t._oppositeCornerLatLng,n=[];this._findCorners().forEach((function(t){t.equals(e)||t.equals(r)||n.push(t)}));var i=0;2===n.length&&this._cornerMarkers.forEach((function(t){var o=t.getLatLng();o.equals(e)||o.equals(r)||(t.setLatLng(n[i]),i+=1)}))}else console.error("_adjustAdjacentMarkers() requires a valid Marker object")},_findCorners:function(){var t=this._layer.getBounds();return[t.getNorthWest(),t.getNorthEast(),t.getSouthEast(),t.getSouthWest()]}}),z.Circle=z.extend({initialize:function(t){this._layer=t,this._enabled=!1},toggleEdit:function(t){this.enabled()?this.disable():this.enable(t)},enabled:function(){return this._enabled},enable:function(t){var e=this;L.Util.setOptions(this,t),this._map=this._layer._map,this.enabled()||this.disable(),this._enabled=!0,this._initMarkers(),this._layer.on("remove",(function(t){e.disable(t.target)}))},disable:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this._layer;if(!this.enabled())return!1;if(t.pm._dragging)return!1;t.pm._enabled=!1,t.pm._helperLayers.clearLayers(),t.off("mousedown"),t.off("mouseup");var e=t._path?t._path:this._layer._renderer._container;return L.DomUtil.removeClass(e,"leaflet-pm-draggable"),this._layerEdited&&this._layer.fire("pm:update",{}),!(this._layerEdited=!1)},_initMarkers:function(){var t=this._map;this._helperLayers&&this._helperLayers.clearLayers(),this._helperLayers=new L.LayerGroup,this._helperLayers._pmTempLayer=!0,this._helperLayers.addTo(t);var e=this._layer.getLatLng(),r=this._layer._radius,n=this._getLatLngOnCircle(e,r);this._centerMarker=this._createCenterMarker(e),this._outerMarker=this._createOuterMarker(n),this._markers=[this._centerMarker,this._outerMarker],this._createHintLine(this._centerMarker,this._outerMarker),this.options.snappable&&this._initSnappableMarkers()},_getLatLngOnCircle:function(t,e){var r=this._map.project(t),n=L.point(r.x+e,r.y);return this._map.unproject(n)},_resizeCircle:function(){this._syncHintLine(),this._syncCircleRadius()},_moveCircle:function(t){var e=t.latlng;this._layer.setLatLng(e);var r=this._layer._radius,n=this._getLatLngOnCircle(e,r);this._outerMarker.setLatLng(n),this._syncHintLine(),this._layer.fire("pm:centerplaced",{layer:this._layer,latlng:e})},_onMarkerDragStart:function(t){this._layer.fire("pm:markerdragstart",{markerEvent:t})},_onMarkerDragEnd:function(t){this._fireEdit(),this._layer.fire("pm:markerdragend",{markerEvent:t})},_syncCircleRadius:function(){var t=this._centerMarker.getLatLng(),e=this._outerMarker.getLatLng(),r=t.distanceTo(e);this._layer.setRadius(r)},_syncHintLine:function(){var t=this._centerMarker.getLatLng(),e=this._outerMarker.getLatLng();this._hintline.setLatLngs([t,e])},_createHintLine:function(t,e){var r=t.getLatLng(),n=e.getLatLng();this._hintline=L.polyline([r,n],this.options.hintlineStyle),this._hintline._pmTempLayer=!0,this._helperLayers.addLayer(this._hintline)},_createCenterMarker:function(t){var e=this._createMarker(t);return L.DomUtil.addClass(e._icon,"leaflet-pm-draggable"),e.on("drag",this._moveCircle,this),e},_createOuterMarker:function(t){var e=this._createMarker(t);return e.on("drag",this._resizeCircle,this),e},_createMarker:function(t){var e=new L.Marker(t,{draggable:!0,icon:L.divIcon({className:"marker-icon"})});return e._origLatLng=t,e._pmTempLayer=!0,e.on("dragstart",this._onMarkerDragStart,this),e.on("dragend",this._onMarkerDragEnd,this),this._helperLayers.addLayer(e),e},_fireEdit:function(){this._layer.fire("pm:edit"),this._layerEdited=!0}}),z.CircleMarker=z.extend({initialize:function(t){this._layer=t,this._enabled=!1},toggleEdit:function(t){this.enabled()?this.disable():this.enable(t)},enabled:function(){return this._enabled},enable:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{draggable:!0,snappable:!0};L.Util.setOptions(this,t),this._map=this._layer._map,this._map&&(this.enabled()||this.disable(),this._enabled=!0,this.options.preventMarkerRemoval||this._layer.on("contextmenu",this._removeMarker,this),this.options.draggable&&this.enableLayerDrag(),this.options.snappable&&this._initSnappableMarkers(),this._layer.on("pm:dragend",this._onMarkerDragEnd,this))},disable:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this._layer;if(!this.enabled())return!1;if(t.pm._dragging)return!1;if(t.pm._enabled=!1,t._path){var e=t._path;L.DomUtil.removeClass(e,"leaflet-pm-draggable")}return this._layerEdited&&this._layer.fire("pm:update",{}),!(this._layerEdited=!1)},_moveMarker:function(t){var e=t.latlng;this._layer.setLatLng(e).redraw()},_removeMarker:function(){this._layer.fire("pm:remove"),this._layer.remove()},_fireEdit:function(){this._layer.fire("pm:edit"),this._layerEdited=!0},_onMarkerDragEnd:function(t){this._layer.fire("pm:markerdragend",{markerEvent:t}),this._fireEdit()},_initSnappableMarkers:function(){var t=this._layer;this.options.snapDistance=this.options.snapDistance||30,t.off("pm:drag",this._handleSnapping,this),t.on("pm:drag",this._handleSnapping,this),t.off("pm:dragend",this._cleanupSnapping,this),t.on("pm:dragend",this._cleanupSnapping,this),t.off("pm:dragstart",this._unsnap,this),t.on("pm:dragstart",this._unsnap,this)}}),r(133),r(134),L.PM=L.PM||{version:n.a,Map:_,Toolbar:w,Draw:S,Edit:z,activeLang:"en",initialize:function(t){this.addInitHooks(t)},addInitHooks:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};L.Map.addInitHook((function(){this.pm=void 0,t.optIn?!1===this.options.pmIgnore&&(this.pm=new L.PM.Map(this)):this.options.pmIgnore||(this.pm=new L.PM.Map(this))})),L.LayerGroup.addInitHook((function(){this.pm=new L.PM.Edit.LayerGroup(this)})),L.Marker.addInitHook((function(){this.pm=void 0,t.optIn?!1===this.options.pmIgnore&&(this.pm=new L.PM.Edit.Marker(this)):this.options.pmIgnore||(this.pm=new L.PM.Edit.Marker(this))})),L.CircleMarker.addInitHook((function(){this.pm=void 0,t.optIn?!1===this.options.pmIgnore&&(this.pm=new L.PM.Edit.CircleMarker(this)):this.options.pmIgnore||(this.pm=new L.PM.Edit.CircleMarker(this))})),L.Polyline.addInitHook((function(){this.pm=void 0,t.optIn?!1===this.options.pmIgnore&&(this.pm=new L.PM.Edit.Line(this)):this.options.pmIgnore||(this.pm=new L.PM.Edit.Line(this))})),L.Polygon.addInitHook((function(){this.pm=void 0,t.optIn?!1===this.options.pmIgnore&&(this.pm=new L.PM.Edit.Polygon(this)):this.options.pmIgnore||(this.pm=new L.PM.Edit.Polygon(this))})),L.Rectangle.addInitHook((function(){this.pm=void 0,t.optIn?!1===this.options.pmIgnore&&(this.pm=new L.PM.Edit.Rectangle(this)):this.options.pmIgnore||(this.pm=new L.PM.Edit.Rectangle(this))})),L.Circle.addInitHook((function(){this.pm=void 0,t.optIn?!1===this.options.pmIgnore&&(this.pm=new L.PM.Edit.Circle(this)):this.options.pmIgnore||(this.pm=new L.PM.Edit.Circle(this))}))}},L.PM.initialize()}]);

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/lib/loader.js!../node_modules/@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ref--8-1!../node_modules/postcss-loader/src??ref--8-2!../node_modules/sass-loader/lib/loader.js!../node_modules/@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
exports = module.exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".marker-icon,\n.marker-icon:focus {\n  background-color: #ffffff;\n  border: 1px solid #3388ff;\n  border-radius: 50%;\n  margin: -8px 0 0 -8px !important;\n  width: 14px !important;\n  height: 14px !important;\n  outline: 0;\n  -webkit-transition: opacity ease 0.3s;\n  transition: opacity ease 0.3s; }\n\n.marker-icon-middle,\n.marker-icon-middle:focus {\n  opacity: 0.7;\n  margin: -6px 0 0 -6px !important;\n  width: 10px !important;\n  height: 10px !important; }\n\n.leaflet-pm-draggable {\n  cursor: move !important; }\n\n.cursor-marker {\n  cursor: crosshair;\n  pointer-events: none;\n  display: none; }\n\n.cursor-marker.visible {\n  display: block !important; }\n\n.leaflet-pm-invalid {\n  stroke: red;\n  -webkit-transition: fill ease 0s, stroke ease 0s;\n  transition: fill ease 0s, stroke ease 0s; }\n\n.rect-style-marker,\n.rect-start-marker {\n  opacity: 0; }\n\n.rect-style-marker.visible,\n.rect-start-marker.visible {\n  opacity: 1 !important; }\n\n.hidden {\n  display: none; }\n\n.leaflet-pm-toolbar .leaflet-buttons-control-button {\n  padding: 5px;\n  box-sizing: border-box;\n  position: relative;\n  z-index: 3; }\n\n.leaflet-pm-toolbar .control-fa-icon {\n  font-size: 19px;\n  line-height: 24px; }\n\n.leaflet-pm-toolbar .control-icon {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center center; }\n\n.leaflet-pm-toolbar .leaflet-pm-icon-marker {\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjUgKDY3NDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BdG9tcy9JY29ucy9Ub29scy9NYXJrZXI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNMTUuNSwyNC44NzgyOTU5IEMxNS4yOTA5MjAxLDI0Ljg3NzIyMTkgMTUuMTc0NDg1NywyNC44NDY3ODE3IDE0LjY1OTA4NjYsMjQuMjM1NDE2MyBDMTAuMjE5Njk1NSwxOS40MTE4MDU0IDgsMTUuNTAxNDM5MiA4LDEyLjUwNDMxNzcgQzgsOC4zNTk3OTc0NiAxMS4zNTc4NjQ0LDUgMTUuNSw1IEMxOS42NDIxMzU2LDUgMjMsOC4zNTk3OTc0NiAyMywxMi41MDQzMTc3IEMyMywxNyAxOC4yODc4MjE3LDIxLjkyNjgzNzggMTYuMzMzNjYwMSwyNC4yNDQwMTg2IEMxNS44MjI0NjIyLDI0Ljg1MDE4MDIgMTUuNzA5MDc5OSwyNC44NzkzNjk5IDE1LjUsMjQuODc4Mjk1OSBaIE0xNS41LDE1LjUzMjY5NDggQzE3LjI3NTIwMSwxNS41MzI2OTQ4IDE4LjcxNDI4NTcsMTQuMTE4MDAwNCAxOC43MTQyODU3LDEyLjM3Mjg4NjQgQzE4LjcxNDI4NTcsMTAuNjI3NzcyMyAxNy4yNzUyMDEsOS4yMTMwNzc5MiAxNS41LDkuMjEzMDc3OTIgQzEzLjcyNDc5OSw5LjIxMzA3NzkyIDEyLjI4NTcxNDMsMTAuNjI3NzcyMyAxMi4yODU3MTQzLDEyLjM3Mjg4NjQgQzEyLjI4NTcxNDMsMTQuMTE4MDAwNCAxMy43MjQ3OTksMTUuNTMyNjk0OCAxNS41LDE1LjUzMjY5NDggWiIgaWQ9InBhdGgtMSI+PC9wYXRoPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlN5bWJvbHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJBdG9tcy9JY29ucy9Ub29scy9NYXJrZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zLjAwMDAwMCwgLTMuMDAwMDAwKSI+CiAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgPHVzZSBpZD0iTWFzayIgZmlsbD0iIzVCNUI1QiIgZmlsbC1ydWxlPSJub256ZXJvIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==); }\n\n.leaflet-pm-toolbar .leaflet-pm-icon-polygon {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgPGRlZnM+CiAgICA8cGF0aCBpZD0icG9seWdvbi1hIiBkPSJNMTkuNDIwNjg5Miw5LjE2NTA5NzI1IEMxOS4xNTIzNjgxLDguNjY5OTI5MTQgMTksOC4xMDI3NTgzMSAxOSw3LjUgQzE5LDUuNTY3MDAzMzggMjAuNTY3MDAzNCw0IDIyLjUsNCBDMjQuNDMyOTk2Niw0IDI2LDUuNTY3MDAzMzggMjYsNy41IEMyNiw5LjI2MzIzNTk1IDI0LjY5NjE0NzEsMTAuNzIxOTQwNyAyMywxMC45NjQ1NTU2IEwyMywxOS4wMzU0NDQ0IEMyNC42OTYxNDcxLDE5LjI3ODA1OTMgMjYsMjAuNzM2NzY0IDI2LDIyLjUgQzI2LDI0LjQzMjk5NjYgMjQuNDMyOTk2NiwyNiAyMi41LDI2IEMyMC43MzY3NjQsMjYgMTkuMjc4MDU5MywyNC42OTYxNDcxIDE5LjAzNTQ0NDQsMjMgTDEwLjk2NDU1NTYsMjMgQzEwLjcyMTk0MDcsMjQuNjk2MTQ3MSA5LjI2MzIzNTk1LDI2IDcuNSwyNiBDNS41NjcwMDMzOCwyNiA0LDI0LjQzMjk5NjYgNCwyMi41IEM0LDIwLjU2NzAwMzQgNS41NjcwMDMzOCwxOSA3LjUsMTkgQzguMTAyNzU4MzEsMTkgOC42Njk5MjkxNCwxOS4xNTIzNjgxIDkuMTY1MDk3MjUsMTkuNDIwNjg5MiBMMTkuNDIwNjg5Miw5LjE2NTA5NzI1IFogTTIwLjgzNDkwNzMsMTAuNTc5MzA2MyBMMTAuNTc5MzEwOCwyMC44MzQ5MDI3IEMxMC42MDg2NzMxLDIwLjg4OTA4ODggMTAuNjM2NjQ2OSwyMC45NDQxMzcyIDEwLjY2MzE4NDQsMjEgTDE5LjMzNjgxNTYsMjEgQzE5LjY4MjU3NzUsMjAuMjcyMTU0IDIwLjI3MjE1NCwxOS42ODI1Nzc1IDIxLDE5LjMzNjgxNTYgTDIxLDEwLjY2MzE4NDQgQzIwLjk0NDEzNzIsMTAuNjM2NjQ2OSAyMC44ODkwODg4LDEwLjYwODY3MzEgMjAuODM0OTAyNywxMC41NzkzMTA4IFogTTIyLjUsOSBDMjMuMzI4NDI3MSw5IDI0LDguMzI4NDI3MTIgMjQsNy41IEMyNCw2LjY3MTU3Mjg4IDIzLjMyODQyNzEsNiAyMi41LDYgQzIxLjY3MTU3MjksNiAyMSw2LjY3MTU3Mjg4IDIxLDcuNSBDMjEsOC4zMjg0MjcxMiAyMS42NzE1NzI5LDkgMjIuNSw5IFogTTIyLjUsMjQgQzIzLjMyODQyNzEsMjQgMjQsMjMuMzI4NDI3MSAyNCwyMi41IEMyNCwyMS42NzE1NzI5IDIzLjMyODQyNzEsMjEgMjIuNSwyMSBDMjEuNjcxNTcyOSwyMSAyMSwyMS42NzE1NzI5IDIxLDIyLjUgQzIxLDIzLjMyODQyNzEgMjEuNjcxNTcyOSwyNCAyMi41LDI0IFogTTcuNSwyNCBDOC4zMjg0MjcxMiwyNCA5LDIzLjMyODQyNzEgOSwyMi41IEM5LDIxLjY3MTU3MjkgOC4zMjg0MjcxMiwyMSA3LjUsMjEgQzYuNjcxNTcyODgsMjEgNiwyMS42NzE1NzI5IDYsMjIuNSBDNiwyMy4zMjg0MjcxIDYuNjcxNTcyODgsMjQgNy41LDI0IFoiLz4KICA8L2RlZnM+CiAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMyAtMykiPgogICAgPG1hc2sgaWQ9InBvbHlnb24tYiIgZmlsbD0iI2ZmZiI+CiAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BvbHlnb24tYSIvPgogICAgPC9tYXNrPgogICAgPHVzZSBmaWxsPSIjNUI1QjVCIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHhsaW5rOmhyZWY9IiNwb2x5Z29uLWEiLz4KICAgIDxnIGZpbGw9IiM1QjVCNUIiIG1hc2s9InVybCgjcG9seWdvbi1iKSI+CiAgICAgIDxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==); }\n\n.leaflet-pm-toolbar .leaflet-pm-icon-polyline {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgPGRlZnM+CiAgICA8cGF0aCBpZD0ibGluZS1hIiBkPSJNOS4xNjUwOTcyNSwxOS40MjA2ODkyIEwxOC40MjA2ODkyLDEwLjE2NTA5NzMgQzE4LjE1MjM2ODEsOS42Njk5MjkxNCAxOCw5LjEwMjc1ODMxIDE4LDguNSBDMTgsNi41NjcwMDMzOCAxOS41NjcwMDM0LDUgMjEuNSw1IEMyMy40MzI5OTY2LDUgMjUsNi41NjcwMDMzOCAyNSw4LjUgQzI1LDEwLjQzMjk5NjYgMjMuNDMyOTk2NiwxMiAyMS41LDEyIEMyMC44OTcyNDE3LDEyIDIwLjMzMDA3MDksMTEuODQ3NjMxOSAxOS44MzQ5MDI3LDExLjU3OTMxMDggTDEwLjU3OTMxMDgsMjAuODM0OTAyNyBDMTAuODQ3NjMxOSwyMS4zMzAwNzA5IDExLDIxLjg5NzI0MTcgMTEsMjIuNSBDMTEsMjQuNDMyOTk2NiA5LjQzMjk5NjYyLDI2IDcuNSwyNiBDNS41NjcwMDMzOCwyNiA0LDI0LjQzMjk5NjYgNCwyMi41IEM0LDIwLjU2NzAwMzQgNS41NjcwMDMzOCwxOSA3LjUsMTkgQzguMTAyNzU4MzEsMTkgOC42Njk5MjkxNCwxOS4xNTIzNjgxIDkuMTY1MDk3MjUsMTkuNDIwNjg5MiBaIE0yMS41LDEwIEMyMi4zMjg0MjcxLDEwIDIzLDkuMzI4NDI3MTIgMjMsOC41IEMyMyw3LjY3MTU3Mjg4IDIyLjMyODQyNzEsNyAyMS41LDcgQzIwLjY3MTU3MjksNyAyMCw3LjY3MTU3Mjg4IDIwLDguNSBDMjAsOS4zMjg0MjcxMiAyMC42NzE1NzI5LDEwIDIxLjUsMTAgWiBNNy41LDI0IEM4LjMyODQyNzEyLDI0IDksMjMuMzI4NDI3MSA5LDIyLjUgQzksMjEuNjcxNTcyOSA4LjMyODQyNzEyLDIxIDcuNSwyMSBDNi42NzE1NzI4OCwyMSA2LDIxLjY3MTU3MjkgNiwyMi41IEM2LDIzLjMyODQyNzEgNi42NzE1NzI4OCwyNCA3LjUsMjQgWiIvPgogIDwvZGVmcz4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zIC0zKSI+CiAgICA8bWFzayBpZD0ibGluZS1iIiBmaWxsPSIjZmZmIj4KICAgICAgPHVzZSB4bGluazpocmVmPSIjbGluZS1hIi8+CiAgICA8L21hc2s+CiAgICA8dXNlIGZpbGw9IiM1QjVCNUIiIGZpbGwtcnVsZT0ibm9uemVybyIgeGxpbms6aHJlZj0iI2xpbmUtYSIvPgogICAgPGcgZmlsbD0iIzVCNUI1QiIgbWFzaz0idXJsKCNsaW5lLWIpIj4KICAgICAgPHJlY3Qgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K); }\n\n.leaflet-pm-toolbar .leaflet-pm-icon-circle {\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjUgKDY3NDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BdG9tcy9JY29ucy9Ub29scy9DaXJjbGU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNMTguMjg5Nzc1MSw2Ljc4NjAyMjc1IEMxOC44OTI0MTMxLDYuMjk0NjQ5ODEgMTkuNjYxNzk3LDYgMjAuNSw2IEMyMi40MzI5OTY2LDYgMjQsNy41NjcwMDMzOCAyNCw5LjUgQzI0LDEwLjMzODIwMyAyMy43MDUzNTAyLDExLjEwNzU4NjkgMjMuMjEzOTc3MiwxMS43MTAyMjQ5IEMyMy43MTk1OTksMTIuODcxMjA1MyAyNCwxNC4xNTI4NTcxIDI0LDE1LjUgQzI0LDIwLjc0NjcwNTEgMTkuNzQ2NzA1MSwyNSAxNC41LDI1IEM5LjI1MzI5NDg4LDI1IDUsMjAuNzQ2NzA1MSA1LDE1LjUgQzUsMTAuMjUzMjk0OSA5LjI1MzI5NDg4LDYgMTQuNSw2IEMxNS44NDcxNDI5LDYgMTcuMTI4Nzk0Nyw2LjI4MDQwMDk4IDE4LjI4OTc3NTEsNi43ODYwMjI3NSBaIE0xNy4xNTA0MjI4LDguNDgxNzU4NiBDMTYuMzI2MzU4MSw4LjE3MDM5MjM2IDE1LjQzMzA3NzcsOCAxNC41LDggQzEwLjM1Nzg2NDQsOCA3LDExLjM1Nzg2NDQgNywxNS41IEM3LDE5LjY0MjEzNTYgMTAuMzU3ODY0NCwyMyAxNC41LDIzIEMxOC42NDIxMzU2LDIzIDIyLDE5LjY0MjEzNTYgMjIsMTUuNSBDMjIsMTQuNTY2OTIyMyAyMS44Mjk2MDc2LDEzLjY3MzY0MTkgMjEuNTE4MjQxNCwxMi44NDk1NzcyIEMyMS4xOTYwMzgzLDEyLjk0NzM5NjggMjAuODU0MTYyMiwxMyAyMC41LDEzIEMxOC41NjcwMDM0LDEzIDE3LDExLjQzMjk5NjYgMTcsOS41IEMxNyw5LjE0NTgzNzc4IDE3LjA1MjYwMzIsOC44MDM5NjE2OSAxNy4xNTA0MjI4LDguNDgxNzU4NiBaIE0xNC41LDE3IEMxMy42NzE1NzI5LDE3IDEzLDE2LjMyODQyNzEgMTMsMTUuNSBDMTMsMTQuNjcxNTcyOSAxMy42NzE1NzI5LDE0IDE0LjUsMTQgQzE1LjMyODQyNzEsMTQgMTYsMTQuNjcxNTcyOSAxNiwxNS41IEMxNiwxNi4zMjg0MjcxIDE1LjMyODQyNzEsMTcgMTQuNSwxNyBaIE0yMC41LDExIEMyMS4zMjg0MjcxLDExIDIyLDEwLjMyODQyNzEgMjIsOS41IEMyMiw4LjY3MTU3Mjg4IDIxLjMyODQyNzEsOCAyMC41LDggQzE5LjY3MTU3MjksOCAxOSw4LjY3MTU3Mjg4IDE5LDkuNSBDMTksMTAuMzI4NDI3MSAxOS42NzE1NzI5LDExIDIwLjUsMTEgWiIgaWQ9InBhdGgtMSI+PC9wYXRoPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlN5bWJvbHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJBdG9tcy9JY29ucy9Ub29scy9DaXJjbGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zLjAwMDAwMCwgLTMuMDAwMDAwKSI+CiAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgPHVzZSBpZD0iTWFzayIgZmlsbD0iIzVCNUI1QiIgZmlsbC1ydWxlPSJub256ZXJvIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgPGcgaWQ9IkF0b21zL0NvbG9yL0dyZXkiIG1hc2s9InVybCgjbWFzay0yKSIgZmlsbD0iIzVCNUI1QiI+CiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSIwIiB5PSIwIiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiPjwvcmVjdD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+); }\n\n.leaflet-pm-toolbar .leaflet-pm-icon-circle-marker {\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KCjxzdmcgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjNUI1QjVCIiBzdHJva2Utd2lkdGg9IjgiCiAgICAgZmlsbD0ibm9uZSI+CjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjM1Ii8+CiAgPGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iMyIgZmlsbD0iIzVCNUI1QiIvPgo8L3N2Zz4=); }\n\n.leaflet-pm-toolbar .leaflet-pm-icon-rectangle {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgPGRlZnM+CiAgICA8cGF0aCBpZD0icmVjdGFuZ2xlLWEiIGQ9Ik0yMywxMC45NjQ1NTU2IEwyMywxOS4wMzU0NDQ0IEMyNC42OTYxNDcxLDE5LjI3ODA1OTMgMjYsMjAuNzM2NzY0IDI2LDIyLjUgQzI2LDI0LjQzMjk5NjYgMjQuNDMyOTk2NiwyNiAyMi41LDI2IEMyMC43MzY3NjQsMjYgMTkuMjc4MDU5MywyNC42OTYxNDcxIDE5LjAzNTQ0NDQsMjMgTDEwLjk2NDU1NTYsMjMgQzEwLjcyMTk0MDcsMjQuNjk2MTQ3MSA5LjI2MzIzNTk1LDI2IDcuNSwyNiBDNS41NjcwMDMzOCwyNiA0LDI0LjQzMjk5NjYgNCwyMi41IEM0LDIwLjczNjc2NCA1LjMwMzg1MjkzLDE5LjI3ODA1OTMgNywxOS4wMzU0NDQ0IEw3LDEwLjk2NDU1NTYgQzUuMzAzODUyOTMsMTAuNzIxOTQwNyA0LDkuMjYzMjM1OTUgNCw3LjUgQzQsNS41NjcwMDMzOCA1LjU2NzAwMzM4LDQgNy41LDQgQzkuMjYzMjM1OTUsNCAxMC43MjE5NDA3LDUuMzAzODUyOTMgMTAuOTY0NTU1Niw3IEwxOS4wMzU0NDQ0LDcgQzE5LjI3ODA1OTMsNS4zMDM4NTI5MyAyMC43MzY3NjQsNCAyMi41LDQgQzI0LjQzMjk5NjYsNCAyNiw1LjU2NzAwMzM4IDI2LDcuNSBDMjYsOS4yNjMyMzU5NSAyNC42OTYxNDcxLDEwLjcyMTk0MDcgMjMsMTAuOTY0NTU1NiBaIE0yMSwxMC42NjMxODQ0IEMyMC4yNzIxNTQsMTAuMzE3NDIyNSAxOS42ODI1Nzc1LDkuNzI3ODQ1OTggMTkuMzM2ODE1Niw5IEwxMC42NjMxODQ0LDkgQzEwLjMxNzQyMjUsOS43Mjc4NDU5OCA5LjcyNzg0NTk4LDEwLjMxNzQyMjUgOSwxMC42NjMxODQ0IEw5LDE5LjMzNjgxNTYgQzkuNzI3ODQ1OTgsMTkuNjgyNTc3NSAxMC4zMTc0MjI1LDIwLjI3MjE1NCAxMC42NjMxODQ0LDIxIEwxOS4zMzY4MTU2LDIxIEMxOS42ODI1Nzc1LDIwLjI3MjE1NCAyMC4yNzIxNTQsMTkuNjgyNTc3NSAyMSwxOS4zMzY4MTU2IEwyMSwxMC42NjMxODQ0IFogTTcuNSw5IEM4LjMyODQyNzEyLDkgOSw4LjMyODQyNzEyIDksNy41IEM5LDYuNjcxNTcyODggOC4zMjg0MjcxMiw2IDcuNSw2IEM2LjY3MTU3Mjg4LDYgNiw2LjY3MTU3Mjg4IDYsNy41IEM2LDguMzI4NDI3MTIgNi42NzE1NzI4OCw5IDcuNSw5IFogTTIyLjUsOSBDMjMuMzI4NDI3MSw5IDI0LDguMzI4NDI3MTIgMjQsNy41IEMyNCw2LjY3MTU3Mjg4IDIzLjMyODQyNzEsNiAyMi41LDYgQzIxLjY3MTU3MjksNiAyMSw2LjY3MTU3Mjg4IDIxLDcuNSBDMjEsOC4zMjg0MjcxMiAyMS42NzE1NzI5LDkgMjIuNSw5IFogTTIyLjUsMjQgQzIzLjMyODQyNzEsMjQgMjQsMjMuMzI4NDI3MSAyNCwyMi41IEMyNCwyMS42NzE1NzI5IDIzLjMyODQyNzEsMjEgMjIuNSwyMSBDMjEuNjcxNTcyOSwyMSAyMSwyMS42NzE1NzI5IDIxLDIyLjUgQzIxLDIzLjMyODQyNzEgMjEuNjcxNTcyOSwyNCAyMi41LDI0IFogTTcuNSwyNCBDOC4zMjg0MjcxMiwyNCA5LDIzLjMyODQyNzEgOSwyMi41IEM5LDIxLjY3MTU3MjkgOC4zMjg0MjcxMiwyMSA3LjUsMjEgQzYuNjcxNTcyODgsMjEgNiwyMS42NzE1NzI5IDYsMjIuNSBDNiwyMy4zMjg0MjcxIDYuNjcxNTcyODgsMjQgNy41LDI0IFoiLz4KICA8L2RlZnM+CiAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMyAtMykiPgogICAgPG1hc2sgaWQ9InJlY3RhbmdsZS1iIiBmaWxsPSIjZmZmIj4KICAgICAgPHVzZSB4bGluazpocmVmPSIjcmVjdGFuZ2xlLWEiLz4KICAgIDwvbWFzaz4KICAgIDx1c2UgZmlsbD0iIzVCNUI1QiIgZmlsbC1ydWxlPSJub256ZXJvIiB4bGluazpocmVmPSIjcmVjdGFuZ2xlLWEiLz4KICAgIDxnIGZpbGw9IiM1QjVCNUIiIG1hc2s9InVybCgjcmVjdGFuZ2xlLWIpIj4KICAgICAgPHJlY3Qgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K); }\n\n.leaflet-pm-toolbar .leaflet-pm-icon-delete {\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjUgKDY3NDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BdG9tcy9JY29ucy9Ub29scy9FcmFzZXI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNMTcuNzg3NDIxOSwxOC40ODEyNTUyIEwxMS42NDgwMDc5LDEzLjM0OTgxODQgTDYuNDA0NjYwMDksMTkuMzgxNjAwMSBMMTAuNTUzOTE1NiwyMi45ODg0OTI5IEwxMy44NjkzNCwyMi45ODg0OTI5IEwxNy43ODc0MjE5LDE4LjQ4MTI1NTIgWiBNMTYuNTA3NDI1MiwyMi45ODg0OTI5IEwyNi4wMDAwMDAyLDIyLjk4ODQ5MjkgTDI2LjAwMDAwMDIsMjQuOTg4NDkyOSBMMTAuMDAwMDAwMiwyNC45ODg0OTI5IEw5LjgwNzA4MzEzLDI0Ljk4ODQ5MjkgTDUuMDkyNTQyMDQsMjAuODkxMDE5MiBDNC4yNTg5MTI4NSwyMC4xNjYzNTY0IDQuMTcwNTc4MTQsMTguOTAzMTExMiA0Ljg5NTI0MDkzLDE4LjA2OTQ4MiBMMTYuMDQ4MjQ0NCw1LjIzOTQxOTE2IEMxNi43NzI5MDcyLDQuNDA1Nzg5OTggMTguMDM2MTUyNSw0LjMxNzQ1NTI2IDE4Ljg2OTc4MTYsNS4wNDIxMTgwNiBMMjQuOTA3NDU4MywxMC4yOTA1OTAzIEMyNS43NDEwODc1LDExLjAxNTI1MzEgMjUuODI5NDIyMiwxMi4yNzg0OTgzIDI1LjEwNDc1OTQsMTMuMTEyMTI3NSBMMTYuNTA3NDI1MiwyMi45ODg0OTI5IFoiIGlkPSJwYXRoLTEiPjwvcGF0aD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJTeW1ib2xzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iQXRvbXMvSWNvbnMvVG9vbHMvRXJhc2VyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMy4wMDAwMDAsIC0zLjAwMDAwMCkiPgogICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgIDx1c2UgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSIjNUI1QjVCIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+); }\n\n.leaflet-pm-toolbar .leaflet-pm-icon-edit {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgPGRlZnM+CiAgICA8cGF0aCBpZD0iZWRpdF9hbmNob3ItYSIgZD0iTTEzLjUsMTEgQzExLjU2NzAwMzQsMTEgMTAsOS40MzI5OTY2MiAxMCw3LjUgQzEwLDUuNTY3MDAzMzggMTEuNTY3MDAzNCw0IDEzLjUsNCBDMTUuNDMyOTk2Niw0IDE3LDUuNTY3MDAzMzggMTcsNy41IEMxNyw5LjQzMjk5NjYyIDE1LjQzMjk5NjYsMTEgMTMuNSwxMSBaIE0xMy41LDkgQzE0LjMyODQyNzEsOSAxNSw4LjMyODQyNzEyIDE1LDcuNSBDMTUsNi42NzE1NzI4OCAxNC4zMjg0MjcxLDYgMTMuNSw2IEMxMi42NzE1NzI5LDYgMTIsNi42NzE1NzI4OCAxMiw3LjUgQzEyLDguMzI4NDI3MTIgMTIuNjcxNTcyOSw5IDEzLjUsOSBaIE0xMi4wMDAyODg5LDcuNTI5NzM4OTMgQzEyLjAxMjU5ODMsOC4xNjI3MzY3MiAxMi40MTcwMTk3LDguNjk5NjY0MyAxMi45ODA3MTExLDguOTA3Njc5NjYgTDMsMTUgTDMsMTMgTDEyLjAwMDI4ODksNy41Mjk3Mzg5MyBaIE0xNC4yMTcyNzIyLDYuMTgyMjg0NzIgTDE5LjQ1MzEyNSwzIEwyMi42NTg5MzU1LDMgTDE0Ljk4OTEwMiw3LjY4MTczODg1IEMxNC45OTYyOTcxLDcuNjIyMTY0NTkgMTUsNy41NjE1MTQ3MiAxNSw3LjUgQzE1LDYuOTMxMzgzODEgMTQuNjgzNjA5OCw2LjQzNjY2NDUgMTQuMjE3MjcyMiw2LjE4MjI4NDcyIFogTTIzLjQ0MzQwNDIsMTkuMjg1MTczNiBMMjAuMTI4Mjc5OSwxOS4yODUxNzM2IEwyMS44NzI5OTgzLDIzLjUzNDk1MjUgQzIxLjk5NDUyOTYsMjMuODI5NTc3MyAyMS44NTU2NTQ2LDI0LjE1OTkyMDkgMjEuNTc3ODczNCwyNC4yODQ5MjA4IEwyMC4wNDE0Njc1LDI0Ljk1NDUxNDIgQzE5Ljc1NTA2MTMsMjUuMDc5NTE0MSAxOS40MzM4NzM4LDI0LjkzNjY3MDQgMTkuMzEyMzQyNiwyNC42NTA5NTE4IEwxNy42NTQ0MzY3LDIwLjYxNTQ1NDEgTDE0Ljk0NjE4NzMsMjMuNDAxMDE1MSBDMTQuNTg1MjgxMSwyMy43NzIxNzExIDE0LDIzLjQ4NjA0NjMgMTQsMjIuOTk5MjY1MyBMMTQsOS41NzE4MzUzMyBDMTQsOS4wNTkzMzU2MSAxNC42MjI1MzExLDguODA5NDkyIDE0Ljk0NjE1Niw5LjE3MDA4NTU1IEwyMy44MzQwMjkyLDE4LjMxMjAxNzkgQzI0LjE5MjUyOTEsMTguNjYxMzYxNSAyMy45Mjc5OTc5LDE5LjI4NTE3MzYgMjMuNDQzNDA0MiwxOS4yODUxNzM2IFoiLz4KICA8L2RlZnM+CiAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMyAtMykiPgogICAgPG1hc2sgaWQ9ImVkaXRfYW5jaG9yLWIiIGZpbGw9IiNmZmYiPgogICAgICA8dXNlIHhsaW5rOmhyZWY9IiNlZGl0X2FuY2hvci1hIi8+CiAgICA8L21hc2s+CiAgICA8dXNlIGZpbGw9IiM1QjVCNUIiIGZpbGwtcnVsZT0ibm9uemVybyIgeGxpbms6aHJlZj0iI2VkaXRfYW5jaG9yLWEiLz4KICAgIDxnIGZpbGw9IiM1QjVCNUIiIG1hc2s9InVybCgjZWRpdF9hbmNob3ItYikiPgogICAgICA8cmVjdCB3aWR0aD0iMzAiIGhlaWdodD0iMzAiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=); }\n\n.leaflet-pm-toolbar .leaflet-pm-icon-drag {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgPGRlZnM+CiAgICA8cGF0aCBpZD0ibW92ZS1hIiBkPSJNMjEsMTQgTDIxLDEwIEwyNywxNSBMMjEsMjAgTDIxLDE2IEwxNiwxNiBMMTYsMjEgTDIwLDIxIEwxNSwyNyBMMTAsMjEgTDE0LDIxIEwxNCwxNiBMOSwxNiBMOSwyMCBMMywxNSBMOSwxMCBMOSwxNCBMMTQsMTQgTDE0LDkgTDEwLDkgTDE1LDMgTDIwLDkgTDE2LDkgTDE2LDE0IEwyMSwxNCBaIi8+CiAgPC9kZWZzPgogIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMgLTMpIj4KICAgIDxtYXNrIGlkPSJtb3ZlLWIiIGZpbGw9IiNmZmYiPgogICAgICA8dXNlIHhsaW5rOmhyZWY9IiNtb3ZlLWEiLz4KICAgIDwvbWFzaz4KICAgIDx1c2UgZmlsbD0iI0Q4RDhEOCIgeGxpbms6aHJlZj0iI21vdmUtYSIvPgogICAgPGcgZmlsbD0iIzVCNUI1QiIgbWFzaz0idXJsKCNtb3ZlLWIpIj4KICAgICAgPHJlY3Qgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K); }\n\n.leaflet-pm-toolbar .leaflet-pm-icon-cut {\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjUgKDY3NDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BdG9tcy9JY29ucy9Ub29scy9TY2lzc29yczwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxwYXRoIGQ9Ik0xMi45NjkxNTc0LDEzLjQ5Mzk0MzUgTDIxLjAzMTcwMzIsNS41NDE2NzAxMyBMMjMuNDY0OTQ5OSw1LjY3NzIyOTU3IEwxNy4wNDcwNzEzLDE0LjUxMDY4MTYgTDI3LjU2NjAzMzYsMTcuMTMzMzUzNSBMMjUuNzg5MTk0NCwxOC44MDEyNTg4IEwxNC41ODU0OTUxLDE3Ljg5ODc1MDYgTDEzLjY0ODc5NTUsMTkuMTg4MDA3IEMxMy43OTQ2MzksMTkuMjY1MDk1OCAxMy45MzY3OTg1LDE5LjM1MzQ0MTcgMTQuMDc0MTM3NywxOS40NTMyMjQ1IEMxNS42Mzc5NjQ4LDIwLjU4OTQxMTQgMTUuOTg0NjM1NywyMi43NzgyMDUyIDE0Ljg0ODQ0ODgsMjQuMzQyMDMyNCBDMTMuNzEyMjYxOSwyNS45MDU4NTk1IDExLjUyMzQ2ODEsMjYuMjUyNTMwNCA5Ljk1OTY0MDk2LDI1LjExNjM0MzUgQzguMzk1ODEzODQsMjMuOTgwMTU2NSA4LjA0OTE0Mjk2LDIxLjc5MTM2MjcgOS4xODUzMjk4NiwyMC4yMjc1MzU2IEM5Ljc0NTg3Mjc2LDE5LjQ1NjAxNDUgMTAuNTYyNjE4OCwxOC45ODA3NDc1IDExLjQzNDEyMTgsMTguODMzNjQwNyBMMTIuNjgwNTY1NiwxNy4xMTgwNTc5IEwxMi41MjM5NzI0LDE2LjM3NDcyMTYgTDExLjk1MDY5MzIsMTUuMzAxMjM5MSBMOS44OTMxMDY0NiwxNC43ODgyMjUxIEM5LjEzMDkzNzk2LDE1LjIzNTcyNjEgOC4xOTk3Nzg1NCwxNS4zOTY2NDQ3IDcuMjc0NDUzNTUsMTUuMTY1OTM1MiBDNS4zOTg4NzUxOSwxNC42OTgzMDEgNC4yNTc1MTA5NCwxMi43OTg3NTE5IDQuNzI1MTQ1MTUsMTAuOTIzMTczNiBDNS4xOTI3NzkzNSw5LjA0NzU5NTE5IDcuMDkyMzI4NDYsNy45MDYyMzA5NCA4Ljk2NzkwNjgyLDguMzczODY1MTUgQzEwLjg0MzQ4NTIsOC44NDE0OTkzNSAxMS45ODQ4NDk0LDEwLjc0MTA0ODUgMTEuNTE3MjE1MiwxMi42MTY2MjY4IEMxMS40NzYxNDY0LDEyLjc4MTM0NDkgMTEuNDI0MDMzNSwxMi45NDA0MDAxIDExLjM2MTg2MjcsMTMuMDkzMTk5OSBMMTIuOTY5MTU3NCwxMy40OTM5NDM1IFogTTcuNzU4Mjk3MzUsMTMuMjI1MzQzOCBDOC41NjIxMTY2NCwxMy40MjU3NTg0IDkuMzc2MjA5MTIsMTIuOTM2NjAyMyA5LjU3NjYyMzc4LDEyLjEzMjc4MyBDOS43NzcwMzg0NCwxMS4zMjg5NjM3IDkuMjg3ODgyMzMsMTAuNTE0ODcxMyA4LjQ4NDA2MzAzLDEwLjMxNDQ1NjYgQzcuNjgwMjQzNzMsMTAuMTE0MDQxOSA2Ljg2NjE1MTI2LDEwLjYwMzE5OCA2LjY2NTczNjYsMTEuNDA3MDE3MyBDNi40NjUzMjE5NCwxMi4yMTA4MzY2IDYuOTU0NDc4MDUsMTMuMDI0OTI5MSA3Ljc1ODI5NzM1LDEzLjIyNTM0MzggWiBNMTAuODAzMzYzOSwyMS40MDMxMDYxIEMxMC4zMTY0MjY2LDIyLjA3MzMxNzcgMTAuNDY0OTk5OCwyMy4wMTEzNzIyIDExLjEzNTIxMTUsMjMuNDk4MzA5NSBDMTEuODA1NDIzMSwyMy45ODUyNDY3IDEyLjc0MzQ3NzYsMjMuODM2NjczNSAxMy4yMzA0MTQ4LDIzLjE2NjQ2MTkgQzEzLjcxNzM1MjEsMjIuNDk2MjUwMiAxMy41Njg3Nzg4LDIxLjU1ODE5NTcgMTIuODk4NTY3MiwyMS4wNzEyNTg1IEMxMi4yMjgzNTU2LDIwLjU4NDMyMTIgMTEuMjkwMzAxMSwyMC43MzI4OTQ1IDEwLjgwMzM2MzksMjEuNDAzMTA2MSBaIiBpZD0icGF0aC0xIj48L3BhdGg+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iU3ltYm9scyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkF0b21zL0ljb25zL1Rvb2xzL1NjaXNzb3JzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMy4wMDAwMDAsIC0zLjAwMDAwMCkiPgogICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgIDx1c2UgaWQ9Ik1hc2siIGZpbGw9IiM1QjVCNUIiIGZpbGwtcnVsZT0ibm9uemVybyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYuMDkzMTk0LCAxNS42NjMzNTEpIHJvdGF0ZSgtMzIuMDAwMDAwKSB0cmFuc2xhdGUoLTE2LjA5MzE5NCwgLTE1LjY2MzM1MSkgIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==); }\n\n.leaflet-buttons-control-button:hover {\n  cursor: pointer;\n  background-color: #f4f4f4; }\n\n.active .leaflet-buttons-control-button {\n  box-shadow: inset 0 -1px 5px 2px rgba(81, 77, 77, 0.31); }\n\n.leaflet-buttons-control-text-hide {\n  display: none; }\n\n.button-container {\n  position: relative; }\n\n.button-container .leaflet-pm-actions-container {\n  z-index: 2;\n  position: absolute;\n  top: 0;\n  left: 31px;\n  display: none;\n  white-space: nowrap; }\n\n.leaflet-right\n.leaflet-pm-toolbar\n.button-container\n.leaflet-pm-actions-container {\n  right: 31px;\n  left: auto; }\n\n.button-container.active .leaflet-pm-actions-container {\n  display: block; }\n\n.button-container .leaflet-pm-actions-container .leaflet-pm-action:last-child {\n  border-radius: 0px 3px 3px 0px;\n  border-right: 0px; }\n\n.button-container .leaflet-pm-actions-container .leaflet-pm-action {\n  padding: 0px 10px;\n  background-color: #666;\n  color: #fff;\n  display: inline-block;\n  width: auto;\n  border-right: 1px solid #eee;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.button-container .leaflet-pm-actions-container .leaflet-pm-action:hover {\n  cursor: pointer;\n  background-color: #777; }\n", "",{"version":3,"sources":["leaflet-geoman.css"],"names":[],"mappings":"AAAA;;EAEE,yBAAyB;EACzB,yBAAyB;EACzB,kBAAkB;EAClB,gCAAgC;EAChC,sBAAsB;EACtB,uBAAuB;EACvB,UAAU;EACV,qCAA6B;EAA7B,6BAA6B,EAAE;;AAEjC;;EAEE,YAAY;EACZ,gCAAgC;EAChC,sBAAsB;EACtB,uBAAuB,EAAE;;AAE3B;EACE,uBAAuB,EAAE;;AAE3B;EACE,iBAAiB;EACjB,oBAAoB;EACpB,aAAa,EAAE;;AAEjB;EACE,yBAAyB,EAAE;;AAE7B;EACE,WAAW;EACX,gDAAwC;EAAxC,wCAAwC,EAAE;;AAE5C;;EAEE,UAAU,EAAE;;AAEd;;EAEE,qBAAqB,EAAE;;AAEzB;EACE,aAAa,EAAE;;AAEjB;EACE,YAAY;EACZ,sBAAsB;EACtB,kBAAkB;EAClB,UAAU,EAAE;;AAEd;EACE,eAAe;EACf,iBAAiB,EAAE;;AAErB;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,wBAAwB;EACxB,4BAA4B;EAC5B,kCAAkC,EAAE;;AAEtC;EACE,q4DAAq4D,EAAE;;AAEz4D;EACE,i3EAAi3E,EAAE;;AAEr3E;EACE,quDAAquD,EAAE;;AAEzuD;EACE,ysFAAysF,EAAE;;AAE7sF;EACE,qXAAqX,EAAE;;AAEzX;EACE,qqFAAqqF,EAAE;;AAEzqF;EACE,i1DAAi1D,EAAE;;AAEr1D;EACE,iqEAAiqE,EAAE;;AAErqE;EACE,q4BAAq4B,EAAE;;AAEz4B;EACE,ywGAAywG,EAAE;;AAE7wG;EACE,eAAe;EACf,yBAAyB,EAAE;;AAE7B;EACE,uDAAuD,EAAE;;AAE3D;EACE,aAAa,EAAE;;AAEjB;EACE,kBAAkB,EAAE;;AAEtB;EACE,UAAU;EACV,kBAAkB;EAClB,MAAM;EACN,UAAU;EACV,aAAa;EACb,mBAAmB,EAAE;;AAEvB;;;;EAIE,WAAW;EACX,UAAU,EAAE;;AAEd;EACE,cAAc,EAAE;;AAElB;EACE,8BAA8B;EAC9B,iBAAiB,EAAE;;AAErB;EACE,iBAAiB;EACjB,sBAAsB;EACtB,WAAW;EACX,qBAAqB;EACrB,WAAW;EACX,4BAA4B;EAC5B,yBAAiB;KAAjB,sBAAiB;MAAjB,qBAAiB;UAAjB,iBAAiB,EAAE;;AAErB;EACE,eAAe;EACf,sBAAsB,EAAE","file":"leaflet-geoman.css","sourcesContent":[".marker-icon,\n.marker-icon:focus {\n  background-color: #ffffff;\n  border: 1px solid #3388ff;\n  border-radius: 50%;\n  margin: -8px 0 0 -8px !important;\n  width: 14px !important;\n  height: 14px !important;\n  outline: 0;\n  transition: opacity ease 0.3s; }\n\n.marker-icon-middle,\n.marker-icon-middle:focus {\n  opacity: 0.7;\n  margin: -6px 0 0 -6px !important;\n  width: 10px !important;\n  height: 10px !important; }\n\n.leaflet-pm-draggable {\n  cursor: move !important; }\n\n.cursor-marker {\n  cursor: crosshair;\n  pointer-events: none;\n  display: none; }\n\n.cursor-marker.visible {\n  display: block !important; }\n\n.leaflet-pm-invalid {\n  stroke: red;\n  transition: fill ease 0s, stroke ease 0s; }\n\n.rect-style-marker,\n.rect-start-marker {\n  opacity: 0; }\n\n.rect-style-marker.visible,\n.rect-start-marker.visible {\n  opacity: 1 !important; }\n\n.hidden {\n  display: none; }\n\n.leaflet-pm-toolbar .leaflet-buttons-control-button {\n  padding: 5px;\n  box-sizing: border-box;\n  position: relative;\n  z-index: 3; }\n\n.leaflet-pm-toolbar .control-fa-icon {\n  font-size: 19px;\n  line-height: 24px; }\n\n.leaflet-pm-toolbar .control-icon {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center center; }\n\n.leaflet-pm-toolbar .leaflet-pm-icon-marker {\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjUgKDY3NDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BdG9tcy9JY29ucy9Ub29scy9NYXJrZXI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNMTUuNSwyNC44NzgyOTU5IEMxNS4yOTA5MjAxLDI0Ljg3NzIyMTkgMTUuMTc0NDg1NywyNC44NDY3ODE3IDE0LjY1OTA4NjYsMjQuMjM1NDE2MyBDMTAuMjE5Njk1NSwxOS40MTE4MDU0IDgsMTUuNTAxNDM5MiA4LDEyLjUwNDMxNzcgQzgsOC4zNTk3OTc0NiAxMS4zNTc4NjQ0LDUgMTUuNSw1IEMxOS42NDIxMzU2LDUgMjMsOC4zNTk3OTc0NiAyMywxMi41MDQzMTc3IEMyMywxNyAxOC4yODc4MjE3LDIxLjkyNjgzNzggMTYuMzMzNjYwMSwyNC4yNDQwMTg2IEMxNS44MjI0NjIyLDI0Ljg1MDE4MDIgMTUuNzA5MDc5OSwyNC44NzkzNjk5IDE1LjUsMjQuODc4Mjk1OSBaIE0xNS41LDE1LjUzMjY5NDggQzE3LjI3NTIwMSwxNS41MzI2OTQ4IDE4LjcxNDI4NTcsMTQuMTE4MDAwNCAxOC43MTQyODU3LDEyLjM3Mjg4NjQgQzE4LjcxNDI4NTcsMTAuNjI3NzcyMyAxNy4yNzUyMDEsOS4yMTMwNzc5MiAxNS41LDkuMjEzMDc3OTIgQzEzLjcyNDc5OSw5LjIxMzA3NzkyIDEyLjI4NTcxNDMsMTAuNjI3NzcyMyAxMi4yODU3MTQzLDEyLjM3Mjg4NjQgQzEyLjI4NTcxNDMsMTQuMTE4MDAwNCAxMy43MjQ3OTksMTUuNTMyNjk0OCAxNS41LDE1LjUzMjY5NDggWiIgaWQ9InBhdGgtMSI+PC9wYXRoPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlN5bWJvbHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJBdG9tcy9JY29ucy9Ub29scy9NYXJrZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zLjAwMDAwMCwgLTMuMDAwMDAwKSI+CiAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgPHVzZSBpZD0iTWFzayIgZmlsbD0iIzVCNUI1QiIgZmlsbC1ydWxlPSJub256ZXJvIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==); }\n\n.leaflet-pm-toolbar .leaflet-pm-icon-polygon {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgPGRlZnM+CiAgICA8cGF0aCBpZD0icG9seWdvbi1hIiBkPSJNMTkuNDIwNjg5Miw5LjE2NTA5NzI1IEMxOS4xNTIzNjgxLDguNjY5OTI5MTQgMTksOC4xMDI3NTgzMSAxOSw3LjUgQzE5LDUuNTY3MDAzMzggMjAuNTY3MDAzNCw0IDIyLjUsNCBDMjQuNDMyOTk2Niw0IDI2LDUuNTY3MDAzMzggMjYsNy41IEMyNiw5LjI2MzIzNTk1IDI0LjY5NjE0NzEsMTAuNzIxOTQwNyAyMywxMC45NjQ1NTU2IEwyMywxOS4wMzU0NDQ0IEMyNC42OTYxNDcxLDE5LjI3ODA1OTMgMjYsMjAuNzM2NzY0IDI2LDIyLjUgQzI2LDI0LjQzMjk5NjYgMjQuNDMyOTk2NiwyNiAyMi41LDI2IEMyMC43MzY3NjQsMjYgMTkuMjc4MDU5MywyNC42OTYxNDcxIDE5LjAzNTQ0NDQsMjMgTDEwLjk2NDU1NTYsMjMgQzEwLjcyMTk0MDcsMjQuNjk2MTQ3MSA5LjI2MzIzNTk1LDI2IDcuNSwyNiBDNS41NjcwMDMzOCwyNiA0LDI0LjQzMjk5NjYgNCwyMi41IEM0LDIwLjU2NzAwMzQgNS41NjcwMDMzOCwxOSA3LjUsMTkgQzguMTAyNzU4MzEsMTkgOC42Njk5MjkxNCwxOS4xNTIzNjgxIDkuMTY1MDk3MjUsMTkuNDIwNjg5MiBMMTkuNDIwNjg5Miw5LjE2NTA5NzI1IFogTTIwLjgzNDkwNzMsMTAuNTc5MzA2MyBMMTAuNTc5MzEwOCwyMC44MzQ5MDI3IEMxMC42MDg2NzMxLDIwLjg4OTA4ODggMTAuNjM2NjQ2OSwyMC45NDQxMzcyIDEwLjY2MzE4NDQsMjEgTDE5LjMzNjgxNTYsMjEgQzE5LjY4MjU3NzUsMjAuMjcyMTU0IDIwLjI3MjE1NCwxOS42ODI1Nzc1IDIxLDE5LjMzNjgxNTYgTDIxLDEwLjY2MzE4NDQgQzIwLjk0NDEzNzIsMTAuNjM2NjQ2OSAyMC44ODkwODg4LDEwLjYwODY3MzEgMjAuODM0OTAyNywxMC41NzkzMTA4IFogTTIyLjUsOSBDMjMuMzI4NDI3MSw5IDI0LDguMzI4NDI3MTIgMjQsNy41IEMyNCw2LjY3MTU3Mjg4IDIzLjMyODQyNzEsNiAyMi41LDYgQzIxLjY3MTU3MjksNiAyMSw2LjY3MTU3Mjg4IDIxLDcuNSBDMjEsOC4zMjg0MjcxMiAyMS42NzE1NzI5LDkgMjIuNSw5IFogTTIyLjUsMjQgQzIzLjMyODQyNzEsMjQgMjQsMjMuMzI4NDI3MSAyNCwyMi41IEMyNCwyMS42NzE1NzI5IDIzLjMyODQyNzEsMjEgMjIuNSwyMSBDMjEuNjcxNTcyOSwyMSAyMSwyMS42NzE1NzI5IDIxLDIyLjUgQzIxLDIzLjMyODQyNzEgMjEuNjcxNTcyOSwyNCAyMi41LDI0IFogTTcuNSwyNCBDOC4zMjg0MjcxMiwyNCA5LDIzLjMyODQyNzEgOSwyMi41IEM5LDIxLjY3MTU3MjkgOC4zMjg0MjcxMiwyMSA3LjUsMjEgQzYuNjcxNTcyODgsMjEgNiwyMS42NzE1NzI5IDYsMjIuNSBDNiwyMy4zMjg0MjcxIDYuNjcxNTcyODgsMjQgNy41LDI0IFoiLz4KICA8L2RlZnM+CiAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMyAtMykiPgogICAgPG1hc2sgaWQ9InBvbHlnb24tYiIgZmlsbD0iI2ZmZiI+CiAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BvbHlnb24tYSIvPgogICAgPC9tYXNrPgogICAgPHVzZSBmaWxsPSIjNUI1QjVCIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHhsaW5rOmhyZWY9IiNwb2x5Z29uLWEiLz4KICAgIDxnIGZpbGw9IiM1QjVCNUIiIG1hc2s9InVybCgjcG9seWdvbi1iKSI+CiAgICAgIDxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==); }\n\n.leaflet-pm-toolbar .leaflet-pm-icon-polyline {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgPGRlZnM+CiAgICA8cGF0aCBpZD0ibGluZS1hIiBkPSJNOS4xNjUwOTcyNSwxOS40MjA2ODkyIEwxOC40MjA2ODkyLDEwLjE2NTA5NzMgQzE4LjE1MjM2ODEsOS42Njk5MjkxNCAxOCw5LjEwMjc1ODMxIDE4LDguNSBDMTgsNi41NjcwMDMzOCAxOS41NjcwMDM0LDUgMjEuNSw1IEMyMy40MzI5OTY2LDUgMjUsNi41NjcwMDMzOCAyNSw4LjUgQzI1LDEwLjQzMjk5NjYgMjMuNDMyOTk2NiwxMiAyMS41LDEyIEMyMC44OTcyNDE3LDEyIDIwLjMzMDA3MDksMTEuODQ3NjMxOSAxOS44MzQ5MDI3LDExLjU3OTMxMDggTDEwLjU3OTMxMDgsMjAuODM0OTAyNyBDMTAuODQ3NjMxOSwyMS4zMzAwNzA5IDExLDIxLjg5NzI0MTcgMTEsMjIuNSBDMTEsMjQuNDMyOTk2NiA5LjQzMjk5NjYyLDI2IDcuNSwyNiBDNS41NjcwMDMzOCwyNiA0LDI0LjQzMjk5NjYgNCwyMi41IEM0LDIwLjU2NzAwMzQgNS41NjcwMDMzOCwxOSA3LjUsMTkgQzguMTAyNzU4MzEsMTkgOC42Njk5MjkxNCwxOS4xNTIzNjgxIDkuMTY1MDk3MjUsMTkuNDIwNjg5MiBaIE0yMS41LDEwIEMyMi4zMjg0MjcxLDEwIDIzLDkuMzI4NDI3MTIgMjMsOC41IEMyMyw3LjY3MTU3Mjg4IDIyLjMyODQyNzEsNyAyMS41LDcgQzIwLjY3MTU3MjksNyAyMCw3LjY3MTU3Mjg4IDIwLDguNSBDMjAsOS4zMjg0MjcxMiAyMC42NzE1NzI5LDEwIDIxLjUsMTAgWiBNNy41LDI0IEM4LjMyODQyNzEyLDI0IDksMjMuMzI4NDI3MSA5LDIyLjUgQzksMjEuNjcxNTcyOSA4LjMyODQyNzEyLDIxIDcuNSwyMSBDNi42NzE1NzI4OCwyMSA2LDIxLjY3MTU3MjkgNiwyMi41IEM2LDIzLjMyODQyNzEgNi42NzE1NzI4OCwyNCA3LjUsMjQgWiIvPgogIDwvZGVmcz4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zIC0zKSI+CiAgICA8bWFzayBpZD0ibGluZS1iIiBmaWxsPSIjZmZmIj4KICAgICAgPHVzZSB4bGluazpocmVmPSIjbGluZS1hIi8+CiAgICA8L21hc2s+CiAgICA8dXNlIGZpbGw9IiM1QjVCNUIiIGZpbGwtcnVsZT0ibm9uemVybyIgeGxpbms6aHJlZj0iI2xpbmUtYSIvPgogICAgPGcgZmlsbD0iIzVCNUI1QiIgbWFzaz0idXJsKCNsaW5lLWIpIj4KICAgICAgPHJlY3Qgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K); }\n\n.leaflet-pm-toolbar .leaflet-pm-icon-circle {\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjUgKDY3NDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BdG9tcy9JY29ucy9Ub29scy9DaXJjbGU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNMTguMjg5Nzc1MSw2Ljc4NjAyMjc1IEMxOC44OTI0MTMxLDYuMjk0NjQ5ODEgMTkuNjYxNzk3LDYgMjAuNSw2IEMyMi40MzI5OTY2LDYgMjQsNy41NjcwMDMzOCAyNCw5LjUgQzI0LDEwLjMzODIwMyAyMy43MDUzNTAyLDExLjEwNzU4NjkgMjMuMjEzOTc3MiwxMS43MTAyMjQ5IEMyMy43MTk1OTksMTIuODcxMjA1MyAyNCwxNC4xNTI4NTcxIDI0LDE1LjUgQzI0LDIwLjc0NjcwNTEgMTkuNzQ2NzA1MSwyNSAxNC41LDI1IEM5LjI1MzI5NDg4LDI1IDUsMjAuNzQ2NzA1MSA1LDE1LjUgQzUsMTAuMjUzMjk0OSA5LjI1MzI5NDg4LDYgMTQuNSw2IEMxNS44NDcxNDI5LDYgMTcuMTI4Nzk0Nyw2LjI4MDQwMDk4IDE4LjI4OTc3NTEsNi43ODYwMjI3NSBaIE0xNy4xNTA0MjI4LDguNDgxNzU4NiBDMTYuMzI2MzU4MSw4LjE3MDM5MjM2IDE1LjQzMzA3NzcsOCAxNC41LDggQzEwLjM1Nzg2NDQsOCA3LDExLjM1Nzg2NDQgNywxNS41IEM3LDE5LjY0MjEzNTYgMTAuMzU3ODY0NCwyMyAxNC41LDIzIEMxOC42NDIxMzU2LDIzIDIyLDE5LjY0MjEzNTYgMjIsMTUuNSBDMjIsMTQuNTY2OTIyMyAyMS44Mjk2MDc2LDEzLjY3MzY0MTkgMjEuNTE4MjQxNCwxMi44NDk1NzcyIEMyMS4xOTYwMzgzLDEyLjk0NzM5NjggMjAuODU0MTYyMiwxMyAyMC41LDEzIEMxOC41NjcwMDM0LDEzIDE3LDExLjQzMjk5NjYgMTcsOS41IEMxNyw5LjE0NTgzNzc4IDE3LjA1MjYwMzIsOC44MDM5NjE2OSAxNy4xNTA0MjI4LDguNDgxNzU4NiBaIE0xNC41LDE3IEMxMy42NzE1NzI5LDE3IDEzLDE2LjMyODQyNzEgMTMsMTUuNSBDMTMsMTQuNjcxNTcyOSAxMy42NzE1NzI5LDE0IDE0LjUsMTQgQzE1LjMyODQyNzEsMTQgMTYsMTQuNjcxNTcyOSAxNiwxNS41IEMxNiwxNi4zMjg0MjcxIDE1LjMyODQyNzEsMTcgMTQuNSwxNyBaIE0yMC41LDExIEMyMS4zMjg0MjcxLDExIDIyLDEwLjMyODQyNzEgMjIsOS41IEMyMiw4LjY3MTU3Mjg4IDIxLjMyODQyNzEsOCAyMC41LDggQzE5LjY3MTU3MjksOCAxOSw4LjY3MTU3Mjg4IDE5LDkuNSBDMTksMTAuMzI4NDI3MSAxOS42NzE1NzI5LDExIDIwLjUsMTEgWiIgaWQ9InBhdGgtMSI+PC9wYXRoPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlN5bWJvbHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJBdG9tcy9JY29ucy9Ub29scy9DaXJjbGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zLjAwMDAwMCwgLTMuMDAwMDAwKSI+CiAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgPHVzZSBpZD0iTWFzayIgZmlsbD0iIzVCNUI1QiIgZmlsbC1ydWxlPSJub256ZXJvIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgPGcgaWQ9IkF0b21zL0NvbG9yL0dyZXkiIG1hc2s9InVybCgjbWFzay0yKSIgZmlsbD0iIzVCNUI1QiI+CiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSIwIiB5PSIwIiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiPjwvcmVjdD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+); }\n\n.leaflet-pm-toolbar .leaflet-pm-icon-circle-marker {\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KCjxzdmcgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjNUI1QjVCIiBzdHJva2Utd2lkdGg9IjgiCiAgICAgZmlsbD0ibm9uZSI+CjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjM1Ii8+CiAgPGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iMyIgZmlsbD0iIzVCNUI1QiIvPgo8L3N2Zz4=); }\n\n.leaflet-pm-toolbar .leaflet-pm-icon-rectangle {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgPGRlZnM+CiAgICA8cGF0aCBpZD0icmVjdGFuZ2xlLWEiIGQ9Ik0yMywxMC45NjQ1NTU2IEwyMywxOS4wMzU0NDQ0IEMyNC42OTYxNDcxLDE5LjI3ODA1OTMgMjYsMjAuNzM2NzY0IDI2LDIyLjUgQzI2LDI0LjQzMjk5NjYgMjQuNDMyOTk2NiwyNiAyMi41LDI2IEMyMC43MzY3NjQsMjYgMTkuMjc4MDU5MywyNC42OTYxNDcxIDE5LjAzNTQ0NDQsMjMgTDEwLjk2NDU1NTYsMjMgQzEwLjcyMTk0MDcsMjQuNjk2MTQ3MSA5LjI2MzIzNTk1LDI2IDcuNSwyNiBDNS41NjcwMDMzOCwyNiA0LDI0LjQzMjk5NjYgNCwyMi41IEM0LDIwLjczNjc2NCA1LjMwMzg1MjkzLDE5LjI3ODA1OTMgNywxOS4wMzU0NDQ0IEw3LDEwLjk2NDU1NTYgQzUuMzAzODUyOTMsMTAuNzIxOTQwNyA0LDkuMjYzMjM1OTUgNCw3LjUgQzQsNS41NjcwMDMzOCA1LjU2NzAwMzM4LDQgNy41LDQgQzkuMjYzMjM1OTUsNCAxMC43MjE5NDA3LDUuMzAzODUyOTMgMTAuOTY0NTU1Niw3IEwxOS4wMzU0NDQ0LDcgQzE5LjI3ODA1OTMsNS4zMDM4NTI5MyAyMC43MzY3NjQsNCAyMi41LDQgQzI0LjQzMjk5NjYsNCAyNiw1LjU2NzAwMzM4IDI2LDcuNSBDMjYsOS4yNjMyMzU5NSAyNC42OTYxNDcxLDEwLjcyMTk0MDcgMjMsMTAuOTY0NTU1NiBaIE0yMSwxMC42NjMxODQ0IEMyMC4yNzIxNTQsMTAuMzE3NDIyNSAxOS42ODI1Nzc1LDkuNzI3ODQ1OTggMTkuMzM2ODE1Niw5IEwxMC42NjMxODQ0LDkgQzEwLjMxNzQyMjUsOS43Mjc4NDU5OCA5LjcyNzg0NTk4LDEwLjMxNzQyMjUgOSwxMC42NjMxODQ0IEw5LDE5LjMzNjgxNTYgQzkuNzI3ODQ1OTgsMTkuNjgyNTc3NSAxMC4zMTc0MjI1LDIwLjI3MjE1NCAxMC42NjMxODQ0LDIxIEwxOS4zMzY4MTU2LDIxIEMxOS42ODI1Nzc1LDIwLjI3MjE1NCAyMC4yNzIxNTQsMTkuNjgyNTc3NSAyMSwxOS4zMzY4MTU2IEwyMSwxMC42NjMxODQ0IFogTTcuNSw5IEM4LjMyODQyNzEyLDkgOSw4LjMyODQyNzEyIDksNy41IEM5LDYuNjcxNTcyODggOC4zMjg0MjcxMiw2IDcuNSw2IEM2LjY3MTU3Mjg4LDYgNiw2LjY3MTU3Mjg4IDYsNy41IEM2LDguMzI4NDI3MTIgNi42NzE1NzI4OCw5IDcuNSw5IFogTTIyLjUsOSBDMjMuMzI4NDI3MSw5IDI0LDguMzI4NDI3MTIgMjQsNy41IEMyNCw2LjY3MTU3Mjg4IDIzLjMyODQyNzEsNiAyMi41LDYgQzIxLjY3MTU3MjksNiAyMSw2LjY3MTU3Mjg4IDIxLDcuNSBDMjEsOC4zMjg0MjcxMiAyMS42NzE1NzI5LDkgMjIuNSw5IFogTTIyLjUsMjQgQzIzLjMyODQyNzEsMjQgMjQsMjMuMzI4NDI3MSAyNCwyMi41IEMyNCwyMS42NzE1NzI5IDIzLjMyODQyNzEsMjEgMjIuNSwyMSBDMjEuNjcxNTcyOSwyMSAyMSwyMS42NzE1NzI5IDIxLDIyLjUgQzIxLDIzLjMyODQyNzEgMjEuNjcxNTcyOSwyNCAyMi41LDI0IFogTTcuNSwyNCBDOC4zMjg0MjcxMiwyNCA5LDIzLjMyODQyNzEgOSwyMi41IEM5LDIxLjY3MTU3MjkgOC4zMjg0MjcxMiwyMSA3LjUsMjEgQzYuNjcxNTcyODgsMjEgNiwyMS42NzE1NzI5IDYsMjIuNSBDNiwyMy4zMjg0MjcxIDYuNjcxNTcyODgsMjQgNy41LDI0IFoiLz4KICA8L2RlZnM+CiAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMyAtMykiPgogICAgPG1hc2sgaWQ9InJlY3RhbmdsZS1iIiBmaWxsPSIjZmZmIj4KICAgICAgPHVzZSB4bGluazpocmVmPSIjcmVjdGFuZ2xlLWEiLz4KICAgIDwvbWFzaz4KICAgIDx1c2UgZmlsbD0iIzVCNUI1QiIgZmlsbC1ydWxlPSJub256ZXJvIiB4bGluazpocmVmPSIjcmVjdGFuZ2xlLWEiLz4KICAgIDxnIGZpbGw9IiM1QjVCNUIiIG1hc2s9InVybCgjcmVjdGFuZ2xlLWIpIj4KICAgICAgPHJlY3Qgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K); }\n\n.leaflet-pm-toolbar .leaflet-pm-icon-delete {\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjUgKDY3NDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BdG9tcy9JY29ucy9Ub29scy9FcmFzZXI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNMTcuNzg3NDIxOSwxOC40ODEyNTUyIEwxMS42NDgwMDc5LDEzLjM0OTgxODQgTDYuNDA0NjYwMDksMTkuMzgxNjAwMSBMMTAuNTUzOTE1NiwyMi45ODg0OTI5IEwxMy44NjkzNCwyMi45ODg0OTI5IEwxNy43ODc0MjE5LDE4LjQ4MTI1NTIgWiBNMTYuNTA3NDI1MiwyMi45ODg0OTI5IEwyNi4wMDAwMDAyLDIyLjk4ODQ5MjkgTDI2LjAwMDAwMDIsMjQuOTg4NDkyOSBMMTAuMDAwMDAwMiwyNC45ODg0OTI5IEw5LjgwNzA4MzEzLDI0Ljk4ODQ5MjkgTDUuMDkyNTQyMDQsMjAuODkxMDE5MiBDNC4yNTg5MTI4NSwyMC4xNjYzNTY0IDQuMTcwNTc4MTQsMTguOTAzMTExMiA0Ljg5NTI0MDkzLDE4LjA2OTQ4MiBMMTYuMDQ4MjQ0NCw1LjIzOTQxOTE2IEMxNi43NzI5MDcyLDQuNDA1Nzg5OTggMTguMDM2MTUyNSw0LjMxNzQ1NTI2IDE4Ljg2OTc4MTYsNS4wNDIxMTgwNiBMMjQuOTA3NDU4MywxMC4yOTA1OTAzIEMyNS43NDEwODc1LDExLjAxNTI1MzEgMjUuODI5NDIyMiwxMi4yNzg0OTgzIDI1LjEwNDc1OTQsMTMuMTEyMTI3NSBMMTYuNTA3NDI1MiwyMi45ODg0OTI5IFoiIGlkPSJwYXRoLTEiPjwvcGF0aD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJTeW1ib2xzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iQXRvbXMvSWNvbnMvVG9vbHMvRXJhc2VyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMy4wMDAwMDAsIC0zLjAwMDAwMCkiPgogICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgIDx1c2UgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSIjNUI1QjVCIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+); }\n\n.leaflet-pm-toolbar .leaflet-pm-icon-edit {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgPGRlZnM+CiAgICA8cGF0aCBpZD0iZWRpdF9hbmNob3ItYSIgZD0iTTEzLjUsMTEgQzExLjU2NzAwMzQsMTEgMTAsOS40MzI5OTY2MiAxMCw3LjUgQzEwLDUuNTY3MDAzMzggMTEuNTY3MDAzNCw0IDEzLjUsNCBDMTUuNDMyOTk2Niw0IDE3LDUuNTY3MDAzMzggMTcsNy41IEMxNyw5LjQzMjk5NjYyIDE1LjQzMjk5NjYsMTEgMTMuNSwxMSBaIE0xMy41LDkgQzE0LjMyODQyNzEsOSAxNSw4LjMyODQyNzEyIDE1LDcuNSBDMTUsNi42NzE1NzI4OCAxNC4zMjg0MjcxLDYgMTMuNSw2IEMxMi42NzE1NzI5LDYgMTIsNi42NzE1NzI4OCAxMiw3LjUgQzEyLDguMzI4NDI3MTIgMTIuNjcxNTcyOSw5IDEzLjUsOSBaIE0xMi4wMDAyODg5LDcuNTI5NzM4OTMgQzEyLjAxMjU5ODMsOC4xNjI3MzY3MiAxMi40MTcwMTk3LDguNjk5NjY0MyAxMi45ODA3MTExLDguOTA3Njc5NjYgTDMsMTUgTDMsMTMgTDEyLjAwMDI4ODksNy41Mjk3Mzg5MyBaIE0xNC4yMTcyNzIyLDYuMTgyMjg0NzIgTDE5LjQ1MzEyNSwzIEwyMi42NTg5MzU1LDMgTDE0Ljk4OTEwMiw3LjY4MTczODg1IEMxNC45OTYyOTcxLDcuNjIyMTY0NTkgMTUsNy41NjE1MTQ3MiAxNSw3LjUgQzE1LDYuOTMxMzgzODEgMTQuNjgzNjA5OCw2LjQzNjY2NDUgMTQuMjE3MjcyMiw2LjE4MjI4NDcyIFogTTIzLjQ0MzQwNDIsMTkuMjg1MTczNiBMMjAuMTI4Mjc5OSwxOS4yODUxNzM2IEwyMS44NzI5OTgzLDIzLjUzNDk1MjUgQzIxLjk5NDUyOTYsMjMuODI5NTc3MyAyMS44NTU2NTQ2LDI0LjE1OTkyMDkgMjEuNTc3ODczNCwyNC4yODQ5MjA4IEwyMC4wNDE0Njc1LDI0Ljk1NDUxNDIgQzE5Ljc1NTA2MTMsMjUuMDc5NTE0MSAxOS40MzM4NzM4LDI0LjkzNjY3MDQgMTkuMzEyMzQyNiwyNC42NTA5NTE4IEwxNy42NTQ0MzY3LDIwLjYxNTQ1NDEgTDE0Ljk0NjE4NzMsMjMuNDAxMDE1MSBDMTQuNTg1MjgxMSwyMy43NzIxNzExIDE0LDIzLjQ4NjA0NjMgMTQsMjIuOTk5MjY1MyBMMTQsOS41NzE4MzUzMyBDMTQsOS4wNTkzMzU2MSAxNC42MjI1MzExLDguODA5NDkyIDE0Ljk0NjE1Niw5LjE3MDA4NTU1IEwyMy44MzQwMjkyLDE4LjMxMjAxNzkgQzI0LjE5MjUyOTEsMTguNjYxMzYxNSAyMy45Mjc5OTc5LDE5LjI4NTE3MzYgMjMuNDQzNDA0MiwxOS4yODUxNzM2IFoiLz4KICA8L2RlZnM+CiAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMyAtMykiPgogICAgPG1hc2sgaWQ9ImVkaXRfYW5jaG9yLWIiIGZpbGw9IiNmZmYiPgogICAgICA8dXNlIHhsaW5rOmhyZWY9IiNlZGl0X2FuY2hvci1hIi8+CiAgICA8L21hc2s+CiAgICA8dXNlIGZpbGw9IiM1QjVCNUIiIGZpbGwtcnVsZT0ibm9uemVybyIgeGxpbms6aHJlZj0iI2VkaXRfYW5jaG9yLWEiLz4KICAgIDxnIGZpbGw9IiM1QjVCNUIiIG1hc2s9InVybCgjZWRpdF9hbmNob3ItYikiPgogICAgICA8cmVjdCB3aWR0aD0iMzAiIGhlaWdodD0iMzAiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=); }\n\n.leaflet-pm-toolbar .leaflet-pm-icon-drag {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgPGRlZnM+CiAgICA8cGF0aCBpZD0ibW92ZS1hIiBkPSJNMjEsMTQgTDIxLDEwIEwyNywxNSBMMjEsMjAgTDIxLDE2IEwxNiwxNiBMMTYsMjEgTDIwLDIxIEwxNSwyNyBMMTAsMjEgTDE0LDIxIEwxNCwxNiBMOSwxNiBMOSwyMCBMMywxNSBMOSwxMCBMOSwxNCBMMTQsMTQgTDE0LDkgTDEwLDkgTDE1LDMgTDIwLDkgTDE2LDkgTDE2LDE0IEwyMSwxNCBaIi8+CiAgPC9kZWZzPgogIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMgLTMpIj4KICAgIDxtYXNrIGlkPSJtb3ZlLWIiIGZpbGw9IiNmZmYiPgogICAgICA8dXNlIHhsaW5rOmhyZWY9IiNtb3ZlLWEiLz4KICAgIDwvbWFzaz4KICAgIDx1c2UgZmlsbD0iI0Q4RDhEOCIgeGxpbms6aHJlZj0iI21vdmUtYSIvPgogICAgPGcgZmlsbD0iIzVCNUI1QiIgbWFzaz0idXJsKCNtb3ZlLWIpIj4KICAgICAgPHJlY3Qgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K); }\n\n.leaflet-pm-toolbar .leaflet-pm-icon-cut {\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjUgKDY3NDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BdG9tcy9JY29ucy9Ub29scy9TY2lzc29yczwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxwYXRoIGQ9Ik0xMi45NjkxNTc0LDEzLjQ5Mzk0MzUgTDIxLjAzMTcwMzIsNS41NDE2NzAxMyBMMjMuNDY0OTQ5OSw1LjY3NzIyOTU3IEwxNy4wNDcwNzEzLDE0LjUxMDY4MTYgTDI3LjU2NjAzMzYsMTcuMTMzMzUzNSBMMjUuNzg5MTk0NCwxOC44MDEyNTg4IEwxNC41ODU0OTUxLDE3Ljg5ODc1MDYgTDEzLjY0ODc5NTUsMTkuMTg4MDA3IEMxMy43OTQ2MzksMTkuMjY1MDk1OCAxMy45MzY3OTg1LDE5LjM1MzQ0MTcgMTQuMDc0MTM3NywxOS40NTMyMjQ1IEMxNS42Mzc5NjQ4LDIwLjU4OTQxMTQgMTUuOTg0NjM1NywyMi43NzgyMDUyIDE0Ljg0ODQ0ODgsMjQuMzQyMDMyNCBDMTMuNzEyMjYxOSwyNS45MDU4NTk1IDExLjUyMzQ2ODEsMjYuMjUyNTMwNCA5Ljk1OTY0MDk2LDI1LjExNjM0MzUgQzguMzk1ODEzODQsMjMuOTgwMTU2NSA4LjA0OTE0Mjk2LDIxLjc5MTM2MjcgOS4xODUzMjk4NiwyMC4yMjc1MzU2IEM5Ljc0NTg3Mjc2LDE5LjQ1NjAxNDUgMTAuNTYyNjE4OCwxOC45ODA3NDc1IDExLjQzNDEyMTgsMTguODMzNjQwNyBMMTIuNjgwNTY1NiwxNy4xMTgwNTc5IEwxMi41MjM5NzI0LDE2LjM3NDcyMTYgTDExLjk1MDY5MzIsMTUuMzAxMjM5MSBMOS44OTMxMDY0NiwxNC43ODgyMjUxIEM5LjEzMDkzNzk2LDE1LjIzNTcyNjEgOC4xOTk3Nzg1NCwxNS4zOTY2NDQ3IDcuMjc0NDUzNTUsMTUuMTY1OTM1MiBDNS4zOTg4NzUxOSwxNC42OTgzMDEgNC4yNTc1MTA5NCwxMi43OTg3NTE5IDQuNzI1MTQ1MTUsMTAuOTIzMTczNiBDNS4xOTI3NzkzNSw5LjA0NzU5NTE5IDcuMDkyMzI4NDYsNy45MDYyMzA5NCA4Ljk2NzkwNjgyLDguMzczODY1MTUgQzEwLjg0MzQ4NTIsOC44NDE0OTkzNSAxMS45ODQ4NDk0LDEwLjc0MTA0ODUgMTEuNTE3MjE1MiwxMi42MTY2MjY4IEMxMS40NzYxNDY0LDEyLjc4MTM0NDkgMTEuNDI0MDMzNSwxMi45NDA0MDAxIDExLjM2MTg2MjcsMTMuMDkzMTk5OSBMMTIuOTY5MTU3NCwxMy40OTM5NDM1IFogTTcuNzU4Mjk3MzUsMTMuMjI1MzQzOCBDOC41NjIxMTY2NCwxMy40MjU3NTg0IDkuMzc2MjA5MTIsMTIuOTM2NjAyMyA5LjU3NjYyMzc4LDEyLjEzMjc4MyBDOS43NzcwMzg0NCwxMS4zMjg5NjM3IDkuMjg3ODgyMzMsMTAuNTE0ODcxMyA4LjQ4NDA2MzAzLDEwLjMxNDQ1NjYgQzcuNjgwMjQzNzMsMTAuMTE0MDQxOSA2Ljg2NjE1MTI2LDEwLjYwMzE5OCA2LjY2NTczNjYsMTEuNDA3MDE3MyBDNi40NjUzMjE5NCwxMi4yMTA4MzY2IDYuOTU0NDc4MDUsMTMuMDI0OTI5MSA3Ljc1ODI5NzM1LDEzLjIyNTM0MzggWiBNMTAuODAzMzYzOSwyMS40MDMxMDYxIEMxMC4zMTY0MjY2LDIyLjA3MzMxNzcgMTAuNDY0OTk5OCwyMy4wMTEzNzIyIDExLjEzNTIxMTUsMjMuNDk4MzA5NSBDMTEuODA1NDIzMSwyMy45ODUyNDY3IDEyLjc0MzQ3NzYsMjMuODM2NjczNSAxMy4yMzA0MTQ4LDIzLjE2NjQ2MTkgQzEzLjcxNzM1MjEsMjIuNDk2MjUwMiAxMy41Njg3Nzg4LDIxLjU1ODE5NTcgMTIuODk4NTY3MiwyMS4wNzEyNTg1IEMxMi4yMjgzNTU2LDIwLjU4NDMyMTIgMTEuMjkwMzAxMSwyMC43MzI4OTQ1IDEwLjgwMzM2MzksMjEuNDAzMTA2MSBaIiBpZD0icGF0aC0xIj48L3BhdGg+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iU3ltYm9scyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkF0b21zL0ljb25zL1Rvb2xzL1NjaXNzb3JzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMy4wMDAwMDAsIC0zLjAwMDAwMCkiPgogICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgIDx1c2UgaWQ9Ik1hc2siIGZpbGw9IiM1QjVCNUIiIGZpbGwtcnVsZT0ibm9uemVybyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYuMDkzMTk0LCAxNS42NjMzNTEpIHJvdGF0ZSgtMzIuMDAwMDAwKSB0cmFuc2xhdGUoLTE2LjA5MzE5NCwgLTE1LjY2MzM1MSkgIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==); }\n\n.leaflet-buttons-control-button:hover {\n  cursor: pointer;\n  background-color: #f4f4f4; }\n\n.active .leaflet-buttons-control-button {\n  box-shadow: inset 0 -1px 5px 2px rgba(81, 77, 77, 0.31); }\n\n.leaflet-buttons-control-text-hide {\n  display: none; }\n\n.button-container {\n  position: relative; }\n\n.button-container .leaflet-pm-actions-container {\n  z-index: 2;\n  position: absolute;\n  top: 0;\n  left: 31px;\n  display: none;\n  white-space: nowrap; }\n\n.leaflet-right\n.leaflet-pm-toolbar\n.button-container\n.leaflet-pm-actions-container {\n  right: 31px;\n  left: auto; }\n\n.button-container.active .leaflet-pm-actions-container {\n  display: block; }\n\n.button-container .leaflet-pm-actions-container .leaflet-pm-action:last-child {\n  border-radius: 0px 3px 3px 0px;\n  border-right: 0px; }\n\n.button-container .leaflet-pm-actions-container .leaflet-pm-action {\n  padding: 0px 10px;\n  background-color: #666;\n  color: #fff;\n  display: inline-block;\n  width: auto;\n  border-right: 1px solid #eee;\n  user-select: none; }\n\n.button-container .leaflet-pm-actions-container .leaflet-pm-action:hover {\n  cursor: pointer;\n  background-color: #777; }\n"]}]);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/lib/loader.js!./styles/leaflet.css":
/*!********************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ref--8-1!../node_modules/postcss-loader/src??ref--8-2!../node_modules/sass-loader/lib/loader.js!./styles/leaflet.css ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "../node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./images/layers.png */ "./styles/images/layers.png");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ./images/layers-2x.png */ "./styles/images/layers-2x.png");
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../images/marker-icon.png */ "./images/marker-icon.png");
exports = module.exports = ___CSS_LOADER_API_IMPORT___(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
// Module
exports.push([module.i, "/* required styles */\n.leaflet-pane,\n.leaflet-tile,\n.leaflet-marker-icon,\n.leaflet-marker-shadow,\n.leaflet-tile-container,\n.leaflet-pane > svg,\n.leaflet-pane > canvas,\n.leaflet-zoom-box,\n.leaflet-image-layer,\n.leaflet-layer {\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.leaflet-container {\n  overflow: hidden; }\n\n.leaflet-tile,\n.leaflet-marker-icon,\n.leaflet-marker-shadow {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n  -webkit-user-drag: none; }\n\n/* Safari renders non-retina tile on retina better with this, but Chrome is worse */\n.leaflet-safari .leaflet-tile {\n  image-rendering: -webkit-optimize-contrast; }\n\n/* hack that prevents hw layers \"stretching\" when loading new tiles */\n.leaflet-safari .leaflet-tile-container {\n  width: 1600px;\n  height: 1600px;\n  -webkit-transform-origin: 0 0; }\n\n.leaflet-marker-icon,\n.leaflet-marker-shadow {\n  display: block; }\n\n/* .leaflet-container svg: reset svg max-width decleration shipped in Joomla! (joomla.org) 3.x */\n/* .leaflet-container img: map is broken in FF if you have max-width: 100% on tiles */\n.leaflet-container .leaflet-overlay-pane svg,\n.leaflet-container .leaflet-marker-pane img,\n.leaflet-container .leaflet-shadow-pane img,\n.leaflet-container .leaflet-tile-pane img,\n.leaflet-container img.leaflet-image-layer {\n  max-width: none !important;\n  max-height: none !important; }\n\n.leaflet-container.leaflet-touch-zoom {\n  touch-action: pan-x pan-y; }\n\n.leaflet-container.leaflet-touch-drag {\n  /* Fallback for FF which doesn't support pinch-zoom */\n  touch-action: none;\n  touch-action: pinch-zoom; }\n\n.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {\n  touch-action: none; }\n\n.leaflet-container {\n  -webkit-tap-highlight-color: transparent; }\n\n.leaflet-container a {\n  -webkit-tap-highlight-color: rgba(51, 181, 229, 0.4); }\n\n.leaflet-tile {\n  -webkit-filter: inherit;\n          filter: inherit;\n  visibility: hidden; }\n\n.leaflet-tile-loaded {\n  visibility: inherit; }\n\n.leaflet-zoom-box {\n  width: 0;\n  height: 0;\n  box-sizing: border-box;\n  z-index: 800; }\n\n/* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */\n.leaflet-overlay-pane svg {\n  -moz-user-select: none; }\n\n.leaflet-pane {\n  z-index: 400; }\n\n.leaflet-tile-pane {\n  z-index: 200; }\n\n.leaflet-overlay-pane {\n  z-index: 400; }\n\n.leaflet-shadow-pane {\n  z-index: 500; }\n\n.leaflet-marker-pane {\n  z-index: 600; }\n\n.leaflet-tooltip-pane {\n  z-index: 650; }\n\n.leaflet-popup-pane {\n  z-index: 700; }\n\n.leaflet-map-pane canvas {\n  z-index: 100; }\n\n.leaflet-map-pane svg {\n  z-index: 200; }\n\n.leaflet-vml-shape {\n  width: 1px;\n  height: 1px; }\n\n.lvml {\n  behavior: url(#default#VML);\n  display: inline-block;\n  position: absolute; }\n\n/* control positioning */\n.leaflet-control {\n  position: relative;\n  z-index: 800;\n  pointer-events: visiblePainted;\n  /* IE 9-10 doesn't have auto */\n  pointer-events: auto; }\n\n.leaflet-top,\n.leaflet-bottom {\n  position: absolute;\n  z-index: 1000;\n  pointer-events: none; }\n\n.leaflet-top {\n  top: 0; }\n\n.leaflet-right {\n  right: 0; }\n\n.leaflet-bottom {\n  bottom: 0; }\n\n.leaflet-left {\n  left: 0; }\n\n.leaflet-control {\n  float: left;\n  clear: both; }\n\n.leaflet-right .leaflet-control {\n  float: right; }\n\n.leaflet-top .leaflet-control {\n  margin-top: 10px; }\n\n.leaflet-bottom .leaflet-control {\n  margin-bottom: 10px; }\n\n.leaflet-left .leaflet-control {\n  margin-left: 10px; }\n\n.leaflet-right .leaflet-control {\n  margin-right: 10px; }\n\n/* zoom and fade animations */\n.leaflet-fade-anim .leaflet-tile {\n  will-change: opacity; }\n\n.leaflet-fade-anim .leaflet-popup {\n  opacity: 0;\n  -webkit-transition: opacity 0.2s linear;\n  transition: opacity 0.2s linear; }\n\n.leaflet-fade-anim .leaflet-map-pane .leaflet-popup {\n  opacity: 1; }\n\n.leaflet-zoom-animated {\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0; }\n\n.leaflet-zoom-anim .leaflet-zoom-animated {\n  will-change: transform; }\n\n.leaflet-zoom-anim .leaflet-zoom-animated {\n  -webkit-transition: -webkit-transform 0.25s cubic-bezier(0, 0, 0.25, 1);\n  transition: -webkit-transform 0.25s cubic-bezier(0, 0, 0.25, 1);\n  transition: transform 0.25s cubic-bezier(0, 0, 0.25, 1);\n  transition: transform 0.25s cubic-bezier(0, 0, 0.25, 1), -webkit-transform 0.25s cubic-bezier(0, 0, 0.25, 1); }\n\n.leaflet-zoom-anim .leaflet-tile,\n.leaflet-pan-anim .leaflet-tile {\n  -webkit-transition: none;\n  transition: none; }\n\n.leaflet-zoom-anim .leaflet-zoom-hide {\n  visibility: hidden; }\n\n/* cursors */\n.leaflet-interactive {\n  cursor: pointer; }\n\n.leaflet-grab {\n  cursor: -webkit-grab;\n  cursor: -moz-grab; }\n\n.leaflet-crosshair,\n.leaflet-crosshair .leaflet-interactive {\n  cursor: crosshair; }\n\n.leaflet-popup-pane,\n.leaflet-control {\n  cursor: auto; }\n\n.leaflet-dragging .leaflet-grab,\n.leaflet-dragging .leaflet-grab .leaflet-interactive,\n.leaflet-dragging .leaflet-marker-draggable {\n  cursor: move;\n  cursor: -webkit-grabbing;\n  cursor: -moz-grabbing; }\n\n/* marker & overlays interactivity */\n.leaflet-marker-icon,\n.leaflet-marker-shadow,\n.leaflet-image-layer,\n.leaflet-pane > svg path,\n.leaflet-tile-container {\n  pointer-events: none; }\n\n.leaflet-marker-icon.leaflet-interactive,\n.leaflet-image-layer.leaflet-interactive,\n.leaflet-pane > svg path.leaflet-interactive {\n  pointer-events: visiblePainted;\n  /* IE 9-10 doesn't have auto */\n  pointer-events: auto; }\n\n/* visual tweaks */\n.leaflet-container {\n  background: #ddd;\n  outline: 0; }\n\n.leaflet-container a {\n  color: #0078a8; }\n\n.leaflet-container a.leaflet-active {\n  outline: 2px solid orange; }\n\n.leaflet-zoom-box {\n  border: 2px dotted #38f;\n  background: rgba(255, 255, 255, 0.5); }\n\n/* general typography */\n.leaflet-container {\n  font: 12px/1.5 'Helvetica Neue', Arial, Helvetica, sans-serif; }\n\n/* general toolbar styles */\n.leaflet-bar {\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.65);\n  border-radius: 4px; }\n\n.leaflet-bar a,\n.leaflet-bar a:hover {\n  background-color: #fff;\n  border-bottom: 1px solid #ccc;\n  width: 26px;\n  height: 26px;\n  line-height: 26px;\n  display: block;\n  text-align: center;\n  text-decoration: none;\n  color: black; }\n\n.leaflet-bar a,\n.leaflet-control-layers-toggle {\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  display: block; }\n\n.leaflet-bar a:hover {\n  background-color: #f4f4f4; }\n\n.leaflet-bar a:first-child {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px; }\n\n.leaflet-bar a:last-child {\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  border-bottom: none; }\n\n.leaflet-bar a.leaflet-disabled {\n  cursor: default;\n  background-color: #f4f4f4;\n  color: #bbb; }\n\n.leaflet-touch .leaflet-bar a {\n  width: 30px;\n  height: 30px;\n  line-height: 30px; }\n\n.leaflet-touch .leaflet-bar a:first-child {\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px; }\n\n.leaflet-touch .leaflet-bar a:last-child {\n  border-bottom-left-radius: 2px;\n  border-bottom-right-radius: 2px; }\n\n/* zoom control */\n.leaflet-control-zoom-in,\n.leaflet-control-zoom-out {\n  font: bold 18px 'Lucida Console', Monaco, monospace;\n  text-indent: 1px; }\n\n.leaflet-touch .leaflet-control-zoom-in,\n.leaflet-touch .leaflet-control-zoom-out {\n  font-size: 22px; }\n\n/* layers control */\n.leaflet-control-layers {\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.4);\n  background: #fff;\n  border-radius: 5px; }\n\n.leaflet-control-layers-toggle {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  width: 36px;\n  height: 36px; }\n\n.leaflet-retina .leaflet-control-layers-toggle {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: 26px 26px; }\n\n.leaflet-touch .leaflet-control-layers-toggle {\n  width: 44px;\n  height: 44px; }\n\n.leaflet-control-layers .leaflet-control-layers-list,\n.leaflet-control-layers-expanded .leaflet-control-layers-toggle {\n  display: none; }\n\n.leaflet-control-layers-expanded .leaflet-control-layers-list {\n  display: block;\n  position: relative; }\n\n.leaflet-control-layers-expanded {\n  padding: 6px 10px 6px 6px;\n  color: #333;\n  background: #fff; }\n\n.leaflet-control-layers-scrollbar {\n  overflow-y: scroll;\n  overflow-x: hidden;\n  padding-right: 5px; }\n\n.leaflet-control-layers-selector {\n  margin-top: 2px;\n  position: relative;\n  top: 1px; }\n\n.leaflet-control-layers label {\n  display: block; }\n\n.leaflet-control-layers-separator {\n  height: 0;\n  border-top: 1px solid #ddd;\n  margin: 5px -10px 5px -6px; }\n\n/* Default icon URLs */\n.leaflet-default-icon-path {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + "); }\n\n/* attribution and scale controls */\n.leaflet-container .leaflet-control-attribution {\n  background: #fff;\n  background: rgba(255, 255, 255, 0.7);\n  margin: 0; }\n\n.leaflet-control-attribution,\n.leaflet-control-scale-line {\n  padding: 0 5px;\n  color: #333; }\n\n.leaflet-control-attribution a {\n  text-decoration: none; }\n\n.leaflet-control-attribution a:hover {\n  text-decoration: underline; }\n\n.leaflet-container .leaflet-control-attribution,\n.leaflet-container .leaflet-control-scale {\n  font-size: 11px; }\n\n.leaflet-left .leaflet-control-scale {\n  margin-left: 5px; }\n\n.leaflet-bottom .leaflet-control-scale {\n  margin-bottom: 5px; }\n\n.leaflet-control-scale-line {\n  border: 2px solid #777;\n  border-top: none;\n  line-height: 1.1;\n  padding: 2px 5px 1px;\n  font-size: 11px;\n  white-space: nowrap;\n  overflow: hidden;\n  box-sizing: border-box;\n  background: #fff;\n  background: rgba(255, 255, 255, 0.5); }\n\n.leaflet-control-scale-line:not(:first-child) {\n  border-top: 2px solid #777;\n  border-bottom: none;\n  margin-top: -2px; }\n\n.leaflet-control-scale-line:not(:first-child):not(:last-child) {\n  border-bottom: 2px solid #777; }\n\n.leaflet-touch .leaflet-control-attribution,\n.leaflet-touch .leaflet-control-layers,\n.leaflet-touch .leaflet-bar {\n  box-shadow: none; }\n\n.leaflet-touch .leaflet-control-layers,\n.leaflet-touch .leaflet-bar {\n  border: 2px solid rgba(0, 0, 0, 0.2);\n  background-clip: padding-box; }\n\n/* popup */\n.leaflet-popup {\n  position: absolute;\n  text-align: center;\n  margin-bottom: 20px; }\n\n.leaflet-popup-content-wrapper {\n  padding: 1px;\n  text-align: left;\n  border-radius: 12px; }\n\n.leaflet-popup-content {\n  margin: 13px 19px;\n  line-height: 1.4; }\n\n.leaflet-popup-content p {\n  margin: 18px 0; }\n\n.leaflet-popup-tip-container {\n  width: 40px;\n  height: 20px;\n  position: absolute;\n  left: 50%;\n  margin-left: -20px;\n  overflow: hidden;\n  pointer-events: none; }\n\n.leaflet-popup-tip {\n  width: 17px;\n  height: 17px;\n  padding: 1px;\n  margin: -10px auto 0;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg); }\n\n.leaflet-popup-content-wrapper,\n.leaflet-popup-tip {\n  background: white;\n  color: #333;\n  box-shadow: 0 3px 14px rgba(0, 0, 0, 0.4); }\n\n.leaflet-container a.leaflet-popup-close-button {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 4px 4px 0 0;\n  border: none;\n  text-align: center;\n  width: 18px;\n  height: 14px;\n  font: 16px/14px Tahoma, Verdana, sans-serif;\n  color: #c3c3c3;\n  text-decoration: none;\n  font-weight: bold;\n  background: transparent; }\n\n.leaflet-container a.leaflet-popup-close-button:hover {\n  color: #999; }\n\n.leaflet-popup-scrolled {\n  overflow: auto;\n  border-bottom: 1px solid #ddd;\n  border-top: 1px solid #ddd; }\n\n.leaflet-oldie .leaflet-popup-content-wrapper {\n  zoom: 1; }\n\n.leaflet-oldie .leaflet-popup-tip {\n  width: 24px;\n  margin: 0 auto;\n  -ms-filter: 'progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)';\n  filter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678); }\n\n.leaflet-oldie .leaflet-popup-tip-container {\n  margin-top: -1px; }\n\n.leaflet-oldie .leaflet-control-zoom,\n.leaflet-oldie .leaflet-control-layers,\n.leaflet-oldie .leaflet-popup-content-wrapper,\n.leaflet-oldie .leaflet-popup-tip {\n  border: 1px solid #999; }\n\n/* div icon */\n.leaflet-div-icon {\n  background: #fff;\n  border: 1px solid #666; }\n\n/* Tooltip */\n/* Base styles for the element that has a tooltip */\n.leaflet-tooltip {\n  position: absolute;\n  padding: 6px;\n  background-color: #fff;\n  border: 1px solid #fff;\n  border-radius: 3px;\n  color: #222;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  pointer-events: none;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4); }\n\n.leaflet-tooltip.leaflet-clickable {\n  cursor: pointer;\n  pointer-events: auto; }\n\n.leaflet-tooltip-top:before,\n.leaflet-tooltip-bottom:before,\n.leaflet-tooltip-left:before,\n.leaflet-tooltip-right:before {\n  position: absolute;\n  pointer-events: none;\n  border: 6px solid transparent;\n  background: transparent;\n  content: ''; }\n\n/* Directions */\n.leaflet-tooltip-bottom {\n  margin-top: 6px; }\n\n.leaflet-tooltip-top {\n  margin-top: -6px; }\n\n.leaflet-tooltip-bottom:before,\n.leaflet-tooltip-top:before {\n  left: 50%;\n  margin-left: -6px; }\n\n.leaflet-tooltip-top:before {\n  bottom: 0;\n  margin-bottom: -12px;\n  border-top-color: #fff; }\n\n.leaflet-tooltip-bottom:before {\n  top: 0;\n  margin-top: -12px;\n  margin-left: -6px;\n  border-bottom-color: #fff; }\n\n.leaflet-tooltip-left {\n  margin-left: -6px; }\n\n.leaflet-tooltip-right {\n  margin-left: 6px; }\n\n.leaflet-tooltip-left:before,\n.leaflet-tooltip-right:before {\n  top: 50%;\n  margin-top: -6px; }\n\n.leaflet-tooltip-left:before {\n  right: 0;\n  margin-right: -12px;\n  border-left-color: #fff; }\n\n.leaflet-tooltip-right:before {\n  left: 0;\n  margin-left: -12px;\n  border-right-color: #fff; }\n", "",{"version":3,"sources":["leaflet.css"],"names":[],"mappings":"AAAA,oBAAoB;AACpB;;;;;;;;;;EAUE,kBAAkB;EAClB,OAAO;EACP,MAAM,EAAE;;AAEV;EACE,gBAAgB,EAAE;;AAEpB;;;EAGE,yBAAyB;EACzB,sBAAsB;EACtB,qBAAiB;MAAjB,iBAAiB;EACjB,uBAAuB,EAAE;;AAE3B,mFAAmF;AACnF;EACE,0CAA0C,EAAE;;AAE9C,qEAAqE;AACrE;EACE,aAAa;EACb,cAAc;EACd,6BAA6B,EAAE;;AAEjC;;EAEE,cAAc,EAAE;;AAElB,gGAAgG;AAChG,qFAAqF;AACrF;;;;;EAKE,0BAA0B;EAC1B,2BAA2B,EAAE;;AAE/B;EAEE,yBAAyB,EAAE;;AAE7B;EAEE,qDAAqD;EACrD,kBAAkB;EAClB,wBAAwB,EAAE;;AAE5B;EAEE,kBAAkB,EAAE;;AAEtB;EACE,wCAAwC,EAAE;;AAE5C;EACE,oDAAoD,EAAE;;AAExD;EACE,uBAAe;UAAf,eAAe;EACf,kBAAkB,EAAE;;AAEtB;EACE,mBAAmB,EAAE;;AAEvB;EACE,QAAQ;EACR,SAAS;EAET,sBAAsB;EACtB,YAAY,EAAE;;AAEhB,uEAAuE;AACvE;EACE,sBAAsB,EAAE;;AAE1B;EACE,YAAY,EAAE;;AAEhB;EACE,YAAY,EAAE;;AAEhB;EACE,YAAY,EAAE;;AAEhB;EACE,YAAY,EAAE;;AAEhB;EACE,YAAY,EAAE;;AAEhB;EACE,YAAY,EAAE;;AAEhB;EACE,YAAY,EAAE;;AAEhB;EACE,YAAY,EAAE;;AAEhB;EACE,YAAY,EAAE;;AAEhB;EACE,UAAU;EACV,WAAW,EAAE;;AAEf;EACE,2BAA2B;EAC3B,qBAAqB;EACrB,kBAAkB,EAAE;;AAEtB,wBAAwB;AACxB;EACE,kBAAkB;EAClB,YAAY;EACZ,8BAA8B;EAC9B,8BAA8B;EAC9B,oBAAoB,EAAE;;AAExB;;EAEE,kBAAkB;EAClB,aAAa;EACb,oBAAoB,EAAE;;AAExB;EACE,MAAM,EAAE;;AAEV;EACE,QAAQ,EAAE;;AAEZ;EACE,SAAS,EAAE;;AAEb;EACE,OAAO,EAAE;;AAEX;EACE,WAAW;EACX,WAAW,EAAE;;AAEf;EACE,YAAY,EAAE;;AAEhB;EACE,gBAAgB,EAAE;;AAEpB;EACE,mBAAmB,EAAE;;AAEvB;EACE,iBAAiB,EAAE;;AAErB;EACE,kBAAkB,EAAE;;AAEtB,6BAA6B;AAC7B;EACE,oBAAoB,EAAE;;AAExB;EACE,UAAU;EACV,uCAAuC;EAGvC,+BAA+B,EAAE;;AAEnC;EACE,UAAU,EAAE;;AAEd;EACE,6BAA6B;EAE7B,qBAAqB,EAAE;;AAEzB;EACE,sBAAsB,EAAE;;AAE1B;EACE,uEAAuE;EAGvE,+DAAuD;EAAvD,uDAAuD;EAAvD,4GAAuD,EAAE;;AAE3D;;EAEE,wBAAwB;EAGxB,gBAAgB,EAAE;;AAEpB;EACE,kBAAkB,EAAE;;AAEtB,YAAY;AACZ;EACE,eAAe,EAAE;;AAEnB;EACE,oBAAoB;EACpB,iBAAiB,EAAE;;AAErB;;EAEE,iBAAiB,EAAE;;AAErB;;EAEE,YAAY,EAAE;;AAEhB;;;EAGE,YAAY;EACZ,wBAAwB;EACxB,qBAAqB,EAAE;;AAEzB,oCAAoC;AACpC;;;;;EAKE,oBAAoB,EAAE;;AAExB;;;EAGE,8BAA8B;EAC9B,8BAA8B;EAC9B,oBAAoB,EAAE;;AAExB,kBAAkB;AAClB;EACE,gBAAgB;EAChB,UAAU,EAAE;;AAEd;EACE,cAAc,EAAE;;AAElB;EACE,yBAAyB,EAAE;;AAE7B;EACE,uBAAuB;EACvB,oCAAoC,EAAE;;AAExC,uBAAuB;AACvB;EACE,6DAA6D,EAAE;;AAEjE,2BAA2B;AAC3B;EACE,yCAAyC;EACzC,kBAAkB,EAAE;;AAEtB;;EAEE,sBAAsB;EACtB,6BAA6B;EAC7B,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,cAAc;EACd,kBAAkB;EAClB,qBAAqB;EACrB,YAAY,EAAE;;AAEhB;;EAEE,4BAA4B;EAC5B,4BAA4B;EAC5B,cAAc,EAAE;;AAElB;EACE,yBAAyB,EAAE;;AAE7B;EACE,2BAA2B;EAC3B,4BAA4B,EAAE;;AAEhC;EACE,8BAA8B;EAC9B,+BAA+B;EAC/B,mBAAmB,EAAE;;AAEvB;EACE,eAAe;EACf,yBAAyB;EACzB,WAAW,EAAE;;AAEf;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB,EAAE;;AAErB;EACE,2BAA2B;EAC3B,4BAA4B,EAAE;;AAEhC;EACE,8BAA8B;EAC9B,+BAA+B,EAAE;;AAEnC,iBAAiB;AACjB;;EAEE,mDAAmD;EACnD,gBAAgB,EAAE;;AAEpB;;EAEE,eAAe,EAAE;;AAEnB,mBAAmB;AACnB;EACE,wCAAwC;EACxC,gBAAgB;EAChB,kBAAkB,EAAE;;AAEtB;EACE,yDAAwC;EACxC,WAAW;EACX,YAAY,EAAE;;AAEhB;EACE,yDAA2C;EAC3C,0BAA0B,EAAE;;AAE9B;EACE,WAAW;EACX,YAAY,EAAE;;AAEhB;;EAEE,aAAa,EAAE;;AAEjB;EACE,cAAc;EACd,kBAAkB,EAAE;;AAEtB;EACE,yBAAyB;EACzB,WAAW;EACX,gBAAgB,EAAE;;AAEpB;EACE,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB,EAAE;;AAEtB;EACE,eAAe;EACf,kBAAkB;EAClB,QAAQ,EAAE;;AAEZ;EACE,cAAc,EAAE;;AAElB;EACE,SAAS;EACT,0BAA0B;EAC1B,0BAA0B,EAAE;;AAE9B,sBAAsB;AACtB;EACE,yDAAgD,EAAE;;AAEpD,mCAAmC;AACnC;EACE,gBAAgB;EAChB,oCAAoC;EACpC,SAAS,EAAE;;AAEb;;EAEE,cAAc;EACd,WAAW,EAAE;;AAEf;EACE,qBAAqB,EAAE;;AAEzB;EACE,0BAA0B,EAAE;;AAE9B;;EAEE,eAAe,EAAE;;AAEnB;EACE,gBAAgB,EAAE;;AAEpB;EACE,kBAAkB,EAAE;;AAEtB;EACE,sBAAsB;EACtB,gBAAgB;EAChB,gBAAgB;EAChB,oBAAoB;EACpB,eAAe;EACf,mBAAmB;EACnB,gBAAgB;EAEhB,sBAAsB;EACtB,gBAAgB;EAChB,oCAAoC,EAAE;;AAExC;EACE,0BAA0B;EAC1B,mBAAmB;EACnB,gBAAgB,EAAE;;AAEpB;EACE,6BAA6B,EAAE;;AAEjC;;;EAGE,gBAAgB,EAAE;;AAEpB;;EAEE,oCAAoC;EACpC,4BAA4B,EAAE;;AAEhC,UAAU;AACV;EACE,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB,EAAE;;AAEvB;EACE,YAAY;EACZ,gBAAgB;EAChB,mBAAmB,EAAE;;AAEvB;EACE,iBAAiB;EACjB,gBAAgB,EAAE;;AAEpB;EACE,cAAc,EAAE;;AAElB;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,SAAS;EACT,kBAAkB;EAClB,gBAAgB;EAChB,oBAAoB,EAAE;;AAExB;EACE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,oBAAoB;EACpB,gCAAgC;EAIhC,wBAAwB,EAAE;;AAE5B;;EAEE,iBAAiB;EACjB,WAAW;EACX,yCAAyC,EAAE;;AAE7C;EACE,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,oBAAoB;EACpB,YAAY;EACZ,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,2CAA2C;EAC3C,cAAc;EACd,qBAAqB;EACrB,iBAAiB;EACjB,uBAAuB,EAAE;;AAE3B;EACE,WAAW,EAAE;;AAEf;EACE,cAAc;EACd,6BAA6B;EAC7B,0BAA0B,EAAE;;AAE9B;EACE,OAAO,EAAE;;AAEX;EACE,WAAW;EACX,cAAc;EACd,uHAAuH;EACvH,iHAAiH,EAAE;;AAErH;EACE,gBAAgB,EAAE;;AAEpB;;;;EAIE,sBAAsB,EAAE;;AAE1B,aAAa;AACb;EACE,gBAAgB;EAChB,sBAAsB,EAAE;;AAE1B,YAAY;AACZ,mDAAmD;AACnD;EACE,kBAAkB;EAClB,YAAY;EACZ,sBAAsB;EACtB,sBAAsB;EACtB,kBAAkB;EAClB,WAAW;EACX,mBAAmB;EACnB,yBAAyB;EACzB,sBAAsB;EACtB,qBAAqB;EACrB,iBAAiB;EACjB,oBAAoB;EACpB,wCAAwC,EAAE;;AAE5C;EACE,eAAe;EACf,oBAAoB,EAAE;;AAExB;;;;EAIE,kBAAkB;EAClB,oBAAoB;EACpB,6BAA6B;EAC7B,uBAAuB;EACvB,WAAW,EAAE;;AAEf,eAAe;AACf;EACE,eAAe,EAAE;;AAEnB;EACE,gBAAgB,EAAE;;AAEpB;;EAEE,SAAS;EACT,iBAAiB,EAAE;;AAErB;EACE,SAAS;EACT,oBAAoB;EACpB,sBAAsB,EAAE;;AAE1B;EACE,MAAM;EACN,iBAAiB;EACjB,iBAAiB;EACjB,yBAAyB,EAAE;;AAE7B;EACE,iBAAiB,EAAE;;AAErB;EACE,gBAAgB,EAAE;;AAEpB;;EAEE,QAAQ;EACR,gBAAgB,EAAE;;AAEpB;EACE,QAAQ;EACR,mBAAmB;EACnB,uBAAuB,EAAE;;AAE3B;EACE,OAAO;EACP,kBAAkB;EAClB,wBAAwB,EAAE","file":"leaflet.css","sourcesContent":["/* required styles */\n.leaflet-pane,\n.leaflet-tile,\n.leaflet-marker-icon,\n.leaflet-marker-shadow,\n.leaflet-tile-container,\n.leaflet-pane > svg,\n.leaflet-pane > canvas,\n.leaflet-zoom-box,\n.leaflet-image-layer,\n.leaflet-layer {\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.leaflet-container {\n  overflow: hidden; }\n\n.leaflet-tile,\n.leaflet-marker-icon,\n.leaflet-marker-shadow {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  -webkit-user-drag: none; }\n\n/* Safari renders non-retina tile on retina better with this, but Chrome is worse */\n.leaflet-safari .leaflet-tile {\n  image-rendering: -webkit-optimize-contrast; }\n\n/* hack that prevents hw layers \"stretching\" when loading new tiles */\n.leaflet-safari .leaflet-tile-container {\n  width: 1600px;\n  height: 1600px;\n  -webkit-transform-origin: 0 0; }\n\n.leaflet-marker-icon,\n.leaflet-marker-shadow {\n  display: block; }\n\n/* .leaflet-container svg: reset svg max-width decleration shipped in Joomla! (joomla.org) 3.x */\n/* .leaflet-container img: map is broken in FF if you have max-width: 100% on tiles */\n.leaflet-container .leaflet-overlay-pane svg,\n.leaflet-container .leaflet-marker-pane img,\n.leaflet-container .leaflet-shadow-pane img,\n.leaflet-container .leaflet-tile-pane img,\n.leaflet-container img.leaflet-image-layer {\n  max-width: none !important;\n  max-height: none !important; }\n\n.leaflet-container.leaflet-touch-zoom {\n  -ms-touch-action: pan-x pan-y;\n  touch-action: pan-x pan-y; }\n\n.leaflet-container.leaflet-touch-drag {\n  -ms-touch-action: pinch-zoom;\n  /* Fallback for FF which doesn't support pinch-zoom */\n  touch-action: none;\n  touch-action: pinch-zoom; }\n\n.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {\n  -ms-touch-action: none;\n  touch-action: none; }\n\n.leaflet-container {\n  -webkit-tap-highlight-color: transparent; }\n\n.leaflet-container a {\n  -webkit-tap-highlight-color: rgba(51, 181, 229, 0.4); }\n\n.leaflet-tile {\n  filter: inherit;\n  visibility: hidden; }\n\n.leaflet-tile-loaded {\n  visibility: inherit; }\n\n.leaflet-zoom-box {\n  width: 0;\n  height: 0;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  z-index: 800; }\n\n/* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */\n.leaflet-overlay-pane svg {\n  -moz-user-select: none; }\n\n.leaflet-pane {\n  z-index: 400; }\n\n.leaflet-tile-pane {\n  z-index: 200; }\n\n.leaflet-overlay-pane {\n  z-index: 400; }\n\n.leaflet-shadow-pane {\n  z-index: 500; }\n\n.leaflet-marker-pane {\n  z-index: 600; }\n\n.leaflet-tooltip-pane {\n  z-index: 650; }\n\n.leaflet-popup-pane {\n  z-index: 700; }\n\n.leaflet-map-pane canvas {\n  z-index: 100; }\n\n.leaflet-map-pane svg {\n  z-index: 200; }\n\n.leaflet-vml-shape {\n  width: 1px;\n  height: 1px; }\n\n.lvml {\n  behavior: url(#default#VML);\n  display: inline-block;\n  position: absolute; }\n\n/* control positioning */\n.leaflet-control {\n  position: relative;\n  z-index: 800;\n  pointer-events: visiblePainted;\n  /* IE 9-10 doesn't have auto */\n  pointer-events: auto; }\n\n.leaflet-top,\n.leaflet-bottom {\n  position: absolute;\n  z-index: 1000;\n  pointer-events: none; }\n\n.leaflet-top {\n  top: 0; }\n\n.leaflet-right {\n  right: 0; }\n\n.leaflet-bottom {\n  bottom: 0; }\n\n.leaflet-left {\n  left: 0; }\n\n.leaflet-control {\n  float: left;\n  clear: both; }\n\n.leaflet-right .leaflet-control {\n  float: right; }\n\n.leaflet-top .leaflet-control {\n  margin-top: 10px; }\n\n.leaflet-bottom .leaflet-control {\n  margin-bottom: 10px; }\n\n.leaflet-left .leaflet-control {\n  margin-left: 10px; }\n\n.leaflet-right .leaflet-control {\n  margin-right: 10px; }\n\n/* zoom and fade animations */\n.leaflet-fade-anim .leaflet-tile {\n  will-change: opacity; }\n\n.leaflet-fade-anim .leaflet-popup {\n  opacity: 0;\n  -webkit-transition: opacity 0.2s linear;\n  -moz-transition: opacity 0.2s linear;\n  -o-transition: opacity 0.2s linear;\n  transition: opacity 0.2s linear; }\n\n.leaflet-fade-anim .leaflet-map-pane .leaflet-popup {\n  opacity: 1; }\n\n.leaflet-zoom-animated {\n  -webkit-transform-origin: 0 0;\n  -ms-transform-origin: 0 0;\n  transform-origin: 0 0; }\n\n.leaflet-zoom-anim .leaflet-zoom-animated {\n  will-change: transform; }\n\n.leaflet-zoom-anim .leaflet-zoom-animated {\n  -webkit-transition: -webkit-transform 0.25s cubic-bezier(0, 0, 0.25, 1);\n  -moz-transition: -moz-transform 0.25s cubic-bezier(0, 0, 0.25, 1);\n  -o-transition: -o-transform 0.25s cubic-bezier(0, 0, 0.25, 1);\n  transition: transform 0.25s cubic-bezier(0, 0, 0.25, 1); }\n\n.leaflet-zoom-anim .leaflet-tile,\n.leaflet-pan-anim .leaflet-tile {\n  -webkit-transition: none;\n  -moz-transition: none;\n  -o-transition: none;\n  transition: none; }\n\n.leaflet-zoom-anim .leaflet-zoom-hide {\n  visibility: hidden; }\n\n/* cursors */\n.leaflet-interactive {\n  cursor: pointer; }\n\n.leaflet-grab {\n  cursor: -webkit-grab;\n  cursor: -moz-grab; }\n\n.leaflet-crosshair,\n.leaflet-crosshair .leaflet-interactive {\n  cursor: crosshair; }\n\n.leaflet-popup-pane,\n.leaflet-control {\n  cursor: auto; }\n\n.leaflet-dragging .leaflet-grab,\n.leaflet-dragging .leaflet-grab .leaflet-interactive,\n.leaflet-dragging .leaflet-marker-draggable {\n  cursor: move;\n  cursor: -webkit-grabbing;\n  cursor: -moz-grabbing; }\n\n/* marker & overlays interactivity */\n.leaflet-marker-icon,\n.leaflet-marker-shadow,\n.leaflet-image-layer,\n.leaflet-pane > svg path,\n.leaflet-tile-container {\n  pointer-events: none; }\n\n.leaflet-marker-icon.leaflet-interactive,\n.leaflet-image-layer.leaflet-interactive,\n.leaflet-pane > svg path.leaflet-interactive {\n  pointer-events: visiblePainted;\n  /* IE 9-10 doesn't have auto */\n  pointer-events: auto; }\n\n/* visual tweaks */\n.leaflet-container {\n  background: #ddd;\n  outline: 0; }\n\n.leaflet-container a {\n  color: #0078a8; }\n\n.leaflet-container a.leaflet-active {\n  outline: 2px solid orange; }\n\n.leaflet-zoom-box {\n  border: 2px dotted #38f;\n  background: rgba(255, 255, 255, 0.5); }\n\n/* general typography */\n.leaflet-container {\n  font: 12px/1.5 'Helvetica Neue', Arial, Helvetica, sans-serif; }\n\n/* general toolbar styles */\n.leaflet-bar {\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.65);\n  border-radius: 4px; }\n\n.leaflet-bar a,\n.leaflet-bar a:hover {\n  background-color: #fff;\n  border-bottom: 1px solid #ccc;\n  width: 26px;\n  height: 26px;\n  line-height: 26px;\n  display: block;\n  text-align: center;\n  text-decoration: none;\n  color: black; }\n\n.leaflet-bar a,\n.leaflet-control-layers-toggle {\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  display: block; }\n\n.leaflet-bar a:hover {\n  background-color: #f4f4f4; }\n\n.leaflet-bar a:first-child {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px; }\n\n.leaflet-bar a:last-child {\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  border-bottom: none; }\n\n.leaflet-bar a.leaflet-disabled {\n  cursor: default;\n  background-color: #f4f4f4;\n  color: #bbb; }\n\n.leaflet-touch .leaflet-bar a {\n  width: 30px;\n  height: 30px;\n  line-height: 30px; }\n\n.leaflet-touch .leaflet-bar a:first-child {\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px; }\n\n.leaflet-touch .leaflet-bar a:last-child {\n  border-bottom-left-radius: 2px;\n  border-bottom-right-radius: 2px; }\n\n/* zoom control */\n.leaflet-control-zoom-in,\n.leaflet-control-zoom-out {\n  font: bold 18px 'Lucida Console', Monaco, monospace;\n  text-indent: 1px; }\n\n.leaflet-touch .leaflet-control-zoom-in,\n.leaflet-touch .leaflet-control-zoom-out {\n  font-size: 22px; }\n\n/* layers control */\n.leaflet-control-layers {\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.4);\n  background: #fff;\n  border-radius: 5px; }\n\n.leaflet-control-layers-toggle {\n  background-image: url(images/layers.png);\n  width: 36px;\n  height: 36px; }\n\n.leaflet-retina .leaflet-control-layers-toggle {\n  background-image: url(images/layers-2x.png);\n  background-size: 26px 26px; }\n\n.leaflet-touch .leaflet-control-layers-toggle {\n  width: 44px;\n  height: 44px; }\n\n.leaflet-control-layers .leaflet-control-layers-list,\n.leaflet-control-layers-expanded .leaflet-control-layers-toggle {\n  display: none; }\n\n.leaflet-control-layers-expanded .leaflet-control-layers-list {\n  display: block;\n  position: relative; }\n\n.leaflet-control-layers-expanded {\n  padding: 6px 10px 6px 6px;\n  color: #333;\n  background: #fff; }\n\n.leaflet-control-layers-scrollbar {\n  overflow-y: scroll;\n  overflow-x: hidden;\n  padding-right: 5px; }\n\n.leaflet-control-layers-selector {\n  margin-top: 2px;\n  position: relative;\n  top: 1px; }\n\n.leaflet-control-layers label {\n  display: block; }\n\n.leaflet-control-layers-separator {\n  height: 0;\n  border-top: 1px solid #ddd;\n  margin: 5px -10px 5px -6px; }\n\n/* Default icon URLs */\n.leaflet-default-icon-path {\n  background-image: url(../images/marker-icon.png); }\n\n/* attribution and scale controls */\n.leaflet-container .leaflet-control-attribution {\n  background: #fff;\n  background: rgba(255, 255, 255, 0.7);\n  margin: 0; }\n\n.leaflet-control-attribution,\n.leaflet-control-scale-line {\n  padding: 0 5px;\n  color: #333; }\n\n.leaflet-control-attribution a {\n  text-decoration: none; }\n\n.leaflet-control-attribution a:hover {\n  text-decoration: underline; }\n\n.leaflet-container .leaflet-control-attribution,\n.leaflet-container .leaflet-control-scale {\n  font-size: 11px; }\n\n.leaflet-left .leaflet-control-scale {\n  margin-left: 5px; }\n\n.leaflet-bottom .leaflet-control-scale {\n  margin-bottom: 5px; }\n\n.leaflet-control-scale-line {\n  border: 2px solid #777;\n  border-top: none;\n  line-height: 1.1;\n  padding: 2px 5px 1px;\n  font-size: 11px;\n  white-space: nowrap;\n  overflow: hidden;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  background: #fff;\n  background: rgba(255, 255, 255, 0.5); }\n\n.leaflet-control-scale-line:not(:first-child) {\n  border-top: 2px solid #777;\n  border-bottom: none;\n  margin-top: -2px; }\n\n.leaflet-control-scale-line:not(:first-child):not(:last-child) {\n  border-bottom: 2px solid #777; }\n\n.leaflet-touch .leaflet-control-attribution,\n.leaflet-touch .leaflet-control-layers,\n.leaflet-touch .leaflet-bar {\n  box-shadow: none; }\n\n.leaflet-touch .leaflet-control-layers,\n.leaflet-touch .leaflet-bar {\n  border: 2px solid rgba(0, 0, 0, 0.2);\n  background-clip: padding-box; }\n\n/* popup */\n.leaflet-popup {\n  position: absolute;\n  text-align: center;\n  margin-bottom: 20px; }\n\n.leaflet-popup-content-wrapper {\n  padding: 1px;\n  text-align: left;\n  border-radius: 12px; }\n\n.leaflet-popup-content {\n  margin: 13px 19px;\n  line-height: 1.4; }\n\n.leaflet-popup-content p {\n  margin: 18px 0; }\n\n.leaflet-popup-tip-container {\n  width: 40px;\n  height: 20px;\n  position: absolute;\n  left: 50%;\n  margin-left: -20px;\n  overflow: hidden;\n  pointer-events: none; }\n\n.leaflet-popup-tip {\n  width: 17px;\n  height: 17px;\n  padding: 1px;\n  margin: -10px auto 0;\n  -webkit-transform: rotate(45deg);\n  -moz-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  -o-transform: rotate(45deg);\n  transform: rotate(45deg); }\n\n.leaflet-popup-content-wrapper,\n.leaflet-popup-tip {\n  background: white;\n  color: #333;\n  box-shadow: 0 3px 14px rgba(0, 0, 0, 0.4); }\n\n.leaflet-container a.leaflet-popup-close-button {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 4px 4px 0 0;\n  border: none;\n  text-align: center;\n  width: 18px;\n  height: 14px;\n  font: 16px/14px Tahoma, Verdana, sans-serif;\n  color: #c3c3c3;\n  text-decoration: none;\n  font-weight: bold;\n  background: transparent; }\n\n.leaflet-container a.leaflet-popup-close-button:hover {\n  color: #999; }\n\n.leaflet-popup-scrolled {\n  overflow: auto;\n  border-bottom: 1px solid #ddd;\n  border-top: 1px solid #ddd; }\n\n.leaflet-oldie .leaflet-popup-content-wrapper {\n  zoom: 1; }\n\n.leaflet-oldie .leaflet-popup-tip {\n  width: 24px;\n  margin: 0 auto;\n  -ms-filter: 'progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)';\n  filter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678); }\n\n.leaflet-oldie .leaflet-popup-tip-container {\n  margin-top: -1px; }\n\n.leaflet-oldie .leaflet-control-zoom,\n.leaflet-oldie .leaflet-control-layers,\n.leaflet-oldie .leaflet-popup-content-wrapper,\n.leaflet-oldie .leaflet-popup-tip {\n  border: 1px solid #999; }\n\n/* div icon */\n.leaflet-div-icon {\n  background: #fff;\n  border: 1px solid #666; }\n\n/* Tooltip */\n/* Base styles for the element that has a tooltip */\n.leaflet-tooltip {\n  position: absolute;\n  padding: 6px;\n  background-color: #fff;\n  border: 1px solid #fff;\n  border-radius: 3px;\n  color: #222;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  pointer-events: none;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4); }\n\n.leaflet-tooltip.leaflet-clickable {\n  cursor: pointer;\n  pointer-events: auto; }\n\n.leaflet-tooltip-top:before,\n.leaflet-tooltip-bottom:before,\n.leaflet-tooltip-left:before,\n.leaflet-tooltip-right:before {\n  position: absolute;\n  pointer-events: none;\n  border: 6px solid transparent;\n  background: transparent;\n  content: ''; }\n\n/* Directions */\n.leaflet-tooltip-bottom {\n  margin-top: 6px; }\n\n.leaflet-tooltip-top {\n  margin-top: -6px; }\n\n.leaflet-tooltip-bottom:before,\n.leaflet-tooltip-top:before {\n  left: 50%;\n  margin-left: -6px; }\n\n.leaflet-tooltip-top:before {\n  bottom: 0;\n  margin-bottom: -12px;\n  border-top-color: #fff; }\n\n.leaflet-tooltip-bottom:before {\n  top: 0;\n  margin-top: -12px;\n  margin-left: -6px;\n  border-bottom-color: #fff; }\n\n.leaflet-tooltip-left {\n  margin-left: -6px; }\n\n.leaflet-tooltip-right {\n  margin-left: 6px; }\n\n.leaflet-tooltip-left:before,\n.leaflet-tooltip-right:before {\n  top: 50%;\n  margin-top: -6px; }\n\n.leaflet-tooltip-left:before {\n  right: 0;\n  margin-right: -12px;\n  border-left-color: #fff; }\n\n.leaflet-tooltip-right:before {\n  left: 0;\n  margin-left: -12px;\n  border-right-color: #fff; }\n"]}]);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/lib/loader.js!./styles/worldmap-panel.css":
/*!***************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ref--8-1!../node_modules/postcss-loader/src??ref--8-2!../node_modules/sass-loader/lib/loader.js!./styles/worldmap-panel.css ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js??ref--8-1!../../node_modules/postcss-loader/src??ref--8-2!./leaflet-geoman.css */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!./styles/leaflet-geoman.css");
exports = module.exports = ___CSS_LOADER_API_IMPORT___(true);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
// Module
exports.push([module.i, ".mapcontainer {\n  overflow: hidden; }\n\n.info {\n  padding: 6px 8px;\n  font: 14px/16px Arial, Helvetica, sans-serif;\n  background: white;\n  background: rgba(255, 255, 255, 0.8);\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);\n  border-radius: 5px; }\n\n.info h4 {\n  margin: 0 0 5px;\n  color: #777; }\n\n.legend {\n  line-height: 18px;\n  color: #555;\n  display: flex;\n  flex-direction: column; }\n\n.legend-item {\n  white-space: nowrap; }\n\n.legend i {\n  width: 18px;\n  height: 18px;\n  float: left;\n  margin-right: 8px;\n  opacity: 0.7; }\n\n.leaflet-top.leaflet-left,\n.leaflet-bottom.leaflet-left,\n.leaflet-bottom.leaflet-right {\n  z-index: 1000; }\n\n.leaflet-popup-content-wrapper,\n.leaflet-popup-tip {\n  color: #d8d9da !important; }\n\n.main-section-heading {\n  margin-bottom: 1.25rem; }\n\n.editor-column {\n  max-width: 30%;\n  margin-right: 2rem; }\n\n.editor-link-color {\n  color: #2846a1; }\n\n.gf-form-subgroup {\n  margin-bottom: 1rem; }\n", "",{"version":3,"sources":["worldmap-panel.css"],"names":[],"mappings":"AACA;EACE,gBAAgB,EAAE;;AAEpB;EACE,gBAAgB;EAChB,4CAA4C;EAC5C,iBAAiB;EACjB,oCAAoC;EACpC,uCAAuC;EACvC,kBAAkB,EAAE;;AAEtB;EACE,eAAe;EACf,WAAW,EAAE;;AAEf;EACE,iBAAiB;EACjB,WAAW;EACX,aAAa;EACb,sBAAsB,EAAE;;AAE1B;EACE,mBAAmB,EAAE;;AAEvB;EACE,WAAW;EACX,YAAY;EACZ,WAAW;EACX,iBAAiB;EACjB,YAAY,EAAE;;AAEhB;;;EAGE,aAAa,EAAE;;AAEjB;;EAEE,yBAAyB,EAAE;;AAE7B;EACE,sBAAsB,EAAE;;AAE1B;EACE,cAAc;EACd,kBAAkB,EAAE;;AAEtB;EACE,cAAc,EAAE;;AAElB;EACE,mBAAmB,EAAE","file":"worldmap-panel.css","sourcesContent":["@import url(leaflet-geoman.css);\n.mapcontainer {\n  overflow: hidden; }\n\n.info {\n  padding: 6px 8px;\n  font: 14px/16px Arial, Helvetica, sans-serif;\n  background: white;\n  background: rgba(255, 255, 255, 0.8);\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);\n  border-radius: 5px; }\n\n.info h4 {\n  margin: 0 0 5px;\n  color: #777; }\n\n.legend {\n  line-height: 18px;\n  color: #555;\n  display: flex;\n  flex-direction: column; }\n\n.legend-item {\n  white-space: nowrap; }\n\n.legend i {\n  width: 18px;\n  height: 18px;\n  float: left;\n  margin-right: 8px;\n  opacity: 0.7; }\n\n.leaflet-top.leaflet-left,\n.leaflet-bottom.leaflet-left,\n.leaflet-bottom.leaflet-right {\n  z-index: 1000; }\n\n.leaflet-popup-content-wrapper,\n.leaflet-popup-tip {\n  color: #d8d9da !important; }\n\n.main-section-heading {\n  margin-bottom: 1.25rem; }\n\n.editor-column {\n  max-width: 30%;\n  margin-right: 2rem; }\n\n.editor-link-color {\n  color: #2846a1; }\n\n.gf-form-subgroup {\n  margin-bottom: 1rem; }\n"]}]);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!./styles/leaflet-geoman.css":
/*!*********************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ref--8-1!../node_modules/postcss-loader/src??ref--8-2!./styles/leaflet-geoman.css ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
exports = module.exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".marker-icon,\r\n.marker-icon:focus {\r\n  background-color: #ffffff;\r\n  border: 1px solid #3388ff;\r\n  border-radius: 50%;\r\n  margin: -8px 0 0 -8px !important;\r\n  width: 14px !important;\r\n  height: 14px !important;\r\n  outline: 0;\r\n  -webkit-transition: opacity ease 0.3s;\r\n  transition: opacity ease 0.3s;\r\n}\r\n\r\n.marker-icon-middle,\r\n.marker-icon-middle:focus {\r\n  opacity: 0.7;\r\n  margin: -6px 0 0 -6px !important;\r\n  width: 10px !important;\r\n  height: 10px !important;\r\n}\r\n\r\n.leaflet-pm-draggable {\r\n  cursor: move !important;\r\n}\r\n\r\n.cursor-marker {\r\n  cursor: crosshair;\r\n  pointer-events: none;\r\n  display: none;\r\n}\r\n\r\n.cursor-marker.visible {\r\n  display: block !important;\r\n}\r\n\r\n.leaflet-pm-invalid {\r\n  stroke: red;\r\n  -webkit-transition: fill ease 0s, stroke ease 0s;\r\n  transition: fill ease 0s, stroke ease 0s;\r\n}\r\n\r\n.rect-style-marker,\r\n.rect-start-marker {\r\n  opacity: 0;\r\n}\r\n\r\n.rect-style-marker.visible,\r\n.rect-start-marker.visible {\r\n  opacity: 1 !important;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.leaflet-pm-toolbar {\r\n}\r\n\r\n.leaflet-pm-toolbar .leaflet-buttons-control-button {\r\n  padding: 5px;\r\n  box-sizing: border-box;\r\n  position: relative;\r\n  z-index: 3;\r\n}\r\n\r\n.leaflet-pm-toolbar .control-fa-icon {\r\n  font-size: 19px;\r\n  line-height: 24px;\r\n}\r\n\r\n.leaflet-pm-toolbar .control-icon {\r\n  width: 100%;\r\n  height: 100%;\r\n  box-sizing: border-box;\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n}\r\n\r\n.leaflet-pm-toolbar .leaflet-pm-icon-marker {\r\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjUgKDY3NDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BdG9tcy9JY29ucy9Ub29scy9NYXJrZXI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNMTUuNSwyNC44NzgyOTU5IEMxNS4yOTA5MjAxLDI0Ljg3NzIyMTkgMTUuMTc0NDg1NywyNC44NDY3ODE3IDE0LjY1OTA4NjYsMjQuMjM1NDE2MyBDMTAuMjE5Njk1NSwxOS40MTE4MDU0IDgsMTUuNTAxNDM5MiA4LDEyLjUwNDMxNzcgQzgsOC4zNTk3OTc0NiAxMS4zNTc4NjQ0LDUgMTUuNSw1IEMxOS42NDIxMzU2LDUgMjMsOC4zNTk3OTc0NiAyMywxMi41MDQzMTc3IEMyMywxNyAxOC4yODc4MjE3LDIxLjkyNjgzNzggMTYuMzMzNjYwMSwyNC4yNDQwMTg2IEMxNS44MjI0NjIyLDI0Ljg1MDE4MDIgMTUuNzA5MDc5OSwyNC44NzkzNjk5IDE1LjUsMjQuODc4Mjk1OSBaIE0xNS41LDE1LjUzMjY5NDggQzE3LjI3NTIwMSwxNS41MzI2OTQ4IDE4LjcxNDI4NTcsMTQuMTE4MDAwNCAxOC43MTQyODU3LDEyLjM3Mjg4NjQgQzE4LjcxNDI4NTcsMTAuNjI3NzcyMyAxNy4yNzUyMDEsOS4yMTMwNzc5MiAxNS41LDkuMjEzMDc3OTIgQzEzLjcyNDc5OSw5LjIxMzA3NzkyIDEyLjI4NTcxNDMsMTAuNjI3NzcyMyAxMi4yODU3MTQzLDEyLjM3Mjg4NjQgQzEyLjI4NTcxNDMsMTQuMTE4MDAwNCAxMy43MjQ3OTksMTUuNTMyNjk0OCAxNS41LDE1LjUzMjY5NDggWiIgaWQ9InBhdGgtMSI+PC9wYXRoPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlN5bWJvbHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJBdG9tcy9JY29ucy9Ub29scy9NYXJrZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zLjAwMDAwMCwgLTMuMDAwMDAwKSI+CiAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgPHVzZSBpZD0iTWFzayIgZmlsbD0iIzVCNUI1QiIgZmlsbC1ydWxlPSJub256ZXJvIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==);\r\n}\r\n.leaflet-pm-toolbar .leaflet-pm-icon-polygon {\r\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgPGRlZnM+CiAgICA8cGF0aCBpZD0icG9seWdvbi1hIiBkPSJNMTkuNDIwNjg5Miw5LjE2NTA5NzI1IEMxOS4xNTIzNjgxLDguNjY5OTI5MTQgMTksOC4xMDI3NTgzMSAxOSw3LjUgQzE5LDUuNTY3MDAzMzggMjAuNTY3MDAzNCw0IDIyLjUsNCBDMjQuNDMyOTk2Niw0IDI2LDUuNTY3MDAzMzggMjYsNy41IEMyNiw5LjI2MzIzNTk1IDI0LjY5NjE0NzEsMTAuNzIxOTQwNyAyMywxMC45NjQ1NTU2IEwyMywxOS4wMzU0NDQ0IEMyNC42OTYxNDcxLDE5LjI3ODA1OTMgMjYsMjAuNzM2NzY0IDI2LDIyLjUgQzI2LDI0LjQzMjk5NjYgMjQuNDMyOTk2NiwyNiAyMi41LDI2IEMyMC43MzY3NjQsMjYgMTkuMjc4MDU5MywyNC42OTYxNDcxIDE5LjAzNTQ0NDQsMjMgTDEwLjk2NDU1NTYsMjMgQzEwLjcyMTk0MDcsMjQuNjk2MTQ3MSA5LjI2MzIzNTk1LDI2IDcuNSwyNiBDNS41NjcwMDMzOCwyNiA0LDI0LjQzMjk5NjYgNCwyMi41IEM0LDIwLjU2NzAwMzQgNS41NjcwMDMzOCwxOSA3LjUsMTkgQzguMTAyNzU4MzEsMTkgOC42Njk5MjkxNCwxOS4xNTIzNjgxIDkuMTY1MDk3MjUsMTkuNDIwNjg5MiBMMTkuNDIwNjg5Miw5LjE2NTA5NzI1IFogTTIwLjgzNDkwNzMsMTAuNTc5MzA2MyBMMTAuNTc5MzEwOCwyMC44MzQ5MDI3IEMxMC42MDg2NzMxLDIwLjg4OTA4ODggMTAuNjM2NjQ2OSwyMC45NDQxMzcyIDEwLjY2MzE4NDQsMjEgTDE5LjMzNjgxNTYsMjEgQzE5LjY4MjU3NzUsMjAuMjcyMTU0IDIwLjI3MjE1NCwxOS42ODI1Nzc1IDIxLDE5LjMzNjgxNTYgTDIxLDEwLjY2MzE4NDQgQzIwLjk0NDEzNzIsMTAuNjM2NjQ2OSAyMC44ODkwODg4LDEwLjYwODY3MzEgMjAuODM0OTAyNywxMC41NzkzMTA4IFogTTIyLjUsOSBDMjMuMzI4NDI3MSw5IDI0LDguMzI4NDI3MTIgMjQsNy41IEMyNCw2LjY3MTU3Mjg4IDIzLjMyODQyNzEsNiAyMi41LDYgQzIxLjY3MTU3MjksNiAyMSw2LjY3MTU3Mjg4IDIxLDcuNSBDMjEsOC4zMjg0MjcxMiAyMS42NzE1NzI5LDkgMjIuNSw5IFogTTIyLjUsMjQgQzIzLjMyODQyNzEsMjQgMjQsMjMuMzI4NDI3MSAyNCwyMi41IEMyNCwyMS42NzE1NzI5IDIzLjMyODQyNzEsMjEgMjIuNSwyMSBDMjEuNjcxNTcyOSwyMSAyMSwyMS42NzE1NzI5IDIxLDIyLjUgQzIxLDIzLjMyODQyNzEgMjEuNjcxNTcyOSwyNCAyMi41LDI0IFogTTcuNSwyNCBDOC4zMjg0MjcxMiwyNCA5LDIzLjMyODQyNzEgOSwyMi41IEM5LDIxLjY3MTU3MjkgOC4zMjg0MjcxMiwyMSA3LjUsMjEgQzYuNjcxNTcyODgsMjEgNiwyMS42NzE1NzI5IDYsMjIuNSBDNiwyMy4zMjg0MjcxIDYuNjcxNTcyODgsMjQgNy41LDI0IFoiLz4KICA8L2RlZnM+CiAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMyAtMykiPgogICAgPG1hc2sgaWQ9InBvbHlnb24tYiIgZmlsbD0iI2ZmZiI+CiAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BvbHlnb24tYSIvPgogICAgPC9tYXNrPgogICAgPHVzZSBmaWxsPSIjNUI1QjVCIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHhsaW5rOmhyZWY9IiNwb2x5Z29uLWEiLz4KICAgIDxnIGZpbGw9IiM1QjVCNUIiIG1hc2s9InVybCgjcG9seWdvbi1iKSI+CiAgICAgIDxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==);\r\n}\r\n.leaflet-pm-toolbar .leaflet-pm-icon-polyline {\r\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgPGRlZnM+CiAgICA8cGF0aCBpZD0ibGluZS1hIiBkPSJNOS4xNjUwOTcyNSwxOS40MjA2ODkyIEwxOC40MjA2ODkyLDEwLjE2NTA5NzMgQzE4LjE1MjM2ODEsOS42Njk5MjkxNCAxOCw5LjEwMjc1ODMxIDE4LDguNSBDMTgsNi41NjcwMDMzOCAxOS41NjcwMDM0LDUgMjEuNSw1IEMyMy40MzI5OTY2LDUgMjUsNi41NjcwMDMzOCAyNSw4LjUgQzI1LDEwLjQzMjk5NjYgMjMuNDMyOTk2NiwxMiAyMS41LDEyIEMyMC44OTcyNDE3LDEyIDIwLjMzMDA3MDksMTEuODQ3NjMxOSAxOS44MzQ5MDI3LDExLjU3OTMxMDggTDEwLjU3OTMxMDgsMjAuODM0OTAyNyBDMTAuODQ3NjMxOSwyMS4zMzAwNzA5IDExLDIxLjg5NzI0MTcgMTEsMjIuNSBDMTEsMjQuNDMyOTk2NiA5LjQzMjk5NjYyLDI2IDcuNSwyNiBDNS41NjcwMDMzOCwyNiA0LDI0LjQzMjk5NjYgNCwyMi41IEM0LDIwLjU2NzAwMzQgNS41NjcwMDMzOCwxOSA3LjUsMTkgQzguMTAyNzU4MzEsMTkgOC42Njk5MjkxNCwxOS4xNTIzNjgxIDkuMTY1MDk3MjUsMTkuNDIwNjg5MiBaIE0yMS41LDEwIEMyMi4zMjg0MjcxLDEwIDIzLDkuMzI4NDI3MTIgMjMsOC41IEMyMyw3LjY3MTU3Mjg4IDIyLjMyODQyNzEsNyAyMS41LDcgQzIwLjY3MTU3MjksNyAyMCw3LjY3MTU3Mjg4IDIwLDguNSBDMjAsOS4zMjg0MjcxMiAyMC42NzE1NzI5LDEwIDIxLjUsMTAgWiBNNy41LDI0IEM4LjMyODQyNzEyLDI0IDksMjMuMzI4NDI3MSA5LDIyLjUgQzksMjEuNjcxNTcyOSA4LjMyODQyNzEyLDIxIDcuNSwyMSBDNi42NzE1NzI4OCwyMSA2LDIxLjY3MTU3MjkgNiwyMi41IEM2LDIzLjMyODQyNzEgNi42NzE1NzI4OCwyNCA3LjUsMjQgWiIvPgogIDwvZGVmcz4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zIC0zKSI+CiAgICA8bWFzayBpZD0ibGluZS1iIiBmaWxsPSIjZmZmIj4KICAgICAgPHVzZSB4bGluazpocmVmPSIjbGluZS1hIi8+CiAgICA8L21hc2s+CiAgICA8dXNlIGZpbGw9IiM1QjVCNUIiIGZpbGwtcnVsZT0ibm9uemVybyIgeGxpbms6aHJlZj0iI2xpbmUtYSIvPgogICAgPGcgZmlsbD0iIzVCNUI1QiIgbWFzaz0idXJsKCNsaW5lLWIpIj4KICAgICAgPHJlY3Qgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K);\r\n}\r\n.leaflet-pm-toolbar .leaflet-pm-icon-circle {\r\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjUgKDY3NDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BdG9tcy9JY29ucy9Ub29scy9DaXJjbGU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNMTguMjg5Nzc1MSw2Ljc4NjAyMjc1IEMxOC44OTI0MTMxLDYuMjk0NjQ5ODEgMTkuNjYxNzk3LDYgMjAuNSw2IEMyMi40MzI5OTY2LDYgMjQsNy41NjcwMDMzOCAyNCw5LjUgQzI0LDEwLjMzODIwMyAyMy43MDUzNTAyLDExLjEwNzU4NjkgMjMuMjEzOTc3MiwxMS43MTAyMjQ5IEMyMy43MTk1OTksMTIuODcxMjA1MyAyNCwxNC4xNTI4NTcxIDI0LDE1LjUgQzI0LDIwLjc0NjcwNTEgMTkuNzQ2NzA1MSwyNSAxNC41LDI1IEM5LjI1MzI5NDg4LDI1IDUsMjAuNzQ2NzA1MSA1LDE1LjUgQzUsMTAuMjUzMjk0OSA5LjI1MzI5NDg4LDYgMTQuNSw2IEMxNS44NDcxNDI5LDYgMTcuMTI4Nzk0Nyw2LjI4MDQwMDk4IDE4LjI4OTc3NTEsNi43ODYwMjI3NSBaIE0xNy4xNTA0MjI4LDguNDgxNzU4NiBDMTYuMzI2MzU4MSw4LjE3MDM5MjM2IDE1LjQzMzA3NzcsOCAxNC41LDggQzEwLjM1Nzg2NDQsOCA3LDExLjM1Nzg2NDQgNywxNS41IEM3LDE5LjY0MjEzNTYgMTAuMzU3ODY0NCwyMyAxNC41LDIzIEMxOC42NDIxMzU2LDIzIDIyLDE5LjY0MjEzNTYgMjIsMTUuNSBDMjIsMTQuNTY2OTIyMyAyMS44Mjk2MDc2LDEzLjY3MzY0MTkgMjEuNTE4MjQxNCwxMi44NDk1NzcyIEMyMS4xOTYwMzgzLDEyLjk0NzM5NjggMjAuODU0MTYyMiwxMyAyMC41LDEzIEMxOC41NjcwMDM0LDEzIDE3LDExLjQzMjk5NjYgMTcsOS41IEMxNyw5LjE0NTgzNzc4IDE3LjA1MjYwMzIsOC44MDM5NjE2OSAxNy4xNTA0MjI4LDguNDgxNzU4NiBaIE0xNC41LDE3IEMxMy42NzE1NzI5LDE3IDEzLDE2LjMyODQyNzEgMTMsMTUuNSBDMTMsMTQuNjcxNTcyOSAxMy42NzE1NzI5LDE0IDE0LjUsMTQgQzE1LjMyODQyNzEsMTQgMTYsMTQuNjcxNTcyOSAxNiwxNS41IEMxNiwxNi4zMjg0MjcxIDE1LjMyODQyNzEsMTcgMTQuNSwxNyBaIE0yMC41LDExIEMyMS4zMjg0MjcxLDExIDIyLDEwLjMyODQyNzEgMjIsOS41IEMyMiw4LjY3MTU3Mjg4IDIxLjMyODQyNzEsOCAyMC41LDggQzE5LjY3MTU3MjksOCAxOSw4LjY3MTU3Mjg4IDE5LDkuNSBDMTksMTAuMzI4NDI3MSAxOS42NzE1NzI5LDExIDIwLjUsMTEgWiIgaWQ9InBhdGgtMSI+PC9wYXRoPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlN5bWJvbHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJBdG9tcy9JY29ucy9Ub29scy9DaXJjbGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zLjAwMDAwMCwgLTMuMDAwMDAwKSI+CiAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgPHVzZSBpZD0iTWFzayIgZmlsbD0iIzVCNUI1QiIgZmlsbC1ydWxlPSJub256ZXJvIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgPGcgaWQ9IkF0b21zL0NvbG9yL0dyZXkiIG1hc2s9InVybCgjbWFzay0yKSIgZmlsbD0iIzVCNUI1QiI+CiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSIwIiB5PSIwIiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiPjwvcmVjdD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+);\r\n}\r\n.leaflet-pm-toolbar .leaflet-pm-icon-circle-marker {\r\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KCjxzdmcgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjNUI1QjVCIiBzdHJva2Utd2lkdGg9IjgiCiAgICAgZmlsbD0ibm9uZSI+CjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjM1Ii8+CiAgPGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iMyIgZmlsbD0iIzVCNUI1QiIvPgo8L3N2Zz4=);\r\n}\r\n.leaflet-pm-toolbar .leaflet-pm-icon-rectangle {\r\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgPGRlZnM+CiAgICA8cGF0aCBpZD0icmVjdGFuZ2xlLWEiIGQ9Ik0yMywxMC45NjQ1NTU2IEwyMywxOS4wMzU0NDQ0IEMyNC42OTYxNDcxLDE5LjI3ODA1OTMgMjYsMjAuNzM2NzY0IDI2LDIyLjUgQzI2LDI0LjQzMjk5NjYgMjQuNDMyOTk2NiwyNiAyMi41LDI2IEMyMC43MzY3NjQsMjYgMTkuMjc4MDU5MywyNC42OTYxNDcxIDE5LjAzNTQ0NDQsMjMgTDEwLjk2NDU1NTYsMjMgQzEwLjcyMTk0MDcsMjQuNjk2MTQ3MSA5LjI2MzIzNTk1LDI2IDcuNSwyNiBDNS41NjcwMDMzOCwyNiA0LDI0LjQzMjk5NjYgNCwyMi41IEM0LDIwLjczNjc2NCA1LjMwMzg1MjkzLDE5LjI3ODA1OTMgNywxOS4wMzU0NDQ0IEw3LDEwLjk2NDU1NTYgQzUuMzAzODUyOTMsMTAuNzIxOTQwNyA0LDkuMjYzMjM1OTUgNCw3LjUgQzQsNS41NjcwMDMzOCA1LjU2NzAwMzM4LDQgNy41LDQgQzkuMjYzMjM1OTUsNCAxMC43MjE5NDA3LDUuMzAzODUyOTMgMTAuOTY0NTU1Niw3IEwxOS4wMzU0NDQ0LDcgQzE5LjI3ODA1OTMsNS4zMDM4NTI5MyAyMC43MzY3NjQsNCAyMi41LDQgQzI0LjQzMjk5NjYsNCAyNiw1LjU2NzAwMzM4IDI2LDcuNSBDMjYsOS4yNjMyMzU5NSAyNC42OTYxNDcxLDEwLjcyMTk0MDcgMjMsMTAuOTY0NTU1NiBaIE0yMSwxMC42NjMxODQ0IEMyMC4yNzIxNTQsMTAuMzE3NDIyNSAxOS42ODI1Nzc1LDkuNzI3ODQ1OTggMTkuMzM2ODE1Niw5IEwxMC42NjMxODQ0LDkgQzEwLjMxNzQyMjUsOS43Mjc4NDU5OCA5LjcyNzg0NTk4LDEwLjMxNzQyMjUgOSwxMC42NjMxODQ0IEw5LDE5LjMzNjgxNTYgQzkuNzI3ODQ1OTgsMTkuNjgyNTc3NSAxMC4zMTc0MjI1LDIwLjI3MjE1NCAxMC42NjMxODQ0LDIxIEwxOS4zMzY4MTU2LDIxIEMxOS42ODI1Nzc1LDIwLjI3MjE1NCAyMC4yNzIxNTQsMTkuNjgyNTc3NSAyMSwxOS4zMzY4MTU2IEwyMSwxMC42NjMxODQ0IFogTTcuNSw5IEM4LjMyODQyNzEyLDkgOSw4LjMyODQyNzEyIDksNy41IEM5LDYuNjcxNTcyODggOC4zMjg0MjcxMiw2IDcuNSw2IEM2LjY3MTU3Mjg4LDYgNiw2LjY3MTU3Mjg4IDYsNy41IEM2LDguMzI4NDI3MTIgNi42NzE1NzI4OCw5IDcuNSw5IFogTTIyLjUsOSBDMjMuMzI4NDI3MSw5IDI0LDguMzI4NDI3MTIgMjQsNy41IEMyNCw2LjY3MTU3Mjg4IDIzLjMyODQyNzEsNiAyMi41LDYgQzIxLjY3MTU3MjksNiAyMSw2LjY3MTU3Mjg4IDIxLDcuNSBDMjEsOC4zMjg0MjcxMiAyMS42NzE1NzI5LDkgMjIuNSw5IFogTTIyLjUsMjQgQzIzLjMyODQyNzEsMjQgMjQsMjMuMzI4NDI3MSAyNCwyMi41IEMyNCwyMS42NzE1NzI5IDIzLjMyODQyNzEsMjEgMjIuNSwyMSBDMjEuNjcxNTcyOSwyMSAyMSwyMS42NzE1NzI5IDIxLDIyLjUgQzIxLDIzLjMyODQyNzEgMjEuNjcxNTcyOSwyNCAyMi41LDI0IFogTTcuNSwyNCBDOC4zMjg0MjcxMiwyNCA5LDIzLjMyODQyNzEgOSwyMi41IEM5LDIxLjY3MTU3MjkgOC4zMjg0MjcxMiwyMSA3LjUsMjEgQzYuNjcxNTcyODgsMjEgNiwyMS42NzE1NzI5IDYsMjIuNSBDNiwyMy4zMjg0MjcxIDYuNjcxNTcyODgsMjQgNy41LDI0IFoiLz4KICA8L2RlZnM+CiAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMyAtMykiPgogICAgPG1hc2sgaWQ9InJlY3RhbmdsZS1iIiBmaWxsPSIjZmZmIj4KICAgICAgPHVzZSB4bGluazpocmVmPSIjcmVjdGFuZ2xlLWEiLz4KICAgIDwvbWFzaz4KICAgIDx1c2UgZmlsbD0iIzVCNUI1QiIgZmlsbC1ydWxlPSJub256ZXJvIiB4bGluazpocmVmPSIjcmVjdGFuZ2xlLWEiLz4KICAgIDxnIGZpbGw9IiM1QjVCNUIiIG1hc2s9InVybCgjcmVjdGFuZ2xlLWIpIj4KICAgICAgPHJlY3Qgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K);\r\n}\r\n.leaflet-pm-toolbar .leaflet-pm-icon-delete {\r\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjUgKDY3NDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BdG9tcy9JY29ucy9Ub29scy9FcmFzZXI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNMTcuNzg3NDIxOSwxOC40ODEyNTUyIEwxMS42NDgwMDc5LDEzLjM0OTgxODQgTDYuNDA0NjYwMDksMTkuMzgxNjAwMSBMMTAuNTUzOTE1NiwyMi45ODg0OTI5IEwxMy44NjkzNCwyMi45ODg0OTI5IEwxNy43ODc0MjE5LDE4LjQ4MTI1NTIgWiBNMTYuNTA3NDI1MiwyMi45ODg0OTI5IEwyNi4wMDAwMDAyLDIyLjk4ODQ5MjkgTDI2LjAwMDAwMDIsMjQuOTg4NDkyOSBMMTAuMDAwMDAwMiwyNC45ODg0OTI5IEw5LjgwNzA4MzEzLDI0Ljk4ODQ5MjkgTDUuMDkyNTQyMDQsMjAuODkxMDE5MiBDNC4yNTg5MTI4NSwyMC4xNjYzNTY0IDQuMTcwNTc4MTQsMTguOTAzMTExMiA0Ljg5NTI0MDkzLDE4LjA2OTQ4MiBMMTYuMDQ4MjQ0NCw1LjIzOTQxOTE2IEMxNi43NzI5MDcyLDQuNDA1Nzg5OTggMTguMDM2MTUyNSw0LjMxNzQ1NTI2IDE4Ljg2OTc4MTYsNS4wNDIxMTgwNiBMMjQuOTA3NDU4MywxMC4yOTA1OTAzIEMyNS43NDEwODc1LDExLjAxNTI1MzEgMjUuODI5NDIyMiwxMi4yNzg0OTgzIDI1LjEwNDc1OTQsMTMuMTEyMTI3NSBMMTYuNTA3NDI1MiwyMi45ODg0OTI5IFoiIGlkPSJwYXRoLTEiPjwvcGF0aD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJTeW1ib2xzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iQXRvbXMvSWNvbnMvVG9vbHMvRXJhc2VyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMy4wMDAwMDAsIC0zLjAwMDAwMCkiPgogICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgIDx1c2UgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSIjNUI1QjVCIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+);\r\n}\r\n.leaflet-pm-toolbar .leaflet-pm-icon-edit {\r\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgPGRlZnM+CiAgICA8cGF0aCBpZD0iZWRpdF9hbmNob3ItYSIgZD0iTTEzLjUsMTEgQzExLjU2NzAwMzQsMTEgMTAsOS40MzI5OTY2MiAxMCw3LjUgQzEwLDUuNTY3MDAzMzggMTEuNTY3MDAzNCw0IDEzLjUsNCBDMTUuNDMyOTk2Niw0IDE3LDUuNTY3MDAzMzggMTcsNy41IEMxNyw5LjQzMjk5NjYyIDE1LjQzMjk5NjYsMTEgMTMuNSwxMSBaIE0xMy41LDkgQzE0LjMyODQyNzEsOSAxNSw4LjMyODQyNzEyIDE1LDcuNSBDMTUsNi42NzE1NzI4OCAxNC4zMjg0MjcxLDYgMTMuNSw2IEMxMi42NzE1NzI5LDYgMTIsNi42NzE1NzI4OCAxMiw3LjUgQzEyLDguMzI4NDI3MTIgMTIuNjcxNTcyOSw5IDEzLjUsOSBaIE0xMi4wMDAyODg5LDcuNTI5NzM4OTMgQzEyLjAxMjU5ODMsOC4xNjI3MzY3MiAxMi40MTcwMTk3LDguNjk5NjY0MyAxMi45ODA3MTExLDguOTA3Njc5NjYgTDMsMTUgTDMsMTMgTDEyLjAwMDI4ODksNy41Mjk3Mzg5MyBaIE0xNC4yMTcyNzIyLDYuMTgyMjg0NzIgTDE5LjQ1MzEyNSwzIEwyMi42NTg5MzU1LDMgTDE0Ljk4OTEwMiw3LjY4MTczODg1IEMxNC45OTYyOTcxLDcuNjIyMTY0NTkgMTUsNy41NjE1MTQ3MiAxNSw3LjUgQzE1LDYuOTMxMzgzODEgMTQuNjgzNjA5OCw2LjQzNjY2NDUgMTQuMjE3MjcyMiw2LjE4MjI4NDcyIFogTTIzLjQ0MzQwNDIsMTkuMjg1MTczNiBMMjAuMTI4Mjc5OSwxOS4yODUxNzM2IEwyMS44NzI5OTgzLDIzLjUzNDk1MjUgQzIxLjk5NDUyOTYsMjMuODI5NTc3MyAyMS44NTU2NTQ2LDI0LjE1OTkyMDkgMjEuNTc3ODczNCwyNC4yODQ5MjA4IEwyMC4wNDE0Njc1LDI0Ljk1NDUxNDIgQzE5Ljc1NTA2MTMsMjUuMDc5NTE0MSAxOS40MzM4NzM4LDI0LjkzNjY3MDQgMTkuMzEyMzQyNiwyNC42NTA5NTE4IEwxNy42NTQ0MzY3LDIwLjYxNTQ1NDEgTDE0Ljk0NjE4NzMsMjMuNDAxMDE1MSBDMTQuNTg1MjgxMSwyMy43NzIxNzExIDE0LDIzLjQ4NjA0NjMgMTQsMjIuOTk5MjY1MyBMMTQsOS41NzE4MzUzMyBDMTQsOS4wNTkzMzU2MSAxNC42MjI1MzExLDguODA5NDkyIDE0Ljk0NjE1Niw5LjE3MDA4NTU1IEwyMy44MzQwMjkyLDE4LjMxMjAxNzkgQzI0LjE5MjUyOTEsMTguNjYxMzYxNSAyMy45Mjc5OTc5LDE5LjI4NTE3MzYgMjMuNDQzNDA0MiwxOS4yODUxNzM2IFoiLz4KICA8L2RlZnM+CiAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMyAtMykiPgogICAgPG1hc2sgaWQ9ImVkaXRfYW5jaG9yLWIiIGZpbGw9IiNmZmYiPgogICAgICA8dXNlIHhsaW5rOmhyZWY9IiNlZGl0X2FuY2hvci1hIi8+CiAgICA8L21hc2s+CiAgICA8dXNlIGZpbGw9IiM1QjVCNUIiIGZpbGwtcnVsZT0ibm9uemVybyIgeGxpbms6aHJlZj0iI2VkaXRfYW5jaG9yLWEiLz4KICAgIDxnIGZpbGw9IiM1QjVCNUIiIG1hc2s9InVybCgjZWRpdF9hbmNob3ItYikiPgogICAgICA8cmVjdCB3aWR0aD0iMzAiIGhlaWdodD0iMzAiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=);\r\n}\r\n.leaflet-pm-toolbar .leaflet-pm-icon-drag {\r\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgPGRlZnM+CiAgICA8cGF0aCBpZD0ibW92ZS1hIiBkPSJNMjEsMTQgTDIxLDEwIEwyNywxNSBMMjEsMjAgTDIxLDE2IEwxNiwxNiBMMTYsMjEgTDIwLDIxIEwxNSwyNyBMMTAsMjEgTDE0LDIxIEwxNCwxNiBMOSwxNiBMOSwyMCBMMywxNSBMOSwxMCBMOSwxNCBMMTQsMTQgTDE0LDkgTDEwLDkgTDE1LDMgTDIwLDkgTDE2LDkgTDE2LDE0IEwyMSwxNCBaIi8+CiAgPC9kZWZzPgogIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMgLTMpIj4KICAgIDxtYXNrIGlkPSJtb3ZlLWIiIGZpbGw9IiNmZmYiPgogICAgICA8dXNlIHhsaW5rOmhyZWY9IiNtb3ZlLWEiLz4KICAgIDwvbWFzaz4KICAgIDx1c2UgZmlsbD0iI0Q4RDhEOCIgeGxpbms6aHJlZj0iI21vdmUtYSIvPgogICAgPGcgZmlsbD0iIzVCNUI1QiIgbWFzaz0idXJsKCNtb3ZlLWIpIj4KICAgICAgPHJlY3Qgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K);\r\n}\r\n.leaflet-pm-toolbar .leaflet-pm-icon-cut {\r\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjUgKDY3NDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BdG9tcy9JY29ucy9Ub29scy9TY2lzc29yczwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxwYXRoIGQ9Ik0xMi45NjkxNTc0LDEzLjQ5Mzk0MzUgTDIxLjAzMTcwMzIsNS41NDE2NzAxMyBMMjMuNDY0OTQ5OSw1LjY3NzIyOTU3IEwxNy4wNDcwNzEzLDE0LjUxMDY4MTYgTDI3LjU2NjAzMzYsMTcuMTMzMzUzNSBMMjUuNzg5MTk0NCwxOC44MDEyNTg4IEwxNC41ODU0OTUxLDE3Ljg5ODc1MDYgTDEzLjY0ODc5NTUsMTkuMTg4MDA3IEMxMy43OTQ2MzksMTkuMjY1MDk1OCAxMy45MzY3OTg1LDE5LjM1MzQ0MTcgMTQuMDc0MTM3NywxOS40NTMyMjQ1IEMxNS42Mzc5NjQ4LDIwLjU4OTQxMTQgMTUuOTg0NjM1NywyMi43NzgyMDUyIDE0Ljg0ODQ0ODgsMjQuMzQyMDMyNCBDMTMuNzEyMjYxOSwyNS45MDU4NTk1IDExLjUyMzQ2ODEsMjYuMjUyNTMwNCA5Ljk1OTY0MDk2LDI1LjExNjM0MzUgQzguMzk1ODEzODQsMjMuOTgwMTU2NSA4LjA0OTE0Mjk2LDIxLjc5MTM2MjcgOS4xODUzMjk4NiwyMC4yMjc1MzU2IEM5Ljc0NTg3Mjc2LDE5LjQ1NjAxNDUgMTAuNTYyNjE4OCwxOC45ODA3NDc1IDExLjQzNDEyMTgsMTguODMzNjQwNyBMMTIuNjgwNTY1NiwxNy4xMTgwNTc5IEwxMi41MjM5NzI0LDE2LjM3NDcyMTYgTDExLjk1MDY5MzIsMTUuMzAxMjM5MSBMOS44OTMxMDY0NiwxNC43ODgyMjUxIEM5LjEzMDkzNzk2LDE1LjIzNTcyNjEgOC4xOTk3Nzg1NCwxNS4zOTY2NDQ3IDcuMjc0NDUzNTUsMTUuMTY1OTM1MiBDNS4zOTg4NzUxOSwxNC42OTgzMDEgNC4yNTc1MTA5NCwxMi43OTg3NTE5IDQuNzI1MTQ1MTUsMTAuOTIzMTczNiBDNS4xOTI3NzkzNSw5LjA0NzU5NTE5IDcuMDkyMzI4NDYsNy45MDYyMzA5NCA4Ljk2NzkwNjgyLDguMzczODY1MTUgQzEwLjg0MzQ4NTIsOC44NDE0OTkzNSAxMS45ODQ4NDk0LDEwLjc0MTA0ODUgMTEuNTE3MjE1MiwxMi42MTY2MjY4IEMxMS40NzYxNDY0LDEyLjc4MTM0NDkgMTEuNDI0MDMzNSwxMi45NDA0MDAxIDExLjM2MTg2MjcsMTMuMDkzMTk5OSBMMTIuOTY5MTU3NCwxMy40OTM5NDM1IFogTTcuNzU4Mjk3MzUsMTMuMjI1MzQzOCBDOC41NjIxMTY2NCwxMy40MjU3NTg0IDkuMzc2MjA5MTIsMTIuOTM2NjAyMyA5LjU3NjYyMzc4LDEyLjEzMjc4MyBDOS43NzcwMzg0NCwxMS4zMjg5NjM3IDkuMjg3ODgyMzMsMTAuNTE0ODcxMyA4LjQ4NDA2MzAzLDEwLjMxNDQ1NjYgQzcuNjgwMjQzNzMsMTAuMTE0MDQxOSA2Ljg2NjE1MTI2LDEwLjYwMzE5OCA2LjY2NTczNjYsMTEuNDA3MDE3MyBDNi40NjUzMjE5NCwxMi4yMTA4MzY2IDYuOTU0NDc4MDUsMTMuMDI0OTI5MSA3Ljc1ODI5NzM1LDEzLjIyNTM0MzggWiBNMTAuODAzMzYzOSwyMS40MDMxMDYxIEMxMC4zMTY0MjY2LDIyLjA3MzMxNzcgMTAuNDY0OTk5OCwyMy4wMTEzNzIyIDExLjEzNTIxMTUsMjMuNDk4MzA5NSBDMTEuODA1NDIzMSwyMy45ODUyNDY3IDEyLjc0MzQ3NzYsMjMuODM2NjczNSAxMy4yMzA0MTQ4LDIzLjE2NjQ2MTkgQzEzLjcxNzM1MjEsMjIuNDk2MjUwMiAxMy41Njg3Nzg4LDIxLjU1ODE5NTcgMTIuODk4NTY3MiwyMS4wNzEyNTg1IEMxMi4yMjgzNTU2LDIwLjU4NDMyMTIgMTEuMjkwMzAxMSwyMC43MzI4OTQ1IDEwLjgwMzM2MzksMjEuNDAzMTA2MSBaIiBpZD0icGF0aC0xIj48L3BhdGg+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iU3ltYm9scyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkF0b21zL0ljb25zL1Rvb2xzL1NjaXNzb3JzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMy4wMDAwMDAsIC0zLjAwMDAwMCkiPgogICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgIDx1c2UgaWQ9Ik1hc2siIGZpbGw9IiM1QjVCNUIiIGZpbGwtcnVsZT0ibm9uemVybyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYuMDkzMTk0LCAxNS42NjMzNTEpIHJvdGF0ZSgtMzIuMDAwMDAwKSB0cmFuc2xhdGUoLTE2LjA5MzE5NCwgLTE1LjY2MzM1MSkgIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==);\r\n}\r\n\r\n.leaflet-buttons-control-button:hover {\r\n  cursor: pointer;\r\n  background-color: #f4f4f4;\r\n}\r\n.active .leaflet-buttons-control-button {\r\n  box-shadow: inset 0 -1px 5px 2px rgba(81, 77, 77, 0.31);\r\n}\r\n\r\n.leaflet-buttons-control-text-hide {\r\n  display: none;\r\n}\r\n\r\n.button-container {\r\n  position: relative;\r\n}\r\n\r\n.button-container .leaflet-pm-actions-container {\r\n  z-index: 2;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 31px;\r\n  display: none;\r\n  white-space: nowrap;\r\n}\r\n\r\n.leaflet-right .leaflet-pm-toolbar .button-container .leaflet-pm-actions-container {\r\n  right: 31px;\r\n  left: auto;\r\n}\r\n\r\n.button-container.active .leaflet-pm-actions-container {\r\n  display: block;\r\n}\r\n\r\n.button-container .leaflet-pm-actions-container .leaflet-pm-action:last-child {\r\n  border-radius: 0px 3px 3px 0px;\r\n  border-right: 0px;\r\n}\r\n.button-container .leaflet-pm-actions-container .leaflet-pm-action {\r\n  padding: 0px 10px;\r\n  background-color: #666;\r\n  color: #fff;\r\n  display: inline-block;\r\n  width: auto;\r\n  border-right: 1px solid #eee;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n\r\n.button-container .leaflet-pm-actions-container .leaflet-pm-action:hover {\r\n  cursor: pointer;\r\n  background-color: #777;\r\n}\r\n", "",{"version":3,"sources":["leaflet-geoman.css"],"names":[],"mappings":"AAAA;;EAEE,yBAAyB;EACzB,yBAAyB;EACzB,kBAAkB;EAClB,gCAAgC;EAChC,sBAAsB;EACtB,uBAAuB;EACvB,UAAU;EACV,qCAA6B;EAA7B,6BAA6B;AAC/B;;AAEA;;EAEE,YAAY;EACZ,gCAAgC;EAChC,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;EACjB,oBAAoB;EACpB,aAAa;AACf;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,gDAAwC;EAAxC,wCAAwC;AAC1C;;AAEA;;EAEE,UAAU;AACZ;;AAEA;;EAEE,qBAAqB;AACvB;;AAEA;EACE,aAAa;AACf;;AAEA;AACA;;AAEA;EACE,YAAY;EACZ,sBAAsB;EACtB,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,wBAAwB;EACxB,4BAA4B;EAC5B,kCAAkC;AACpC;;AAEA;EACE,q4DAAq4D;AACv4D;AACA;EACE,i3EAAi3E;AACn3E;AACA;EACE,quDAAquD;AACvuD;AACA;EACE,ysFAAysF;AAC3sF;AACA;EACE,qXAAqX;AACvX;AACA;EACE,qqFAAqqF;AACvqF;AACA;EACE,i1DAAi1D;AACn1D;AACA;EACE,iqEAAiqE;AACnqE;AACA;EACE,q4BAAq4B;AACv4B;AACA;EACE,ywGAAywG;AAC3wG;;AAEA;EACE,eAAe;EACf,yBAAyB;AAC3B;AACA;EACE,uDAAuD;AACzD;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,MAAM;EACN,UAAU;EACV,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,8BAA8B;EAC9B,iBAAiB;AACnB;AACA;EACE,iBAAiB;EACjB,sBAAsB;EACtB,WAAW;EACX,qBAAqB;EACrB,WAAW;EACX,4BAA4B;EAC5B,yBAAiB;KAAjB,sBAAiB;MAAjB,qBAAiB;UAAjB,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,sBAAsB;AACxB","file":"leaflet-geoman.css","sourcesContent":[".marker-icon,\r\n.marker-icon:focus {\r\n  background-color: #ffffff;\r\n  border: 1px solid #3388ff;\r\n  border-radius: 50%;\r\n  margin: -8px 0 0 -8px !important;\r\n  width: 14px !important;\r\n  height: 14px !important;\r\n  outline: 0;\r\n  transition: opacity ease 0.3s;\r\n}\r\n\r\n.marker-icon-middle,\r\n.marker-icon-middle:focus {\r\n  opacity: 0.7;\r\n  margin: -6px 0 0 -6px !important;\r\n  width: 10px !important;\r\n  height: 10px !important;\r\n}\r\n\r\n.leaflet-pm-draggable {\r\n  cursor: move !important;\r\n}\r\n\r\n.cursor-marker {\r\n  cursor: crosshair;\r\n  pointer-events: none;\r\n  display: none;\r\n}\r\n\r\n.cursor-marker.visible {\r\n  display: block !important;\r\n}\r\n\r\n.leaflet-pm-invalid {\r\n  stroke: red;\r\n  transition: fill ease 0s, stroke ease 0s;\r\n}\r\n\r\n.rect-style-marker,\r\n.rect-start-marker {\r\n  opacity: 0;\r\n}\r\n\r\n.rect-style-marker.visible,\r\n.rect-start-marker.visible {\r\n  opacity: 1 !important;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.leaflet-pm-toolbar {\r\n}\r\n\r\n.leaflet-pm-toolbar .leaflet-buttons-control-button {\r\n  padding: 5px;\r\n  box-sizing: border-box;\r\n  position: relative;\r\n  z-index: 3;\r\n}\r\n\r\n.leaflet-pm-toolbar .control-fa-icon {\r\n  font-size: 19px;\r\n  line-height: 24px;\r\n}\r\n\r\n.leaflet-pm-toolbar .control-icon {\r\n  width: 100%;\r\n  height: 100%;\r\n  box-sizing: border-box;\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n}\r\n\r\n.leaflet-pm-toolbar .leaflet-pm-icon-marker {\r\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjUgKDY3NDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BdG9tcy9JY29ucy9Ub29scy9NYXJrZXI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNMTUuNSwyNC44NzgyOTU5IEMxNS4yOTA5MjAxLDI0Ljg3NzIyMTkgMTUuMTc0NDg1NywyNC44NDY3ODE3IDE0LjY1OTA4NjYsMjQuMjM1NDE2MyBDMTAuMjE5Njk1NSwxOS40MTE4MDU0IDgsMTUuNTAxNDM5MiA4LDEyLjUwNDMxNzcgQzgsOC4zNTk3OTc0NiAxMS4zNTc4NjQ0LDUgMTUuNSw1IEMxOS42NDIxMzU2LDUgMjMsOC4zNTk3OTc0NiAyMywxMi41MDQzMTc3IEMyMywxNyAxOC4yODc4MjE3LDIxLjkyNjgzNzggMTYuMzMzNjYwMSwyNC4yNDQwMTg2IEMxNS44MjI0NjIyLDI0Ljg1MDE4MDIgMTUuNzA5MDc5OSwyNC44NzkzNjk5IDE1LjUsMjQuODc4Mjk1OSBaIE0xNS41LDE1LjUzMjY5NDggQzE3LjI3NTIwMSwxNS41MzI2OTQ4IDE4LjcxNDI4NTcsMTQuMTE4MDAwNCAxOC43MTQyODU3LDEyLjM3Mjg4NjQgQzE4LjcxNDI4NTcsMTAuNjI3NzcyMyAxNy4yNzUyMDEsOS4yMTMwNzc5MiAxNS41LDkuMjEzMDc3OTIgQzEzLjcyNDc5OSw5LjIxMzA3NzkyIDEyLjI4NTcxNDMsMTAuNjI3NzcyMyAxMi4yODU3MTQzLDEyLjM3Mjg4NjQgQzEyLjI4NTcxNDMsMTQuMTE4MDAwNCAxMy43MjQ3OTksMTUuNTMyNjk0OCAxNS41LDE1LjUzMjY5NDggWiIgaWQ9InBhdGgtMSI+PC9wYXRoPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlN5bWJvbHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJBdG9tcy9JY29ucy9Ub29scy9NYXJrZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zLjAwMDAwMCwgLTMuMDAwMDAwKSI+CiAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgPHVzZSBpZD0iTWFzayIgZmlsbD0iIzVCNUI1QiIgZmlsbC1ydWxlPSJub256ZXJvIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==);\r\n}\r\n.leaflet-pm-toolbar .leaflet-pm-icon-polygon {\r\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgPGRlZnM+CiAgICA8cGF0aCBpZD0icG9seWdvbi1hIiBkPSJNMTkuNDIwNjg5Miw5LjE2NTA5NzI1IEMxOS4xNTIzNjgxLDguNjY5OTI5MTQgMTksOC4xMDI3NTgzMSAxOSw3LjUgQzE5LDUuNTY3MDAzMzggMjAuNTY3MDAzNCw0IDIyLjUsNCBDMjQuNDMyOTk2Niw0IDI2LDUuNTY3MDAzMzggMjYsNy41IEMyNiw5LjI2MzIzNTk1IDI0LjY5NjE0NzEsMTAuNzIxOTQwNyAyMywxMC45NjQ1NTU2IEwyMywxOS4wMzU0NDQ0IEMyNC42OTYxNDcxLDE5LjI3ODA1OTMgMjYsMjAuNzM2NzY0IDI2LDIyLjUgQzI2LDI0LjQzMjk5NjYgMjQuNDMyOTk2NiwyNiAyMi41LDI2IEMyMC43MzY3NjQsMjYgMTkuMjc4MDU5MywyNC42OTYxNDcxIDE5LjAzNTQ0NDQsMjMgTDEwLjk2NDU1NTYsMjMgQzEwLjcyMTk0MDcsMjQuNjk2MTQ3MSA5LjI2MzIzNTk1LDI2IDcuNSwyNiBDNS41NjcwMDMzOCwyNiA0LDI0LjQzMjk5NjYgNCwyMi41IEM0LDIwLjU2NzAwMzQgNS41NjcwMDMzOCwxOSA3LjUsMTkgQzguMTAyNzU4MzEsMTkgOC42Njk5MjkxNCwxOS4xNTIzNjgxIDkuMTY1MDk3MjUsMTkuNDIwNjg5MiBMMTkuNDIwNjg5Miw5LjE2NTA5NzI1IFogTTIwLjgzNDkwNzMsMTAuNTc5MzA2MyBMMTAuNTc5MzEwOCwyMC44MzQ5MDI3IEMxMC42MDg2NzMxLDIwLjg4OTA4ODggMTAuNjM2NjQ2OSwyMC45NDQxMzcyIDEwLjY2MzE4NDQsMjEgTDE5LjMzNjgxNTYsMjEgQzE5LjY4MjU3NzUsMjAuMjcyMTU0IDIwLjI3MjE1NCwxOS42ODI1Nzc1IDIxLDE5LjMzNjgxNTYgTDIxLDEwLjY2MzE4NDQgQzIwLjk0NDEzNzIsMTAuNjM2NjQ2OSAyMC44ODkwODg4LDEwLjYwODY3MzEgMjAuODM0OTAyNywxMC41NzkzMTA4IFogTTIyLjUsOSBDMjMuMzI4NDI3MSw5IDI0LDguMzI4NDI3MTIgMjQsNy41IEMyNCw2LjY3MTU3Mjg4IDIzLjMyODQyNzEsNiAyMi41LDYgQzIxLjY3MTU3MjksNiAyMSw2LjY3MTU3Mjg4IDIxLDcuNSBDMjEsOC4zMjg0MjcxMiAyMS42NzE1NzI5LDkgMjIuNSw5IFogTTIyLjUsMjQgQzIzLjMyODQyNzEsMjQgMjQsMjMuMzI4NDI3MSAyNCwyMi41IEMyNCwyMS42NzE1NzI5IDIzLjMyODQyNzEsMjEgMjIuNSwyMSBDMjEuNjcxNTcyOSwyMSAyMSwyMS42NzE1NzI5IDIxLDIyLjUgQzIxLDIzLjMyODQyNzEgMjEuNjcxNTcyOSwyNCAyMi41LDI0IFogTTcuNSwyNCBDOC4zMjg0MjcxMiwyNCA5LDIzLjMyODQyNzEgOSwyMi41IEM5LDIxLjY3MTU3MjkgOC4zMjg0MjcxMiwyMSA3LjUsMjEgQzYuNjcxNTcyODgsMjEgNiwyMS42NzE1NzI5IDYsMjIuNSBDNiwyMy4zMjg0MjcxIDYuNjcxNTcyODgsMjQgNy41LDI0IFoiLz4KICA8L2RlZnM+CiAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMyAtMykiPgogICAgPG1hc2sgaWQ9InBvbHlnb24tYiIgZmlsbD0iI2ZmZiI+CiAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BvbHlnb24tYSIvPgogICAgPC9tYXNrPgogICAgPHVzZSBmaWxsPSIjNUI1QjVCIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHhsaW5rOmhyZWY9IiNwb2x5Z29uLWEiLz4KICAgIDxnIGZpbGw9IiM1QjVCNUIiIG1hc2s9InVybCgjcG9seWdvbi1iKSI+CiAgICAgIDxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==);\r\n}\r\n.leaflet-pm-toolbar .leaflet-pm-icon-polyline {\r\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgPGRlZnM+CiAgICA8cGF0aCBpZD0ibGluZS1hIiBkPSJNOS4xNjUwOTcyNSwxOS40MjA2ODkyIEwxOC40MjA2ODkyLDEwLjE2NTA5NzMgQzE4LjE1MjM2ODEsOS42Njk5MjkxNCAxOCw5LjEwMjc1ODMxIDE4LDguNSBDMTgsNi41NjcwMDMzOCAxOS41NjcwMDM0LDUgMjEuNSw1IEMyMy40MzI5OTY2LDUgMjUsNi41NjcwMDMzOCAyNSw4LjUgQzI1LDEwLjQzMjk5NjYgMjMuNDMyOTk2NiwxMiAyMS41LDEyIEMyMC44OTcyNDE3LDEyIDIwLjMzMDA3MDksMTEuODQ3NjMxOSAxOS44MzQ5MDI3LDExLjU3OTMxMDggTDEwLjU3OTMxMDgsMjAuODM0OTAyNyBDMTAuODQ3NjMxOSwyMS4zMzAwNzA5IDExLDIxLjg5NzI0MTcgMTEsMjIuNSBDMTEsMjQuNDMyOTk2NiA5LjQzMjk5NjYyLDI2IDcuNSwyNiBDNS41NjcwMDMzOCwyNiA0LDI0LjQzMjk5NjYgNCwyMi41IEM0LDIwLjU2NzAwMzQgNS41NjcwMDMzOCwxOSA3LjUsMTkgQzguMTAyNzU4MzEsMTkgOC42Njk5MjkxNCwxOS4xNTIzNjgxIDkuMTY1MDk3MjUsMTkuNDIwNjg5MiBaIE0yMS41LDEwIEMyMi4zMjg0MjcxLDEwIDIzLDkuMzI4NDI3MTIgMjMsOC41IEMyMyw3LjY3MTU3Mjg4IDIyLjMyODQyNzEsNyAyMS41LDcgQzIwLjY3MTU3MjksNyAyMCw3LjY3MTU3Mjg4IDIwLDguNSBDMjAsOS4zMjg0MjcxMiAyMC42NzE1NzI5LDEwIDIxLjUsMTAgWiBNNy41LDI0IEM4LjMyODQyNzEyLDI0IDksMjMuMzI4NDI3MSA5LDIyLjUgQzksMjEuNjcxNTcyOSA4LjMyODQyNzEyLDIxIDcuNSwyMSBDNi42NzE1NzI4OCwyMSA2LDIxLjY3MTU3MjkgNiwyMi41IEM2LDIzLjMyODQyNzEgNi42NzE1NzI4OCwyNCA3LjUsMjQgWiIvPgogIDwvZGVmcz4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zIC0zKSI+CiAgICA8bWFzayBpZD0ibGluZS1iIiBmaWxsPSIjZmZmIj4KICAgICAgPHVzZSB4bGluazpocmVmPSIjbGluZS1hIi8+CiAgICA8L21hc2s+CiAgICA8dXNlIGZpbGw9IiM1QjVCNUIiIGZpbGwtcnVsZT0ibm9uemVybyIgeGxpbms6aHJlZj0iI2xpbmUtYSIvPgogICAgPGcgZmlsbD0iIzVCNUI1QiIgbWFzaz0idXJsKCNsaW5lLWIpIj4KICAgICAgPHJlY3Qgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K);\r\n}\r\n.leaflet-pm-toolbar .leaflet-pm-icon-circle {\r\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjUgKDY3NDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BdG9tcy9JY29ucy9Ub29scy9DaXJjbGU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNMTguMjg5Nzc1MSw2Ljc4NjAyMjc1IEMxOC44OTI0MTMxLDYuMjk0NjQ5ODEgMTkuNjYxNzk3LDYgMjAuNSw2IEMyMi40MzI5OTY2LDYgMjQsNy41NjcwMDMzOCAyNCw5LjUgQzI0LDEwLjMzODIwMyAyMy43MDUzNTAyLDExLjEwNzU4NjkgMjMuMjEzOTc3MiwxMS43MTAyMjQ5IEMyMy43MTk1OTksMTIuODcxMjA1MyAyNCwxNC4xNTI4NTcxIDI0LDE1LjUgQzI0LDIwLjc0NjcwNTEgMTkuNzQ2NzA1MSwyNSAxNC41LDI1IEM5LjI1MzI5NDg4LDI1IDUsMjAuNzQ2NzA1MSA1LDE1LjUgQzUsMTAuMjUzMjk0OSA5LjI1MzI5NDg4LDYgMTQuNSw2IEMxNS44NDcxNDI5LDYgMTcuMTI4Nzk0Nyw2LjI4MDQwMDk4IDE4LjI4OTc3NTEsNi43ODYwMjI3NSBaIE0xNy4xNTA0MjI4LDguNDgxNzU4NiBDMTYuMzI2MzU4MSw4LjE3MDM5MjM2IDE1LjQzMzA3NzcsOCAxNC41LDggQzEwLjM1Nzg2NDQsOCA3LDExLjM1Nzg2NDQgNywxNS41IEM3LDE5LjY0MjEzNTYgMTAuMzU3ODY0NCwyMyAxNC41LDIzIEMxOC42NDIxMzU2LDIzIDIyLDE5LjY0MjEzNTYgMjIsMTUuNSBDMjIsMTQuNTY2OTIyMyAyMS44Mjk2MDc2LDEzLjY3MzY0MTkgMjEuNTE4MjQxNCwxMi44NDk1NzcyIEMyMS4xOTYwMzgzLDEyLjk0NzM5NjggMjAuODU0MTYyMiwxMyAyMC41LDEzIEMxOC41NjcwMDM0LDEzIDE3LDExLjQzMjk5NjYgMTcsOS41IEMxNyw5LjE0NTgzNzc4IDE3LjA1MjYwMzIsOC44MDM5NjE2OSAxNy4xNTA0MjI4LDguNDgxNzU4NiBaIE0xNC41LDE3IEMxMy42NzE1NzI5LDE3IDEzLDE2LjMyODQyNzEgMTMsMTUuNSBDMTMsMTQuNjcxNTcyOSAxMy42NzE1NzI5LDE0IDE0LjUsMTQgQzE1LjMyODQyNzEsMTQgMTYsMTQuNjcxNTcyOSAxNiwxNS41IEMxNiwxNi4zMjg0MjcxIDE1LjMyODQyNzEsMTcgMTQuNSwxNyBaIE0yMC41LDExIEMyMS4zMjg0MjcxLDExIDIyLDEwLjMyODQyNzEgMjIsOS41IEMyMiw4LjY3MTU3Mjg4IDIxLjMyODQyNzEsOCAyMC41LDggQzE5LjY3MTU3MjksOCAxOSw4LjY3MTU3Mjg4IDE5LDkuNSBDMTksMTAuMzI4NDI3MSAxOS42NzE1NzI5LDExIDIwLjUsMTEgWiIgaWQ9InBhdGgtMSI+PC9wYXRoPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlN5bWJvbHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJBdG9tcy9JY29ucy9Ub29scy9DaXJjbGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zLjAwMDAwMCwgLTMuMDAwMDAwKSI+CiAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgPHVzZSBpZD0iTWFzayIgZmlsbD0iIzVCNUI1QiIgZmlsbC1ydWxlPSJub256ZXJvIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgPGcgaWQ9IkF0b21zL0NvbG9yL0dyZXkiIG1hc2s9InVybCgjbWFzay0yKSIgZmlsbD0iIzVCNUI1QiI+CiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSIwIiB5PSIwIiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiPjwvcmVjdD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+);\r\n}\r\n.leaflet-pm-toolbar .leaflet-pm-icon-circle-marker {\r\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KCjxzdmcgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjNUI1QjVCIiBzdHJva2Utd2lkdGg9IjgiCiAgICAgZmlsbD0ibm9uZSI+CjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjM1Ii8+CiAgPGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iMyIgZmlsbD0iIzVCNUI1QiIvPgo8L3N2Zz4=);\r\n}\r\n.leaflet-pm-toolbar .leaflet-pm-icon-rectangle {\r\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgPGRlZnM+CiAgICA8cGF0aCBpZD0icmVjdGFuZ2xlLWEiIGQ9Ik0yMywxMC45NjQ1NTU2IEwyMywxOS4wMzU0NDQ0IEMyNC42OTYxNDcxLDE5LjI3ODA1OTMgMjYsMjAuNzM2NzY0IDI2LDIyLjUgQzI2LDI0LjQzMjk5NjYgMjQuNDMyOTk2NiwyNiAyMi41LDI2IEMyMC43MzY3NjQsMjYgMTkuMjc4MDU5MywyNC42OTYxNDcxIDE5LjAzNTQ0NDQsMjMgTDEwLjk2NDU1NTYsMjMgQzEwLjcyMTk0MDcsMjQuNjk2MTQ3MSA5LjI2MzIzNTk1LDI2IDcuNSwyNiBDNS41NjcwMDMzOCwyNiA0LDI0LjQzMjk5NjYgNCwyMi41IEM0LDIwLjczNjc2NCA1LjMwMzg1MjkzLDE5LjI3ODA1OTMgNywxOS4wMzU0NDQ0IEw3LDEwLjk2NDU1NTYgQzUuMzAzODUyOTMsMTAuNzIxOTQwNyA0LDkuMjYzMjM1OTUgNCw3LjUgQzQsNS41NjcwMDMzOCA1LjU2NzAwMzM4LDQgNy41LDQgQzkuMjYzMjM1OTUsNCAxMC43MjE5NDA3LDUuMzAzODUyOTMgMTAuOTY0NTU1Niw3IEwxOS4wMzU0NDQ0LDcgQzE5LjI3ODA1OTMsNS4zMDM4NTI5MyAyMC43MzY3NjQsNCAyMi41LDQgQzI0LjQzMjk5NjYsNCAyNiw1LjU2NzAwMzM4IDI2LDcuNSBDMjYsOS4yNjMyMzU5NSAyNC42OTYxNDcxLDEwLjcyMTk0MDcgMjMsMTAuOTY0NTU1NiBaIE0yMSwxMC42NjMxODQ0IEMyMC4yNzIxNTQsMTAuMzE3NDIyNSAxOS42ODI1Nzc1LDkuNzI3ODQ1OTggMTkuMzM2ODE1Niw5IEwxMC42NjMxODQ0LDkgQzEwLjMxNzQyMjUsOS43Mjc4NDU5OCA5LjcyNzg0NTk4LDEwLjMxNzQyMjUgOSwxMC42NjMxODQ0IEw5LDE5LjMzNjgxNTYgQzkuNzI3ODQ1OTgsMTkuNjgyNTc3NSAxMC4zMTc0MjI1LDIwLjI3MjE1NCAxMC42NjMxODQ0LDIxIEwxOS4zMzY4MTU2LDIxIEMxOS42ODI1Nzc1LDIwLjI3MjE1NCAyMC4yNzIxNTQsMTkuNjgyNTc3NSAyMSwxOS4zMzY4MTU2IEwyMSwxMC42NjMxODQ0IFogTTcuNSw5IEM4LjMyODQyNzEyLDkgOSw4LjMyODQyNzEyIDksNy41IEM5LDYuNjcxNTcyODggOC4zMjg0MjcxMiw2IDcuNSw2IEM2LjY3MTU3Mjg4LDYgNiw2LjY3MTU3Mjg4IDYsNy41IEM2LDguMzI4NDI3MTIgNi42NzE1NzI4OCw5IDcuNSw5IFogTTIyLjUsOSBDMjMuMzI4NDI3MSw5IDI0LDguMzI4NDI3MTIgMjQsNy41IEMyNCw2LjY3MTU3Mjg4IDIzLjMyODQyNzEsNiAyMi41LDYgQzIxLjY3MTU3MjksNiAyMSw2LjY3MTU3Mjg4IDIxLDcuNSBDMjEsOC4zMjg0MjcxMiAyMS42NzE1NzI5LDkgMjIuNSw5IFogTTIyLjUsMjQgQzIzLjMyODQyNzEsMjQgMjQsMjMuMzI4NDI3MSAyNCwyMi41IEMyNCwyMS42NzE1NzI5IDIzLjMyODQyNzEsMjEgMjIuNSwyMSBDMjEuNjcxNTcyOSwyMSAyMSwyMS42NzE1NzI5IDIxLDIyLjUgQzIxLDIzLjMyODQyNzEgMjEuNjcxNTcyOSwyNCAyMi41LDI0IFogTTcuNSwyNCBDOC4zMjg0MjcxMiwyNCA5LDIzLjMyODQyNzEgOSwyMi41IEM5LDIxLjY3MTU3MjkgOC4zMjg0MjcxMiwyMSA3LjUsMjEgQzYuNjcxNTcyODgsMjEgNiwyMS42NzE1NzI5IDYsMjIuNSBDNiwyMy4zMjg0MjcxIDYuNjcxNTcyODgsMjQgNy41LDI0IFoiLz4KICA8L2RlZnM+CiAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMyAtMykiPgogICAgPG1hc2sgaWQ9InJlY3RhbmdsZS1iIiBmaWxsPSIjZmZmIj4KICAgICAgPHVzZSB4bGluazpocmVmPSIjcmVjdGFuZ2xlLWEiLz4KICAgIDwvbWFzaz4KICAgIDx1c2UgZmlsbD0iIzVCNUI1QiIgZmlsbC1ydWxlPSJub256ZXJvIiB4bGluazpocmVmPSIjcmVjdGFuZ2xlLWEiLz4KICAgIDxnIGZpbGw9IiM1QjVCNUIiIG1hc2s9InVybCgjcmVjdGFuZ2xlLWIpIj4KICAgICAgPHJlY3Qgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K);\r\n}\r\n.leaflet-pm-toolbar .leaflet-pm-icon-delete {\r\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjUgKDY3NDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BdG9tcy9JY29ucy9Ub29scy9FcmFzZXI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNMTcuNzg3NDIxOSwxOC40ODEyNTUyIEwxMS42NDgwMDc5LDEzLjM0OTgxODQgTDYuNDA0NjYwMDksMTkuMzgxNjAwMSBMMTAuNTUzOTE1NiwyMi45ODg0OTI5IEwxMy44NjkzNCwyMi45ODg0OTI5IEwxNy43ODc0MjE5LDE4LjQ4MTI1NTIgWiBNMTYuNTA3NDI1MiwyMi45ODg0OTI5IEwyNi4wMDAwMDAyLDIyLjk4ODQ5MjkgTDI2LjAwMDAwMDIsMjQuOTg4NDkyOSBMMTAuMDAwMDAwMiwyNC45ODg0OTI5IEw5LjgwNzA4MzEzLDI0Ljk4ODQ5MjkgTDUuMDkyNTQyMDQsMjAuODkxMDE5MiBDNC4yNTg5MTI4NSwyMC4xNjYzNTY0IDQuMTcwNTc4MTQsMTguOTAzMTExMiA0Ljg5NTI0MDkzLDE4LjA2OTQ4MiBMMTYuMDQ4MjQ0NCw1LjIzOTQxOTE2IEMxNi43NzI5MDcyLDQuNDA1Nzg5OTggMTguMDM2MTUyNSw0LjMxNzQ1NTI2IDE4Ljg2OTc4MTYsNS4wNDIxMTgwNiBMMjQuOTA3NDU4MywxMC4yOTA1OTAzIEMyNS43NDEwODc1LDExLjAxNTI1MzEgMjUuODI5NDIyMiwxMi4yNzg0OTgzIDI1LjEwNDc1OTQsMTMuMTEyMTI3NSBMMTYuNTA3NDI1MiwyMi45ODg0OTI5IFoiIGlkPSJwYXRoLTEiPjwvcGF0aD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJTeW1ib2xzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iQXRvbXMvSWNvbnMvVG9vbHMvRXJhc2VyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMy4wMDAwMDAsIC0zLjAwMDAwMCkiPgogICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgIDx1c2UgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSIjNUI1QjVCIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+);\r\n}\r\n.leaflet-pm-toolbar .leaflet-pm-icon-edit {\r\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgPGRlZnM+CiAgICA8cGF0aCBpZD0iZWRpdF9hbmNob3ItYSIgZD0iTTEzLjUsMTEgQzExLjU2NzAwMzQsMTEgMTAsOS40MzI5OTY2MiAxMCw3LjUgQzEwLDUuNTY3MDAzMzggMTEuNTY3MDAzNCw0IDEzLjUsNCBDMTUuNDMyOTk2Niw0IDE3LDUuNTY3MDAzMzggMTcsNy41IEMxNyw5LjQzMjk5NjYyIDE1LjQzMjk5NjYsMTEgMTMuNSwxMSBaIE0xMy41LDkgQzE0LjMyODQyNzEsOSAxNSw4LjMyODQyNzEyIDE1LDcuNSBDMTUsNi42NzE1NzI4OCAxNC4zMjg0MjcxLDYgMTMuNSw2IEMxMi42NzE1NzI5LDYgMTIsNi42NzE1NzI4OCAxMiw3LjUgQzEyLDguMzI4NDI3MTIgMTIuNjcxNTcyOSw5IDEzLjUsOSBaIE0xMi4wMDAyODg5LDcuNTI5NzM4OTMgQzEyLjAxMjU5ODMsOC4xNjI3MzY3MiAxMi40MTcwMTk3LDguNjk5NjY0MyAxMi45ODA3MTExLDguOTA3Njc5NjYgTDMsMTUgTDMsMTMgTDEyLjAwMDI4ODksNy41Mjk3Mzg5MyBaIE0xNC4yMTcyNzIyLDYuMTgyMjg0NzIgTDE5LjQ1MzEyNSwzIEwyMi42NTg5MzU1LDMgTDE0Ljk4OTEwMiw3LjY4MTczODg1IEMxNC45OTYyOTcxLDcuNjIyMTY0NTkgMTUsNy41NjE1MTQ3MiAxNSw3LjUgQzE1LDYuOTMxMzgzODEgMTQuNjgzNjA5OCw2LjQzNjY2NDUgMTQuMjE3MjcyMiw2LjE4MjI4NDcyIFogTTIzLjQ0MzQwNDIsMTkuMjg1MTczNiBMMjAuMTI4Mjc5OSwxOS4yODUxNzM2IEwyMS44NzI5OTgzLDIzLjUzNDk1MjUgQzIxLjk5NDUyOTYsMjMuODI5NTc3MyAyMS44NTU2NTQ2LDI0LjE1OTkyMDkgMjEuNTc3ODczNCwyNC4yODQ5MjA4IEwyMC4wNDE0Njc1LDI0Ljk1NDUxNDIgQzE5Ljc1NTA2MTMsMjUuMDc5NTE0MSAxOS40MzM4NzM4LDI0LjkzNjY3MDQgMTkuMzEyMzQyNiwyNC42NTA5NTE4IEwxNy42NTQ0MzY3LDIwLjYxNTQ1NDEgTDE0Ljk0NjE4NzMsMjMuNDAxMDE1MSBDMTQuNTg1MjgxMSwyMy43NzIxNzExIDE0LDIzLjQ4NjA0NjMgMTQsMjIuOTk5MjY1MyBMMTQsOS41NzE4MzUzMyBDMTQsOS4wNTkzMzU2MSAxNC42MjI1MzExLDguODA5NDkyIDE0Ljk0NjE1Niw5LjE3MDA4NTU1IEwyMy44MzQwMjkyLDE4LjMxMjAxNzkgQzI0LjE5MjUyOTEsMTguNjYxMzYxNSAyMy45Mjc5OTc5LDE5LjI4NTE3MzYgMjMuNDQzNDA0MiwxOS4yODUxNzM2IFoiLz4KICA8L2RlZnM+CiAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMyAtMykiPgogICAgPG1hc2sgaWQ9ImVkaXRfYW5jaG9yLWIiIGZpbGw9IiNmZmYiPgogICAgICA8dXNlIHhsaW5rOmhyZWY9IiNlZGl0X2FuY2hvci1hIi8+CiAgICA8L21hc2s+CiAgICA8dXNlIGZpbGw9IiM1QjVCNUIiIGZpbGwtcnVsZT0ibm9uemVybyIgeGxpbms6aHJlZj0iI2VkaXRfYW5jaG9yLWEiLz4KICAgIDxnIGZpbGw9IiM1QjVCNUIiIG1hc2s9InVybCgjZWRpdF9hbmNob3ItYikiPgogICAgICA8cmVjdCB3aWR0aD0iMzAiIGhlaWdodD0iMzAiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=);\r\n}\r\n.leaflet-pm-toolbar .leaflet-pm-icon-drag {\r\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgPGRlZnM+CiAgICA8cGF0aCBpZD0ibW92ZS1hIiBkPSJNMjEsMTQgTDIxLDEwIEwyNywxNSBMMjEsMjAgTDIxLDE2IEwxNiwxNiBMMTYsMjEgTDIwLDIxIEwxNSwyNyBMMTAsMjEgTDE0LDIxIEwxNCwxNiBMOSwxNiBMOSwyMCBMMywxNSBMOSwxMCBMOSwxNCBMMTQsMTQgTDE0LDkgTDEwLDkgTDE1LDMgTDIwLDkgTDE2LDkgTDE2LDE0IEwyMSwxNCBaIi8+CiAgPC9kZWZzPgogIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMgLTMpIj4KICAgIDxtYXNrIGlkPSJtb3ZlLWIiIGZpbGw9IiNmZmYiPgogICAgICA8dXNlIHhsaW5rOmhyZWY9IiNtb3ZlLWEiLz4KICAgIDwvbWFzaz4KICAgIDx1c2UgZmlsbD0iI0Q4RDhEOCIgeGxpbms6aHJlZj0iI21vdmUtYSIvPgogICAgPGcgZmlsbD0iIzVCNUI1QiIgbWFzaz0idXJsKCNtb3ZlLWIpIj4KICAgICAgPHJlY3Qgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K);\r\n}\r\n.leaflet-pm-toolbar .leaflet-pm-icon-cut {\r\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjUgKDY3NDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BdG9tcy9JY29ucy9Ub29scy9TY2lzc29yczwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxwYXRoIGQ9Ik0xMi45NjkxNTc0LDEzLjQ5Mzk0MzUgTDIxLjAzMTcwMzIsNS41NDE2NzAxMyBMMjMuNDY0OTQ5OSw1LjY3NzIyOTU3IEwxNy4wNDcwNzEzLDE0LjUxMDY4MTYgTDI3LjU2NjAzMzYsMTcuMTMzMzUzNSBMMjUuNzg5MTk0NCwxOC44MDEyNTg4IEwxNC41ODU0OTUxLDE3Ljg5ODc1MDYgTDEzLjY0ODc5NTUsMTkuMTg4MDA3IEMxMy43OTQ2MzksMTkuMjY1MDk1OCAxMy45MzY3OTg1LDE5LjM1MzQ0MTcgMTQuMDc0MTM3NywxOS40NTMyMjQ1IEMxNS42Mzc5NjQ4LDIwLjU4OTQxMTQgMTUuOTg0NjM1NywyMi43NzgyMDUyIDE0Ljg0ODQ0ODgsMjQuMzQyMDMyNCBDMTMuNzEyMjYxOSwyNS45MDU4NTk1IDExLjUyMzQ2ODEsMjYuMjUyNTMwNCA5Ljk1OTY0MDk2LDI1LjExNjM0MzUgQzguMzk1ODEzODQsMjMuOTgwMTU2NSA4LjA0OTE0Mjk2LDIxLjc5MTM2MjcgOS4xODUzMjk4NiwyMC4yMjc1MzU2IEM5Ljc0NTg3Mjc2LDE5LjQ1NjAxNDUgMTAuNTYyNjE4OCwxOC45ODA3NDc1IDExLjQzNDEyMTgsMTguODMzNjQwNyBMMTIuNjgwNTY1NiwxNy4xMTgwNTc5IEwxMi41MjM5NzI0LDE2LjM3NDcyMTYgTDExLjk1MDY5MzIsMTUuMzAxMjM5MSBMOS44OTMxMDY0NiwxNC43ODgyMjUxIEM5LjEzMDkzNzk2LDE1LjIzNTcyNjEgOC4xOTk3Nzg1NCwxNS4zOTY2NDQ3IDcuMjc0NDUzNTUsMTUuMTY1OTM1MiBDNS4zOTg4NzUxOSwxNC42OTgzMDEgNC4yNTc1MTA5NCwxMi43OTg3NTE5IDQuNzI1MTQ1MTUsMTAuOTIzMTczNiBDNS4xOTI3NzkzNSw5LjA0NzU5NTE5IDcuMDkyMzI4NDYsNy45MDYyMzA5NCA4Ljk2NzkwNjgyLDguMzczODY1MTUgQzEwLjg0MzQ4NTIsOC44NDE0OTkzNSAxMS45ODQ4NDk0LDEwLjc0MTA0ODUgMTEuNTE3MjE1MiwxMi42MTY2MjY4IEMxMS40NzYxNDY0LDEyLjc4MTM0NDkgMTEuNDI0MDMzNSwxMi45NDA0MDAxIDExLjM2MTg2MjcsMTMuMDkzMTk5OSBMMTIuOTY5MTU3NCwxMy40OTM5NDM1IFogTTcuNzU4Mjk3MzUsMTMuMjI1MzQzOCBDOC41NjIxMTY2NCwxMy40MjU3NTg0IDkuMzc2MjA5MTIsMTIuOTM2NjAyMyA5LjU3NjYyMzc4LDEyLjEzMjc4MyBDOS43NzcwMzg0NCwxMS4zMjg5NjM3IDkuMjg3ODgyMzMsMTAuNTE0ODcxMyA4LjQ4NDA2MzAzLDEwLjMxNDQ1NjYgQzcuNjgwMjQzNzMsMTAuMTE0MDQxOSA2Ljg2NjE1MTI2LDEwLjYwMzE5OCA2LjY2NTczNjYsMTEuNDA3MDE3MyBDNi40NjUzMjE5NCwxMi4yMTA4MzY2IDYuOTU0NDc4MDUsMTMuMDI0OTI5MSA3Ljc1ODI5NzM1LDEzLjIyNTM0MzggWiBNMTAuODAzMzYzOSwyMS40MDMxMDYxIEMxMC4zMTY0MjY2LDIyLjA3MzMxNzcgMTAuNDY0OTk5OCwyMy4wMTEzNzIyIDExLjEzNTIxMTUsMjMuNDk4MzA5NSBDMTEuODA1NDIzMSwyMy45ODUyNDY3IDEyLjc0MzQ3NzYsMjMuODM2NjczNSAxMy4yMzA0MTQ4LDIzLjE2NjQ2MTkgQzEzLjcxNzM1MjEsMjIuNDk2MjUwMiAxMy41Njg3Nzg4LDIxLjU1ODE5NTcgMTIuODk4NTY3MiwyMS4wNzEyNTg1IEMxMi4yMjgzNTU2LDIwLjU4NDMyMTIgMTEuMjkwMzAxMSwyMC43MzI4OTQ1IDEwLjgwMzM2MzksMjEuNDAzMTA2MSBaIiBpZD0icGF0aC0xIj48L3BhdGg+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iU3ltYm9scyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkF0b21zL0ljb25zL1Rvb2xzL1NjaXNzb3JzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMy4wMDAwMDAsIC0zLjAwMDAwMCkiPgogICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgIDx1c2UgaWQ9Ik1hc2siIGZpbGw9IiM1QjVCNUIiIGZpbGwtcnVsZT0ibm9uemVybyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYuMDkzMTk0LCAxNS42NjMzNTEpIHJvdGF0ZSgtMzIuMDAwMDAwKSB0cmFuc2xhdGUoLTE2LjA5MzE5NCwgLTE1LjY2MzM1MSkgIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==);\r\n}\r\n\r\n.leaflet-buttons-control-button:hover {\r\n  cursor: pointer;\r\n  background-color: #f4f4f4;\r\n}\r\n.active .leaflet-buttons-control-button {\r\n  box-shadow: inset 0 -1px 5px 2px rgba(81, 77, 77, 0.31);\r\n}\r\n\r\n.leaflet-buttons-control-text-hide {\r\n  display: none;\r\n}\r\n\r\n.button-container {\r\n  position: relative;\r\n}\r\n\r\n.button-container .leaflet-pm-actions-container {\r\n  z-index: 2;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 31px;\r\n  display: none;\r\n  white-space: nowrap;\r\n}\r\n\r\n.leaflet-right .leaflet-pm-toolbar .button-container .leaflet-pm-actions-container {\r\n  right: 31px;\r\n  left: auto;\r\n}\r\n\r\n.button-container.active .leaflet-pm-actions-container {\r\n  display: block;\r\n}\r\n\r\n.button-container .leaflet-pm-actions-container .leaflet-pm-action:last-child {\r\n  border-radius: 0px 3px 3px 0px;\r\n  border-right: 0px;\r\n}\r\n.button-container .leaflet-pm-actions-container .leaflet-pm-action {\r\n  padding: 0px 10px;\r\n  background-color: #666;\r\n  color: #fff;\r\n  display: inline-block;\r\n  width: auto;\r\n  border-right: 1px solid #eee;\r\n  user-select: none;\r\n}\r\n\r\n.button-container .leaflet-pm-actions-container .leaflet-pm-action:hover {\r\n  cursor: pointer;\r\n  background-color: #777;\r\n}\r\n"]}]);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    for (var i = 0; i < modules.length; i++) {
      var item = [].concat(modules[i]);

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "../node_modules/leaflet-easybutton/src/easy-button.js":
/*!*************************************************************!*\
  !*** ../node_modules/leaflet-easybutton/src/easy-button.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function(){

// This is for grouping buttons into a bar
// takes an array of `L.easyButton`s and
// then the usual `.addTo(map)`
L.Control.EasyBar = L.Control.extend({

  options: {
    position:       'topleft',  // part of leaflet's defaults
    id:             null,       // an id to tag the Bar with
    leafletClasses: true        // use leaflet classes?
  },


  initialize: function(buttons, options){

    if(options){
      L.Util.setOptions( this, options );
    }

    this._buildContainer();
    this._buttons = [];

    for(var i = 0; i < buttons.length; i++){
      buttons[i]._bar = this;
      buttons[i]._container = buttons[i].button;
      this._buttons.push(buttons[i]);
      this.container.appendChild(buttons[i].button);
    }

  },


  _buildContainer: function(){
    this._container = this.container = L.DomUtil.create('div', '');
    this.options.leafletClasses && L.DomUtil.addClass(this.container, 'leaflet-bar easy-button-container leaflet-control');
    this.options.id && (this.container.id = this.options.id);
  },


  enable: function(){
    L.DomUtil.addClass(this.container, 'enabled');
    L.DomUtil.removeClass(this.container, 'disabled');
    this.container.setAttribute('aria-hidden', 'false');
    return this;
  },


  disable: function(){
    L.DomUtil.addClass(this.container, 'disabled');
    L.DomUtil.removeClass(this.container, 'enabled');
    this.container.setAttribute('aria-hidden', 'true');
    return this;
  },


  onAdd: function () {
    return this.container;
  },

  addTo: function (map) {
    this._map = map;

    for(var i = 0; i < this._buttons.length; i++){
      this._buttons[i]._map = map;
    }

    var container = this._container = this.onAdd(map),
        pos = this.getPosition(),
        corner = map._controlCorners[pos];

    L.DomUtil.addClass(container, 'leaflet-control');

    if (pos.indexOf('bottom') !== -1) {
      corner.insertBefore(container, corner.firstChild);
    } else {
      corner.appendChild(container);
    }

    return this;
  }

});

L.easyBar = function(){
  var args = [L.Control.EasyBar];
  for(var i = 0; i < arguments.length; i++){
    args.push( arguments[i] );
  }
  return new (Function.prototype.bind.apply(L.Control.EasyBar, args));
};

// L.EasyButton is the actual buttons
// can be called without being grouped into a bar
L.Control.EasyButton = L.Control.extend({

  options: {
    position:  'topleft',       // part of leaflet's defaults

    id:        null,            // an id to tag the button with

    type:      'replace',       // [(replace|animate)]
                                // replace swaps out elements
                                // animate changes classes with all elements inserted

    states:    [],              // state names look like this
                                // {
                                //   stateName: 'untracked',
                                //   onClick: function(){ handle_nav_manually(); };
                                //   title: 'click to make inactive',
                                //   icon: 'fa-circle',    // wrapped with <a>
                                // }

    leafletClasses:   true,     // use leaflet styles for the button
    tagName:          'button',
  },



  initialize: function(icon, onClick, title, id){

    // clear the states manually
    this.options.states = [];

    // add id to options
    if(id != null){
      this.options.id = id;
    }

    // storage between state functions
    this.storage = {};

    // is the last item an object?
    if( typeof arguments[arguments.length-1] === 'object' ){

      // if so, it should be the options
      L.Util.setOptions( this, arguments[arguments.length-1] );
    }

    // if there aren't any states in options
    // use the early params
    if( this.options.states.length === 0 &&
        typeof icon  === 'string' &&
        typeof onClick === 'function'){

      // turn the options object into a state
      this.options.states.push({
        icon: icon,
        onClick: onClick,
        title: typeof title === 'string' ? title : ''
      });
    }

    // curate and move user's states into
    // the _states for internal use
    this._states = [];

    for(var i = 0; i < this.options.states.length; i++){
      this._states.push( new State(this.options.states[i], this) );
    }

    this._buildButton();

    this._activateState(this._states[0]);

  },

  _buildButton: function(){

    this.button = L.DomUtil.create(this.options.tagName, '');

    if (this.options.tagName === 'button') {
        this.button.setAttribute('type', 'button');
    }

    if (this.options.id ){
      this.button.id = this.options.id;
    }

    if (this.options.leafletClasses){
      L.DomUtil.addClass(this.button, 'easy-button-button leaflet-bar-part leaflet-interactive');
    }

    // don't let double clicks and mousedown get to the map
    L.DomEvent.addListener(this.button, 'dblclick', L.DomEvent.stop);
    L.DomEvent.addListener(this.button, 'mousedown', L.DomEvent.stop);
    L.DomEvent.addListener(this.button, 'mouseup', L.DomEvent.stop);

    // take care of normal clicks
    L.DomEvent.addListener(this.button,'click', function(e){
      L.DomEvent.stop(e);
      this._currentState.onClick(this, this._map ? this._map : null );
      this._map && this._map.getContainer().focus();
    }, this);

    // prep the contents of the control
    if(this.options.type == 'replace'){
      this.button.appendChild(this._currentState.icon);
    } else {
      for(var i=0;i<this._states.length;i++){
        this.button.appendChild(this._states[i].icon);
      }
    }
  },


  _currentState: {
    // placeholder content
    stateName: 'unnamed',
    icon: (function(){ return document.createElement('span'); })()
  },



  _states: null, // populated on init



  state: function(newState){

    // when called with no args, it's a getter
    if (arguments.length === 0) {
      return this._currentState.stateName;
    }

    // activate by name
    if(typeof newState == 'string'){

      this._activateStateNamed(newState);

    // activate by index
    } else if (typeof newState == 'number'){

      this._activateState(this._states[newState]);
    }

    return this;
  },


  _activateStateNamed: function(stateName){
    for(var i = 0; i < this._states.length; i++){
      if( this._states[i].stateName == stateName ){
        this._activateState( this._states[i] );
      }
    }
  },

  _activateState: function(newState){

    if( newState === this._currentState ){

      // don't touch the dom if it'll just be the same after
      return;

    } else {

      // swap out elements... if you're into that kind of thing
      if( this.options.type == 'replace' ){
        this.button.appendChild(newState.icon);
        this.button.removeChild(this._currentState.icon);
      }

      if( newState.title ){
        this.button.title = newState.title;
      } else {
        this.button.removeAttribute('title');
      }

      // update classes for animations
      for(var i=0;i<this._states.length;i++){
        L.DomUtil.removeClass(this._states[i].icon, this._currentState.stateName + '-active');
        L.DomUtil.addClass(this._states[i].icon, newState.stateName + '-active');
      }

      // update classes for animations
      L.DomUtil.removeClass(this.button, this._currentState.stateName + '-active');
      L.DomUtil.addClass(this.button, newState.stateName + '-active');

      // update the record
      this._currentState = newState;

    }
  },

  enable: function(){
    L.DomUtil.addClass(this.button, 'enabled');
    L.DomUtil.removeClass(this.button, 'disabled');
    this.button.setAttribute('aria-hidden', 'false');
    return this;
  },

  disable: function(){
    L.DomUtil.addClass(this.button, 'disabled');
    L.DomUtil.removeClass(this.button, 'enabled');
    this.button.setAttribute('aria-hidden', 'true');
    return this;
  },

  onAdd: function(map){
    var bar = L.easyBar([this], {
      position: this.options.position,
      leafletClasses: this.options.leafletClasses
    });
    this._anonymousBar = bar;
    this._container = bar.container;
    return this._anonymousBar.container;
  },

  removeFrom: function (map) {
    if (this._map === map)
      this.remove();
    return this;
  },

});

L.easyButton = function(/* args will pass automatically */){
  var args = Array.prototype.concat.apply([L.Control.EasyButton],arguments);
  return new (Function.prototype.bind.apply(L.Control.EasyButton, args));
};

/*************************
 *
 * util functions
 *
 *************************/

// constructor for states so only curated
// states end up getting called
function State(template, easyButton){

  this.title = template.title;
  this.stateName = template.stateName ? template.stateName : 'unnamed-state';

  // build the wrapper
  this.icon = L.DomUtil.create('span', '');

  L.DomUtil.addClass(this.icon, 'button-state state-' + this.stateName.replace(/(^\s*|\s*$)/g,''));
  this.icon.innerHTML = buildIcon(template.icon);
  this.onClick = L.Util.bind(template.onClick?template.onClick:function(){}, easyButton);
}

function buildIcon(ambiguousIconString) {

  var tmpIcon;

  // does this look like html? (i.e. not a class)
  if( ambiguousIconString.match(/[&;=<>"']/) ){

    // if so, the user should have put in html
    // so move forward as such
    tmpIcon = ambiguousIconString;

  // then it wasn't html, so
  // it's a class list, figure out what kind
  } else {
      ambiguousIconString = ambiguousIconString.replace(/(^\s*|\s*$)/g,'');
      tmpIcon = L.DomUtil.create('span', '');

      if( ambiguousIconString.indexOf('fa-') === 0 ){
        L.DomUtil.addClass(tmpIcon, 'fa '  + ambiguousIconString)
      } else if ( ambiguousIconString.indexOf('glyphicon-') === 0 ) {
        L.DomUtil.addClass(tmpIcon, 'glyphicon ' + ambiguousIconString)
      } else {
        L.DomUtil.addClass(tmpIcon, /*rollwithit*/ ambiguousIconString)
      }

      // make this a string so that it's easy to set innerHTML below
      tmpIcon = tmpIcon.outerHTML;
  }

  return tmpIcon;
}

})();


/***/ }),

/***/ "../node_modules/style-loader/lib/addStyles.js":
/*!*****************************************************!*\
  !*** ../node_modules/style-loader/lib/addStyles.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "../node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "../node_modules/style-loader/lib/urls.js":
/*!************************************************!*\
  !*** ../node_modules/style-loader/lib/urls.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./chrome.ts":
/*!*******************!*\
  !*** ./chrome.ts ***!
  \*******************/
/*! exports provided: WorldmapChrome */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldmapChrome", function() { return WorldmapChrome; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);



var WorldmapChrome =
/** @class */
function () {
  function WorldmapChrome(ctrl) {
    this.ctrl = ctrl;
    this.settings = ctrl.settings;
  }

  WorldmapChrome.prototype.updatePanelCorner = function (messages) {
    // Display multiple messages in panel corner.
    // Todo: Investigate whether it would be better to override `getInfoContent()` right away.
    // Todo: How to open the tooltip right away?
    if (lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](messages)) {
      return;
    }

    var tooltipMessage = messages.join('\n');

    var _this = this;

    this.ctrl.$scope.$apply(function () {
      _this.ctrl.error = tooltipMessage; // Colorize the tooltip corner in a different color to indicate its not a native exception.
      // .panel-info-corner-inner » border-left-color

      var color = 'orange';

      _this.ctrl.$element.find('.panel-info-corner-inner').css({
        'border-left-color': color
      }); // Failed attempt to colorize the drop content.
      // .drop-content » background-color + border-color
      //_this.ctrl.$element.find('.drop-content').css({'background-color': color, 'border-color': color});
      // Failed attempt to open the tooltip drop content right away.

      /*
      if (false) {
        const cornerInfoElem = _this.ctrl.$element.find('.panel-info-corner');
        console.log('cornerInfoElem:', cornerInfoElem);
        const drop = new Drop({target: cornerInfoElem[0]});
        //drop.open();
        drop.trigger('open');
      }
      */

    });
  };

  WorldmapChrome.prototype.removeEscapeKeyBinding = function () {
    /*
     * Prevent navigation
     * - https://github.com/grafana/grafana/issues/11636
     * - https://github.com/grafana/grafana/issues/13706
     *
     * Embed entire dashboard
     * - https://github.com/grafana/grafana/issues/4757
     * - https://github.com/grafana/grafana/issues/10979
     * - https://github.com/grafana/grafana/issues/13493
     *
     * References
     * - https://github.com/grafana/grafana/blob/v6.1.6/public/app/core/services/keybindingSrv.ts
     * - https://github.com/grafana/grafana/blob/v6.1.6/public/app/plugins/datasource/grafana-azure-monitor-datasource/editor/query_field.tsx
     * - https://github.com/daq-tools/grafanimate/blob/0.5.5/grafanimate/grafana-studio.js
     *
     */
    this.getKeybindingSrv().unbind('esc', 'keydown');
  };

  WorldmapChrome.prototype.restoreEscapeKeyBinding = function () {
    this.getKeybindingSrv().setupGlobal();
  };

  WorldmapChrome.prototype.getKeybindingSrv = function () {
    var app = window['angular'].element('grafana-app');
    return app.injector().get('keybindingSrv');
  };

  WorldmapChrome.prototype.removeTimePickerNav = function () {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.gf-timepicker-nav').hide();
  };

  WorldmapChrome.prototype.restoreTimePickerNav = function () {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.gf-timepicker-nav').show();
  };

  return WorldmapChrome;
}();



/***/ }),

/***/ "./core.ts":
/*!*****************!*\
  !*** ./core.ts ***!
  \*****************/
/*! exports provided: WorldmapCore, DataError, LocationError, MappingError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldmapCore", function() { return WorldmapCore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataError", function() { return DataError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationError", function() { return LocationError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MappingError", function() { return MappingError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data_formatter */ "./data_formatter.ts");





var WorldmapCore =
/** @class */
function () {
  function WorldmapCore(ctrl) {
    this.ctrl = ctrl;
    this.settings = ctrl.settings;
    this.errors = ctrl.errors;
    this.dataFormatter = new _data_formatter__WEBPACK_IMPORTED_MODULE_3__["default"](ctrl);
  }

  WorldmapCore.prototype.acquireLocations = function () {
    /*
     * Acquire location information from different sources.
     *
     * Essentially, this requests a JSON resource over HTTP, optionally using JSONP.
     * Either, it reaches out to a configured URL or it will use the builtin
     * JSON location sources like `countries.json` or `states.json`.
     *
     * In case of `locationData in ['table', 'geohash', 'json result']` this is
     * just a noop as location information is coming from the data source itself.
     */
    console.info('Acquiring location data'); // Acquire locations by JSONP HTTP request.

    if (this.settings.locationData === 'jsonp endpoint' || this.settings.locationData === 'table+jsonp') {
      if (!this.settings.jsonpUrl || !this.settings.jsonpCallback) {
        throw new LocationError('Loading locations from JSONP endpoint requires URL and callback');
      }

      jquery__WEBPACK_IMPORTED_MODULE_1___default.a.ajax({
        type: 'GET',
        url: this.settings.jsonpUrl + '?callback=?',
        contentType: 'application/json',
        jsonpCallback: this.settings.jsonpCallback,
        dataType: 'jsonp',
        beforeSend: function beforeSend(jqXHR, settings) {
          jqXHR.url = settings.url;
        }
      }).then(this.setLocations.bind(this), this.signalLocationRequestError.bind(this)); // Acquire locations by JSON HTTP request.
    } else if (this.settings.locationData === 'json endpoint' || this.settings.locationData === 'table+json') {
      if (!this.settings.jsonUrl) {
        throw new LocationError('Loading locations from JSON endpoint requires URL');
      } // Use `$.ajax` over `$.getJSON` to unify error handling.


      jquery__WEBPACK_IMPORTED_MODULE_1___default.a.ajax({
        dataType: 'json',
        url: this.settings.jsonUrl,
        beforeSend: function beforeSend(jqXHR, settings) {
          jqXHR.url = settings.url;
        }
      }).then(this.setLocations.bind(this), this.signalLocationRequestError.bind(this)); // Locations are coming from data source itself, so this is a noop.
    } else if (lodash__WEBPACK_IMPORTED_MODULE_2__["includes"](['table', 'geohash', 'json result'], this.settings.locationData)) {
      // Do nothing as location data is coming from the data source itself.
      this.setLocations(); // Acquire locations from builtin JSON documents.
    } else if (this.settings.locationData) {
      // Compute URL to builtin JSON resource.
      var url = "public/plugins/" + this.ctrl.pluginId + "/data/" + this.settings.locationData + '.json'; // Use `$.ajax` over `$.getJSON` to unify error handling.

      jquery__WEBPACK_IMPORTED_MODULE_1___default.a.ajax({
        dataType: 'json',
        url: url,
        beforeSend: function beforeSend(jqXHR, settings) {
          jqXHR.url = settings.url;
        }
      }).then(this.setLocations.bind(this), this.signalLocationRequestError.bind(this)); // Bail out if panel operator did not specify mapping yet.
    } else {
      throw new LocationError('Data format and location mapping not specified');
    }
  };

  WorldmapCore.prototype.setLocations = function (locations) {
    if (locations === void 0) {
      locations = [];
    } //console.log('Setting locations:', locations);


    this.ctrl.setLocations(locations);
  };

  WorldmapCore.prototype.decodeData = function (dataList, dataFormat) {
    /*
     * Decode data coming from the data source according to the designated
     * data format and mapping settings. This is the main workhorse as it
     * accounts for different types of ingress data.
     *
     * For interpreting the data appropriately, this dispatches to different
     * decoding flavors.
     *
     * 1. geohash
     *    - The data source can yield data in table or timeseries formats.
     *    - Location information is picked from database fields.
     *
     * 2. table format
     *    - The data source should yield data in table format.
     *    - Location information is picked from database fields.
     *
     * 3. json result
     *    - The data source must directly yield location information.
     *
     * 4. timeseries format (default)
     *    - The data source should yield data in timeseries format.
     *    - The metric name is used to lookup location information from
     *      an out-of-band location source.
     */
    var data = [];
    var series;

    if (this.settings.locationData === 'geohash') {
      console.info('Interpreting data as table or timeseries format');
      this.dataFormatter.setGeohashValues(dataList, data); // Todo: Get rid of `showTableOptions()` by refactoring the format/mapping type subsystem.
    } else if (this.ctrl.showTableOptions()) {
      this.assertDataFormat(dataFormat === _data_formatter__WEBPACK_IMPORTED_MODULE_3__["DataFormat"].Table, dataFormat, _data_formatter__WEBPACK_IMPORTED_MODULE_3__["DataFormat"].Table);
      console.info('Interpreting data as table format');
      var tableData = dataList.map(_data_formatter__WEBPACK_IMPORTED_MODULE_3__["default"].tableHandler.bind(this));
      this.dataFormatter.setTableValues(tableData, data);
    } else if (this.settings.locationData === 'json result') {
      this.assertDataFormat(dataFormat !== 'table', dataFormat, 'JSON');
      console.info('Interpreting data as JSON format'); // Todo: Don't misuse `this.series` for this as it is a completely different format.
      //  Better pass the payload to `setJsonValues()` like seen with `setTableValues()`.

      series = dataList;
      this.dataFormatter.setJsonValues(data);
    } else if (this.settings.locationData) {
      this.assertDataFormat(dataFormat === _data_formatter__WEBPACK_IMPORTED_MODULE_3__["DataFormat"].Timeseries, dataFormat, _data_formatter__WEBPACK_IMPORTED_MODULE_3__["DataFormat"].Timeseries);
      console.info('Interpreting data as timeseries format');
      series = dataList.map(this.dataFormatter.seriesHandler.bind(this));
      this.dataFormatter.setTimeseriesValues(series, data);
    } else {
      throw new DataError('No data format and mapping selected');
    }

    return {
      data: data,
      series: series
    };
  };

  WorldmapCore.prototype.getMapDimensions = function () {
    /*
     * Compute optimal map center and zoom level
     * based on data and settings.
     */
    var center = {
      mapFitData: this.settings.mapFitData,
      mapCenter: this.settings.mapCenter,
      mapCenterLatitude: this.settings.mapCenterLatitude,
      mapCenterLongitude: this.settings.mapCenterLongitude,
      mapZoomLevel: this.settings.initialZoom,
      mapZoomByRadius: this.settings.mapZoomByRadius
    };
    var mapCenter = this.ctrl.getSelectedMapCenter();

    if (this.ctrl.data.length && this.settings.mapCenter === 'First GeoHash') {
      var first = lodash__WEBPACK_IMPORTED_MODULE_2__["first"](this.ctrl.data);

      center.mapCenterLatitude = first.locationLatitude;
      center.mapCenterLongitude = first.locationLongitude;
    } else if (this.ctrl.data.length && this.settings.mapCenter === 'Last GeoHash') {
      var last = lodash__WEBPACK_IMPORTED_MODULE_2__["last"](this.ctrl.data);

      center.mapCenterLatitude = last.locationLatitude;
      center.mapCenterLongitude = last.locationLongitude;
    } else if (mapCenter) {
      center.mapCenterLatitude = mapCenter.mapCenterLatitude;
      center.mapCenterLongitude = mapCenter.mapCenterLongitude;
      center.mapZoomLevel = this.settings.initialZoom || mapCenter.initialZoom;
    } // Convert scalar types and apply reasonable defaults.


    center.mapCenterLatitude = parseFloat(center.mapCenterLatitude);
    center.mapCenterLongitude = parseFloat(center.mapCenterLongitude);
    center.mapZoomLevel = parseInt(center.mapZoomLevel, 10) || 1;
    center.mapZoomByRadius = parseFloat(center.mapZoomByRadius) || null;
    return center;
  };

  WorldmapCore.prototype.assertDataFormat = function (condition, dataFormatIs, dataFormatShould) {
    /*
     * Sanity check the ingress data format against the designated
     * data format and emit appropriate error signal on mismatch
     * after clearing the location information.
     */
    if (!condition) {
      this.ctrl.resetLocations(); // Todo: Really?

      this.ctrl.render();
      var message = this.getDataFormatMismatchMessage(dataFormatIs, dataFormatShould);
      throw new DataError(message);
    }
  };

  WorldmapCore.prototype.getDataFormatMismatchMessage = function (dataFormatIs, dataFormatShould) {
    var message = "Format mismatch: " + dataFormatIs + " data " + ("can not be interpreted as " + dataFormatShould + " format");
    return message;
  };

  WorldmapCore.prototype.signalLocationError = function (message) {
    this.errors.add(message, {
      domain: 'location'
    });
    this.setLocations();
  };

  WorldmapCore.prototype.signalLocationRequestError = function (jqXHR, textStatus, errorThrown) {
    var message = "Unable to load locations in JSON format from \"" + jqXHR.url + "\".\n" + ("  - The response status was `" + jqXHR.status + " " + jqXHR.statusText + "`.\n") + ("  - The content type was `" + jqXHR.getResponseHeader('Content-Type') + "`.\n") + ("  - The error name was \"" + textStatus + "\".\n") + ("  - The full error was \"" + errorThrown + "\".");
    this.signalLocationError(message);
  };

  return WorldmapCore;
}();



var DataError =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DataError, _super);

  function DataError(message) {
    var _this = _super.call(this, message) || this;

    _this.message = message;
    _this.name = 'DataError';
    return _this;
  }

  return DataError;
}(Error);



var LocationError =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LocationError, _super);

  function LocationError(message) {
    var _this = _super.call(this, message) || this;

    _this.message = message;
    _this.name = 'LocationError';
    return _this;
  }

  return LocationError;
}(Error);



var MappingError =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MappingError, _super);

  function MappingError(message) {
    var _this = _super.call(this, message) || this;

    _this.message = message;
    _this.name = 'MappingError';
    return _this;
  }

  return MappingError;
}(Error);



/***/ }),

/***/ "./data_formatter.ts":
/*!***************************!*\
  !*** ./data_formatter.ts ***!
  \***************************/
/*! exports provided: DataFormat, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFormat", function() { return DataFormat; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _geohash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geohash */ "./geohash.ts");
/* harmony import */ var grafana_app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grafana/app/core/utils/kbn */ "grafana/app/core/utils/kbn");
/* harmony import */ var grafana_app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(grafana_app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var grafana_app_core_time_series2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grafana/app/core/time_series2 */ "grafana/app/core/time_series2");
/* harmony import */ var grafana_app_core_time_series2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(grafana_app_core_time_series2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core */ "./core.ts");





var DataFormat;

(function (DataFormat) {
  DataFormat["Table"] = "table";
  DataFormat["Timeseries"] = "timeseries"; // Fixme: Add detection for other data formats.
  //Json = 'json',
})(DataFormat || (DataFormat = {}));

var DataFormatter =
/** @class */
function () {
  function DataFormatter(ctrl) {
    this.ctrl = ctrl;
    this.settings = ctrl.settings; // Backward compatibility for tests after adding the `PluginSettings` proxy.
    // Todo: Don't worry, this will go away.

    if (!this.settings) {
      this.settings = ctrl.panel;
    }
  }

  DataFormatter.analyzeData = function (dataList) {
    /*
     * Introspect the ingress data and try to heuristically
     * find out about its data format and character.
     *
     * This is still in its infancy but should be improved to make
     * the plugin more robust wrt. to applying the correct mapping
     * flavors to the corresponding ingress data format.
     *
     * Todo: Implement decoding from multiple queries.
     *
     */
    var dataInfo = {};

    if (!lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](dataList)) {
      var metric0 = dataList[0];
      dataInfo.type = metric0.type;

      if (metric0.type === DataFormat.Table) {
        dataInfo.type = DataFormat.Table;
        dataInfo.count = metric0.rows.length;
      } else if (metric0.datapoints) {
        dataInfo.type = DataFormat.Timeseries;
        dataInfo.count = dataList.length;
      } else {
        throw new _core__WEBPACK_IMPORTED_MODULE_4__["DataError"]('Todo: Implement "analyzeData" for other data sources');
      }
    }

    return dataInfo;
  };

  DataFormatter.prototype.seriesHandler = function (seriesData) {
    var series = new grafana_app_core_time_series2__WEBPACK_IMPORTED_MODULE_3___default.a({
      datapoints: seriesData.datapoints,
      alias: seriesData.target
    });
    series.flotpairs = series.getFlotPairs(this.settings.nullPointMode);
    return series;
  };

  DataFormatter.prototype.setTimeseriesValues = function (seriesData, data) {
    var _this = this;

    if (seriesData && seriesData.length > 0) {
      var highestValue_1 = 0;
      var lowestValue_1 = Number.MAX_VALUE;
      seriesData.forEach(function (serie) {
        var lastPoint = lodash__WEBPACK_IMPORTED_MODULE_0__["last"](serie.datapoints);

        var lastValue = lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"](lastPoint) ? lastPoint[0] : null;

        var location = lodash__WEBPACK_IMPORTED_MODULE_0__["find"](_this.ctrl.locations, function (loc) {
          return loc.key.toUpperCase() === serie.alias.toUpperCase();
        });

        if (!location) {
          return;
        }

        if (lodash__WEBPACK_IMPORTED_MODULE_0__["isString"](lastValue)) {
          data.push({
            key: serie.alias,
            value: 0,
            valueFormatted: lastValue,
            valueRounded: 0
          });
        } else {
          // Todo: Bring this up to speed with the current state in `setTableValues`.
          var dataValue = {
            key: serie.alias,
            locationName: location.name,
            locationLatitude: location.latitude,
            locationLongitude: location.longitude,
            value: serie.stats[_this.settings.valueName],
            valueFormatted: lastValue,
            valueRounded: 0
          };

          if (dataValue.value > highestValue_1) {
            highestValue_1 = dataValue.value;
          }

          if (dataValue.value < lowestValue_1) {
            lowestValue_1 = dataValue.value;
          }

          dataValue.valueRounded = grafana_app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_2___default.a.roundValue(dataValue.value, parseInt(_this.settings.decimals, 10) || 0);
          data.push(dataValue);
        }
      });
      data.highestValue = highestValue_1;
      data.lowestValue = lowestValue_1;
      data.valueRange = highestValue_1 - lowestValue_1;
    } else {
      this.addWarning('No data in timeseries format received');
    }
  };

  DataFormatter.prototype.createDataValue = function (encodedGeohash, decodedGeohash, locationName, value, link) {
    // Todo: Bring this up to speed with the current state in `setTableValues`.
    var dataValue = {
      key: encodedGeohash,
      locationName: locationName,
      locationLatitude: decodedGeohash.latitude,
      locationLongitude: decodedGeohash.longitude,
      value: value,
      valueFormatted: value,
      valueRounded: 0,
      link: link
    };
    dataValue.valueRounded = grafana_app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_2___default.a.roundValue(dataValue.value, this.settings.decimals || 0);
    return dataValue;
  };

  DataFormatter.prototype.decodeGeohashSafe = function (encodedGeohash) {
    // Safely decode the geohash value, either by raising an exception or by ignoring it.
    if (!encodedGeohash) {
      if (!this.settings.ignoreEmptyGeohashValues) {
        throw new _core__WEBPACK_IMPORTED_MODULE_4__["DataError"]('geohash value missing or empty');
      }

      return;
    }

    try {
      var decodedGeohash = Object(_geohash__WEBPACK_IMPORTED_MODULE_1__["default"])(encodedGeohash);
      return decodedGeohash;
    } catch (e) {
      if (!this.settings.ignoreInvalidGeohashValues) {
        throw e;
      }

      return;
    }
  };

  DataFormatter.prototype.setGeohashValues = function (dataList, data) {
    var _this = this;

    if (!this.settings.esGeoPoint) {
      throw new _core__WEBPACK_IMPORTED_MODULE_4__["MappingError"]('geohash field not configured');
    }

    if (dataList && dataList.length > 0) {
      var highestValue_2 = 0;
      var lowestValue_2 = Number.MAX_VALUE;
      dataList.forEach(function (result) {
        // Process table format data.
        if (result.type === 'table') {
          var geoHashField_1 = _this.settings.esGeoPoint; // Sanity check: Croak if the designated geohash column does not exist in ingress data.

          if (!lodash__WEBPACK_IMPORTED_MODULE_0__["includes"](lodash__WEBPACK_IMPORTED_MODULE_0__["map"](result.columns, 'text'), geoHashField_1)) {
            throw new _core__WEBPACK_IMPORTED_MODULE_4__["MappingError"]("Field \"" + _this.settings.esGeoPoint + "\" not found in database");
          }

          var columnNames_1 = {};
          result.columns.forEach(function (column, columnIndex) {
            columnNames_1[column.text] = columnIndex;
          });
          result.rows.forEach(function (row) {
            var encodedGeohash = row[columnNames_1[geoHashField_1]]; // Safely decode the geohash value.

            var decodedGeohash = _this.decodeGeohashSafe(encodedGeohash);

            if (!decodedGeohash) {
              return;
            }

            var locationName = _this.settings.esLocationName ? row[columnNames_1[_this.settings.esLocationName]] : encodedGeohash;
            var value = row[columnNames_1[_this.settings.esMetric]];
            var link = _this.settings.esLink ? row[columnNames_1[_this.settings.esLink]] : null;

            var dataValue = _this.createDataValue(encodedGeohash, decodedGeohash, locationName, value, link);

            if (dataValue.value > highestValue_2) {
              highestValue_2 = dataValue.value;
            }

            if (dataValue.value < lowestValue_2) {
              lowestValue_2 = dataValue.value;
            }

            data.push(dataValue);
          });
          data.highestValue = highestValue_2;
          data.lowestValue = lowestValue_2;
          data.valueRange = highestValue_2 - lowestValue_2; // Process timeseries format data.
        } else {
          result.datapoints.forEach(function (datapoint) {
            var encodedGeohash = datapoint[_this.settings.esGeoPoint]; // Safely decode the geohash value.

            var decodedGeohash = _this.decodeGeohashSafe(encodedGeohash);

            if (!decodedGeohash) {
              return;
            }

            var locationName = _this.settings.esLocationName ? datapoint[_this.settings.esLocationName] : encodedGeohash;
            var value = datapoint[_this.settings.esMetric];
            var link = _this.settings.esLink ? datapoint[_this.settings.esLink] : null;

            var dataValue = _this.createDataValue(encodedGeohash, decodedGeohash, locationName, value, link);

            if (dataValue.value > highestValue_2) {
              highestValue_2 = dataValue.value;
            }

            if (dataValue.value < lowestValue_2) {
              lowestValue_2 = dataValue.value;
            }

            data.push(dataValue);
          });
          data.highestValue = highestValue_2;
          data.lowestValue = lowestValue_2;
          data.valueRange = highestValue_2 - lowestValue_2;
        }
      });
    } else {
      this.addWarning('No data received from geohash query');
    }
  };

  DataFormatter.tableHandler = function (tableData) {
    var datapoints = [];

    if (tableData.type === 'table') {
      var columnNames_2 = {};
      tableData.columns.forEach(function (column, columnIndex) {
        columnNames_2[columnIndex] = column.text;
      });
      tableData.rows.forEach(function (row) {
        var datapoint = {};
        row.forEach(function (value, columnIndex) {
          var key = columnNames_2[columnIndex];
          datapoint[key] = value;
        });
        datapoints.push(datapoint);
      });
    }

    return datapoints;
  };

  DataFormatter.prototype.setTableValues = function (tableData, data) {
    var _this = this;

    if (tableData && tableData.length > 0) {
      var highestValue_3 = 0;
      var lowestValue_3 = Number.MAX_VALUE; // Todo: Using hardcoded `tableData[0]` means
      //  this will only use the first active query?

      tableData[0].forEach(function (datapoint) {
        var key;
        var longitude;
        var latitude; // Todo: Think about introducing a "Ignore decoding errors" control option
        //  in order to compensate for anything in here where the shit might hit the fan.
        //  Essentially, this would mask all exceptions raised from this code.
        // Assign value.

        var value = datapoint[_this.settings.tableQueryOptions.metricField];
        var valueRounded = grafana_app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_2___default.a.roundValue(value, _this.settings.decimals || 0); // Assign latitude and longitude, either directly or by decoding from geohash.

        if (_this.settings.tableQueryOptions.queryType === 'geohash') {
          var encodedGeohash = datapoint[_this.settings.tableQueryOptions.geohashField]; // Safely decode the geohash value.

          var decodedGeohash = _this.decodeGeohashSafe(encodedGeohash);

          if (!decodedGeohash) {
            return;
          }

          latitude = decodedGeohash.latitude;
          longitude = decodedGeohash.longitude;
          key = encodedGeohash;
        } else {
          latitude = datapoint[_this.settings.tableQueryOptions.latitudeField];
          longitude = datapoint[_this.settings.tableQueryOptions.longitudeField];
          key = latitude + "_" + longitude;
        } // Assign label.


        var label = datapoint[_this.settings.tableQueryOptions.labelField]; // For improved labelling, attempt to resolve value from table's "labelLocationKeyField" against JSON location key.

        var labelJsonKey = datapoint[_this.settings.tableQueryOptions.labelLocationKeyField];

        var location = lodash__WEBPACK_IMPORTED_MODULE_0__["find"](_this.ctrl.locations, function (loc) {
          return loc.key === labelJsonKey;
        }); // Assign link.


        var link = datapoint[_this.settings.tableQueryOptions.linkField] || null; // Compute effective location name.

        var locationNameFromTable = label;
        var locationNameFromJson = location ? location.name : undefined;
        var locationNameEffective = locationNameFromJson || locationNameFromTable || key;
        var dataValue = {
          // Add location information.
          key: key,
          locationName: locationNameEffective,
          locationLatitude: latitude,
          locationLongitude: longitude,
          // Add metric name and values.
          label: label,
          value: value,
          valueFormatted: value,
          valueRounded: valueRounded,
          // Add link.
          link: link
        }; // Add all values from the original datapoint as attributes prefixed with `__field_`.

        for (var key_1 in datapoint) {
          var value_1 = datapoint[key_1];
          key_1 = '__field_' + key_1;
          dataValue[key_1] = value_1;
        } // Bookkeeping for computing valueRange.


        if (dataValue.value > highestValue_3) {
          highestValue_3 = dataValue.value;
        }

        if (dataValue.value < lowestValue_3) {
          lowestValue_3 = dataValue.value;
        }

        data.push(dataValue);
      });
      data.highestValue = highestValue_3;
      data.lowestValue = lowestValue_3;
      data.valueRange = highestValue_3 - lowestValue_3;
    } else {
      this.addWarning('No data in table format received');
    }
  };

  DataFormatter.prototype.setJsonValues = function (data) {
    if (this.ctrl.series && this.ctrl.series.length > 0) {
      var highestValue_4 = 0;
      var lowestValue_4 = Number.MAX_VALUE;
      this.ctrl.series.forEach(function (point) {
        // Todo: Bring this up to speed with the current state in `setTableValues`.
        var dataValue = {
          key: point.key,
          locationName: point.name,
          locationLatitude: point.latitude,
          locationLongitude: point.longitude,
          value: point.value !== undefined ? point.value : 1,
          valueRounded: 0
        };

        if (dataValue.value > highestValue_4) {
          highestValue_4 = dataValue.value;
        }

        if (dataValue.value < lowestValue_4) {
          lowestValue_4 = dataValue.value;
        }

        dataValue.valueRounded = Math.round(dataValue.value);
        data.push(dataValue);
      });
      data.highestValue = highestValue_4;
      data.lowestValue = lowestValue_4;
      data.valueRange = highestValue_4 - lowestValue_4;
    } else {
      this.addWarning('No data in JSON format received');
    }
  };

  DataFormatter.prototype.addWarning = function (message) {
    this.ctrl.errors.add(message, {
      level: 'warning',
      domain: 'data'
    });
  };

  return DataFormatter;
}();

/* harmony default export */ __webpack_exports__["default"] = (DataFormatter);

/***/ }),

/***/ "./errors.ts":
/*!*******************!*\
  !*** ./errors.ts ***!
  \*******************/
/*! exports provided: ErrorManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorManager", function() { return ErrorManager; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);



var ErrorManager =
/** @class */
function () {
  function ErrorManager() {
    /*
     * A generic error manager which is able to manage warning
     * and error messages for different application
     * domains throughout its lifecycle.
     *
     * It can be used to collect notification messages during
     * arbitrary processing steps in order to display them to
     * the user afterwards appropriately.
     *
     * A reasonable example would be to populate a tooltip
     * or another error notification box widget with the
     * corresponding information.
     */
    this.domains = [];
    this.storage = {}; // All unqualified error messages will go to the "default"
    // application domain, so let's register this right away.

    this.registerDomain('default');
  }

  ErrorManager.prototype.registerDomain = function (name) {
    /*
     * Add another application domain for collecting error messages.
     */
    this.domains.push(name);
    this.reset(name);
  };

  ErrorManager.prototype.registerDomains = function () {
    var names = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      names[_i] = arguments[_i];
    }
    /*
     * Add multiple application domains for collecting error messages.
     */


    names.forEach(this.registerDomain.bind(this));
  };

  ErrorManager.prototype.add = function (message, args) {
    /*
     * Main method for adding an error item.
     */
    var level = args.level || 'error';
    var domain = args.domain || 'default';
    var item = this.makeItem(message, level);
    console.error(JSON.stringify(item));

    if (!this.storage[domain]) {
      throw new Error("Error domain \"" + domain + "\" not registered");
    }

    this.storage[domain].push(item);
  };

  ErrorManager.prototype.reset = function () {
    var domains = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      domains[_i] = arguments[_i];
    }

    var _this = this;

    domains.forEach(function (domain) {
      _this.storage[domain] = [];
    });
  };

  ErrorManager.prototype.resetAll = function () {
    this.reset.apply(this, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this.domains));
  };

  ErrorManager.prototype.getAll = function () {
    /*
     * Get all error items for all application domains.
     */
    var _this = this;

    var errors = [];
    this.domains.forEach(function (domain) {
      _this.storage[domain].forEach(function (error) {
        error.location = domain;
        errors.push(error);
      });
    });
    return errors;
  };

  ErrorManager.prototype.getMessages = function () {
    /*
     * Get formatted error messages for all application domains.
     */
    var messages = [];
    this.getAll().forEach(function (item) {
      var suffix = item.name && item.name !== 'Error' ? " (" + item.name + ")" : '';
      var message = "- " + item.message + suffix;
      messages.push(message);
    });
    return messages;
  };

  ErrorManager.prototype.makeItem = function (thing, level) {
    /*
     * Make up the representation of a single `ErrorItem`.
     */
    var errorItem = {};

    if (thing instanceof Error) {
      errorItem.status = 'error';
      errorItem.name = thing.name;
      errorItem.message = thing.message;
    } else if (typeof thing === 'string') {
      errorItem.name = 'Error';
      errorItem.message = thing;
    } else if (thing instanceof Object) {
      errorItem = thing;
    } // Fill some defaults.


    lodash__WEBPACK_IMPORTED_MODULE_1__["defaults"](errorItem, {
      status: level,
      name: 'Error',
      message: 'Unknown'
    });

    return errorItem;
  };

  return ErrorManager;
}();



/***/ }),

/***/ "./geohash.ts":
/*!********************!*\
  !*** ./geohash.ts ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return decodeGeoHash; });
function decodeGeoHash(geohash) {
  if (!geohash || geohash.length === 0) {
    throw new Error('Unable to decode empty geohash');
  }

  var BITS = [16, 8, 4, 2, 1];
  var BASE32 = '0123456789bcdefghjkmnpqrstuvwxyz';
  var isEven = true;
  var lat = [];
  var lon = [];
  lat[0] = -90.0;
  lat[1] = 90.0;
  lon[0] = -180.0;
  lon[1] = 180.0;
  var base32Decoded;
  geohash.split('').forEach(function (item) {
    base32Decoded = BASE32.indexOf(item);
    BITS.forEach(function (mask) {
      if (isEven) {
        refineInterval(lon, base32Decoded, mask);
      } else {
        refineInterval(lat, base32Decoded, mask);
      }

      isEven = !isEven;
    });
  });
  var latCenter = (lat[0] + lat[1]) / 2;
  var lonCenter = (lon[0] + lon[1]) / 2;
  return {
    latitude: latCenter,
    longitude: lonCenter
  };
}

function refineInterval(interval, base32Decoded, mask) {
  /* tslint:disable no-bitwise*/
  if (base32Decoded & mask) {
    interval[0] = (interval[0] + interval[1]) / 2;
  } else {
    interval[1] = (interval[0] + interval[1]) / 2;
  }
}

/***/ }),

/***/ "./images/layers.png":
/*!***************************!*\
  !*** ./images/layers.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/layers.png";

/***/ }),

/***/ "./images/marker-icon.png":
/*!********************************!*\
  !*** ./images/marker-icon.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/marker-icon.png";

/***/ }),

/***/ "./libs/leaflet.js":
/*!*************************!*\
  !*** ./libs/leaflet.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable */

/* @preserve
 * Leaflet 1.3.1+Detached: ba6f97fff8647e724e4dfe66d2ed7da11f908989.ba6f97f, a JS library for interactive maps. http://leafletjs.com
 * (c) 2010-2017 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(window, function (exports) {
  'use strict';

  var version = "1.3.1+HEAD.ba6f97f";
  /*
   * @namespace Util
   *
   * Various utility functions, used by Leaflet internally.
   */

  var freeze = Object.freeze;

  Object.freeze = function (obj) {
    return obj;
  }; // @function extend(dest: Object, src?: Object): Object
  // Merges the properties of the `src` object (or multiple objects) into `dest` object and returns the latter. Has an `L.extend` shortcut.


  function extend(dest) {
    var i, j, len, src;

    for (j = 1, len = arguments.length; j < len; j++) {
      src = arguments[j];

      for (i in src) {
        dest[i] = src[i];
      }
    }

    return dest;
  } // @function create(proto: Object, properties?: Object): Object
  // Compatibility polyfill for [Object.create](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/create)


  var create = Object.create || function () {
    function F() {}

    return function (proto) {
      F.prototype = proto;
      return new F();
    };
  }(); // @function bind(fn: Function, …): Function
  // Returns a new function bound to the arguments passed, like [Function.prototype.bind](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
  // Has a `L.bind()` shortcut.


  function bind(fn, obj) {
    var slice = Array.prototype.slice;

    if (fn.bind) {
      return fn.bind.apply(fn, slice.call(arguments, 1));
    }

    var args = slice.call(arguments, 2);
    return function () {
      return fn.apply(obj, args.length ? args.concat(slice.call(arguments)) : arguments);
    };
  } // @property lastId: Number
  // Last unique ID used by [`stamp()`](#util-stamp)


  var lastId = 0; // @function stamp(obj: Object): Number
  // Returns the unique ID of an object, assigning it one if it doesn't have it.

  function stamp(obj) {
    /*eslint-disable */
    obj._leaflet_id = obj._leaflet_id || ++lastId;
    return obj._leaflet_id;
    /* eslint-enable */
  } // @function throttle(fn: Function, time: Number, context: Object): Function
  // Returns a function which executes function `fn` with the given scope `context`
  // (so that the `this` keyword refers to `context` inside `fn`'s code). The function
  // `fn` will be called no more than one time per given amount of `time`. The arguments
  // received by the bound function will be any arguments passed when binding the
  // function, followed by any arguments passed when invoking the bound function.
  // Has an `L.throttle` shortcut.


  function throttle(fn, time, context) {
    var lock, args, wrapperFn, later;

    later = function later() {
      // reset lock and call if queued
      lock = false;

      if (args) {
        wrapperFn.apply(context, args);
        args = false;
      }
    };

    wrapperFn = function wrapperFn() {
      if (lock) {
        // called too soon, queue to call later
        args = arguments;
      } else {
        // call and lock until later
        fn.apply(context, arguments);
        setTimeout(later, time);
        lock = true;
      }
    };

    return wrapperFn;
  } // @function wrapNum(num: Number, range: Number[], includeMax?: Boolean): Number
  // Returns the number `num` modulo `range` in such a way so it lies within
  // `range[0]` and `range[1]`. The returned value will be always smaller than
  // `range[1]` unless `includeMax` is set to `true`.


  function wrapNum(x, range, includeMax) {
    var max = range[1],
        min = range[0],
        d = max - min;
    return x === max && includeMax ? x : ((x - min) % d + d) % d + min;
  } // @function falseFn(): Function
  // Returns a function which always returns `false`.


  function falseFn() {
    return false;
  } // @function formatNum(num: Number, digits?: Number): Number
  // Returns the number `num` rounded to `digits` decimals, or to 6 decimals by default.


  function formatNum(num, digits) {
    var pow = Math.pow(10, digits === undefined ? 6 : digits);
    return Math.round(num * pow) / pow;
  } // @function trim(str: String): String
  // Compatibility polyfill for [String.prototype.trim](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)


  function trim(str) {
    return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
  } // @function splitWords(str: String): String[]
  // Trims and splits the string on whitespace and returns the array of parts.


  function splitWords(str) {
    return trim(str).split(/\s+/);
  } // @function setOptions(obj: Object, options: Object): Object
  // Merges the given properties to the `options` of the `obj` object, returning the resulting options. See `Class options`. Has an `L.setOptions` shortcut.


  function setOptions(obj, options) {
    if (!obj.hasOwnProperty('options')) {
      obj.options = obj.options ? create(obj.options) : {};
    }

    for (var i in options) {
      obj.options[i] = options[i];
    }

    return obj.options;
  } // @function getParamString(obj: Object, existingUrl?: String, uppercase?: Boolean): String
  // Converts an object into a parameter URL string, e.g. `{a: "foo", b: "bar"}`
  // translates to `'?a=foo&b=bar'`. If `existingUrl` is set, the parameters will
  // be appended at the end. If `uppercase` is `true`, the parameter names will
  // be uppercased (e.g. `'?A=foo&B=bar'`)


  function getParamString(obj, existingUrl, uppercase) {
    var params = [];

    for (var i in obj) {
      params.push(encodeURIComponent(uppercase ? i.toUpperCase() : i) + '=' + encodeURIComponent(obj[i]));
    }

    return (!existingUrl || existingUrl.indexOf('?') === -1 ? '?' : '&') + params.join('&');
  }

  var templateRe = /\{ *([\w_-]+) *\}/g; // @function template(str: String, data: Object): String
  // Simple templating facility, accepts a template string of the form `'Hello {a}, {b}'`
  // and a data object like `{a: 'foo', b: 'bar'}`, returns evaluated string
  // `('Hello foo, bar')`. You can also specify functions instead of strings for
  // data values — they will be evaluated passing `data` as an argument.

  function template(str, data) {
    return str.replace(templateRe, function (str, key) {
      var value = data[key];

      if (value === undefined) {
        throw new Error('No value provided for variable ' + str);
      } else if (typeof value === 'function') {
        value = value(data);
      }

      return value;
    });
  } // @function isArray(obj): Boolean
  // Compatibility polyfill for [Array.isArray](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)


  var isArray = Array.isArray || function (obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  }; // @function indexOf(array: Array, el: Object): Number
  // Compatibility polyfill for [Array.prototype.indexOf](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)


  function indexOf(array, el) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] === el) {
        return i;
      }
    }

    return -1;
  } // @property emptyImageUrl: String
  // Data URI string containing a base64-encoded empty GIF image.
  // Used as a hack to free memory from unused images on WebKit-powered
  // mobile devices (by setting image `src` to this string).


  var emptyImageUrl = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='; // inspired by http://paulirish.com/2011/requestanimationframe-for-smart-animating/

  function getPrefixed(name) {
    return window['webkit' + name] || window['moz' + name] || window['ms' + name];
  }

  var lastTime = 0; // fallback for IE 7-8

  function timeoutDefer(fn) {
    var time = +new Date(),
        timeToCall = Math.max(0, 16 - (time - lastTime));
    lastTime = time + timeToCall;
    return window.setTimeout(fn, timeToCall);
  }

  var requestFn = window.requestAnimationFrame || getPrefixed('RequestAnimationFrame') || timeoutDefer;

  var cancelFn = window.cancelAnimationFrame || getPrefixed('CancelAnimationFrame') || getPrefixed('CancelRequestAnimationFrame') || function (id) {
    window.clearTimeout(id);
  }; // @function requestAnimFrame(fn: Function, context?: Object, immediate?: Boolean): Number
  // Schedules `fn` to be executed when the browser repaints. `fn` is bound to
  // `context` if given. When `immediate` is set, `fn` is called immediately if
  // the browser doesn't have native support for
  // [`window.requestAnimationFrame`](https://developer.mozilla.org/docs/Web/API/window/requestAnimationFrame),
  // otherwise it's delayed. Returns a request ID that can be used to cancel the request.


  function requestAnimFrame(fn, context, immediate) {
    if (immediate && requestFn === timeoutDefer) {
      fn.call(context);
    } else {
      return requestFn.call(window, bind(fn, context));
    }
  } // @function cancelAnimFrame(id: Number): undefined
  // Cancels a previous `requestAnimFrame`. See also [window.cancelAnimationFrame](https://developer.mozilla.org/docs/Web/API/window/cancelAnimationFrame).


  function cancelAnimFrame(id) {
    if (id) {
      cancelFn.call(window, id);
    }
  }

  var Util = (Object.freeze || Object)({
    freeze: freeze,
    extend: extend,
    create: create,
    bind: bind,
    lastId: lastId,
    stamp: stamp,
    throttle: throttle,
    wrapNum: wrapNum,
    falseFn: falseFn,
    formatNum: formatNum,
    trim: trim,
    splitWords: splitWords,
    setOptions: setOptions,
    getParamString: getParamString,
    template: template,
    isArray: isArray,
    indexOf: indexOf,
    emptyImageUrl: emptyImageUrl,
    requestFn: requestFn,
    cancelFn: cancelFn,
    requestAnimFrame: requestAnimFrame,
    cancelAnimFrame: cancelAnimFrame
  }); // @class Class
  // @aka L.Class
  // @section
  // @uninheritable
  // Thanks to John Resig and Dean Edwards for inspiration!

  function Class() {}

  Class.extend = function (props) {
    // @function extend(props: Object): Function
    // [Extends the current class](#class-inheritance) given the properties to be included.
    // Returns a Javascript function that is a class constructor (to be called with `new`).
    var NewClass = function NewClass() {
      // call the constructor
      if (this.initialize) {
        this.initialize.apply(this, arguments);
      } // call all constructor hooks


      this.callInitHooks();
    };

    var parentProto = NewClass.__super__ = this.prototype;
    var proto = create(parentProto);
    proto.constructor = NewClass;
    NewClass.prototype = proto; // inherit parent's statics

    for (var i in this) {
      if (this.hasOwnProperty(i) && i !== 'prototype' && i !== '__super__') {
        NewClass[i] = this[i];
      }
    } // mix static properties into the class


    if (props.statics) {
      extend(NewClass, props.statics);
      delete props.statics;
    } // mix includes into the prototype


    if (props.includes) {
      checkDeprecatedMixinEvents(props.includes);
      extend.apply(null, [proto].concat(props.includes));
      delete props.includes;
    } // merge options


    if (proto.options) {
      props.options = extend(create(proto.options), props.options);
    } // mix given properties into the prototype


    extend(proto, props);
    proto._initHooks = []; // add method for calling all hooks

    proto.callInitHooks = function () {
      if (this._initHooksCalled) {
        return;
      }

      if (parentProto.callInitHooks) {
        parentProto.callInitHooks.call(this);
      }

      this._initHooksCalled = true;

      for (var i = 0, len = proto._initHooks.length; i < len; i++) {
        proto._initHooks[i].call(this);
      }
    };

    return NewClass;
  }; // @function include(properties: Object): this
  // [Includes a mixin](#class-includes) into the current class.


  Class.include = function (props) {
    extend(this.prototype, props);
    return this;
  }; // @function mergeOptions(options: Object): this
  // [Merges `options`](#class-options) into the defaults of the class.


  Class.mergeOptions = function (options) {
    extend(this.prototype.options, options);
    return this;
  }; // @function addInitHook(fn: Function): this
  // Adds a [constructor hook](#class-constructor-hooks) to the class.


  Class.addInitHook = function (fn) {
    // (Function) || (String, args...)
    var args = Array.prototype.slice.call(arguments, 1);
    var init = typeof fn === 'function' ? fn : function () {
      this[fn].apply(this, args);
    };
    this.prototype._initHooks = this.prototype._initHooks || [];

    this.prototype._initHooks.push(init);

    return this;
  };

  function checkDeprecatedMixinEvents(includes) {
    if (typeof L === 'undefined' || !L || !L.Mixin) {
      return;
    }

    includes = isArray(includes) ? includes : [includes];

    for (var i = 0; i < includes.length; i++) {
      if (includes[i] === L.Mixin.Events) {
        console.warn('Deprecated include of L.Mixin.Events: ' + 'this property will be removed in future releases, ' + 'please inherit from L.Evented instead.', new Error().stack);
      }
    }
  }
  /*
   * @class Evented
   * @aka L.Evented
   * @inherits Class
   *
   * A set of methods shared between event-powered classes (like `Map` and `Marker`). Generally, events allow you to execute some function when something happens with an object (e.g. the user clicks on the map, causing the map to fire `'click'` event).
   *
   * @example
   *
   * ```js
   * map.on('click', function(e) {
   * 	alert(e.latlng);
   * } );
   * ```
   *
   * Leaflet deals with event listeners by reference, so if you want to add a listener and then remove it, define it as a function:
   *
   * ```js
   * function onClick(e) { ... }
   *
   * map.on('click', onClick);
   * map.off('click', onClick);
   * ```
   */


  var Events = {
    /* @method on(type: String, fn: Function, context?: Object): this
     * Adds a listener function (`fn`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. `'click dblclick'`).
     *
     * @alternative
     * @method on(eventMap: Object): this
     * Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
     */
    on: function on(types, fn, context) {
      // types can be a map of types/handlers
      if (_typeof(types) === 'object') {
        for (var type in types) {
          // we don't process space-separated events here for performance;
          // it's a hot path since Layer uses the on(obj) syntax
          this._on(type, types[type], fn);
        }
      } else {
        // types can be a string of space-separated words
        types = splitWords(types);

        for (var i = 0, len = types.length; i < len; i++) {
          this._on(types[i], fn, context);
        }
      }

      return this;
    },

    /* @method off(type: String, fn?: Function, context?: Object): this
     * Removes a previously added listener function. If no function is specified, it will remove all the listeners of that particular event from the object. Note that if you passed a custom context to `on`, you must pass the same context to `off` in order to remove the listener.
     *
     * @alternative
     * @method off(eventMap: Object): this
     * Removes a set of type/listener pairs.
     *
     * @alternative
     * @method off: this
     * Removes all listeners to all events on the object.
     */
    off: function off(types, fn, context) {
      if (!types) {
        // clear all listeners if called without arguments
        delete this._events;
      } else if (_typeof(types) === 'object') {
        for (var type in types) {
          this._off(type, types[type], fn);
        }
      } else {
        types = splitWords(types);

        for (var i = 0, len = types.length; i < len; i++) {
          this._off(types[i], fn, context);
        }
      }

      return this;
    },
    // attach listener (without syntactic sugar now)
    _on: function _on(type, fn, context) {
      this._events = this._events || {};
      /* get/init listeners for type */

      var typeListeners = this._events[type];

      if (!typeListeners) {
        typeListeners = [];
        this._events[type] = typeListeners;
      }

      if (context === this) {
        // Less memory footprint.
        context = undefined;
      }

      var newListener = {
        fn: fn,
        ctx: context
      },
          listeners = typeListeners; // check if fn already there

      for (var i = 0, len = listeners.length; i < len; i++) {
        if (listeners[i].fn === fn && listeners[i].ctx === context) {
          return;
        }
      }

      listeners.push(newListener);
    },
    _off: function _off(type, fn, context) {
      var listeners, i, len;

      if (!this._events) {
        return;
      }

      listeners = this._events[type];

      if (!listeners) {
        return;
      }

      if (!fn) {
        // Set all removed listeners to noop so they are not called if remove happens in fire
        for (i = 0, len = listeners.length; i < len; i++) {
          listeners[i].fn = falseFn;
        } // clear all listeners for a type if function isn't specified


        delete this._events[type];
        return;
      }

      if (context === this) {
        context = undefined;
      }

      if (listeners) {
        // find fn and remove it
        for (i = 0, len = listeners.length; i < len; i++) {
          var l = listeners[i];

          if (l.ctx !== context) {
            continue;
          }

          if (l.fn === fn) {
            // set the removed listener to noop so that's not called if remove happens in fire
            l.fn = falseFn;

            if (this._firingCount) {
              /* copy array in case events are being fired */
              this._events[type] = listeners = listeners.slice();
            }

            listeners.splice(i, 1);
            return;
          }
        }
      }
    },
    // @method fire(type: String, data?: Object, propagate?: Boolean): this
    // Fires an event of the specified type. You can optionally provide an data
    // object — the first argument of the listener function will contain its
    // properties. The event can optionally be propagated to event parents.
    fire: function fire(type, data, propagate) {
      if (!this.listens(type, propagate)) {
        return this;
      }

      var event = extend({}, data, {
        type: type,
        target: this,
        sourceTarget: data && data.sourceTarget || this
      });

      if (this._events) {
        var listeners = this._events[type];

        if (listeners) {
          this._firingCount = this._firingCount + 1 || 1;

          for (var i = 0, len = listeners.length; i < len; i++) {
            var l = listeners[i];
            l.fn.call(l.ctx || this, event);
          }

          this._firingCount--;
        }
      }

      if (propagate) {
        // propagate the event to parents (set with addEventParent)
        this._propagateEvent(event);
      }

      return this;
    },
    // @method listens(type: String): Boolean
    // Returns `true` if a particular event type has any listeners attached to it.
    listens: function listens(type, propagate) {
      var listeners = this._events && this._events[type];

      if (listeners && listeners.length) {
        return true;
      }

      if (propagate) {
        // also check parents for listeners if event propagates
        for (var id in this._eventParents) {
          if (this._eventParents[id].listens(type, propagate)) {
            return true;
          }
        }
      }

      return false;
    },
    // @method once(…): this
    // Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
    once: function once(types, fn, context) {
      if (_typeof(types) === 'object') {
        for (var type in types) {
          this.once(type, types[type], fn);
        }

        return this;
      }

      var handler = bind(function () {
        this.off(types, fn, context).off(types, handler, context);
      }, this); // add a listener that's executed once and removed after that

      return this.on(types, fn, context).on(types, handler, context);
    },
    // @method addEventParent(obj: Evented): this
    // Adds an event parent - an `Evented` that will receive propagated events
    addEventParent: function addEventParent(obj) {
      this._eventParents = this._eventParents || {};
      this._eventParents[stamp(obj)] = obj;
      return this;
    },
    // @method removeEventParent(obj: Evented): this
    // Removes an event parent, so it will stop receiving propagated events
    removeEventParent: function removeEventParent(obj) {
      if (this._eventParents) {
        delete this._eventParents[stamp(obj)];
      }

      return this;
    },
    _propagateEvent: function _propagateEvent(e) {
      for (var id in this._eventParents) {
        this._eventParents[id].fire(e.type, extend({
          layer: e.target,
          propagatedFrom: e.target
        }, e), true);
      }
    }
  }; // aliases; we should ditch those eventually
  // @method addEventListener(…): this
  // Alias to [`on(…)`](#evented-on)

  Events.addEventListener = Events.on; // @method removeEventListener(…): this
  // Alias to [`off(…)`](#evented-off)
  // @method clearAllEventListeners(…): this
  // Alias to [`off()`](#evented-off)

  Events.removeEventListener = Events.clearAllEventListeners = Events.off; // @method addOneTimeEventListener(…): this
  // Alias to [`once(…)`](#evented-once)

  Events.addOneTimeEventListener = Events.once; // @method fireEvent(…): this
  // Alias to [`fire(…)`](#evented-fire)

  Events.fireEvent = Events.fire; // @method hasEventListeners(…): Boolean
  // Alias to [`listens(…)`](#evented-listens)

  Events.hasEventListeners = Events.listens;
  var Evented = Class.extend(Events);
  /*
   * @class Point
   * @aka L.Point
   *
   * Represents a point with `x` and `y` coordinates in pixels.
   *
   * @example
   *
   * ```js
   * var point = L.point(200, 300);
   * ```
   *
   * All Leaflet methods and options that accept `Point` objects also accept them in a simple Array form (unless noted otherwise), so these lines are equivalent:
   *
   * ```js
   * map.panBy([200, 300]);
   * map.panBy(L.point(200, 300));
   * ```
   *
   * Note that `Point` does not inherit from Leafet's `Class` object,
   * which means new classes can't inherit from it, and new methods
   * can't be added to it with the `include` function.
   */

  function Point(x, y, round) {
    // @property x: Number; The `x` coordinate of the point
    this.x = round ? Math.round(x) : x; // @property y: Number; The `y` coordinate of the point

    this.y = round ? Math.round(y) : y;
  }

  var trunc = Math.trunc || function (v) {
    return v > 0 ? Math.floor(v) : Math.ceil(v);
  };

  Point.prototype = {
    // @method clone(): Point
    // Returns a copy of the current point.
    clone: function clone() {
      return new Point(this.x, this.y);
    },
    // @method add(otherPoint: Point): Point
    // Returns the result of addition of the current and the given points.
    add: function add(point) {
      // non-destructive, returns a new point
      return this.clone()._add(toPoint(point));
    },
    _add: function _add(point) {
      // destructive, used directly for performance in situations where it's safe to modify existing point
      this.x += point.x;
      this.y += point.y;
      return this;
    },
    // @method subtract(otherPoint: Point): Point
    // Returns the result of subtraction of the given point from the current.
    subtract: function subtract(point) {
      return this.clone()._subtract(toPoint(point));
    },
    _subtract: function _subtract(point) {
      this.x -= point.x;
      this.y -= point.y;
      return this;
    },
    // @method divideBy(num: Number): Point
    // Returns the result of division of the current point by the given number.
    divideBy: function divideBy(num) {
      return this.clone()._divideBy(num);
    },
    _divideBy: function _divideBy(num) {
      this.x /= num;
      this.y /= num;
      return this;
    },
    // @method multiplyBy(num: Number): Point
    // Returns the result of multiplication of the current point by the given number.
    multiplyBy: function multiplyBy(num) {
      return this.clone()._multiplyBy(num);
    },
    _multiplyBy: function _multiplyBy(num) {
      this.x *= num;
      this.y *= num;
      return this;
    },
    // @method scaleBy(scale: Point): Point
    // Multiply each coordinate of the current point by each coordinate of
    // `scale`. In linear algebra terms, multiply the point by the
    // [scaling matrix](https://en.wikipedia.org/wiki/Scaling_%28geometry%29#Matrix_representation)
    // defined by `scale`.
    scaleBy: function scaleBy(point) {
      return new Point(this.x * point.x, this.y * point.y);
    },
    // @method unscaleBy(scale: Point): Point
    // Inverse of `scaleBy`. Divide each coordinate of the current point by
    // each coordinate of `scale`.
    unscaleBy: function unscaleBy(point) {
      return new Point(this.x / point.x, this.y / point.y);
    },
    // @method round(): Point
    // Returns a copy of the current point with rounded coordinates.
    round: function round() {
      return this.clone()._round();
    },
    _round: function _round() {
      this.x = Math.round(this.x);
      this.y = Math.round(this.y);
      return this;
    },
    // @method floor(): Point
    // Returns a copy of the current point with floored coordinates (rounded down).
    floor: function floor() {
      return this.clone()._floor();
    },
    _floor: function _floor() {
      this.x = Math.floor(this.x);
      this.y = Math.floor(this.y);
      return this;
    },
    // @method ceil(): Point
    // Returns a copy of the current point with ceiled coordinates (rounded up).
    ceil: function ceil() {
      return this.clone()._ceil();
    },
    _ceil: function _ceil() {
      this.x = Math.ceil(this.x);
      this.y = Math.ceil(this.y);
      return this;
    },
    // @method trunc(): Point
    // Returns a copy of the current point with truncated coordinates (rounded towards zero).
    trunc: function trunc() {
      return this.clone()._trunc();
    },
    _trunc: function _trunc() {
      this.x = trunc(this.x);
      this.y = trunc(this.y);
      return this;
    },
    // @method distanceTo(otherPoint: Point): Number
    // Returns the cartesian distance between the current and the given points.
    distanceTo: function distanceTo(point) {
      point = toPoint(point);
      var x = point.x - this.x,
          y = point.y - this.y;
      return Math.sqrt(x * x + y * y);
    },
    // @method equals(otherPoint: Point): Boolean
    // Returns `true` if the given point has the same coordinates.
    equals: function equals(point) {
      point = toPoint(point);
      return point.x === this.x && point.y === this.y;
    },
    // @method contains(otherPoint: Point): Boolean
    // Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
    contains: function contains(point) {
      point = toPoint(point);
      return Math.abs(point.x) <= Math.abs(this.x) && Math.abs(point.y) <= Math.abs(this.y);
    },
    // @method toString(): String
    // Returns a string representation of the point for debugging purposes.
    toString: function toString() {
      return 'Point(' + formatNum(this.x) + ', ' + formatNum(this.y) + ')';
    }
  }; // @factory L.point(x: Number, y: Number, round?: Boolean)
  // Creates a Point object with the given `x` and `y` coordinates. If optional `round` is set to true, rounds the `x` and `y` values.
  // @alternative
  // @factory L.point(coords: Number[])
  // Expects an array of the form `[x, y]` instead.
  // @alternative
  // @factory L.point(coords: Object)
  // Expects a plain object of the form `{x: Number, y: Number}` instead.

  function toPoint(x, y, round) {
    if (x instanceof Point) {
      return x;
    }

    if (isArray(x)) {
      return new Point(x[0], x[1]);
    }

    if (x === undefined || x === null) {
      return x;
    }

    if (_typeof(x) === 'object' && 'x' in x && 'y' in x) {
      return new Point(x.x, x.y);
    }

    return new Point(x, y, round);
  }
  /*
   * @class Bounds
   * @aka L.Bounds
   *
   * Represents a rectangular area in pixel coordinates.
   *
   * @example
   *
   * ```js
   * var p1 = L.point(10, 10),
   * p2 = L.point(40, 60),
   * bounds = L.bounds(p1, p2);
   * ```
   *
   * All Leaflet methods that accept `Bounds` objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
   *
   * ```js
   * otherBounds.intersects([[10, 10], [40, 60]]);
   * ```
   *
   * Note that `Bounds` does not inherit from Leafet's `Class` object,
   * which means new classes can't inherit from it, and new methods
   * can't be added to it with the `include` function.
   */


  function Bounds(a, b) {
    if (!a) {
      return;
    }

    var points = b ? [a, b] : a;

    for (var i = 0, len = points.length; i < len; i++) {
      this.extend(points[i]);
    }
  }

  Bounds.prototype = {
    // @method extend(point: Point): this
    // Extends the bounds to contain the given point.
    extend: function extend(point) {
      // (Point)
      point = toPoint(point); // @property min: Point
      // The top left corner of the rectangle.
      // @property max: Point
      // The bottom right corner of the rectangle.

      if (!this.min && !this.max) {
        this.min = point.clone();
        this.max = point.clone();
      } else {
        this.min.x = Math.min(point.x, this.min.x);
        this.max.x = Math.max(point.x, this.max.x);
        this.min.y = Math.min(point.y, this.min.y);
        this.max.y = Math.max(point.y, this.max.y);
      }

      return this;
    },
    // @method getCenter(round?: Boolean): Point
    // Returns the center point of the bounds.
    getCenter: function getCenter(round) {
      return new Point((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, round);
    },
    // @method getBottomLeft(): Point
    // Returns the bottom-left point of the bounds.
    getBottomLeft: function getBottomLeft() {
      return new Point(this.min.x, this.max.y);
    },
    // @method getTopRight(): Point
    // Returns the top-right point of the bounds.
    getTopRight: function getTopRight() {
      // -> Point
      return new Point(this.max.x, this.min.y);
    },
    // @method getTopLeft(): Point
    // Returns the top-left point of the bounds (i.e. [`this.min`](#bounds-min)).
    getTopLeft: function getTopLeft() {
      return this.min; // left, top
    },
    // @method getBottomRight(): Point
    // Returns the bottom-right point of the bounds (i.e. [`this.max`](#bounds-max)).
    getBottomRight: function getBottomRight() {
      return this.max; // right, bottom
    },
    // @method getSize(): Point
    // Returns the size of the given bounds
    getSize: function getSize() {
      return this.max.subtract(this.min);
    },
    // @method contains(otherBounds: Bounds): Boolean
    // Returns `true` if the rectangle contains the given one.
    // @alternative
    // @method contains(point: Point): Boolean
    // Returns `true` if the rectangle contains the given point.
    contains: function contains(obj) {
      var min, max;

      if (typeof obj[0] === 'number' || obj instanceof Point) {
        obj = toPoint(obj);
      } else {
        obj = toBounds(obj);
      }

      if (obj instanceof Bounds) {
        min = obj.min;
        max = obj.max;
      } else {
        min = max = obj;
      }

      return min.x >= this.min.x && max.x <= this.max.x && min.y >= this.min.y && max.y <= this.max.y;
    },
    // @method intersects(otherBounds: Bounds): Boolean
    // Returns `true` if the rectangle intersects the given bounds. Two bounds
    // intersect if they have at least one point in common.
    intersects: function intersects(bounds) {
      // (Bounds) -> Boolean
      bounds = toBounds(bounds);
      var min = this.min,
          max = this.max,
          min2 = bounds.min,
          max2 = bounds.max,
          xIntersects = max2.x >= min.x && min2.x <= max.x,
          yIntersects = max2.y >= min.y && min2.y <= max.y;
      return xIntersects && yIntersects;
    },
    // @method overlaps(otherBounds: Bounds): Boolean
    // Returns `true` if the rectangle overlaps the given bounds. Two bounds
    // overlap if their intersection is an area.
    overlaps: function overlaps(bounds) {
      // (Bounds) -> Boolean
      bounds = toBounds(bounds);
      var min = this.min,
          max = this.max,
          min2 = bounds.min,
          max2 = bounds.max,
          xOverlaps = max2.x > min.x && min2.x < max.x,
          yOverlaps = max2.y > min.y && min2.y < max.y;
      return xOverlaps && yOverlaps;
    },
    isValid: function isValid() {
      return !!(this.min && this.max);
    }
  }; // @factory L.bounds(corner1: Point, corner2: Point)
  // Creates a Bounds object from two corners coordinate pairs.
  // @alternative
  // @factory L.bounds(points: Point[])
  // Creates a Bounds object from the given array of points.

  function toBounds(a, b) {
    if (!a || a instanceof Bounds) {
      return a;
    }

    return new Bounds(a, b);
  }
  /*
   * @class LatLngBounds
   * @aka L.LatLngBounds
   *
   * Represents a rectangular geographical area on a map.
   *
   * @example
   *
   * ```js
   * var corner1 = L.latLng(40.712, -74.227),
   * corner2 = L.latLng(40.774, -74.125),
   * bounds = L.latLngBounds(corner1, corner2);
   * ```
   *
   * All Leaflet methods that accept LatLngBounds objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
   *
   * ```js
   * map.fitBounds([
   * 	[40.712, -74.227],
   * 	[40.774, -74.125]
   * ]);
   * ```
   *
   * Caution: if the area crosses the antimeridian (often confused with the International Date Line), you must specify corners _outside_ the [-180, 180] degrees longitude range.
   *
   * Note that `LatLngBounds` does not inherit from Leafet's `Class` object,
   * which means new classes can't inherit from it, and new methods
   * can't be added to it with the `include` function.
   */


  function LatLngBounds(corner1, corner2) {
    // (LatLng, LatLng) or (LatLng[])
    if (!corner1) {
      return;
    }

    var latlngs = corner2 ? [corner1, corner2] : corner1;

    for (var i = 0, len = latlngs.length; i < len; i++) {
      this.extend(latlngs[i]);
    }
  }

  LatLngBounds.prototype = {
    // @method extend(latlng: LatLng): this
    // Extend the bounds to contain the given point
    // @alternative
    // @method extend(otherBounds: LatLngBounds): this
    // Extend the bounds to contain the given bounds
    extend: function extend(obj) {
      var sw = this._southWest,
          ne = this._northEast,
          sw2,
          ne2;

      if (obj instanceof LatLng) {
        sw2 = obj;
        ne2 = obj;
      } else if (obj instanceof LatLngBounds) {
        sw2 = obj._southWest;
        ne2 = obj._northEast;

        if (!sw2 || !ne2) {
          return this;
        }
      } else {
        return obj ? this.extend(toLatLng(obj) || toLatLngBounds(obj)) : this;
      }

      if (!sw && !ne) {
        this._southWest = new LatLng(sw2.lat, sw2.lng);
        this._northEast = new LatLng(ne2.lat, ne2.lng);
      } else {
        sw.lat = Math.min(sw2.lat, sw.lat);
        sw.lng = Math.min(sw2.lng, sw.lng);
        ne.lat = Math.max(ne2.lat, ne.lat);
        ne.lng = Math.max(ne2.lng, ne.lng);
      }

      return this;
    },
    // @method pad(bufferRatio: Number): LatLngBounds
    // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
    // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
    // Negative values will retract the bounds.
    pad: function pad(bufferRatio) {
      var sw = this._southWest,
          ne = this._northEast,
          heightBuffer = Math.abs(sw.lat - ne.lat) * bufferRatio,
          widthBuffer = Math.abs(sw.lng - ne.lng) * bufferRatio;
      return new LatLngBounds(new LatLng(sw.lat - heightBuffer, sw.lng - widthBuffer), new LatLng(ne.lat + heightBuffer, ne.lng + widthBuffer));
    },
    // @method getCenter(): LatLng
    // Returns the center point of the bounds.
    getCenter: function getCenter() {
      return new LatLng((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2);
    },
    // @method getSouthWest(): LatLng
    // Returns the south-west point of the bounds.
    getSouthWest: function getSouthWest() {
      return this._southWest;
    },
    // @method getNorthEast(): LatLng
    // Returns the north-east point of the bounds.
    getNorthEast: function getNorthEast() {
      return this._northEast;
    },
    // @method getNorthWest(): LatLng
    // Returns the north-west point of the bounds.
    getNorthWest: function getNorthWest() {
      return new LatLng(this.getNorth(), this.getWest());
    },
    // @method getSouthEast(): LatLng
    // Returns the south-east point of the bounds.
    getSouthEast: function getSouthEast() {
      return new LatLng(this.getSouth(), this.getEast());
    },
    // @method getWest(): Number
    // Returns the west longitude of the bounds
    getWest: function getWest() {
      return this._southWest.lng;
    },
    // @method getSouth(): Number
    // Returns the south latitude of the bounds
    getSouth: function getSouth() {
      return this._southWest.lat;
    },
    // @method getEast(): Number
    // Returns the east longitude of the bounds
    getEast: function getEast() {
      return this._northEast.lng;
    },
    // @method getNorth(): Number
    // Returns the north latitude of the bounds
    getNorth: function getNorth() {
      return this._northEast.lat;
    },
    // @method contains(otherBounds: LatLngBounds): Boolean
    // Returns `true` if the rectangle contains the given one.
    // @alternative
    // @method contains (latlng: LatLng): Boolean
    // Returns `true` if the rectangle contains the given point.
    contains: function contains(obj) {
      // (LatLngBounds) or (LatLng) -> Boolean
      if (typeof obj[0] === 'number' || obj instanceof LatLng || 'lat' in obj) {
        obj = toLatLng(obj);
      } else {
        obj = toLatLngBounds(obj);
      }

      var sw = this._southWest,
          ne = this._northEast,
          sw2,
          ne2;

      if (obj instanceof LatLngBounds) {
        sw2 = obj.getSouthWest();
        ne2 = obj.getNorthEast();
      } else {
        sw2 = ne2 = obj;
      }

      return sw2.lat >= sw.lat && ne2.lat <= ne.lat && sw2.lng >= sw.lng && ne2.lng <= ne.lng;
    },
    // @method intersects(otherBounds: LatLngBounds): Boolean
    // Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
    intersects: function intersects(bounds) {
      bounds = toLatLngBounds(bounds);
      var sw = this._southWest,
          ne = this._northEast,
          sw2 = bounds.getSouthWest(),
          ne2 = bounds.getNorthEast(),
          latIntersects = ne2.lat >= sw.lat && sw2.lat <= ne.lat,
          lngIntersects = ne2.lng >= sw.lng && sw2.lng <= ne.lng;
      return latIntersects && lngIntersects;
    },
    // @method overlaps(otherBounds: Bounds): Boolean
    // Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
    overlaps: function overlaps(bounds) {
      bounds = toLatLngBounds(bounds);
      var sw = this._southWest,
          ne = this._northEast,
          sw2 = bounds.getSouthWest(),
          ne2 = bounds.getNorthEast(),
          latOverlaps = ne2.lat > sw.lat && sw2.lat < ne.lat,
          lngOverlaps = ne2.lng > sw.lng && sw2.lng < ne.lng;
      return latOverlaps && lngOverlaps;
    },
    // @method toBBoxString(): String
    // Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
    toBBoxString: function toBBoxString() {
      return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(',');
    },
    // @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
    // Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
    equals: function equals(bounds, maxMargin) {
      if (!bounds) {
        return false;
      }

      bounds = toLatLngBounds(bounds);
      return this._southWest.equals(bounds.getSouthWest(), maxMargin) && this._northEast.equals(bounds.getNorthEast(), maxMargin);
    },
    // @method isValid(): Boolean
    // Returns `true` if the bounds are properly initialized.
    isValid: function isValid() {
      return !!(this._southWest && this._northEast);
    }
  }; // TODO International date line?
  // @factory L.latLngBounds(corner1: LatLng, corner2: LatLng)
  // Creates a `LatLngBounds` object by defining two diagonally opposite corners of the rectangle.
  // @alternative
  // @factory L.latLngBounds(latlngs: LatLng[])
  // Creates a `LatLngBounds` object defined by the geographical points it contains. Very useful for zooming the map to fit a particular set of locations with [`fitBounds`](#map-fitbounds).

  function toLatLngBounds(a, b) {
    if (a instanceof LatLngBounds) {
      return a;
    }

    return new LatLngBounds(a, b);
  }
  /* @class LatLng
   * @aka L.LatLng
   *
   * Represents a geographical point with a certain latitude and longitude.
   *
   * @example
   *
   * ```
   * var latlng = L.latLng(50.5, 30.5);
   * ```
   *
   * All Leaflet methods that accept LatLng objects also accept them in a simple Array form and simple object form (unless noted otherwise), so these lines are equivalent:
   *
   * ```
   * map.panTo([50, 30]);
   * map.panTo({lon: 30, lat: 50});
   * map.panTo({lat: 50, lng: 30});
   * map.panTo(L.latLng(50, 30));
   * ```
   *
   * Note that `LatLng` does not inherit from Leafet's `Class` object,
   * which means new classes can't inherit from it, and new methods
   * can't be added to it with the `include` function.
   */


  function LatLng(lat, lng, alt) {
    if (isNaN(lat) || isNaN(lng)) {
      throw new Error('Invalid LatLng object: (' + lat + ', ' + lng + ')');
    } // @property lat: Number
    // Latitude in degrees


    this.lat = +lat; // @property lng: Number
    // Longitude in degrees

    this.lng = +lng; // @property alt: Number
    // Altitude in meters (optional)

    if (alt !== undefined) {
      this.alt = +alt;
    }
  }

  LatLng.prototype = {
    // @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
    // Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
    equals: function equals(obj, maxMargin) {
      if (!obj) {
        return false;
      }

      obj = toLatLng(obj);
      var margin = Math.max(Math.abs(this.lat - obj.lat), Math.abs(this.lng - obj.lng));
      return margin <= (maxMargin === undefined ? 1.0E-9 : maxMargin);
    },
    // @method toString(): String
    // Returns a string representation of the point (for debugging purposes).
    toString: function toString(precision) {
      return 'LatLng(' + formatNum(this.lat, precision) + ', ' + formatNum(this.lng, precision) + ')';
    },
    // @method distanceTo(otherLatLng: LatLng): Number
    // Returns the distance (in meters) to the given `LatLng` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).
    distanceTo: function distanceTo(other) {
      return Earth.distance(this, toLatLng(other));
    },
    // @method wrap(): LatLng
    // Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
    wrap: function wrap() {
      return Earth.wrapLatLng(this);
    },
    // @method toBounds(sizeInMeters: Number): LatLngBounds
    // Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
    toBounds: function toBounds(sizeInMeters) {
      var latAccuracy = 180 * sizeInMeters / 40075017,
          lngAccuracy = latAccuracy / Math.cos(Math.PI / 180 * this.lat);
      return toLatLngBounds([this.lat - latAccuracy, this.lng - lngAccuracy], [this.lat + latAccuracy, this.lng + lngAccuracy]);
    },
    clone: function clone() {
      return new LatLng(this.lat, this.lng, this.alt);
    }
  }; // @factory L.latLng(latitude: Number, longitude: Number, altitude?: Number): LatLng
  // Creates an object representing a geographical point with the given latitude and longitude (and optionally altitude).
  // @alternative
  // @factory L.latLng(coords: Array): LatLng
  // Expects an array of the form `[Number, Number]` or `[Number, Number, Number]` instead.
  // @alternative
  // @factory L.latLng(coords: Object): LatLng
  // Expects an plain object of the form `{lat: Number, lng: Number}` or `{lat: Number, lng: Number, alt: Number}` instead.

  function toLatLng(a, b, c) {
    if (a instanceof LatLng) {
      return a;
    }

    if (isArray(a) && _typeof(a[0]) !== 'object') {
      if (a.length === 3) {
        return new LatLng(a[0], a[1], a[2]);
      }

      if (a.length === 2) {
        return new LatLng(a[0], a[1]);
      }

      return null;
    }

    if (a === undefined || a === null) {
      return a;
    }

    if (_typeof(a) === 'object' && 'lat' in a) {
      return new LatLng(a.lat, 'lng' in a ? a.lng : a.lon, a.alt);
    }

    if (b === undefined) {
      return null;
    }

    return new LatLng(a, b, c);
  }
  /*
   * @namespace CRS
   * @crs L.CRS.Base
   * Object that defines coordinate reference systems for projecting
   * geographical points into pixel (screen) coordinates and back (and to
   * coordinates in other units for [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services). See
   * [spatial reference system](http://en.wikipedia.org/wiki/Coordinate_reference_system).
   *
   * Leaflet defines the most usual CRSs by default. If you want to use a
   * CRS not defined by default, take a look at the
   * [Proj4Leaflet](https://github.com/kartena/Proj4Leaflet) plugin.
   *
   * Note that the CRS instances do not inherit from Leafet's `Class` object,
   * and can't be instantiated. Also, new classes can't inherit from them,
   * and methods can't be added to them with the `include` function.
   */


  var CRS = {
    // @method latLngToPoint(latlng: LatLng, zoom: Number): Point
    // Projects geographical coordinates into pixel coordinates for a given zoom.
    latLngToPoint: function latLngToPoint(latlng, zoom) {
      var projectedPoint = this.projection.project(latlng),
          scale = this.scale(zoom);
      return this.transformation._transform(projectedPoint, scale);
    },
    // @method pointToLatLng(point: Point, zoom: Number): LatLng
    // The inverse of `latLngToPoint`. Projects pixel coordinates on a given
    // zoom into geographical coordinates.
    pointToLatLng: function pointToLatLng(point, zoom) {
      var scale = this.scale(zoom),
          untransformedPoint = this.transformation.untransform(point, scale);
      return this.projection.unproject(untransformedPoint);
    },
    // @method project(latlng: LatLng): Point
    // Projects geographical coordinates into coordinates in units accepted for
    // this CRS (e.g. meters for EPSG:3857, for passing it to WMS services).
    project: function project(latlng) {
      return this.projection.project(latlng);
    },
    // @method unproject(point: Point): LatLng
    // Given a projected coordinate returns the corresponding LatLng.
    // The inverse of `project`.
    unproject: function unproject(point) {
      return this.projection.unproject(point);
    },
    // @method scale(zoom: Number): Number
    // Returns the scale used when transforming projected coordinates into
    // pixel coordinates for a particular zoom. For example, it returns
    // `256 * 2^zoom` for Mercator-based CRS.
    scale: function scale(zoom) {
      return 256 * Math.pow(2, zoom);
    },
    // @method zoom(scale: Number): Number
    // Inverse of `scale()`, returns the zoom level corresponding to a scale
    // factor of `scale`.
    zoom: function zoom(scale) {
      return Math.log(scale / 256) / Math.LN2;
    },
    // @method getProjectedBounds(zoom: Number): Bounds
    // Returns the projection's bounds scaled and transformed for the provided `zoom`.
    getProjectedBounds: function getProjectedBounds(zoom) {
      if (this.infinite) {
        return null;
      }

      var b = this.projection.bounds,
          s = this.scale(zoom),
          min = this.transformation.transform(b.min, s),
          max = this.transformation.transform(b.max, s);
      return new Bounds(min, max);
    },
    // @method distance(latlng1: LatLng, latlng2: LatLng): Number
    // Returns the distance between two geographical coordinates.
    // @property code: String
    // Standard code name of the CRS passed into WMS services (e.g. `'EPSG:3857'`)
    //
    // @property wrapLng: Number[]
    // An array of two numbers defining whether the longitude (horizontal) coordinate
    // axis wraps around a given range and how. Defaults to `[-180, 180]` in most
    // geographical CRSs. If `undefined`, the longitude axis does not wrap around.
    //
    // @property wrapLat: Number[]
    // Like `wrapLng`, but for the latitude (vertical) axis.
    // wrapLng: [min, max],
    // wrapLat: [min, max],
    // @property infinite: Boolean
    // If true, the coordinate space will be unbounded (infinite in both axes)
    infinite: false,
    // @method wrapLatLng(latlng: LatLng): LatLng
    // Returns a `LatLng` where lat and lng has been wrapped according to the
    // CRS's `wrapLat` and `wrapLng` properties, if they are outside the CRS's bounds.
    wrapLatLng: function wrapLatLng(latlng) {
      var lng = this.wrapLng ? wrapNum(latlng.lng, this.wrapLng, true) : latlng.lng,
          lat = this.wrapLat ? wrapNum(latlng.lat, this.wrapLat, true) : latlng.lat,
          alt = latlng.alt;
      return new LatLng(lat, lng, alt);
    },
    // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
    // Returns a `LatLngBounds` with the same size as the given one, ensuring
    // that its center is within the CRS's bounds.
    // Only accepts actual `L.LatLngBounds` instances, not arrays.
    wrapLatLngBounds: function wrapLatLngBounds(bounds) {
      var center = bounds.getCenter(),
          newCenter = this.wrapLatLng(center),
          latShift = center.lat - newCenter.lat,
          lngShift = center.lng - newCenter.lng;

      if (latShift === 0 && lngShift === 0) {
        return bounds;
      }

      var sw = bounds.getSouthWest(),
          ne = bounds.getNorthEast(),
          newSw = new LatLng(sw.lat - latShift, sw.lng - lngShift),
          newNe = new LatLng(ne.lat - latShift, ne.lng - lngShift);
      return new LatLngBounds(newSw, newNe);
    }
  };
  /*
   * @namespace CRS
   * @crs L.CRS.Earth
   *
   * Serves as the base for CRS that are global such that they cover the earth.
   * Can only be used as the base for other CRS and cannot be used directly,
   * since it does not have a `code`, `projection` or `transformation`. `distance()` returns
   * meters.
   */

  var Earth = extend({}, CRS, {
    wrapLng: [-180, 180],
    // Mean Earth Radius, as recommended for use by
    // the International Union of Geodesy and Geophysics,
    // see http://rosettacode.org/wiki/Haversine_formula
    R: 6371000,
    // distance between two geographical points using spherical law of cosines approximation
    distance: function distance(latlng1, latlng2) {
      var rad = Math.PI / 180,
          lat1 = latlng1.lat * rad,
          lat2 = latlng2.lat * rad,
          sinDLat = Math.sin((latlng2.lat - latlng1.lat) * rad / 2),
          sinDLon = Math.sin((latlng2.lng - latlng1.lng) * rad / 2),
          a = sinDLat * sinDLat + Math.cos(lat1) * Math.cos(lat2) * sinDLon * sinDLon,
          c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return this.R * c;
    }
  });
  /*
   * @namespace Projection
   * @projection L.Projection.SphericalMercator
   *
   * Spherical Mercator projection — the most common projection for online maps,
   * used by almost all free and commercial tile providers. Assumes that Earth is
   * a sphere. Used by the `EPSG:3857` CRS.
   */

  var SphericalMercator = {
    R: 6378137,
    MAX_LATITUDE: 85.0511287798,
    project: function project(latlng) {
      var d = Math.PI / 180,
          max = this.MAX_LATITUDE,
          lat = Math.max(Math.min(max, latlng.lat), -max),
          sin = Math.sin(lat * d);
      return new Point(this.R * latlng.lng * d, this.R * Math.log((1 + sin) / (1 - sin)) / 2);
    },
    unproject: function unproject(point) {
      var d = 180 / Math.PI;
      return new LatLng((2 * Math.atan(Math.exp(point.y / this.R)) - Math.PI / 2) * d, point.x * d / this.R);
    },
    bounds: function () {
      var d = 6378137 * Math.PI;
      return new Bounds([-d, -d], [d, d]);
    }()
  };
  /*
   * @class Transformation
   * @aka L.Transformation
   *
   * Represents an affine transformation: a set of coefficients `a`, `b`, `c`, `d`
   * for transforming a point of a form `(x, y)` into `(a*x + b, c*y + d)` and doing
   * the reverse. Used by Leaflet in its projections code.
   *
   * @example
   *
   * ```js
   * var transformation = L.transformation(2, 5, -1, 10),
   * 	p = L.point(1, 2),
   * 	p2 = transformation.transform(p), //  L.point(7, 8)
   * 	p3 = transformation.untransform(p2); //  L.point(1, 2)
   * ```
   */
  // factory new L.Transformation(a: Number, b: Number, c: Number, d: Number)
  // Creates a `Transformation` object with the given coefficients.

  function Transformation(a, b, c, d) {
    if (isArray(a)) {
      // use array properties
      this._a = a[0];
      this._b = a[1];
      this._c = a[2];
      this._d = a[3];
      return;
    }

    this._a = a;
    this._b = b;
    this._c = c;
    this._d = d;
  }

  Transformation.prototype = {
    // @method transform(point: Point, scale?: Number): Point
    // Returns a transformed point, optionally multiplied by the given scale.
    // Only accepts actual `L.Point` instances, not arrays.
    transform: function transform(point, scale) {
      // (Point, Number) -> Point
      return this._transform(point.clone(), scale);
    },
    // destructive transform (faster)
    _transform: function _transform(point, scale) {
      scale = scale || 1;
      point.x = scale * (this._a * point.x + this._b);
      point.y = scale * (this._c * point.y + this._d);
      return point;
    },
    // @method untransform(point: Point, scale?: Number): Point
    // Returns the reverse transformation of the given point, optionally divided
    // by the given scale. Only accepts actual `L.Point` instances, not arrays.
    untransform: function untransform(point, scale) {
      scale = scale || 1;
      return new Point((point.x / scale - this._b) / this._a, (point.y / scale - this._d) / this._c);
    }
  }; // factory L.transformation(a: Number, b: Number, c: Number, d: Number)
  // @factory L.transformation(a: Number, b: Number, c: Number, d: Number)
  // Instantiates a Transformation object with the given coefficients.
  // @alternative
  // @factory L.transformation(coefficients: Array): Transformation
  // Expects an coefficients array of the form
  // `[a: Number, b: Number, c: Number, d: Number]`.

  function toTransformation(a, b, c, d) {
    return new Transformation(a, b, c, d);
  }
  /*
   * @namespace CRS
   * @crs L.CRS.EPSG3857
   *
   * The most common CRS for online maps, used by almost all free and commercial
   * tile providers. Uses Spherical Mercator projection. Set in by default in
   * Map's `crs` option.
   */


  var EPSG3857 = extend({}, Earth, {
    code: 'EPSG:3857',
    projection: SphericalMercator,
    transformation: function () {
      var scale = 0.5 / (Math.PI * SphericalMercator.R);
      return toTransformation(scale, 0.5, -scale, 0.5);
    }()
  });
  var EPSG900913 = extend({}, EPSG3857, {
    code: 'EPSG:900913'
  }); // @namespace SVG; @section
  // There are several static functions which can be called without instantiating L.SVG:
  // @function create(name: String): SVGElement
  // Returns a instance of [SVGElement](https://developer.mozilla.org/docs/Web/API/SVGElement),
  // corresponding to the class name passed. For example, using 'line' will return
  // an instance of [SVGLineElement](https://developer.mozilla.org/docs/Web/API/SVGLineElement).

  function svgCreate(name) {
    return document.createElementNS('http://www.w3.org/2000/svg', name);
  } // @function pointsToPath(rings: Point[], closed: Boolean): String
  // Generates a SVG path string for multiple rings, with each ring turning
  // into "M..L..L.." instructions


  function pointsToPath(rings, closed) {
    var str = '',
        i,
        j,
        len,
        len2,
        points,
        p;

    for (i = 0, len = rings.length; i < len; i++) {
      points = rings[i];

      for (j = 0, len2 = points.length; j < len2; j++) {
        p = points[j];
        str += (j ? 'L' : 'M') + p.x + ' ' + p.y;
      } // closes the ring for polygons; "x" is VML syntax


      str += closed ? svg ? 'z' : 'x' : '';
    } // SVG complains about empty path strings


    return str || 'M0 0';
  }
  /*
   * @namespace Browser
   * @aka L.Browser
   *
   * A namespace with static properties for browser/feature detection used by Leaflet internally.
   *
   * @example
   *
   * ```js
   * if (L.Browser.ielt9) {
   *   alert('Upgrade your browser, dude!');
   * }
   * ```
   */


  var style$1 = document.documentElement.style; // @property ie: Boolean; `true` for all Internet Explorer versions (not Edge).

  var ie = 'ActiveXObject' in window; // @property ielt9: Boolean; `true` for Internet Explorer versions less than 9.

  var ielt9 = ie && !document.addEventListener; // @property edge: Boolean; `true` for the Edge web browser.

  var edge = 'msLaunchUri' in navigator && !('documentMode' in document); // @property webkit: Boolean;
  // `true` for webkit-based browsers like Chrome and Safari (including mobile versions).

  var webkit = userAgentContains('webkit'); // @property android: Boolean
  // `true` for any browser running on an Android platform.

  var android = userAgentContains('android'); // @property android23: Boolean; `true` for browsers running on Android 2 or Android 3.

  var android23 = userAgentContains('android 2') || userAgentContains('android 3');
  /* See https://stackoverflow.com/a/17961266 for details on detecting stock Android */

  var webkitVer = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10); // also matches AppleWebKit
  // @property androidStock: Boolean; `true` for the Android stock browser (i.e. not Chrome)

  var androidStock = android && userAgentContains('Google') && webkitVer < 537 && !('AudioNode' in window); // @property opera: Boolean; `true` for the Opera browser

  var opera = !!window.opera; // @property chrome: Boolean; `true` for the Chrome browser.

  var chrome = userAgentContains('chrome'); // @property gecko: Boolean; `true` for gecko-based browsers like Firefox.

  var gecko = userAgentContains('gecko') && !webkit && !opera && !ie; // @property safari: Boolean; `true` for the Safari browser.

  var safari = !chrome && userAgentContains('safari');
  var phantom = userAgentContains('phantom'); // @property opera12: Boolean
  // `true` for the Opera browser supporting CSS transforms (version 12 or later).

  var opera12 = 'OTransition' in style$1; // @property win: Boolean; `true` when the browser is running in a Windows platform

  var win = navigator.platform.indexOf('Win') === 0; // @property ie3d: Boolean; `true` for all Internet Explorer versions supporting CSS transforms.

  var ie3d = ie && 'transition' in style$1; // @property webkit3d: Boolean; `true` for webkit-based browsers supporting CSS transforms.

  var webkit3d = 'WebKitCSSMatrix' in window && 'm11' in new window.WebKitCSSMatrix() && !android23; // @property gecko3d: Boolean; `true` for gecko-based browsers supporting CSS transforms.

  var gecko3d = 'MozPerspective' in style$1; // @property any3d: Boolean
  // `true` for all browsers supporting CSS transforms.

  var any3d = !window.L_DISABLE_3D && (ie3d || webkit3d || gecko3d) && !opera12 && !phantom; // @property mobile: Boolean; `true` for all browsers running in a mobile device.

  var mobile = typeof orientation !== 'undefined' || userAgentContains('mobile'); // @property mobileWebkit: Boolean; `true` for all webkit-based browsers in a mobile device.

  var mobileWebkit = mobile && webkit; // @property mobileWebkit3d: Boolean
  // `true` for all webkit-based browsers in a mobile device supporting CSS transforms.

  var mobileWebkit3d = mobile && webkit3d; // @property msPointer: Boolean
  // `true` for browsers implementing the Microsoft touch events model (notably IE10).

  var msPointer = !window.PointerEvent && window.MSPointerEvent; // @property pointer: Boolean
  // `true` for all browsers supporting [pointer events](https://msdn.microsoft.com/en-us/library/dn433244%28v=vs.85%29.aspx).

  var pointer = !!(window.PointerEvent || msPointer); // @property touch: Boolean
  // `true` for all browsers supporting [touch events](https://developer.mozilla.org/docs/Web/API/Touch_events).
  // This does not necessarily mean that the browser is running in a computer with
  // a touchscreen, it only means that the browser is capable of understanding
  // touch events.

  var touch = !window.L_NO_TOUCH && (pointer || 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch); // @property mobileOpera: Boolean; `true` for the Opera browser in a mobile device.

  var mobileOpera = mobile && opera; // @property mobileGecko: Boolean
  // `true` for gecko-based browsers running in a mobile device.

  var mobileGecko = mobile && gecko; // @property retina: Boolean
  // `true` for browsers on a high-resolution "retina" screen.

  var retina = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1; // @property canvas: Boolean
  // `true` when the browser supports [`<canvas>`](https://developer.mozilla.org/docs/Web/API/Canvas_API).

  var canvas = function () {
    return !!document.createElement('canvas').getContext;
  }(); // @property svg: Boolean
  // `true` when the browser supports [SVG](https://developer.mozilla.org/docs/Web/SVG).


  var svg = !!(document.createElementNS && svgCreate('svg').createSVGRect); // @property vml: Boolean
  // `true` if the browser supports [VML](https://en.wikipedia.org/wiki/Vector_Markup_Language).

  var vml = !svg && function () {
    try {
      var div = document.createElement('div');
      div.innerHTML = '<v:shape adj="1"/>';
      var shape = div.firstChild;
      shape.style.behavior = 'url(#default#VML)';
      return shape && _typeof(shape.adj) === 'object';
    } catch (e) {
      return false;
    }
  }();

  function userAgentContains(str) {
    return navigator.userAgent.toLowerCase().indexOf(str) >= 0;
  }

  var Browser = (Object.freeze || Object)({
    ie: ie,
    ielt9: ielt9,
    edge: edge,
    webkit: webkit,
    android: android,
    android23: android23,
    androidStock: androidStock,
    opera: opera,
    chrome: chrome,
    gecko: gecko,
    safari: safari,
    phantom: phantom,
    opera12: opera12,
    win: win,
    ie3d: ie3d,
    webkit3d: webkit3d,
    gecko3d: gecko3d,
    any3d: any3d,
    mobile: mobile,
    mobileWebkit: mobileWebkit,
    mobileWebkit3d: mobileWebkit3d,
    msPointer: msPointer,
    pointer: pointer,
    touch: touch,
    mobileOpera: mobileOpera,
    mobileGecko: mobileGecko,
    retina: retina,
    canvas: canvas,
    svg: svg,
    vml: vml
  });
  /*
   * Extends L.DomEvent to provide touch support for Internet Explorer and Windows-based devices.
   */

  var POINTER_DOWN = msPointer ? 'MSPointerDown' : 'pointerdown';
  var POINTER_MOVE = msPointer ? 'MSPointerMove' : 'pointermove';
  var POINTER_UP = msPointer ? 'MSPointerUp' : 'pointerup';
  var POINTER_CANCEL = msPointer ? 'MSPointerCancel' : 'pointercancel';
  var TAG_WHITE_LIST = ['INPUT', 'SELECT', 'OPTION'];
  var _pointers = {};
  var _pointerDocListener = false; // DomEvent.DoubleTap needs to know about this

  var _pointersCount = 0; // Provides a touch events wrapper for (ms)pointer events.
  // ref http://www.w3.org/TR/pointerevents/ https://www.w3.org/Bugs/Public/show_bug.cgi?id=22890

  function addPointerListener(obj, type, handler, id) {
    if (type === 'touchstart') {
      _addPointerStart(obj, handler, id);
    } else if (type === 'touchmove') {
      _addPointerMove(obj, handler, id);
    } else if (type === 'touchend') {
      _addPointerEnd(obj, handler, id);
    }

    return this;
  }

  function removePointerListener(obj, type, id) {
    var handler = obj['_leaflet_' + type + id];

    if (type === 'touchstart') {
      obj.removeEventListener(POINTER_DOWN, handler, false);
    } else if (type === 'touchmove') {
      obj.removeEventListener(POINTER_MOVE, handler, false);
    } else if (type === 'touchend') {
      obj.removeEventListener(POINTER_UP, handler, false);
      obj.removeEventListener(POINTER_CANCEL, handler, false);
    }

    return this;
  }

  function _addPointerStart(obj, handler, id) {
    var onDown = bind(function (e) {
      if (e.pointerType !== 'mouse' && e.MSPOINTER_TYPE_MOUSE && e.pointerType !== e.MSPOINTER_TYPE_MOUSE) {
        // In IE11, some touch events needs to fire for form controls, or
        // the controls will stop working. We keep a whitelist of tag names that
        // need these events. For other target tags, we prevent default on the event.
        if (TAG_WHITE_LIST.indexOf(e.target.tagName) < 0) {
          preventDefault(e);
        } else {
          return;
        }
      }

      _handlePointer(e, handler);
    });
    obj['_leaflet_touchstart' + id] = onDown;
    obj.addEventListener(POINTER_DOWN, onDown, false); // need to keep track of what pointers and how many are active to provide e.touches emulation

    if (!_pointerDocListener) {
      // we listen documentElement as any drags that end by moving the touch off the screen get fired there
      document.documentElement.addEventListener(POINTER_DOWN, _globalPointerDown, true);
      document.documentElement.addEventListener(POINTER_MOVE, _globalPointerMove, true);
      document.documentElement.addEventListener(POINTER_UP, _globalPointerUp, true);
      document.documentElement.addEventListener(POINTER_CANCEL, _globalPointerUp, true);
      _pointerDocListener = true;
    }
  }

  function _globalPointerDown(e) {
    _pointers[e.pointerId] = e;
    _pointersCount++;
  }

  function _globalPointerMove(e) {
    if (_pointers[e.pointerId]) {
      _pointers[e.pointerId] = e;
    }
  }

  function _globalPointerUp(e) {
    delete _pointers[e.pointerId];
    _pointersCount--;
  }

  function _handlePointer(e, handler) {
    e.touches = [];

    for (var i in _pointers) {
      e.touches.push(_pointers[i]);
    }

    e.changedTouches = [e];
    handler(e);
  }

  function _addPointerMove(obj, handler, id) {
    var onMove = function onMove(e) {
      // don't fire touch moves when mouse isn't down
      if ((e.pointerType === e.MSPOINTER_TYPE_MOUSE || e.pointerType === 'mouse') && e.buttons === 0) {
        return;
      }

      _handlePointer(e, handler);
    };

    obj['_leaflet_touchmove' + id] = onMove;
    obj.addEventListener(POINTER_MOVE, onMove, false);
  }

  function _addPointerEnd(obj, handler, id) {
    var onUp = function onUp(e) {
      _handlePointer(e, handler);
    };

    obj['_leaflet_touchend' + id] = onUp;
    obj.addEventListener(POINTER_UP, onUp, false);
    obj.addEventListener(POINTER_CANCEL, onUp, false);
  }
  /*
   * Extends the event handling code with double tap support for mobile browsers.
   */


  var _touchstart = msPointer ? 'MSPointerDown' : pointer ? 'pointerdown' : 'touchstart';

  var _touchend = msPointer ? 'MSPointerUp' : pointer ? 'pointerup' : 'touchend';

  var _pre = '_leaflet_'; // inspired by Zepto touch code by Thomas Fuchs

  function addDoubleTapListener(obj, handler, id) {
    var last,
        touch$$1,
        doubleTap = false,
        delay = 250;

    function onTouchStart(e) {
      var count;

      if (pointer) {
        if (!edge || e.pointerType === 'mouse') {
          return;
        }

        count = _pointersCount;
      } else {
        count = e.touches.length;
      }

      if (count > 1) {
        return;
      }

      var now = Date.now(),
          delta = now - (last || now);
      touch$$1 = e.touches ? e.touches[0] : e;
      doubleTap = delta > 0 && delta <= delay;
      last = now;
    }

    function onTouchEnd(e) {
      if (doubleTap && !touch$$1.cancelBubble) {
        if (pointer) {
          if (!edge || e.pointerType === 'mouse') {
            return;
          } // work around .type being readonly with MSPointer* events


          var newTouch = {},
              prop,
              i;

          for (i in touch$$1) {
            prop = touch$$1[i];
            newTouch[i] = prop && prop.bind ? prop.bind(touch$$1) : prop;
          }

          touch$$1 = newTouch;
        }

        touch$$1.type = 'dblclick';
        handler(touch$$1);
        last = null;
      }
    }

    obj[_pre + _touchstart + id] = onTouchStart;
    obj[_pre + _touchend + id] = onTouchEnd;
    obj[_pre + 'dblclick' + id] = handler;
    obj.addEventListener(_touchstart, onTouchStart, false);
    obj.addEventListener(_touchend, onTouchEnd, false); // On some platforms (notably, chrome<55 on win10 + touchscreen + mouse),
    // the browser doesn't fire touchend/pointerup events but does fire
    // native dblclicks. See #4127.
    // Edge 14 also fires native dblclicks, but only for pointerType mouse, see #5180.

    obj.addEventListener('dblclick', handler, false);
    return this;
  }

  function removeDoubleTapListener(obj, id) {
    var touchstart = obj[_pre + _touchstart + id],
        touchend = obj[_pre + _touchend + id],
        dblclick = obj[_pre + 'dblclick' + id];
    obj.removeEventListener(_touchstart, touchstart, false);
    obj.removeEventListener(_touchend, touchend, false);

    if (!edge) {
      obj.removeEventListener('dblclick', dblclick, false);
    }

    return this;
  }
  /*
   * @namespace DomEvent
   * Utility functions to work with the [DOM events](https://developer.mozilla.org/docs/Web/API/Event), used by Leaflet internally.
   */
  // Inspired by John Resig, Dean Edwards and YUI addEvent implementations.
  // @function on(el: HTMLElement, types: String, fn: Function, context?: Object): this
  // Adds a listener function (`fn`) to a particular DOM event type of the
  // element `el`. You can optionally specify the context of the listener
  // (object the `this` keyword will point to). You can also pass several
  // space-separated types (e.g. `'click dblclick'`).
  // @alternative
  // @function on(el: HTMLElement, eventMap: Object, context?: Object): this
  // Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`


  function on(obj, types, fn, context) {
    if (_typeof(types) === 'object') {
      for (var type in types) {
        addOne(obj, type, types[type], fn);
      }
    } else {
      types = splitWords(types);

      for (var i = 0, len = types.length; i < len; i++) {
        addOne(obj, types[i], fn, context);
      }
    }

    return this;
  }

  var eventsKey = '_leaflet_events'; // @function off(el: HTMLElement, types: String, fn: Function, context?: Object): this
  // Removes a previously added listener function.
  // Note that if you passed a custom context to on, you must pass the same
  // context to `off` in order to remove the listener.
  // @alternative
  // @function off(el: HTMLElement, eventMap: Object, context?: Object): this
  // Removes a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`

  function off(obj, types, fn, context) {
    if (_typeof(types) === 'object') {
      for (var type in types) {
        removeOne(obj, type, types[type], fn);
      }
    } else if (types) {
      types = splitWords(types);

      for (var i = 0, len = types.length; i < len; i++) {
        removeOne(obj, types[i], fn, context);
      }
    } else {
      for (var j in obj[eventsKey]) {
        removeOne(obj, j, obj[eventsKey][j]);
      }

      delete obj[eventsKey];
    }

    return this;
  }

  function addOne(obj, type, fn, context) {
    var id = type + stamp(fn) + (context ? '_' + stamp(context) : '');

    if (obj[eventsKey] && obj[eventsKey][id]) {
      return this;
    }

    var handler = function handler(e) {
      return fn.call(context || obj, e || window.event);
    };

    var originalHandler = handler;

    if (pointer && type.indexOf('touch') === 0) {
      // Needs DomEvent.Pointer.js
      addPointerListener(obj, type, handler, id);
    } else if (touch && type === 'dblclick' && addDoubleTapListener && !(pointer && chrome)) {
      // Chrome >55 does not need the synthetic dblclicks from addDoubleTapListener
      // See #5180
      addDoubleTapListener(obj, handler, id);
    } else if ('addEventListener' in obj) {
      if (type === 'mousewheel') {
        obj.addEventListener('onwheel' in obj ? 'wheel' : 'mousewheel', handler, false);
      } else if (type === 'mouseenter' || type === 'mouseleave') {
        handler = function handler(e) {
          e = e || window.event;

          if (isExternalTarget(obj, e)) {
            originalHandler(e);
          }
        };

        obj.addEventListener(type === 'mouseenter' ? 'mouseover' : 'mouseout', handler, false);
      } else {
        if (type === 'click' && android) {
          handler = function handler(e) {
            filterClick(e, originalHandler);
          };
        }

        obj.addEventListener(type, handler, false);
      }
    } else if ('attachEvent' in obj) {
      obj.attachEvent('on' + type, handler);
    }

    obj[eventsKey] = obj[eventsKey] || {};
    obj[eventsKey][id] = handler;
  }

  function removeOne(obj, type, fn, context) {
    var id = type + stamp(fn) + (context ? '_' + stamp(context) : ''),
        handler = obj[eventsKey] && obj[eventsKey][id];

    if (!handler) {
      return this;
    }

    if (pointer && type.indexOf('touch') === 0) {
      removePointerListener(obj, type, id);
    } else if (touch && type === 'dblclick' && removeDoubleTapListener && !(pointer && chrome)) {
      removeDoubleTapListener(obj, id);
    } else if ('removeEventListener' in obj) {
      if (type === 'mousewheel') {
        obj.removeEventListener('onwheel' in obj ? 'wheel' : 'mousewheel', handler, false);
      } else {
        obj.removeEventListener(type === 'mouseenter' ? 'mouseover' : type === 'mouseleave' ? 'mouseout' : type, handler, false);
      }
    } else if ('detachEvent' in obj) {
      obj.detachEvent('on' + type, handler);
    }

    obj[eventsKey][id] = null;
  } // @function stopPropagation(ev: DOMEvent): this
  // Stop the given event from propagation to parent elements. Used inside the listener functions:
  // ```js
  // L.DomEvent.on(div, 'click', function (ev) {
  // 	L.DomEvent.stopPropagation(ev);
  // });
  // ```


  function stopPropagation(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    } else if (e.originalEvent) {
      // In case of Leaflet event.
      e.originalEvent._stopped = true;
    } else {
      e.cancelBubble = true;
    }

    skipped(e);
    return this;
  } // @function disableScrollPropagation(el: HTMLElement): this
  // Adds `stopPropagation` to the element's `'mousewheel'` events (plus browser variants).


  function disableScrollPropagation(el) {
    addOne(el, 'mousewheel', stopPropagation);
    return this;
  } // @function disableClickPropagation(el: HTMLElement): this
  // Adds `stopPropagation` to the element's `'click'`, `'doubleclick'`,
  // `'mousedown'` and `'touchstart'` events (plus browser variants).


  function disableClickPropagation(el) {
    on(el, 'mousedown touchstart dblclick', stopPropagation);
    addOne(el, 'click', fakeStop);
    return this;
  } // @function preventDefault(ev: DOMEvent): this
  // Prevents the default action of the DOM Event `ev` from happening (such as
  // following a link in the href of the a element, or doing a POST request
  // with page reload when a `<form>` is submitted).
  // Use it inside listener functions.


  function preventDefault(e) {
    if (e.preventDefault) {
      e.preventDefault();
    } else {
      e.returnValue = false;
    }

    return this;
  } // @function stop(ev: DOMEvent): this
  // Does `stopPropagation` and `preventDefault` at the same time.


  function stop(e) {
    preventDefault(e);
    stopPropagation(e);
    return this;
  } // @function getMousePosition(ev: DOMEvent, container?: HTMLElement): Point
  // Gets normalized mouse position from a DOM event relative to the
  // `container` or to the whole page if not specified.


  function getMousePosition(e, container) {
    if (!container) {
      return new Point(e.clientX, e.clientY);
    }

    var rect = container.getBoundingClientRect();
    var scaleX = rect.width / container.offsetWidth || 1;
    var scaleY = rect.height / container.offsetHeight || 1;
    return new Point(e.clientX / scaleX - rect.left - container.clientLeft, e.clientY / scaleY - rect.top - container.clientTop);
  } // Chrome on Win scrolls double the pixels as in other platforms (see #4538),
  // and Firefox scrolls device pixels, not CSS pixels


  var wheelPxFactor = win && chrome ? 2 * window.devicePixelRatio : gecko ? window.devicePixelRatio : 1; // @function getWheelDelta(ev: DOMEvent): Number
  // Gets normalized wheel delta from a mousewheel DOM event, in vertical
  // pixels scrolled (negative if scrolling down).
  // Events from pointing devices without precise scrolling are mapped to
  // a best guess of 60 pixels.

  function getWheelDelta(e) {
    return edge ? e.wheelDeltaY / 2 : // Don't trust window-geometry-based delta
    e.deltaY && e.deltaMode === 0 ? -e.deltaY / wheelPxFactor : // Pixels
    e.deltaY && e.deltaMode === 1 ? -e.deltaY * 20 : // Lines
    e.deltaY && e.deltaMode === 2 ? -e.deltaY * 60 : // Pages
    e.deltaX || e.deltaZ ? 0 : // Skip horizontal/depth wheel events
    e.wheelDelta ? (e.wheelDeltaY || e.wheelDelta) / 2 : // Legacy IE pixels
    e.detail && Math.abs(e.detail) < 32765 ? -e.detail * 20 : // Legacy Moz lines
    e.detail ? e.detail / -32765 * 60 : // Legacy Moz pages
    0;
  }

  var skipEvents = {};

  function fakeStop(e) {
    // fakes stopPropagation by setting a special event flag, checked/reset with skipped(e)
    skipEvents[e.type] = true;
  }

  function skipped(e) {
    var events = skipEvents[e.type]; // reset when checking, as it's only used in map container and propagates outside of the map

    skipEvents[e.type] = false;
    return events;
  } // check if element really left/entered the event target (for mouseenter/mouseleave)


  function isExternalTarget(el, e) {
    var related = e.relatedTarget;

    if (!related) {
      return true;
    }

    try {
      while (related && related !== el) {
        related = related.parentNode;
      }
    } catch (err) {
      return false;
    }

    return related !== el;
  }

  var lastClick; // this is a horrible workaround for a bug in Android where a single touch triggers two click events

  function filterClick(e, handler) {
    var timeStamp = e.timeStamp || e.originalEvent && e.originalEvent.timeStamp,
        elapsed = lastClick && timeStamp - lastClick; // are they closer together than 500ms yet more than 100ms?
    // Android typically triggers them ~300ms apart while multiple listeners
    // on the same event should be triggered far faster;
    // or check if click is simulated on the element, and if it is, reject any non-simulated events

    if (elapsed && elapsed > 100 && elapsed < 500 || e.target._simulatedClick && !e._simulated) {
      stop(e);
      return;
    }

    lastClick = timeStamp;
    handler(e);
  }

  var DomEvent = (Object.freeze || Object)({
    on: on,
    off: off,
    stopPropagation: stopPropagation,
    disableScrollPropagation: disableScrollPropagation,
    disableClickPropagation: disableClickPropagation,
    preventDefault: preventDefault,
    stop: stop,
    getMousePosition: getMousePosition,
    getWheelDelta: getWheelDelta,
    fakeStop: fakeStop,
    skipped: skipped,
    isExternalTarget: isExternalTarget,
    addListener: on,
    removeListener: off
  });
  /*
   * @namespace DomUtil
   *
   * Utility functions to work with the [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model)
   * tree, used by Leaflet internally.
   *
   * Most functions expecting or returning a `HTMLElement` also work for
   * SVG elements. The only difference is that classes refer to CSS classes
   * in HTML and SVG classes in SVG.
   */
  // @property TRANSFORM: String
  // Vendor-prefixed transform style name (e.g. `'webkitTransform'` for WebKit).

  var TRANSFORM = testProp(['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform']); // webkitTransition comes first because some browser versions that drop vendor prefix don't do
  // the same for the transitionend event, in particular the Android 4.1 stock browser
  // @property TRANSITION: String
  // Vendor-prefixed transition style name.

  var TRANSITION = testProp(['webkitTransition', 'transition', 'OTransition', 'MozTransition', 'msTransition']); // @property TRANSITION_END: String
  // Vendor-prefixed transitionend event name.

  var TRANSITION_END = TRANSITION === 'webkitTransition' || TRANSITION === 'OTransition' ? TRANSITION + 'End' : 'transitionend'; // @function get(id: String|HTMLElement): HTMLElement
  // Returns an element given its DOM id, or returns the element itself
  // if it was passed directly.

  function get(id) {
    return typeof id === 'string' ? document.getElementById(id) : id;
  } // @function getStyle(el: HTMLElement, styleAttrib: String): String
  // Returns the value for a certain style attribute on an element,
  // including computed values or values set through CSS.


  function getStyle(el, style) {
    var value = el.style[style] || el.currentStyle && el.currentStyle[style];

    if ((!value || value === 'auto') && document.defaultView) {
      var css = document.defaultView.getComputedStyle(el, null);
      value = css ? css[style] : null;
    }

    return value === 'auto' ? null : value;
  } // @function create(tagName: String, className?: String, container?: HTMLElement): HTMLElement
  // Creates an HTML element with `tagName`, sets its class to `className`, and optionally appends it to `container` element.


  function create$1(tagName, className, container) {
    var el = document.createElement(tagName);
    el.className = className || '';

    if (container) {
      container.appendChild(el);
    }

    return el;
  } // @function remove(el: HTMLElement)
  // Removes `el` from its parent element


  function _remove(el) {
    var parent = el.parentNode;

    if (parent) {
      parent.removeChild(el);
    }
  } // @function empty(el: HTMLElement)
  // Removes all of `el`'s children elements from `el`


  function empty(el) {
    while (el.firstChild) {
      el.removeChild(el.firstChild);
    }
  } // @function toFront(el: HTMLElement)
  // Makes `el` the last child of its parent, so it renders in front of the other children.


  function toFront(el) {
    var parent = el.parentNode;

    if (parent.lastChild !== el) {
      parent.appendChild(el);
    }
  } // @function toBack(el: HTMLElement)
  // Makes `el` the first child of its parent, so it renders behind the other children.


  function toBack(el) {
    var parent = el.parentNode;

    if (parent.firstChild !== el) {
      parent.insertBefore(el, parent.firstChild);
    }
  } // @function hasClass(el: HTMLElement, name: String): Boolean
  // Returns `true` if the element's class attribute contains `name`.


  function hasClass(el, name) {
    if (el.classList !== undefined) {
      return el.classList.contains(name);
    }

    var className = getClass(el);
    return className.length > 0 && new RegExp('(^|\\s)' + name + '(\\s|$)').test(className);
  } // @function addClass(el: HTMLElement, name: String)
  // Adds `name` to the element's class attribute.


  function addClass(el, name) {
    if (el.classList !== undefined) {
      var classes = splitWords(name);

      for (var i = 0, len = classes.length; i < len; i++) {
        el.classList.add(classes[i]);
      }
    } else if (!hasClass(el, name)) {
      var className = getClass(el);
      setClass(el, (className ? className + ' ' : '') + name);
    }
  } // @function removeClass(el: HTMLElement, name: String)
  // Removes `name` from the element's class attribute.


  function removeClass(el, name) {
    if (el.classList !== undefined) {
      el.classList.remove(name);
    } else {
      setClass(el, trim((' ' + getClass(el) + ' ').replace(' ' + name + ' ', ' ')));
    }
  } // @function setClass(el: HTMLElement, name: String)
  // Sets the element's class.


  function setClass(el, name) {
    if (el.className.baseVal === undefined) {
      el.className = name;
    } else {
      // in case of SVG element
      el.className.baseVal = name;
    }
  } // @function getClass(el: HTMLElement): String
  // Returns the element's class.


  function getClass(el) {
    return el.className.baseVal === undefined ? el.className : el.className.baseVal;
  } // @function setOpacity(el: HTMLElement, opacity: Number)
  // Set the opacity of an element (including old IE support).
  // `opacity` must be a number from `0` to `1`.


  function _setOpacity(el, value) {
    if ('opacity' in el.style) {
      el.style.opacity = value;
    } else if ('filter' in el.style) {
      _setOpacityIE(el, value);
    }
  }

  function _setOpacityIE(el, value) {
    var filter = false,
        filterName = 'DXImageTransform.Microsoft.Alpha'; // filters collection throws an error if we try to retrieve a filter that doesn't exist

    try {
      filter = el.filters.item(filterName);
    } catch (e) {
      // don't set opacity to 1 if we haven't already set an opacity,
      // it isn't needed and breaks transparent pngs.
      if (value === 1) {
        return;
      }
    }

    value = Math.round(value * 100);

    if (filter) {
      filter.Enabled = value !== 100;
      filter.Opacity = value;
    } else {
      el.style.filter += ' progid:' + filterName + '(opacity=' + value + ')';
    }
  } // @function testProp(props: String[]): String|false
  // Goes through the array of style names and returns the first name
  // that is a valid style name for an element. If no such name is found,
  // it returns false. Useful for vendor-prefixed styles like `transform`.


  function testProp(props) {
    var style = document.documentElement.style;

    for (var i = 0; i < props.length; i++) {
      if (props[i] in style) {
        return props[i];
      }
    }

    return false;
  } // @function setTransform(el: HTMLElement, offset: Point, scale?: Number)
  // Resets the 3D CSS transform of `el` so it is translated by `offset` pixels
  // and optionally scaled by `scale`. Does not have an effect if the
  // browser doesn't support 3D CSS transforms.


  function setTransform(el, offset, scale) {
    var pos = offset || new Point(0, 0);
    el.style[TRANSFORM] = (ie3d ? 'translate(' + pos.x + 'px,' + pos.y + 'px)' : 'translate3d(' + pos.x + 'px,' + pos.y + 'px,0)') + (scale ? ' scale(' + scale + ')' : '');
  } // @function setPosition(el: HTMLElement, position: Point)
  // Sets the position of `el` to coordinates specified by `position`,
  // using CSS translate or top/left positioning depending on the browser
  // (used by Leaflet internally to position its layers).


  function setPosition(el, point) {
    /*eslint-disable */
    el._leaflet_pos = point;
    /* eslint-enable */

    if (any3d) {
      setTransform(el, point);
    } else {
      el.style.left = point.x + 'px';
      el.style.top = point.y + 'px';
    }
  } // @function getPosition(el: HTMLElement): Point
  // Returns the coordinates of an element previously positioned with setPosition.


  function getPosition(el) {
    // this method is only used for elements previously positioned using setPosition,
    // so it's safe to cache the position for performance
    return el._leaflet_pos || new Point(0, 0);
  } // @function disableTextSelection()
  // Prevents the user from generating `selectstart` DOM events, usually generated
  // when the user drags the mouse through a page with text. Used internally
  // by Leaflet to override the behaviour of any click-and-drag interaction on
  // the map. Affects drag interactions on the whole document.
  // @function enableTextSelection()
  // Cancels the effects of a previous [`L.DomUtil.disableTextSelection`](#domutil-disabletextselection).


  var disableTextSelection;
  var enableTextSelection;

  var _userSelect;

  if ('onselectstart' in document) {
    disableTextSelection = function disableTextSelection() {
      on(window, 'selectstart', preventDefault);
    };

    enableTextSelection = function enableTextSelection() {
      off(window, 'selectstart', preventDefault);
    };
  } else {
    var userSelectProperty = testProp(['userSelect', 'WebkitUserSelect', 'OUserSelect', 'MozUserSelect', 'msUserSelect']);

    disableTextSelection = function disableTextSelection() {
      if (userSelectProperty) {
        var style = document.documentElement.style;
        _userSelect = style[userSelectProperty];
        style[userSelectProperty] = 'none';
      }
    };

    enableTextSelection = function enableTextSelection() {
      if (userSelectProperty) {
        document.documentElement.style[userSelectProperty] = _userSelect;
        _userSelect = undefined;
      }
    };
  } // @function disableImageDrag()
  // As [`L.DomUtil.disableTextSelection`](#domutil-disabletextselection), but
  // for `dragstart` DOM events, usually generated when the user drags an image.


  function disableImageDrag() {
    on(window, 'dragstart', preventDefault);
  } // @function enableImageDrag()
  // Cancels the effects of a previous [`L.DomUtil.disableImageDrag`](#domutil-disabletextselection).


  function enableImageDrag() {
    off(window, 'dragstart', preventDefault);
  }

  var _outlineElement;

  var _outlineStyle; // @function preventOutline(el: HTMLElement)
  // Makes the [outline](https://developer.mozilla.org/docs/Web/CSS/outline)
  // of the element `el` invisible. Used internally by Leaflet to prevent
  // focusable elements from displaying an outline when the user performs a
  // drag interaction on them.


  function preventOutline(element) {
    while (element.tabIndex === -1) {
      element = element.parentNode;
    }

    if (!element.style) {
      return;
    }

    restoreOutline();
    _outlineElement = element;
    _outlineStyle = element.style.outline;
    element.style.outline = 'none';
    on(window, 'keydown', restoreOutline);
  } // @function restoreOutline()
  // Cancels the effects of a previous [`L.DomUtil.preventOutline`]().


  function restoreOutline() {
    if (!_outlineElement) {
      return;
    }

    _outlineElement.style.outline = _outlineStyle;
    _outlineElement = undefined;
    _outlineStyle = undefined;
    off(window, 'keydown', restoreOutline);
  }

  var DomUtil = (Object.freeze || Object)({
    TRANSFORM: TRANSFORM,
    TRANSITION: TRANSITION,
    TRANSITION_END: TRANSITION_END,
    get: get,
    getStyle: getStyle,
    create: create$1,
    remove: _remove,
    empty: empty,
    toFront: toFront,
    toBack: toBack,
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    setClass: setClass,
    getClass: getClass,
    setOpacity: _setOpacity,
    testProp: testProp,
    setTransform: setTransform,
    setPosition: setPosition,
    getPosition: getPosition,
    disableTextSelection: disableTextSelection,
    enableTextSelection: enableTextSelection,
    disableImageDrag: disableImageDrag,
    enableImageDrag: enableImageDrag,
    preventOutline: preventOutline,
    restoreOutline: restoreOutline
  });
  /*
   * @class PosAnimation
   * @aka L.PosAnimation
   * @inherits Evented
   * Used internally for panning animations, utilizing CSS3 Transitions for modern browsers and a timer fallback for IE6-9.
   *
   * @example
   * ```js
   * var fx = new L.PosAnimation();
   * fx.run(el, [300, 500], 0.5);
   * ```
   *
   * @constructor L.PosAnimation()
   * Creates a `PosAnimation` object.
   *
   */

  var PosAnimation = Evented.extend({
    // @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
    // Run an animation of a given element to a new position, optionally setting
    // duration in seconds (`0.25` by default) and easing linearity factor (3rd
    // argument of the [cubic bezier curve](http://cubic-bezier.com/#0,0,.5,1),
    // `0.5` by default).
    run: function run(el, newPos, duration, easeLinearity) {
      this.stop();
      this._el = el;
      this._inProgress = true;
      this._duration = duration || 0.25;
      this._easeOutPower = 1 / Math.max(easeLinearity || 0.5, 0.2);
      this._startPos = getPosition(el);
      this._offset = newPos.subtract(this._startPos);
      this._startTime = +new Date(); // @event start: Event
      // Fired when the animation starts

      this.fire('start');

      this._animate();
    },
    // @method stop()
    // Stops the animation (if currently running).
    stop: function stop() {
      if (!this._inProgress) {
        return;
      }

      this._step(true);

      this._complete();
    },
    _animate: function _animate() {
      // animation loop
      this._animId = requestAnimFrame(this._animate, this);

      this._step();
    },
    _step: function _step(round) {
      var elapsed = +new Date() - this._startTime,
          duration = this._duration * 1000;

      if (elapsed < duration) {
        this._runFrame(this._easeOut(elapsed / duration), round);
      } else {
        this._runFrame(1);

        this._complete();
      }
    },
    _runFrame: function _runFrame(progress, round) {
      var pos = this._startPos.add(this._offset.multiplyBy(progress));

      if (round) {
        pos._round();
      }

      setPosition(this._el, pos); // @event step: Event
      // Fired continuously during the animation.

      this.fire('step');
    },
    _complete: function _complete() {
      cancelAnimFrame(this._animId);
      this._inProgress = false; // @event end: Event
      // Fired when the animation ends.

      this.fire('end');
    },
    _easeOut: function _easeOut(t) {
      return 1 - Math.pow(1 - t, this._easeOutPower);
    }
  });
  /*
   * @class Map
   * @aka L.Map
   * @inherits Evented
   *
   * The central class of the API — it is used to create a map on a page and manipulate it.
   *
   * @example
   *
   * ```js
   * // initialize the map on the "map" div with a given center and zoom
   * var map = L.map('map', {
   * 	center: [51.505, -0.09],
   * 	zoom: 13
   * });
   * ```
   *
   */

  var Map = Evented.extend({
    options: {
      // @section Map State Options
      // @option crs: CRS = L.CRS.EPSG3857
      // The [Coordinate Reference System](#crs) to use. Don't change this if you're not
      // sure what it means.
      crs: EPSG3857,
      // @option center: LatLng = undefined
      // Initial geographic center of the map
      center: undefined,
      // @option zoom: Number = undefined
      // Initial map zoom level
      zoom: undefined,
      // @option minZoom: Number = *
      // Minimum zoom level of the map.
      // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
      // the lowest of their `minZoom` options will be used instead.
      minZoom: undefined,
      // @option maxZoom: Number = *
      // Maximum zoom level of the map.
      // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
      // the highest of their `maxZoom` options will be used instead.
      maxZoom: undefined,
      // @option layers: Layer[] = []
      // Array of layers that will be added to the map initially
      layers: [],
      // @option maxBounds: LatLngBounds = null
      // When this option is set, the map restricts the view to the given
      // geographical bounds, bouncing the user back if the user tries to pan
      // outside the view. To set the restriction dynamically, use
      // [`setMaxBounds`](#map-setmaxbounds) method.
      maxBounds: undefined,
      // @option renderer: Renderer = *
      // The default method for drawing vector layers on the map. `L.SVG`
      // or `L.Canvas` by default depending on browser support.
      renderer: undefined,
      // @section Animation Options
      // @option zoomAnimation: Boolean = true
      // Whether the map zoom animation is enabled. By default it's enabled
      // in all browsers that support CSS3 Transitions except Android.
      zoomAnimation: true,
      // @option zoomAnimationThreshold: Number = 4
      // Won't animate zoom if the zoom difference exceeds this value.
      zoomAnimationThreshold: 4,
      // @option fadeAnimation: Boolean = true
      // Whether the tile fade animation is enabled. By default it's enabled
      // in all browsers that support CSS3 Transitions except Android.
      fadeAnimation: true,
      // @option markerZoomAnimation: Boolean = true
      // Whether markers animate their zoom with the zoom animation, if disabled
      // they will disappear for the length of the animation. By default it's
      // enabled in all browsers that support CSS3 Transitions except Android.
      markerZoomAnimation: true,
      // @option transform3DLimit: Number = 2^23
      // Defines the maximum size of a CSS translation transform. The default
      // value should not be changed unless a web browser positions layers in
      // the wrong place after doing a large `panBy`.
      transform3DLimit: 8388608,
      // Precision limit of a 32-bit float
      // @section Interaction Options
      // @option zoomSnap: Number = 1
      // Forces the map's zoom level to always be a multiple of this, particularly
      // right after a [`fitBounds()`](#map-fitbounds) or a pinch-zoom.
      // By default, the zoom level snaps to the nearest integer; lower values
      // (e.g. `0.5` or `0.1`) allow for greater granularity. A value of `0`
      // means the zoom level will not be snapped after `fitBounds` or a pinch-zoom.
      zoomSnap: 1,
      // @option zoomDelta: Number = 1
      // Controls how much the map's zoom level will change after a
      // [`zoomIn()`](#map-zoomin), [`zoomOut()`](#map-zoomout), pressing `+`
      // or `-` on the keyboard, or using the [zoom controls](#control-zoom).
      // Values smaller than `1` (e.g. `0.5`) allow for greater granularity.
      zoomDelta: 1,
      // @option trackResize: Boolean = true
      // Whether the map automatically handles browser window resize to update itself.
      trackResize: true
    },
    initialize: function initialize(id, options) {
      // (HTMLElement or String, Object)
      options = setOptions(this, options);

      this._initContainer(id);

      this._initLayout(); // hack for https://github.com/Leaflet/Leaflet/issues/1980


      this._onResize = bind(this._onResize, this);

      this._initEvents();

      if (options.maxBounds) {
        this.setMaxBounds(options.maxBounds);
      }

      if (options.zoom !== undefined) {
        this._zoom = this._limitZoom(options.zoom);
      }

      if (options.center && options.zoom !== undefined) {
        this.setView(toLatLng(options.center), options.zoom, {
          reset: true
        });
      }

      this._handlers = [];
      this._layers = {};
      this._zoomBoundLayers = {};
      this._sizeChanged = true;
      this.callInitHooks(); // don't animate on browsers without hardware-accelerated transitions or old Android/Opera

      this._zoomAnimated = TRANSITION && any3d && !mobileOpera && this.options.zoomAnimation; // zoom transitions run with the same duration for all layers, so if one of transitionend events
      // happens after starting zoom animation (propagating to the map pane), we know that it ended globally

      if (this._zoomAnimated) {
        this._createAnimProxy();

        on(this._proxy, TRANSITION_END, this._catchTransitionEnd, this);
      }

      this._addLayers(this.options.layers);
    },
    // @section Methods for modifying map state
    // @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
    // Sets the view of the map (geographical center and zoom) with the given
    // animation options.
    setView: function setView(center, zoom, options) {
      zoom = zoom === undefined ? this._zoom : this._limitZoom(zoom);
      center = this._limitCenter(toLatLng(center), zoom, this.options.maxBounds);
      options = options || {};

      this._stop();

      if (this._loaded && !options.reset && options !== true) {
        if (options.animate !== undefined) {
          options.zoom = extend({
            animate: options.animate
          }, options.zoom);
          options.pan = extend({
            animate: options.animate,
            duration: options.duration
          }, options.pan);
        } // try animating pan or zoom


        var moved = this._zoom !== zoom ? this._tryAnimatedZoom && this._tryAnimatedZoom(center, zoom, options.zoom) : this._tryAnimatedPan(center, options.pan);

        if (moved) {
          // prevent resize handler call, the view will refresh after animation anyway
          clearTimeout(this._sizeTimer);
          return this;
        }
      } // animation didn't start, just reset the map view


      this._resetView(center, zoom);

      return this;
    },
    // @method setZoom(zoom: Number, options?: Zoom/pan options): this
    // Sets the zoom of the map.
    setZoom: function setZoom(zoom, options) {
      if (!this._loaded) {
        this._zoom = zoom;
        return this;
      }

      return this.setView(this.getCenter(), zoom, {
        zoom: options
      });
    },
    // @method zoomIn(delta?: Number, options?: Zoom options): this
    // Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
    zoomIn: function zoomIn(delta, options) {
      delta = delta || (any3d ? this.options.zoomDelta : 1);
      return this.setZoom(this._zoom + delta, options);
    },
    // @method zoomOut(delta?: Number, options?: Zoom options): this
    // Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
    zoomOut: function zoomOut(delta, options) {
      delta = delta || (any3d ? this.options.zoomDelta : 1);
      return this.setZoom(this._zoom - delta, options);
    },
    // @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
    // Zooms the map while keeping a specified geographical point on the map
    // stationary (e.g. used internally for scroll zoom and double-click zoom).
    // @alternative
    // @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
    // Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
    setZoomAround: function setZoomAround(latlng, zoom, options) {
      var scale = this.getZoomScale(zoom),
          viewHalf = this.getSize().divideBy(2),
          containerPoint = latlng instanceof Point ? latlng : this.latLngToContainerPoint(latlng),
          centerOffset = containerPoint.subtract(viewHalf).multiplyBy(1 - 1 / scale),
          newCenter = this.containerPointToLatLng(viewHalf.add(centerOffset));
      return this.setView(newCenter, zoom, {
        zoom: options
      });
    },
    _getBoundsCenterZoom: function _getBoundsCenterZoom(bounds, options) {
      options = options || {};
      bounds = bounds.getBounds ? bounds.getBounds() : toLatLngBounds(bounds);
      var paddingTL = toPoint(options.paddingTopLeft || options.padding || [0, 0]),
          paddingBR = toPoint(options.paddingBottomRight || options.padding || [0, 0]),
          zoom = this.getBoundsZoom(bounds, false, paddingTL.add(paddingBR));
      zoom = typeof options.maxZoom === 'number' ? Math.min(options.maxZoom, zoom) : zoom;

      if (zoom === Infinity) {
        return {
          center: bounds.getCenter(),
          zoom: zoom
        };
      }

      var paddingOffset = paddingBR.subtract(paddingTL).divideBy(2),
          swPoint = this.project(bounds.getSouthWest(), zoom),
          nePoint = this.project(bounds.getNorthEast(), zoom),
          center = this.unproject(swPoint.add(nePoint).divideBy(2).add(paddingOffset), zoom);
      return {
        center: center,
        zoom: zoom
      };
    },
    // @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
    // Sets a map view that contains the given geographical bounds with the
    // maximum zoom level possible.
    fitBounds: function fitBounds(bounds, options) {
      bounds = toLatLngBounds(bounds);

      if (!bounds.isValid()) {
        throw new Error('Bounds are not valid.');
      }

      var target = this._getBoundsCenterZoom(bounds, options);

      return this.setView(target.center, target.zoom, options);
    },
    // @method fitWorld(options?: fitBounds options): this
    // Sets a map view that mostly contains the whole world with the maximum
    // zoom level possible.
    fitWorld: function fitWorld(options) {
      return this.fitBounds([[-90, -180], [90, 180]], options);
    },
    // @method panTo(latlng: LatLng, options?: Pan options): this
    // Pans the map to a given center.
    panTo: function panTo(center, options) {
      // (LatLng)
      return this.setView(center, this._zoom, {
        pan: options
      });
    },
    // @method panBy(offset: Point, options?: Pan options): this
    // Pans the map by a given number of pixels (animated).
    panBy: function panBy(offset, options) {
      offset = toPoint(offset).round();
      options = options || {};

      if (!offset.x && !offset.y) {
        return this.fire('moveend');
      } // If we pan too far, Chrome gets issues with tiles
      // and makes them disappear or appear in the wrong place (slightly offset) #2602


      if (options.animate !== true && !this.getSize().contains(offset)) {
        this._resetView(this.unproject(this.project(this.getCenter()).add(offset)), this.getZoom());

        return this;
      }

      if (!this._panAnim) {
        this._panAnim = new PosAnimation();

        this._panAnim.on({
          'step': this._onPanTransitionStep,
          'end': this._onPanTransitionEnd
        }, this);
      } // don't fire movestart if animating inertia


      if (!options.noMoveStart) {
        this.fire('movestart');
      } // animate pan unless animate: false specified


      if (options.animate !== false) {
        addClass(this._mapPane, 'leaflet-pan-anim');

        var newPos = this._getMapPanePos().subtract(offset).round();

        this._panAnim.run(this._mapPane, newPos, options.duration || 0.25, options.easeLinearity);
      } else {
        this._rawPanBy(offset);

        this.fire('move').fire('moveend');
      }

      return this;
    },
    // @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/pan options): this
    // Sets the view of the map (geographical center and zoom) performing a smooth
    // pan-zoom animation.
    flyTo: function flyTo(targetCenter, targetZoom, options) {
      options = options || {};

      if (options.animate === false || !any3d) {
        return this.setView(targetCenter, targetZoom, options);
      }

      this._stop();

      var from = this.project(this.getCenter()),
          to = this.project(targetCenter),
          size = this.getSize(),
          startZoom = this._zoom;
      targetCenter = toLatLng(targetCenter);
      targetZoom = targetZoom === undefined ? startZoom : targetZoom;
      var w0 = Math.max(size.x, size.y),
          w1 = w0 * this.getZoomScale(startZoom, targetZoom),
          u1 = to.distanceTo(from) || 1,
          rho = 1.42,
          rho2 = rho * rho;

      function r(i) {
        var s1 = i ? -1 : 1,
            s2 = i ? w1 : w0,
            t1 = w1 * w1 - w0 * w0 + s1 * rho2 * rho2 * u1 * u1,
            b1 = 2 * s2 * rho2 * u1,
            b = t1 / b1,
            sq = Math.sqrt(b * b + 1) - b; // workaround for floating point precision bug when sq = 0, log = -Infinite,
        // thus triggering an infinite loop in flyTo

        var log = sq < 0.000000001 ? -18 : Math.log(sq);
        return log;
      }

      function sinh(n) {
        return (Math.exp(n) - Math.exp(-n)) / 2;
      }

      function cosh(n) {
        return (Math.exp(n) + Math.exp(-n)) / 2;
      }

      function tanh(n) {
        return sinh(n) / cosh(n);
      }

      var r0 = r(0);

      function w(s) {
        return w0 * (cosh(r0) / cosh(r0 + rho * s));
      }

      function u(s) {
        return w0 * (cosh(r0) * tanh(r0 + rho * s) - sinh(r0)) / rho2;
      }

      function easeOut(t) {
        return 1 - Math.pow(1 - t, 1.5);
      }

      var start = Date.now(),
          S = (r(1) - r0) / rho,
          duration = options.duration ? 1000 * options.duration : 1000 * S * 0.8;

      function frame() {
        var t = (Date.now() - start) / duration,
            s = easeOut(t) * S;

        if (t <= 1) {
          this._flyToFrame = requestAnimFrame(frame, this);

          this._move(this.unproject(from.add(to.subtract(from).multiplyBy(u(s) / u1)), startZoom), this.getScaleZoom(w0 / w(s), startZoom), {
            flyTo: true
          });
        } else {
          this._move(targetCenter, targetZoom)._moveEnd(true);
        }
      }

      this._moveStart(true, options.noMoveStart);

      frame.call(this);
      return this;
    },
    // @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this
    // Sets the view of the map with a smooth animation like [`flyTo`](#map-flyto),
    // but takes a bounds parameter like [`fitBounds`](#map-fitbounds).
    flyToBounds: function flyToBounds(bounds, options) {
      var target = this._getBoundsCenterZoom(bounds, options);

      return this.flyTo(target.center, target.zoom, options);
    },
    // @method setMaxBounds(bounds: Bounds): this
    // Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).
    setMaxBounds: function setMaxBounds(bounds) {
      bounds = toLatLngBounds(bounds);

      if (!bounds.isValid()) {
        this.options.maxBounds = null;
        return this.off('moveend', this._panInsideMaxBounds);
      } else if (this.options.maxBounds) {
        this.off('moveend', this._panInsideMaxBounds);
      }

      this.options.maxBounds = bounds;

      if (this._loaded) {
        this._panInsideMaxBounds();
      }

      return this.on('moveend', this._panInsideMaxBounds);
    },
    // @method setMinZoom(zoom: Number): this
    // Sets the lower limit for the available zoom levels (see the [minZoom](#map-minzoom) option).
    setMinZoom: function setMinZoom(zoom) {
      var oldZoom = this.options.minZoom;
      this.options.minZoom = zoom;

      if (this._loaded && oldZoom !== zoom) {
        this.fire('zoomlevelschange');

        if (this.getZoom() < this.options.minZoom) {
          return this.setZoom(zoom);
        }
      }

      return this;
    },
    // @method setMaxZoom(zoom: Number): this
    // Sets the upper limit for the available zoom levels (see the [maxZoom](#map-maxzoom) option).
    setMaxZoom: function setMaxZoom(zoom) {
      var oldZoom = this.options.maxZoom;
      this.options.maxZoom = zoom;

      if (this._loaded && oldZoom !== zoom) {
        this.fire('zoomlevelschange');

        if (this.getZoom() > this.options.maxZoom) {
          return this.setZoom(zoom);
        }
      }

      return this;
    },
    // @method panInsideBounds(bounds: LatLngBounds, options?: Pan options): this
    // Pans the map to the closest view that would lie inside the given bounds (if it's not already), controlling the animation using the options specific, if any.
    panInsideBounds: function panInsideBounds(bounds, options) {
      this._enforcingBounds = true;

      var center = this.getCenter(),
          newCenter = this._limitCenter(center, this._zoom, toLatLngBounds(bounds));

      if (!center.equals(newCenter)) {
        this.panTo(newCenter, options);
      }

      this._enforcingBounds = false;
      return this;
    },
    // @method invalidateSize(options: Zoom/pan options): this
    // Checks if the map container size changed and updates the map if so —
    // call it after you've changed the map size dynamically, also animating
    // pan by default. If `options.pan` is `false`, panning will not occur.
    // If `options.debounceMoveend` is `true`, it will delay `moveend` event so
    // that it doesn't happen often even if the method is called many
    // times in a row.
    // @alternative
    // @method invalidateSize(animate: Boolean): this
    // Checks if the map container size changed and updates the map if so —
    // call it after you've changed the map size dynamically, also animating
    // pan by default.
    invalidateSize: function invalidateSize(options) {
      if (!this._loaded) {
        return this;
      }

      options = extend({
        animate: false,
        pan: true
      }, options === true ? {
        animate: true
      } : options);
      var oldSize = this.getSize();
      this._sizeChanged = true;
      this._lastCenter = null;
      var newSize = this.getSize(),
          oldCenter = oldSize.divideBy(2).round(),
          newCenter = newSize.divideBy(2).round(),
          offset = oldCenter.subtract(newCenter);

      if (!offset.x && !offset.y) {
        return this;
      }

      if (options.animate && options.pan) {
        this.panBy(offset);
      } else {
        if (options.pan) {
          this._rawPanBy(offset);
        }

        this.fire('move');

        if (options.debounceMoveend) {
          clearTimeout(this._sizeTimer);
          this._sizeTimer = setTimeout(bind(this.fire, this, 'moveend'), 200);
        } else {
          this.fire('moveend');
        }
      } // @section Map state change events
      // @event resize: ResizeEvent
      // Fired when the map is resized.


      return this.fire('resize', {
        oldSize: oldSize,
        newSize: newSize
      });
    },
    // @section Methods for modifying map state
    // @method stop(): this
    // Stops the currently running `panTo` or `flyTo` animation, if any.
    stop: function stop() {
      this.setZoom(this._limitZoom(this._zoom));

      if (!this.options.zoomSnap) {
        this.fire('viewreset');
      }

      return this._stop();
    },
    // @section Geolocation methods
    // @method locate(options?: Locate options): this
    // Tries to locate the user using the Geolocation API, firing a [`locationfound`](#map-locationfound)
    // event with location data on success or a [`locationerror`](#map-locationerror) event on failure,
    // and optionally sets the map view to the user's location with respect to
    // detection accuracy (or to the world view if geolocation failed).
    // Note that, if your page doesn't use HTTPS, this method will fail in
    // modern browsers ([Chrome 50 and newer](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))
    // See `Locate options` for more details.
    locate: function locate(options) {
      options = this._locateOptions = extend({
        timeout: 10000,
        watch: false // setView: false
        // maxZoom: <Number>
        // maximumAge: 0
        // enableHighAccuracy: false

      }, options);

      if (!('geolocation' in navigator)) {
        this._handleGeolocationError({
          code: 0,
          message: 'Geolocation not supported.'
        });

        return this;
      }

      var onResponse = bind(this._handleGeolocationResponse, this),
          onError = bind(this._handleGeolocationError, this);

      if (options.watch) {
        this._locationWatchId = navigator.geolocation.watchPosition(onResponse, onError, options);
      } else {
        navigator.geolocation.getCurrentPosition(onResponse, onError, options);
      }

      return this;
    },
    // @method stopLocate(): this
    // Stops watching location previously initiated by `map.locate({watch: true})`
    // and aborts resetting the map view if map.locate was called with
    // `{setView: true}`.
    stopLocate: function stopLocate() {
      if (navigator.geolocation && navigator.geolocation.clearWatch) {
        navigator.geolocation.clearWatch(this._locationWatchId);
      }

      if (this._locateOptions) {
        this._locateOptions.setView = false;
      }

      return this;
    },
    _handleGeolocationError: function _handleGeolocationError(error) {
      var c = error.code,
          message = error.message || (c === 1 ? 'permission denied' : c === 2 ? 'position unavailable' : 'timeout');

      if (this._locateOptions.setView && !this._loaded) {
        this.fitWorld();
      } // @section Location events
      // @event locationerror: ErrorEvent
      // Fired when geolocation (using the [`locate`](#map-locate) method) failed.


      this.fire('locationerror', {
        code: c,
        message: 'Geolocation error: ' + message + '.'
      });
    },
    _handleGeolocationResponse: function _handleGeolocationResponse(pos) {
      var lat = pos.coords.latitude,
          lng = pos.coords.longitude,
          latlng = new LatLng(lat, lng),
          bounds = latlng.toBounds(pos.coords.accuracy),
          options = this._locateOptions;

      if (options.setView) {
        var zoom = this.getBoundsZoom(bounds);
        this.setView(latlng, options.maxZoom ? Math.min(zoom, options.maxZoom) : zoom);
      }

      var data = {
        latlng: latlng,
        bounds: bounds,
        timestamp: pos.timestamp
      };

      for (var i in pos.coords) {
        if (typeof pos.coords[i] === 'number') {
          data[i] = pos.coords[i];
        }
      } // @event locationfound: LocationEvent
      // Fired when geolocation (using the [`locate`](#map-locate) method)
      // went successfully.


      this.fire('locationfound', data);
    },
    // TODO Appropriate docs section?
    // @section Other Methods
    // @method addHandler(name: String, HandlerClass: Function): this
    // Adds a new `Handler` to the map, given its name and constructor function.
    addHandler: function addHandler(name, HandlerClass) {
      if (!HandlerClass) {
        return this;
      }

      var handler = this[name] = new HandlerClass(this);

      this._handlers.push(handler);

      if (this.options[name]) {
        handler.enable();
      }

      return this;
    },
    // @method remove(): this
    // Destroys the map and clears all related event listeners.
    remove: function remove() {
      this._initEvents(true);

      if (this._containerId !== this._container._leaflet_id) {
        throw new Error('Map container is being reused by another instance');
      }

      try {
        // throws error in IE6-8
        delete this._container._leaflet_id;
        delete this._containerId;
      } catch (e) {
        /*eslint-disable */
        this._container._leaflet_id = undefined;
        /* eslint-enable */

        this._containerId = undefined;
      }

      if (this._locationWatchId !== undefined) {
        this.stopLocate();
      }

      this._stop();

      _remove(this._mapPane);

      if (this._clearControlPos) {
        this._clearControlPos();
      }

      this._clearHandlers();

      if (this._loaded) {
        // @section Map state change events
        // @event unload: Event
        // Fired when the map is destroyed with [remove](#map-remove) method.
        this.fire('unload');
      }

      var i;

      for (i in this._layers) {
        this._layers[i].remove();
      }

      for (i in this._panes) {
        _remove(this._panes[i]);
      }

      this._layers = [];
      this._panes = [];
      delete this._mapPane;
      delete this._renderer;
      return this;
    },
    // @section Other Methods
    // @method createPane(name: String, container?: HTMLElement): HTMLElement
    // Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
    // then returns it. The pane is created as a child of `container`, or
    // as a child of the main map pane if not set.
    createPane: function createPane(name, container) {
      var className = 'leaflet-pane' + (name ? ' leaflet-' + name.replace('Pane', '') + '-pane' : ''),
          pane = create$1('div', className, container || this._mapPane);

      if (name) {
        this._panes[name] = pane;
      }

      return pane;
    },
    // @section Methods for Getting Map State
    // @method getCenter(): LatLng
    // Returns the geographical center of the map view
    getCenter: function getCenter() {
      this._checkIfLoaded();

      if (this._lastCenter && !this._moved()) {
        return this._lastCenter;
      }

      return this.layerPointToLatLng(this._getCenterLayerPoint());
    },
    // @method getZoom(): Number
    // Returns the current zoom level of the map view
    getZoom: function getZoom() {
      return this._zoom;
    },
    // @method getBounds(): LatLngBounds
    // Returns the geographical bounds visible in the current map view
    getBounds: function getBounds() {
      var bounds = this.getPixelBounds(),
          sw = this.unproject(bounds.getBottomLeft()),
          ne = this.unproject(bounds.getTopRight());
      return new LatLngBounds(sw, ne);
    },
    // @method getMinZoom(): Number
    // Returns the minimum zoom level of the map (if set in the `minZoom` option of the map or of any layers), or `0` by default.
    getMinZoom: function getMinZoom() {
      return this.options.minZoom === undefined ? this._layersMinZoom || 0 : this.options.minZoom;
    },
    // @method getMaxZoom(): Number
    // Returns the maximum zoom level of the map (if set in the `maxZoom` option of the map or of any layers).
    getMaxZoom: function getMaxZoom() {
      return this.options.maxZoom === undefined ? this._layersMaxZoom === undefined ? Infinity : this._layersMaxZoom : this.options.maxZoom;
    },
    // @method getBoundsZoom(bounds: LatLngBounds, inside?: Boolean): Number
    // Returns the maximum zoom level on which the given bounds fit to the map
    // view in its entirety. If `inside` (optional) is set to `true`, the method
    // instead returns the minimum zoom level on which the map view fits into
    // the given bounds in its entirety.
    getBoundsZoom: function getBoundsZoom(bounds, inside, padding) {
      // (LatLngBounds[, Boolean, Point]) -> Number
      bounds = toLatLngBounds(bounds);
      padding = toPoint(padding || [0, 0]);
      var zoom = this.getZoom() || 0,
          min = this.getMinZoom(),
          max = this.getMaxZoom(),
          nw = bounds.getNorthWest(),
          se = bounds.getSouthEast(),
          size = this.getSize().subtract(padding),
          boundsSize = toBounds(this.project(se, zoom), this.project(nw, zoom)).getSize(),
          snap = any3d ? this.options.zoomSnap : 1,
          scalex = size.x / boundsSize.x,
          scaley = size.y / boundsSize.y,
          scale = inside ? Math.max(scalex, scaley) : Math.min(scalex, scaley);
      zoom = this.getScaleZoom(scale, zoom);

      if (snap) {
        zoom = Math.round(zoom / (snap / 100)) * (snap / 100); // don't jump if within 1% of a snap level

        zoom = inside ? Math.ceil(zoom / snap) * snap : Math.floor(zoom / snap) * snap;
      }

      return Math.max(min, Math.min(max, zoom));
    },
    // @method getSize(): Point
    // Returns the current size of the map container (in pixels).
    getSize: function getSize() {
      if (!this._size || this._sizeChanged) {
        this._size = new Point(this._container.clientWidth || 0, this._container.clientHeight || 0);
        this._sizeChanged = false;
      }

      return this._size.clone();
    },
    // @method getPixelBounds(): Bounds
    // Returns the bounds of the current map view in projected pixel
    // coordinates (sometimes useful in layer and overlay implementations).
    getPixelBounds: function getPixelBounds(center, zoom) {
      var topLeftPoint = this._getTopLeftPoint(center, zoom);

      return new Bounds(topLeftPoint, topLeftPoint.add(this.getSize()));
    },
    // TODO: Check semantics - isn't the pixel origin the 0,0 coord relative to
    // the map pane? "left point of the map layer" can be confusing, specially
    // since there can be negative offsets.
    // @method getPixelOrigin(): Point
    // Returns the projected pixel coordinates of the top left point of
    // the map layer (useful in custom layer and overlay implementations).
    getPixelOrigin: function getPixelOrigin() {
      this._checkIfLoaded();

      return this._pixelOrigin;
    },
    // @method getPixelWorldBounds(zoom?: Number): Bounds
    // Returns the world's bounds in pixel coordinates for zoom level `zoom`.
    // If `zoom` is omitted, the map's current zoom level is used.
    getPixelWorldBounds: function getPixelWorldBounds(zoom) {
      return this.options.crs.getProjectedBounds(zoom === undefined ? this.getZoom() : zoom);
    },
    // @section Other Methods
    // @method getPane(pane: String|HTMLElement): HTMLElement
    // Returns a [map pane](#map-pane), given its name or its HTML element (its identity).
    getPane: function getPane(pane) {
      return typeof pane === 'string' ? this._panes[pane] : pane;
    },
    // @method getPanes(): Object
    // Returns a plain object containing the names of all [panes](#map-pane) as keys and
    // the panes as values.
    getPanes: function getPanes() {
      return this._panes;
    },
    // @method getContainer: HTMLElement
    // Returns the HTML element that contains the map.
    getContainer: function getContainer() {
      return this._container;
    },
    // @section Conversion Methods
    // @method getZoomScale(toZoom: Number, fromZoom: Number): Number
    // Returns the scale factor to be applied to a map transition from zoom level
    // `fromZoom` to `toZoom`. Used internally to help with zoom animations.
    getZoomScale: function getZoomScale(toZoom, fromZoom) {
      // TODO replace with universal implementation after refactoring projections
      var crs = this.options.crs;
      fromZoom = fromZoom === undefined ? this._zoom : fromZoom;
      return crs.scale(toZoom) / crs.scale(fromZoom);
    },
    // @method getScaleZoom(scale: Number, fromZoom: Number): Number
    // Returns the zoom level that the map would end up at, if it is at `fromZoom`
    // level and everything is scaled by a factor of `scale`. Inverse of
    // [`getZoomScale`](#map-getZoomScale).
    getScaleZoom: function getScaleZoom(scale, fromZoom) {
      var crs = this.options.crs;
      fromZoom = fromZoom === undefined ? this._zoom : fromZoom;
      var zoom = crs.zoom(scale * crs.scale(fromZoom));
      return isNaN(zoom) ? Infinity : zoom;
    },
    // @method project(latlng: LatLng, zoom: Number): Point
    // Projects a geographical coordinate `LatLng` according to the projection
    // of the map's CRS, then scales it according to `zoom` and the CRS's
    // `Transformation`. The result is pixel coordinate relative to
    // the CRS origin.
    project: function project(latlng, zoom) {
      zoom = zoom === undefined ? this._zoom : zoom;
      return this.options.crs.latLngToPoint(toLatLng(latlng), zoom);
    },
    // @method unproject(point: Point, zoom: Number): LatLng
    // Inverse of [`project`](#map-project).
    unproject: function unproject(point, zoom) {
      zoom = zoom === undefined ? this._zoom : zoom;
      return this.options.crs.pointToLatLng(toPoint(point), zoom);
    },
    // @method layerPointToLatLng(point: Point): LatLng
    // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
    // returns the corresponding geographical coordinate (for the current zoom level).
    layerPointToLatLng: function layerPointToLatLng(point) {
      var projectedPoint = toPoint(point).add(this.getPixelOrigin());
      return this.unproject(projectedPoint);
    },
    // @method latLngToLayerPoint(latlng: LatLng): Point
    // Given a geographical coordinate, returns the corresponding pixel coordinate
    // relative to the [origin pixel](#map-getpixelorigin).
    latLngToLayerPoint: function latLngToLayerPoint(latlng) {
      var projectedPoint = this.project(toLatLng(latlng))._round();

      return projectedPoint._subtract(this.getPixelOrigin());
    },
    // @method wrapLatLng(latlng: LatLng): LatLng
    // Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
    // map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
    // CRS's bounds.
    // By default this means longitude is wrapped around the dateline so its
    // value is between -180 and +180 degrees.
    wrapLatLng: function wrapLatLng(latlng) {
      return this.options.crs.wrapLatLng(toLatLng(latlng));
    },
    // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
    // Returns a `LatLngBounds` with the same size as the given one, ensuring that
    // its center is within the CRS's bounds.
    // By default this means the center longitude is wrapped around the dateline so its
    // value is between -180 and +180 degrees, and the majority of the bounds
    // overlaps the CRS's bounds.
    wrapLatLngBounds: function wrapLatLngBounds(latlng) {
      return this.options.crs.wrapLatLngBounds(toLatLngBounds(latlng));
    },
    // @method distance(latlng1: LatLng, latlng2: LatLng): Number
    // Returns the distance between two geographical coordinates according to
    // the map's CRS. By default this measures distance in meters.
    distance: function distance(latlng1, latlng2) {
      return this.options.crs.distance(toLatLng(latlng1), toLatLng(latlng2));
    },
    // @method containerPointToLayerPoint(point: Point): Point
    // Given a pixel coordinate relative to the map container, returns the corresponding
    // pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
    containerPointToLayerPoint: function containerPointToLayerPoint(point) {
      // (Point)
      return toPoint(point).subtract(this._getMapPanePos());
    },
    // @method layerPointToContainerPoint(point: Point): Point
    // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
    // returns the corresponding pixel coordinate relative to the map container.
    layerPointToContainerPoint: function layerPointToContainerPoint(point) {
      // (Point)
      return toPoint(point).add(this._getMapPanePos());
    },
    // @method containerPointToLatLng(point: Point): LatLng
    // Given a pixel coordinate relative to the map container, returns
    // the corresponding geographical coordinate (for the current zoom level).
    containerPointToLatLng: function containerPointToLatLng(point) {
      var layerPoint = this.containerPointToLayerPoint(toPoint(point));
      return this.layerPointToLatLng(layerPoint);
    },
    // @method latLngToContainerPoint(latlng: LatLng): Point
    // Given a geographical coordinate, returns the corresponding pixel coordinate
    // relative to the map container.
    latLngToContainerPoint: function latLngToContainerPoint(latlng) {
      return this.layerPointToContainerPoint(this.latLngToLayerPoint(toLatLng(latlng)));
    },
    // @method mouseEventToContainerPoint(ev: MouseEvent): Point
    // Given a MouseEvent object, returns the pixel coordinate relative to the
    // map container where the event took place.
    mouseEventToContainerPoint: function mouseEventToContainerPoint(e) {
      return getMousePosition(e, this._container);
    },
    // @method mouseEventToLayerPoint(ev: MouseEvent): Point
    // Given a MouseEvent object, returns the pixel coordinate relative to
    // the [origin pixel](#map-getpixelorigin) where the event took place.
    mouseEventToLayerPoint: function mouseEventToLayerPoint(e) {
      return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(e));
    },
    // @method mouseEventToLatLng(ev: MouseEvent): LatLng
    // Given a MouseEvent object, returns geographical coordinate where the
    // event took place.
    mouseEventToLatLng: function mouseEventToLatLng(e) {
      // (MouseEvent)
      return this.layerPointToLatLng(this.mouseEventToLayerPoint(e));
    },
    // map initialization methods
    _initContainer: function _initContainer(id) {
      var container = this._container = get(id);

      if (!container) {
        throw new Error('Map container not found.');
      } else if (container._leaflet_id) {
        throw new Error('Map container is already initialized.');
      }

      on(container, 'scroll', this._onScroll, this);
      this._containerId = stamp(container);
    },
    _initLayout: function _initLayout() {
      var container = this._container;
      this._fadeAnimated = this.options.fadeAnimation && any3d;
      addClass(container, 'leaflet-container' + (touch ? ' leaflet-touch' : '') + (retina ? ' leaflet-retina' : '') + (ielt9 ? ' leaflet-oldie' : '') + (safari ? ' leaflet-safari' : '') + (this._fadeAnimated ? ' leaflet-fade-anim' : ''));
      var position = getStyle(container, 'position');

      if (position !== 'absolute' && position !== 'relative' && position !== 'fixed') {
        container.style.position = 'relative';
      }

      this._initPanes();

      if (this._initControlPos) {
        this._initControlPos();
      }
    },
    _initPanes: function _initPanes() {
      var panes = this._panes = {};
      this._paneRenderers = {}; // @section
      //
      // Panes are DOM elements used to control the ordering of layers on the map. You
      // can access panes with [`map.getPane`](#map-getpane) or
      // [`map.getPanes`](#map-getpanes) methods. New panes can be created with the
      // [`map.createPane`](#map-createpane) method.
      //
      // Every map has the following default panes that differ only in zIndex.
      //
      // @pane mapPane: HTMLElement = 'auto'
      // Pane that contains all other map panes

      this._mapPane = this.createPane('mapPane', this._container);
      setPosition(this._mapPane, new Point(0, 0)); // @pane tilePane: HTMLElement = 200
      // Pane for `GridLayer`s and `TileLayer`s

      this.createPane('tilePane'); // @pane overlayPane: HTMLElement = 400
      // Pane for vectors (`Path`s, like `Polyline`s and `Polygon`s), `ImageOverlay`s and `VideoOverlay`s

      this.createPane('shadowPane'); // @pane shadowPane: HTMLElement = 500
      // Pane for overlay shadows (e.g. `Marker` shadows)

      this.createPane('overlayPane'); // @pane markerPane: HTMLElement = 600
      // Pane for `Icon`s of `Marker`s

      this.createPane('markerPane'); // @pane tooltipPane: HTMLElement = 650
      // Pane for `Tooltip`s.

      this.createPane('tooltipPane'); // @pane popupPane: HTMLElement = 700
      // Pane for `Popup`s.

      this.createPane('popupPane');

      if (!this.options.markerZoomAnimation) {
        addClass(panes.markerPane, 'leaflet-zoom-hide');
        addClass(panes.shadowPane, 'leaflet-zoom-hide');
      }
    },
    // private methods that modify map state
    // @section Map state change events
    _resetView: function _resetView(center, zoom) {
      setPosition(this._mapPane, new Point(0, 0));
      var loading = !this._loaded;
      this._loaded = true;
      zoom = this._limitZoom(zoom);
      this.fire('viewprereset');
      var zoomChanged = this._zoom !== zoom;

      this._moveStart(zoomChanged, false)._move(center, zoom)._moveEnd(zoomChanged); // @event viewreset: Event
      // Fired when the map needs to redraw its content (this usually happens
      // on map zoom or load). Very useful for creating custom overlays.


      this.fire('viewreset'); // @event load: Event
      // Fired when the map is initialized (when its center and zoom are set
      // for the first time).

      if (loading) {
        this.fire('load');
      }
    },
    _moveStart: function _moveStart(zoomChanged, noMoveStart) {
      // @event zoomstart: Event
      // Fired when the map zoom is about to change (e.g. before zoom animation).
      // @event movestart: Event
      // Fired when the view of the map starts changing (e.g. user starts dragging the map).
      if (zoomChanged) {
        this.fire('zoomstart');
      }

      if (!noMoveStart) {
        this.fire('movestart');
      }

      return this;
    },
    _move: function _move(center, zoom, data) {
      if (zoom === undefined) {
        zoom = this._zoom;
      }

      var zoomChanged = this._zoom !== zoom;
      this._zoom = zoom;
      this._lastCenter = center;
      this._pixelOrigin = this._getNewPixelOrigin(center); // @event zoom: Event
      // Fired repeatedly during any change in zoom level, including zoom
      // and fly animations.

      if (zoomChanged || data && data.pinch) {
        // Always fire 'zoom' if pinching because #3530
        this.fire('zoom', data);
      } // @event move: Event
      // Fired repeatedly during any movement of the map, including pan and
      // fly animations.


      return this.fire('move', data);
    },
    _moveEnd: function _moveEnd(zoomChanged) {
      // @event zoomend: Event
      // Fired when the map has changed, after any animations.
      if (zoomChanged) {
        this.fire('zoomend');
      } // @event moveend: Event
      // Fired when the center of the map stops changing (e.g. user stopped
      // dragging the map).


      return this.fire('moveend');
    },
    _stop: function _stop() {
      cancelAnimFrame(this._flyToFrame);

      if (this._panAnim) {
        this._panAnim.stop();
      }

      return this;
    },
    _rawPanBy: function _rawPanBy(offset) {
      setPosition(this._mapPane, this._getMapPanePos().subtract(offset));
    },
    _getZoomSpan: function _getZoomSpan() {
      return this.getMaxZoom() - this.getMinZoom();
    },
    _panInsideMaxBounds: function _panInsideMaxBounds() {
      if (!this._enforcingBounds) {
        this.panInsideBounds(this.options.maxBounds);
      }
    },
    _checkIfLoaded: function _checkIfLoaded() {
      if (!this._loaded) {
        throw new Error('Set map center and zoom first.');
      }
    },
    // DOM event handling
    // @section Interaction events
    _initEvents: function _initEvents(remove$$1) {
      this._targets = {};
      this._targets[stamp(this._container)] = this;
      var onOff = remove$$1 ? off : on; // @event click: MouseEvent
      // Fired when the user clicks (or taps) the map.
      // @event dblclick: MouseEvent
      // Fired when the user double-clicks (or double-taps) the map.
      // @event mousedown: MouseEvent
      // Fired when the user pushes the mouse button on the map.
      // @event mouseup: MouseEvent
      // Fired when the user releases the mouse button on the map.
      // @event mouseover: MouseEvent
      // Fired when the mouse enters the map.
      // @event mouseout: MouseEvent
      // Fired when the mouse leaves the map.
      // @event mousemove: MouseEvent
      // Fired while the mouse moves over the map.
      // @event contextmenu: MouseEvent
      // Fired when the user pushes the right mouse button on the map, prevents
      // default browser context menu from showing if there are listeners on
      // this event. Also fired on mobile when the user holds a single touch
      // for a second (also called long press).
      // @event keypress: KeyboardEvent
      // Fired when the user presses a key from the keyboard while the map is focused.

      onOff(this._container, 'click dblclick mousedown mouseup ' + 'mouseover mouseout mousemove contextmenu keypress', this._handleDOMEvent, this);

      if (this.options.trackResize) {
        onOff(window, 'resize', this._onResize, this);
      }

      if (any3d && this.options.transform3DLimit) {
        (remove$$1 ? this.off : this.on).call(this, 'moveend', this._onMoveEnd);
      }
    },
    _onResize: function _onResize() {
      cancelAnimFrame(this._resizeRequest);
      this._resizeRequest = requestAnimFrame(function () {
        this.invalidateSize({
          debounceMoveend: true
        });
      }, this);
    },
    _onScroll: function _onScroll() {
      this._container.scrollTop = 0;
      this._container.scrollLeft = 0;
    },
    _onMoveEnd: function _onMoveEnd() {
      var pos = this._getMapPanePos();

      if (Math.max(Math.abs(pos.x), Math.abs(pos.y)) >= this.options.transform3DLimit) {
        // https://bugzilla.mozilla.org/show_bug.cgi?id=1203873 but Webkit also have
        // a pixel offset on very high values, see: http://jsfiddle.net/dg6r5hhb/
        this._resetView(this.getCenter(), this.getZoom());
      }
    },
    _findEventTargets: function _findEventTargets(e, type) {
      var targets = [],
          target,
          isHover = type === 'mouseout' || type === 'mouseover',
          src = e.target || e.srcElement,
          dragging = false;

      while (src) {
        target = this._targets[stamp(src)];

        if (target && (type === 'click' || type === 'preclick') && !e._simulated && this._draggableMoved(target)) {
          // Prevent firing click after you just dragged an object.
          dragging = true;
          break;
        }

        if (target && target.listens(type, true)) {
          if (isHover && !isExternalTarget(src, e)) {
            break;
          }

          targets.push(target);

          if (isHover) {
            break;
          }
        }

        if (src === this._container) {
          break;
        }

        src = src.parentNode;
      }

      if (!targets.length && !dragging && !isHover && isExternalTarget(src, e)) {
        targets = [this];
      }

      return targets;
    },
    _handleDOMEvent: function _handleDOMEvent(e) {
      if (!this._loaded || skipped(e)) {
        return;
      }

      var type = e.type;

      if (type === 'mousedown' || type === 'keypress') {
        // prevents outline when clicking on keyboard-focusable element
        preventOutline(e.target || e.srcElement);
      }

      this._fireDOMEvent(e, type);
    },
    _mouseEvents: ['click', 'dblclick', 'mouseover', 'mouseout', 'contextmenu'],
    _fireDOMEvent: function _fireDOMEvent(e, type, targets) {
      if (e.type === 'click') {
        // Fire a synthetic 'preclick' event which propagates up (mainly for closing popups).
        // @event preclick: MouseEvent
        // Fired before mouse click on the map (sometimes useful when you
        // want something to happen on click before any existing click
        // handlers start running).
        var synth = extend({}, e);
        synth.type = 'preclick';

        this._fireDOMEvent(synth, synth.type, targets);
      }

      if (e._stopped) {
        return;
      } // Find the layer the event is propagating from and its parents.


      targets = (targets || []).concat(this._findEventTargets(e, type));

      if (!targets.length) {
        return;
      }

      var target = targets[0];

      if (type === 'contextmenu' && target.listens(type, true)) {
        preventDefault(e);
      }

      var data = {
        originalEvent: e
      };

      if (e.type !== 'keypress') {
        var isMarker = target.getLatLng && (!target._radius || target._radius <= 10);
        data.containerPoint = isMarker ? this.latLngToContainerPoint(target.getLatLng()) : this.mouseEventToContainerPoint(e);
        data.layerPoint = this.containerPointToLayerPoint(data.containerPoint);
        data.latlng = isMarker ? target.getLatLng() : this.layerPointToLatLng(data.layerPoint);
      }

      for (var i = 0; i < targets.length; i++) {
        targets[i].fire(type, data, true);

        if (data.originalEvent._stopped || targets[i].options.bubblingMouseEvents === false && indexOf(this._mouseEvents, type) !== -1) {
          return;
        }
      }
    },
    _draggableMoved: function _draggableMoved(obj) {
      obj = obj.dragging && obj.dragging.enabled() ? obj : this;
      return obj.dragging && obj.dragging.moved() || this.boxZoom && this.boxZoom.moved();
    },
    _clearHandlers: function _clearHandlers() {
      for (var i = 0, len = this._handlers.length; i < len; i++) {
        this._handlers[i].disable();
      }
    },
    // @section Other Methods
    // @method whenReady(fn: Function, context?: Object): this
    // Runs the given function `fn` when the map gets initialized with
    // a view (center and zoom) and at least one layer, or immediately
    // if it's already initialized, optionally passing a function context.
    whenReady: function whenReady(callback, context) {
      if (this._loaded) {
        callback.call(context || this, {
          target: this
        });
      } else {
        this.on('load', callback, context);
      }

      return this;
    },
    // private methods for getting map state
    _getMapPanePos: function _getMapPanePos() {
      return getPosition(this._mapPane) || new Point(0, 0);
    },
    _moved: function _moved() {
      var pos = this._getMapPanePos();

      return pos && !pos.equals([0, 0]);
    },
    _getTopLeftPoint: function _getTopLeftPoint(center, zoom) {
      var pixelOrigin = center && zoom !== undefined ? this._getNewPixelOrigin(center, zoom) : this.getPixelOrigin();
      return pixelOrigin.subtract(this._getMapPanePos());
    },
    _getNewPixelOrigin: function _getNewPixelOrigin(center, zoom) {
      var viewHalf = this.getSize()._divideBy(2);

      return this.project(center, zoom)._subtract(viewHalf)._add(this._getMapPanePos())._round();
    },
    _latLngToNewLayerPoint: function _latLngToNewLayerPoint(latlng, zoom, center) {
      var topLeft = this._getNewPixelOrigin(center, zoom);

      return this.project(latlng, zoom)._subtract(topLeft);
    },
    _latLngBoundsToNewLayerBounds: function _latLngBoundsToNewLayerBounds(latLngBounds, zoom, center) {
      var topLeft = this._getNewPixelOrigin(center, zoom);

      return toBounds([this.project(latLngBounds.getSouthWest(), zoom)._subtract(topLeft), this.project(latLngBounds.getNorthWest(), zoom)._subtract(topLeft), this.project(latLngBounds.getSouthEast(), zoom)._subtract(topLeft), this.project(latLngBounds.getNorthEast(), zoom)._subtract(topLeft)]);
    },
    // layer point of the current center
    _getCenterLayerPoint: function _getCenterLayerPoint() {
      return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
    },
    // offset of the specified place to the current center in pixels
    _getCenterOffset: function _getCenterOffset(latlng) {
      return this.latLngToLayerPoint(latlng).subtract(this._getCenterLayerPoint());
    },
    // adjust center for view to get inside bounds
    _limitCenter: function _limitCenter(center, zoom, bounds) {
      if (!bounds) {
        return center;
      }

      var centerPoint = this.project(center, zoom),
          viewHalf = this.getSize().divideBy(2),
          viewBounds = new Bounds(centerPoint.subtract(viewHalf), centerPoint.add(viewHalf)),
          offset = this._getBoundsOffset(viewBounds, bounds, zoom); // If offset is less than a pixel, ignore.
      // This prevents unstable projections from getting into
      // an infinite loop of tiny offsets.


      if (offset.round().equals([0, 0])) {
        return center;
      }

      return this.unproject(centerPoint.add(offset), zoom);
    },
    // adjust offset for view to get inside bounds
    _limitOffset: function _limitOffset(offset, bounds) {
      if (!bounds) {
        return offset;
      }

      var viewBounds = this.getPixelBounds(),
          newBounds = new Bounds(viewBounds.min.add(offset), viewBounds.max.add(offset));
      return offset.add(this._getBoundsOffset(newBounds, bounds));
    },
    // returns offset needed for pxBounds to get inside maxBounds at a specified zoom
    _getBoundsOffset: function _getBoundsOffset(pxBounds, maxBounds, zoom) {
      var projectedMaxBounds = toBounds(this.project(maxBounds.getNorthEast(), zoom), this.project(maxBounds.getSouthWest(), zoom)),
          minOffset = projectedMaxBounds.min.subtract(pxBounds.min),
          maxOffset = projectedMaxBounds.max.subtract(pxBounds.max),
          dx = this._rebound(minOffset.x, -maxOffset.x),
          dy = this._rebound(minOffset.y, -maxOffset.y);

      return new Point(dx, dy);
    },
    _rebound: function _rebound(left, right) {
      return left + right > 0 ? Math.round(left - right) / 2 : Math.max(0, Math.ceil(left)) - Math.max(0, Math.floor(right));
    },
    _limitZoom: function _limitZoom(zoom) {
      var min = this.getMinZoom(),
          max = this.getMaxZoom(),
          snap = any3d ? this.options.zoomSnap : 1;

      if (snap) {
        zoom = Math.round(zoom / snap) * snap;
      }

      return Math.max(min, Math.min(max, zoom));
    },
    _onPanTransitionStep: function _onPanTransitionStep() {
      this.fire('move');
    },
    _onPanTransitionEnd: function _onPanTransitionEnd() {
      removeClass(this._mapPane, 'leaflet-pan-anim');
      this.fire('moveend');
    },
    _tryAnimatedPan: function _tryAnimatedPan(center, options) {
      // difference between the new and current centers in pixels
      var offset = this._getCenterOffset(center)._trunc(); // don't animate too far unless animate: true specified in options


      if ((options && options.animate) !== true && !this.getSize().contains(offset)) {
        return false;
      }

      this.panBy(offset, options);
      return true;
    },
    _createAnimProxy: function _createAnimProxy() {
      var proxy = this._proxy = create$1('div', 'leaflet-proxy leaflet-zoom-animated');

      this._panes.mapPane.appendChild(proxy);

      this.on('zoomanim', function (e) {
        var prop = TRANSFORM,
            transform = this._proxy.style[prop];
        setTransform(this._proxy, this.project(e.center, e.zoom), this.getZoomScale(e.zoom, 1)); // workaround for case when transform is the same and so transitionend event is not fired

        if (transform === this._proxy.style[prop] && this._animatingZoom) {
          this._onZoomTransitionEnd();
        }
      }, this);
      this.on('load moveend', function () {
        var c = this.getCenter(),
            z = this.getZoom();
        setTransform(this._proxy, this.project(c, z), this.getZoomScale(z, 1));
      }, this);

      this._on('unload', this._destroyAnimProxy, this);
    },
    _destroyAnimProxy: function _destroyAnimProxy() {
      _remove(this._proxy);

      delete this._proxy;
    },
    _catchTransitionEnd: function _catchTransitionEnd(e) {
      if (this._animatingZoom && e.propertyName.indexOf('transform') >= 0) {
        this._onZoomTransitionEnd();
      }
    },
    _nothingToAnimate: function _nothingToAnimate() {
      return !this._container.getElementsByClassName('leaflet-zoom-animated').length;
    },
    _tryAnimatedZoom: function _tryAnimatedZoom(center, zoom, options) {
      if (this._animatingZoom) {
        return true;
      }

      options = options || {}; // don't animate if disabled, not supported or zoom difference is too large

      if (!this._zoomAnimated || options.animate === false || this._nothingToAnimate() || Math.abs(zoom - this._zoom) > this.options.zoomAnimationThreshold) {
        return false;
      } // offset is the pixel coords of the zoom origin relative to the current center


      var scale = this.getZoomScale(zoom),
          offset = this._getCenterOffset(center)._divideBy(1 - 1 / scale); // don't animate if the zoom origin isn't within one screen from the current center, unless forced


      if (options.animate !== true && !this.getSize().contains(offset)) {
        return false;
      }

      requestAnimFrame(function () {
        this._moveStart(true, false)._animateZoom(center, zoom, true);
      }, this);
      return true;
    },
    _animateZoom: function _animateZoom(center, zoom, startAnim, noUpdate) {
      if (!this._mapPane) {
        return;
      }

      if (startAnim) {
        this._animatingZoom = true; // remember what center/zoom to set after animation

        this._animateToCenter = center;
        this._animateToZoom = zoom;
        addClass(this._mapPane, 'leaflet-zoom-anim');
      } // @event zoomanim: ZoomAnimEvent
      // Fired on every frame of a zoom animation


      this.fire('zoomanim', {
        center: center,
        zoom: zoom,
        noUpdate: noUpdate
      }); // Work around webkit not firing 'transitionend', see https://github.com/Leaflet/Leaflet/issues/3689, 2693

      setTimeout(bind(this._onZoomTransitionEnd, this), 250);
    },
    _onZoomTransitionEnd: function _onZoomTransitionEnd() {
      if (!this._animatingZoom) {
        return;
      }

      if (this._mapPane) {
        removeClass(this._mapPane, 'leaflet-zoom-anim');
      }

      this._animatingZoom = false;

      this._move(this._animateToCenter, this._animateToZoom); // This anim frame should prevent an obscure iOS webkit tile loading race condition.


      requestAnimFrame(function () {
        this._moveEnd(true);
      }, this);
    }
  }); // @section
  // @factory L.map(id: String, options?: Map options)
  // Instantiates a map object given the DOM ID of a `<div>` element
  // and optionally an object literal with `Map options`.
  //
  // @alternative
  // @factory L.map(el: HTMLElement, options?: Map options)
  // Instantiates a map object given an instance of a `<div>` HTML element
  // and optionally an object literal with `Map options`.

  function createMap(id, options) {
    return new Map(id, options);
  }
  /*
   * @class Control
   * @aka L.Control
   * @inherits Class
   *
   * L.Control is a base class for implementing map controls. Handles positioning.
   * All other controls extend from this class.
   */


  var Control = Class.extend({
    // @section
    // @aka Control options
    options: {
      // @option position: String = 'topright'
      // The position of the control (one of the map corners). Possible values are `'topleft'`,
      // `'topright'`, `'bottomleft'` or `'bottomright'`
      position: 'topright'
    },
    initialize: function initialize(options) {
      setOptions(this, options);
    },

    /* @section
     * Classes extending L.Control will inherit the following methods:
     *
     * @method getPosition: string
     * Returns the position of the control.
     */
    getPosition: function getPosition() {
      return this.options.position;
    },
    // @method setPosition(position: string): this
    // Sets the position of the control.
    setPosition: function setPosition(position) {
      var map = this._map;

      if (map) {
        map.removeControl(this);
      }

      this.options.position = position;

      if (map) {
        map.addControl(this);
      }

      return this;
    },
    // @method getContainer: HTMLElement
    // Returns the HTMLElement that contains the control.
    getContainer: function getContainer() {
      return this._container;
    },
    // @method addTo(map: Map): this
    // Adds the control to the given map.
    addTo: function addTo(map) {
      this.remove();
      this._map = map;
      var container = this._container = this.onAdd(map),
          pos = this.getPosition(),
          corner = map._controlCorners[pos];
      addClass(container, 'leaflet-control');

      if (pos.indexOf('bottom') !== -1) {
        corner.insertBefore(container, corner.firstChild);
      } else {
        corner.appendChild(container);
      }

      return this;
    },
    // @method remove: this
    // Removes the control from the map it is currently active on.
    remove: function remove() {
      if (!this._map) {
        return this;
      }

      _remove(this._container);

      if (this.onRemove) {
        this.onRemove(this._map);
      }

      this._map = null;
      return this;
    },
    _refocusOnMap: function _refocusOnMap(e) {
      // if map exists and event is not a keyboard event
      if (this._map && e && e.screenX > 0 && e.screenY > 0) {
        this._map.getContainer().focus();
      }
    }
  });

  var control = function control(options) {
    return new Control(options);
  };
  /* @section Extension methods
   * @uninheritable
   *
   * Every control should extend from `L.Control` and (re-)implement the following methods.
   *
   * @method onAdd(map: Map): HTMLElement
   * Should return the container DOM element for the control and add listeners on relevant map events. Called on [`control.addTo(map)`](#control-addTo).
   *
   * @method onRemove(map: Map)
   * Optional method. Should contain all clean up code that removes the listeners previously added in [`onAdd`](#control-onadd). Called on [`control.remove()`](#control-remove).
   */

  /* @namespace Map
   * @section Methods for Layers and Controls
   */


  Map.include({
    // @method addControl(control: Control): this
    // Adds the given control to the map
    addControl: function addControl(control) {
      control.addTo(this);
      return this;
    },
    // @method removeControl(control: Control): this
    // Removes the given control from the map
    removeControl: function removeControl(control) {
      control.remove();
      return this;
    },
    _initControlPos: function _initControlPos() {
      var corners = this._controlCorners = {},
          l = 'leaflet-',
          container = this._controlContainer = create$1('div', l + 'control-container', this._container);

      function createCorner(vSide, hSide) {
        var className = l + vSide + ' ' + l + hSide;
        corners[vSide + hSide] = create$1('div', className, container);
      }

      createCorner('top', 'left');
      createCorner('top', 'right');
      createCorner('bottom', 'left');
      createCorner('bottom', 'right');
    },
    _clearControlPos: function _clearControlPos() {
      for (var i in this._controlCorners) {
        _remove(this._controlCorners[i]);
      }

      _remove(this._controlContainer);

      delete this._controlCorners;
      delete this._controlContainer;
    }
  });
  /*
   * @class Control.Layers
   * @aka L.Control.Layers
   * @inherits Control
   *
   * The layers control gives users the ability to switch between different base layers and switch overlays on/off (check out the [detailed example](http://leafletjs.com/examples/layers-control/)). Extends `Control`.
   *
   * @example
   *
   * ```js
   * var baseLayers = {
   * 	"Mapbox": mapbox,
   * 	"OpenStreetMap": osm
   * };
   *
   * var overlays = {
   * 	"Marker": marker,
   * 	"Roads": roadsLayer
   * };
   *
   * L.control.layers(baseLayers, overlays).addTo(map);
   * ```
   *
   * The `baseLayers` and `overlays` parameters are object literals with layer names as keys and `Layer` objects as values:
   *
   * ```js
   * {
   *     "<someName1>": layer1,
   *     "<someName2>": layer2
   * }
   * ```
   *
   * The layer names can contain HTML, which allows you to add additional styling to the items:
   *
   * ```js
   * {"<img src='my-layer-icon' /> <span class='my-layer-item'>My Layer</span>": myLayer}
   * ```
   */

  var Layers = Control.extend({
    // @section
    // @aka Control.Layers options
    options: {
      // @option collapsed: Boolean = true
      // If `true`, the control will be collapsed into an icon and expanded on mouse hover or touch.
      collapsed: true,
      position: 'topright',
      // @option autoZIndex: Boolean = true
      // If `true`, the control will assign zIndexes in increasing order to all of its layers so that the order is preserved when switching them on/off.
      autoZIndex: true,
      // @option hideSingleBase: Boolean = false
      // If `true`, the base layers in the control will be hidden when there is only one.
      hideSingleBase: false,
      // @option sortLayers: Boolean = false
      // Whether to sort the layers. When `false`, layers will keep the order
      // in which they were added to the control.
      sortLayers: false,
      // @option sortFunction: Function = *
      // A [compare function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
      // that will be used for sorting the layers, when `sortLayers` is `true`.
      // The function receives both the `L.Layer` instances and their names, as in
      // `sortFunction(layerA, layerB, nameA, nameB)`.
      // By default, it sorts layers alphabetically by their name.
      sortFunction: function sortFunction(layerA, layerB, nameA, nameB) {
        return nameA < nameB ? -1 : nameB < nameA ? 1 : 0;
      }
    },
    initialize: function initialize(baseLayers, overlays, options) {
      setOptions(this, options);
      this._layerControlInputs = [];
      this._layers = [];
      this._lastZIndex = 0;
      this._handlingClick = false;

      for (var i in baseLayers) {
        this._addLayer(baseLayers[i], i);
      }

      for (i in overlays) {
        this._addLayer(overlays[i], i, true);
      }
    },
    onAdd: function onAdd(map) {
      this._initLayout();

      this._update();

      this._map = map;
      map.on('zoomend', this._checkDisabledLayers, this);

      for (var i = 0; i < this._layers.length; i++) {
        this._layers[i].layer.on('add remove', this._onLayerChange, this);
      }

      return this._container;
    },
    addTo: function addTo(map) {
      Control.prototype.addTo.call(this, map); // Trigger expand after Layers Control has been inserted into DOM so that is now has an actual height.

      return this._expandIfNotCollapsed();
    },
    onRemove: function onRemove() {
      this._map.off('zoomend', this._checkDisabledLayers, this);

      for (var i = 0; i < this._layers.length; i++) {
        this._layers[i].layer.off('add remove', this._onLayerChange, this);
      }
    },
    // @method addBaseLayer(layer: Layer, name: String): this
    // Adds a base layer (radio button entry) with the given name to the control.
    addBaseLayer: function addBaseLayer(layer, name) {
      this._addLayer(layer, name);

      return this._map ? this._update() : this;
    },
    // @method addOverlay(layer: Layer, name: String): this
    // Adds an overlay (checkbox entry) with the given name to the control.
    addOverlay: function addOverlay(layer, name) {
      this._addLayer(layer, name, true);

      return this._map ? this._update() : this;
    },
    // @method removeLayer(layer: Layer): this
    // Remove the given layer from the control.
    removeLayer: function removeLayer(layer) {
      layer.off('add remove', this._onLayerChange, this);

      var obj = this._getLayer(stamp(layer));

      if (obj) {
        this._layers.splice(this._layers.indexOf(obj), 1);
      }

      return this._map ? this._update() : this;
    },
    // @method expand(): this
    // Expand the control container if collapsed.
    expand: function expand() {
      addClass(this._container, 'leaflet-control-layers-expanded');
      this._form.style.height = null;
      var acceptableHeight = this._map.getSize().y - (this._container.offsetTop + 50);

      if (acceptableHeight < this._form.clientHeight) {
        addClass(this._form, 'leaflet-control-layers-scrollbar');
        this._form.style.height = acceptableHeight + 'px';
      } else {
        removeClass(this._form, 'leaflet-control-layers-scrollbar');
      }

      this._checkDisabledLayers();

      return this;
    },
    // @method collapse(): this
    // Collapse the control container if expanded.
    collapse: function collapse() {
      removeClass(this._container, 'leaflet-control-layers-expanded');
      return this;
    },
    _initLayout: function _initLayout() {
      var className = 'leaflet-control-layers',
          container = this._container = create$1('div', className),
          collapsed = this.options.collapsed; // makes this work on IE touch devices by stopping it from firing a mouseout event when the touch is released

      container.setAttribute('aria-haspopup', true);
      disableClickPropagation(container);
      disableScrollPropagation(container);
      var form = this._form = create$1('form', className + '-list');

      if (collapsed) {
        this._map.on('click', this.collapse, this);

        if (!android) {
          on(container, {
            mouseenter: this.expand,
            mouseleave: this.collapse
          }, this);
        }
      }

      var link = this._layersLink = create$1('a', className + '-toggle', container);
      link.href = '#';
      link.title = 'Layers';

      if (touch) {
        on(link, 'click', stop);
        on(link, 'click', this.expand, this);
      } else {
        on(link, 'focus', this.expand, this);
      }

      if (!collapsed) {
        this.expand();
      }

      this._baseLayersList = create$1('div', className + '-base', form);
      this._separator = create$1('div', className + '-separator', form);
      this._overlaysList = create$1('div', className + '-overlays', form);
      container.appendChild(form);
    },
    _getLayer: function _getLayer(id) {
      for (var i = 0; i < this._layers.length; i++) {
        if (this._layers[i] && stamp(this._layers[i].layer) === id) {
          return this._layers[i];
        }
      }
    },
    _addLayer: function _addLayer(layer, name, overlay) {
      if (this._map) {
        layer.on('add remove', this._onLayerChange, this);
      }

      this._layers.push({
        layer: layer,
        name: name,
        overlay: overlay
      });

      if (this.options.sortLayers) {
        this._layers.sort(bind(function (a, b) {
          return this.options.sortFunction(a.layer, b.layer, a.name, b.name);
        }, this));
      }

      if (this.options.autoZIndex && layer.setZIndex) {
        this._lastZIndex++;
        layer.setZIndex(this._lastZIndex);
      }

      this._expandIfNotCollapsed();
    },
    _update: function _update() {
      if (!this._container) {
        return this;
      }

      empty(this._baseLayersList);
      empty(this._overlaysList);
      this._layerControlInputs = [];
      var baseLayersPresent,
          overlaysPresent,
          i,
          obj,
          baseLayersCount = 0;

      for (i = 0; i < this._layers.length; i++) {
        obj = this._layers[i];

        this._addItem(obj);

        overlaysPresent = overlaysPresent || obj.overlay;
        baseLayersPresent = baseLayersPresent || !obj.overlay;
        baseLayersCount += !obj.overlay ? 1 : 0;
      } // Hide base layers section if there's only one layer.


      if (this.options.hideSingleBase) {
        baseLayersPresent = baseLayersPresent && baseLayersCount > 1;
        this._baseLayersList.style.display = baseLayersPresent ? '' : 'none';
      }

      this._separator.style.display = overlaysPresent && baseLayersPresent ? '' : 'none';
      return this;
    },
    _onLayerChange: function _onLayerChange(e) {
      if (!this._handlingClick) {
        this._update();
      }

      var obj = this._getLayer(stamp(e.target)); // @namespace Map
      // @section Layer events
      // @event baselayerchange: LayersControlEvent
      // Fired when the base layer is changed through the [layer control](#control-layers).
      // @event overlayadd: LayersControlEvent
      // Fired when an overlay is selected through the [layer control](#control-layers).
      // @event overlayremove: LayersControlEvent
      // Fired when an overlay is deselected through the [layer control](#control-layers).
      // @namespace Control.Layers


      var type = obj.overlay ? e.type === 'add' ? 'overlayadd' : 'overlayremove' : e.type === 'add' ? 'baselayerchange' : null;

      if (type) {
        this._map.fire(type, obj);
      }
    },
    // IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see http://bit.ly/PqYLBe)
    _createRadioElement: function _createRadioElement(name, checked) {
      var radioHtml = '<input type="radio" class="leaflet-control-layers-selector" name="' + name + '"' + (checked ? ' checked="checked"' : '') + '/>';
      var radioFragment = document.createElement('div');
      radioFragment.innerHTML = radioHtml;
      return radioFragment.firstChild;
    },
    _addItem: function _addItem(obj) {
      var label = document.createElement('label'),
          checked = this._map.hasLayer(obj.layer),
          input;

      if (obj.overlay) {
        input = document.createElement('input');
        input.type = 'checkbox';
        input.className = 'leaflet-control-layers-selector';
        input.defaultChecked = checked;
      } else {
        input = this._createRadioElement('leaflet-base-layers', checked);
      }

      this._layerControlInputs.push(input);

      input.layerId = stamp(obj.layer);
      on(input, 'click', this._onInputClick, this);
      var name = document.createElement('span');
      name.innerHTML = ' ' + obj.name; // Helps from preventing layer control flicker when checkboxes are disabled
      // https://github.com/Leaflet/Leaflet/issues/2771

      var holder = document.createElement('div');
      label.appendChild(holder);
      holder.appendChild(input);
      holder.appendChild(name);
      var container = obj.overlay ? this._overlaysList : this._baseLayersList;
      container.appendChild(label);

      this._checkDisabledLayers();

      return label;
    },
    _onInputClick: function _onInputClick() {
      var inputs = this._layerControlInputs,
          input,
          layer;
      var addedLayers = [],
          removedLayers = [];
      this._handlingClick = true;

      for (var i = inputs.length - 1; i >= 0; i--) {
        input = inputs[i];
        layer = this._getLayer(input.layerId).layer;

        if (input.checked) {
          addedLayers.push(layer);
        } else if (!input.checked) {
          removedLayers.push(layer);
        }
      } // Bugfix issue 2318: Should remove all old layers before readding new ones


      for (i = 0; i < removedLayers.length; i++) {
        if (this._map.hasLayer(removedLayers[i])) {
          this._map.removeLayer(removedLayers[i]);
        }
      }

      for (i = 0; i < addedLayers.length; i++) {
        if (!this._map.hasLayer(addedLayers[i])) {
          this._map.addLayer(addedLayers[i]);
        }
      }

      this._handlingClick = false;

      this._refocusOnMap();
    },
    _checkDisabledLayers: function _checkDisabledLayers() {
      var inputs = this._layerControlInputs,
          input,
          layer,
          zoom = this._map.getZoom();

      for (var i = inputs.length - 1; i >= 0; i--) {
        input = inputs[i];
        layer = this._getLayer(input.layerId).layer;
        input.disabled = layer.options.minZoom !== undefined && zoom < layer.options.minZoom || layer.options.maxZoom !== undefined && zoom > layer.options.maxZoom;
      }
    },
    _expandIfNotCollapsed: function _expandIfNotCollapsed() {
      if (this._map && !this.options.collapsed) {
        this.expand();
      }

      return this;
    },
    _expand: function _expand() {
      // Backward compatibility, remove me in 1.1.
      return this.expand();
    },
    _collapse: function _collapse() {
      // Backward compatibility, remove me in 1.1.
      return this.collapse();
    }
  }); // @factory L.control.layers(baselayers?: Object, overlays?: Object, options?: Control.Layers options)
  // Creates an attribution control with the given layers. Base layers will be switched with radio buttons, while overlays will be switched with checkboxes. Note that all base layers should be passed in the base layers object, but only one should be added to the map during map instantiation.

  var layers = function layers(baseLayers, overlays, options) {
    return new Layers(baseLayers, overlays, options);
  };
  /*
   * @class Control.Zoom
   * @aka L.Control.Zoom
   * @inherits Control
   *
   * A basic zoom control with two buttons (zoom in and zoom out). It is put on the map by default unless you set its [`zoomControl` option](#map-zoomcontrol) to `false`. Extends `Control`.
   */


  var Zoom = Control.extend({
    // @section
    // @aka Control.Zoom options
    options: {
      position: 'topleft',
      // @option zoomInText: String = '+'
      // The text set on the 'zoom in' button.
      zoomInText: '+',
      // @option zoomInTitle: String = 'Zoom in'
      // The title set on the 'zoom in' button.
      zoomInTitle: 'Zoom in',
      // @option zoomOutText: String = '&#x2212;'
      // The text set on the 'zoom out' button.
      zoomOutText: '&#x2212;',
      // @option zoomOutTitle: String = 'Zoom out'
      // The title set on the 'zoom out' button.
      zoomOutTitle: 'Zoom out'
    },
    onAdd: function onAdd(map) {
      var zoomName = 'leaflet-control-zoom',
          container = create$1('div', zoomName + ' leaflet-bar'),
          options = this.options;
      this._zoomInButton = this._createButton(options.zoomInText, options.zoomInTitle, zoomName + '-in', container, this._zoomIn);
      this._zoomOutButton = this._createButton(options.zoomOutText, options.zoomOutTitle, zoomName + '-out', container, this._zoomOut);

      this._updateDisabled();

      map.on('zoomend zoomlevelschange', this._updateDisabled, this);
      return container;
    },
    onRemove: function onRemove(map) {
      map.off('zoomend zoomlevelschange', this._updateDisabled, this);
    },
    disable: function disable() {
      this._disabled = true;

      this._updateDisabled();

      return this;
    },
    enable: function enable() {
      this._disabled = false;

      this._updateDisabled();

      return this;
    },
    _zoomIn: function _zoomIn(e) {
      if (!this._disabled && this._map._zoom < this._map.getMaxZoom()) {
        this._map.zoomIn(this._map.options.zoomDelta * (e.shiftKey ? 3 : 1));
      }
    },
    _zoomOut: function _zoomOut(e) {
      if (!this._disabled && this._map._zoom > this._map.getMinZoom()) {
        this._map.zoomOut(this._map.options.zoomDelta * (e.shiftKey ? 3 : 1));
      }
    },
    _createButton: function _createButton(html, title, className, container, fn) {
      var link = create$1('a', className, container);
      link.innerHTML = html;
      link.href = '#';
      link.title = title;
      /*
       * Will force screen readers like VoiceOver to read this as "Zoom in - button"
       */

      link.setAttribute('role', 'button');
      link.setAttribute('aria-label', title);
      disableClickPropagation(link);
      on(link, 'click', stop);
      on(link, 'click', fn, this);
      on(link, 'click', this._refocusOnMap, this);
      return link;
    },
    _updateDisabled: function _updateDisabled() {
      var map = this._map,
          className = 'leaflet-disabled';
      removeClass(this._zoomInButton, className);
      removeClass(this._zoomOutButton, className);

      if (this._disabled || map._zoom === map.getMinZoom()) {
        addClass(this._zoomOutButton, className);
      }

      if (this._disabled || map._zoom === map.getMaxZoom()) {
        addClass(this._zoomInButton, className);
      }
    }
  }); // @namespace Map
  // @section Control options
  // @option zoomControl: Boolean = true
  // Whether a [zoom control](#control-zoom) is added to the map by default.

  Map.mergeOptions({
    zoomControl: true
  });
  Map.addInitHook(function () {
    if (this.options.zoomControl) {
      this.zoomControl = new Zoom();
      this.addControl(this.zoomControl);
    }
  }); // @namespace Control.Zoom
  // @factory L.control.zoom(options: Control.Zoom options)
  // Creates a zoom control

  var zoom = function zoom(options) {
    return new Zoom(options);
  };
  /*
   * @class Control.Scale
   * @aka L.Control.Scale
   * @inherits Control
   *
   * A simple scale control that shows the scale of the current center of screen in metric (m/km) and imperial (mi/ft) systems. Extends `Control`.
   *
   * @example
   *
   * ```js
   * L.control.scale().addTo(map);
   * ```
   */


  var Scale = Control.extend({
    // @section
    // @aka Control.Scale options
    options: {
      position: 'bottomleft',
      // @option maxWidth: Number = 100
      // Maximum width of the control in pixels. The width is set dynamically to show round values (e.g. 100, 200, 500).
      maxWidth: 100,
      // @option metric: Boolean = True
      // Whether to show the metric scale line (m/km).
      metric: true,
      // @option imperial: Boolean = True
      // Whether to show the imperial scale line (mi/ft).
      imperial: true // @option updateWhenIdle: Boolean = false
      // If `true`, the control is updated on [`moveend`](#map-moveend), otherwise it's always up-to-date (updated on [`move`](#map-move)).

    },
    onAdd: function onAdd(map) {
      var className = 'leaflet-control-scale',
          container = create$1('div', className),
          options = this.options;

      this._addScales(options, className + '-line', container);

      map.on(options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
      map.whenReady(this._update, this);
      return container;
    },
    onRemove: function onRemove(map) {
      map.off(this.options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
    },
    _addScales: function _addScales(options, className, container) {
      if (options.metric) {
        this._mScale = create$1('div', className, container);
      }

      if (options.imperial) {
        this._iScale = create$1('div', className, container);
      }
    },
    _update: function _update() {
      var map = this._map,
          y = map.getSize().y / 2;
      var maxMeters = map.distance(map.containerPointToLatLng([0, y]), map.containerPointToLatLng([this.options.maxWidth, y]));

      this._updateScales(maxMeters);
    },
    _updateScales: function _updateScales(maxMeters) {
      if (this.options.metric && maxMeters) {
        this._updateMetric(maxMeters);
      }

      if (this.options.imperial && maxMeters) {
        this._updateImperial(maxMeters);
      }
    },
    _updateMetric: function _updateMetric(maxMeters) {
      var meters = this._getRoundNum(maxMeters),
          label = meters < 1000 ? meters + ' m' : meters / 1000 + ' km';

      this._updateScale(this._mScale, label, meters / maxMeters);
    },
    _updateImperial: function _updateImperial(maxMeters) {
      var maxFeet = maxMeters * 3.2808399,
          maxMiles,
          miles,
          feet;

      if (maxFeet > 5280) {
        maxMiles = maxFeet / 5280;
        miles = this._getRoundNum(maxMiles);

        this._updateScale(this._iScale, miles + ' mi', miles / maxMiles);
      } else {
        feet = this._getRoundNum(maxFeet);

        this._updateScale(this._iScale, feet + ' ft', feet / maxFeet);
      }
    },
    _updateScale: function _updateScale(scale, text, ratio) {
      scale.style.width = Math.round(this.options.maxWidth * ratio) + 'px';
      scale.innerHTML = text;
    },
    _getRoundNum: function _getRoundNum(num) {
      var pow10 = Math.pow(10, (Math.floor(num) + '').length - 1),
          d = num / pow10;
      d = d >= 10 ? 10 : d >= 5 ? 5 : d >= 3 ? 3 : d >= 2 ? 2 : 1;
      return pow10 * d;
    }
  }); // @factory L.control.scale(options?: Control.Scale options)
  // Creates an scale control with the given options.

  var scale = function scale(options) {
    return new Scale(options);
  };
  /*
   * @class Control.Attribution
   * @aka L.Control.Attribution
   * @inherits Control
   *
   * The attribution control allows you to display attribution data in a small text box on a map. It is put on the map by default unless you set its [`attributionControl` option](#map-attributioncontrol) to `false`, and it fetches attribution texts from layers with the [`getAttribution` method](#layer-getattribution) automatically. Extends Control.
   */


  var Attribution = Control.extend({
    // @section
    // @aka Control.Attribution options
    options: {
      position: 'bottomright',
      // @option prefix: String = 'Leaflet'
      // The HTML text shown before the attributions. Pass `false` to disable.
      prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
    },
    initialize: function initialize(options) {
      setOptions(this, options);
      this._attributions = {};
    },
    onAdd: function onAdd(map) {
      map.attributionControl = this;
      this._container = create$1('div', 'leaflet-control-attribution');
      disableClickPropagation(this._container); // TODO ugly, refactor

      for (var i in map._layers) {
        if (map._layers[i].getAttribution) {
          this.addAttribution(map._layers[i].getAttribution());
        }
      }

      this._update();

      return this._container;
    },
    // @method setPrefix(prefix: String): this
    // Sets the text before the attributions.
    setPrefix: function setPrefix(prefix) {
      this.options.prefix = prefix;

      this._update();

      return this;
    },
    // @method addAttribution(text: String): this
    // Adds an attribution text (e.g. `'Vector data &copy; Mapbox'`).
    addAttribution: function addAttribution(text) {
      if (!text) {
        return this;
      }

      if (!this._attributions[text]) {
        this._attributions[text] = 0;
      }

      this._attributions[text]++;

      this._update();

      return this;
    },
    // @method removeAttribution(text: String): this
    // Removes an attribution text.
    removeAttribution: function removeAttribution(text) {
      if (!text) {
        return this;
      }

      if (this._attributions[text]) {
        this._attributions[text]--;

        this._update();
      }

      return this;
    },
    _update: function _update() {
      if (!this._map) {
        return;
      }

      var attribs = [];

      for (var i in this._attributions) {
        if (this._attributions[i]) {
          attribs.push(i);
        }
      }

      var prefixAndAttribs = [];

      if (this.options.prefix) {
        prefixAndAttribs.push(this.options.prefix);
      }

      if (attribs.length) {
        prefixAndAttribs.push(attribs.join(', '));
      }

      this._container.innerHTML = prefixAndAttribs.join(' | ');
    }
  }); // @namespace Map
  // @section Control options
  // @option attributionControl: Boolean = true
  // Whether a [attribution control](#control-attribution) is added to the map by default.

  Map.mergeOptions({
    attributionControl: true
  });
  Map.addInitHook(function () {
    if (this.options.attributionControl) {
      new Attribution().addTo(this);
    }
  }); // @namespace Control.Attribution
  // @factory L.control.attribution(options: Control.Attribution options)
  // Creates an attribution control.

  var attribution = function attribution(options) {
    return new Attribution(options);
  };

  Control.Layers = Layers;
  Control.Zoom = Zoom;
  Control.Scale = Scale;
  Control.Attribution = Attribution;
  control.layers = layers;
  control.zoom = zoom;
  control.scale = scale;
  control.attribution = attribution;
  /*
  	L.Handler is a base class for handler classes that are used internally to inject
  	interaction features like dragging to classes like Map and Marker.
  */
  // @class Handler
  // @aka L.Handler
  // Abstract class for map interaction handlers

  var Handler = Class.extend({
    initialize: function initialize(map) {
      this._map = map;
    },
    // @method enable(): this
    // Enables the handler
    enable: function enable() {
      if (this._enabled) {
        return this;
      }

      this._enabled = true;
      this.addHooks();
      return this;
    },
    // @method disable(): this
    // Disables the handler
    disable: function disable() {
      if (!this._enabled) {
        return this;
      }

      this._enabled = false;
      this.removeHooks();
      return this;
    },
    // @method enabled(): Boolean
    // Returns `true` if the handler is enabled
    enabled: function enabled() {
      return !!this._enabled;
    } // @section Extension methods
    // Classes inheriting from `Handler` must implement the two following methods:
    // @method addHooks()
    // Called when the handler is enabled, should add event hooks.
    // @method removeHooks()
    // Called when the handler is disabled, should remove the event hooks added previously.

  }); // @section There is static function which can be called without instantiating L.Handler:
  // @function addTo(map: Map, name: String): this
  // Adds a new Handler to the given map with the given name.

  Handler.addTo = function (map, name) {
    map.addHandler(name, this);
    return this;
  };

  var Mixin = {
    Events: Events
  };
  /*
   * @class Draggable
   * @aka L.Draggable
   * @inherits Evented
   *
   * A class for making DOM elements draggable (including touch support).
   * Used internally for map and marker dragging. Only works for elements
   * that were positioned with [`L.DomUtil.setPosition`](#domutil-setposition).
   *
   * @example
   * ```js
   * var draggable = new L.Draggable(elementToDrag);
   * draggable.enable();
   * ```
   */

  var START = touch ? 'touchstart mousedown' : 'mousedown';
  var END = {
    mousedown: 'mouseup',
    touchstart: 'touchend',
    pointerdown: 'touchend',
    MSPointerDown: 'touchend'
  };
  var MOVE = {
    mousedown: 'mousemove',
    touchstart: 'touchmove',
    pointerdown: 'touchmove',
    MSPointerDown: 'touchmove'
  };
  var Draggable = Evented.extend({
    options: {
      // @section
      // @aka Draggable options
      // @option clickTolerance: Number = 3
      // The max number of pixels a user can shift the mouse pointer during a click
      // for it to be considered a valid click (as opposed to a mouse drag).
      clickTolerance: 3
    },
    // @constructor L.Draggable(el: HTMLElement, dragHandle?: HTMLElement, preventOutline?: Boolean, options?: Draggable options)
    // Creates a `Draggable` object for moving `el` when you start dragging the `dragHandle` element (equals `el` itself by default).
    initialize: function initialize(element, dragStartTarget, preventOutline$$1, options) {
      setOptions(this, options);
      this._element = element;
      this._dragStartTarget = dragStartTarget || element;
      this._preventOutline = preventOutline$$1;
    },
    // @method enable()
    // Enables the dragging ability
    enable: function enable() {
      if (this._enabled) {
        return;
      }

      on(this._dragStartTarget, START, this._onDown, this);
      this._enabled = true;
    },
    // @method disable()
    // Disables the dragging ability
    disable: function disable() {
      if (!this._enabled) {
        return;
      } // If we're currently dragging this draggable,
      // disabling it counts as first ending the drag.


      if (Draggable._dragging === this) {
        this.finishDrag();
      }

      off(this._dragStartTarget, START, this._onDown, this);
      this._enabled = false;
      this._moved = false;
    },
    _onDown: function _onDown(e) {
      // Ignore simulated events, since we handle both touch and
      // mouse explicitly; otherwise we risk getting duplicates of
      // touch events, see #4315.
      // Also ignore the event if disabled; this happens in IE11
      // under some circumstances, see #3666.
      if (e._simulated || !this._enabled) {
        return;
      }

      this._moved = false;

      if (hasClass(this._element, 'leaflet-zoom-anim')) {
        return;
      }

      if (Draggable._dragging || e.shiftKey || e.which !== 1 && e.button !== 1 && !e.touches) {
        return;
      }

      Draggable._dragging = this; // Prevent dragging multiple objects at once.

      if (this._preventOutline) {
        preventOutline(this._element);
      }

      disableImageDrag();
      disableTextSelection();

      if (this._moving) {
        return;
      } // @event down: Event
      // Fired when a drag is about to start.


      this.fire('down');
      var first = e.touches ? e.touches[0] : e;
      this._startPoint = new Point(first.clientX, first.clientY);
      on(document, MOVE[e.type], this._onMove, this);
      on(document, END[e.type], this._onUp, this);
    },
    _onMove: function _onMove(e) {
      // Ignore simulated events, since we handle both touch and
      // mouse explicitly; otherwise we risk getting duplicates of
      // touch events, see #4315.
      // Also ignore the event if disabled; this happens in IE11
      // under some circumstances, see #3666.
      if (e._simulated || !this._enabled) {
        return;
      }

      if (e.touches && e.touches.length > 1) {
        this._moved = true;
        return;
      }

      var first = e.touches && e.touches.length === 1 ? e.touches[0] : e,
          newPoint = new Point(first.clientX, first.clientY),
          offset = newPoint.subtract(this._startPoint);

      if (!offset.x && !offset.y) {
        return;
      }

      if (Math.abs(offset.x) + Math.abs(offset.y) < this.options.clickTolerance) {
        return;
      }

      preventDefault(e);

      if (!this._moved) {
        // @event dragstart: Event
        // Fired when a drag starts
        this.fire('dragstart');
        this._moved = true;
        this._startPos = getPosition(this._element).subtract(offset);
        addClass(document.body, 'leaflet-dragging');
        this._lastTarget = e.target || e.srcElement; // IE and Edge do not give the <use> element, so fetch it
        // if necessary

        if (window.SVGElementInstance && this._lastTarget instanceof SVGElementInstance) {
          this._lastTarget = this._lastTarget.correspondingUseElement;
        }

        addClass(this._lastTarget, 'leaflet-drag-target');
      }

      this._newPos = this._startPos.add(offset);
      this._moving = true;
      cancelAnimFrame(this._animRequest);
      this._lastEvent = e;
      this._animRequest = requestAnimFrame(this._updatePosition, this, true);
    },
    _updatePosition: function _updatePosition() {
      var e = {
        originalEvent: this._lastEvent
      }; // @event predrag: Event
      // Fired continuously during dragging *before* each corresponding
      // update of the element's position.

      this.fire('predrag', e);
      setPosition(this._element, this._newPos); // @event drag: Event
      // Fired continuously during dragging.

      this.fire('drag', e);
    },
    _onUp: function _onUp(e) {
      // Ignore simulated events, since we handle both touch and
      // mouse explicitly; otherwise we risk getting duplicates of
      // touch events, see #4315.
      // Also ignore the event if disabled; this happens in IE11
      // under some circumstances, see #3666.
      if (e._simulated || !this._enabled) {
        return;
      }

      this.finishDrag();
    },
    finishDrag: function finishDrag() {
      removeClass(document.body, 'leaflet-dragging');

      if (this._lastTarget) {
        removeClass(this._lastTarget, 'leaflet-drag-target');
        this._lastTarget = null;
      }

      for (var i in MOVE) {
        off(document, MOVE[i], this._onMove, this);
        off(document, END[i], this._onUp, this);
      }

      enableImageDrag();
      enableTextSelection();

      if (this._moved && this._moving) {
        // ensure drag is not fired after dragend
        cancelAnimFrame(this._animRequest); // @event dragend: DragEndEvent
        // Fired when the drag ends.

        this.fire('dragend', {
          distance: this._newPos.distanceTo(this._startPos)
        });
      }

      this._moving = false;
      Draggable._dragging = false;
    }
  });
  /*
   * @namespace LineUtil
   *
   * Various utility functions for polyline points processing, used by Leaflet internally to make polylines lightning-fast.
   */
  // Simplify polyline with vertex reduction and Douglas-Peucker simplification.
  // Improves rendering performance dramatically by lessening the number of points to draw.
  // @function simplify(points: Point[], tolerance: Number): Point[]
  // Dramatically reduces the number of points in a polyline while retaining
  // its shape and returns a new array of simplified points, using the
  // [Douglas-Peucker algorithm](http://en.wikipedia.org/wiki/Douglas-Peucker_algorithm).
  // Used for a huge performance boost when processing/displaying Leaflet polylines for
  // each zoom level and also reducing visual noise. tolerance affects the amount of
  // simplification (lesser value means higher quality but slower and with more points).
  // Also released as a separated micro-library [Simplify.js](http://mourner.github.com/simplify-js/).

  function simplify(points, tolerance) {
    if (!tolerance || !points.length) {
      return points.slice();
    }

    var sqTolerance = tolerance * tolerance; // stage 1: vertex reduction

    points = _reducePoints(points, sqTolerance); // stage 2: Douglas-Peucker simplification

    points = _simplifyDP(points, sqTolerance);
    return points;
  } // @function pointToSegmentDistance(p: Point, p1: Point, p2: Point): Number
  // Returns the distance between point `p` and segment `p1` to `p2`.


  function pointToSegmentDistance(p, p1, p2) {
    return Math.sqrt(_sqClosestPointOnSegment(p, p1, p2, true));
  } // @function closestPointOnSegment(p: Point, p1: Point, p2: Point): Number
  // Returns the closest point from a point `p` on a segment `p1` to `p2`.


  function closestPointOnSegment(p, p1, p2) {
    return _sqClosestPointOnSegment(p, p1, p2);
  } // Douglas-Peucker simplification, see http://en.wikipedia.org/wiki/Douglas-Peucker_algorithm


  function _simplifyDP(points, sqTolerance) {
    var len = points.length,
        ArrayConstructor = (typeof Uint8Array === "undefined" ? "undefined" : _typeof(Uint8Array)) !== undefined + '' ? Uint8Array : Array,
        markers = new ArrayConstructor(len);
    markers[0] = markers[len - 1] = 1;

    _simplifyDPStep(points, markers, sqTolerance, 0, len - 1);

    var i,
        newPoints = [];

    for (i = 0; i < len; i++) {
      if (markers[i]) {
        newPoints.push(points[i]);
      }
    }

    return newPoints;
  }

  function _simplifyDPStep(points, markers, sqTolerance, first, last) {
    var maxSqDist = 0,
        index,
        i,
        sqDist;

    for (i = first + 1; i <= last - 1; i++) {
      sqDist = _sqClosestPointOnSegment(points[i], points[first], points[last], true);

      if (sqDist > maxSqDist) {
        index = i;
        maxSqDist = sqDist;
      }
    }

    if (maxSqDist > sqTolerance) {
      markers[index] = 1;

      _simplifyDPStep(points, markers, sqTolerance, first, index);

      _simplifyDPStep(points, markers, sqTolerance, index, last);
    }
  } // reduce points that are too close to each other to a single point


  function _reducePoints(points, sqTolerance) {
    var reducedPoints = [points[0]];

    for (var i = 1, prev = 0, len = points.length; i < len; i++) {
      if (_sqDist(points[i], points[prev]) > sqTolerance) {
        reducedPoints.push(points[i]);
        prev = i;
      }
    }

    if (prev < len - 1) {
      reducedPoints.push(points[len - 1]);
    }

    return reducedPoints;
  }

  var _lastCode; // @function clipSegment(a: Point, b: Point, bounds: Bounds, useLastCode?: Boolean, round?: Boolean): Point[]|Boolean
  // Clips the segment a to b by rectangular bounds with the
  // [Cohen-Sutherland algorithm](https://en.wikipedia.org/wiki/Cohen%E2%80%93Sutherland_algorithm)
  // (modifying the segment points directly!). Used by Leaflet to only show polyline
  // points that are on the screen or near, increasing performance.


  function clipSegment(a, b, bounds, useLastCode, round) {
    var codeA = useLastCode ? _lastCode : _getBitCode(a, bounds),
        codeB = _getBitCode(b, bounds),
        codeOut,
        p,
        newCode; // save 2nd code to avoid calculating it on the next segment


    _lastCode = codeB;

    while (true) {
      // if a,b is inside the clip window (trivial accept)
      if (!(codeA | codeB)) {
        return [a, b];
      } // if a,b is outside the clip window (trivial reject)


      if (codeA & codeB) {
        return false;
      } // other cases


      codeOut = codeA || codeB;
      p = _getEdgeIntersection(a, b, codeOut, bounds, round);
      newCode = _getBitCode(p, bounds);

      if (codeOut === codeA) {
        a = p;
        codeA = newCode;
      } else {
        b = p;
        codeB = newCode;
      }
    }
  }

  function _getEdgeIntersection(a, b, code, bounds, round) {
    var dx = b.x - a.x,
        dy = b.y - a.y,
        min = bounds.min,
        max = bounds.max,
        x,
        y;

    if (code & 8) {
      // top
      x = a.x + dx * (max.y - a.y) / dy;
      y = max.y;
    } else if (code & 4) {
      // bottom
      x = a.x + dx * (min.y - a.y) / dy;
      y = min.y;
    } else if (code & 2) {
      // right
      x = max.x;
      y = a.y + dy * (max.x - a.x) / dx;
    } else if (code & 1) {
      // left
      x = min.x;
      y = a.y + dy * (min.x - a.x) / dx;
    }

    return new Point(x, y, round);
  }

  function _getBitCode(p, bounds) {
    var code = 0;

    if (p.x < bounds.min.x) {
      // left
      code |= 1;
    } else if (p.x > bounds.max.x) {
      // right
      code |= 2;
    }

    if (p.y < bounds.min.y) {
      // bottom
      code |= 4;
    } else if (p.y > bounds.max.y) {
      // top
      code |= 8;
    }

    return code;
  } // square distance (to avoid unnecessary Math.sqrt calls)


  function _sqDist(p1, p2) {
    var dx = p2.x - p1.x,
        dy = p2.y - p1.y;
    return dx * dx + dy * dy;
  } // return closest point on segment or distance to that point


  function _sqClosestPointOnSegment(p, p1, p2, sqDist) {
    var x = p1.x,
        y = p1.y,
        dx = p2.x - x,
        dy = p2.y - y,
        dot = dx * dx + dy * dy,
        t;

    if (dot > 0) {
      t = ((p.x - x) * dx + (p.y - y) * dy) / dot;

      if (t > 1) {
        x = p2.x;
        y = p2.y;
      } else if (t > 0) {
        x += dx * t;
        y += dy * t;
      }
    }

    dx = p.x - x;
    dy = p.y - y;
    return sqDist ? dx * dx + dy * dy : new Point(x, y);
  } // @function isFlat(latlngs: LatLng[]): Boolean
  // Returns true if `latlngs` is a flat array, false is nested.


  function isFlat(latlngs) {
    return !isArray(latlngs[0]) || _typeof(latlngs[0][0]) !== 'object' && typeof latlngs[0][0] !== 'undefined';
  }

  function _flat(latlngs) {
    console.warn('Deprecated use of _flat, please use L.LineUtil.isFlat instead.');
    return isFlat(latlngs);
  }

  var LineUtil = (Object.freeze || Object)({
    simplify: simplify,
    pointToSegmentDistance: pointToSegmentDistance,
    closestPointOnSegment: closestPointOnSegment,
    clipSegment: clipSegment,
    _getEdgeIntersection: _getEdgeIntersection,
    _getBitCode: _getBitCode,
    _sqClosestPointOnSegment: _sqClosestPointOnSegment,
    isFlat: isFlat,
    _flat: _flat
  });
  /*
   * @namespace PolyUtil
   * Various utility functions for polygon geometries.
   */

  /* @function clipPolygon(points: Point[], bounds: Bounds, round?: Boolean): Point[]
   * Clips the polygon geometry defined by the given `points` by the given bounds (using the [Sutherland-Hodgman algorithm](https://en.wikipedia.org/wiki/Sutherland%E2%80%93Hodgman_algorithm)).
   * Used by Leaflet to only show polygon points that are on the screen or near, increasing
   * performance. Note that polygon points needs different algorithm for clipping
   * than polyline, so there's a separate method for it.
   */

  function clipPolygon(points, bounds, round) {
    var clippedPoints,
        edges = [1, 4, 2, 8],
        i,
        j,
        k,
        a,
        b,
        len,
        edge,
        p;

    for (i = 0, len = points.length; i < len; i++) {
      points[i]._code = _getBitCode(points[i], bounds);
    } // for each edge (left, bottom, right, top)


    for (k = 0; k < 4; k++) {
      edge = edges[k];
      clippedPoints = [];

      for (i = 0, len = points.length, j = len - 1; i < len; j = i++) {
        a = points[i];
        b = points[j]; // if a is inside the clip window

        if (!(a._code & edge)) {
          // if b is outside the clip window (a->b goes out of screen)
          if (b._code & edge) {
            p = _getEdgeIntersection(b, a, edge, bounds, round);
            p._code = _getBitCode(p, bounds);
            clippedPoints.push(p);
          }

          clippedPoints.push(a); // else if b is inside the clip window (a->b enters the screen)
        } else if (!(b._code & edge)) {
          p = _getEdgeIntersection(b, a, edge, bounds, round);
          p._code = _getBitCode(p, bounds);
          clippedPoints.push(p);
        }
      }

      points = clippedPoints;
    }

    return points;
  }

  var PolyUtil = (Object.freeze || Object)({
    clipPolygon: clipPolygon
  });
  /*
   * @namespace Projection
   * @section
   * Leaflet comes with a set of already defined Projections out of the box:
   *
   * @projection L.Projection.LonLat
   *
   * Equirectangular, or Plate Carree projection — the most simple projection,
   * mostly used by GIS enthusiasts. Directly maps `x` as longitude, and `y` as
   * latitude. Also suitable for flat worlds, e.g. game maps. Used by the
   * `EPSG:4326` and `Simple` CRS.
   */

  var LonLat = {
    project: function project(latlng) {
      return new Point(latlng.lng, latlng.lat);
    },
    unproject: function unproject(point) {
      return new LatLng(point.y, point.x);
    },
    bounds: new Bounds([-180, -90], [180, 90])
  };
  /*
   * @namespace Projection
   * @projection L.Projection.Mercator
   *
   * Elliptical Mercator projection — more complex than Spherical Mercator. Takes into account that Earth is a geoid, not a perfect sphere. Used by the EPSG:3395 CRS.
   */

  var Mercator = {
    R: 6378137,
    R_MINOR: 6356752.314245179,
    bounds: new Bounds([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
    project: function project(latlng) {
      var d = Math.PI / 180,
          r = this.R,
          y = latlng.lat * d,
          tmp = this.R_MINOR / r,
          e = Math.sqrt(1 - tmp * tmp),
          con = e * Math.sin(y);
      var ts = Math.tan(Math.PI / 4 - y / 2) / Math.pow((1 - con) / (1 + con), e / 2);
      y = -r * Math.log(Math.max(ts, 1E-10));
      return new Point(latlng.lng * d * r, y);
    },
    unproject: function unproject(point) {
      var d = 180 / Math.PI,
          r = this.R,
          tmp = this.R_MINOR / r,
          e = Math.sqrt(1 - tmp * tmp),
          ts = Math.exp(-point.y / r),
          phi = Math.PI / 2 - 2 * Math.atan(ts);

      for (var i = 0, dphi = 0.1, con; i < 15 && Math.abs(dphi) > 1e-7; i++) {
        con = e * Math.sin(phi);
        con = Math.pow((1 - con) / (1 + con), e / 2);
        dphi = Math.PI / 2 - 2 * Math.atan(ts * con) - phi;
        phi += dphi;
      }

      return new LatLng(phi * d, point.x * d / r);
    }
  };
  /*
   * @class Projection
  
   * An object with methods for projecting geographical coordinates of the world onto
   * a flat surface (and back). See [Map projection](http://en.wikipedia.org/wiki/Map_projection).
  
   * @property bounds: Bounds
   * The bounds (specified in CRS units) where the projection is valid
  
   * @method project(latlng: LatLng): Point
   * Projects geographical coordinates into a 2D point.
   * Only accepts actual `L.LatLng` instances, not arrays.
  
   * @method unproject(point: Point): LatLng
   * The inverse of `project`. Projects a 2D point into a geographical location.
   * Only accepts actual `L.Point` instances, not arrays.
  
   * Note that the projection instances do not inherit from Leafet's `Class` object,
   * and can't be instantiated. Also, new classes can't inherit from them,
   * and methods can't be added to them with the `include` function.
  
   */

  var index = (Object.freeze || Object)({
    LonLat: LonLat,
    Mercator: Mercator,
    SphericalMercator: SphericalMercator
  });
  /*
   * @namespace CRS
   * @crs L.CRS.EPSG3395
   *
   * Rarely used by some commercial tile providers. Uses Elliptical Mercator projection.
   */

  var EPSG3395 = extend({}, Earth, {
    code: 'EPSG:3395',
    projection: Mercator,
    transformation: function () {
      var scale = 0.5 / (Math.PI * Mercator.R);
      return toTransformation(scale, 0.5, -scale, 0.5);
    }()
  });
  /*
   * @namespace CRS
   * @crs L.CRS.EPSG4326
   *
   * A common CRS among GIS enthusiasts. Uses simple Equirectangular projection.
   *
   * Leaflet 1.0.x complies with the [TMS coordinate scheme for EPSG:4326](https://wiki.osgeo.org/wiki/Tile_Map_Service_Specification#global-geodetic),
   * which is a breaking change from 0.7.x behaviour.  If you are using a `TileLayer`
   * with this CRS, ensure that there are two 256x256 pixel tiles covering the
   * whole earth at zoom level zero, and that the tile coordinate origin is (-180,+90),
   * or (-180,-90) for `TileLayer`s with [the `tms` option](#tilelayer-tms) set.
   */

  var EPSG4326 = extend({}, Earth, {
    code: 'EPSG:4326',
    projection: LonLat,
    transformation: toTransformation(1 / 180, 1, -1 / 180, 0.5)
  });
  /*
   * @namespace CRS
   * @crs L.CRS.Simple
   *
   * A simple CRS that maps longitude and latitude into `x` and `y` directly.
   * May be used for maps of flat surfaces (e.g. game maps). Note that the `y`
   * axis should still be inverted (going from bottom to top). `distance()` returns
   * simple euclidean distance.
   */

  var Simple = extend({}, CRS, {
    projection: LonLat,
    transformation: toTransformation(1, 0, -1, 0),
    scale: function scale(zoom) {
      return Math.pow(2, zoom);
    },
    zoom: function zoom(scale) {
      return Math.log(scale) / Math.LN2;
    },
    distance: function distance(latlng1, latlng2) {
      var dx = latlng2.lng - latlng1.lng,
          dy = latlng2.lat - latlng1.lat;
      return Math.sqrt(dx * dx + dy * dy);
    },
    infinite: true
  });
  CRS.Earth = Earth;
  CRS.EPSG3395 = EPSG3395;
  CRS.EPSG3857 = EPSG3857;
  CRS.EPSG900913 = EPSG900913;
  CRS.EPSG4326 = EPSG4326;
  CRS.Simple = Simple;
  /*
   * @class Layer
   * @inherits Evented
   * @aka L.Layer
   * @aka ILayer
   *
   * A set of methods from the Layer base class that all Leaflet layers use.
   * Inherits all methods, options and events from `L.Evented`.
   *
   * @example
   *
   * ```js
   * var layer = L.Marker(latlng).addTo(map);
   * layer.addTo(map);
   * layer.remove();
   * ```
   *
   * @event add: Event
   * Fired after the layer is added to a map
   *
   * @event remove: Event
   * Fired after the layer is removed from a map
   */

  var Layer = Evented.extend({
    // Classes extending `L.Layer` will inherit the following options:
    options: {
      // @option pane: String = 'overlayPane'
      // By default the layer will be added to the map's [overlay pane](#map-overlaypane). Overriding this option will cause the layer to be placed on another pane by default.
      pane: 'overlayPane',
      // @option attribution: String = null
      // String to be shown in the attribution control, describes the layer data, e.g. "© Mapbox".
      attribution: null,
      bubblingMouseEvents: true
    },

    /* @section
     * Classes extending `L.Layer` will inherit the following methods:
     *
     * @method addTo(map: Map|LayerGroup): this
     * Adds the layer to the given map or layer group.
     */
    addTo: function addTo(map) {
      map.addLayer(this);
      return this;
    },
    // @method remove: this
    // Removes the layer from the map it is currently active on.
    remove: function remove() {
      return this.removeFrom(this._map || this._mapToAdd);
    },
    // @method removeFrom(map: Map): this
    // Removes the layer from the given map
    removeFrom: function removeFrom(obj) {
      if (obj) {
        obj.removeLayer(this);
      }

      return this;
    },
    // @method getPane(name? : String): HTMLElement
    // Returns the `HTMLElement` representing the named pane on the map. If `name` is omitted, returns the pane for this layer.
    getPane: function getPane(name) {
      return this._map.getPane(name ? this.options[name] || name : this.options.pane);
    },
    addInteractiveTarget: function addInteractiveTarget(targetEl) {
      this._map._targets[stamp(targetEl)] = this;
      return this;
    },
    removeInteractiveTarget: function removeInteractiveTarget(targetEl) {
      delete this._map._targets[stamp(targetEl)];
      return this;
    },
    // @method getAttribution: String
    // Used by the `attribution control`, returns the [attribution option](#gridlayer-attribution).
    getAttribution: function getAttribution() {
      return this.options.attribution;
    },
    _layerAdd: function _layerAdd(e) {
      var map = e.target; // check in case layer gets added and then removed before the map is ready

      if (!map.hasLayer(this)) {
        return;
      }

      this._map = map;
      this._zoomAnimated = map._zoomAnimated;

      if (this.getEvents) {
        var events = this.getEvents();
        map.on(events, this);
        this.once('remove', function () {
          map.off(events, this);
        }, this);
      }

      this.onAdd(map);

      if (this.getAttribution && map.attributionControl) {
        map.attributionControl.addAttribution(this.getAttribution());
      }

      this.fire('add');
      map.fire('layeradd', {
        layer: this
      });
    }
  });
  /* @section Extension methods
   * @uninheritable
   *
   * Every layer should extend from `L.Layer` and (re-)implement the following methods.
   *
   * @method onAdd(map: Map): this
   * Should contain code that creates DOM elements for the layer, adds them to `map panes` where they should belong and puts listeners on relevant map events. Called on [`map.addLayer(layer)`](#map-addlayer).
   *
   * @method onRemove(map: Map): this
   * Should contain all clean up code that removes the layer's elements from the DOM and removes listeners previously added in [`onAdd`](#layer-onadd). Called on [`map.removeLayer(layer)`](#map-removelayer).
   *
   * @method getEvents(): Object
   * This optional method should return an object like `{ viewreset: this._reset }` for [`addEventListener`](#evented-addeventlistener). The event handlers in this object will be automatically added and removed from the map with your layer.
   *
   * @method getAttribution(): String
   * This optional method should return a string containing HTML to be shown on the `Attribution control` whenever the layer is visible.
   *
   * @method beforeAdd(map: Map): this
   * Optional method. Called on [`map.addLayer(layer)`](#map-addlayer), before the layer is added to the map, before events are initialized, without waiting until the map is in a usable state. Use for early initialization only.
   */

  /* @namespace Map
   * @section Layer events
   *
   * @event layeradd: LayerEvent
   * Fired when a new layer is added to the map.
   *
   * @event layerremove: LayerEvent
   * Fired when some layer is removed from the map
   *
   * @section Methods for Layers and Controls
   */

  Map.include({
    // @method addLayer(layer: Layer): this
    // Adds the given layer to the map
    addLayer: function addLayer(layer) {
      if (!layer._layerAdd) {
        throw new Error('The provided object is not a Layer.');
      }

      var id = stamp(layer);

      if (this._layers[id]) {
        return this;
      }

      this._layers[id] = layer;
      layer._mapToAdd = this;

      if (layer.beforeAdd) {
        layer.beforeAdd(this);
      }

      this.whenReady(layer._layerAdd, layer);
      return this;
    },
    // @method removeLayer(layer: Layer): this
    // Removes the given layer from the map.
    removeLayer: function removeLayer(layer) {
      var id = stamp(layer);

      if (!this._layers[id]) {
        return this;
      }

      if (this._loaded) {
        layer.onRemove(this);
      }

      if (layer.getAttribution && this.attributionControl) {
        this.attributionControl.removeAttribution(layer.getAttribution());
      }

      delete this._layers[id];

      if (this._loaded) {
        this.fire('layerremove', {
          layer: layer
        });
        layer.fire('remove');
      }

      layer._map = layer._mapToAdd = null;
      return this;
    },
    // @method hasLayer(layer: Layer): Boolean
    // Returns `true` if the given layer is currently added to the map
    hasLayer: function hasLayer(layer) {
      return !!layer && stamp(layer) in this._layers;
    },

    /* @method eachLayer(fn: Function, context?: Object): this
     * Iterates over the layers of the map, optionally specifying context of the iterator function.
     * ```
     * map.eachLayer(function(layer){
     *     layer.bindPopup('Hello');
     * });
     * ```
     */
    eachLayer: function eachLayer(method, context) {
      for (var i in this._layers) {
        method.call(context, this._layers[i]);
      }

      return this;
    },
    _addLayers: function _addLayers(layers) {
      layers = layers ? isArray(layers) ? layers : [layers] : [];

      for (var i = 0, len = layers.length; i < len; i++) {
        this.addLayer(layers[i]);
      }
    },
    _addZoomLimit: function _addZoomLimit(layer) {
      if (isNaN(layer.options.maxZoom) || !isNaN(layer.options.minZoom)) {
        this._zoomBoundLayers[stamp(layer)] = layer;

        this._updateZoomLevels();
      }
    },
    _removeZoomLimit: function _removeZoomLimit(layer) {
      var id = stamp(layer);

      if (this._zoomBoundLayers[id]) {
        delete this._zoomBoundLayers[id];

        this._updateZoomLevels();
      }
    },
    _updateZoomLevels: function _updateZoomLevels() {
      var minZoom = Infinity,
          maxZoom = -Infinity,
          oldZoomSpan = this._getZoomSpan();

      for (var i in this._zoomBoundLayers) {
        var options = this._zoomBoundLayers[i].options;
        minZoom = options.minZoom === undefined ? minZoom : Math.min(minZoom, options.minZoom);
        maxZoom = options.maxZoom === undefined ? maxZoom : Math.max(maxZoom, options.maxZoom);
      }

      this._layersMaxZoom = maxZoom === -Infinity ? undefined : maxZoom;
      this._layersMinZoom = minZoom === Infinity ? undefined : minZoom; // @section Map state change events
      // @event zoomlevelschange: Event
      // Fired when the number of zoomlevels on the map is changed due
      // to adding or removing a layer.

      if (oldZoomSpan !== this._getZoomSpan()) {
        this.fire('zoomlevelschange');
      }

      if (this.options.maxZoom === undefined && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom) {
        this.setZoom(this._layersMaxZoom);
      }

      if (this.options.minZoom === undefined && this._layersMinZoom && this.getZoom() < this._layersMinZoom) {
        this.setZoom(this._layersMinZoom);
      }
    }
  });
  /*
   * @class LayerGroup
   * @aka L.LayerGroup
   * @inherits Layer
   *
   * Used to group several layers and handle them as one. If you add it to the map,
   * any layers added or removed from the group will be added/removed on the map as
   * well. Extends `Layer`.
   *
   * @example
   *
   * ```js
   * L.layerGroup([marker1, marker2])
   * 	.addLayer(polyline)
   * 	.addTo(map);
   * ```
   */

  var LayerGroup = Layer.extend({
    initialize: function initialize(layers, options) {
      setOptions(this, options);
      this._layers = {};
      var i, len;

      if (layers) {
        for (i = 0, len = layers.length; i < len; i++) {
          this.addLayer(layers[i]);
        }
      }
    },
    // @method addLayer(layer: Layer): this
    // Adds the given layer to the group.
    addLayer: function addLayer(layer) {
      var id = this.getLayerId(layer);
      this._layers[id] = layer;

      if (this._map) {
        this._map.addLayer(layer);
      }

      return this;
    },
    // @method removeLayer(layer: Layer): this
    // Removes the given layer from the group.
    // @alternative
    // @method removeLayer(id: Number): this
    // Removes the layer with the given internal ID from the group.
    removeLayer: function removeLayer(layer) {
      var id = layer in this._layers ? layer : this.getLayerId(layer);

      if (this._map && this._layers[id]) {
        this._map.removeLayer(this._layers[id]);
      }

      delete this._layers[id];
      return this;
    },
    // @method hasLayer(layer: Layer): Boolean
    // Returns `true` if the given layer is currently added to the group.
    // @alternative
    // @method hasLayer(id: Number): Boolean
    // Returns `true` if the given internal ID is currently added to the group.
    hasLayer: function hasLayer(layer) {
      return !!layer && (layer in this._layers || this.getLayerId(layer) in this._layers);
    },
    // @method clearLayers(): this
    // Removes all the layers from the group.
    clearLayers: function clearLayers() {
      return this.eachLayer(this.removeLayer, this);
    },
    // @method invoke(methodName: String, …): this
    // Calls `methodName` on every layer contained in this group, passing any
    // additional parameters. Has no effect if the layers contained do not
    // implement `methodName`.
    invoke: function invoke(methodName) {
      var args = Array.prototype.slice.call(arguments, 1),
          i,
          layer;

      for (i in this._layers) {
        layer = this._layers[i];

        if (layer[methodName]) {
          layer[methodName].apply(layer, args);
        }
      }

      return this;
    },
    onAdd: function onAdd(map) {
      this.eachLayer(map.addLayer, map);
    },
    onRemove: function onRemove(map) {
      this.eachLayer(map.removeLayer, map);
    },
    // @method eachLayer(fn: Function, context?: Object): this
    // Iterates over the layers of the group, optionally specifying context of the iterator function.
    // ```js
    // group.eachLayer(function (layer) {
    // 	layer.bindPopup('Hello');
    // });
    // ```
    eachLayer: function eachLayer(method, context) {
      for (var i in this._layers) {
        method.call(context, this._layers[i]);
      }

      return this;
    },
    // @method getLayer(id: Number): Layer
    // Returns the layer with the given internal ID.
    getLayer: function getLayer(id) {
      return this._layers[id];
    },
    // @method getLayers(): Layer[]
    // Returns an array of all the layers added to the group.
    getLayers: function getLayers() {
      var layers = [];
      this.eachLayer(layers.push, layers);
      return layers;
    },
    // @method setZIndex(zIndex: Number): this
    // Calls `setZIndex` on every layer contained in this group, passing the z-index.
    setZIndex: function setZIndex(zIndex) {
      return this.invoke('setZIndex', zIndex);
    },
    // @method getLayerId(layer: Layer): Number
    // Returns the internal ID for a layer
    getLayerId: function getLayerId(layer) {
      return stamp(layer);
    }
  }); // @factory L.layerGroup(layers?: Layer[], options?: Object)
  // Create a layer group, optionally given an initial set of layers and an `options` object.

  var layerGroup = function layerGroup(layers, options) {
    return new LayerGroup(layers, options);
  };
  /*
   * @class FeatureGroup
   * @aka L.FeatureGroup
   * @inherits LayerGroup
   *
   * Extended `LayerGroup` that makes it easier to do the same thing to all its member layers:
   *  * [`bindPopup`](#layer-bindpopup) binds a popup to all of the layers at once (likewise with [`bindTooltip`](#layer-bindtooltip))
   *  * Events are propagated to the `FeatureGroup`, so if the group has an event
   * handler, it will handle events from any of the layers. This includes mouse events
   * and custom events.
   *  * Has `layeradd` and `layerremove` events
   *
   * @example
   *
   * ```js
   * L.featureGroup([marker1, marker2, polyline])
   * 	.bindPopup('Hello world!')
   * 	.on('click', function() { alert('Clicked on a member of the group!'); })
   * 	.addTo(map);
   * ```
   */


  var FeatureGroup = LayerGroup.extend({
    addLayer: function addLayer(layer) {
      if (this.hasLayer(layer)) {
        return this;
      }

      layer.addEventParent(this);
      LayerGroup.prototype.addLayer.call(this, layer); // @event layeradd: LayerEvent
      // Fired when a layer is added to this `FeatureGroup`

      return this.fire('layeradd', {
        layer: layer
      });
    },
    removeLayer: function removeLayer(layer) {
      if (!this.hasLayer(layer)) {
        return this;
      }

      if (layer in this._layers) {
        layer = this._layers[layer];
      }

      layer.removeEventParent(this);
      LayerGroup.prototype.removeLayer.call(this, layer); // @event layerremove: LayerEvent
      // Fired when a layer is removed from this `FeatureGroup`

      return this.fire('layerremove', {
        layer: layer
      });
    },
    // @method setStyle(style: Path options): this
    // Sets the given path options to each layer of the group that has a `setStyle` method.
    setStyle: function setStyle(style) {
      return this.invoke('setStyle', style);
    },
    // @method bringToFront(): this
    // Brings the layer group to the top of all other layers
    bringToFront: function bringToFront() {
      return this.invoke('bringToFront');
    },
    // @method bringToBack(): this
    // Brings the layer group to the back of all other layers
    bringToBack: function bringToBack() {
      return this.invoke('bringToBack');
    },
    // @method getBounds(): LatLngBounds
    // Returns the LatLngBounds of the Feature Group (created from bounds and coordinates of its children).
    getBounds: function getBounds() {
      var bounds = new LatLngBounds();

      for (var id in this._layers) {
        var layer = this._layers[id];
        bounds.extend(layer.getBounds ? layer.getBounds() : layer.getLatLng());
      }

      return bounds;
    }
  }); // @factory L.featureGroup(layers: Layer[])
  // Create a feature group, optionally given an initial set of layers.

  var featureGroup = function featureGroup(layers) {
    return new FeatureGroup(layers);
  };
  /*
   * @class Icon
   * @aka L.Icon
   *
   * Represents an icon to provide when creating a marker.
   *
   * @example
   *
   * ```js
   * var myIcon = L.icon({
   *     iconUrl: 'my-icon.png',
   *     iconRetinaUrl: 'my-icon@2x.png',
   *     iconSize: [38, 95],
   *     iconAnchor: [22, 94],
   *     popupAnchor: [-3, -76],
   *     shadowUrl: 'my-icon-shadow.png',
   *     shadowRetinaUrl: 'my-icon-shadow@2x.png',
   *     shadowSize: [68, 95],
   *     shadowAnchor: [22, 94]
   * });
   *
   * L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);
   * ```
   *
   * `L.Icon.Default` extends `L.Icon` and is the blue icon Leaflet uses for markers by default.
   *
   */


  var Icon = Class.extend({
    /* @section
     * @aka Icon options
     *
     * @option iconUrl: String = null
     * **(required)** The URL to the icon image (absolute or relative to your script path).
     *
     * @option iconRetinaUrl: String = null
     * The URL to a retina sized version of the icon image (absolute or relative to your
     * script path). Used for Retina screen devices.
     *
     * @option iconSize: Point = null
     * Size of the icon image in pixels.
     *
     * @option iconAnchor: Point = null
     * The coordinates of the "tip" of the icon (relative to its top left corner). The icon
     * will be aligned so that this point is at the marker's geographical location. Centered
     * by default if size is specified, also can be set in CSS with negative margins.
     *
     * @option popupAnchor: Point = [0, 0]
     * The coordinates of the point from which popups will "open", relative to the icon anchor.
     *
     * @option tooltipAnchor: Point = [0, 0]
     * The coordinates of the point from which tooltips will "open", relative to the icon anchor.
     *
     * @option shadowUrl: String = null
     * The URL to the icon shadow image. If not specified, no shadow image will be created.
     *
     * @option shadowRetinaUrl: String = null
     *
     * @option shadowSize: Point = null
     * Size of the shadow image in pixels.
     *
     * @option shadowAnchor: Point = null
     * The coordinates of the "tip" of the shadow (relative to its top left corner) (the same
     * as iconAnchor if not specified).
     *
     * @option className: String = ''
     * A custom class name to assign to both icon and shadow images. Empty by default.
     */
    options: {
      popupAnchor: [0, 0],
      tooltipAnchor: [0, 0]
    },
    initialize: function initialize(options) {
      setOptions(this, options);
    },
    // @method createIcon(oldIcon?: HTMLElement): HTMLElement
    // Called internally when the icon has to be shown, returns a `<img>` HTML element
    // styled according to the options.
    createIcon: function createIcon(oldIcon) {
      return this._createIcon('icon', oldIcon);
    },
    // @method createShadow(oldIcon?: HTMLElement): HTMLElement
    // As `createIcon`, but for the shadow beneath it.
    createShadow: function createShadow(oldIcon) {
      return this._createIcon('shadow', oldIcon);
    },
    _createIcon: function _createIcon(name, oldIcon) {
      var src = this._getIconUrl(name);

      if (!src) {
        if (name === 'icon') {
          throw new Error('iconUrl not set in Icon options (see the docs).');
        }

        return null;
      }

      var img = this._createImg(src, oldIcon && oldIcon.tagName === 'IMG' ? oldIcon : null);

      this._setIconStyles(img, name);

      return img;
    },
    _setIconStyles: function _setIconStyles(img, name) {
      var options = this.options;
      var sizeOption = options[name + 'Size'];

      if (typeof sizeOption === 'number') {
        sizeOption = [sizeOption, sizeOption];
      }

      var size = toPoint(sizeOption),
          anchor = toPoint(name === 'shadow' && options.shadowAnchor || options.iconAnchor || size && size.divideBy(2, true));
      img.className = 'leaflet-marker-' + name + ' ' + (options.className || '');

      if (anchor) {
        img.style.marginLeft = -anchor.x + 'px';
        img.style.marginTop = -anchor.y + 'px';
      }

      if (size) {
        img.style.width = size.x + 'px';
        img.style.height = size.y + 'px';
      }
    },
    _createImg: function _createImg(src, el) {
      el = el || document.createElement('img');
      el.src = src;
      return el;
    },
    _getIconUrl: function _getIconUrl(name) {
      return retina && this.options[name + 'RetinaUrl'] || this.options[name + 'Url'];
    }
  }); // @factory L.icon(options: Icon options)
  // Creates an icon instance with the given options.

  function icon(options) {
    return new Icon(options);
  }
  /*
   * @miniclass Icon.Default (Icon)
   * @aka L.Icon.Default
   * @section
   *
   * A trivial subclass of `Icon`, represents the icon to use in `Marker`s when
   * no icon is specified. Points to the blue marker image distributed with Leaflet
   * releases.
   *
   * In order to customize the default icon, just change the properties of `L.Icon.Default.prototype.options`
   * (which is a set of `Icon options`).
   *
   * If you want to _completely_ replace the default icon, override the
   * `L.Marker.prototype.options.icon` with your own icon instead.
   */


  var IconDefault = Icon.extend({
    options: {
      iconUrl: 'marker-icon.png',
      iconRetinaUrl: 'marker-icon-2x.png',
      shadowUrl: 'marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    },
    _getIconUrl: function _getIconUrl(name) {
      if (!IconDefault.imagePath) {
        // Deprecated, backwards-compatibility only
        IconDefault.imagePath = this._detectIconPath();
      } // @option imagePath: String
      // `Icon.Default` will try to auto-detect the location of the
      // blue icon images. If you are placing these images in a non-standard
      // way, set this option to point to the right path.


      return (this.options.imagePath || IconDefault.imagePath) + Icon.prototype._getIconUrl.call(this, name);
    },
    _detectIconPath: function _detectIconPath() {
      var el = create$1('div', 'leaflet-default-icon-path', document.body);
      var path = getStyle(el, 'background-image') || getStyle(el, 'backgroundImage'); // IE8

      document.body.removeChild(el);

      if (path === null || path.indexOf('url') !== 0) {
        path = '';
      } else {
        path = path.replace(/^url\(["']?/, '').replace(/marker-icon\.png["']?\)$/, '');
      }

      return path;
    }
  });
  /*
   * L.Handler.MarkerDrag is used internally by L.Marker to make the markers draggable.
   */

  /* @namespace Marker
   * @section Interaction handlers
   *
   * Interaction handlers are properties of a marker instance that allow you to control interaction behavior in runtime, enabling or disabling certain features such as dragging (see `Handler` methods). Example:
   *
   * ```js
   * marker.dragging.disable();
   * ```
   *
   * @property dragging: Handler
   * Marker dragging handler (by both mouse and touch). Only valid when the marker is on the map (Otherwise set [`marker.options.draggable`](#marker-draggable)).
   */

  var MarkerDrag = Handler.extend({
    initialize: function initialize(marker) {
      this._marker = marker;
    },
    addHooks: function addHooks() {
      var icon = this._marker._icon;

      if (!this._draggable) {
        this._draggable = new Draggable(icon, icon, true);
      }

      this._draggable.on({
        dragstart: this._onDragStart,
        predrag: this._onPreDrag,
        drag: this._onDrag,
        dragend: this._onDragEnd
      }, this).enable();

      addClass(icon, 'leaflet-marker-draggable');
    },
    removeHooks: function removeHooks() {
      this._draggable.off({
        dragstart: this._onDragStart,
        predrag: this._onPreDrag,
        drag: this._onDrag,
        dragend: this._onDragEnd
      }, this).disable();

      if (this._marker._icon) {
        removeClass(this._marker._icon, 'leaflet-marker-draggable');
      }
    },
    moved: function moved() {
      return this._draggable && this._draggable._moved;
    },
    _adjustPan: function _adjustPan(e) {
      var marker = this._marker,
          map = marker._map,
          speed = this._marker.options.autoPanSpeed,
          padding = this._marker.options.autoPanPadding,
          iconPos = L.DomUtil.getPosition(marker._icon),
          bounds = map.getPixelBounds(),
          origin = map.getPixelOrigin();
      var panBounds = toBounds(bounds.min._subtract(origin).add(padding), bounds.max._subtract(origin).subtract(padding));

      if (!panBounds.contains(iconPos)) {
        // Compute incremental movement
        var movement = toPoint((Math.max(panBounds.max.x, iconPos.x) - panBounds.max.x) / (bounds.max.x - panBounds.max.x) - (Math.min(panBounds.min.x, iconPos.x) - panBounds.min.x) / (bounds.min.x - panBounds.min.x), (Math.max(panBounds.max.y, iconPos.y) - panBounds.max.y) / (bounds.max.y - panBounds.max.y) - (Math.min(panBounds.min.y, iconPos.y) - panBounds.min.y) / (bounds.min.y - panBounds.min.y)).multiplyBy(speed);
        map.panBy(movement, {
          animate: false
        });

        this._draggable._newPos._add(movement);

        this._draggable._startPos._add(movement);

        L.DomUtil.setPosition(marker._icon, this._draggable._newPos);

        this._onDrag(e);

        this._panRequest = requestAnimFrame(this._adjustPan.bind(this, e));
      }
    },
    _onDragStart: function _onDragStart() {
      // @section Dragging events
      // @event dragstart: Event
      // Fired when the user starts dragging the marker.
      // @event movestart: Event
      // Fired when the marker starts moving (because of dragging).
      this._oldLatLng = this._marker.getLatLng();

      this._marker.closePopup().fire('movestart').fire('dragstart');
    },
    _onPreDrag: function _onPreDrag(e) {
      if (this._marker.options.autoPan) {
        cancelAnimFrame(this._panRequest);
        this._panRequest = requestAnimFrame(this._adjustPan.bind(this, e));
      }
    },
    _onDrag: function _onDrag(e) {
      var marker = this._marker,
          shadow = marker._shadow,
          iconPos = getPosition(marker._icon),
          latlng = marker._map.layerPointToLatLng(iconPos); // update shadow position


      if (shadow) {
        setPosition(shadow, iconPos);
      }

      marker._latlng = latlng;
      e.latlng = latlng;
      e.oldLatLng = this._oldLatLng; // @event drag: Event
      // Fired repeatedly while the user drags the marker.

      marker.fire('move', e).fire('drag', e);
    },
    _onDragEnd: function _onDragEnd(e) {
      // @event dragend: DragEndEvent
      // Fired when the user stops dragging the marker.
      cancelAnimFrame(this._panRequest); // @event moveend: Event
      // Fired when the marker stops moving (because of dragging).

      delete this._oldLatLng;

      this._marker.fire('moveend').fire('dragend', e);
    }
  });
  /*
   * @class Marker
   * @inherits Interactive layer
   * @aka L.Marker
   * L.Marker is used to display clickable/draggable icons on the map. Extends `Layer`.
   *
   * @example
   *
   * ```js
   * L.marker([50.5, 30.5]).addTo(map);
   * ```
   */

  var Marker = Layer.extend({
    // @section
    // @aka Marker options
    options: {
      // @option icon: Icon = *
      // Icon instance to use for rendering the marker.
      // See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
      // If not specified, a common instance of `L.Icon.Default` is used.
      icon: new IconDefault(),
      // Option inherited from "Interactive layer" abstract class
      interactive: true,
      // @option draggable: Boolean = false
      // Whether the marker is draggable with mouse/touch or not.
      draggable: false,
      // @option autoPan: Boolean = false
      // Set it to `true` if you want the map to do panning animation when marker hits the edges.
      autoPan: false,
      // @option autoPanPadding: Point = Point(50, 50)
      // Equivalent of setting both top left and bottom right autopan padding to the same value.
      autoPanPadding: [50, 50],
      // @option autoPanSpeed: Number = 10
      // Number of pixels the map should move by.
      autoPanSpeed: 10,
      // @option keyboard: Boolean = true
      // Whether the marker can be tabbed to with a keyboard and clicked by pressing enter.
      keyboard: true,
      // @option title: String = ''
      // Text for the browser tooltip that appear on marker hover (no tooltip by default).
      title: '',
      // @option alt: String = ''
      // Text for the `alt` attribute of the icon image (useful for accessibility).
      alt: '',
      // @option zIndexOffset: Number = 0
      // By default, marker images zIndex is set automatically based on its latitude. Use this option if you want to put the marker on top of all others (or below), specifying a high value like `1000` (or high negative value, respectively).
      zIndexOffset: 0,
      // @option opacity: Number = 1.0
      // The opacity of the marker.
      opacity: 1,
      // @option riseOnHover: Boolean = false
      // If `true`, the marker will get on top of others when you hover the mouse over it.
      riseOnHover: false,
      // @option riseOffset: Number = 250
      // The z-index offset used for the `riseOnHover` feature.
      riseOffset: 250,
      // @option pane: String = 'markerPane'
      // `Map pane` where the markers icon will be added.
      pane: 'markerPane',
      // @option bubblingMouseEvents: Boolean = false
      // When `true`, a mouse event on this marker will trigger the same event on the map
      // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
      bubblingMouseEvents: false
    },

    /* @section
     *
     * In addition to [shared layer methods](#Layer) like `addTo()` and `remove()` and [popup methods](#Popup) like bindPopup() you can also use the following methods:
     */
    initialize: function initialize(latlng, options) {
      setOptions(this, options);
      this._latlng = toLatLng(latlng);
    },
    onAdd: function onAdd(map) {
      this._zoomAnimated = this._zoomAnimated && map.options.markerZoomAnimation;

      if (this._zoomAnimated) {
        map.on('zoomanim', this._animateZoom, this);
      }

      this._initIcon();

      this.update();
    },
    onRemove: function onRemove(map) {
      if (this.dragging && this.dragging.enabled()) {
        this.options.draggable = true;
        this.dragging.removeHooks();
      }

      delete this.dragging;

      if (this._zoomAnimated) {
        map.off('zoomanim', this._animateZoom, this);
      }

      this._removeIcon();

      this._removeShadow();
    },
    getEvents: function getEvents() {
      return {
        zoom: this.update,
        viewreset: this.update
      };
    },
    // @method getLatLng: LatLng
    // Returns the current geographical position of the marker.
    getLatLng: function getLatLng() {
      return this._latlng;
    },
    // @method setLatLng(latlng: LatLng): this
    // Changes the marker position to the given point.
    setLatLng: function setLatLng(latlng) {
      var oldLatLng = this._latlng;
      this._latlng = toLatLng(latlng);
      this.update(); // @event move: Event
      // Fired when the marker is moved via [`setLatLng`](#marker-setlatlng) or by [dragging](#marker-dragging). Old and new coordinates are included in event arguments as `oldLatLng`, `latlng`.

      return this.fire('move', {
        oldLatLng: oldLatLng,
        latlng: this._latlng
      });
    },
    // @method setZIndexOffset(offset: Number): this
    // Changes the [zIndex offset](#marker-zindexoffset) of the marker.
    setZIndexOffset: function setZIndexOffset(offset) {
      this.options.zIndexOffset = offset;
      return this.update();
    },
    // @method setIcon(icon: Icon): this
    // Changes the marker icon.
    setIcon: function setIcon(icon) {
      this.options.icon = icon;

      if (this._map) {
        this._initIcon();

        this.update();
      }

      if (this._popup) {
        this.bindPopup(this._popup, this._popup.options);
      }

      return this;
    },
    getElement: function getElement() {
      return this._icon;
    },
    update: function update() {
      if (this._icon && this._map) {
        var pos = this._map.latLngToLayerPoint(this._latlng).round();

        this._setPos(pos);
      }

      return this;
    },
    _initIcon: function _initIcon() {
      var options = this.options,
          classToAdd = 'leaflet-zoom-' + (this._zoomAnimated ? 'animated' : 'hide');
      var icon = options.icon.createIcon(this._icon),
          addIcon = false; // if we're not reusing the icon, remove the old one and init new one

      if (icon !== this._icon) {
        if (this._icon) {
          this._removeIcon();
        }

        addIcon = true;

        if (options.title) {
          icon.title = options.title;
        }

        if (icon.tagName === 'IMG') {
          icon.alt = options.alt || '';
        }
      }

      addClass(icon, classToAdd);

      if (options.keyboard) {
        icon.tabIndex = '0';
      }

      this._icon = icon;

      if (options.riseOnHover) {
        this.on({
          mouseover: this._bringToFront,
          mouseout: this._resetZIndex
        });
      }

      var newShadow = options.icon.createShadow(this._shadow),
          addShadow = false;

      if (newShadow !== this._shadow) {
        this._removeShadow();

        addShadow = true;
      }

      if (newShadow) {
        addClass(newShadow, classToAdd);
        newShadow.alt = '';
      }

      this._shadow = newShadow;

      if (options.opacity < 1) {
        this._updateOpacity();
      }

      if (addIcon) {
        this.getPane().appendChild(this._icon);
      }

      this._initInteraction();

      if (newShadow && addShadow) {
        this.getPane('shadowPane').appendChild(this._shadow);
      }
    },
    _removeIcon: function _removeIcon() {
      if (this.options.riseOnHover) {
        this.off({
          mouseover: this._bringToFront,
          mouseout: this._resetZIndex
        });
      }

      _remove(this._icon);

      this.removeInteractiveTarget(this._icon);
      this._icon = null;
    },
    _removeShadow: function _removeShadow() {
      if (this._shadow) {
        _remove(this._shadow);
      }

      this._shadow = null;
    },
    _setPos: function _setPos(pos) {
      setPosition(this._icon, pos);

      if (this._shadow) {
        setPosition(this._shadow, pos);
      }

      this._zIndex = pos.y + this.options.zIndexOffset;

      this._resetZIndex();
    },
    _updateZIndex: function _updateZIndex(offset) {
      this._icon.style.zIndex = this._zIndex + offset;
    },
    _animateZoom: function _animateZoom(opt) {
      var pos = this._map._latLngToNewLayerPoint(this._latlng, opt.zoom, opt.center).round();

      this._setPos(pos);
    },
    _initInteraction: function _initInteraction() {
      if (!this.options.interactive) {
        return;
      }

      addClass(this._icon, 'leaflet-interactive');
      this.addInteractiveTarget(this._icon);

      if (MarkerDrag) {
        var draggable = this.options.draggable;

        if (this.dragging) {
          draggable = this.dragging.enabled();
          this.dragging.disable();
        }

        this.dragging = new MarkerDrag(this);

        if (draggable) {
          this.dragging.enable();
        }
      }
    },
    // @method setOpacity(opacity: Number): this
    // Changes the opacity of the marker.
    setOpacity: function setOpacity(opacity) {
      this.options.opacity = opacity;

      if (this._map) {
        this._updateOpacity();
      }

      return this;
    },
    _updateOpacity: function _updateOpacity() {
      var opacity = this.options.opacity;

      _setOpacity(this._icon, opacity);

      if (this._shadow) {
        _setOpacity(this._shadow, opacity);
      }
    },
    _bringToFront: function _bringToFront() {
      this._updateZIndex(this.options.riseOffset);
    },
    _resetZIndex: function _resetZIndex() {
      this._updateZIndex(0);
    },
    _getPopupAnchor: function _getPopupAnchor() {
      return this.options.icon.options.popupAnchor;
    },
    _getTooltipAnchor: function _getTooltipAnchor() {
      return this.options.icon.options.tooltipAnchor;
    }
  }); // factory L.marker(latlng: LatLng, options? : Marker options)
  // @factory L.marker(latlng: LatLng, options? : Marker options)
  // Instantiates a Marker object given a geographical point and optionally an options object.

  function marker(latlng, options) {
    return new Marker(latlng, options);
  }
  /*
   * @class Path
   * @aka L.Path
   * @inherits Interactive layer
   *
   * An abstract class that contains options and constants shared between vector
   * overlays (Polygon, Polyline, Circle). Do not use it directly. Extends `Layer`.
   */


  var Path = Layer.extend({
    // @section
    // @aka Path options
    options: {
      // @option stroke: Boolean = true
      // Whether to draw stroke along the path. Set it to `false` to disable borders on polygons or circles.
      stroke: true,
      // @option color: String = '#3388ff'
      // Stroke color
      color: '#3388ff',
      // @option weight: Number = 3
      // Stroke width in pixels
      weight: 3,
      // @option opacity: Number = 1.0
      // Stroke opacity
      opacity: 1,
      // @option lineCap: String= 'round'
      // A string that defines [shape to be used at the end](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) of the stroke.
      lineCap: 'round',
      // @option lineJoin: String = 'round'
      // A string that defines [shape to be used at the corners](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin) of the stroke.
      lineJoin: 'round',
      // @option dashArray: String = null
      // A string that defines the stroke [dash pattern](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
      dashArray: null,
      // @option dashOffset: String = null
      // A string that defines the [distance into the dash pattern to start the dash](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
      dashOffset: null,
      // @option fill: Boolean = depends
      // Whether to fill the path with color. Set it to `false` to disable filling on polygons or circles.
      fill: false,
      // @option fillColor: String = *
      // Fill color. Defaults to the value of the [`color`](#path-color) option
      fillColor: null,
      // @option fillOpacity: Number = 0.2
      // Fill opacity.
      fillOpacity: 0.2,
      // @option fillRule: String = 'evenodd'
      // A string that defines [how the inside of a shape](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule) is determined.
      fillRule: 'evenodd',
      // className: '',
      // Option inherited from "Interactive layer" abstract class
      interactive: true,
      // @option bubblingMouseEvents: Boolean = true
      // When `true`, a mouse event on this path will trigger the same event on the map
      // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
      bubblingMouseEvents: true
    },
    beforeAdd: function beforeAdd(map) {
      // Renderer is set here because we need to call renderer.getEvents
      // before this.getEvents.
      this._renderer = map.getRenderer(this);
    },
    onAdd: function onAdd() {
      this._renderer._initPath(this);

      this._reset();

      this._renderer._addPath(this);
    },
    onRemove: function onRemove() {
      this._renderer._removePath(this);
    },
    // @method redraw(): this
    // Redraws the layer. Sometimes useful after you changed the coordinates that the path uses.
    redraw: function redraw() {
      if (this._map) {
        this._renderer._updatePath(this);
      }

      return this;
    },
    // @method setStyle(style: Path options): this
    // Changes the appearance of a Path based on the options in the `Path options` object.
    setStyle: function setStyle(style) {
      setOptions(this, style);

      if (this._renderer) {
        this._renderer._updateStyle(this);
      }

      return this;
    },
    // @method bringToFront(): this
    // Brings the layer to the top of all path layers.
    bringToFront: function bringToFront() {
      if (this._renderer) {
        this._renderer._bringToFront(this);
      }

      return this;
    },
    // @method bringToBack(): this
    // Brings the layer to the bottom of all path layers.
    bringToBack: function bringToBack() {
      if (this._renderer) {
        this._renderer._bringToBack(this);
      }

      return this;
    },
    getElement: function getElement() {
      return this._path;
    },
    _reset: function _reset() {
      // defined in child classes
      this._project();

      this._update();
    },
    _clickTolerance: function _clickTolerance() {
      // used when doing hit detection for Canvas layers
      return (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance;
    }
  });
  /*
   * @class CircleMarker
   * @aka L.CircleMarker
   * @inherits Path
   *
   * A circle of a fixed size with radius specified in pixels. Extends `Path`.
   */

  var CircleMarker = Path.extend({
    // @section
    // @aka CircleMarker options
    options: {
      fill: true,
      // @option radius: Number = 10
      // Radius of the circle marker, in pixels
      radius: 10
    },
    initialize: function initialize(latlng, options) {
      setOptions(this, options);
      this._latlng = toLatLng(latlng);
      this._radius = this.options.radius;
    },
    // @method setLatLng(latLng: LatLng): this
    // Sets the position of a circle marker to a new location.
    setLatLng: function setLatLng(latlng) {
      this._latlng = toLatLng(latlng);
      this.redraw();
      return this.fire('move', {
        latlng: this._latlng
      });
    },
    // @method getLatLng(): LatLng
    // Returns the current geographical position of the circle marker
    getLatLng: function getLatLng() {
      return this._latlng;
    },
    // @method setRadius(radius: Number): this
    // Sets the radius of a circle marker. Units are in pixels.
    setRadius: function setRadius(radius) {
      this.options.radius = this._radius = radius;
      return this.redraw();
    },
    // @method getRadius(): Number
    // Returns the current radius of the circle
    getRadius: function getRadius() {
      return this._radius;
    },
    setStyle: function setStyle(options) {
      var radius = options && options.radius || this._radius;
      Path.prototype.setStyle.call(this, options);
      this.setRadius(radius);
      return this;
    },
    _project: function _project() {
      this._point = this._map.latLngToLayerPoint(this._latlng);

      this._updateBounds();
    },
    _updateBounds: function _updateBounds() {
      var r = this._radius,
          r2 = this._radiusY || r,
          w = this._clickTolerance(),
          p = [r + w, r2 + w];

      this._pxBounds = new Bounds(this._point.subtract(p), this._point.add(p));
    },
    _update: function _update() {
      if (this._map) {
        this._updatePath();
      }
    },
    _updatePath: function _updatePath() {
      this._renderer._updateCircle(this);
    },
    _empty: function _empty() {
      return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
    },
    // Needed by the `Canvas` renderer for interactivity
    _containsPoint: function _containsPoint(p) {
      return p.distanceTo(this._point) <= this._radius + this._clickTolerance();
    }
  }); // @factory L.circleMarker(latlng: LatLng, options?: CircleMarker options)
  // Instantiates a circle marker object given a geographical point, and an optional options object.

  function circleMarker(latlng, options) {
    return new CircleMarker(latlng, options);
  }
  /*
   * @class Circle
   * @aka L.Circle
   * @inherits CircleMarker
   *
   * A class for drawing circle overlays on a map. Extends `CircleMarker`.
   *
   * It's an approximation and starts to diverge from a real circle closer to poles (due to projection distortion).
   *
   * @example
   *
   * ```js
   * L.circle([50.5, 30.5], {radius: 200}).addTo(map);
   * ```
   */


  var Circle = CircleMarker.extend({
    initialize: function initialize(latlng, options, legacyOptions) {
      if (typeof options === 'number') {
        // Backwards compatibility with 0.7.x factory (latlng, radius, options?)
        options = extend({}, legacyOptions, {
          radius: options
        });
      }

      setOptions(this, options);
      this._latlng = toLatLng(latlng);

      if (isNaN(this.options.radius)) {
        throw new Error('Circle radius cannot be NaN');
      } // @section
      // @aka Circle options
      // @option radius: Number; Radius of the circle, in meters.


      this._mRadius = this.options.radius;
    },
    // @method setRadius(radius: Number): this
    // Sets the radius of a circle. Units are in meters.
    setRadius: function setRadius(radius) {
      this._mRadius = radius;
      return this.redraw();
    },
    // @method getRadius(): Number
    // Returns the current radius of a circle. Units are in meters.
    getRadius: function getRadius() {
      return this._mRadius;
    },
    // @method getBounds(): LatLngBounds
    // Returns the `LatLngBounds` of the path.
    getBounds: function getBounds() {
      var half = [this._radius, this._radiusY || this._radius];
      return new LatLngBounds(this._map.layerPointToLatLng(this._point.subtract(half)), this._map.layerPointToLatLng(this._point.add(half)));
    },
    setStyle: Path.prototype.setStyle,
    _project: function _project() {
      var lng = this._latlng.lng,
          lat = this._latlng.lat,
          map = this._map,
          crs = map.options.crs;

      if (crs.distance === Earth.distance) {
        var d = Math.PI / 180,
            latR = this._mRadius / Earth.R / d,
            top = map.project([lat + latR, lng]),
            bottom = map.project([lat - latR, lng]),
            p = top.add(bottom).divideBy(2),
            lat2 = map.unproject(p).lat,
            lngR = Math.acos((Math.cos(latR * d) - Math.sin(lat * d) * Math.sin(lat2 * d)) / (Math.cos(lat * d) * Math.cos(lat2 * d))) / d;

        if (isNaN(lngR) || lngR === 0) {
          lngR = latR / Math.cos(Math.PI / 180 * lat); // Fallback for edge case, #2425
        }

        this._point = p.subtract(map.getPixelOrigin());
        this._radius = isNaN(lngR) ? 0 : p.x - map.project([lat2, lng - lngR]).x;
        this._radiusY = p.y - top.y;
      } else {
        var latlng2 = crs.unproject(crs.project(this._latlng).subtract([this._mRadius, 0]));
        this._point = map.latLngToLayerPoint(this._latlng);
        this._radius = this._point.x - map.latLngToLayerPoint(latlng2).x;
      }

      this._updateBounds();
    }
  }); // @factory L.circle(latlng: LatLng, options?: Circle options)
  // Instantiates a circle object given a geographical point, and an options object
  // which contains the circle radius.
  // @alternative
  // @factory L.circle(latlng: LatLng, radius: Number, options?: Circle options)
  // Obsolete way of instantiating a circle, for compatibility with 0.7.x code.
  // Do not use in new applications or plugins.

  function circle(latlng, options, legacyOptions) {
    return new Circle(latlng, options, legacyOptions);
  }
  /*
   * @class Polyline
   * @aka L.Polyline
   * @inherits Path
   *
   * A class for drawing polyline overlays on a map. Extends `Path`.
   *
   * @example
   *
   * ```js
   * // create a red polyline from an array of LatLng points
   * var latlngs = [
   * 	[45.51, -122.68],
   * 	[37.77, -122.43],
   * 	[34.04, -118.2]
   * ];
   *
   * var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
   *
   * // zoom the map to the polyline
   * map.fitBounds(polyline.getBounds());
   * ```
   *
   * You can also pass a multi-dimensional array to represent a `MultiPolyline` shape:
   *
   * ```js
   * // create a red polyline from an array of arrays of LatLng points
   * var latlngs = [
   * 	[[45.51, -122.68],
   * 	 [37.77, -122.43],
   * 	 [34.04, -118.2]],
   * 	[[40.78, -73.91],
   * 	 [41.83, -87.62],
   * 	 [32.76, -96.72]]
   * ];
   * ```
   */


  var Polyline = Path.extend({
    // @section
    // @aka Polyline options
    options: {
      // @option smoothFactor: Number = 1.0
      // How much to simplify the polyline on each zoom level. More means
      // better performance and smoother look, and less means more accurate representation.
      smoothFactor: 1.0,
      // @option noClip: Boolean = false
      // Disable polyline clipping.
      noClip: false
    },
    initialize: function initialize(latlngs, options) {
      setOptions(this, options);

      this._setLatLngs(latlngs);
    },
    // @method getLatLngs(): LatLng[]
    // Returns an array of the points in the path, or nested arrays of points in case of multi-polyline.
    getLatLngs: function getLatLngs() {
      return this._latlngs;
    },
    // @method setLatLngs(latlngs: LatLng[]): this
    // Replaces all the points in the polyline with the given array of geographical points.
    setLatLngs: function setLatLngs(latlngs) {
      this._setLatLngs(latlngs);

      return this.redraw();
    },
    // @method isEmpty(): Boolean
    // Returns `true` if the Polyline has no LatLngs.
    isEmpty: function isEmpty() {
      return !this._latlngs.length;
    },
    // @method closestLayerPoint: Point
    // Returns the point closest to `p` on the Polyline.
    closestLayerPoint: function closestLayerPoint(p) {
      var minDistance = Infinity,
          minPoint = null,
          closest = _sqClosestPointOnSegment,
          p1,
          p2;

      for (var j = 0, jLen = this._parts.length; j < jLen; j++) {
        var points = this._parts[j];

        for (var i = 1, len = points.length; i < len; i++) {
          p1 = points[i - 1];
          p2 = points[i];
          var sqDist = closest(p, p1, p2, true);

          if (sqDist < minDistance) {
            minDistance = sqDist;
            minPoint = closest(p, p1, p2);
          }
        }
      }

      if (minPoint) {
        minPoint.distance = Math.sqrt(minDistance);
      }

      return minPoint;
    },
    // @method getCenter(): LatLng
    // Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the polyline.
    getCenter: function getCenter() {
      // throws error when not yet added to map as this center calculation requires projected coordinates
      if (!this._map) {
        throw new Error('Must add layer to map before using getCenter()');
      }

      var i,
          halfDist,
          segDist,
          dist,
          p1,
          p2,
          ratio,
          points = this._rings[0],
          len = points.length;

      if (!len) {
        return null;
      } // polyline centroid algorithm; only uses the first ring if there are multiple


      for (i = 0, halfDist = 0; i < len - 1; i++) {
        halfDist += points[i].distanceTo(points[i + 1]) / 2;
      } // The line is so small in the current view that all points are on the same pixel.


      if (halfDist === 0) {
        return this._map.layerPointToLatLng(points[0]);
      }

      for (i = 0, dist = 0; i < len - 1; i++) {
        p1 = points[i];
        p2 = points[i + 1];
        segDist = p1.distanceTo(p2);
        dist += segDist;

        if (dist > halfDist) {
          ratio = (dist - halfDist) / segDist;
          return this._map.layerPointToLatLng([p2.x - ratio * (p2.x - p1.x), p2.y - ratio * (p2.y - p1.y)]);
        }
      }
    },
    // @method getBounds(): LatLngBounds
    // Returns the `LatLngBounds` of the path.
    getBounds: function getBounds() {
      return this._bounds;
    },
    // @method addLatLng(latlng: LatLng, latlngs? LatLng[]): this
    // Adds a given point to the polyline. By default, adds to the first ring of
    // the polyline in case of a multi-polyline, but can be overridden by passing
    // a specific ring as a LatLng array (that you can earlier access with [`getLatLngs`](#polyline-getlatlngs)).
    addLatLng: function addLatLng(latlng, latlngs) {
      latlngs = latlngs || this._defaultShape();
      latlng = toLatLng(latlng);
      latlngs.push(latlng);

      this._bounds.extend(latlng);

      return this.redraw();
    },
    _setLatLngs: function _setLatLngs(latlngs) {
      this._bounds = new LatLngBounds();
      this._latlngs = this._convertLatLngs(latlngs);
    },
    _defaultShape: function _defaultShape() {
      return isFlat(this._latlngs) ? this._latlngs : this._latlngs[0];
    },
    // recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
    _convertLatLngs: function _convertLatLngs(latlngs) {
      var result = [],
          flat = isFlat(latlngs);

      for (var i = 0, len = latlngs.length; i < len; i++) {
        if (flat) {
          result[i] = toLatLng(latlngs[i]);

          this._bounds.extend(result[i]);
        } else {
          result[i] = this._convertLatLngs(latlngs[i]);
        }
      }

      return result;
    },
    _project: function _project() {
      var pxBounds = new Bounds();
      this._rings = [];

      this._projectLatlngs(this._latlngs, this._rings, pxBounds);

      var w = this._clickTolerance(),
          p = new Point(w, w);

      if (this._bounds.isValid() && pxBounds.isValid()) {
        pxBounds.min._subtract(p);

        pxBounds.max._add(p);

        this._pxBounds = pxBounds;
      }
    },
    // recursively turns latlngs into a set of rings with projected coordinates
    _projectLatlngs: function _projectLatlngs(latlngs, result, projectedBounds) {
      var flat = latlngs[0] instanceof LatLng,
          len = latlngs.length,
          i,
          ring;

      if (flat) {
        ring = [];

        for (i = 0; i < len; i++) {
          ring[i] = this._map.latLngToLayerPoint(latlngs[i]);
          projectedBounds.extend(ring[i]);
        }

        result.push(ring);
      } else {
        for (i = 0; i < len; i++) {
          this._projectLatlngs(latlngs[i], result, projectedBounds);
        }
      }
    },
    // clip polyline by renderer bounds so that we have less to render for performance
    _clipPoints: function _clipPoints() {
      var bounds = this._renderer._bounds;
      this._parts = [];

      if (!this._pxBounds || !this._pxBounds.intersects(bounds)) {
        return;
      }

      if (this.options.noClip) {
        this._parts = this._rings;
        return;
      }

      var parts = this._parts,
          i,
          j,
          k,
          len,
          len2,
          segment,
          points;

      for (i = 0, k = 0, len = this._rings.length; i < len; i++) {
        points = this._rings[i];

        for (j = 0, len2 = points.length; j < len2 - 1; j++) {
          segment = clipSegment(points[j], points[j + 1], bounds, j, true);

          if (!segment) {
            continue;
          }

          parts[k] = parts[k] || [];
          parts[k].push(segment[0]); // if segment goes out of screen, or it's the last one, it's the end of the line part

          if (segment[1] !== points[j + 1] || j === len2 - 2) {
            parts[k].push(segment[1]);
            k++;
          }
        }
      }
    },
    // simplify each clipped part of the polyline for performance
    _simplifyPoints: function _simplifyPoints() {
      var parts = this._parts,
          tolerance = this.options.smoothFactor;

      for (var i = 0, len = parts.length; i < len; i++) {
        parts[i] = simplify(parts[i], tolerance);
      }
    },
    _update: function _update() {
      if (!this._map) {
        return;
      }

      this._clipPoints();

      this._simplifyPoints();

      this._updatePath();
    },
    _updatePath: function _updatePath() {
      this._renderer._updatePoly(this);
    },
    // Needed by the `Canvas` renderer for interactivity
    _containsPoint: function _containsPoint(p, closed) {
      var i,
          j,
          k,
          len,
          len2,
          part,
          w = this._clickTolerance();

      if (!this._pxBounds || !this._pxBounds.contains(p)) {
        return false;
      } // hit detection for polylines


      for (i = 0, len = this._parts.length; i < len; i++) {
        part = this._parts[i];

        for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
          if (!closed && j === 0) {
            continue;
          }

          if (pointToSegmentDistance(p, part[k], part[j]) <= w) {
            return true;
          }
        }
      }

      return false;
    }
  }); // @factory L.polyline(latlngs: LatLng[], options?: Polyline options)
  // Instantiates a polyline object given an array of geographical points and
  // optionally an options object. You can create a `Polyline` object with
  // multiple separate lines (`MultiPolyline`) by passing an array of arrays
  // of geographic points.

  function polyline(latlngs, options) {
    return new Polyline(latlngs, options);
  } // Retrocompat. Allow plugins to support Leaflet versions before and after 1.1.


  Polyline._flat = _flat;
  /*
   * @class Polygon
   * @aka L.Polygon
   * @inherits Polyline
   *
   * A class for drawing polygon overlays on a map. Extends `Polyline`.
   *
   * Note that points you pass when creating a polygon shouldn't have an additional last point equal to the first one — it's better to filter out such points.
   *
   *
   * @example
   *
   * ```js
   * // create a red polygon from an array of LatLng points
   * var latlngs = [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]];
   *
   * var polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);
   *
   * // zoom the map to the polygon
   * map.fitBounds(polygon.getBounds());
   * ```
   *
   * You can also pass an array of arrays of latlngs, with the first array representing the outer shape and the other arrays representing holes in the outer shape:
   *
   * ```js
   * var latlngs = [
   *   [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
   *   [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
   * ];
   * ```
   *
   * Additionally, you can pass a multi-dimensional array to represent a MultiPolygon shape.
   *
   * ```js
   * var latlngs = [
   *   [ // first polygon
   *     [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
   *     [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
   *   ],
   *   [ // second polygon
   *     [[41, -111.03],[45, -111.04],[45, -104.05],[41, -104.05]]
   *   ]
   * ];
   * ```
   */

  var Polygon = Polyline.extend({
    options: {
      fill: true
    },
    isEmpty: function isEmpty() {
      return !this._latlngs.length || !this._latlngs[0].length;
    },
    getCenter: function getCenter() {
      // throws error when not yet added to map as this center calculation requires projected coordinates
      if (!this._map) {
        throw new Error('Must add layer to map before using getCenter()');
      }

      var i,
          j,
          p1,
          p2,
          f,
          area,
          x,
          y,
          center,
          points = this._rings[0],
          len = points.length;

      if (!len) {
        return null;
      } // polygon centroid algorithm; only uses the first ring if there are multiple


      area = x = y = 0;

      for (i = 0, j = len - 1; i < len; j = i++) {
        p1 = points[i];
        p2 = points[j];
        f = p1.y * p2.x - p2.y * p1.x;
        x += (p1.x + p2.x) * f;
        y += (p1.y + p2.y) * f;
        area += f * 3;
      }

      if (area === 0) {
        // Polygon is so small that all points are on same pixel.
        center = points[0];
      } else {
        center = [x / area, y / area];
      }

      return this._map.layerPointToLatLng(center);
    },
    _convertLatLngs: function _convertLatLngs(latlngs) {
      var result = Polyline.prototype._convertLatLngs.call(this, latlngs),
          len = result.length; // remove last point if it equals first one


      if (len >= 2 && result[0] instanceof LatLng && result[0].equals(result[len - 1])) {
        result.pop();
      }

      return result;
    },
    _setLatLngs: function _setLatLngs(latlngs) {
      Polyline.prototype._setLatLngs.call(this, latlngs);

      if (isFlat(this._latlngs)) {
        this._latlngs = [this._latlngs];
      }
    },
    _defaultShape: function _defaultShape() {
      return isFlat(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
    },
    _clipPoints: function _clipPoints() {
      // polygons need a different clipping algorithm so we redefine that
      var bounds = this._renderer._bounds,
          w = this.options.weight,
          p = new Point(w, w); // increase clip padding by stroke width to avoid stroke on clip edges

      bounds = new Bounds(bounds.min.subtract(p), bounds.max.add(p));
      this._parts = [];

      if (!this._pxBounds || !this._pxBounds.intersects(bounds)) {
        return;
      }

      if (this.options.noClip) {
        this._parts = this._rings;
        return;
      }

      for (var i = 0, len = this._rings.length, clipped; i < len; i++) {
        clipped = clipPolygon(this._rings[i], bounds, true);

        if (clipped.length) {
          this._parts.push(clipped);
        }
      }
    },
    _updatePath: function _updatePath() {
      this._renderer._updatePoly(this, true);
    },
    // Needed by the `Canvas` renderer for interactivity
    _containsPoint: function _containsPoint(p) {
      var inside = false,
          part,
          p1,
          p2,
          i,
          j,
          k,
          len,
          len2;

      if (!this._pxBounds.contains(p)) {
        return false;
      } // ray casting algorithm for detecting if point is in polygon


      for (i = 0, len = this._parts.length; i < len; i++) {
        part = this._parts[i];

        for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
          p1 = part[j];
          p2 = part[k];

          if (p1.y > p.y !== p2.y > p.y && p.x < (p2.x - p1.x) * (p.y - p1.y) / (p2.y - p1.y) + p1.x) {
            inside = !inside;
          }
        }
      } // also check if it's on polygon stroke


      return inside || Polyline.prototype._containsPoint.call(this, p, true);
    }
  }); // @factory L.polygon(latlngs: LatLng[], options?: Polyline options)

  function polygon(latlngs, options) {
    return new Polygon(latlngs, options);
  }
  /*
   * @class GeoJSON
   * @aka L.GeoJSON
   * @inherits FeatureGroup
   *
   * Represents a GeoJSON object or an array of GeoJSON objects. Allows you to parse
   * GeoJSON data and display it on the map. Extends `FeatureGroup`.
   *
   * @example
   *
   * ```js
   * L.geoJSON(data, {
   * 	style: function (feature) {
   * 		return {color: feature.properties.color};
   * 	}
   * }).bindPopup(function (layer) {
   * 	return layer.feature.properties.description;
   * }).addTo(map);
   * ```
   */


  var GeoJSON = FeatureGroup.extend({
    /* @section
     * @aka GeoJSON options
     *
     * @option pointToLayer: Function = *
     * A `Function` defining how GeoJSON points spawn Leaflet layers. It is internally
     * called when data is added, passing the GeoJSON point feature and its `LatLng`.
     * The default is to spawn a default `Marker`:
     * ```js
     * function(geoJsonPoint, latlng) {
     * 	return L.marker(latlng);
     * }
     * ```
     *
     * @option style: Function = *
     * A `Function` defining the `Path options` for styling GeoJSON lines and polygons,
     * called internally when data is added.
     * The default value is to not override any defaults:
     * ```js
     * function (geoJsonFeature) {
     * 	return {}
     * }
     * ```
     *
     * @option onEachFeature: Function = *
     * A `Function` that will be called once for each created `Feature`, after it has
     * been created and styled. Useful for attaching events and popups to features.
     * The default is to do nothing with the newly created layers:
     * ```js
     * function (feature, layer) {}
     * ```
     *
     * @option filter: Function = *
     * A `Function` that will be used to decide whether to include a feature or not.
     * The default is to include all features:
     * ```js
     * function (geoJsonFeature) {
     * 	return true;
     * }
     * ```
     * Note: dynamically changing the `filter` option will have effect only on newly
     * added data. It will _not_ re-evaluate already included features.
     *
     * @option coordsToLatLng: Function = *
     * A `Function` that will be used for converting GeoJSON coordinates to `LatLng`s.
     * The default is the `coordsToLatLng` static method.
     */
    initialize: function initialize(geojson, options) {
      setOptions(this, options);
      this._layers = {};

      if (geojson) {
        this.addData(geojson);
      }
    },
    // @method addData( <GeoJSON> data ): this
    // Adds a GeoJSON object to the layer.
    addData: function addData(geojson) {
      var features = isArray(geojson) ? geojson : geojson.features,
          i,
          len,
          feature;

      if (features) {
        for (i = 0, len = features.length; i < len; i++) {
          // only add this if geometry or geometries are set and not null
          feature = features[i];

          if (feature.geometries || feature.geometry || feature.features || feature.coordinates) {
            this.addData(feature);
          }
        }

        return this;
      }

      var options = this.options;

      if (options.filter && !options.filter(geojson)) {
        return this;
      }

      var layer = geometryToLayer(geojson, options);

      if (!layer) {
        return this;
      }

      layer.feature = asFeature(geojson);
      layer.defaultOptions = layer.options;
      this.resetStyle(layer);

      if (options.onEachFeature) {
        options.onEachFeature(geojson, layer);
      }

      return this.addLayer(layer);
    },
    // @method resetStyle( <Path> layer ): this
    // Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
    resetStyle: function resetStyle(layer) {
      // reset any custom styles
      layer.options = extend({}, layer.defaultOptions);

      this._setLayerStyle(layer, this.options.style);

      return this;
    },
    // @method setStyle( <Function> style ): this
    // Changes styles of GeoJSON vector layers with the given style function.
    setStyle: function setStyle(style) {
      return this.eachLayer(function (layer) {
        this._setLayerStyle(layer, style);
      }, this);
    },
    _setLayerStyle: function _setLayerStyle(layer, style) {
      if (typeof style === 'function') {
        style = style(layer.feature);
      }

      if (layer.setStyle) {
        layer.setStyle(style);
      }
    }
  }); // @section
  // There are several static functions which can be called without instantiating L.GeoJSON:
  // @function geometryToLayer(featureData: Object, options?: GeoJSON options): Layer
  // Creates a `Layer` from a given GeoJSON feature. Can use a custom
  // [`pointToLayer`](#geojson-pointtolayer) and/or [`coordsToLatLng`](#geojson-coordstolatlng)
  // functions if provided as options.

  function geometryToLayer(geojson, options) {
    var geometry = geojson.type === 'Feature' ? geojson.geometry : geojson,
        coords = geometry ? geometry.coordinates : null,
        layers = [],
        pointToLayer = options && options.pointToLayer,
        _coordsToLatLng = options && options.coordsToLatLng || coordsToLatLng,
        latlng,
        latlngs,
        i,
        len;

    if (!coords && !geometry) {
      return null;
    }

    switch (geometry.type) {
      case 'Point':
        latlng = _coordsToLatLng(coords);
        return pointToLayer ? pointToLayer(geojson, latlng) : new Marker(latlng);

      case 'MultiPoint':
        for (i = 0, len = coords.length; i < len; i++) {
          latlng = _coordsToLatLng(coords[i]);
          layers.push(pointToLayer ? pointToLayer(geojson, latlng) : new Marker(latlng));
        }

        return new FeatureGroup(layers);

      case 'LineString':
      case 'MultiLineString':
        latlngs = coordsToLatLngs(coords, geometry.type === 'LineString' ? 0 : 1, _coordsToLatLng);
        return new Polyline(latlngs, options);

      case 'Polygon':
      case 'MultiPolygon':
        latlngs = coordsToLatLngs(coords, geometry.type === 'Polygon' ? 1 : 2, _coordsToLatLng);
        return new Polygon(latlngs, options);

      case 'GeometryCollection':
        for (i = 0, len = geometry.geometries.length; i < len; i++) {
          var layer = geometryToLayer({
            geometry: geometry.geometries[i],
            type: 'Feature',
            properties: geojson.properties
          }, options);

          if (layer) {
            layers.push(layer);
          }
        }

        return new FeatureGroup(layers);

      default:
        throw new Error('Invalid GeoJSON object.');
    }
  } // @function coordsToLatLng(coords: Array): LatLng
  // Creates a `LatLng` object from an array of 2 numbers (longitude, latitude)
  // or 3 numbers (longitude, latitude, altitude) used in GeoJSON for points.


  function coordsToLatLng(coords) {
    return new LatLng(coords[1], coords[0], coords[2]);
  } // @function coordsToLatLngs(coords: Array, levelsDeep?: Number, coordsToLatLng?: Function): Array
  // Creates a multidimensional array of `LatLng`s from a GeoJSON coordinates array.
  // `levelsDeep` specifies the nesting level (0 is for an array of points, 1 for an array of arrays of points, etc., 0 by default).
  // Can use a custom [`coordsToLatLng`](#geojson-coordstolatlng) function.


  function coordsToLatLngs(coords, levelsDeep, _coordsToLatLng) {
    var latlngs = [];

    for (var i = 0, len = coords.length, latlng; i < len; i++) {
      latlng = levelsDeep ? coordsToLatLngs(coords[i], levelsDeep - 1, _coordsToLatLng) : (_coordsToLatLng || coordsToLatLng)(coords[i]);
      latlngs.push(latlng);
    }

    return latlngs;
  } // @function latLngToCoords(latlng: LatLng, precision?: Number): Array
  // Reverse of [`coordsToLatLng`](#geojson-coordstolatlng)


  function latLngToCoords(latlng, precision) {
    precision = typeof precision === 'number' ? precision : 6;
    return latlng.alt !== undefined ? [formatNum(latlng.lng, precision), formatNum(latlng.lat, precision), formatNum(latlng.alt, precision)] : [formatNum(latlng.lng, precision), formatNum(latlng.lat, precision)];
  } // @function latLngsToCoords(latlngs: Array, levelsDeep?: Number, closed?: Boolean): Array
  // Reverse of [`coordsToLatLngs`](#geojson-coordstolatlngs)
  // `closed` determines whether the first point should be appended to the end of the array to close the feature, only used when `levelsDeep` is 0. False by default.


  function latLngsToCoords(latlngs, levelsDeep, closed, precision) {
    var coords = [];

    for (var i = 0, len = latlngs.length; i < len; i++) {
      coords.push(levelsDeep ? latLngsToCoords(latlngs[i], levelsDeep - 1, closed, precision) : latLngToCoords(latlngs[i], precision));
    }

    if (!levelsDeep && closed) {
      coords.push(coords[0]);
    }

    return coords;
  }

  function getFeature(layer, newGeometry) {
    return layer.feature ? extend({}, layer.feature, {
      geometry: newGeometry
    }) : asFeature(newGeometry);
  } // @function asFeature(geojson: Object): Object
  // Normalize GeoJSON geometries/features into GeoJSON features.


  function asFeature(geojson) {
    if (geojson.type === 'Feature' || geojson.type === 'FeatureCollection') {
      return geojson;
    }

    return {
      type: 'Feature',
      properties: {},
      geometry: geojson
    };
  }

  var PointToGeoJSON = {
    toGeoJSON: function toGeoJSON(precision) {
      return getFeature(this, {
        type: 'Point',
        coordinates: latLngToCoords(this.getLatLng(), precision)
      });
    }
  }; // @namespace Marker
  // @method toGeoJSON(): Object
  // Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the marker (as a GeoJSON `Point` Feature).

  Marker.include(PointToGeoJSON); // @namespace CircleMarker
  // @method toGeoJSON(): Object
  // Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the circle marker (as a GeoJSON `Point` Feature).

  Circle.include(PointToGeoJSON);
  CircleMarker.include(PointToGeoJSON); // @namespace Polyline
  // @method toGeoJSON(): Object
  // Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the polyline (as a GeoJSON `LineString` or `MultiLineString` Feature).

  Polyline.include({
    toGeoJSON: function toGeoJSON(precision) {
      var multi = !isFlat(this._latlngs);
      var coords = latLngsToCoords(this._latlngs, multi ? 1 : 0, false, precision);
      return getFeature(this, {
        type: (multi ? 'Multi' : '') + 'LineString',
        coordinates: coords
      });
    }
  }); // @namespace Polygon
  // @method toGeoJSON(): Object
  // Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the polygon (as a GeoJSON `Polygon` or `MultiPolygon` Feature).

  Polygon.include({
    toGeoJSON: function toGeoJSON(precision) {
      var holes = !isFlat(this._latlngs),
          multi = holes && !isFlat(this._latlngs[0]);
      var coords = latLngsToCoords(this._latlngs, multi ? 2 : holes ? 1 : 0, true, precision);

      if (!holes) {
        coords = [coords];
      }

      return getFeature(this, {
        type: (multi ? 'Multi' : '') + 'Polygon',
        coordinates: coords
      });
    }
  }); // @namespace LayerGroup

  LayerGroup.include({
    toMultiPoint: function toMultiPoint(precision) {
      var coords = [];
      this.eachLayer(function (layer) {
        coords.push(layer.toGeoJSON(precision).geometry.coordinates);
      });
      return getFeature(this, {
        type: 'MultiPoint',
        coordinates: coords
      });
    },
    // @method toGeoJSON(): Object
    // Returns a [`GeoJSON`](http://en.wikipedia.org/wiki/GeoJSON) representation of the layer group (as a GeoJSON `FeatureCollection`, `GeometryCollection`, or `MultiPoint`).
    toGeoJSON: function toGeoJSON(precision) {
      var type = this.feature && this.feature.geometry && this.feature.geometry.type;

      if (type === 'MultiPoint') {
        return this.toMultiPoint(precision);
      }

      var isGeometryCollection = type === 'GeometryCollection',
          jsons = [];
      this.eachLayer(function (layer) {
        if (layer.toGeoJSON) {
          var json = layer.toGeoJSON(precision);

          if (isGeometryCollection) {
            jsons.push(json.geometry);
          } else {
            var feature = asFeature(json); // Squash nested feature collections

            if (feature.type === 'FeatureCollection') {
              jsons.push.apply(jsons, feature.features);
            } else {
              jsons.push(feature);
            }
          }
        }
      });

      if (isGeometryCollection) {
        return getFeature(this, {
          geometries: jsons,
          type: 'GeometryCollection'
        });
      }

      return {
        type: 'FeatureCollection',
        features: jsons
      };
    }
  }); // @namespace GeoJSON
  // @factory L.geoJSON(geojson?: Object, options?: GeoJSON options)
  // Creates a GeoJSON layer. Optionally accepts an object in
  // [GeoJSON format](http://geojson.org/geojson-spec.html) to display on the map
  // (you can alternatively add it later with `addData` method) and an `options` object.

  function geoJSON(geojson, options) {
    return new GeoJSON(geojson, options);
  } // Backward compatibility.


  var geoJson = geoJSON;
  /*
   * @class ImageOverlay
   * @aka L.ImageOverlay
   * @inherits Interactive layer
   *
   * Used to load and display a single image over specific bounds of the map. Extends `Layer`.
   *
   * @example
   *
   * ```js
   * var imageUrl = 'http://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg',
   * 	imageBounds = [[40.712216, -74.22655], [40.773941, -74.12544]];
   * L.imageOverlay(imageUrl, imageBounds).addTo(map);
   * ```
   */

  var ImageOverlay = Layer.extend({
    // @section
    // @aka ImageOverlay options
    options: {
      // @option opacity: Number = 1.0
      // The opacity of the image overlay.
      opacity: 1,
      // @option alt: String = ''
      // Text for the `alt` attribute of the image (useful for accessibility).
      alt: '',
      // @option interactive: Boolean = false
      // If `true`, the image overlay will emit [mouse events](#interactive-layer) when clicked or hovered.
      interactive: false,
      // @option crossOrigin: Boolean = false
      // If true, the image will have its crossOrigin attribute set to ''. This is needed if you want to access image pixel data.
      crossOrigin: false,
      // @option errorOverlayUrl: String = ''
      // URL to the overlay image to show in place of the overlay that failed to load.
      errorOverlayUrl: '',
      // @option zIndex: Number = 1
      // The explicit [zIndex](https://developer.mozilla.org/docs/Web/CSS/CSS_Positioning/Understanding_z_index) of the tile layer.
      zIndex: 1,
      // @option className: String = ''
      // A custom class name to assign to the image. Empty by default.
      className: ''
    },
    initialize: function initialize(url, bounds, options) {
      // (String, LatLngBounds, Object)
      this._url = url;
      this._bounds = toLatLngBounds(bounds);
      setOptions(this, options);
    },
    onAdd: function onAdd() {
      if (!this._image) {
        this._initImage();

        if (this.options.opacity < 1) {
          this._updateOpacity();
        }
      }

      if (this.options.interactive) {
        addClass(this._image, 'leaflet-interactive');
        this.addInteractiveTarget(this._image);
      }

      this.getPane().appendChild(this._image);

      this._reset();
    },
    onRemove: function onRemove() {
      _remove(this._image);

      if (this.options.interactive) {
        this.removeInteractiveTarget(this._image);
      }
    },
    // @method setOpacity(opacity: Number): this
    // Sets the opacity of the overlay.
    setOpacity: function setOpacity(opacity) {
      this.options.opacity = opacity;

      if (this._image) {
        this._updateOpacity();
      }

      return this;
    },
    setStyle: function setStyle(styleOpts) {
      if (styleOpts.opacity) {
        this.setOpacity(styleOpts.opacity);
      }

      return this;
    },
    // @method bringToFront(): this
    // Brings the layer to the top of all overlays.
    bringToFront: function bringToFront() {
      if (this._map) {
        toFront(this._image);
      }

      return this;
    },
    // @method bringToBack(): this
    // Brings the layer to the bottom of all overlays.
    bringToBack: function bringToBack() {
      if (this._map) {
        toBack(this._image);
      }

      return this;
    },
    // @method setUrl(url: String): this
    // Changes the URL of the image.
    setUrl: function setUrl(url) {
      this._url = url;

      if (this._image) {
        this._image.src = url;
      }

      return this;
    },
    // @method setBounds(bounds: LatLngBounds): this
    // Update the bounds that this ImageOverlay covers
    setBounds: function setBounds(bounds) {
      this._bounds = toLatLngBounds(bounds);

      if (this._map) {
        this._reset();
      }

      return this;
    },
    getEvents: function getEvents() {
      var events = {
        zoom: this._reset,
        viewreset: this._reset
      };

      if (this._zoomAnimated) {
        events.zoomanim = this._animateZoom;
      }

      return events;
    },
    // @method: setZIndex(value: Number) : this
    // Changes the [zIndex](#imageoverlay-zindex) of the image overlay.
    setZIndex: function setZIndex(value) {
      this.options.zIndex = value;

      this._updateZIndex();

      return this;
    },
    // @method getBounds(): LatLngBounds
    // Get the bounds that this ImageOverlay covers
    getBounds: function getBounds() {
      return this._bounds;
    },
    // @method getElement(): HTMLElement
    // Returns the instance of [`HTMLImageElement`](https://developer.mozilla.org/docs/Web/API/HTMLImageElement)
    // used by this overlay.
    getElement: function getElement() {
      return this._image;
    },
    _initImage: function _initImage() {
      var wasElementSupplied = this._url.tagName === 'IMG';
      var img = this._image = wasElementSupplied ? this._url : create$1('img');
      addClass(img, 'leaflet-image-layer');

      if (this._zoomAnimated) {
        addClass(img, 'leaflet-zoom-animated');
      }

      if (this.options.className) {
        addClass(img, this.options.className);
      }

      img.onselectstart = falseFn;
      img.onmousemove = falseFn; // @event load: Event
      // Fired when the ImageOverlay layer has loaded its image

      img.onload = bind(this.fire, this, 'load');
      img.onerror = bind(this._overlayOnError, this, 'error');

      if (this.options.crossOrigin) {
        img.crossOrigin = '';
      }

      if (this.options.zIndex) {
        this._updateZIndex();
      }

      if (wasElementSupplied) {
        this._url = img.src;
        return;
      }

      img.src = this._url;
      img.alt = this.options.alt;
    },
    _animateZoom: function _animateZoom(e) {
      var scale = this._map.getZoomScale(e.zoom),
          offset = this._map._latLngBoundsToNewLayerBounds(this._bounds, e.zoom, e.center).min;

      setTransform(this._image, offset, scale);
    },
    _reset: function _reset() {
      var image = this._image,
          bounds = new Bounds(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
          size = bounds.getSize();
      setPosition(image, bounds.min);
      image.style.width = size.x + 'px';
      image.style.height = size.y + 'px';
    },
    _updateOpacity: function _updateOpacity() {
      _setOpacity(this._image, this.options.opacity);
    },
    _updateZIndex: function _updateZIndex() {
      if (this._image && this.options.zIndex !== undefined && this.options.zIndex !== null) {
        this._image.style.zIndex = this.options.zIndex;
      }
    },
    _overlayOnError: function _overlayOnError() {
      // @event error: Event
      // Fired when the ImageOverlay layer has loaded its image
      this.fire('error');
      var errorUrl = this.options.errorOverlayUrl;

      if (errorUrl && this._url !== errorUrl) {
        this._url = errorUrl;
        this._image.src = errorUrl;
      }
    }
  }); // @factory L.imageOverlay(imageUrl: String, bounds: LatLngBounds, options?: ImageOverlay options)
  // Instantiates an image overlay object given the URL of the image and the
  // geographical bounds it is tied to.

  var imageOverlay = function imageOverlay(url, bounds, options) {
    return new ImageOverlay(url, bounds, options);
  };
  /*
   * @class VideoOverlay
   * @aka L.VideoOverlay
   * @inherits ImageOverlay
   *
   * Used to load and display a video player over specific bounds of the map. Extends `ImageOverlay`.
   *
   * A video overlay uses the [`<video>`](https://developer.mozilla.org/docs/Web/HTML/Element/video)
   * HTML5 element.
   *
   * @example
   *
   * ```js
   * var videoUrl = 'https://www.mapbox.com/bites/00188/patricia_nasa.webm',
   * 	videoBounds = [[ 32, -130], [ 13, -100]];
   * L.VideoOverlay(videoUrl, videoBounds ).addTo(map);
   * ```
   */


  var VideoOverlay = ImageOverlay.extend({
    // @section
    // @aka VideoOverlay options
    options: {
      // @option autoplay: Boolean = true
      // Whether the video starts playing automatically when loaded.
      autoplay: true,
      // @option loop: Boolean = true
      // Whether the video will loop back to the beginning when played.
      loop: true
    },
    _initImage: function _initImage() {
      var wasElementSupplied = this._url.tagName === 'VIDEO';
      var vid = this._image = wasElementSupplied ? this._url : create$1('video');
      addClass(vid, 'leaflet-image-layer');

      if (this._zoomAnimated) {
        addClass(vid, 'leaflet-zoom-animated');
      }

      vid.onselectstart = falseFn;
      vid.onmousemove = falseFn; // @event load: Event
      // Fired when the video has finished loading the first frame

      vid.onloadeddata = bind(this.fire, this, 'load');

      if (wasElementSupplied) {
        var sourceElements = vid.getElementsByTagName('source');
        var sources = [];

        for (var j = 0; j < sourceElements.length; j++) {
          sources.push(sourceElements[j].src);
        }

        this._url = sourceElements.length > 0 ? sources : [vid.src];
        return;
      }

      if (!isArray(this._url)) {
        this._url = [this._url];
      }

      vid.autoplay = !!this.options.autoplay;
      vid.loop = !!this.options.loop;

      for (var i = 0; i < this._url.length; i++) {
        var source = create$1('source');
        source.src = this._url[i];
        vid.appendChild(source);
      }
    } // @method getElement(): HTMLVideoElement
    // Returns the instance of [`HTMLVideoElement`](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement)
    // used by this overlay.

  }); // @factory L.videoOverlay(video: String|Array|HTMLVideoElement, bounds: LatLngBounds, options?: VideoOverlay options)
  // Instantiates an image overlay object given the URL of the video (or array of URLs, or even a video element) and the
  // geographical bounds it is tied to.

  function videoOverlay(video, bounds, options) {
    return new VideoOverlay(video, bounds, options);
  }
  /*
   * @class DivOverlay
   * @inherits Layer
   * @aka L.DivOverlay
   * Base model for L.Popup and L.Tooltip. Inherit from it for custom popup like plugins.
   */
  // @namespace DivOverlay


  var DivOverlay = Layer.extend({
    // @section
    // @aka DivOverlay options
    options: {
      // @option offset: Point = Point(0, 7)
      // The offset of the popup position. Useful to control the anchor
      // of the popup when opening it on some overlays.
      offset: [0, 7],
      // @option className: String = ''
      // A custom CSS class name to assign to the popup.
      className: '',
      // @option pane: String = 'popupPane'
      // `Map pane` where the popup will be added.
      pane: 'popupPane'
    },
    initialize: function initialize(options, source) {
      setOptions(this, options);
      this._source = source;
    },
    onAdd: function onAdd(map) {
      this._zoomAnimated = map._zoomAnimated;

      if (!this._container) {
        this._initLayout();
      }

      if (map._fadeAnimated) {
        _setOpacity(this._container, 0);
      }

      clearTimeout(this._removeTimeout);
      this.getPane().appendChild(this._container);
      this.update();

      if (map._fadeAnimated) {
        _setOpacity(this._container, 1);
      }

      this.bringToFront();
    },
    onRemove: function onRemove(map) {
      if (map._fadeAnimated) {
        _setOpacity(this._container, 0);

        this._removeTimeout = setTimeout(bind(_remove, undefined, this._container), 200);
      } else {
        _remove(this._container);
      }
    },
    // @namespace Popup
    // @method getLatLng: LatLng
    // Returns the geographical point of popup.
    getLatLng: function getLatLng() {
      return this._latlng;
    },
    // @method setLatLng(latlng: LatLng): this
    // Sets the geographical point where the popup will open.
    setLatLng: function setLatLng(latlng) {
      this._latlng = toLatLng(latlng);

      if (this._map) {
        this._updatePosition();

        this._adjustPan();
      }

      return this;
    },
    // @method getContent: String|HTMLElement
    // Returns the content of the popup.
    getContent: function getContent() {
      return this._content;
    },
    // @method setContent(htmlContent: String|HTMLElement|Function): this
    // Sets the HTML content of the popup. If a function is passed the source layer will be passed to the function. The function should return a `String` or `HTMLElement` to be used in the popup.
    setContent: function setContent(content) {
      this._content = content;
      this.update();
      return this;
    },
    // @method getElement: String|HTMLElement
    // Alias for [getContent()](#popup-getcontent)
    getElement: function getElement() {
      return this._container;
    },
    // @method update: null
    // Updates the popup content, layout and position. Useful for updating the popup after something inside changed, e.g. image loaded.
    update: function update() {
      if (!this._map) {
        return;
      }

      this._container.style.visibility = 'hidden';

      this._updateContent();

      this._updateLayout();

      this._updatePosition();

      this._container.style.visibility = '';

      this._adjustPan();
    },
    getEvents: function getEvents() {
      var events = {
        zoom: this._updatePosition,
        viewreset: this._updatePosition
      };

      if (this._zoomAnimated) {
        events.zoomanim = this._animateZoom;
      }

      return events;
    },
    // @method isOpen: Boolean
    // Returns `true` when the popup is visible on the map.
    isOpen: function isOpen() {
      return !!this._map && this._map.hasLayer(this);
    },
    // @method bringToFront: this
    // Brings this popup in front of other popups (in the same map pane).
    bringToFront: function bringToFront() {
      if (this._map) {
        toFront(this._container);
      }

      return this;
    },
    // @method bringToBack: this
    // Brings this popup to the back of other popups (in the same map pane).
    bringToBack: function bringToBack() {
      if (this._map) {
        toBack(this._container);
      }

      return this;
    },
    _updateContent: function _updateContent() {
      if (!this._content) {
        return;
      }

      var node = this._contentNode;
      var content = typeof this._content === 'function' ? this._content(this._source || this) : this._content;

      if (typeof content === 'string') {
        node.innerHTML = content;
      } else {
        while (node.hasChildNodes()) {
          node.removeChild(node.firstChild);
        }

        node.appendChild(content);
      }

      this.fire('contentupdate');
    },
    _updatePosition: function _updatePosition() {
      if (!this._map) {
        return;
      }

      var pos = this._map.latLngToLayerPoint(this._latlng),
          offset = toPoint(this.options.offset),
          anchor = this._getAnchor();

      if (this._zoomAnimated) {
        setPosition(this._container, pos.add(anchor));
      } else {
        offset = offset.add(pos).add(anchor);
      }

      var bottom = this._containerBottom = -offset.y,
          left = this._containerLeft = -Math.round(this._containerWidth / 2) + offset.x; // bottom position the popup in case the height of the popup changes (images loading etc)

      this._container.style.bottom = bottom + 'px';
      this._container.style.left = left + 'px';
    },
    _getAnchor: function _getAnchor() {
      return [0, 0];
    }
  });
  /*
   * @class Popup
   * @inherits DivOverlay
   * @aka L.Popup
   * Used to open popups in certain places of the map. Use [Map.openPopup](#map-openpopup) to
   * open popups while making sure that only one popup is open at one time
   * (recommended for usability), or use [Map.addLayer](#map-addlayer) to open as many as you want.
   *
   * @example
   *
   * If you want to just bind a popup to marker click and then open it, it's really easy:
   *
   * ```js
   * marker.bindPopup(popupContent).openPopup();
   * ```
   * Path overlays like polylines also have a `bindPopup` method.
   * Here's a more complicated way to open a popup on a map:
   *
   * ```js
   * var popup = L.popup()
   * 	.setLatLng(latlng)
   * 	.setContent('<p>Hello world!<br />This is a nice popup.</p>')
   * 	.openOn(map);
   * ```
   */
  // @namespace Popup

  var Popup = DivOverlay.extend({
    // @section
    // @aka Popup options
    options: {
      // @option autoWidth: Boolean = true
      // Set it to `false` if you don't want to compute
      // and set the width of a opened popup automatically.
      autoWidth: true,
      // @option maxWidth: Number = 300
      // Max width of the popup, in pixels.
      maxWidth: 300,
      // @option minWidth: Number = 50
      // Min width of the popup, in pixels.
      minWidth: 50,
      // @option maxHeight: Number = null
      // If set, creates a scrollable container of the given height
      // inside a popup if its content exceeds it.
      maxHeight: null,
      // @option autoPan: Boolean = true
      // Set it to `false` if you don't want the map to do panning animation
      // to fit the opened popup.
      autoPan: true,
      // @option autoPanPaddingTopLeft: Point = null
      // The margin between the popup and the top left corner of the map
      // view after autopanning was performed.
      autoPanPaddingTopLeft: null,
      // @option autoPanPaddingBottomRight: Point = null
      // The margin between the popup and the bottom right corner of the map
      // view after autopanning was performed.
      autoPanPaddingBottomRight: null,
      // @option autoPanPadding: Point = Point(5, 5)
      // Equivalent of setting both top left and bottom right autopan padding to the same value.
      autoPanPadding: [5, 5],
      // @option keepInView: Boolean = false
      // Set it to `true` if you want to prevent users from panning the popup
      // off of the screen while it is open.
      keepInView: false,
      // @option closeButton: Boolean = true
      // Controls the presence of a close button in the popup.
      closeButton: true,
      // @option autoClose: Boolean = true
      // Set it to `false` if you want to override the default behavior of
      // the popup closing when another popup is opened.
      autoClose: true,
      // @option closeOnEscapeKey: Boolean = true
      // Set it to `false` if you want to override the default behavior of
      // the ESC key for closing of the popup.
      closeOnEscapeKey: true,
      // @option closeOnClick: Boolean = *
      // Set it if you want to override the default behavior of the popup closing when user clicks
      // on the map. Defaults to the map's [`closePopupOnClick`](#map-closepopuponclick) option.
      // @option className: String = ''
      // A custom CSS class name to assign to the popup.
      className: ''
    },
    // @namespace Popup
    // @method openOn(map: Map): this
    // Adds the popup to the map and closes the previous one. The same as `map.openPopup(popup)`.
    openOn: function openOn(map) {
      map.openPopup(this);
      return this;
    },
    onAdd: function onAdd(map) {
      DivOverlay.prototype.onAdd.call(this, map); // @namespace Map
      // @section Popup events
      // @event popupopen: PopupEvent
      // Fired when a popup is opened in the map

      map.fire('popupopen', {
        popup: this
      });

      if (this._source) {
        // @namespace Layer
        // @section Popup events
        // @event popupopen: PopupEvent
        // Fired when a popup bound to this layer is opened
        this._source.fire('popupopen', {
          popup: this
        }, true); // For non-path layers, we toggle the popup when clicking
        // again the layer, so prevent the map to reopen it.


        if (!(this._source instanceof Path)) {
          this._source.on('preclick', stopPropagation);
        }
      }
    },
    onRemove: function onRemove(map) {
      DivOverlay.prototype.onRemove.call(this, map); // @namespace Map
      // @section Popup events
      // @event popupclose: PopupEvent
      // Fired when a popup in the map is closed

      map.fire('popupclose', {
        popup: this
      });

      if (this._source) {
        // @namespace Layer
        // @section Popup events
        // @event popupclose: PopupEvent
        // Fired when a popup bound to this layer is closed
        this._source.fire('popupclose', {
          popup: this
        }, true);

        if (!(this._source instanceof Path)) {
          this._source.off('preclick', stopPropagation);
        }
      }
    },
    getEvents: function getEvents() {
      var events = DivOverlay.prototype.getEvents.call(this);

      if (this.options.closeOnClick !== undefined ? this.options.closeOnClick : this._map.options.closePopupOnClick) {
        events.preclick = this._close;
      }

      if (this.options.keepInView) {
        events.moveend = this._adjustPan;
      }

      return events;
    },
    _close: function _close() {
      if (this._map) {
        this._map.closePopup(this);
      }
    },
    _initLayout: function _initLayout() {
      var prefix = 'leaflet-popup',
          container = this._container = create$1('div', prefix + ' ' + (this.options.className || '') + ' leaflet-zoom-animated');
      var wrapper = this._wrapper = create$1('div', prefix + '-content-wrapper', container);
      this._contentNode = create$1('div', prefix + '-content', wrapper);
      disableClickPropagation(wrapper);
      disableScrollPropagation(this._contentNode);
      on(wrapper, 'contextmenu', stopPropagation);
      this._tipContainer = create$1('div', prefix + '-tip-container', container);
      this._tip = create$1('div', prefix + '-tip', this._tipContainer);

      if (this.options.closeButton) {
        var closeButton = this._closeButton = create$1('a', prefix + '-close-button', container);
        closeButton.href = '#close';
        closeButton.innerHTML = '&#215;';
        on(closeButton, 'click', this._onCloseButtonClick, this);
      }
    },
    _updateLayout: function _updateLayout() {
      var container = this._contentNode,
          style = container.style;

      if (this.options.autoWidth) {
        style.width = '';
        style.whiteSpace = 'nowrap';
        var width = container.offsetWidth;
        width = Math.min(width, this.options.maxWidth);
        width = Math.max(width, this.options.minWidth);
        style.width = width + 1 + 'px';
        style.whiteSpace = '';
      }

      style.height = '';
      var height = container.offsetHeight,
          maxHeight = this.options.maxHeight,
          scrolledClass = 'leaflet-popup-scrolled';

      if (maxHeight && height > maxHeight) {
        style.height = maxHeight + 'px';
        addClass(container, scrolledClass);
      } else {
        removeClass(container, scrolledClass);
      }

      this._containerWidth = this._container.offsetWidth;
    },
    _animateZoom: function _animateZoom(e) {
      var pos = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center),
          anchor = this._getAnchor();

      setPosition(this._container, pos.add(anchor));
    },
    _adjustPan: function _adjustPan() {
      if (!this.options.autoPan || this._map._panAnim && this._map._panAnim._inProgress) {
        return;
      }

      var map = this._map,
          marginBottom = parseInt(getStyle(this._container, 'marginBottom'), 10) || 0,
          containerHeight = this._container.offsetHeight + marginBottom,
          containerWidth = this._containerWidth,
          layerPos = new Point(this._containerLeft, -containerHeight - this._containerBottom);

      layerPos._add(getPosition(this._container));

      var containerPos = map.layerPointToContainerPoint(layerPos),
          padding = toPoint(this.options.autoPanPadding),
          paddingTL = toPoint(this.options.autoPanPaddingTopLeft || padding),
          paddingBR = toPoint(this.options.autoPanPaddingBottomRight || padding),
          size = map.getSize(),
          dx = 0,
          dy = 0;

      if (containerPos.x + containerWidth + paddingBR.x > size.x) {
        // right
        dx = containerPos.x + containerWidth - size.x + paddingBR.x;
      }

      if (containerPos.x - dx - paddingTL.x < 0) {
        // left
        dx = containerPos.x - paddingTL.x;
      }

      if (containerPos.y + containerHeight + paddingBR.y > size.y) {
        // bottom
        dy = containerPos.y + containerHeight - size.y + paddingBR.y;
      }

      if (containerPos.y - dy - paddingTL.y < 0) {
        // top
        dy = containerPos.y - paddingTL.y;
      } // @namespace Map
      // @section Popup events
      // @event autopanstart: Event
      // Fired when the map starts autopanning when opening a popup.


      if (dx || dy) {
        map.fire('autopanstart').panBy([dx, dy]);
      }
    },
    _onCloseButtonClick: function _onCloseButtonClick(e) {
      this._close();

      stop(e);
    },
    _getAnchor: function _getAnchor() {
      // Where should we anchor the popup on the source layer?
      return toPoint(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
    }
  }); // @namespace Popup
  // @factory L.popup(options?: Popup options, source?: Layer)
  // Instantiates a `Popup` object given an optional `options` object that describes its appearance and location and an optional `source` object that is used to tag the popup with a reference to the Layer to which it refers.

  var popup = function popup(options, source) {
    return new Popup(options, source);
  };
  /* @namespace Map
   * @section Interaction Options
   * @option closePopupOnClick: Boolean = true
   * Set it to `false` if you don't want popups to close when user clicks the map.
   */


  Map.mergeOptions({
    closePopupOnClick: true
  }); // @namespace Map
  // @section Methods for Layers and Controls

  Map.include({
    // @method openPopup(popup: Popup): this
    // Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
    // @alternative
    // @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
    // Creates a popup with the specified content and options and opens it in the given point on a map.
    openPopup: function openPopup(popup, latlng, options) {
      if (!(popup instanceof Popup)) {
        popup = new Popup(options).setContent(popup);
      }

      if (latlng) {
        popup.setLatLng(latlng);
      }

      if (this.hasLayer(popup)) {
        return this;
      }

      if (this._popup && this._popup.options.autoClose) {
        this.closePopup();
      }

      this._popup = popup;
      return this.addLayer(popup);
    },
    // @method closePopup(popup?: Popup): this
    // Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
    closePopup: function closePopup(popup) {
      if (!popup || popup === this._popup) {
        popup = this._popup;
        this._popup = null;
      }

      if (popup) {
        this.removeLayer(popup);
      }

      return this;
    }
  });
  /*
   * @namespace Layer
   * @section Popup methods example
   *
   * All layers share a set of methods convenient for binding popups to it.
   *
   * ```js
   * var layer = L.Polygon(latlngs).bindPopup('Hi There!').addTo(map);
   * layer.openPopup();
   * layer.closePopup();
   * ```
   *
   * Popups will also be automatically opened when the layer is clicked on and closed when the layer is removed from the map or another popup is opened.
   */
  // @section Popup methods

  Layer.include({
    // @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
    // Binds a popup to the layer with the passed `content` and sets up the
    // necessary event listeners. If a `Function` is passed it will receive
    // the layer as the first argument and should return a `String` or `HTMLElement`.
    bindPopup: function bindPopup(content, options) {
      if (content instanceof Popup) {
        setOptions(content, options);
        this._popup = content;
        content._source = this;
      } else {
        if (!this._popup || options) {
          this._popup = new Popup(options, this);
        }

        this._popup.setContent(content);
      }

      if (!this._popupHandlersAdded) {
        this.on({
          click: this._openPopup,
          keypress: this._onKeyPress,
          remove: this.closePopup,
          move: this._movePopup
        });
        this._popupHandlersAdded = true;
      }

      return this;
    },
    // @method unbindPopup(): this
    // Removes the popup previously bound with `bindPopup`.
    unbindPopup: function unbindPopup() {
      if (this._popup) {
        this.off({
          click: this._openPopup,
          keypress: this._onKeyPress,
          remove: this.closePopup,
          move: this._movePopup
        });
        this._popupHandlersAdded = false;
        this._popup = null;
      }

      return this;
    },
    // @method openPopup(latlng?: LatLng): this
    // Opens the bound popup at the specified `latlng` or at the default popup anchor if no `latlng` is passed.
    openPopup: function openPopup(layer, latlng) {
      if (!(layer instanceof Layer)) {
        latlng = layer;
        layer = this;
      }

      if (layer instanceof FeatureGroup) {
        for (var id in this._layers) {
          layer = this._layers[id];
          break;
        }
      }

      if (!latlng) {
        latlng = layer.getCenter ? layer.getCenter() : layer.getLatLng();
      }

      if (this._popup && this._map) {
        // set popup source to this layer
        this._popup._source = layer; // update the popup (content, layout, ect...)

        this._popup.update(); // open the popup on the map


        this._map.openPopup(this._popup, latlng);
      }

      return this;
    },
    // @method closePopup(): this
    // Closes the popup bound to this layer if it is open.
    closePopup: function closePopup() {
      if (this._popup) {
        this._popup._close();
      }

      return this;
    },
    // @method togglePopup(): this
    // Opens or closes the popup bound to this layer depending on its current state.
    togglePopup: function togglePopup(target) {
      if (this._popup) {
        if (this._popup._map) {
          this.closePopup();
        } else {
          this.openPopup(target);
        }
      }

      return this;
    },
    // @method isPopupOpen(): boolean
    // Returns `true` if the popup bound to this layer is currently open.
    isPopupOpen: function isPopupOpen() {
      return this._popup ? this._popup.isOpen() : false;
    },
    // @method setPopupContent(content: String|HTMLElement|Popup): this
    // Sets the content of the popup bound to this layer.
    setPopupContent: function setPopupContent(content) {
      if (this._popup) {
        this._popup.setContent(content);
      }

      return this;
    },
    // @method getPopup(): Popup
    // Returns the popup bound to this layer.
    getPopup: function getPopup() {
      return this._popup;
    },
    _openPopup: function _openPopup(e) {
      var layer = e.layer || e.target;

      if (!this._popup) {
        return;
      }

      if (!this._map) {
        return;
      } // prevent map click


      stop(e); // if this inherits from Path its a vector and we can just
      // open the popup at the new location

      if (layer instanceof Path) {
        this.openPopup(e.layer || e.target, e.latlng);
        return;
      } // otherwise treat it like a marker and figure out
      // if we should toggle it open/closed


      if (this._map.hasLayer(this._popup) && this._popup._source === layer) {
        this.closePopup();
      } else {
        this.openPopup(layer, e.latlng);
      }
    },
    _movePopup: function _movePopup(e) {
      this._popup.setLatLng(e.latlng);
    },
    _onKeyPress: function _onKeyPress(e) {
      if (e.originalEvent.keyCode === 13) {
        this._openPopup(e);
      }
    }
  });
  /*
   * @class Tooltip
   * @inherits DivOverlay
   * @aka L.Tooltip
   * Used to display small texts on top of map layers.
   *
   * @example
   *
   * ```js
   * marker.bindTooltip("my tooltip text").openTooltip();
   * ```
   * Note about tooltip offset. Leaflet takes two options in consideration
   * for computing tooltip offsetting:
   * - the `offset` Tooltip option: it defaults to [0, 0], and it's specific to one tooltip.
   *   Add a positive x offset to move the tooltip to the right, and a positive y offset to
   *   move it to the bottom. Negatives will move to the left and top.
   * - the `tooltipAnchor` Icon option: this will only be considered for Marker. You
   *   should adapt this value if you use a custom icon.
   */
  // @namespace Tooltip

  var Tooltip = DivOverlay.extend({
    // @section
    // @aka Tooltip options
    options: {
      // @option pane: String = 'tooltipPane'
      // `Map pane` where the tooltip will be added.
      pane: 'tooltipPane',
      // @option offset: Point = Point(0, 0)
      // Optional offset of the tooltip position.
      offset: [0, 0],
      // @option direction: String = 'auto'
      // Direction where to open the tooltip. Possible values are: `right`, `left`,
      // `top`, `bottom`, `center`, `auto`.
      // `auto` will dynamically switch between `right` and `left` according to the tooltip
      // position on the map.
      direction: 'auto',
      // @option permanent: Boolean = false
      // Whether to open the tooltip permanently or only on mouseover.
      permanent: false,
      // @option sticky: Boolean = false
      // If true, the tooltip will follow the mouse instead of being fixed at the feature center.
      sticky: false,
      // @option interactive: Boolean = false
      // If true, the tooltip will listen to the feature events.
      interactive: false,
      // @option opacity: Number = 0.9
      // Tooltip container opacity.
      opacity: 0.9
    },
    onAdd: function onAdd(map) {
      DivOverlay.prototype.onAdd.call(this, map);
      this.setOpacity(this.options.opacity); // @namespace Map
      // @section Tooltip events
      // @event tooltipopen: TooltipEvent
      // Fired when a tooltip is opened in the map.

      map.fire('tooltipopen', {
        tooltip: this
      });

      if (this._source) {
        // @namespace Layer
        // @section Tooltip events
        // @event tooltipopen: TooltipEvent
        // Fired when a tooltip bound to this layer is opened.
        this._source.fire('tooltipopen', {
          tooltip: this
        }, true);
      }
    },
    onRemove: function onRemove(map) {
      DivOverlay.prototype.onRemove.call(this, map); // @namespace Map
      // @section Tooltip events
      // @event tooltipclose: TooltipEvent
      // Fired when a tooltip in the map is closed.

      map.fire('tooltipclose', {
        tooltip: this
      });

      if (this._source) {
        // @namespace Layer
        // @section Tooltip events
        // @event tooltipclose: TooltipEvent
        // Fired when a tooltip bound to this layer is closed.
        this._source.fire('tooltipclose', {
          tooltip: this
        }, true);
      }
    },
    getEvents: function getEvents() {
      var events = DivOverlay.prototype.getEvents.call(this);

      if (touch && !this.options.permanent) {
        events.preclick = this._close;
      }

      return events;
    },
    _close: function _close() {
      if (this._map) {
        this._map.closeTooltip(this);
      }
    },
    _initLayout: function _initLayout() {
      var prefix = 'leaflet-tooltip',
          className = prefix + ' ' + (this.options.className || '') + ' leaflet-zoom-' + (this._zoomAnimated ? 'animated' : 'hide');
      this._contentNode = this._container = create$1('div', className);
    },
    _updateLayout: function _updateLayout() {},
    _adjustPan: function _adjustPan() {},
    _setPosition: function _setPosition(pos) {
      var map = this._map,
          container = this._container,
          centerPoint = map.latLngToContainerPoint(map.getCenter()),
          tooltipPoint = map.layerPointToContainerPoint(pos),
          direction = this.options.direction,
          tooltipWidth = container.offsetWidth,
          tooltipHeight = container.offsetHeight,
          offset = toPoint(this.options.offset),
          anchor = this._getAnchor();

      if (direction === 'top') {
        pos = pos.add(toPoint(-tooltipWidth / 2 + offset.x, -tooltipHeight + offset.y + anchor.y, true));
      } else if (direction === 'bottom') {
        pos = pos.subtract(toPoint(tooltipWidth / 2 - offset.x, -offset.y, true));
      } else if (direction === 'center') {
        pos = pos.subtract(toPoint(tooltipWidth / 2 + offset.x, tooltipHeight / 2 - anchor.y + offset.y, true));
      } else if (direction === 'right' || direction === 'auto' && tooltipPoint.x < centerPoint.x) {
        direction = 'right';
        pos = pos.add(toPoint(offset.x + anchor.x, anchor.y - tooltipHeight / 2 + offset.y, true));
      } else {
        direction = 'left';
        pos = pos.subtract(toPoint(tooltipWidth + anchor.x - offset.x, tooltipHeight / 2 - anchor.y - offset.y, true));
      }

      removeClass(container, 'leaflet-tooltip-right');
      removeClass(container, 'leaflet-tooltip-left');
      removeClass(container, 'leaflet-tooltip-top');
      removeClass(container, 'leaflet-tooltip-bottom');
      addClass(container, 'leaflet-tooltip-' + direction);
      setPosition(container, pos);
    },
    _updatePosition: function _updatePosition() {
      var pos = this._map.latLngToLayerPoint(this._latlng);

      this._setPosition(pos);
    },
    setOpacity: function setOpacity(opacity) {
      this.options.opacity = opacity;

      if (this._container) {
        _setOpacity(this._container, opacity);
      }
    },
    _animateZoom: function _animateZoom(e) {
      var pos = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center);

      this._setPosition(pos);
    },
    _getAnchor: function _getAnchor() {
      // Where should we anchor the tooltip on the source layer?
      return toPoint(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
    }
  }); // @namespace Tooltip
  // @factory L.tooltip(options?: Tooltip options, source?: Layer)
  // Instantiates a Tooltip object given an optional `options` object that describes its appearance and location and an optional `source` object that is used to tag the tooltip with a reference to the Layer to which it refers.

  var tooltip = function tooltip(options, source) {
    return new Tooltip(options, source);
  }; // @namespace Map
  // @section Methods for Layers and Controls


  Map.include({
    // @method openTooltip(tooltip: Tooltip): this
    // Opens the specified tooltip.
    // @alternative
    // @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
    // Creates a tooltip with the specified content and options and open it.
    openTooltip: function openTooltip(tooltip, latlng, options) {
      if (!(tooltip instanceof Tooltip)) {
        tooltip = new Tooltip(options).setContent(tooltip);
      }

      if (latlng) {
        tooltip.setLatLng(latlng);
      }

      if (this.hasLayer(tooltip)) {
        return this;
      }

      return this.addLayer(tooltip);
    },
    // @method closeTooltip(tooltip?: Tooltip): this
    // Closes the tooltip given as parameter.
    closeTooltip: function closeTooltip(tooltip) {
      if (tooltip) {
        this.removeLayer(tooltip);
      }

      return this;
    }
  });
  /*
   * @namespace Layer
   * @section Tooltip methods example
   *
   * All layers share a set of methods convenient for binding tooltips to it.
   *
   * ```js
   * var layer = L.Polygon(latlngs).bindTooltip('Hi There!').addTo(map);
   * layer.openTooltip();
   * layer.closeTooltip();
   * ```
   */
  // @section Tooltip methods

  Layer.include({
    // @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
    // Binds a tooltip to the layer with the passed `content` and sets up the
    // necessary event listeners. If a `Function` is passed it will receive
    // the layer as the first argument and should return a `String` or `HTMLElement`.
    bindTooltip: function bindTooltip(content, options) {
      if (content instanceof Tooltip) {
        setOptions(content, options);
        this._tooltip = content;
        content._source = this;
      } else {
        if (!this._tooltip || options) {
          this._tooltip = new Tooltip(options, this);
        }

        this._tooltip.setContent(content);
      }

      this._initTooltipInteractions();

      if (this._tooltip.options.permanent && this._map && this._map.hasLayer(this)) {
        this.openTooltip();
      }

      return this;
    },
    // @method unbindTooltip(): this
    // Removes the tooltip previously bound with `bindTooltip`.
    unbindTooltip: function unbindTooltip() {
      if (this._tooltip) {
        this._initTooltipInteractions(true);

        this.closeTooltip();
        this._tooltip = null;
      }

      return this;
    },
    _initTooltipInteractions: function _initTooltipInteractions(remove$$1) {
      if (!remove$$1 && this._tooltipHandlersAdded) {
        return;
      }

      var onOff = remove$$1 ? 'off' : 'on',
          events = {
        remove: this.closeTooltip,
        move: this._moveTooltip
      };

      if (!this._tooltip.options.permanent) {
        events.mouseover = this._openTooltip;
        events.mouseout = this.closeTooltip;

        if (this._tooltip.options.sticky) {
          events.mousemove = this._moveTooltip;
        }

        if (touch) {
          events.click = this._openTooltip;
        }
      } else {
        events.add = this._openTooltip;
      }

      this[onOff](events);
      this._tooltipHandlersAdded = !remove$$1;
    },
    // @method openTooltip(latlng?: LatLng): this
    // Opens the bound tooltip at the specified `latlng` or at the default tooltip anchor if no `latlng` is passed.
    openTooltip: function openTooltip(layer, latlng) {
      if (!(layer instanceof Layer)) {
        latlng = layer;
        layer = this;
      }

      if (layer instanceof FeatureGroup) {
        for (var id in this._layers) {
          layer = this._layers[id];
          break;
        }
      }

      if (!latlng) {
        latlng = layer.getCenter ? layer.getCenter() : layer.getLatLng();
      }

      if (this._tooltip && this._map) {
        // set tooltip source to this layer
        this._tooltip._source = layer; // update the tooltip (content, layout, ect...)

        this._tooltip.update(); // open the tooltip on the map


        this._map.openTooltip(this._tooltip, latlng); // Tooltip container may not be defined if not permanent and never
        // opened.


        if (this._tooltip.options.interactive && this._tooltip._container) {
          addClass(this._tooltip._container, 'leaflet-clickable');
          this.addInteractiveTarget(this._tooltip._container);
        }
      }

      return this;
    },
    // @method closeTooltip(): this
    // Closes the tooltip bound to this layer if it is open.
    closeTooltip: function closeTooltip() {
      if (this._tooltip) {
        this._tooltip._close();

        if (this._tooltip.options.interactive && this._tooltip._container) {
          removeClass(this._tooltip._container, 'leaflet-clickable');
          this.removeInteractiveTarget(this._tooltip._container);
        }
      }

      return this;
    },
    // @method toggleTooltip(): this
    // Opens or closes the tooltip bound to this layer depending on its current state.
    toggleTooltip: function toggleTooltip(target) {
      if (this._tooltip) {
        if (this._tooltip._map) {
          this.closeTooltip();
        } else {
          this.openTooltip(target);
        }
      }

      return this;
    },
    // @method isTooltipOpen(): boolean
    // Returns `true` if the tooltip bound to this layer is currently open.
    isTooltipOpen: function isTooltipOpen() {
      return this._tooltip.isOpen();
    },
    // @method setTooltipContent(content: String|HTMLElement|Tooltip): this
    // Sets the content of the tooltip bound to this layer.
    setTooltipContent: function setTooltipContent(content) {
      if (this._tooltip) {
        this._tooltip.setContent(content);
      }

      return this;
    },
    // @method getTooltip(): Tooltip
    // Returns the tooltip bound to this layer.
    getTooltip: function getTooltip() {
      return this._tooltip;
    },
    _openTooltip: function _openTooltip(e) {
      var layer = e.layer || e.target;

      if (!this._tooltip || !this._map) {
        return;
      }

      this.openTooltip(layer, this._tooltip.options.sticky ? e.latlng : undefined);
    },
    _moveTooltip: function _moveTooltip(e) {
      var latlng = e.latlng,
          containerPoint,
          layerPoint;

      if (this._tooltip.options.sticky && e.originalEvent) {
        containerPoint = this._map.mouseEventToContainerPoint(e.originalEvent);
        layerPoint = this._map.containerPointToLayerPoint(containerPoint);
        latlng = this._map.layerPointToLatLng(layerPoint);
      }

      this._tooltip.setLatLng(latlng);
    }
  });
  /*
   * @class DivIcon
   * @aka L.DivIcon
   * @inherits Icon
   *
   * Represents a lightweight icon for markers that uses a simple `<div>`
   * element instead of an image. Inherits from `Icon` but ignores the `iconUrl` and shadow options.
   *
   * @example
   * ```js
   * var myIcon = L.divIcon({className: 'my-div-icon'});
   * // you can set .my-div-icon styles in CSS
   *
   * L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);
   * ```
   *
   * By default, it has a 'leaflet-div-icon' CSS class and is styled as a little white square with a shadow.
   */

  var DivIcon = Icon.extend({
    options: {
      // @section
      // @aka DivIcon options
      iconSize: [12, 12],
      // also can be set through CSS
      // iconAnchor: (Point),
      // popupAnchor: (Point),
      // @option html: String = ''
      // Custom HTML code to put inside the div element, empty by default.
      html: false,
      // @option bgPos: Point = [0, 0]
      // Optional relative position of the background, in pixels
      bgPos: null,
      className: 'leaflet-div-icon'
    },
    createIcon: function createIcon(oldIcon) {
      var div = oldIcon && oldIcon.tagName === 'DIV' ? oldIcon : document.createElement('div'),
          options = this.options;
      div.innerHTML = options.html !== false ? options.html : '';

      if (options.bgPos) {
        var bgPos = toPoint(options.bgPos);
        div.style.backgroundPosition = -bgPos.x + 'px ' + -bgPos.y + 'px';
      }

      this._setIconStyles(div, 'icon');

      return div;
    },
    createShadow: function createShadow() {
      return null;
    }
  }); // @factory L.divIcon(options: DivIcon options)
  // Creates a `DivIcon` instance with the given options.

  function divIcon(options) {
    return new DivIcon(options);
  }

  Icon.Default = IconDefault;
  /*
   * @class GridLayer
   * @inherits Layer
   * @aka L.GridLayer
   *
   * Generic class for handling a tiled grid of HTML elements. This is the base class for all tile layers and replaces `TileLayer.Canvas`.
   * GridLayer can be extended to create a tiled grid of HTML elements like `<canvas>`, `<img>` or `<div>`. GridLayer will handle creating and animating these DOM elements for you.
   *
   *
   * @section Synchronous usage
   * @example
   *
   * To create a custom layer, extend GridLayer and implement the `createTile()` method, which will be passed a `Point` object with the `x`, `y`, and `z` (zoom level) coordinates to draw your tile.
   *
   * ```js
   * var CanvasLayer = L.GridLayer.extend({
   *     createTile: function(coords){
   *         // create a <canvas> element for drawing
   *         var tile = L.DomUtil.create('canvas', 'leaflet-tile');
   *
   *         // setup tile width and height according to the options
   *         var size = this.getTileSize();
   *         tile.width = size.x;
   *         tile.height = size.y;
   *
   *         // get a canvas context and draw something on it using coords.x, coords.y and coords.z
   *         var ctx = tile.getContext('2d');
   *
   *         // return the tile so it can be rendered on screen
   *         return tile;
   *     }
   * });
   * ```
   *
   * @section Asynchronous usage
   * @example
   *
   * Tile creation can also be asynchronous, this is useful when using a third-party drawing library. Once the tile is finished drawing it can be passed to the `done()` callback.
   *
   * ```js
   * var CanvasLayer = L.GridLayer.extend({
   *     createTile: function(coords, done){
   *         var error;
   *
   *         // create a <canvas> element for drawing
   *         var tile = L.DomUtil.create('canvas', 'leaflet-tile');
   *
   *         // setup tile width and height according to the options
   *         var size = this.getTileSize();
   *         tile.width = size.x;
   *         tile.height = size.y;
   *
   *         // draw something asynchronously and pass the tile to the done() callback
   *         setTimeout(function() {
   *             done(error, tile);
   *         }, 1000);
   *
   *         return tile;
   *     }
   * });
   * ```
   *
   * @section
   */

  var GridLayer = Layer.extend({
    // @section
    // @aka GridLayer options
    options: {
      // @option tileSize: Number|Point = 256
      // Width and height of tiles in the grid. Use a number if width and height are equal, or `L.point(width, height)` otherwise.
      tileSize: 256,
      // @option opacity: Number = 1.0
      // Opacity of the tiles. Can be used in the `createTile()` function.
      opacity: 1,
      // @option updateWhenIdle: Boolean = (depends)
      // Load new tiles only when panning ends.
      // `true` by default on mobile browsers, in order to avoid too many requests and keep smooth navigation.
      // `false` otherwise in order to display new tiles _during_ panning, since it is easy to pan outside the
      // [`keepBuffer`](#gridlayer-keepbuffer) option in desktop browsers.
      updateWhenIdle: mobile,
      // @option updateWhenZooming: Boolean = true
      // By default, a smooth zoom animation (during a [touch zoom](#map-touchzoom) or a [`flyTo()`](#map-flyto)) will update grid layers every integer zoom level. Setting this option to `false` will update the grid layer only when the smooth animation ends.
      updateWhenZooming: true,
      // @option updateInterval: Number = 200
      // Tiles will not update more than once every `updateInterval` milliseconds when panning.
      updateInterval: 200,
      // @option zIndex: Number = 1
      // The explicit zIndex of the tile layer.
      zIndex: 1,
      // @option bounds: LatLngBounds = undefined
      // If set, tiles will only be loaded inside the set `LatLngBounds`.
      bounds: null,
      // @option minZoom: Number = 0
      // The minimum zoom level down to which this layer will be displayed (inclusive).
      minZoom: 0,
      // @option maxZoom: Number = undefined
      // The maximum zoom level up to which this layer will be displayed (inclusive).
      maxZoom: undefined,
      // @option maxNativeZoom: Number = undefined
      // Maximum zoom number the tile source has available. If it is specified,
      // the tiles on all zoom levels higher than `maxNativeZoom` will be loaded
      // from `maxNativeZoom` level and auto-scaled.
      maxNativeZoom: undefined,
      // @option minNativeZoom: Number = undefined
      // Minimum zoom number the tile source has available. If it is specified,
      // the tiles on all zoom levels lower than `minNativeZoom` will be loaded
      // from `minNativeZoom` level and auto-scaled.
      minNativeZoom: undefined,
      // @option noWrap: Boolean = false
      // Whether the layer is wrapped around the antimeridian. If `true`, the
      // GridLayer will only be displayed once at low zoom levels. Has no
      // effect when the [map CRS](#map-crs) doesn't wrap around. Can be used
      // in combination with [`bounds`](#gridlayer-bounds) to prevent requesting
      // tiles outside the CRS limits.
      noWrap: false,
      // @option pane: String = 'tilePane'
      // `Map pane` where the grid layer will be added.
      pane: 'tilePane',
      // @option className: String = ''
      // A custom class name to assign to the tile layer. Empty by default.
      className: '',
      // @option keepBuffer: Number = 2
      // When panning the map, keep this many rows and columns of tiles before unloading them.
      keepBuffer: 2
    },
    initialize: function initialize(options) {
      setOptions(this, options);
    },
    onAdd: function onAdd() {
      this._initContainer();

      this._levels = {};
      this._tiles = {};

      this._resetView();

      this._update();
    },
    beforeAdd: function beforeAdd(map) {
      map._addZoomLimit(this);
    },
    onRemove: function onRemove(map) {
      this._removeAllTiles();

      _remove(this._container);

      map._removeZoomLimit(this);

      this._container = null;
      this._tileZoom = undefined;
    },
    // @method bringToFront: this
    // Brings the tile layer to the top of all tile layers.
    bringToFront: function bringToFront() {
      if (this._map) {
        toFront(this._container);

        this._setAutoZIndex(Math.max);
      }

      return this;
    },
    // @method bringToBack: this
    // Brings the tile layer to the bottom of all tile layers.
    bringToBack: function bringToBack() {
      if (this._map) {
        toBack(this._container);

        this._setAutoZIndex(Math.min);
      }

      return this;
    },
    // @method getContainer: HTMLElement
    // Returns the HTML element that contains the tiles for this layer.
    getContainer: function getContainer() {
      return this._container;
    },
    // @method setOpacity(opacity: Number): this
    // Changes the [opacity](#gridlayer-opacity) of the grid layer.
    setOpacity: function setOpacity(opacity) {
      this.options.opacity = opacity;

      this._updateOpacity();

      return this;
    },
    // @method setZIndex(zIndex: Number): this
    // Changes the [zIndex](#gridlayer-zindex) of the grid layer.
    setZIndex: function setZIndex(zIndex) {
      this.options.zIndex = zIndex;

      this._updateZIndex();

      return this;
    },
    // @method isLoading: Boolean
    // Returns `true` if any tile in the grid layer has not finished loading.
    isLoading: function isLoading() {
      return this._loading;
    },
    // @method redraw: this
    // Causes the layer to clear all the tiles and request them again.
    redraw: function redraw() {
      if (this._map) {
        this._removeAllTiles();

        this._update();
      }

      return this;
    },
    getEvents: function getEvents() {
      var events = {
        viewprereset: this._invalidateAll,
        viewreset: this._resetView,
        zoom: this._resetView,
        moveend: this._onMoveEnd
      };

      if (!this.options.updateWhenIdle) {
        // update tiles on move, but not more often than once per given interval
        if (!this._onMove) {
          this._onMove = throttle(this._onMoveEnd, this.options.updateInterval, this);
        }

        events.move = this._onMove;
      }

      if (this._zoomAnimated) {
        events.zoomanim = this._animateZoom;
      }

      return events;
    },
    // @section Extension methods
    // Layers extending `GridLayer` shall reimplement the following method.
    // @method createTile(coords: Object, done?: Function): HTMLElement
    // Called only internally, must be overridden by classes extending `GridLayer`.
    // Returns the `HTMLElement` corresponding to the given `coords`. If the `done` callback
    // is specified, it must be called when the tile has finished loading and drawing.
    createTile: function createTile() {
      return document.createElement('div');
    },
    // @section
    // @method getTileSize: Point
    // Normalizes the [tileSize option](#gridlayer-tilesize) into a point. Used by the `createTile()` method.
    getTileSize: function getTileSize() {
      var s = this.options.tileSize;
      return s instanceof Point ? s : new Point(s, s);
    },
    _updateZIndex: function _updateZIndex() {
      if (this._container && this.options.zIndex !== undefined && this.options.zIndex !== null) {
        this._container.style.zIndex = this.options.zIndex;
      }
    },
    _setAutoZIndex: function _setAutoZIndex(compare) {
      // go through all other layers of the same pane, set zIndex to max + 1 (front) or min - 1 (back)
      var layers = this.getPane().children,
          edgeZIndex = -compare(-Infinity, Infinity); // -Infinity for max, Infinity for min

      for (var i = 0, len = layers.length, zIndex; i < len; i++) {
        zIndex = layers[i].style.zIndex;

        if (layers[i] !== this._container && zIndex) {
          edgeZIndex = compare(edgeZIndex, +zIndex);
        }
      }

      if (isFinite(edgeZIndex)) {
        this.options.zIndex = edgeZIndex + compare(-1, 1);

        this._updateZIndex();
      }
    },
    _updateOpacity: function _updateOpacity() {
      if (!this._map) {
        return;
      } // IE doesn't inherit filter opacity properly, so we're forced to set it on tiles


      if (ielt9) {
        return;
      }

      _setOpacity(this._container, this.options.opacity);

      var now = +new Date(),
          nextFrame = false,
          willPrune = false;

      for (var key in this._tiles) {
        var tile = this._tiles[key];

        if (!tile.current || !tile.loaded) {
          continue;
        }

        var fade = Math.min(1, (now - tile.loaded) / 200);

        _setOpacity(tile.el, fade);

        if (fade < 1) {
          nextFrame = true;
        } else {
          if (tile.active) {
            willPrune = true;
          } else {
            this._onOpaqueTile(tile);
          }

          tile.active = true;
        }
      }

      if (willPrune && !this._noPrune) {
        this._pruneTiles();
      }

      if (nextFrame) {
        cancelAnimFrame(this._fadeFrame);
        this._fadeFrame = requestAnimFrame(this._updateOpacity, this);
      }
    },
    _onOpaqueTile: falseFn,
    _initContainer: function _initContainer() {
      if (this._container) {
        return;
      }

      this._container = create$1('div', 'leaflet-layer ' + (this.options.className || ''));

      this._updateZIndex();

      if (this.options.opacity < 1) {
        this._updateOpacity();
      }

      this.getPane().appendChild(this._container);
    },
    _updateLevels: function _updateLevels() {
      var zoom = this._tileZoom,
          maxZoom = this.options.maxZoom;

      if (zoom === undefined) {
        return undefined;
      }

      for (var z in this._levels) {
        if (this._levels[z].el.children.length || z === zoom) {
          this._levels[z].el.style.zIndex = maxZoom - Math.abs(zoom - z);

          this._onUpdateLevel(z);
        } else {
          _remove(this._levels[z].el);

          this._removeTilesAtZoom(z);

          this._onRemoveLevel(z);

          delete this._levels[z];
        }
      }

      var level = this._levels[zoom],
          map = this._map;

      if (!level) {
        level = this._levels[zoom] = {};
        level.el = create$1('div', 'leaflet-tile-container leaflet-zoom-animated', this._container);
        level.el.style.zIndex = maxZoom;
        level.origin = map.project(map.unproject(map.getPixelOrigin()), zoom).round();
        level.zoom = zoom;

        this._setZoomTransform(level, map.getCenter(), map.getZoom()); // force the browser to consider the newly added element for transition


        falseFn(level.el.offsetWidth);

        this._onCreateLevel(level);
      }

      this._level = level;
      return level;
    },
    _onUpdateLevel: falseFn,
    _onRemoveLevel: falseFn,
    _onCreateLevel: falseFn,
    _pruneTiles: function _pruneTiles() {
      if (!this._map) {
        return;
      }

      var key, tile;

      var zoom = this._map.getZoom();

      if (zoom > this.options.maxZoom || zoom < this.options.minZoom) {
        this._removeAllTiles();

        return;
      }

      for (key in this._tiles) {
        tile = this._tiles[key];
        tile.retain = tile.current;
      }

      for (key in this._tiles) {
        tile = this._tiles[key];

        if (tile.current && !tile.active) {
          var coords = tile.coords;

          if (!this._retainParent(coords.x, coords.y, coords.z, coords.z - 5)) {
            this._retainChildren(coords.x, coords.y, coords.z, coords.z + 2);
          }
        }
      }

      for (key in this._tiles) {
        if (!this._tiles[key].retain) {
          this._removeTile(key);
        }
      }
    },
    _removeTilesAtZoom: function _removeTilesAtZoom(zoom) {
      for (var key in this._tiles) {
        if (this._tiles[key].coords.z !== zoom) {
          continue;
        }

        this._removeTile(key);
      }
    },
    _removeAllTiles: function _removeAllTiles() {
      for (var key in this._tiles) {
        this._removeTile(key);
      }
    },
    _invalidateAll: function _invalidateAll() {
      for (var z in this._levels) {
        _remove(this._levels[z].el);

        this._onRemoveLevel(z);

        delete this._levels[z];
      }

      this._removeAllTiles();

      this._tileZoom = undefined;
    },
    _retainParent: function _retainParent(x, y, z, minZoom) {
      var x2 = Math.floor(x / 2),
          y2 = Math.floor(y / 2),
          z2 = z - 1,
          coords2 = new Point(+x2, +y2);
      coords2.z = +z2;

      var key = this._tileCoordsToKey(coords2),
          tile = this._tiles[key];

      if (tile && tile.active) {
        tile.retain = true;
        return true;
      } else if (tile && tile.loaded) {
        tile.retain = true;
      }

      if (z2 > minZoom) {
        return this._retainParent(x2, y2, z2, minZoom);
      }

      return false;
    },
    _retainChildren: function _retainChildren(x, y, z, maxZoom) {
      for (var i = 2 * x; i < 2 * x + 2; i++) {
        for (var j = 2 * y; j < 2 * y + 2; j++) {
          var coords = new Point(i, j);
          coords.z = z + 1;

          var key = this._tileCoordsToKey(coords),
              tile = this._tiles[key];

          if (tile && tile.active) {
            tile.retain = true;
            continue;
          } else if (tile && tile.loaded) {
            tile.retain = true;
          }

          if (z + 1 < maxZoom) {
            this._retainChildren(i, j, z + 1, maxZoom);
          }
        }
      }
    },
    _resetView: function _resetView(e) {
      var animating = e && (e.pinch || e.flyTo);

      this._setView(this._map.getCenter(), this._map.getZoom(), animating, animating);
    },
    _animateZoom: function _animateZoom(e) {
      this._setView(e.center, e.zoom, true, e.noUpdate);
    },
    _clampZoom: function _clampZoom(zoom) {
      var options = this.options;

      if (undefined !== options.minNativeZoom && zoom < options.minNativeZoom) {
        return options.minNativeZoom;
      }

      if (undefined !== options.maxNativeZoom && options.maxNativeZoom < zoom) {
        return options.maxNativeZoom;
      }

      return zoom;
    },
    _setView: function _setView(center, zoom, noPrune, noUpdate) {
      var tileZoom = this._clampZoom(Math.round(zoom));

      if (this.options.maxZoom !== undefined && tileZoom > this.options.maxZoom || this.options.minZoom !== undefined && tileZoom < this.options.minZoom) {
        tileZoom = undefined;
      }

      var tileZoomChanged = this.options.updateWhenZooming && tileZoom !== this._tileZoom;

      if (!noUpdate || tileZoomChanged) {
        this._tileZoom = tileZoom;

        if (this._abortLoading) {
          this._abortLoading();
        }

        this._updateLevels();

        this._resetGrid();

        if (tileZoom !== undefined) {
          this._update(center);
        }

        if (!noPrune) {
          this._pruneTiles();
        } // Flag to prevent _updateOpacity from pruning tiles during
        // a zoom anim or a pinch gesture


        this._noPrune = !!noPrune;
      }

      this._setZoomTransforms(center, zoom);
    },
    _setZoomTransforms: function _setZoomTransforms(center, zoom) {
      for (var i in this._levels) {
        this._setZoomTransform(this._levels[i], center, zoom);
      }
    },
    _setZoomTransform: function _setZoomTransform(level, center, zoom) {
      var scale = this._map.getZoomScale(zoom, level.zoom),
          translate = level.origin.multiplyBy(scale).subtract(this._map._getNewPixelOrigin(center, zoom)).round();

      if (any3d) {
        setTransform(level.el, translate, scale);
      } else {
        setPosition(level.el, translate);
      }
    },
    _resetGrid: function _resetGrid() {
      var map = this._map,
          crs = map.options.crs,
          tileSize = this._tileSize = this.getTileSize(),
          tileZoom = this._tileZoom;

      var bounds = this._map.getPixelWorldBounds(this._tileZoom);

      if (bounds) {
        this._globalTileRange = this._pxBoundsToTileRange(bounds);
      }

      this._wrapX = crs.wrapLng && !this.options.noWrap && [Math.floor(map.project([0, crs.wrapLng[0]], tileZoom).x / tileSize.x), Math.ceil(map.project([0, crs.wrapLng[1]], tileZoom).x / tileSize.y)];
      this._wrapY = crs.wrapLat && !this.options.noWrap && [Math.floor(map.project([crs.wrapLat[0], 0], tileZoom).y / tileSize.x), Math.ceil(map.project([crs.wrapLat[1], 0], tileZoom).y / tileSize.y)];
    },
    _onMoveEnd: function _onMoveEnd() {
      if (!this._map || this._map._animatingZoom) {
        return;
      }

      this._update();
    },
    _getTiledPixelBounds: function _getTiledPixelBounds(center) {
      var map = this._map,
          mapZoom = map._animatingZoom ? Math.max(map._animateToZoom, map.getZoom()) : map.getZoom(),
          scale = map.getZoomScale(mapZoom, this._tileZoom),
          pixelCenter = map.project(center, this._tileZoom).floor(),
          halfSize = map.getSize().divideBy(scale * 2);
      return new Bounds(pixelCenter.subtract(halfSize), pixelCenter.add(halfSize));
    },
    // Private method to load tiles in the grid's active zoom level according to map bounds
    _update: function _update(center) {
      var map = this._map;

      if (!map) {
        return;
      }

      var zoom = this._clampZoom(map.getZoom());

      if (center === undefined) {
        center = map.getCenter();
      }

      if (this._tileZoom === undefined) {
        return;
      } // if out of minzoom/maxzoom


      var pixelBounds = this._getTiledPixelBounds(center),
          tileRange = this._pxBoundsToTileRange(pixelBounds),
          tileCenter = tileRange.getCenter(),
          queue = [],
          margin = this.options.keepBuffer,
          noPruneRange = new Bounds(tileRange.getBottomLeft().subtract([margin, -margin]), tileRange.getTopRight().add([margin, -margin])); // Sanity check: panic if the tile range contains Infinity somewhere.


      if (!(isFinite(tileRange.min.x) && isFinite(tileRange.min.y) && isFinite(tileRange.max.x) && isFinite(tileRange.max.y))) {
        throw new Error('Attempted to load an infinite number of tiles');
      }

      for (var key in this._tiles) {
        var c = this._tiles[key].coords;

        if (c.z !== this._tileZoom || !noPruneRange.contains(new Point(c.x, c.y))) {
          this._tiles[key].current = false;
        }
      } // _update just loads more tiles. If the tile zoom level differs too much
      // from the map's, let _setView reset levels and prune old tiles.


      if (Math.abs(zoom - this._tileZoom) > 1) {
        this._setView(center, zoom);

        return;
      } // create a queue of coordinates to load tiles from


      for (var j = tileRange.min.y; j <= tileRange.max.y; j++) {
        for (var i = tileRange.min.x; i <= tileRange.max.x; i++) {
          var coords = new Point(i, j);
          coords.z = this._tileZoom;

          if (!this._isValidTile(coords)) {
            continue;
          }

          var tile = this._tiles[this._tileCoordsToKey(coords)];

          if (tile) {
            tile.current = true;
          } else {
            queue.push(coords);
          }
        }
      } // sort tile queue to load tiles in order of their distance to center


      queue.sort(function (a, b) {
        return a.distanceTo(tileCenter) - b.distanceTo(tileCenter);
      });

      if (queue.length !== 0) {
        // if it's the first batch of tiles to load
        if (!this._loading) {
          this._loading = true; // @event loading: Event
          // Fired when the grid layer starts loading tiles.

          this.fire('loading');
        } // create DOM fragment to append tiles in one batch


        var fragment = document.createDocumentFragment();

        for (i = 0; i < queue.length; i++) {
          this._addTile(queue[i], fragment);
        }

        this._level.el.appendChild(fragment);
      }
    },
    _isValidTile: function _isValidTile(coords) {
      var crs = this._map.options.crs;

      if (!crs.infinite) {
        // don't load tile if it's out of bounds and not wrapped
        var bounds = this._globalTileRange;

        if (!crs.wrapLng && (coords.x < bounds.min.x || coords.x > bounds.max.x) || !crs.wrapLat && (coords.y < bounds.min.y || coords.y > bounds.max.y)) {
          return false;
        }
      }

      if (!this.options.bounds) {
        return true;
      } // don't load tile if it doesn't intersect the bounds in options


      var tileBounds = this._tileCoordsToBounds(coords);

      return toLatLngBounds(this.options.bounds).overlaps(tileBounds);
    },
    _keyToBounds: function _keyToBounds(key) {
      return this._tileCoordsToBounds(this._keyToTileCoords(key));
    },
    _tileCoordsToNwSe: function _tileCoordsToNwSe(coords) {
      var map = this._map,
          tileSize = this.getTileSize(),
          nwPoint = coords.scaleBy(tileSize),
          sePoint = nwPoint.add(tileSize),
          nw = map.unproject(nwPoint, coords.z),
          se = map.unproject(sePoint, coords.z);
      return [nw, se];
    },
    // converts tile coordinates to its geographical bounds
    _tileCoordsToBounds: function _tileCoordsToBounds(coords) {
      var bp = this._tileCoordsToNwSe(coords),
          bounds = new LatLngBounds(bp[0], bp[1]);

      if (!this.options.noWrap) {
        bounds = this._map.wrapLatLngBounds(bounds);
      }

      return bounds;
    },
    // converts tile coordinates to key for the tile cache
    _tileCoordsToKey: function _tileCoordsToKey(coords) {
      return coords.x + ':' + coords.y + ':' + coords.z;
    },
    // converts tile cache key to coordinates
    _keyToTileCoords: function _keyToTileCoords(key) {
      var k = key.split(':'),
          coords = new Point(+k[0], +k[1]);
      coords.z = +k[2];
      return coords;
    },
    _removeTile: function _removeTile(key) {
      var tile = this._tiles[key];

      if (!tile) {
        return;
      } // Cancels any pending http requests associated with the tile
      // unless we're on Android's stock browser,
      // see https://github.com/Leaflet/Leaflet/issues/137


      if (!androidStock) {
        tile.el.setAttribute('src', emptyImageUrl);
      }

      _remove(tile.el);

      delete this._tiles[key]; // @event tileunload: TileEvent
      // Fired when a tile is removed (e.g. when a tile goes off the screen).

      this.fire('tileunload', {
        tile: tile.el,
        coords: this._keyToTileCoords(key)
      });
    },
    _initTile: function _initTile(tile) {
      addClass(tile, 'leaflet-tile');
      var tileSize = this.getTileSize();
      tile.style.width = tileSize.x + 'px';
      tile.style.height = tileSize.y + 'px';
      tile.onselectstart = falseFn;
      tile.onmousemove = falseFn; // update opacity on tiles in IE7-8 because of filter inheritance problems

      if (ielt9 && this.options.opacity < 1) {
        _setOpacity(tile, this.options.opacity);
      } // without this hack, tiles disappear after zoom on Chrome for Android
      // https://github.com/Leaflet/Leaflet/issues/2078


      if (android && !android23) {
        tile.style.WebkitBackfaceVisibility = 'hidden';
      }
    },
    _addTile: function _addTile(coords, container) {
      var tilePos = this._getTilePos(coords),
          key = this._tileCoordsToKey(coords);

      var tile = this.createTile(this._wrapCoords(coords), bind(this._tileReady, this, coords));

      this._initTile(tile); // if createTile is defined with a second argument ("done" callback),
      // we know that tile is async and will be ready later; otherwise


      if (this.createTile.length < 2) {
        // mark tile as ready, but delay one frame for opacity animation to happen
        requestAnimFrame(bind(this._tileReady, this, coords, null, tile));
      }

      setPosition(tile, tilePos); // save tile in cache

      this._tiles[key] = {
        el: tile,
        coords: coords,
        current: true
      };
      container.appendChild(tile); // @event tileloadstart: TileEvent
      // Fired when a tile is requested and starts loading.

      this.fire('tileloadstart', {
        tile: tile,
        coords: coords
      });
    },
    _tileReady: function _tileReady(coords, err, tile) {
      if (!this._map) {
        return;
      }

      if (err) {
        // @event tileerror: TileErrorEvent
        // Fired when there is an error loading a tile.
        this.fire('tileerror', {
          error: err,
          tile: tile,
          coords: coords
        });
      }

      var key = this._tileCoordsToKey(coords);

      tile = this._tiles[key];

      if (!tile) {
        return;
      }

      tile.loaded = +new Date();

      if (this._map._fadeAnimated) {
        _setOpacity(tile.el, 0);

        cancelAnimFrame(this._fadeFrame);
        this._fadeFrame = requestAnimFrame(this._updateOpacity, this);
      } else {
        tile.active = true;

        this._pruneTiles();
      }

      if (!err) {
        addClass(tile.el, 'leaflet-tile-loaded'); // @event tileload: TileEvent
        // Fired when a tile loads.

        this.fire('tileload', {
          tile: tile.el,
          coords: coords
        });
      }

      if (this._noTilesToLoad()) {
        this._loading = false; // @event load: Event
        // Fired when the grid layer loaded all visible tiles.

        this.fire('load');

        if (ielt9 || !this._map._fadeAnimated) {
          requestAnimFrame(this._pruneTiles, this);
        } else {
          // Wait a bit more than 0.2 secs (the duration of the tile fade-in)
          // to trigger a pruning.
          setTimeout(bind(this._pruneTiles, this), 250);
        }
      }
    },
    _getTilePos: function _getTilePos(coords) {
      return coords.scaleBy(this.getTileSize()).subtract(this._level.origin);
    },
    _wrapCoords: function _wrapCoords(coords) {
      var newCoords = new Point(this._wrapX ? wrapNum(coords.x, this._wrapX) : coords.x, this._wrapY ? wrapNum(coords.y, this._wrapY) : coords.y);
      newCoords.z = coords.z;
      return newCoords;
    },
    _pxBoundsToTileRange: function _pxBoundsToTileRange(bounds) {
      var tileSize = this.getTileSize();
      return new Bounds(bounds.min.unscaleBy(tileSize).floor(), bounds.max.unscaleBy(tileSize).ceil().subtract([1, 1]));
    },
    _noTilesToLoad: function _noTilesToLoad() {
      for (var key in this._tiles) {
        if (!this._tiles[key].loaded) {
          return false;
        }
      }

      return true;
    }
  }); // @factory L.gridLayer(options?: GridLayer options)
  // Creates a new instance of GridLayer with the supplied options.

  function gridLayer(options) {
    return new GridLayer(options);
  }
  /*
   * @class TileLayer
   * @inherits GridLayer
   * @aka L.TileLayer
   * Used to load and display tile layers on the map. Extends `GridLayer`.
   *
   * @example
   *
   * ```js
   * L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar'}).addTo(map);
   * ```
   *
   * @section URL template
   * @example
   *
   * A string of the following form:
   *
   * ```
   * 'http://{s}.somedomain.com/blabla/{z}/{x}/{y}{r}.png'
   * ```
   *
   * `{s}` means one of the available subdomains (used sequentially to help with browser parallel requests per domain limitation; subdomain values are specified in options; `a`, `b` or `c` by default, can be omitted), `{z}` — zoom level, `{x}` and `{y}` — tile coordinates. `{r}` can be used to add "&commat;2x" to the URL to load retina tiles.
   *
   * You can use custom keys in the template, which will be [evaluated](#util-template) from TileLayer options, like this:
   *
   * ```
   * L.tileLayer('http://{s}.somedomain.com/{foo}/{z}/{x}/{y}.png', {foo: 'bar'});
   * ```
   */


  var TileLayer = GridLayer.extend({
    // @section
    // @aka TileLayer options
    options: {
      // @option minZoom: Number = 0
      // The minimum zoom level down to which this layer will be displayed (inclusive).
      minZoom: 0,
      // @option maxZoom: Number = 18
      // The maximum zoom level up to which this layer will be displayed (inclusive).
      maxZoom: 18,
      // @option subdomains: String|String[] = 'abc'
      // Subdomains of the tile service. Can be passed in the form of one string (where each letter is a subdomain name) or an array of strings.
      subdomains: 'abc',
      // @option errorTileUrl: String = ''
      // URL to the tile image to show in place of the tile that failed to load.
      errorTileUrl: '',
      // @option zoomOffset: Number = 0
      // The zoom number used in tile URLs will be offset with this value.
      zoomOffset: 0,
      // @option tms: Boolean = false
      // If `true`, inverses Y axis numbering for tiles (turn this on for [TMS](https://en.wikipedia.org/wiki/Tile_Map_Service) services).
      tms: false,
      // @option zoomReverse: Boolean = false
      // If set to true, the zoom number used in tile URLs will be reversed (`maxZoom - zoom` instead of `zoom`)
      zoomReverse: false,
      // @option detectRetina: Boolean = false
      // If `true` and user is on a retina display, it will request four tiles of half the specified size and a bigger zoom level in place of one to utilize the high resolution.
      detectRetina: false,
      // @option crossOrigin: Boolean = false
      // If true, all tiles will have their crossOrigin attribute set to ''. This is needed if you want to access tile pixel data.
      crossOrigin: false
    },
    initialize: function initialize(url, options) {
      this._url = url;
      options = setOptions(this, options); // detecting retina displays, adjusting tileSize and zoom levels

      if (options.detectRetina && retina && options.maxZoom > 0) {
        options.tileSize = Math.floor(options.tileSize / 2);

        if (!options.zoomReverse) {
          options.zoomOffset++;
          options.maxZoom--;
        } else {
          options.zoomOffset--;
          options.minZoom++;
        }

        options.minZoom = Math.max(0, options.minZoom);
      }

      if (typeof options.subdomains === 'string') {
        options.subdomains = options.subdomains.split('');
      } // for https://github.com/Leaflet/Leaflet/issues/137


      if (!android) {
        this.on('tileunload', this._onTileRemove);
      }
    },
    // @method setUrl(url: String, noRedraw?: Boolean): this
    // Updates the layer's URL template and redraws it (unless `noRedraw` is set to `true`).
    setUrl: function setUrl(url, noRedraw) {
      this._url = url;

      if (!noRedraw) {
        this.redraw();
      }

      return this;
    },
    // @method createTile(coords: Object, done?: Function): HTMLElement
    // Called only internally, overrides GridLayer's [`createTile()`](#gridlayer-createtile)
    // to return an `<img>` HTML element with the appropriate image URL given `coords`. The `done`
    // callback is called when the tile has been loaded.
    createTile: function createTile(coords, done) {
      var tile = document.createElement('img');
      on(tile, 'load', bind(this._tileOnLoad, this, done, tile));
      on(tile, 'error', bind(this._tileOnError, this, done, tile));

      if (this.options.crossOrigin) {
        tile.crossOrigin = '';
      }
      /*
       Alt tag is set to empty string to keep screen readers from reading URL and for compliance reasons
       http://www.w3.org/TR/WCAG20-TECHS/H67
      */


      tile.alt = '';
      /*
       Set role="presentation" to force screen readers to ignore this
       https://www.w3.org/TR/wai-aria/roles#textalternativecomputation
      */

      tile.setAttribute('role', 'presentation');
      tile.src = this.getTileUrl(coords);
      return tile;
    },
    // @section Extension methods
    // @uninheritable
    // Layers extending `TileLayer` might reimplement the following method.
    // @method getTileUrl(coords: Object): String
    // Called only internally, returns the URL for a tile given its coordinates.
    // Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
    getTileUrl: function getTileUrl(coords) {
      var data = {
        r: retina ? '@2x' : '',
        s: this._getSubdomain(coords),
        x: coords.x,
        y: coords.y,
        z: this._getZoomForUrl()
      };

      if (this._map && !this._map.options.crs.infinite) {
        var invertedY = this._globalTileRange.max.y - coords.y;

        if (this.options.tms) {
          data['y'] = invertedY;
        }

        data['-y'] = invertedY;
      }

      return template(this._url, extend(data, this.options));
    },
    _tileOnLoad: function _tileOnLoad(done, tile) {
      // For https://github.com/Leaflet/Leaflet/issues/3332
      if (ielt9) {
        setTimeout(bind(done, this, null, tile), 0);
      } else {
        done(null, tile);
      }
    },
    _tileOnError: function _tileOnError(done, tile, e) {
      var errorUrl = this.options.errorTileUrl;

      if (errorUrl && tile.getAttribute('src') !== errorUrl) {
        tile.src = errorUrl;
      }

      done(e, tile);
    },
    _onTileRemove: function _onTileRemove(e) {
      e.tile.onload = null;
    },
    _getZoomForUrl: function _getZoomForUrl() {
      var zoom = this._tileZoom,
          maxZoom = this.options.maxZoom,
          zoomReverse = this.options.zoomReverse,
          zoomOffset = this.options.zoomOffset;

      if (zoomReverse) {
        zoom = maxZoom - zoom;
      }

      return zoom + zoomOffset;
    },
    _getSubdomain: function _getSubdomain(tilePoint) {
      var index = Math.abs(tilePoint.x + tilePoint.y) % this.options.subdomains.length;
      return this.options.subdomains[index];
    },
    // stops loading all tiles in the background layer
    _abortLoading: function _abortLoading() {
      var i, tile;

      for (i in this._tiles) {
        if (this._tiles[i].coords.z !== this._tileZoom) {
          tile = this._tiles[i].el;
          tile.onload = falseFn;
          tile.onerror = falseFn;

          if (!tile.complete) {
            tile.src = emptyImageUrl;

            _remove(tile);

            delete this._tiles[i];
          }
        }
      }
    }
  }); // @factory L.tilelayer(urlTemplate: String, options?: TileLayer options)
  // Instantiates a tile layer object given a `URL template` and optionally an options object.

  function tileLayer(url, options) {
    return new TileLayer(url, options);
  }
  /*
   * @class TileLayer.WMS
   * @inherits TileLayer
   * @aka L.TileLayer.WMS
   * Used to display [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services as tile layers on the map. Extends `TileLayer`.
   *
   * @example
   *
   * ```js
   * var nexrad = L.tileLayer.wms("http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi", {
   * 	layers: 'nexrad-n0r-900913',
   * 	format: 'image/png',
   * 	transparent: true,
   * 	attribution: "Weather data © 2012 IEM Nexrad"
   * });
   * ```
   */


  var TileLayerWMS = TileLayer.extend({
    // @section
    // @aka TileLayer.WMS options
    // If any custom options not documented here are used, they will be sent to the
    // WMS server as extra parameters in each request URL. This can be useful for
    // [non-standard vendor WMS parameters](http://docs.geoserver.org/stable/en/user/services/wms/vendor.html).
    defaultWmsParams: {
      service: 'WMS',
      request: 'GetMap',
      // @option layers: String = ''
      // **(required)** Comma-separated list of WMS layers to show.
      layers: '',
      // @option styles: String = ''
      // Comma-separated list of WMS styles.
      styles: '',
      // @option format: String = 'image/jpeg'
      // WMS image format (use `'image/png'` for layers with transparency).
      format: 'image/jpeg',
      // @option transparent: Boolean = false
      // If `true`, the WMS service will return images with transparency.
      transparent: false,
      // @option version: String = '1.1.1'
      // Version of the WMS service to use
      version: '1.1.1'
    },
    options: {
      // @option crs: CRS = null
      // Coordinate Reference System to use for the WMS requests, defaults to
      // map CRS. Don't change this if you're not sure what it means.
      crs: null,
      // @option uppercase: Boolean = false
      // If `true`, WMS request parameter keys will be uppercase.
      uppercase: false
    },
    initialize: function initialize(url, options) {
      this._url = url;
      var wmsParams = extend({}, this.defaultWmsParams); // all keys that are not TileLayer options go to WMS params

      for (var i in options) {
        if (!(i in this.options)) {
          wmsParams[i] = options[i];
        }
      }

      options = setOptions(this, options);
      var realRetina = options.detectRetina && retina ? 2 : 1;
      var tileSize = this.getTileSize();
      wmsParams.width = tileSize.x * realRetina;
      wmsParams.height = tileSize.y * realRetina;
      this.wmsParams = wmsParams;
    },
    onAdd: function onAdd(map) {
      this._crs = this.options.crs || map.options.crs;
      this._wmsVersion = parseFloat(this.wmsParams.version);
      var projectionKey = this._wmsVersion >= 1.3 ? 'crs' : 'srs';
      this.wmsParams[projectionKey] = this._crs.code;
      TileLayer.prototype.onAdd.call(this, map);
    },
    getTileUrl: function getTileUrl(coords) {
      var tileBounds = this._tileCoordsToNwSe(coords),
          crs = this._crs,
          bounds = toBounds(crs.project(tileBounds[0]), crs.project(tileBounds[1])),
          min = bounds.min,
          max = bounds.max,
          bbox = (this._wmsVersion >= 1.3 && this._crs === EPSG4326 ? [min.y, min.x, max.y, max.x] : [min.x, min.y, max.x, max.y]).join(','),
          url = L.TileLayer.prototype.getTileUrl.call(this, coords);

      return url + getParamString(this.wmsParams, url, this.options.uppercase) + (this.options.uppercase ? '&BBOX=' : '&bbox=') + bbox;
    },
    // @method setParams(params: Object, noRedraw?: Boolean): this
    // Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
    setParams: function setParams(params, noRedraw) {
      extend(this.wmsParams, params);

      if (!noRedraw) {
        this.redraw();
      }

      return this;
    }
  }); // @factory L.tileLayer.wms(baseUrl: String, options: TileLayer.WMS options)
  // Instantiates a WMS tile layer object given a base URL of the WMS service and a WMS parameters/options object.

  function tileLayerWMS(url, options) {
    return new TileLayerWMS(url, options);
  }

  TileLayer.WMS = TileLayerWMS;
  tileLayer.wms = tileLayerWMS;
  /*
   * @class Renderer
   * @inherits Layer
   * @aka L.Renderer
   *
   * Base class for vector renderer implementations (`SVG`, `Canvas`). Handles the
   * DOM container of the renderer, its bounds, and its zoom animation.
   *
   * A `Renderer` works as an implicit layer group for all `Path`s - the renderer
   * itself can be added or removed to the map. All paths use a renderer, which can
   * be implicit (the map will decide the type of renderer and use it automatically)
   * or explicit (using the [`renderer`](#path-renderer) option of the path).
   *
   * Do not use this class directly, use `SVG` and `Canvas` instead.
   *
   * @event update: Event
   * Fired when the renderer updates its bounds, center and zoom, for example when
   * its map has moved
   */

  var Renderer = Layer.extend({
    // @section
    // @aka Renderer options
    options: {
      // @option padding: Number = 0.1
      // How much to extend the clip area around the map view (relative to its size)
      // e.g. 0.1 would be 10% of map view in each direction
      padding: 0.1,
      // @option tolerance: Number = 0
      // How much to extend click tolerance round a path/object on the map
      tolerance: 0
    },
    initialize: function initialize(options) {
      setOptions(this, options);
      stamp(this);
      this._layers = this._layers || {};
    },
    onAdd: function onAdd() {
      if (!this._container) {
        this._initContainer(); // defined by renderer implementations


        if (this._zoomAnimated) {
          addClass(this._container, 'leaflet-zoom-animated');
        }
      }

      this.getPane().appendChild(this._container);

      this._update();

      this.on('update', this._updatePaths, this);
    },
    onRemove: function onRemove() {
      this.off('update', this._updatePaths, this);

      this._destroyContainer();
    },
    getEvents: function getEvents() {
      var events = {
        viewreset: this._reset,
        zoom: this._onZoom,
        moveend: this._update,
        zoomend: this._onZoomEnd
      };

      if (this._zoomAnimated) {
        events.zoomanim = this._onAnimZoom;
      }

      return events;
    },
    _onAnimZoom: function _onAnimZoom(ev) {
      this._updateTransform(ev.center, ev.zoom);
    },
    _onZoom: function _onZoom() {
      this._updateTransform(this._map.getCenter(), this._map.getZoom());
    },
    _updateTransform: function _updateTransform(center, zoom) {
      var scale = this._map.getZoomScale(zoom, this._zoom),
          position = getPosition(this._container),
          viewHalf = this._map.getSize().multiplyBy(0.5 + this.options.padding),
          currentCenterPoint = this._map.project(this._center, zoom),
          destCenterPoint = this._map.project(center, zoom),
          centerOffset = destCenterPoint.subtract(currentCenterPoint),
          topLeftOffset = viewHalf.multiplyBy(-scale).add(position).add(viewHalf).subtract(centerOffset);

      if (any3d) {
        setTransform(this._container, topLeftOffset, scale);
      } else {
        setPosition(this._container, topLeftOffset);
      }
    },
    _reset: function _reset() {
      this._update();

      this._updateTransform(this._center, this._zoom);

      for (var id in this._layers) {
        this._layers[id]._reset();
      }
    },
    _onZoomEnd: function _onZoomEnd() {
      for (var id in this._layers) {
        this._layers[id]._project();
      }
    },
    _updatePaths: function _updatePaths() {
      for (var id in this._layers) {
        this._layers[id]._update();
      }
    },
    _update: function _update() {
      // Update pixel bounds of renderer container (for positioning/sizing/clipping later)
      // Subclasses are responsible of firing the 'update' event.
      var p = this.options.padding,
          size = this._map.getSize(),
          min = this._map.containerPointToLayerPoint(size.multiplyBy(-p)).round();

      this._bounds = new Bounds(min, min.add(size.multiplyBy(1 + p * 2)).round());
      this._center = this._map.getCenter();
      this._zoom = this._map.getZoom();
    }
  });
  /*
   * @class Canvas
   * @inherits Renderer
   * @aka L.Canvas
   *
   * Allows vector layers to be displayed with [`<canvas>`](https://developer.mozilla.org/docs/Web/API/Canvas_API).
   * Inherits `Renderer`.
   *
   * Due to [technical limitations](http://caniuse.com/#search=canvas), Canvas is not
   * available in all web browsers, notably IE8, and overlapping geometries might
   * not display properly in some edge cases.
   *
   * @example
   *
   * Use Canvas by default for all paths in the map:
   *
   * ```js
   * var map = L.map('map', {
   * 	renderer: L.canvas()
   * });
   * ```
   *
   * Use a Canvas renderer with extra padding for specific vector geometries:
   *
   * ```js
   * var map = L.map('map');
   * var myRenderer = L.canvas({ padding: 0.5 });
   * var line = L.polyline( coordinates, { renderer: myRenderer } );
   * var circle = L.circle( center, { renderer: myRenderer } );
   * ```
   */

  var Canvas = Renderer.extend({
    getEvents: function getEvents() {
      var events = Renderer.prototype.getEvents.call(this);
      events.viewprereset = this._onViewPreReset;
      return events;
    },
    _onViewPreReset: function _onViewPreReset() {
      // Set a flag so that a viewprereset+moveend+viewreset only updates&redraws once
      this._postponeUpdatePaths = true;
    },
    onAdd: function onAdd() {
      Renderer.prototype.onAdd.call(this); // Redraw vectors since canvas is cleared upon removal,
      // in case of removing the renderer itself from the map.

      this._draw();
    },
    _initContainer: function _initContainer() {
      var container = this._container = document.createElement('canvas');
      on(container, 'mousemove', throttle(this._onMouseMove, 32, this), this);
      on(container, 'click dblclick mousedown mouseup contextmenu', this._onClick, this);
      on(container, 'mouseout', this._handleMouseOut, this);
      this._ctx = container.getContext('2d');
    },
    _destroyContainer: function _destroyContainer() {
      delete this._ctx;

      _remove(this._container);

      off(this._container);
      delete this._container;
    },
    _updatePaths: function _updatePaths() {
      if (this._postponeUpdatePaths) {
        return;
      }

      var layer;
      this._redrawBounds = null;

      for (var id in this._layers) {
        layer = this._layers[id];

        layer._update();
      }

      this._redraw();
    },
    _update: function _update() {
      if (this._map._animatingZoom && this._bounds) {
        return;
      }

      this._drawnLayers = {};

      Renderer.prototype._update.call(this);

      var b = this._bounds,
          container = this._container,
          size = b.getSize(),
          m = retina ? 2 : 1;
      setPosition(container, b.min); // set canvas size (also clearing it); use double size on retina

      container.width = m * size.x;
      container.height = m * size.y;
      container.style.width = size.x + 'px';
      container.style.height = size.y + 'px';

      if (retina) {
        this._ctx.scale(2, 2);
      } // translate so we use the same path coordinates after canvas element moves


      this._ctx.translate(-b.min.x, -b.min.y); // Tell paths to redraw themselves


      this.fire('update');
    },
    _reset: function _reset() {
      Renderer.prototype._reset.call(this);

      if (this._postponeUpdatePaths) {
        this._postponeUpdatePaths = false;

        this._updatePaths();
      }
    },
    _initPath: function _initPath(layer) {
      this._updateDashArray(layer);

      this._layers[stamp(layer)] = layer;
      var order = layer._order = {
        layer: layer,
        prev: this._drawLast,
        next: null
      };

      if (this._drawLast) {
        this._drawLast.next = order;
      }

      this._drawLast = order;
      this._drawFirst = this._drawFirst || this._drawLast;
    },
    _addPath: function _addPath(layer) {
      this._requestRedraw(layer);
    },
    _removePath: function _removePath(layer) {
      var order = layer._order;
      var next = order.next;
      var prev = order.prev;

      if (next) {
        next.prev = prev;
      } else {
        this._drawLast = prev;
      }

      if (prev) {
        prev.next = next;
      } else {
        this._drawFirst = next;
      }

      delete layer._order;
      delete this._layers[L.stamp(layer)];

      this._requestRedraw(layer);
    },
    _updatePath: function _updatePath(layer) {
      // Redraw the union of the layer's old pixel
      // bounds and the new pixel bounds.
      this._extendRedrawBounds(layer);

      layer._project();

      layer._update(); // The redraw will extend the redraw bounds
      // with the new pixel bounds.


      this._requestRedraw(layer);
    },
    _updateStyle: function _updateStyle(layer) {
      this._updateDashArray(layer);

      this._requestRedraw(layer);
    },
    _updateDashArray: function _updateDashArray(layer) {
      if (layer.options.dashArray) {
        var parts = layer.options.dashArray.split(','),
            dashArray = [],
            i;

        for (i = 0; i < parts.length; i++) {
          dashArray.push(Number(parts[i]));
        }

        layer.options._dashArray = dashArray;
      }
    },
    _requestRedraw: function _requestRedraw(layer) {
      if (!this._map) {
        return;
      }

      this._extendRedrawBounds(layer);

      this._redrawRequest = this._redrawRequest || requestAnimFrame(this._redraw, this);
    },
    _extendRedrawBounds: function _extendRedrawBounds(layer) {
      if (layer._pxBounds) {
        var padding = (layer.options.weight || 0) + 1;
        this._redrawBounds = this._redrawBounds || new Bounds();

        this._redrawBounds.extend(layer._pxBounds.min.subtract([padding, padding]));

        this._redrawBounds.extend(layer._pxBounds.max.add([padding, padding]));
      }
    },
    _redraw: function _redraw() {
      this._redrawRequest = null;

      if (this._redrawBounds) {
        this._redrawBounds.min._floor();

        this._redrawBounds.max._ceil();
      }

      this._clear(); // clear layers in redraw bounds


      this._draw(); // draw layers


      this._redrawBounds = null;
    },
    _clear: function _clear() {
      var bounds = this._redrawBounds;

      if (bounds) {
        var size = bounds.getSize();

        this._ctx.clearRect(bounds.min.x, bounds.min.y, size.x, size.y);
      } else {
        this._ctx.clearRect(0, 0, this._container.width, this._container.height);
      }
    },
    _draw: function _draw() {
      var layer,
          bounds = this._redrawBounds;

      this._ctx.save();

      if (bounds) {
        var size = bounds.getSize();

        this._ctx.beginPath();

        this._ctx.rect(bounds.min.x, bounds.min.y, size.x, size.y);

        this._ctx.clip();
      }

      this._drawing = true;

      for (var order = this._drawFirst; order; order = order.next) {
        layer = order.layer;

        if (!bounds || layer._pxBounds && layer._pxBounds.intersects(bounds)) {
          layer._updatePath();
        }
      }

      this._drawing = false;

      this._ctx.restore(); // Restore state before clipping.

    },
    _updatePoly: function _updatePoly(layer, closed) {
      if (!this._drawing) {
        return;
      }

      var i,
          j,
          len2,
          p,
          parts = layer._parts,
          len = parts.length,
          ctx = this._ctx;

      if (!len) {
        return;
      }

      this._drawnLayers[layer._leaflet_id] = layer;
      ctx.beginPath();

      for (i = 0; i < len; i++) {
        for (j = 0, len2 = parts[i].length; j < len2; j++) {
          p = parts[i][j];
          ctx[j ? 'lineTo' : 'moveTo'](p.x, p.y);
        }

        if (closed) {
          ctx.closePath();
        }
      }

      this._fillStroke(ctx, layer); // TODO optimization: 1 fill/stroke for all features with equal style instead of 1 for each feature

    },
    _updateCircle: function _updateCircle(layer) {
      if (!this._drawing || layer._empty()) {
        return;
      }

      var p = layer._point,
          ctx = this._ctx,
          r = Math.max(Math.round(layer._radius), 1),
          s = (Math.max(Math.round(layer._radiusY), 1) || r) / r;
      this._drawnLayers[layer._leaflet_id] = layer;

      if (s !== 1) {
        ctx.save();
        ctx.scale(1, s);
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y / s, r, 0, Math.PI * 2, false);

      if (s !== 1) {
        ctx.restore();
      }

      this._fillStroke(ctx, layer);
    },
    _fillStroke: function _fillStroke(ctx, layer) {
      var options = layer.options;

      if (options.fill) {
        ctx.globalAlpha = options.fillOpacity;
        ctx.fillStyle = options.fillColor || options.color;
        ctx.fill(options.fillRule || 'evenodd');
      }

      if (options.stroke && options.weight !== 0) {
        if (ctx.setLineDash) {
          ctx.setLineDash(layer.options && layer.options._dashArray || []);
        }

        ctx.globalAlpha = options.opacity;
        ctx.lineWidth = options.weight;
        ctx.strokeStyle = options.color;
        ctx.lineCap = options.lineCap;
        ctx.lineJoin = options.lineJoin;
        ctx.stroke();
      }
    },
    // Canvas obviously doesn't have mouse events for individual drawn objects,
    // so we emulate that by calculating what's under the mouse on mousemove/click manually
    _onClick: function _onClick(e) {
      var point = this._map.mouseEventToLayerPoint(e),
          layer,
          clickedLayer;

      for (var order = this._drawFirst; order; order = order.next) {
        layer = order.layer;

        if (layer.options.interactive && layer._containsPoint(point) && !this._map._draggableMoved(layer)) {
          clickedLayer = layer;
        }
      }

      if (clickedLayer) {
        fakeStop(e);

        this._fireEvent([clickedLayer], e);
      }
    },
    _onMouseMove: function _onMouseMove(e) {
      if (!this._map || this._map.dragging.moving() || this._map._animatingZoom) {
        return;
      }

      var point = this._map.mouseEventToLayerPoint(e);

      this._handleMouseHover(e, point);
    },
    _handleMouseOut: function _handleMouseOut(e) {
      var layer = this._hoveredLayer;

      if (layer) {
        // if we're leaving the layer, fire mouseout
        removeClass(this._container, 'leaflet-interactive');

        this._fireEvent([layer], e, 'mouseout');

        this._hoveredLayer = null;
      }
    },
    _handleMouseHover: function _handleMouseHover(e, point) {
      var layer, candidateHoveredLayer;

      for (var order = this._drawFirst; order; order = order.next) {
        layer = order.layer;

        if (layer.options.interactive && layer._containsPoint(point)) {
          candidateHoveredLayer = layer;
        }
      }

      if (candidateHoveredLayer !== this._hoveredLayer) {
        this._handleMouseOut(e);

        if (candidateHoveredLayer) {
          addClass(this._container, 'leaflet-interactive'); // change cursor

          this._fireEvent([candidateHoveredLayer], e, 'mouseover');

          this._hoveredLayer = candidateHoveredLayer;
        }
      }

      if (this._hoveredLayer) {
        this._fireEvent([this._hoveredLayer], e);
      }
    },
    _fireEvent: function _fireEvent(layers, e, type) {
      this._map._fireDOMEvent(e, type || e.type, layers);
    },
    _bringToFront: function _bringToFront(layer) {
      var order = layer._order;
      var next = order.next;
      var prev = order.prev;

      if (next) {
        next.prev = prev;
      } else {
        // Already last
        return;
      }

      if (prev) {
        prev.next = next;
      } else if (next) {
        // Update first entry unless this is the
        // single entry
        this._drawFirst = next;
      }

      order.prev = this._drawLast;
      this._drawLast.next = order;
      order.next = null;
      this._drawLast = order;

      this._requestRedraw(layer);
    },
    _bringToBack: function _bringToBack(layer) {
      var order = layer._order;
      var next = order.next;
      var prev = order.prev;

      if (prev) {
        prev.next = next;
      } else {
        // Already first
        return;
      }

      if (next) {
        next.prev = prev;
      } else if (prev) {
        // Update last entry unless this is the
        // single entry
        this._drawLast = prev;
      }

      order.prev = null;
      order.next = this._drawFirst;
      this._drawFirst.prev = order;
      this._drawFirst = order;

      this._requestRedraw(layer);
    }
  }); // @factory L.canvas(options?: Renderer options)
  // Creates a Canvas renderer with the given options.

  function canvas$1(options) {
    return canvas ? new Canvas(options) : null;
  }
  /*
   * Thanks to Dmitry Baranovsky and his Raphael library for inspiration!
   */


  var vmlCreate = function () {
    try {
      document.namespaces.add('lvml', 'urn:schemas-microsoft-com:vml');
      return function (name) {
        return document.createElement('<lvml:' + name + ' class="lvml">');
      };
    } catch (e) {
      return function (name) {
        return document.createElement('<' + name + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
      };
    }
  }();
  /*
   * @class SVG
   *
   * Although SVG is not available on IE7 and IE8, these browsers support [VML](https://en.wikipedia.org/wiki/Vector_Markup_Language), and the SVG renderer will fall back to VML in this case.
   *
   * VML was deprecated in 2012, which means VML functionality exists only for backwards compatibility
   * with old versions of Internet Explorer.
   */
  // mixin to redefine some SVG methods to handle VML syntax which is similar but with some differences


  var vmlMixin = {
    _initContainer: function _initContainer() {
      this._container = create$1('div', 'leaflet-vml-container');
    },
    _update: function _update() {
      if (this._map._animatingZoom) {
        return;
      }

      Renderer.prototype._update.call(this);

      this.fire('update');
    },
    _initPath: function _initPath(layer) {
      var container = layer._container = vmlCreate('shape');
      addClass(container, 'leaflet-vml-shape ' + (this.options.className || ''));
      container.coordsize = '1 1';
      layer._path = vmlCreate('path');
      container.appendChild(layer._path);

      this._updateStyle(layer);

      this._layers[stamp(layer)] = layer;
    },
    _addPath: function _addPath(layer) {
      var container = layer._container;

      this._container.appendChild(container);

      if (layer.options.interactive) {
        layer.addInteractiveTarget(container);
      }
    },
    _removePath: function _removePath(layer) {
      var container = layer._container;

      _remove(container);

      layer.removeInteractiveTarget(container);
      delete this._layers[stamp(layer)];
    },
    _updateStyle: function _updateStyle(layer) {
      var stroke = layer._stroke,
          fill = layer._fill,
          options = layer.options,
          container = layer._container;
      container.stroked = !!options.stroke;
      container.filled = !!options.fill;

      if (options.stroke) {
        if (!stroke) {
          stroke = layer._stroke = vmlCreate('stroke');
        }

        container.appendChild(stroke);
        stroke.weight = options.weight + 'px';
        stroke.color = options.color;
        stroke.opacity = options.opacity;

        if (options.dashArray) {
          stroke.dashStyle = isArray(options.dashArray) ? options.dashArray.join(' ') : options.dashArray.replace(/( *, *)/g, ' ');
        } else {
          stroke.dashStyle = '';
        }

        stroke.endcap = options.lineCap.replace('butt', 'flat');
        stroke.joinstyle = options.lineJoin;
      } else if (stroke) {
        container.removeChild(stroke);
        layer._stroke = null;
      }

      if (options.fill) {
        if (!fill) {
          fill = layer._fill = vmlCreate('fill');
        }

        container.appendChild(fill);
        fill.color = options.fillColor || options.color;
        fill.opacity = options.fillOpacity;
      } else if (fill) {
        container.removeChild(fill);
        layer._fill = null;
      }
    },
    _updateCircle: function _updateCircle(layer) {
      var p = layer._point.round(),
          r = Math.round(layer._radius),
          r2 = Math.round(layer._radiusY || r);

      this._setPath(layer, layer._empty() ? 'M0 0' : 'AL ' + p.x + ',' + p.y + ' ' + r + ',' + r2 + ' 0,' + 65535 * 360);
    },
    _setPath: function _setPath(layer, path) {
      layer._path.v = path;
    },
    _bringToFront: function _bringToFront(layer) {
      toFront(layer._container);
    },
    _bringToBack: function _bringToBack(layer) {
      toBack(layer._container);
    }
  };
  var create$2 = vml ? vmlCreate : svgCreate;
  /*
   * @class SVG
   * @inherits Renderer
   * @aka L.SVG
   *
   * Allows vector layers to be displayed with [SVG](https://developer.mozilla.org/docs/Web/SVG).
   * Inherits `Renderer`.
   *
   * Due to [technical limitations](http://caniuse.com/#search=svg), SVG is not
   * available in all web browsers, notably Android 2.x and 3.x.
   *
   * Although SVG is not available on IE7 and IE8, these browsers support
   * [VML](https://en.wikipedia.org/wiki/Vector_Markup_Language)
   * (a now deprecated technology), and the SVG renderer will fall back to VML in
   * this case.
   *
   * @example
   *
   * Use SVG by default for all paths in the map:
   *
   * ```js
   * var map = L.map('map', {
   * 	renderer: L.svg()
   * });
   * ```
   *
   * Use a SVG renderer with extra padding for specific vector geometries:
   *
   * ```js
   * var map = L.map('map');
   * var myRenderer = L.svg({ padding: 0.5 });
   * var line = L.polyline( coordinates, { renderer: myRenderer } );
   * var circle = L.circle( center, { renderer: myRenderer } );
   * ```
   */

  var SVG = Renderer.extend({
    getEvents: function getEvents() {
      var events = Renderer.prototype.getEvents.call(this);
      events.zoomstart = this._onZoomStart;
      return events;
    },
    _initContainer: function _initContainer() {
      this._container = create$2('svg'); // makes it possible to click through svg root; we'll reset it back in individual paths

      this._container.setAttribute('pointer-events', 'none');

      this._rootGroup = create$2('g');

      this._container.appendChild(this._rootGroup);
    },
    _destroyContainer: function _destroyContainer() {
      _remove(this._container);

      off(this._container);
      delete this._container;
      delete this._rootGroup;
      delete this._svgSize;
    },
    _onZoomStart: function _onZoomStart() {
      // Drag-then-pinch interactions might mess up the center and zoom.
      // In this case, the easiest way to prevent this is re-do the renderer
      //   bounds and padding when the zooming starts.
      this._update();
    },
    _update: function _update() {
      if (this._map._animatingZoom && this._bounds) {
        return;
      }

      Renderer.prototype._update.call(this);

      var b = this._bounds,
          size = b.getSize(),
          container = this._container; // set size of svg-container if changed

      if (!this._svgSize || !this._svgSize.equals(size)) {
        this._svgSize = size;
        container.setAttribute('width', size.x);
        container.setAttribute('height', size.y);
      } // movement: update container viewBox so that we don't have to change coordinates of individual layers


      setPosition(container, b.min);
      container.setAttribute('viewBox', [b.min.x, b.min.y, size.x, size.y].join(' '));
      this.fire('update');
    },
    // methods below are called by vector layers implementations
    _initPath: function _initPath(layer) {
      var path = layer._path = create$2('path'); // @namespace Path
      // @option className: String = null
      // Custom class name set on an element. Only for SVG renderer.

      if (layer.options.className) {
        addClass(path, layer.options.className);
      }

      if (layer.options.interactive) {
        addClass(path, 'leaflet-interactive');
      }

      this._updateStyle(layer);

      this._layers[stamp(layer)] = layer;
    },
    _addPath: function _addPath(layer) {
      if (!this._rootGroup) {
        this._initContainer();
      }

      this._rootGroup.appendChild(layer._path);

      layer.addInteractiveTarget(layer._path);
    },
    _removePath: function _removePath(layer) {
      _remove(layer._path);

      layer.removeInteractiveTarget(layer._path);
      delete this._layers[stamp(layer)];
    },
    _updatePath: function _updatePath(layer) {
      layer._project();

      layer._update();
    },
    _updateStyle: function _updateStyle(layer) {
      var path = layer._path,
          options = layer.options;

      if (!path) {
        return;
      }

      if (options.stroke) {
        path.setAttribute('stroke', options.color);
        path.setAttribute('stroke-opacity', options.opacity);
        path.setAttribute('stroke-width', options.weight);
        path.setAttribute('stroke-linecap', options.lineCap);
        path.setAttribute('stroke-linejoin', options.lineJoin);

        if (options.dashArray) {
          path.setAttribute('stroke-dasharray', options.dashArray);
        } else {
          path.removeAttribute('stroke-dasharray');
        }

        if (options.dashOffset) {
          path.setAttribute('stroke-dashoffset', options.dashOffset);
        } else {
          path.removeAttribute('stroke-dashoffset');
        }
      } else {
        path.setAttribute('stroke', 'none');
      }

      if (options.fill) {
        path.setAttribute('fill', options.fillColor || options.color);
        path.setAttribute('fill-opacity', options.fillOpacity);
        path.setAttribute('fill-rule', options.fillRule || 'evenodd');
      } else {
        path.setAttribute('fill', 'none');
      }
    },
    _updatePoly: function _updatePoly(layer, closed) {
      this._setPath(layer, pointsToPath(layer._parts, closed));
    },
    _updateCircle: function _updateCircle(layer) {
      var p = layer._point,
          r = Math.max(Math.round(layer._radius), 1),
          r2 = Math.max(Math.round(layer._radiusY), 1) || r,
          arc = 'a' + r + ',' + r2 + ' 0 1,0 '; // drawing a circle with two half-arcs

      var d = layer._empty() ? 'M0 0' : 'M' + (p.x - r) + ',' + p.y + arc + r * 2 + ',0 ' + arc + -r * 2 + ',0 ';

      this._setPath(layer, d);
    },
    _setPath: function _setPath(layer, path) {
      layer._path.setAttribute('d', path);
    },
    // SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
    _bringToFront: function _bringToFront(layer) {
      toFront(layer._path);
    },
    _bringToBack: function _bringToBack(layer) {
      toBack(layer._path);
    }
  });

  if (vml) {
    SVG.include(vmlMixin);
  } // @namespace SVG
  // @factory L.svg(options?: Renderer options)
  // Creates a SVG renderer with the given options.


  function svg$1(options) {
    return svg || vml ? new SVG(options) : null;
  }

  Map.include({
    // @namespace Map; @method getRenderer(layer: Path): Renderer
    // Returns the instance of `Renderer` that should be used to render the given
    // `Path`. It will ensure that the `renderer` options of the map and paths
    // are respected, and that the renderers do exist on the map.
    getRenderer: function getRenderer(layer) {
      // @namespace Path; @option renderer: Renderer
      // Use this specific instance of `Renderer` for this path. Takes
      // precedence over the map's [default renderer](#map-renderer).
      var renderer = layer.options.renderer || this._getPaneRenderer(layer.options.pane) || this.options.renderer || this._renderer;

      if (!renderer) {
        // @namespace Map; @option preferCanvas: Boolean = false
        // Whether `Path`s should be rendered on a `Canvas` renderer.
        // By default, all `Path`s are rendered in a `SVG` renderer.
        renderer = this._renderer = this.options.preferCanvas && canvas$1() || svg$1();
      }

      if (!this.hasLayer(renderer)) {
        this.addLayer(renderer);
      }

      return renderer;
    },
    _getPaneRenderer: function _getPaneRenderer(name) {
      if (name === 'overlayPane' || name === undefined) {
        return false;
      }

      var renderer = this._paneRenderers[name];

      if (renderer === undefined) {
        renderer = SVG && svg$1({
          pane: name
        }) || Canvas && canvas$1({
          pane: name
        });
        this._paneRenderers[name] = renderer;
      }

      return renderer;
    }
  });
  /*
   * L.Rectangle extends Polygon and creates a rectangle when passed a LatLngBounds object.
   */

  /*
   * @class Rectangle
   * @aka L.Rectangle
   * @inherits Polygon
   *
   * A class for drawing rectangle overlays on a map. Extends `Polygon`.
   *
   * @example
   *
   * ```js
   * // define rectangle geographical bounds
   * var bounds = [[54.559322, -5.767822], [56.1210604, -3.021240]];
   *
   * // create an orange rectangle
   * L.rectangle(bounds, {color: "#ff7800", weight: 1}).addTo(map);
   *
   * // zoom the map to the rectangle bounds
   * map.fitBounds(bounds);
   * ```
   *
   */

  var Rectangle = Polygon.extend({
    initialize: function initialize(latLngBounds, options) {
      Polygon.prototype.initialize.call(this, this._boundsToLatLngs(latLngBounds), options);
    },
    // @method setBounds(latLngBounds: LatLngBounds): this
    // Redraws the rectangle with the passed bounds.
    setBounds: function setBounds(latLngBounds) {
      return this.setLatLngs(this._boundsToLatLngs(latLngBounds));
    },
    _boundsToLatLngs: function _boundsToLatLngs(latLngBounds) {
      latLngBounds = toLatLngBounds(latLngBounds);
      return [latLngBounds.getSouthWest(), latLngBounds.getNorthWest(), latLngBounds.getNorthEast(), latLngBounds.getSouthEast()];
    }
  }); // @factory L.rectangle(latLngBounds: LatLngBounds, options?: Polyline options)

  function rectangle(latLngBounds, options) {
    return new Rectangle(latLngBounds, options);
  }

  SVG.create = create$2;
  SVG.pointsToPath = pointsToPath;
  GeoJSON.geometryToLayer = geometryToLayer;
  GeoJSON.coordsToLatLng = coordsToLatLng;
  GeoJSON.coordsToLatLngs = coordsToLatLngs;
  GeoJSON.latLngToCoords = latLngToCoords;
  GeoJSON.latLngsToCoords = latLngsToCoords;
  GeoJSON.getFeature = getFeature;
  GeoJSON.asFeature = asFeature;
  /*
   * L.Handler.BoxZoom is used to add shift-drag zoom interaction to the map
   * (zoom to a selected bounding box), enabled by default.
   */
  // @namespace Map
  // @section Interaction Options

  Map.mergeOptions({
    // @option boxZoom: Boolean = true
    // Whether the map can be zoomed to a rectangular area specified by
    // dragging the mouse while pressing the shift key.
    boxZoom: true
  });
  var BoxZoom = Handler.extend({
    initialize: function initialize(map) {
      this._map = map;
      this._container = map._container;
      this._pane = map._panes.overlayPane;
      this._resetStateTimeout = 0;
      map.on('unload', this._destroy, this);
    },
    addHooks: function addHooks() {
      on(this._container, 'mousedown', this._onMouseDown, this);
    },
    removeHooks: function removeHooks() {
      off(this._container, 'mousedown', this._onMouseDown, this);
    },
    moved: function moved() {
      return this._moved;
    },
    _destroy: function _destroy() {
      _remove(this._pane);

      delete this._pane;
    },
    _resetState: function _resetState() {
      this._resetStateTimeout = 0;
      this._moved = false;
    },
    _clearDeferredResetState: function _clearDeferredResetState() {
      if (this._resetStateTimeout !== 0) {
        clearTimeout(this._resetStateTimeout);
        this._resetStateTimeout = 0;
      }
    },
    _onMouseDown: function _onMouseDown(e) {
      if (!e.shiftKey || e.which !== 1 && e.button !== 1) {
        return false;
      } // Clear the deferred resetState if it hasn't executed yet, otherwise it
      // will interrupt the interaction and orphan a box element in the container.


      this._clearDeferredResetState();

      this._resetState();

      disableTextSelection();
      disableImageDrag();
      this._startPoint = this._map.mouseEventToContainerPoint(e);
      on(document, {
        contextmenu: stop,
        mousemove: this._onMouseMove,
        mouseup: this._onMouseUp,
        keydown: this._onKeyDown
      }, this);
    },
    _onMouseMove: function _onMouseMove(e) {
      if (!this._moved) {
        this._moved = true;
        this._box = create$1('div', 'leaflet-zoom-box', this._container);
        addClass(this._container, 'leaflet-crosshair');

        this._map.fire('boxzoomstart');
      }

      this._point = this._map.mouseEventToContainerPoint(e);
      var bounds = new Bounds(this._point, this._startPoint),
          size = bounds.getSize();
      setPosition(this._box, bounds.min);
      this._box.style.width = size.x + 'px';
      this._box.style.height = size.y + 'px';
    },
    _finish: function _finish() {
      if (this._moved) {
        _remove(this._box);

        removeClass(this._container, 'leaflet-crosshair');
      }

      enableTextSelection();
      enableImageDrag();
      off(document, {
        contextmenu: stop,
        mousemove: this._onMouseMove,
        mouseup: this._onMouseUp,
        keydown: this._onKeyDown
      }, this);
    },
    _onMouseUp: function _onMouseUp(e) {
      if (e.which !== 1 && e.button !== 1) {
        return;
      }

      this._finish();

      if (!this._moved) {
        return;
      } // Postpone to next JS tick so internal click event handling
      // still see it as "moved".


      this._clearDeferredResetState();

      this._resetStateTimeout = setTimeout(bind(this._resetState, this), 0);
      var bounds = new LatLngBounds(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));

      this._map.fitBounds(bounds).fire('boxzoomend', {
        boxZoomBounds: bounds
      });
    },
    _onKeyDown: function _onKeyDown(e) {
      if (e.keyCode === 27) {
        this._finish();
      }
    }
  }); // @section Handlers
  // @property boxZoom: Handler
  // Box (shift-drag with mouse) zoom handler.

  Map.addInitHook('addHandler', 'boxZoom', BoxZoom);
  /*
   * L.Handler.DoubleClickZoom is used to handle double-click zoom on the map, enabled by default.
   */
  // @namespace Map
  // @section Interaction Options

  Map.mergeOptions({
    // @option doubleClickZoom: Boolean|String = true
    // Whether the map can be zoomed in by double clicking on it and
    // zoomed out by double clicking while holding shift. If passed
    // `'center'`, double-click zoom will zoom to the center of the
    //  view regardless of where the mouse was.
    doubleClickZoom: true
  });
  var DoubleClickZoom = Handler.extend({
    addHooks: function addHooks() {
      this._map.on('dblclick', this._onDoubleClick, this);
    },
    removeHooks: function removeHooks() {
      this._map.off('dblclick', this._onDoubleClick, this);
    },
    _onDoubleClick: function _onDoubleClick(e) {
      var map = this._map,
          oldZoom = map.getZoom(),
          delta = map.options.zoomDelta,
          zoom = e.originalEvent.shiftKey ? oldZoom - delta : oldZoom + delta;

      if (map.options.doubleClickZoom === 'center') {
        map.setZoom(zoom);
      } else {
        map.setZoomAround(e.containerPoint, zoom);
      }
    }
  }); // @section Handlers
  //
  // Map properties include interaction handlers that allow you to control
  // interaction behavior in runtime, enabling or disabling certain features such
  // as dragging or touch zoom (see `Handler` methods). For example:
  //
  // ```js
  // map.doubleClickZoom.disable();
  // ```
  //
  // @property doubleClickZoom: Handler
  // Double click zoom handler.

  Map.addInitHook('addHandler', 'doubleClickZoom', DoubleClickZoom);
  /*
   * L.Handler.MapDrag is used to make the map draggable (with panning inertia), enabled by default.
   */
  // @namespace Map
  // @section Interaction Options

  Map.mergeOptions({
    // @option dragging: Boolean = true
    // Whether the map be draggable with mouse/touch or not.
    dragging: true,
    // @section Panning Inertia Options
    // @option inertia: Boolean = *
    // If enabled, panning of the map will have an inertia effect where
    // the map builds momentum while dragging and continues moving in
    // the same direction for some time. Feels especially nice on touch
    // devices. Enabled by default unless running on old Android devices.
    inertia: !android23,
    // @option inertiaDeceleration: Number = 3000
    // The rate with which the inertial movement slows down, in pixels/second².
    inertiaDeceleration: 3400,
    // px/s^2
    // @option inertiaMaxSpeed: Number = Infinity
    // Max speed of the inertial movement, in pixels/second.
    inertiaMaxSpeed: Infinity,
    // px/s
    // @option easeLinearity: Number = 0.2
    easeLinearity: 0.2,
    // TODO refactor, move to CRS
    // @option worldCopyJump: Boolean = false
    // With this option enabled, the map tracks when you pan to another "copy"
    // of the world and seamlessly jumps to the original one so that all overlays
    // like markers and vector layers are still visible.
    worldCopyJump: false,
    // @option maxBoundsViscosity: Number = 0.0
    // If `maxBounds` is set, this option will control how solid the bounds
    // are when dragging the map around. The default value of `0.0` allows the
    // user to drag outside the bounds at normal speed, higher values will
    // slow down map dragging outside bounds, and `1.0` makes the bounds fully
    // solid, preventing the user from dragging outside the bounds.
    maxBoundsViscosity: 0.0
  });
  var Drag = Handler.extend({
    addHooks: function addHooks() {
      if (!this._draggable) {
        var map = this._map;
        this._draggable = new Draggable(map._mapPane, map._container);

        this._draggable.on({
          dragstart: this._onDragStart,
          drag: this._onDrag,
          dragend: this._onDragEnd
        }, this);

        this._draggable.on('predrag', this._onPreDragLimit, this);

        if (map.options.worldCopyJump) {
          this._draggable.on('predrag', this._onPreDragWrap, this);

          map.on('zoomend', this._onZoomEnd, this);
          map.whenReady(this._onZoomEnd, this);
        }
      }

      addClass(this._map._container, 'leaflet-grab leaflet-touch-drag');

      this._draggable.enable();

      this._positions = [];
      this._times = [];
    },
    removeHooks: function removeHooks() {
      removeClass(this._map._container, 'leaflet-grab');
      removeClass(this._map._container, 'leaflet-touch-drag');

      this._draggable.disable();
    },
    moved: function moved() {
      return this._draggable && this._draggable._moved;
    },
    moving: function moving() {
      return this._draggable && this._draggable._moving;
    },
    _onDragStart: function _onDragStart() {
      var map = this._map;

      map._stop();

      if (this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
        var bounds = toLatLngBounds(this._map.options.maxBounds);
        this._offsetLimit = toBounds(this._map.latLngToContainerPoint(bounds.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(bounds.getSouthEast()).multiplyBy(-1).add(this._map.getSize()));
        this._viscosity = Math.min(1.0, Math.max(0.0, this._map.options.maxBoundsViscosity));
      } else {
        this._offsetLimit = null;
      }

      map.fire('movestart').fire('dragstart');

      if (map.options.inertia) {
        this._positions = [];
        this._times = [];
      }
    },
    _onDrag: function _onDrag(e) {
      if (this._map.options.inertia) {
        var time = this._lastTime = +new Date(),
            pos = this._lastPos = this._draggable._absPos || this._draggable._newPos;

        this._positions.push(pos);

        this._times.push(time);

        this._prunePositions(time);
      }

      this._map.fire('move', e).fire('drag', e);
    },
    _prunePositions: function _prunePositions(time) {
      while (this._positions.length > 1 && time - this._times[0] > 50) {
        this._positions.shift();

        this._times.shift();
      }
    },
    _onZoomEnd: function _onZoomEnd() {
      var pxCenter = this._map.getSize().divideBy(2),
          pxWorldCenter = this._map.latLngToLayerPoint([0, 0]);

      this._initialWorldOffset = pxWorldCenter.subtract(pxCenter).x;
      this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
    },
    _viscousLimit: function _viscousLimit(value, threshold) {
      return value - (value - threshold) * this._viscosity;
    },
    _onPreDragLimit: function _onPreDragLimit() {
      if (!this._viscosity || !this._offsetLimit) {
        return;
      }

      var offset = this._draggable._newPos.subtract(this._draggable._startPos);

      var limit = this._offsetLimit;

      if (offset.x < limit.min.x) {
        offset.x = this._viscousLimit(offset.x, limit.min.x);
      }

      if (offset.y < limit.min.y) {
        offset.y = this._viscousLimit(offset.y, limit.min.y);
      }

      if (offset.x > limit.max.x) {
        offset.x = this._viscousLimit(offset.x, limit.max.x);
      }

      if (offset.y > limit.max.y) {
        offset.y = this._viscousLimit(offset.y, limit.max.y);
      }

      this._draggable._newPos = this._draggable._startPos.add(offset);
    },
    _onPreDragWrap: function _onPreDragWrap() {
      // TODO refactor to be able to adjust map pane position after zoom
      var worldWidth = this._worldWidth,
          halfWidth = Math.round(worldWidth / 2),
          dx = this._initialWorldOffset,
          x = this._draggable._newPos.x,
          newX1 = (x - halfWidth + dx) % worldWidth + halfWidth - dx,
          newX2 = (x + halfWidth + dx) % worldWidth - halfWidth - dx,
          newX = Math.abs(newX1 + dx) < Math.abs(newX2 + dx) ? newX1 : newX2;
      this._draggable._absPos = this._draggable._newPos.clone();
      this._draggable._newPos.x = newX;
    },
    _onDragEnd: function _onDragEnd(e) {
      var map = this._map,
          options = map.options,
          noInertia = !options.inertia || this._times.length < 2;
      map.fire('dragend', e);

      if (noInertia) {
        map.fire('moveend');
      } else {
        this._prunePositions(+new Date());

        var direction = this._lastPos.subtract(this._positions[0]),
            duration = (this._lastTime - this._times[0]) / 1000,
            ease = options.easeLinearity,
            speedVector = direction.multiplyBy(ease / duration),
            speed = speedVector.distanceTo([0, 0]),
            limitedSpeed = Math.min(options.inertiaMaxSpeed, speed),
            limitedSpeedVector = speedVector.multiplyBy(limitedSpeed / speed),
            decelerationDuration = limitedSpeed / (options.inertiaDeceleration * ease),
            offset = limitedSpeedVector.multiplyBy(-decelerationDuration / 2).round();

        if (!offset.x && !offset.y) {
          map.fire('moveend');
        } else {
          offset = map._limitOffset(offset, map.options.maxBounds);
          requestAnimFrame(function () {
            map.panBy(offset, {
              duration: decelerationDuration,
              easeLinearity: ease,
              noMoveStart: true,
              animate: true
            });
          });
        }
      }
    }
  }); // @section Handlers
  // @property dragging: Handler
  // Map dragging handler (by both mouse and touch).

  Map.addInitHook('addHandler', 'dragging', Drag);
  /*
   * L.Map.Keyboard is handling keyboard interaction with the map, enabled by default.
   */
  // @namespace Map
  // @section Keyboard Navigation Options

  Map.mergeOptions({
    // @option keyboard: Boolean = true
    // Makes the map focusable and allows users to navigate the map with keyboard
    // arrows and `+`/`-` keys.
    keyboard: true,
    // @option keyboardPanDelta: Number = 80
    // Amount of pixels to pan when pressing an arrow key.
    keyboardPanDelta: 80
  });
  var Keyboard = Handler.extend({
    keyCodes: {
      left: [37],
      right: [39],
      down: [40],
      up: [38],
      zoomIn: [187, 107, 61, 171],
      zoomOut: [189, 109, 54, 173]
    },
    initialize: function initialize(map) {
      this._map = map;

      this._setPanDelta(map.options.keyboardPanDelta);

      this._setZoomDelta(map.options.zoomDelta);
    },
    addHooks: function addHooks() {
      var container = this._map._container; // make the container focusable by tabbing

      if (container.tabIndex <= 0) {
        container.tabIndex = '0';
      }

      on(container, {
        focus: this._onFocus,
        blur: this._onBlur,
        mousedown: this._onMouseDown
      }, this);

      this._map.on({
        focus: this._addHooks,
        blur: this._removeHooks
      }, this);
    },
    removeHooks: function removeHooks() {
      this._removeHooks();

      off(this._map._container, {
        focus: this._onFocus,
        blur: this._onBlur,
        mousedown: this._onMouseDown
      }, this);

      this._map.off({
        focus: this._addHooks,
        blur: this._removeHooks
      }, this);
    },
    _onMouseDown: function _onMouseDown() {
      if (this._focused) {
        return;
      }

      var body = document.body,
          docEl = document.documentElement,
          top = body.scrollTop || docEl.scrollTop,
          left = body.scrollLeft || docEl.scrollLeft;

      this._map._container.focus();

      window.scrollTo(left, top);
    },
    _onFocus: function _onFocus() {
      this._focused = true;

      this._map.fire('focus');
    },
    _onBlur: function _onBlur() {
      this._focused = false;

      this._map.fire('blur');
    },
    _setPanDelta: function _setPanDelta(panDelta) {
      var keys = this._panKeys = {},
          codes = this.keyCodes,
          i,
          len;

      for (i = 0, len = codes.left.length; i < len; i++) {
        keys[codes.left[i]] = [-1 * panDelta, 0];
      }

      for (i = 0, len = codes.right.length; i < len; i++) {
        keys[codes.right[i]] = [panDelta, 0];
      }

      for (i = 0, len = codes.down.length; i < len; i++) {
        keys[codes.down[i]] = [0, panDelta];
      }

      for (i = 0, len = codes.up.length; i < len; i++) {
        keys[codes.up[i]] = [0, -1 * panDelta];
      }
    },
    _setZoomDelta: function _setZoomDelta(zoomDelta) {
      var keys = this._zoomKeys = {},
          codes = this.keyCodes,
          i,
          len;

      for (i = 0, len = codes.zoomIn.length; i < len; i++) {
        keys[codes.zoomIn[i]] = zoomDelta;
      }

      for (i = 0, len = codes.zoomOut.length; i < len; i++) {
        keys[codes.zoomOut[i]] = -zoomDelta;
      }
    },
    _addHooks: function _addHooks() {
      on(document, 'keydown', this._onKeyDown, this);
    },
    _removeHooks: function _removeHooks() {
      off(document, 'keydown', this._onKeyDown, this);
    },
    _onKeyDown: function _onKeyDown(e) {
      if (e.altKey || e.ctrlKey || e.metaKey) {
        return;
      }

      var key = e.keyCode,
          map = this._map,
          offset;

      if (key in this._panKeys) {
        if (map._panAnim && map._panAnim._inProgress) {
          return;
        }

        offset = this._panKeys[key];

        if (e.shiftKey) {
          offset = toPoint(offset).multiplyBy(3);
        }

        map.panBy(offset);

        if (map.options.maxBounds) {
          map.panInsideBounds(map.options.maxBounds);
        }
      } else if (key in this._zoomKeys) {
        map.setZoom(map.getZoom() + (e.shiftKey ? 3 : 1) * this._zoomKeys[key]);
      } else if (key === 27 && map._popup && map._popup.options.closeOnEscapeKey) {
        map.closePopup();
      } else {
        return;
      }

      stop(e);
    }
  }); // @section Handlers
  // @section Handlers
  // @property keyboard: Handler
  // Keyboard navigation handler.

  Map.addInitHook('addHandler', 'keyboard', Keyboard);
  /*
   * L.Handler.ScrollWheelZoom is used by L.Map to enable mouse scroll wheel zoom on the map.
   */
  // @namespace Map
  // @section Interaction Options

  Map.mergeOptions({
    // @section Mousewheel options
    // @option scrollWheelZoom: Boolean|String = true
    // Whether the map can be zoomed by using the mouse wheel. If passed `'center'`,
    // it will zoom to the center of the view regardless of where the mouse was.
    scrollWheelZoom: true,
    // @option wheelDebounceTime: Number = 40
    // Limits the rate at which a wheel can fire (in milliseconds). By default
    // user can't zoom via wheel more often than once per 40 ms.
    wheelDebounceTime: 40,
    // @option wheelPxPerZoomLevel: Number = 60
    // How many scroll pixels (as reported by [L.DomEvent.getWheelDelta](#domevent-getwheeldelta))
    // mean a change of one full zoom level. Smaller values will make wheel-zooming
    // faster (and vice versa).
    wheelPxPerZoomLevel: 60
  });
  var ScrollWheelZoom = Handler.extend({
    addHooks: function addHooks() {
      on(this._map._container, 'mousewheel', this._onWheelScroll, this);
      this._delta = 0;
    },
    removeHooks: function removeHooks() {
      off(this._map._container, 'mousewheel', this._onWheelScroll, this);
    },
    _onWheelScroll: function _onWheelScroll(e) {
      var delta = getWheelDelta(e);
      var debounce = this._map.options.wheelDebounceTime;
      this._delta += delta;
      this._lastMousePos = this._map.mouseEventToContainerPoint(e);

      if (!this._startTime) {
        this._startTime = +new Date();
      }

      var left = Math.max(debounce - (+new Date() - this._startTime), 0);
      clearTimeout(this._timer);
      this._timer = setTimeout(bind(this._performZoom, this), left);
      stop(e);
    },
    _performZoom: function _performZoom() {
      var map = this._map,
          zoom = map.getZoom(),
          snap = this._map.options.zoomSnap || 0;

      map._stop(); // stop panning and fly animations if any
      // map the delta with a sigmoid function to -4..4 range leaning on -1..1


      var d2 = this._delta / (this._map.options.wheelPxPerZoomLevel * 4),
          d3 = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(d2)))) / Math.LN2,
          d4 = snap ? Math.ceil(d3 / snap) * snap : d3,
          delta = map._limitZoom(zoom + (this._delta > 0 ? d4 : -d4)) - zoom;
      this._delta = 0;
      this._startTime = null;

      if (!delta) {
        return;
      }

      if (map.options.scrollWheelZoom === 'center') {
        map.setZoom(zoom + delta);
      } else {
        map.setZoomAround(this._lastMousePos, zoom + delta);
      }
    }
  }); // @section Handlers
  // @property scrollWheelZoom: Handler
  // Scroll wheel zoom handler.

  Map.addInitHook('addHandler', 'scrollWheelZoom', ScrollWheelZoom);
  /*
   * L.Map.Tap is used to enable mobile hacks like quick taps and long hold.
   */
  // @namespace Map
  // @section Interaction Options

  Map.mergeOptions({
    // @section Touch interaction options
    // @option tap: Boolean = true
    // Enables mobile hacks for supporting instant taps (fixing 200ms click
    // delay on iOS/Android) and touch holds (fired as `contextmenu` events).
    tap: true,
    // @option tapTolerance: Number = 15
    // The max number of pixels a user can shift his finger during touch
    // for it to be considered a valid tap.
    tapTolerance: 15
  });
  var Tap = Handler.extend({
    addHooks: function addHooks() {
      on(this._map._container, 'touchstart', this._onDown, this);
    },
    removeHooks: function removeHooks() {
      off(this._map._container, 'touchstart', this._onDown, this);
    },
    _onDown: function _onDown(e) {
      if (!e.touches) {
        return;
      }

      preventDefault(e);
      this._fireClick = true; // don't simulate click or track longpress if more than 1 touch

      if (e.touches.length > 1) {
        this._fireClick = false;
        clearTimeout(this._holdTimeout);
        return;
      }

      var first = e.touches[0],
          el = first.target;
      this._startPos = this._newPos = new Point(first.clientX, first.clientY); // if touching a link, highlight it

      if (el.tagName && el.tagName.toLowerCase() === 'a') {
        addClass(el, 'leaflet-active');
      } // simulate long hold but setting a timeout


      this._holdTimeout = setTimeout(bind(function () {
        if (this._isTapValid()) {
          this._fireClick = false;

          this._onUp();

          this._simulateEvent('contextmenu', first);
        }
      }, this), 1000);

      this._simulateEvent('mousedown', first);

      on(document, {
        touchmove: this._onMove,
        touchend: this._onUp
      }, this);
    },
    _onUp: function _onUp(e) {
      clearTimeout(this._holdTimeout);
      off(document, {
        touchmove: this._onMove,
        touchend: this._onUp
      }, this);

      if (this._fireClick && e && e.changedTouches) {
        var first = e.changedTouches[0],
            el = first.target;

        if (el && el.tagName && el.tagName.toLowerCase() === 'a') {
          removeClass(el, 'leaflet-active');
        }

        this._simulateEvent('mouseup', first); // simulate click if the touch didn't move too much


        if (this._isTapValid()) {
          this._simulateEvent('click', first);
        }
      }
    },
    _isTapValid: function _isTapValid() {
      return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
    },
    _onMove: function _onMove(e) {
      var first = e.touches[0];
      this._newPos = new Point(first.clientX, first.clientY);

      this._simulateEvent('mousemove', first);
    },
    _simulateEvent: function _simulateEvent(type, e) {
      var simulatedEvent = document.createEvent('MouseEvents');
      simulatedEvent._simulated = true;
      e.target._simulatedClick = true;
      simulatedEvent.initMouseEvent(type, true, true, window, 1, e.screenX, e.screenY, e.clientX, e.clientY, false, false, false, false, 0, null);
      e.target.dispatchEvent(simulatedEvent);
    }
  }); // @section Handlers
  // @property tap: Handler
  // Mobile touch hacks (quick tap and touch hold) handler.

  if (touch && !pointer) {
    Map.addInitHook('addHandler', 'tap', Tap);
  }
  /*
   * L.Handler.TouchZoom is used by L.Map to add pinch zoom on supported mobile browsers.
   */
  // @namespace Map
  // @section Interaction Options


  Map.mergeOptions({
    // @section Touch interaction options
    // @option touchZoom: Boolean|String = *
    // Whether the map can be zoomed by touch-dragging with two fingers. If
    // passed `'center'`, it will zoom to the center of the view regardless of
    // where the touch events (fingers) were. Enabled for touch-capable web
    // browsers except for old Androids.
    touchZoom: touch && !android23,
    // @option bounceAtZoomLimits: Boolean = true
    // Set it to false if you don't want the map to zoom beyond min/max zoom
    // and then bounce back when pinch-zooming.
    bounceAtZoomLimits: true
  });
  var TouchZoom = Handler.extend({
    addHooks: function addHooks() {
      addClass(this._map._container, 'leaflet-touch-zoom');
      on(this._map._container, 'touchstart', this._onTouchStart, this);
    },
    removeHooks: function removeHooks() {
      removeClass(this._map._container, 'leaflet-touch-zoom');
      off(this._map._container, 'touchstart', this._onTouchStart, this);
    },
    _onTouchStart: function _onTouchStart(e) {
      var map = this._map;

      if (!e.touches || e.touches.length !== 2 || map._animatingZoom || this._zooming) {
        return;
      }

      var p1 = map.mouseEventToContainerPoint(e.touches[0]),
          p2 = map.mouseEventToContainerPoint(e.touches[1]);
      this._centerPoint = map.getSize()._divideBy(2);
      this._startLatLng = map.containerPointToLatLng(this._centerPoint);

      if (map.options.touchZoom !== 'center') {
        this._pinchStartLatLng = map.containerPointToLatLng(p1.add(p2)._divideBy(2));
      }

      this._startDist = p1.distanceTo(p2);
      this._startZoom = map.getZoom();
      this._moved = false;
      this._zooming = true;

      map._stop();

      on(document, 'touchmove', this._onTouchMove, this);
      on(document, 'touchend', this._onTouchEnd, this);
      preventDefault(e);
    },
    _onTouchMove: function _onTouchMove(e) {
      if (!e.touches || e.touches.length !== 2 || !this._zooming) {
        return;
      }

      var map = this._map,
          p1 = map.mouseEventToContainerPoint(e.touches[0]),
          p2 = map.mouseEventToContainerPoint(e.touches[1]),
          scale = p1.distanceTo(p2) / this._startDist;

      this._zoom = map.getScaleZoom(scale, this._startZoom);

      if (!map.options.bounceAtZoomLimits && (this._zoom < map.getMinZoom() && scale < 1 || this._zoom > map.getMaxZoom() && scale > 1)) {
        this._zoom = map._limitZoom(this._zoom);
      }

      if (map.options.touchZoom === 'center') {
        this._center = this._startLatLng;

        if (scale === 1) {
          return;
        }
      } else {
        // Get delta from pinch to center, so centerLatLng is delta applied to initial pinchLatLng
        var delta = p1._add(p2)._divideBy(2)._subtract(this._centerPoint);

        if (scale === 1 && delta.x === 0 && delta.y === 0) {
          return;
        }

        this._center = map.unproject(map.project(this._pinchStartLatLng, this._zoom).subtract(delta), this._zoom);
      }

      if (!this._moved) {
        map._moveStart(true, false);

        this._moved = true;
      }

      cancelAnimFrame(this._animRequest);
      var moveFn = bind(map._move, map, this._center, this._zoom, {
        pinch: true,
        round: false
      });
      this._animRequest = requestAnimFrame(moveFn, this, true);
      preventDefault(e);
    },
    _onTouchEnd: function _onTouchEnd() {
      if (!this._moved || !this._zooming) {
        this._zooming = false;
        return;
      }

      this._zooming = false;
      cancelAnimFrame(this._animRequest);
      off(document, 'touchmove', this._onTouchMove);
      off(document, 'touchend', this._onTouchEnd); // Pinch updates GridLayers' levels only when zoomSnap is off, so zoomSnap becomes noUpdate.

      if (this._map.options.zoomAnimation) {
        this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), true, this._map.options.zoomSnap);
      } else {
        this._map._resetView(this._center, this._map._limitZoom(this._zoom));
      }
    }
  }); // @section Handlers
  // @property touchZoom: Handler
  // Touch zoom handler.

  Map.addInitHook('addHandler', 'touchZoom', TouchZoom);
  Map.BoxZoom = BoxZoom;
  Map.DoubleClickZoom = DoubleClickZoom;
  Map.Drag = Drag;
  Map.Keyboard = Keyboard;
  Map.ScrollWheelZoom = ScrollWheelZoom;
  Map.Tap = Tap;
  Map.TouchZoom = TouchZoom; // misc

  var oldL = window.L;

  function noConflict() {
    window.L = oldL;
    return this;
  } // Always export us to window global (see #2364)


  window.L = exports;
  Object.freeze = freeze;
  exports.version = version;
  exports.noConflict = noConflict;
  exports.Control = Control;
  exports.control = control;
  exports.Browser = Browser;
  exports.Evented = Evented;
  exports.Mixin = Mixin;
  exports.Util = Util;
  exports.Class = Class;
  exports.Handler = Handler;
  exports.extend = extend;
  exports.bind = bind;
  exports.stamp = stamp;
  exports.setOptions = setOptions;
  exports.DomEvent = DomEvent;
  exports.DomUtil = DomUtil;
  exports.PosAnimation = PosAnimation;
  exports.Draggable = Draggable;
  exports.LineUtil = LineUtil;
  exports.PolyUtil = PolyUtil;
  exports.Point = Point;
  exports.point = toPoint;
  exports.Bounds = Bounds;
  exports.bounds = toBounds;
  exports.Transformation = Transformation;
  exports.transformation = toTransformation;
  exports.Projection = index;
  exports.LatLng = LatLng;
  exports.latLng = toLatLng;
  exports.LatLngBounds = LatLngBounds;
  exports.latLngBounds = toLatLngBounds;
  exports.CRS = CRS;
  exports.GeoJSON = GeoJSON;
  exports.geoJSON = geoJSON;
  exports.geoJson = geoJson;
  exports.Layer = Layer;
  exports.LayerGroup = LayerGroup;
  exports.layerGroup = layerGroup;
  exports.FeatureGroup = FeatureGroup;
  exports.featureGroup = featureGroup;
  exports.ImageOverlay = ImageOverlay;
  exports.imageOverlay = imageOverlay;
  exports.VideoOverlay = VideoOverlay;
  exports.videoOverlay = videoOverlay;
  exports.DivOverlay = DivOverlay;
  exports.Popup = Popup;
  exports.popup = popup;
  exports.Tooltip = Tooltip;
  exports.tooltip = tooltip;
  exports.Icon = Icon;
  exports.icon = icon;
  exports.DivIcon = DivIcon;
  exports.divIcon = divIcon;
  exports.Marker = Marker;
  exports.marker = marker;
  exports.TileLayer = TileLayer;
  exports.tileLayer = tileLayer;
  exports.GridLayer = GridLayer;
  exports.gridLayer = gridLayer;
  exports.SVG = SVG;
  exports.svg = svg$1;
  exports.Renderer = Renderer;
  exports.Canvas = Canvas;
  exports.canvas = canvas$1;
  exports.Path = Path;
  exports.CircleMarker = CircleMarker;
  exports.circleMarker = circleMarker;
  exports.Circle = Circle;
  exports.circle = circle;
  exports.Polyline = Polyline;
  exports.polyline = polyline;
  exports.Polygon = Polygon;
  exports.polygon = polygon;
  exports.Rectangle = Rectangle;
  exports.rectangle = rectangle;
  exports.Map = Map;
  exports.map = createMap;
});

/***/ }),

/***/ "./model.ts":
/*!******************!*\
  !*** ./model.ts ***!
  \******************/
/*! exports provided: LocationFormat, LocationType, LocationSources, MapCenterType, MapCenters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationFormat", function() { return LocationFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationType", function() { return LocationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationSources", function() { return LocationSources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapCenterType", function() { return MapCenterType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapCenters", function() { return MapCenters; });
var LocationFormat =
/** @class */
function () {
  function LocationFormat() {}

  LocationFormat.Table = 'Table';
  LocationFormat.Timeseries = 'Timeseries';
  LocationFormat.JSON = 'JSON';
  return LocationFormat;
}();



var LocationType =
/** @class */
function () {
  function LocationType() {}

  LocationType.Generic = 'Generic';
  LocationType.Table = 'Table with latitude/longitude or geohash fields';
  LocationType.TimeseriesBuiltin = 'Time series, resolve location by matching metric name against';
  LocationType.TimeseriesJson = 'Time series, resolve location from custom JSON';
  return LocationType;
}();


var LocationSources = [{
  id: null,
  label: '--- Select data format and location mapping ---'
}, {
  id: 'geohash',
  label: 'geohash field or tag from database',
  type: LocationType.Generic,
  format: [LocationFormat.Timeseries, LocationFormat.Table]
}, {
  id: 'json result',
  label: 'JSON from data source',
  type: LocationType.Generic,
  format: LocationFormat.JSON
}, {
  id: 'table',
  label: 'Obtain label from database',
  type: LocationType.Table,
  format: LocationFormat.Table
}, {
  id: 'table+json',
  label: 'Obtain label by JSON lookup with key value from database',
  type: LocationType.Table,
  format: LocationFormat.Table
}, {
  id: 'table+jsonp',
  label: 'Obtain label by JSONP lookup with key value from database',
  type: LocationType.Table,
  format: LocationFormat.Table
}, {
  id: 'json endpoint',
  label: 'Match metric name against key value of JSON record',
  type: LocationType.TimeseriesJson,
  format: LocationFormat.Timeseries
}, {
  id: 'jsonp endpoint',
  label: 'Match metric name against key value of JSON record (JSONP)',
  type: LocationType.TimeseriesJson,
  format: LocationFormat.Timeseries
}, {
  id: 'countries',
  label: '2-letter country codes',
  type: LocationType.TimeseriesBuiltin,
  format: LocationFormat.Timeseries
}, {
  id: 'countries_3letter',
  label: '3-letter country codes',
  type: LocationType.TimeseriesBuiltin,
  format: LocationFormat.Timeseries
}, {
  id: 'states',
  label: '2-letter US state codes',
  type: LocationType.TimeseriesBuiltin,
  format: LocationFormat.Timeseries
}, {
  id: 'probes',
  label: 'Grafana worldPing probes',
  type: LocationType.TimeseriesBuiltin,
  format: LocationFormat.Timeseries
}];

var MapCenterType =
/** @class */
function () {
  function MapCenterType() {}

  MapCenterType.Other = 'Others';
  MapCenterType.Region = 'Regions';
  MapCenterType.Country = 'Countries';
  MapCenterType.City = 'Cities';
  return MapCenterType;
}();


var MapCenters = [{
  id: null,
  label: '--- Select map center and zoom level ---'
}, {
  id: 'custom',
  label: 'custom',
  type: MapCenterType.Other
}, {
  id: '(0°, 0°)',
  label: 'World',
  type: MapCenterType.Other,
  data: {
    mapCenterLatitude: 0,
    mapCenterLongitude: 0,
    initialZoom: 1
  }
}, {
  id: 'First GeoHash',
  label: 'First GeoHash',
  type: MapCenterType.Other
}, {
  id: 'Last GeoHash',
  label: 'Last GeoHash',
  type: MapCenterType.Other
}, {
  id: 'Europe',
  label: 'Europe',
  type: MapCenterType.Region,
  data: {
    mapCenterLatitude: 46,
    mapCenterLongitude: 14,
    initialZoom: 4
  }
}, {
  id: 'North America',
  label: 'North America',
  type: MapCenterType.Region,
  data: {
    mapCenterLatitude: 40,
    mapCenterLongitude: -100,
    initialZoom: 3
  }
}, {
  id: 'SE Asia',
  label: 'South-East Asia',
  type: MapCenterType.Region,
  data: {
    mapCenterLatitude: 10,
    mapCenterLongitude: 106,
    initialZoom: 4
  }
}, {
  id: 'West Asia',
  label: 'West Asia',
  type: MapCenterType.Region,
  data: {
    mapCenterLatitude: 26,
    mapCenterLongitude: 53,
    initialZoom: 4
  }
}, {
  id: 'Belgium',
  label: 'Belgium',
  type: MapCenterType.Country,
  data: {
    mapCenterLatitude: 50.53665,
    mapCenterLongitude: 4.39851,
    initialZoom: 7
  }
}, {
  id: 'Germany',
  label: 'Germany',
  type: MapCenterType.Country,
  data: {
    mapCenterLatitude: 51.35149,
    mapCenterLongitude: 10.45412,
    initialZoom: 5
  }
}, {
  id: 'Sweden',
  label: 'Sweden',
  type: MapCenterType.Country,
  data: {
    mapCenterLatitude: 62.91154,
    mapCenterLongitude: 17.38539,
    initialZoom: 4
  }
}, {
  id: 'Berlin',
  label: 'Berlin',
  type: MapCenterType.City,
  data: {
    mapCenterLatitude: 52.51733,
    mapCenterLongitude: 13.38886,
    initialZoom: 10
  }
}, {
  id: 'New York',
  label: 'New York',
  type: MapCenterType.City,
  data: {
    mapCenterLatitude: 40.69715,
    mapCenterLongitude: -73.97964,
    initialZoom: 10
  }
}, {
  id: 'Stockholm',
  label: 'Stockholm',
  type: MapCenterType.City,
  data: {
    mapCenterLatitude: 59.32549,
    mapCenterLongitude: 18.07109,
    initialZoom: 11
  }
}];

/***/ }),

/***/ "./module.ts":
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
/*! exports provided: PanelCtrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _worldmap_ctrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./worldmap_ctrl */ "./worldmap_ctrl.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelCtrl", function() { return _worldmap_ctrl__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* eslint import/no-extraneous-dependencies: 0 */



/***/ }),

/***/ "./settings.ts":
/*!*********************!*\
  !*** ./settings.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


var PluginSettings =
/** @class */
function () {
  function PluginSettings(model, templateSrv, request) {
    this.model = model;
    this.templateSrv = templateSrv;
    this.request = request;
    this._request = this.request || {};
    this.requestVariables = {};
    this.loadVariablesFromRequest();
    this.establishProperties();
  }

  PluginSettings.prototype.establishProperties = function () {
    var _this = this;

    var _loop_1 = function _loop_1(name_1) {
      Object.defineProperty(this_1, name_1, {
        get: function get() {
          return _this.interpolateVariable(name_1);
        },
        enumerable: true
      });
    };

    var this_1 = this;

    for (var name_1 in this.model) {
      _loop_1(name_1);
    }
  };

  PluginSettings.prototype.loadVariablesFromRequest = function () {
    // Put all request parameters from url into the variable
    // interpolation dictionary, prefixed by `request_`.
    //
    // This enables to use request variables in all panel control options.
    // So, when invoking the dashboard with an url query parameter like
    // `map_center_latitude=42.42`, you would be able to interpolate it to
    // a panel control options by i.e. assigning
    // `mapCenterLatitude: $request_map_center_latitude`.
    for (var key in this._request) {
      var value = this._request[key];
      key = 'request_' + key;
      this.requestVariables[key] = value;
    }
  };

  PluginSettings.prototype.interpolateVariable = function (name, variables) {
    variables = variables || {};
    variables = lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"](variables);

    lodash__WEBPACK_IMPORTED_MODULE_0__["merge"](variables, this.requestVariables); // By default, use vanilla control option attribute from panel data model.


    var value = this.model[name]; // Optionally, use `panel-` variables from request query parameters.

    value = this.getVariableFromRequest(name, value); // Interpolate the dashboard and dataPoint variables.

    return this.interpolateVariableValue(value, variables);
  };

  PluginSettings.prototype.interpolateVariableValue = function (target, variables, format) {
    if (typeof target === 'string') {
      var scopedVariables = this.toScoped(variables || {});
      target = this.templateSrv.replace(target, scopedVariables, format);
    }

    return target;
  };

  PluginSettings.prototype.toScoped = function (variables) {
    var scopedVars = {};

    for (var key in variables) {
      var value = variables[key];
      scopedVars[key] = {
        text: key,
        value: value
      };
    }

    return scopedVars;
  };

  PluginSettings.prototype.getVariableFromRequest = function (name, value) {
    // When given, use request variable "panel-*", making things like these possible.
    // - ?panel-mapCenterLatitude=62.2
    // - ?panel-showZoomControl=false
    // - ?panel-clickthroughUrl=/path/to/?geohash=$__field_geohash
    // - https://daq.example.org/d/D1Fx12kWk/magic-dashboard?panel-clickthroughUrl=/path/to/?foobar=$request_foobar&foobar=hello
    var panelQueryName = 'panel-' + name;
    var panelQueryValue = this._request[panelQueryName];

    if (panelQueryValue !== undefined) {
      // Apply appropriate type conversion. This is important for booleans.
      if (typeof value === 'boolean') {
        value = asBool(panelQueryValue);
      } else {
        value = panelQueryValue;
      }
    }

    return value;
  };

  return PluginSettings;
}();

/* harmony default export */ __webpack_exports__["default"] = (PluginSettings);

function asBool(value) {
  // https://stackoverflow.com/questions/263965/how-can-i-convert-a-string-to-boolean-in-javascript/1414175#1414175
  switch (value.toLowerCase().trim()) {
    case 'true':
    case 'yes':
    case '1':
      return true;

    case 'false':
    case 'no':
    case '0':
    case null:
      return false;

    default:
      return Boolean(value);
  }
}

/***/ }),

/***/ "./styles/images/layers-2x.png":
/*!*************************************!*\
  !*** ./styles/images/layers-2x.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/styles/images/layers-2x.png";

/***/ }),

/***/ "./styles/images/layers.png":
/*!**********************************!*\
  !*** ./styles/images/layers.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/styles/images/layers.png";

/***/ }),

/***/ "./styles/leaflet.css":
/*!****************************!*\
  !*** ./styles/leaflet.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--8-1!../../node_modules/postcss-loader/src??ref--8-2!../../node_modules/sass-loader/lib/loader.js!./leaflet.css */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/lib/loader.js!./styles/leaflet.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./styles/worldmap-panel.css":
/*!***********************************!*\
  !*** ./styles/worldmap-panel.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--8-1!../../node_modules/postcss-loader/src??ref--8-2!../../node_modules/sass-loader/lib/loader.js!./worldmap-panel.css */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/lib/loader.js!./styles/worldmap-panel.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./worldmap.ts":
/*!*********************!*\
  !*** ./worldmap.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _libs_leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/leaflet */ "./libs/leaflet.js");
/* harmony import */ var _libs_leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_libs_leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _geoman_io_leaflet_geoman_free__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @geoman-io/leaflet-geoman-free */ "../node_modules/@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.min.js");
/* harmony import */ var _geoman_io_leaflet_geoman_free__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_geoman_io_leaflet_geoman_free__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _geoman_io_leaflet_geoman_free_dist_leaflet_geoman_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css */ "../node_modules/@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css");
/* harmony import */ var _geoman_io_leaflet_geoman_free_dist_leaflet_geoman_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_geoman_io_leaflet_geoman_free_dist_leaflet_geoman_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var leaflet_easybutton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! leaflet-easybutton */ "../node_modules/leaflet-easybutton/src/easy-button.js");
/* harmony import */ var leaflet_easybutton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(leaflet_easybutton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var images_layers_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! images/layers.png */ "./images/layers.png");
/* harmony import */ var images_layers_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(images_layers_png__WEBPACK_IMPORTED_MODULE_6__);







var tileServers = {
  'CartoDB Positron': {
    url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> ' + '&copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
    subdomains: 'abcd'
  },
  'CartoDB Dark': {
    url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png',
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> ' + '&copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
    subdomains: 'abcd'
  }
};
var tileServers2 = {
  First: _libs_leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"]('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a>First</a>',
    maxZoom: 17
  }),
  Second: _libs_leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"]('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a>Second</a>',
    maxZoom: 17
  }),
  Third: _libs_leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"]('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a>Third</a>',
    maxZoom: 17
  })
};

var WorldMap =
/** @class */
function () {
  function WorldMap(ctrl, mapContainer) {
    this.ctrl = ctrl;
    this.mapContainer = mapContainer;
    this.circles = [];
  }

  WorldMap.prototype.createMap = function () {
    if (this.ctrl.settings.tileserverUrlLight) {
      tileServers['CartoDB Positron'].url = this.ctrl.settings.interpolateVariable('tileserverUrlLight');
    }

    if (this.ctrl.settings.tileserverUrlDark) {
      tileServers['CartoDB Dark'].url = this.ctrl.settings.interpolateVariable('tileserverUrlDark');
    }

    if (this.ctrl.settings.tileserverUrlFirst) {
      tileServers2.First._url = this.ctrl.settings.interpolateVariable('tileserverUrlFirst');
    }

    if (this.ctrl.settings.tileserverUrlSecond) {
      tileServers2.Second._url = this.ctrl.settings.interpolateVariable('tileserverUrlSecond');
    }

    if (this.ctrl.settings.tileserverUrlThird) {
      tileServers2.Third._url = this.ctrl.settings.interpolateVariable('tileserverUrlThird');
    }

    var center = this.ctrl.settings.center;
    var mapCenter = window.L.latLng(center.mapCenterLatitude, center.mapCenterLongitude);
    var zoomLevel = this.getEffectiveZoomLevel(center.mapZoomLevel);
    this.map = _libs_leaflet__WEBPACK_IMPORTED_MODULE_2__["map"](this.mapContainer, {
      worldCopyJump: true,
      preferCanvas: true,
      center: mapCenter,
      zoom: zoomLevel,
      zoomControl: this.ctrl.settings.showZoomControl,
      attributionControl: this.ctrl.settings.showAttribution
    });
    this.setMouseWheelZoom();
    var selectedTileServer = tileServers[this.ctrl.tileServer];
    window.L.tileLayer(selectedTileServer.url, {
      maxZoom: 18,
      subdomains: selectedTileServer.subdomains,
      reuseTiles: true,
      detectRetina: true,
      attribution: selectedTileServer.attribution
    }).addTo(this.map);
    _libs_leaflet__WEBPACK_IMPORTED_MODULE_2__["PM"].initialize({
      optIn: false
    });
    _libs_leaflet__WEBPACK_IMPORTED_MODULE_2__["marker"]([51.50915, -0.096112], {
      pmIgnore: true
    }).addTo(this.map);
    this.map.pm.addControls({
      position: 'topleft',
      drawMarker: false,
      editMode: false,
      dragMode: false,
      cutPolygon: false,
      drawCircleMarker: false
    });
    _libs_leaflet__WEBPACK_IMPORTED_MODULE_2__["easyButton"]('<div style="background-color: DodgerBlue;height: 6px;width: 0px;margin: -1px;box-shadow: 0 0 1px 11px dodgerblue;margin-left: 2px;"></div>', function (btn, map) {
      map.pm.setPathOptions({
        color: 'DodgerBlue',
        fillColor: 'DodgerBlue',
        fillOpacity: 0.15,
        weight: 1.5
      });
    }).addTo(this.map);
    _libs_leaflet__WEBPACK_IMPORTED_MODULE_2__["easyButton"]('<div style="background-color: Crimson;height: 6px;width: 0px;margin: -1px;box-shadow: 0 0 1px 11px Crimson;margin-left: 2px;"></div>', function (btn, map) {
      map.pm.setPathOptions({
        color: 'Crimson',
        fillColor: 'Crimson',
        fillOpacity: 0.15,
        weight: 1.5
      });
    }).addTo(this.map);
    _libs_leaflet__WEBPACK_IMPORTED_MODULE_2__["easyButton"]('<div style="background-color: LimeGreen;height: 6px;width: 0px;margin: -1px;box-shadow: 0 0 1px 11px LimeGreen;margin-left: 2px;"></div>', function (btn, map) {
      map.pm.setPathOptions({
        color: 'LimeGreen',
        fillColor: 'LimeGreen',
        fillOpacity: 0.15,
        weight: 1.5
      });
    }).addTo(this.map);
    _libs_leaflet__WEBPACK_IMPORTED_MODULE_2__["easyButton"]('<div style="background-color: DimGray;height: 6px;width: 0px;margin: -1px;box-shadow: 0 0 1px 11px DimGray;margin-left: 2px;"></div>', function (btn, map) {
      map.pm.setPathOptions({
        color: 'DimGray',
        fillColor: 'DimGray',
        fillOpacity: 0.15,
        weight: 1.5
      });
    }).addTo(this.map);
    _libs_leaflet__WEBPACK_IMPORTED_MODULE_2__["control"].layers(tileServers2).addTo(this.map);
  };

  WorldMap.prototype.renderMapFirst = function () {
    var _this = this;

    this.map.whenReady(function (ctx, options) {
      _this.renderMap({
        animate: false
      });
    });
  };

  WorldMap.prototype.renderMap = function (options) {
    var _this_1 = this;

    options = options || {};

    lodash__WEBPACK_IMPORTED_MODULE_0__["defaults"](options, {
      animate: true
    });

    if (!this.legend && this.ctrl.settings.showLegend) {
      this.createLegend();
    }

    console.info('Drawing circles');
    this.drawCircles();
    this.drawCustomAttribution();
    setTimeout(function () {
      _this_1.drawMap(options);
    }, 1);
  };

  WorldMap.prototype.drawMap = function (options) {
    console.info('Drawing map');
    this.resize();

    if (this.ctrl.mapCenterMoved) {
      this.panToMapCenter(options);
    } //this.ctrl.updatePanelCorner();

  };

  WorldMap.prototype.getEffectiveZoomLevel = function (zoomLevel) {
    if (this.ctrl.settings.maximumZoom) {
      zoomLevel = Math.min(parseInt(this.ctrl.settings.maximumZoom, 10), zoomLevel);
    }

    return zoomLevel;
  };

  WorldMap.prototype.createLegend = function () {
    var _this_1 = this;

    this.legend = window.L.control({
      position: 'bottomleft'
    });

    this.legend.onAdd = function () {
      _this_1.legend._div = window.L.DomUtil.create('div', 'info legend');

      _this_1.legend.update();

      return _this_1.legend._div;
    };

    this.legend.update = function () {
      var thresholds = _this_1.ctrl.data.thresholds;
      var legendHtml = '';
      legendHtml += '<div class="legend-item"><i style="background:' + _this_1.ctrl.settings.colors[0] + '"></i> ' + '&lt; ' + thresholds[0] + '</div>';

      for (var index = 0; index < thresholds.length; index += 1) {
        legendHtml += '<div class="legend-item"><i style="background:' + _this_1.ctrl.settings.colors[index + 1] + '"></i> ' + thresholds[index] + (thresholds[index + 1] ? '&ndash;' + thresholds[index + 1] + '</div>' : '+');
      }

      _this_1.legend._div.innerHTML = legendHtml;
    };

    this.legend.addTo(this.map); // Optionally display legend in different DOM element.

    if (this.ctrl.settings.legendContainerSelector) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(this.ctrl.settings.legendContainerSelector).append(this.legend._div);
    }
  };

  WorldMap.prototype.needToRedrawCircles = function (data) {
    console.info("Data points " + data.length + ". Circles on map " + this.circles.length + ".");

    if (this.circles.length === 0 && data.length > 0) {
      return true;
    }

    if (this.circles.length !== data.length) {
      return true;
    }

    var locations = lodash__WEBPACK_IMPORTED_MODULE_0__["map"](lodash__WEBPACK_IMPORTED_MODULE_0__["map"](this.circles, 'options'), 'location').sort();

    var dataPoints = lodash__WEBPACK_IMPORTED_MODULE_0__["map"](data, 'key').sort();

    return !lodash__WEBPACK_IMPORTED_MODULE_0__["isEqual"](locations, dataPoints);
  };

  WorldMap.prototype.filterEmptyAndZeroValues = function (data) {
    var _this_1 = this;

    var countBefore = data.length;
    data = lodash__WEBPACK_IMPORTED_MODULE_0__["filter"](data, function (o) {
      return !(_this_1.ctrl.settings.hideEmpty && lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"](o.value)) && !(_this_1.ctrl.settings.hideZero && o.value === 0);
    });
    var countAfter = data.length;
    var countFiltered = countAfter - countBefore;

    if (countFiltered > 0) {
      console.info("Filtered " + countFiltered + " records");
    }

    return data;
  };

  WorldMap.prototype.clearCircles = function () {
    if (this.circlesLayer) {
      this.circlesLayer.clearLayers();
      this.removeCircles();
      this.circles = [];
    }
  };

  WorldMap.prototype.drawCircles = function () {
    var data = this.filterEmptyAndZeroValues(this.ctrl.data);

    if (this.needToRedrawCircles(data)) {
      console.info('Creating circles');
      this.clearCircles();
      this.createCircles(data);
    } else {
      console.info('Updating circles');
      this.updateCircles(data);
    }
  };

  WorldMap.prototype.createCircles = function (data) {
    var _this_1 = this;

    console.log('createCircles: begin');
    var circles = [];
    var circlesByKey = {};
    data.forEach(function (dataPoint) {
      // Todo: Review: Is a "locationName" really required
      //       just for displaying a circle on a map?
      if (!dataPoint.locationName) {
        return;
      }

      var circle;

      if (circlesByKey[dataPoint.key] === undefined) {
        // Create circle.
        circle = _this_1.createCircle(dataPoint);
        circles.push(circle);
        circlesByKey[dataPoint.key] = circle;
      } else {
        // Amend popup content if circle has been created already.
        circle = circlesByKey[dataPoint.key];

        _this_1.extendPopupContent(circle, dataPoint);
      }
    });
    this.circlesLayer = this.addCircles(circles);
    this.circles = circles;
    console.log('createCircles: end');
  };

  WorldMap.prototype.updateCircles = function (data) {
    var _this_1 = this;

    var circlesByKey = {};
    data.forEach(function (dataPoint) {
      // Todo: Review: Is a "locationName" really required
      //       just for displaying a circle on a map?
      if (!dataPoint.locationName) {
        return;
      }

      if (circlesByKey[dataPoint.key] === undefined) {
        // Update circle.
        var circle = _this_1.updateCircle(dataPoint);

        if (circle) {
          circlesByKey[dataPoint.key] = circle;
        }
      } else {
        // Amend popup content if circle has been updated already.
        var circle = circlesByKey[dataPoint.key];

        _this_1.extendPopupContent(circle, dataPoint);
      }
    });
  };

  WorldMap.prototype.createCircle = function (dataPoint) {
    var circle = window.L.circleMarker([dataPoint.locationLatitude, dataPoint.locationLongitude], {
      radius: this.calcCircleSize(dataPoint.value || 0),
      color: this.getColor(dataPoint.value),
      fillColor: this.getColor(dataPoint.value),
      fillOpacity: 0.5,
      location: dataPoint.key,
      stroke: Boolean(this.ctrl.settings.circleOptions.strokeEnabled),
      weight: parseInt(this.ctrl.settings.circleOptions.strokeWeight, 10) || 3
    });
    this.createClickthrough(circle, dataPoint);
    var content = this.getPopupContent(dataPoint.locationName, dataPoint.valueRounded);
    this.createPopup(circle, content);
    return circle;
  };

  WorldMap.prototype.updateCircle = function (dataPoint) {
    // Find back circle object by data point key.
    var circle = lodash__WEBPACK_IMPORTED_MODULE_0__["find"](this.circles, function (cir) {
      return cir.options.location === dataPoint.key;
    });

    if (circle) {
      circle.setRadius(this.calcCircleSize(dataPoint.value || 0));
      circle.setStyle({
        color: this.getColor(dataPoint.value),
        fillColor: this.getColor(dataPoint.value),
        fillOpacity: 0.5,
        location: dataPoint.key
      }); // Re-create popup.

      circle.unbindPopup();
      var content = this.getPopupContent(dataPoint.locationName, dataPoint.valueRounded);
      this.createPopup(circle, content); // Re-create clickthrough-link.

      this.createClickthrough(circle, dataPoint);
      return circle;
    }
  };

  WorldMap.prototype.calcCircleSize = function (dataPointValue) {
    var circleMinSize = parseInt(this.ctrl.settings.circleMinSize, 10) || 1;
    var circleMaxSize = parseInt(this.ctrl.settings.circleMaxSize, 10) || 10; // If measurement value equals zero, use minimum circle size.

    if (dataPointValue === 0) {
      return circleMinSize;
    }

    if (this.ctrl.data.valueRange === 0) {
      return circleMaxSize;
    }

    var dataFactor = (dataPointValue - this.ctrl.data.lowestValue) / this.ctrl.data.valueRange;
    var circleSizeRange = circleMaxSize - circleMinSize;
    return circleSizeRange * dataFactor + circleMinSize;
  };

  WorldMap.prototype.createClickthrough = function (circle, dataPoint) {
    /*
     * Features:
     * - Unify functionality from #129 and #190
     * - Generic variable interpolation from dataPoint
     * - Generic variable interpolation from dashboard variables
     * - Optionally open url in new window
     */
    // First, use link value directly from `clickthroughUrl` setting.
    var linkUrl;

    if (this.ctrl.settings.clickthroughUrl) {
      linkUrl = this.ctrl.settings.interpolateVariable('clickthroughUrl', dataPoint);
    } // Next, use link value from the data itself by using the
    // table control option `linkField` for looking it up.


    if (dataPoint.link) {
      linkUrl = dataPoint.link; // Interpolate the dashboard and dataPoint variables.

      linkUrl = this.ctrl.settings.interpolateVariableValue(linkUrl, dataPoint);
    } // Deactivate all links first.


    circle.off('click'); // Attach "onclick" event to data point linking.

    if (linkUrl) {
      var clickthroughOptions_1 = this.ctrl.settings.clickthroughOptions;
      circle.on('click', function (evt) {
        if (clickthroughOptions_1 && clickthroughOptions_1.windowName) {
          window.open(linkUrl, clickthroughOptions_1.windowName);
        } else {
          window.location.assign(linkUrl);
        }
      });
    }
  };

  WorldMap.prototype.createPopup = function (circle, label) {
    circle.bindPopup(label, {
      offset: window.L.point(0, -2),
      className: 'worldmap-popup',
      closeButton: this.ctrl.settings.stickyLabels,
      autoPan: this.ctrl.settings.autoPanLabels,
      autoWidth: this.ctrl.settings.autoWidthLabels
    });
    circle.on('mouseover', function (evt) {
      var layer = evt.target;
      layer.bringToFront();
      circle.openPopup();
    });

    if (!this.ctrl.settings.stickyLabels) {
      circle.on('mouseout', function () {
        circle.closePopup();
      });
    }
  };

  WorldMap.prototype.extendPopupContent = function (circle, dataPoint) {
    var popup = circle.getPopup();
    var popupContent = popup._content;
    popupContent += "\n" + this.getPopupContent(dataPoint.locationName, dataPoint.valueRounded);
    circle.setPopupContent(popupContent);
  };

  WorldMap.prototype.getPopupContent = function (locationName, value) {
    var unit;

    if (lodash__WEBPACK_IMPORTED_MODULE_0__["isNaN"](value)) {
      value = 'n/a';
    } else {
      unit = value && value === 1 ? this.ctrl.settings.unitSingular : this.ctrl.settings.unitPlural;
    }

    var label = (locationName + ": " + value + " " + (unit || '')).trim();
    return label;
  };

  WorldMap.prototype.getColor = function (value) {
    for (var index = this.ctrl.data.thresholds.length; index > 0; index -= 1) {
      if (value >= this.ctrl.data.thresholds[index - 1]) {
        return this.ctrl.settings.colors[index];
      }
    }

    return lodash__WEBPACK_IMPORTED_MODULE_0__["first"](this.ctrl.settings.colors);
  };

  WorldMap.prototype.resize = function () {
    this.map.invalidateSize();
  };

  WorldMap.prototype.panToMapCenter = function (options) {
    console.log('panToMapCenter'); // Get a bunch of metadata from settings and data which
    // controls the map centering and zoom level.

    var mapDimensions = this.ctrl.settings.center;
    var coordinates = [mapDimensions.mapCenterLatitude, mapDimensions.mapCenterLongitude];
    var zoomLevel = mapDimensions.mapZoomLevel;

    if (mapDimensions.mapFitData) {
      // Choose optimal map center and zoom level based on the data points displayed.
      // This is done by computing the boundaries of a Leaflet feature group created
      // from the contents of the circles layer.
      // https://leafletjs.com/reference-1.4.0.html#map-getboundszoom
      if (this.circlesLayer) {
        var group = _libs_leaflet__WEBPACK_IMPORTED_MODULE_2__["featureGroup"](this.circlesLayer.getLayers());
        var bounds = group.getBounds();

        if (!lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](bounds)) {
          coordinates = bounds.getCenter();
          zoomLevel = this.map.getBoundsZoom(bounds);
        }
      }
    } else if (mapDimensions.mapZoomByRadius) {
      // Compute zoom level based on current coordinates and given radius in kilometers.
      // This is done by temporarily adding a circle with the respective radius and
      // computing its boundaries before removing it right away.
      // Note that adding and removing a Leaflet layer to/from a map within a single
      // frame will not trigger any animations, see
      // https://github.com/Leaflet/Leaflet/issues/5357#issuecomment-282023917
      var radius = mapDimensions.mapZoomByRadius * 1000.0;
      var circle = _libs_leaflet__WEBPACK_IMPORTED_MODULE_2__["circle"](coordinates, {
        radius: radius
      }).addTo(this.map);
      var bounds = circle.getBounds();
      circle.remove();
      coordinates = bounds.getCenter();
      zoomLevel = this.map.getBoundsZoom(bounds);
    }

    zoomLevel = this.getEffectiveZoomLevel(zoomLevel); // Apply coordinates and zoom level to Leaflet map.

    this.map.setView(coordinates, zoomLevel, options); // Resolve signal / release lock.

    this.ctrl.mapCenterMoved = false;
  };

  WorldMap.prototype.removeLegend = function () {
    this.legend.remove(this.map);
    this.legend = null;
  };

  WorldMap.prototype.setMouseWheelZoom = function () {
    if (!this.ctrl.settings.mouseWheelZoom) {
      this.map.scrollWheelZoom.disable();
    } else {
      this.map.scrollWheelZoom.enable();
    }
  };

  WorldMap.prototype.addCircles = function (circles) {
    // Todo: Optionally add fixed custom attributions to the circle layer.
    var attribution = undefined;
    return window.L.layerGroup(circles, {
      attribution: attribution
    }).addTo(this.map);
  };

  WorldMap.prototype.removeCircles = function () {
    this.map.removeLayer(this.circlesLayer);
  };

  WorldMap.prototype.setZoom = function (zoomFactor) {
    this.map.setZoom(parseInt(zoomFactor, 10));
  };

  WorldMap.prototype.remove = function () {
    this.circles = [];

    if (this.circlesLayer) {
      this.removeCircles();
    }

    if (this.legend) {
      this.removeLegend();
    }

    this.map.remove();
  };

  WorldMap.prototype.drawCustomAttribution = function () {
    // The operator wants a custom attribution.
    if (this.ctrl.settings.customAttribution) {
      // The custom attribution text.
      var attribution = this.ctrl.settings.customAttributionText; // Amend the Leaflet map by clearing out and setting the custom attribution text.

      var attributionControl = this.map.attributionControl;
      attributionControl._attributions = {};
      attributionControl.addAttribution(attribution);
    }
  };

  return WorldMap;
}();

/* harmony default export */ __webpack_exports__["default"] = (WorldMap);

/***/ }),

/***/ "./worldmap_ctrl.ts":
/*!**************************!*\
  !*** ./worldmap_ctrl.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grafana/app/plugins/sdk */ "grafana/app/plugins/sdk");
/* harmony import */ var grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_worldmap_panel_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/worldmap-panel.css */ "./styles/worldmap-panel.css");
/* harmony import */ var _styles_worldmap_panel_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_worldmap_panel_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_leaflet_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/leaflet.css */ "./styles/leaflet.css");
/* harmony import */ var _styles_leaflet_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_leaflet_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings */ "./settings.ts");
/* harmony import */ var _worldmap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./worldmap */ "./worldmap.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./model */ "./model.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core */ "./core.ts");
/* harmony import */ var _chrome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chrome */ "./chrome.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./errors */ "./errors.ts");
/* harmony import */ var _data_formatter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./data_formatter */ "./data_formatter.ts");
/* harmony import */ var grafana_app_core_app_events__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! grafana/app/core/app_events */ "grafana/app/core/app_events");
/* harmony import */ var grafana_app_core_app_events__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(grafana_app_core_app_events__WEBPACK_IMPORTED_MODULE_12__);













var panelDefaults = {
  maxDataPoints: 1,
  mapFitData: false,
  mapCenter: '(0°, 0°)',
  mapCenterLatitude: 0,
  mapCenterLongitude: 0,
  initialZoom: 1,
  maximumZoom: null,
  mapZoomByRadius: null,
  valueName: 'total',
  circleMinSize: 2,
  circleMaxSize: 30,
  circleOptions: {
    strokeEnabled: true,
    strokeWeight: 3
  },
  locationData: null,
  thresholds: '0,10',
  colors: ['rgba(245, 54, 54, 0.9)', 'rgba(237, 129, 40, 0.89)', 'rgba(50, 172, 45, 0.97)'],
  unitSingular: '',
  unitPlural: '',
  showLegend: true,
  legendContainerSelector: null,
  showZoomControl: true,
  showAttribution: true,
  customAttribution: false,
  customAttributionText: null,
  mouseWheelZoom: false,
  esGeoPoint: null,
  // Todo: Investigate: Is "Count" a reasonable default here
  //  or does it confuse the operator?
  esMetric: 'Count',
  esLocationName: null,
  esLink: null,
  decimals: 0,
  hideEmpty: false,
  hideZero: false,
  ignoreEmptyGeohashValues: false,
  ignoreInvalidGeohashValues: false,
  stickyLabels: false,
  clickthroughUrl: '',
  tileserverUrlDark: '',
  tileserverUrlLight: '',
  tileserverUrlFirst: '',
  tileserverUrlSecond: '',
  tileserverUrlThird: '',
  clickthroughOptions: {
    windowName: null
  },
  autoPanLabels: true,
  autoWidthLabels: true,
  tableQueryOptions: {
    queryType: 'geohash',
    geohashField: 'geohash',
    latitudeField: 'latitude',
    longitudeField: 'longitude',
    metricField: 'metric',
    labelField: null,
    labelLocationKeyField: null,
    linkField: null
  },
  ignoreEscapeKey: false,
  hideTimepickerNavigation: false
};

var WorldmapCtrl =
/** @class */
function (_super) {
  WorldmapCtrl.$inject = ["$scope", "$injector", "$element", "$document", "contextSrv", "templateSrv", "$location"];

  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(WorldmapCtrl, _super);
  /** @ngInject */


  function WorldmapCtrl($scope, $injector, $element, $document, contextSrv, templateSrv, $location) {
    var _this = _super.call(this, $scope, $injector) || this;

    _this.tileServer = '';
    _this.saturationClass = '';
    _this.data = [];
    _this.mapCenterMoved = false;
    _this.$element = $element;
    _this.$document = $document;
    _this.contextSrv = contextSrv;

    _this.loadCss();

    _this.initializing = true;
    _this.errors = new _errors__WEBPACK_IMPORTED_MODULE_10__["ErrorManager"]();

    _this.errors.registerDomains('data', 'location');

    _this.settings = undefined;

    _this.loadSettings();

    _this.core = new _core__WEBPACK_IMPORTED_MODULE_8__["WorldmapCore"](_this);
    _this.chrome = new _chrome__WEBPACK_IMPORTED_MODULE_9__["WorldmapChrome"](_this);

    _this.setupMap();

    _this.setupGlobal();

    _this.setupEvents();

    _this.loadLocationData();

    return _this;
  }

  WorldmapCtrl.prototype.loadCss = function () {
    Object(grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_1__["loadPluginCss"])({
      dark: "plugins/" + this.pluginId + "/styles/dark.css",
      light: "plugins/" + this.pluginId + "/styles/light.css"
    });
  };

  WorldmapCtrl.prototype.loadSettings = function () {
    var _this = this;
    /*
     * Initialize the plugin setting subsystem to provide `this.settings`.
     */


    console.info('Loading settings');

    lodash__WEBPACK_IMPORTED_MODULE_2__["defaults"](this.panel, panelDefaults);

    var query = this.$location.search();
    this.settings = new _settings__WEBPACK_IMPORTED_MODULE_5__["default"](this.panel, this.templateSrv, query); // Establish a virtual settings property accessible through `this.settings.center`.

    Object.defineProperty(this.settings, 'center', {
      get: function get() {
        return _this.core.getMapDimensions();
      },
      enumerable: true
    });
  };

  WorldmapCtrl.prototype.setupGlobal = function () {
    /*
     * Initialize the plugin.
     */
    // Optionally ignore the escape key.
    if (this.settings.ignoreEscapeKey) {
      this.chrome.removeEscapeKeyBinding();
    } else {
      this.chrome.restoreEscapeKeyBinding();
    } // Optionally hide the timepicker navigation widget.


    if (this.settings.hideTimepickerNavigation) {
      this.chrome.removeTimePickerNav();
    } else {
      this.chrome.restoreTimePickerNav();
    }
  };

  WorldmapCtrl.prototype.setupEvents = function () {
    /*
     * Attach plugin event handlers.
     */
    this.events.on('refresh', this.onRefresh.bind(this));
    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
    this.events.on('data-received', this.onDataReceived.bind(this));
    this.events.on('panel-teardown', this.onPanelTeardown.bind(this));
    this.events.on('data-snapshot-load', this.onDataSnapshotLoad.bind(this));
  };

  WorldmapCtrl.prototype.setupMap = function () {
    /*
     * Setup the Leaflet map widget.
     */
    console.info('Setting up map');
    this.setMapProvider(this.contextSrv);
  };

  WorldmapCtrl.prototype.setMapProvider = function (contextSrv) {
    /*
     * Configure the Leaflet map widget.
     */
    this.tileServer = contextSrv.user.lightTheme ? 'CartoDB Positron' : 'CartoDB Dark';
    this.setMapSaturationClass();
  };

  WorldmapCtrl.prototype.setMapSaturationClass = function () {
    /*
     * Configure the Leaflet map widget.
     */
    if (this.tileServer === 'CartoDB Dark') {
      this.saturationClass = 'map-darken';
    } else {
      this.saturationClass = '';
    }
  };

  WorldmapCtrl.prototype.loadLocationData = function (reload) {
    /*
     * Conditionally acquire location information from out-of-band data source.
     */
    if (this.map && !reload) {
      return;
    } // Load locations from snapshot.


    if (this.panel.snapshotLocationData) {
      this.locations = this.panel.snapshotLocationData;
      return;
    }

    try {
      this.core.acquireLocations();
    } catch (e) {
      this.errors.add(e, {
        domain: 'location'
      });
      this.setLocations();
    }
  };

  WorldmapCtrl.prototype.setLocations = function (res) {
    if (res === void 0) {
      res = [];
    }
    /*
     * Will be called when location information arrived.
     */


    console.info("Setting " + res.length + " locations");
    this.locations = res;
    this.refreshSafe();
  };

  WorldmapCtrl.prototype.refreshSafe = function () {
    /*
     * Conditionally refresh the plugin, but not if it's still loading.
     */
    console.log('Still initializing:', this.initializing);

    if (!this.initializing) {
      this.refresh();
    }
  };

  WorldmapCtrl.prototype.onRefresh = function () {
    console.info('Refreshing panel. initializing=', this.initializing);
    this.errors.reset('data');

    if (!this.loading && !this.initializing && lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](this.locations) && lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](this.panel.snapshotLocationData)) {
      this.loadLocationData(true);
    }
  };

  WorldmapCtrl.prototype.onDataSnapshotLoad = function (snapshotData) {
    console.info('Received data from snapshot');
    this.onDataReceived(snapshotData);
  };

  WorldmapCtrl.prototype.onDataReceived = function (dataList) {
    /*
     * Obtain data from the Grafana data source,
     * decode appropriately and render the map.
     */
    console.info('Data received:', dataList);

    if (dataList.length === 2) {
      dataList[0].rows = dataList[0].rows.concat(dataList[1].rows);
    } // Is this the right place to indicate the plugin has been initialized?


    this.initializing = false;

    try {
      if (this.dashboard.snapshot && this.locations) {
        this.panel.snapshotLocationData = this.locations;
      }

      this.processData(dataList);
      this.updateThresholdData();
      var autoCenterMap = this.settings.mapCenter === 'First GeoHash' || this.settings.mapCenter === 'Last GeoHash' || this.settings.mapFitData;

      if (this.data.length && autoCenterMap) {
        this.updateMapCenter(false);
      }
    } catch (err) {
      this.errors.add(err, {
        domain: 'data'
      });
      grafana_app_core_app_events__WEBPACK_IMPORTED_MODULE_12___default.a.emit('alert-error', ['Data error', err.toString()]);
    } finally {
      // Propagate warnings and errors to tooltip in panel corner.
      this.propagateWarningsAndErrors(); // Trigger the rendering process.

      this.render();
    }
  };

  WorldmapCtrl.prototype.processData = function (dataList) {
    /*
     * Decode data from the Grafana data source appropriately,
     * depending on the data format of the ingress data.
     */
    if (lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](dataList)) {
      this.resetData();
      this.resetLocations();
      this.errors.add('No data received, please check data source and time range', {
        level: 'warning',
        domain: 'data'
      });
      return;
    }

    this.dataInfo = _data_formatter__WEBPACK_IMPORTED_MODULE_11__["default"].analyzeData(dataList);
    console.info("Received " + this.dataInfo.count + " records in " + this.dataInfo.type + " format"); // Save snapshot of locations.

    if (this.dashboard.snapshot && this.locations) {
      this.panel.snapshotLocationData = this.locations;
    } // Decode data coming from the primary data source according to its format and other parameters.


    try {
      var decodedData = this.core.decodeData(dataList, this.dataInfo.type);
      this.data = decodedData.data;

      if (decodedData.series) {
        this.series = decodedData.series;
      }
    } catch (ex) {
      //this.resetDataErrors();
      //this.resetLocationErrors();
      this.resetData();
      this.resetLocations(); //this.render();

      throw ex;
    }
  };

  WorldmapCtrl.prototype.updateThresholdData = function () {
    // FIXME: Isn't `this.data` actually an array?
    this.data.thresholds = this.settings.thresholds.split(',').map(function (strValue) {
      return Number(strValue.trim());
    });

    while (lodash__WEBPACK_IMPORTED_MODULE_2__["size"](this.settings.colors) > lodash__WEBPACK_IMPORTED_MODULE_2__["size"](this.data.thresholds) + 1) {
      // too many colors. remove the last one.
      this.settings.colors.pop();
    }

    while (lodash__WEBPACK_IMPORTED_MODULE_2__["size"](this.settings.colors) < lodash__WEBPACK_IMPORTED_MODULE_2__["size"](this.data.thresholds) + 1) {
      // not enough colors. add one.
      var newColor = 'rgba(50, 172, 45, 0.97)';
      this.settings.colors.push(newColor);
    }
  };

  WorldmapCtrl.prototype.onPanelTeardown = function () {
    this.teardownMap();
  };

  WorldmapCtrl.prototype.onInitEditMode = function () {
    this.addEditorTab('Worldmap', "public/plugins/" + this.pluginId + "/partials/editor.html", 2);
  };

  WorldmapCtrl.prototype.propagateWarningsAndErrors = function () {
    /*
     * Propagate collected warnings and errors to tooltip in panel corner.
     * This is crucial for improved user-feedback when operating the
     * Worldmap Panel.
     *
     * This is a central place where the behavior can be relaxed in order
     * to display warning messages elsewhere in the future.
     *
     * Todo: Add a `suppressCornerWarnings` setting to improve flexibility.
     */
    // Effective list of warnings and errors from all error domains.
    var messages = this.errors.getMessages(); // Update panel corner with error messages in the next event cycle.

    lodash__WEBPACK_IMPORTED_MODULE_2__["defer"](this.chrome.updatePanelCorner.bind(this.chrome, messages));
  };

  WorldmapCtrl.prototype.link = function (scope, elem, attrs, ctrl) {
    var firstRender = true;
    ctrl.events.on('render', function () {
      render();
      ctrl.renderingCompleted();
    });

    function render() {
      if (!ctrl.data) {
        return;
      } // delay first render as the map panel sizing is bugged first render even though the element has correct height


      if (firstRender) {
        firstRender = false;
        setTimeout(render, 100);
        return;
      }

      var mapContainer = elem.find('.mapcontainer');

      if (mapContainer[0].id.indexOf('{{') > -1) {
        return;
      }

      if (!ctrl.map) {
        var map = new _worldmap__WEBPACK_IMPORTED_MODULE_6__["default"](ctrl, mapContainer[0]);
        map.createMap();
        ctrl.map = map;
      }

      ctrl.map.resize();

      if (!ctrl.map.legend && ctrl.panel.showLegend) {
        ctrl.map.createLegend();
      }

      ctrl.map.drawCircles();

      if (ctrl.mapCenterMoved) {
        ctrl.map.panToMapCenter();
      }
    }
  };
  /* Data format indicators */
  // Todo: Refactor them to improved LocationType system, see `model.ts`.


  WorldmapCtrl.prototype.showTableOptions = function () {
    return lodash__WEBPACK_IMPORTED_MODULE_2__["startsWith"](this.settings.locationData, 'table');
  };

  WorldmapCtrl.prototype.showTableGeohashOptions = function () {
    return this.showTableOptions() && this.settings.tableQueryOptions.queryType === 'geohash';
  };

  WorldmapCtrl.prototype.showTableCoordinateOptions = function () {
    return this.showTableOptions() && this.settings.tableQueryOptions.queryType === 'coordinates';
  };
  /* Data accessors */


  WorldmapCtrl.prototype.reset = function () {
    console.info('Resetting everything.');
    this.errors.resetAll();
    this.resetData();
    this.resetLocations();
  };

  WorldmapCtrl.prototype.resetData = function () {
    this.data = []; //this.mapCenterMoved = true;
  };

  WorldmapCtrl.prototype.resetLocations = function () {
    //console.log('resetLocations');
    this.locations = [];
    this.panel.snapshotLocationData = undefined;
  };
  /* Actions with rendering */


  WorldmapCtrl.prototype.reload = function () {
    this.reset(); //this.refresh();

    this.loadLocationData(true);
  };

  WorldmapCtrl.prototype.reloadLocations = function () {
    this.errors.resetAll();
    this.resetLocations();
    this.loadLocationData(true);
  };

  WorldmapCtrl.prototype.restart = function () {
    this.teardownMap();
    this.render();
  };

  WorldmapCtrl.prototype.updateMapCenter = function (render) {
    if (render === void 0) {
      render = true;
    } // Signal `panToMapCenter()` and trigger rendering.


    this.mapCenterMoved = true;

    if (render) {
      this.render();
    }
  };

  WorldmapCtrl.prototype.teardownMap = function () {
    if (this.map) {
      this.map.remove();
      this.map = null;
    }
  };

  WorldmapCtrl.prototype.toggleLegend = function () {
    if (!this.settings.showLegend) {
      this.map.removeLegend();
    }

    this.render();
  };

  WorldmapCtrl.prototype.toggleMouseWheelZoom = function () {
    this.map.setMouseWheelZoom();
    this.render();
  };

  WorldmapCtrl.prototype.toggleCustomAttribution = function () {
    if (this.settings.customAttribution) {
      var attributionControl = this.map.map.attributionControl; // When switching on custom attributions and the text is
      // empty yet, use the value which is currently active.

      if (!this.panel.customAttributionText) {
        // Collect active attributions.
        var entries = [];

        for (var key in attributionControl._attributions) {
          entries.push(key);
        } // Store in custom text.


        this.panel.customAttributionText = entries.join(', ');
      } // Clear out builtin attributions.


      attributionControl._attributions = {};

      attributionControl._update();

      this.render();
    } else {
      // The operator wants vanilla attributions again, so let's start over.
      this.restart();
    }
  };

  WorldmapCtrl.prototype.redrawCircles = function () {
    this.map.clearCircles();
    this.render();
  };

  WorldmapCtrl.prototype.changeThresholds = function () {
    this.updateThresholdData();
    this.map.legend.update();
    this.render();
  };
  /* Form choice accessors */
  // Todo: Refactor to `model.ts`.


  WorldmapCtrl.prototype.getLocationDataChoices = function () {
    return _model__WEBPACK_IMPORTED_MODULE_7__["LocationSources"];
  };

  WorldmapCtrl.prototype.getSelectedLocationType = function () {
    var locationSource = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](_model__WEBPACK_IMPORTED_MODULE_7__["LocationSources"], {
      id: this.settings.locationData
    });

    return locationSource.type ? locationSource.type.replace('Format: ', '') : undefined;
  };

  WorldmapCtrl.prototype.getSelectedLocationFormat = function () {
    var locationSource = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](_model__WEBPACK_IMPORTED_MODULE_7__["LocationSources"], {
      id: this.settings.locationData
    });

    if (lodash__WEBPACK_IMPORTED_MODULE_2__["isArray"](locationSource.format)) {
      return locationSource.format.join(' or ');
    } else {
      return locationSource.format;
    }
  };

  WorldmapCtrl.prototype.getMapCenterChoices = function () {
    return _model__WEBPACK_IMPORTED_MODULE_7__["MapCenters"];
  };

  WorldmapCtrl.prototype.getSelectedMapCenter = function () {
    var mapCenter = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](_model__WEBPACK_IMPORTED_MODULE_7__["MapCenters"], {
      id: this.settings.mapCenter
    });

    return mapCenter && mapCenter.data;
  };

  WorldmapCtrl.templateUrl = 'partials/module.html';
  return WorldmapCtrl;
}(grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_1__["MetricsPanelCtrl"]);

/* harmony default export */ __webpack_exports__["default"] = (WorldmapCtrl);

/***/ }),

/***/ "grafana/app/core/app_events":
/*!**************************************!*\
  !*** external "app/core/app_events" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_grafana_app_core_app_events__;

/***/ }),

/***/ "grafana/app/core/time_series2":
/*!****************************************!*\
  !*** external "app/core/time_series2" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_grafana_app_core_time_series2__;

/***/ }),

/***/ "grafana/app/core/utils/kbn":
/*!*************************************!*\
  !*** external "app/core/utils/kbn" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_grafana_app_core_utils_kbn__;

/***/ }),

/***/ "grafana/app/plugins/sdk":
/*!**********************************!*\
  !*** external "app/plugins/sdk" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_grafana_app_plugins_sdk__;

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map