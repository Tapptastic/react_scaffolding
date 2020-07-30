"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.writeContent = exports.writeExport = exports.writeImport = exports.createDirectoryRecur = exports.hasProperty = exports.hasProperties = exports.getCurrentDirPath = exports.getCurrentPath = exports.writeFile = exports.upperCaseFirst = void 0;

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var upperCase = function upperCase(word, position) {
  return word[position].toUpperCase() + word.slice(position + 1);
};

var writeLineToFile = function writeLineToFile(filePath, line) {
  return _fs["default"].appendFileSync(filePath, "".concat(line, "\n"), "utf-8");
};

var upperCaseFirst = function upperCaseFirst(word) {
  return upperCase(word, 0);
};

exports.upperCaseFirst = upperCaseFirst;

var writeFile = function writeFile(filePath, fileData) {
  return _fs["default"].writeFileSync(filePath, fileData);
};

exports.writeFile = writeFile;

var getCurrentPath = function getCurrentPath() {
  return process.env.PWD;
};

exports.getCurrentPath = getCurrentPath;

var getCurrentDirPath = function getCurrentDirPath() {
  return __dirname;
};

exports.getCurrentDirPath = getCurrentDirPath;

var hasProperties = function hasProperties(obj) {
  return Object.keys(obj).length > 0;
};

exports.hasProperties = hasProperties;

var hasProperty = function hasProperty(obj, prop) {
  return obj[prop] ? true : false;
};

exports.hasProperty = hasProperty;

var createDirectoryRecur = function createDirectoryRecur(filePath) {
  return _fs["default"].mkdirSync(filePath, {
    recursive: true
  });
};

exports.createDirectoryRecur = createDirectoryRecur;

var writeImport = function writeImport(filePath, mod) {
  return writeLineToFile(filePath, "import ".concat(mod.name, " from '").concat(mod.path, "';"));
};

exports.writeImport = writeImport;

var writeExport = function writeExport(filePath, name) {
  return writeLineToFile(filePath, "export default ".concat(name, ";"));
};

exports.writeExport = writeExport;

var writeContent = function writeContent(filePath, name) {
  return writeLineToFile(filePath, "const ".concat(name, " = ({children}) => <div>{children}</div>"));
};

exports.writeContent = writeContent;