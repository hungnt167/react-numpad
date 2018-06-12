'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _numpad = require('./themes/numpad');

var _numpad2 = _interopRequireDefault(_numpad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (name) {
  var themes = { numpad: _numpad2.default };
  return themes[name] || _numpad2.default;
};