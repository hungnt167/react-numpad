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

var _date = require('../utils/date');

var _date2 = _interopRequireDefault(_date);

var _elements = require('../elements');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validation = function validation() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return value.length === 12;
};
var formatInputValue = function formatInputValue(value) {
  return value.toString().replace(/\D+/g, '');
};
var keyValid = function keyValid() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var key = arguments[1];
  var dateFormat = arguments[2];

  if (value.length === 12 || key === '-' || key === '.') return false;
  if (value.length < 8) {
    // verify date
    return _date2.default.validate(value, key, dateFormat);
  }
  // verify time
  var timeFormat = 'HH:mm';
  var time = value.substr(8, 4) + key + '0000'.substring(Math.max(0, value.length - 8));
  return (0, _moment2.default)(time, timeFormat).isValid();
};

var displayRule = function displayRule() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var dateFormat = arguments[1];

  var time = value.substring(8, 12);
  time += '_'.repeat(4 - time.length);
  var displayTime = [time.substr(0, 2), time.substr(2, 2)];
  return _date2.default.display(value, dateFormat) + ' ' + displayTime.join(':');
};

var inputButtonContent = _react2.default.createElement(_accessTime2.default, null);

var float = false;

var negative = false;

exports.default = (0, _NumPad2.default)({
  element: _elements.KeyPad,
  validation: validation,
  formatInputValue: formatInputValue,
  displayRule: displayRule,
  inputButtonContent: inputButtonContent,
  float: float,
  negative: negative,
  keyValid: keyValid
});