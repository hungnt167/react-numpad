'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopoverPositiveInteger = exports.PopoverInteger = exports.PopoverPositive = exports.Popover = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _edit = require('react-icons/lib/md/edit');

var _edit2 = _interopRequireDefault(_edit);

var _PopoverNumPad = require('./PopoverNumPad');

var _PopoverNumPad2 = _interopRequireDefault(_PopoverNumPad);

var _elements = require('../elements');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PositiveValidation = {
  float: function float() {
    return true;
  },
  negative: function negative(value) {
    var isDecimalMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (isDecimalMode) {
      if (!_lodash2.default.toNumber(value)) {
        return true;
      }
      return parseFloat(value) > 0;
    }
    return parseInt(value, 10) > 0;
  }
};

var IntegerValidation = {
  float: function float(value) {
    return parseFloat(value) % 1 === 0;
  },
  negative: function negative() {
    return true;
  }
};

var PositiveIntegerValidation = {
  float: function float(value) {
    return parseFloat(value) % 1 === 0;
  },
  negative: function negative(value) {
    return parseInt(value, 10) > 0;
  }
};

var defaultProps = function defaultProps(Validation) {
  return {
    element: _elements.PopoverKeyPad,
    validation: function validation(value) {
      return value.length > 0;
    },
    formatInputValue: function formatInputValue(value) {
      return value.toString().replace(/\D+/g, '');
    },
    keyValid: function keyValid() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var key = arguments[1];
      var isDecimalMode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var decimalSeparator = arguments[3];

      var next = void 0;

      if (key === '') {
        return false;
      }

      if (key === decimalSeparator && !isDecimalMode) {
        return false;
      }

      if (key === '-') {
        next = value.charAt(0) === '-' ? value.substr(1) : key + value;
      } else {
        next = key === decimalSeparator ? value + key + 1 : value + key;
      }

      next = next.replace(decimalSeparator, '.');
      return (
        // eslint-disable-next-line no-restricted-globals
        !isNaN(next) && Validation.float(next) && Validation.negative(next, isDecimalMode)
      );
    },
    displayRule: function displayRule(value, decimalSeparator) {
      return value.replace(decimalSeparator, '.');
    },
    inputButtonContent: _react2.default.createElement(_edit2.default, null)
  };
};

var Popover = (0, _PopoverNumPad2.default)(defaultProps(PositiveValidation));
var PopoverPositive = (0, _PopoverNumPad2.default)(defaultProps(PositiveValidation));
var PopoverInteger = (0, _PopoverNumPad2.default)(defaultProps(IntegerValidation));
var PopoverPositiveInteger = (0, _PopoverNumPad2.default)(defaultProps(PositiveIntegerValidation));

exports.Popover = Popover;
exports.PopoverPositive = PopoverPositive;
exports.PopoverInteger = PopoverInteger;
exports.PopoverPositiveInteger = PopoverPositiveInteger;