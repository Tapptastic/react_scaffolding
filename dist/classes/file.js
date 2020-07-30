"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* 
    Want this class to reflect a File

    File / Component
        - Name
        - Path
        - Imports
        - Content
        - Export
        - Write(): this would write the file to the filePath (this.path + this.name) 
*/
var File = /*#__PURE__*/function () {
  function File(name, path) {
    _classCallCheck(this, File);

    this.name = name;
    this.path = path;
    this.imports = [];
    this.tempImports = [];
    this["export"] = "";
    this.content = "";
  }

  _createClass(File, [{
    key: "combineImports",
    value: function combineImports() {
      if (this.imports.length <= 0) return null; // We have no imports
    }
  }]);

  return File;
}();

var _default = File;
exports["default"] = _default;