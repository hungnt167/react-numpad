'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _accessTime = require('react-icons/lib/md/access-time');

var _accessTime2 = _interopRequireDefault(_accessTime);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _NumPad = require('./NumPad');

var _NumPad2 = _interopRequireDefault(_NumPad);

var _elements = require('../elements');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validation = function validation() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return value.length === 4;
};
var formatInputValue = function formatInputValue(value) {
  return value.toString().replace(/\D+/g, '');
};
var keyValid = function keyValid() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var key = arguments[1];

  if (value.length === 4 || key === '-' || key === '.') return false;
  var time = value + key + '0'.repeat(3 - value.length);
  return (0, _moment2.default)(time, 'HHmm').isValid();
};

var displayRule = function displayRule() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var newValue = value + '_'.repeat(4 - value.length);
  var splitValue = newValue ? [newValue.substr(0, 2), newValue.substr(2, 4)] : '';
  return newValue.length > 1 ? splitValue.join(':') : splitValue;
};

var inputButtonContent = _react2.default.createElement(_accessTime2.default, null);

exports.default = (0, _NumPad2.default)({
  element: _elements.KeyPad,
  validation: validation,
  formatInputValue: formatInputValue,
  displayRule: displayRule,
  inputButtonContent: inputButtonContent,
  keyValid: keyValid
});