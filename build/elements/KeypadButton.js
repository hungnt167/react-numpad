'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  && {\n    font-size: 1.2em;\n    padding: 0px;\n    border-radius: 0;\n    width: 33%;\n  }\n'], ['\n  && {\n    font-size: 1.2em;\n    padding: 0px;\n    border-radius: 0;\n    width: 33%;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var KeypadButton = (0, _styledComponents2.default)(_Button2.default)(_templateObject);

var ButtonWrapper = function ButtonWrapper(_ref) {
  var value = _ref.value,
      click = _ref.click,
      disabled = _ref.disabled;
  return _react2.default.createElement(
    KeypadButton,
    { onClick: function onClick() {
        return click(value);
      }, disabled: disabled },
    value
  );
};

ButtonWrapper.defaultProps = {
  value: undefined,
  disabled: false
};

ButtonWrapper.propTypes = {
  click: _propTypes2.default.func.isRequired,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  disabled: _propTypes2.default.bool
};

exports.default = ButtonWrapper;