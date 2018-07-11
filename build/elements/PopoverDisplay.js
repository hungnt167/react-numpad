'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  padding: 0;\n  align-items: center;\n  border: none;\n  background: white;\n  padding: 20px 20px 15px;\n  border-radius: 6px;\n'], ['\n  display: flex;\n  padding: 0;\n  align-items: center;\n  border: none;\n  background: white;\n  padding: 20px 20px 15px;\n  border-radius: 6px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  background: none;\n  cursor: default;\n  border: none;\n  outline: none;\n  font-size: 1.6em;\n  padding: 0px 2px 0px 0px;\n  color: ', ';\n'], ['\n  background: none;\n  cursor: default;\n  border: none;\n  outline: none;\n  font-size: 1.6em;\n  padding: 0px 2px 0px 0px;\n  color: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  &:read-only {\n    cursor: not-allowed;\n  }\n  border-radius: 0px;\n  cursor: default;\n  background: transparent;\n  font-size: 18px;\n  color: #1d63dc;\n  outline: none;\n  border: none;\n  width: 45%;\n  text-align: ', ';\n'], ['\n  &:read-only {\n    cursor: not-allowed;\n  }\n  border-radius: 0px;\n  cursor: default;\n  background: transparent;\n  font-size: 18px;\n  color: #1d63dc;\n  outline: none;\n  border: none;\n  width: 45%;\n  text-align: ', ';\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  &:read-only {\n    cursor: not-allowed;\n  }\n  height: 60px;\n  border-radius: 0;\n  cursor: default;\n  background: transparent;\n  width: 100%;\n  border: none;\n  font-size: 36px;\n  color: #1d1d1d;\n  outline: none;\n  text-align: ', ';\n'], ['\n  &:read-only {\n    cursor: not-allowed;\n  }\n  height: 60px;\n  border-radius: 0;\n  cursor: default;\n  background: transparent;\n  width: 100%;\n  border: none;\n  font-size: 36px;\n  color: #1d1d1d;\n  outline: none;\n  text-align: ', ';\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  flex-grow: 1;\n'], ['\n  flex-grow: 1;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  cursor: pointer;\n  outline: none;\n  background-color: #ededed;\n  width: 27%;\n  height: 60px;\n  line-height: 60px;\n  padding: 0;\n  border-radius: 10px;\n  font-size: 20px;\n  border: none;\n  &:hover ', ' {\n    text-decoration: none;\n    background-color: rgba(0, 0, 0, 0.12);\n  }\n'], ['\n  cursor: pointer;\n  outline: none;\n  background-color: #ededed;\n  width: 27%;\n  height: 60px;\n  line-height: 60px;\n  padding: 0;\n  border-radius: 10px;\n  font-size: 20px;\n  border: none;\n  &:hover ', ' {\n    text-decoration: none;\n    background-color: rgba(0, 0, 0, 0.12);\n  }\n']);

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

var Input = _styledComponents2.default.input(_templateObject3, function (props) {
  return props.terminalAlign;
});

var SimpleInput = _styledComponents2.default.input(_templateObject4, function (props) {
  return props.terminalAlign;
});

var Display = _styledComponents2.default.div(_templateObject5);

var Button = _styledComponents2.default.button(_templateObject6, undefined);

var DisplayWrapper = function DisplayWrapper(_ref) {
  var value = _ref.value,
      displayRule = _ref.displayRule,
      dateFormat = _ref.dateFormat,
      cancel = _ref.cancel,
      control = _ref.control,
      terminalAlign = _ref.terminalAlign;
  return _react2.default.createElement(
    Wrapper,
    null,
    _react2.default.createElement(
      Display,
      null,
      control && _react2.default.createElement(
        Button,
        { onClick: function onClick() {
            return control(0);
          } },
        '-'
      ),
      control ? _react2.default.createElement(Input, {
        value: displayRule(value, dateFormat),
        readOnly: true,
        autoFocus: true,
        terminalAlign: terminalAlign
      }) : _react2.default.createElement(SimpleInput, {
        value: displayRule(value, dateFormat),
        readOnly: true,
        autoFocus: true,
        terminalAlign: terminalAlign
      }),
      control && _react2.default.createElement(
        Button,
        { isIncrement: true, onClick: function onClick() {
            return control(1);
          } },
        '+'
      )
    ),
    cancel && _react2.default.createElement(
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
  cancel: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.bool]),
  control: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.bool]),
  terminalAlign: _propTypes2.default.oneOf(['left', 'right', 'center'])
};

DisplayWrapper.defaultProps = {
  dateFormat: 'MM/DD/YYYY',
  cancel: false,
  control: false,
  terminalAlign: 'center'
};

exports.default = DisplayWrapper;