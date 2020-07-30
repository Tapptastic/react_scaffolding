"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fs = _interopRequireWildcard(require("fs"));

var _debug = _interopRequireDefault(require("./debug"));

var _utility = require("./utility");

var _file = _interopRequireDefault(require("./file"));

var _importer = _interopRequireDefault(require("./importer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Config = /*#__PURE__*/function () {
  function Config() {
    _classCallCheck(this, Config);

    this.data = "";
    this.directory = "./src/components";
  }

  _createClass(Config, [{
    key: "hasNode",
    value: function hasNode(name) {
      return this.data[name] ? true : false;
    }
  }, {
    key: "build",
    value: function build(node) {
      var configNode = this.data[node.name];
      if (!(0, _utility.hasProperties)(configNode)) return null;

      var _iterator = _createForOfIteratorHelper(configNode.files),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var file = _step.value;
          var filePath = "".concat(this.directory, "/").concat(node.value, "/").concat(file.name);
          var f = new _file["default"](file.name, filePath);
          /* 
            Maybe see about creating something like a file object
            if we don't have any errors then we Write
            */
          // if (!fs.existsSync(filePath)) {
          //   createDirectoryRecur(`${this.directory}/${upperCaseFirst(node.value)}`);
          // }

          if (!(0, _utility.hasProperty)(file, "imports")) return null;

          var _iterator2 = _createForOfIteratorHelper(file.imports),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var import_ = _step2.value;
              var mod = {
                name: "",
                path: ""
              };
              var i = new _importer["default"](import_);
              f.imports.push(i);
            } // writeContent(filePath, upperCaseFirst(node.value));
            // writeExport(filePath, upperCaseFirst(node.value));

          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          console.log(f);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "isSimpleImport",
    value: function isSimpleImport(import_) {
      return typeof import_ === "string";
    }
  }, {
    key: "isLocalModule",
    value: function isLocalModule(mod) {
      return mod.startsWith(".");
    }
  }, {
    key: "createDefaultConfig",
    value: function createDefaultConfig() {
      (0, _utility.writeFile)("./rsconfig.json", JSON.stringify({
        directory: "./src/components",
        hook: {
          files: [{
            name: "index.js",
            imports: []
          }, {
            name: "hooks.js",
            imports: []
          }]
        },
        component: {
          files: [{
            name: "index.js",
            imports: ["react", "./grant", "./Components/Person/Grant"]
          }]
        }
      }));
    }
  }, {
    key: "read",
    value: function read() {
      var filePath = "".concat(process.env.PWD, "/rsconfig.json");

      var exists = _fs["default"].existsSync(filePath);

      if (!exists) {
        _debug["default"].error("Unable to find config file at ".concat(filePath));

        _debug["default"].info("Creating default profile");

        this.createDefaultConfig();
      }

      this.data = _fs["default"].readFileSync(filePath, "utf-8");

      if (!this.data) {
        return null;
      }

      this.data = JSON.parse(this.data);
      return this;
    }
  }]);

  return Config;
}();

var _default = Config;
exports["default"] = _default;