'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  ', ';\n'], ['\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  width: 100%;\n  height: 100%;\n  font-size: 1em;\n  align-items: ', ';\n'], ['\n  display: flex;\n  width: 100%;\n  height: 100%;\n  font-size: 1em;\n  align-items: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  z-index: 10000;\n  ', ';\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  '], ['\n  z-index: 10000;\n  ', ';\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['left: ', ';'], ['left: ', ';']),
    _templateObject5 = _taggedTemplateLiteral(['right: ', ';'], ['right: ', ';']),
    _templateObject6 = _taggedTemplateLiteral(['left: 0;'], ['left: 0;']),
    _templateObject7 = _taggedTemplateLiteral(['right: auto;'], ['right: auto;']),
    _templateObject8 = _taggedTemplateLiteral(['width: 100wv;'], ['width: 100wv;']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

var _mediaTemplates = require('../styles/media-templates');

var _helper = require('../helper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BackgroundPanel = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.coords ? '' : '\n  position: fixed;\n  padding: 0;\n  margin: 0;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 10000;\n';
});

var Container = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.theme.position;
});

var Content = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.theme.coords ? '\n    position: absolute;\n    ' + (props.theme.coords.top ? 'top: ' + props.theme.coords.top + ';' : '') + '\n    ' + (props.theme.coords.bottom ? 'bottom: ' + props.theme.coords.bottom + ';' : '') + '\n    height: ' + props.height + 'px;\n    ' : '\n    display: flex;    \n    width: 100%;\n    justify-content: center;\n    align-items: ' + props.theme.position + ';\n    height: ' + (props.theme.position === 'center' ? '100vh' : props.height + 'px') + ';\n  ';
}, _mediaTemplates.media.desktop(_templateObject4, function (props) {
  return props.theme.coords ? props.theme.coords.left : 0;
}), _mediaTemplates.media.desktop(_templateObject5, function (props) {
  return props.theme.coords ? props.theme.coords.right : 0;
}), _mediaTemplates.media.mobile(_templateObject6), _mediaTemplates.media.mobile(_templateObject7), _mediaTemplates.media.mobile(_templateObject8));

var Wrapper = function Wrapper(props) {
  return _react2.default.createElement(
    BackgroundPanel,
    null,
    _react2.default.createElement(
      Container,
      null,
      _react2.default.createElement(
        Content,
        { width: props.width, height: props.height },
        props.children
      )
    )
  );
};

Wrapper.displayName = 'Wrapper';

Wrapper.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.array]).isRequired,
  width: _propTypes2.default.number,
  height: _propTypes2.default.number
};

Wrapper.defaultProps = {
  width: _helper.WIDTH,
  height: _helper.HEIGHT
};
exports.default = Wrapper;