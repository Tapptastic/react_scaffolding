"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Importer = function Importer(imports) {
  _classCallCheck(this, Importer);

  this.name = imports.name || imports;
  this.modules = imports.modules || [];
  this.self = true;
  this.isSimple = typeof imports === "string";
};

var _default = Importer;
exports["default"] = _default;