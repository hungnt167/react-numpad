'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  padding: 2px 5px 5px 8px;\n  align-items: center;\n  border: none;\n  background: white;\n'], ['\n  display: flex;\n  padding: 2px 5px 5px 8px;\n  align-items: center;\n  border: none;\n  background: white;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  background: none;\n  cursor: default;\n  border: none;\n  outline: none;\n  font-size: 1.6em;\n  padding: 0px 2px 0px 0px;\n  color: ', ';\n'], ['\n  background: none;\n  cursor: default;\n  border: none;\n  outline: none;\n  font-size: 1.6em;\n  padding: 0px 2px 0px 0px;\n  color: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  &:read-only {\n    cursor: not-allowed;\n  }\n  border-radius: 0px;\n  cursor: default;\n  background: transparent;\n  font-size: 1.3em;\n  outline: none;\n  border: none;\n  width: 100%;\n'], ['\n  &:read-only {\n    cursor: not-allowed;\n  }\n  border-radius: 0px;\n  cursor: default;\n  background: transparent;\n  font-size: 1.3em;\n  outline: none;\n  border: none;\n  width: 100%;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  flex-grow: 1;\n'], ['\n  flex-grow: 1;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _backspace = require('react-icons/lib/md/backspace');

var _backspace2 = _interopRequireDefault(_backspace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents2.default.div(_templateObject);

var Backspace = _styledComponents2.default.button(_templateObject2, function (props) {
  return props.theme.header.primaryColor;
});

var Input = _styledComponents2.default.input(_templateObject3);
var Display = _styledComponents2.default.div(_templateObject4);

var DisplayWrapper = function DisplayWrapper(_ref) {
  var value = _ref.value,
      displayRule = _ref.displayRule,
      dateFormat = _ref.dateFormat,
      cancel = _ref.cancel;
  return _react2.default.createElement(
    Wrapper,
    null,
    _react2.default.createElement(
      Display,
      null,
      _react2.default.createElement(Input, { value: displayRule(value, dateFormat), readOnly: true, autoFocus: true })
    ),
    _react2.default.createElement(
      Backspace,
      { onClick: cancel },
      _react2.default.createElement(_backspace2.default, null)
    )
  );
};

DisplayWrapper.propTypes = {
  value: _propTypes2.default.string.isRequired,
  displayRule: _propTypes2.default.func.isRequired,
  dateFormat: _propTypes2.default.string,
  cancel: _propTypes2.default.func
};

DisplayWrapper.defaultProps = {
  dateFormat: 'MM/DD/YYYY',
  cancel: function cancel() {}
};

exports.default = DisplayWrapper;