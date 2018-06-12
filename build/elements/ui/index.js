'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NButton = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  color: ', ';\n  &:hover {\n    color: ', ';\n  }\n  cursor: pointer;\n  border: none;\n  background: transparent;\n  font-size: 1.6em;\n  padding: 0px 0px 2px 0px;\n  :active,\n  :focus {\n    outline: none;\n  }\n  :disabled {\n    pointer-events: none;\n    cursor: now-allowed;\n    color: ', ';\n  }\n'], ['\n  color: ', ';\n  &:hover {\n    color: ', ';\n  }\n  cursor: pointer;\n  border: none;\n  background: transparent;\n  font-size: 1.6em;\n  padding: 0px 0px 2px 0px;\n  :active,\n  :focus {\n    outline: none;\n  }\n  :disabled {\n    pointer-events: none;\n    cursor: now-allowed;\n    color: ', ';\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NButton = _styledComponents2.default.button(_templateObject, function (props) {
  return props.theme.header.secondaryColor;
}, function (props) {
  return props.theme.header.highlightColor;
}, function (props) {
  return (0, _color2.default)(props.theme.header.secondaryColor).darken(0.4).string();
});

exports.NButton = NButton;