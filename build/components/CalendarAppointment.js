'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dateRange = require('react-icons/lib/md/date-range');

var _dateRange2 = _interopRequireDefault(_dateRange);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _elements = require('../elements');

var _NumPad = require('./NumPad');

var _NumPad2 = _interopRequireDefault(_NumPad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validation = function validation() {
  return true;
};

var keyValid = function keyValid() {
  return true;
};

var formatInputValue = function formatInputValue(value) {
  return value;
};

var displayRule = function displayRule(value) {
  return value;
};

var inputButtonContent = _react2.default.createElement(_dateRange2.default, null);

exports.default = (0, _NumPad2.default)({
  element: _elements.Appointment,
  keyValid: keyValid,
  formatInputValue: formatInputValue,
  validation: validation,
  displayRule: displayRule,
  inputButtonContent: inputButtonContent
});