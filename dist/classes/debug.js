"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Debug = /*#__PURE__*/function () {
  function Debug() {
    _classCallCheck(this, Debug);
  }

  _createClass(Debug, null, [{
    key: "write",
    value: function write(str) {
      console.log(_chalk["default"].whiteBright(str));
    }
  }, {
    key: "error",
    value: function error(str) {
      console.log(_chalk["default"].red(str));
    }
  }, {
    key: "success",
    value: function success(str) {
      console.log(_chalk["default"].green(str));
    }
  }, {
    key: "info",
    value: function info(str) {
      console.log(_chalk["default"].yellow(str));
    }
  }]);

  return Debug;
}();

var _default = Debug;
exports["default"] = _default;