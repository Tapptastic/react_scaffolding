#!/usr/bin/env node
"use strict";

var _arguments = _interopRequireDefault(require("./classes/arguments"));

var _config = _interopRequireDefault(require("./classes/config"));

var _debug = _interopRequireDefault(require("./classes/debug"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var args = new _arguments["default"]().getAll(process.argv);
var config = new _config["default"]().read(); // TODO add more debug messages
// TODO add a -help function
// TODO see about getting more configs for things like: Content, non default imports {name: useState, module: react} this might require something like a parser to check the files to see if we already have that or a smarter way of handing imports

var _iterator = _createForOfIteratorHelper(args.arguments),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var a = _step.value;

    if (config.hasNode(a.name)) {
      config.build(a);
    } else {
      _debug["default"].info("You have no config for ".concat(a.name, ", if you wish to use this then create an entry in rsconfig.json"));
    }
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}