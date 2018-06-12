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

var _date = require('../utils/date');

var _date2 = _interopRequireDefault(_date);

var _NumPad = require('./NumPad');

var _NumPad2 = _interopRequireDefault(_NumPad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validation = function validation() {
  return true;
};

var formatInputValue = function formatInputValue(value) {
  return value.toString().replace(/\D+/g, '');
};

var keyValid = function keyValid(value, minDate, maxDate, dateFormat) {
  var validAfter = minDate ? value.isSameOrAfter((0, _moment2.default)(minDate, dateFormat)) : true;
  var validBefore = maxDate ? value.isSameOrBefore((0, _moment2.default)(maxDate, dateFormat)) : true;
  return validAfter && validBefore;
};

var displayRule = function displayRule() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var dateFormat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'MM/DD/YYYY';
  return _date2.default.display(value, dateFormat);
};

var inputButtonContent = _react2.default.createElement(_dateRange2.default, null);

exports.default = (0, _NumPad2.default)({
  element: _elements.Calendar,
  keyValid: keyValid,
  formatInputValue: formatInputValue,
  validation: validation,
  displayRule: displayRule,
  inputButtonContent: inputButtonContent
});