'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GridItemLink = exports.DayGridItem = exports.StyledGridItem = exports.WeekDays = exports.Days = exports.YearLabel = exports.YearSwitch = exports.MonthLabel = exports.MonthSwitch = exports.TwelveGridItem = exports.TwelveGrid = exports.Header = exports.Content = exports.Container = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  user-select: none;\n  width: 100%;\n'], ['\n  user-select: none;\n  width: 100%;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  height: 300px;\n  width: 100vw;\n  ', ' ', ' transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 45px, rgba(0, 0, 0, 0.22) 0px 10px 18px;\n  background: ', ';\n'], ['\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  height: 300px;\n  width: 100vw;\n  ', ' ', ' transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 45px, rgba(0, 0, 0, 0.22) 0px 10px 18px;\n  background: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['width: 100vw;'], ['width: 100vw;']),
    _templateObject4 = _taggedTemplateLiteral(['\n  min-height: 34px;\n  display: flex;\n  justify-content: space-between;\n  text-transform: capitalize;\n  color: white;\n  background: ', ';\n  svg:hover {\n    fill: #ffc107;\n  }\n  svg {\n    width: 1.5em;\n    height: 1.5em;\n  }\n'], ['\n  min-height: 34px;\n  display: flex;\n  justify-content: space-between;\n  text-transform: capitalize;\n  color: white;\n  background: ', ';\n  svg:hover {\n    fill: #ffc107;\n  }\n  svg {\n    width: 1.5em;\n    height: 1.5em;\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  flex-grow: 1;\n  width: 25%;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  text-transform: capitalize;\n  &:hover {\n    ', ';\n  }\n'], ['\n  flex-grow: 1;\n  width: 25%;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  text-transform: capitalize;\n  &:hover {\n    ', ';\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-wrap: wrap;\n  height: 100%;\n'], ['\n  display: flex;\n  flex-wrap: wrap;\n  height: 100%;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  justify-content: center;\n'], ['\n  display: flex;\n  align-items: center;\n  justify-content: center;\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  min-width: 83px;\n  text-align: center;\n  &:active {\n    ', ';\n  }\n'], ['\n  min-width: 83px;\n  text-align: center;\n  &:active {\n    ', ';\n  }\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n  min-width: 40px;\n  text-align: center;\n  &:active {\n    ', ';\n  }\n'], ['\n  min-width: 40px;\n  text-align: center;\n  &:active {\n    ', ';\n  }\n']),
    _templateObject10 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  flex-grow: 1;\n'], ['\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  flex-grow: 1;\n']),
    _templateObject11 = _taggedTemplateLiteral(['\n  display: flex;\n  width: 100%;\n  background: white;\n  height: 26px;\n'], ['\n  display: flex;\n  width: 100%;\n  background: white;\n  height: 26px;\n']),
    _templateObject12 = _taggedTemplateLiteral(['\n  flex-grow: 1;\n  width: calc(100% * (1 / 7) - 1px - 0.5rem);\n  text-align: center;\n  border-right: none;\n  border-bottom: 1px solid #fff;\n  padding: 0.25rem;\n  ', ' & {\n    border: none;\n    padding: 0.2em;\n    font-size: 0.8em;\n    :nth-child(-n + 7) {\n      border-top: none;\n    }\n  }\n  :nth-child(-n + 7) {\n    border-top: \'1px solid #ddd\';\n  }\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-transform: capitalize;\n'], ['\n  flex-grow: 1;\n  width: calc(100% * (1 / 7) - 1px - 0.5rem);\n  text-align: center;\n  border-right: none;\n  border-bottom: 1px solid #fff;\n  padding: 0.25rem;\n  ', ' & {\n    border: none;\n    padding: 0.2em;\n    font-size: 0.8em;\n    :nth-child(-n + 7) {\n      border-top: none;\n    }\n  }\n  :nth-child(-n + 7) {\n    border-top: \'1px solid #ddd\';\n  }\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-transform: capitalize;\n']),
    _templateObject13 = _taggedTemplateLiteral(['\n  ', ' text-decoration: none !important;\n  cursor: pointer;\n  &:hover {\n    ', ';\n  }\n  ', ' &[disabled] {\n    color: ', ' !important;\n    pointer-events: none;\n    cursor: not-allowed;\n  }\n  position: relative;\n  ', ';\n'], ['\n  ', ' text-decoration: none !important;\n  cursor: pointer;\n  &:hover {\n    ', ';\n  }\n  ', ' &[disabled] {\n    color: ', ' !important;\n    pointer-events: none;\n    cursor: not-allowed;\n  }\n  position: relative;\n  ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

var _mediaTemplates = require('../styles/media-templates');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div(_templateObject);

var Content = _styledComponents2.default.div(_templateObject2, _mediaTemplates.media.mobile(_templateObject3), function (props) {
  return props.theme.position === 'fullscreen' ? '\n  width: 100vw;\n  height: 100vh;\n  font-size: 1.2em;\n  ' : '\n    max-width: ' + (props.theme.coords ? '440px' : '768px') + ';\n  ';
}, function (props) {
  return props.theme.body.backgroundColor;
});

var Header = _styledComponents2.default.div(_templateObject4, function (props) {
  return props.theme.header.backgroundColor;
});

var TwelveGridItem = _styledComponents2.default.div(_templateObject5, function (props) {
  return 'color: ' + props.theme.body.highlightColor + ';';
});

var TwelveGrid = _styledComponents2.default.div(_templateObject6);

var MonthSwitch = _styledComponents2.default.div(_templateObject7);

var MonthLabel = _styledComponents2.default.div(_templateObject8, function (props) {
  return 'color: ' + props.theme.body.highlightColor + ';';
});

var YearSwitch = _styledComponents2.default.div(_templateObject7);

var YearLabel = _styledComponents2.default.div(_templateObject9, function (props) {
  return 'color: ' + props.theme.body.highlightColor + ';';
});

var Days = _styledComponents2.default.div(_templateObject10);

var WeekDays = _styledComponents2.default.div(_templateObject11);

var StyledGridItem = _styledComponents2.default.div(_templateObject12, WeekDays);

var GridItemLink = StyledGridItem.withComponent('a');
var DayGridItem = GridItemLink.extend(_templateObject13, function (props) {
  return props.prevMonth || props.nextMonth ? 'color: ' + (0, _color2.default)(props.theme.body.primaryColor).alpha(0.8).string() + ';' : 'color: ' + props.theme.body.primaryColor + ';';
}, function (props) {
  return props.active ? '' : 'color: ' + props.theme.body.highlightColor + '; border-color: ' + props.theme.body.highlightColor;
}, function (props) {
  return props.active ? '\n        font-weight: 700;\n        border-color: ' + props.theme.body.primaryColor + ';\n        ' : '';
}, function (props) {
  return (0, _color2.default)(props.theme.body.primaryColor).alpha(0.5).string();
}, function (props) {
  return props.marker ? '\n    &::before,\n    &::after {\n      content: \'\';\n      position: absolute;\n      top: 0;\n      right: 0;\n      padding: 0;\n      border-color: transparent;\n      border-style: solid;\n    }\n\n    &::after {\n      border-width: 0.5em;\n      border-right-color: ' + props.theme.body.highlightColor + ';\n      border-top-color: ' + props.theme.body.highlightColor + ';\n    }' : '';
});

exports.Container = Container;
exports.Content = Content;
exports.Header = Header;
exports.TwelveGrid = TwelveGrid;
exports.TwelveGridItem = TwelveGridItem;
exports.MonthSwitch = MonthSwitch;
exports.MonthLabel = MonthLabel;
exports.YearSwitch = YearSwitch;
exports.YearLabel = YearLabel;
exports.Days = Days;
exports.WeekDays = WeekDays;
exports.StyledGridItem = StyledGridItem;
exports.DayGridItem = DayGridItem;
exports.GridItemLink = GridItemLink;