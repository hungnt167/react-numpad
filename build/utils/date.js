'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var VALIDATION_DATE = '01011004';
var VALIDATION_FORMAT = 'MMDDYYYY';

var display = function display(value, dateFormat) {
  var newValue = value + '_'.repeat(Math.max(0, dateFormat.replace(/[^a-z]/gi, '').length - value.length));
  var symbol = dateFormat.replace(/[!^a-z]/gi, '')[0];
  return dateFormat.split(/[.,/ -]/).map(function (d) {
    return d.length;
  }).reduce(function (p, c, i) {
    return p.length > 0 ? [].concat(_toConsumableArray(p), [[p[i - 1][1], c + p[i - 1][1]]]) : [[0, c]];
  }, []).map(function (s) {
    return newValue.substring(s[0], s[1]);
  }).join(symbol);
};

var validate = function validate(value, key, dateFormat) {
  var checkDate = (0, _moment2.default)(VALIDATION_DATE, VALIDATION_FORMAT).format(dateFormat.replace(/[^a-z]/gi, ''));
  var date = value + key + checkDate.substring(value.length + 1);
  return (0, _moment2.default)(date, dateFormat).isValid();
};

exports.default = {
  display: display,
  validate: validate
};