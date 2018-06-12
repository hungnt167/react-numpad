'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _accessTime = require('react-icons/lib/md/access-time');

var _accessTime2 = _interopRequireDefault(_accessTime);

var _NumPad = require('./NumPad');

var _NumPad2 = _interopRequireDefault(_NumPad);

var _date = require('../utils/date');

var _date2 = _interopRequireDefault(_date);

var _elements = require('../elements');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validation = function validation() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return value.length === 8;
};

var formatInputValue = function formatInputValue(value) {
  return value.toString().replace(/\D+/g, '');
};

var keyValid = function keyValid() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var key = arguments[1];
  var dateFormat = arguments[2];

  if (value.length === 8 || key === '-' || key === '.') return false;
  return _date2.default.validate(value, key, dateFormat);
};

var displayRule = function displayRule() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var dateFormat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'MM/DD/YYYY';
  return _date2.default.display(value, dateFormat);
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