'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  background: none;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  font-size: 1.6em;\n  padding: 0px 2px 0px 0px;\n  color: ', ';\n  width: 33%;\n  &:hover ', ' {\n    text-decoration: none;\n    background-color: rgba(0, 0, 0, 0.12);\n  }\n'], ['\n  background: none;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  font-size: 1.6em;\n  padding: 0px 2px 0px 0px;\n  color: ', ';\n  width: 33%;\n  &:hover ', ' {\n    text-decoration: none;\n    background-color: rgba(0, 0, 0, 0.12);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column;\n  width: ', 'px;\n  ', ' height: ', 'px;\n  background: ', ';\n  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 45px, rgba(0, 0, 0, 0.22) 0px 10px 18px;\n'], ['\n  display: flex;\n  flex-direction: column;\n  width: ', 'px;\n  ', ' height: ', 'px;\n  background: ', ';\n  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 45px, rgba(0, 0, 0, 0.22) 0px 10px 18px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['width: 100%;'], ['width: 100%;']),
    _templateObject4 = _taggedTemplateLiteral(['\n  overflow: hidden;\n  font-size: 1.3em;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n'], ['\n  overflow: hidden;\n  font-size: 1.3em;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: space-between;\n  padding: 2px 5px;\n  align-items: center;\n  color: ', ';\n  background: ', ';\n  user-select: none;\n'], ['\n  display: flex;\n  justify-content: space-between;\n  padding: 2px 5px;\n  align-items: center;\n  color: ', ';\n  background: ', ';\n  user-select: none;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-wrap: wrap;\n  flex-grow: 1;\n  button {\n    border-bottom: 1px solid #ddd;\n    border-right: 1px solid #ddd;\n  }\n  button:nth-child(3n) {\n    border-right: none;\n  }\n  button:nth-child(-n + 3) {\n    border-top: 1px solid #ddd;\n  }\n'], ['\n  display: flex;\n  flex-wrap: wrap;\n  flex-grow: 1;\n  button {\n    border-bottom: 1px solid #ddd;\n    border-right: 1px solid #ddd;\n  }\n  button:nth-child(3n) {\n    border-right: none;\n  }\n  button:nth-child(-n + 3) {\n    border-top: 1px solid #ddd;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactOnclickoutside = require('react-onclickoutside');

var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);

var _check = require('react-icons/lib/md/check');

var _check2 = _interopRequireDefault(_check);

var _checkCircle = require('react-icons/lib/md/check-circle');

var _checkCircle2 = _interopRequireDefault(_checkCircle);

var _close = require('react-icons/lib/md/close');

var _close2 = _interopRequireDefault(_close);

var _backspace = require('react-icons/lib/md/backspace');

var _backspace2 = _interopRequireDefault(_backspace);

var _KeypadButton = require('./KeypadButton');

var _KeypadButton2 = _interopRequireDefault(_KeypadButton);

var _Display = require('./Display');

var _Display2 = _interopRequireDefault(_Display);

var _mediaTemplates = require('../styles/media-templates');

var _ui = require('./ui');

var _helper = require('../helper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Backspace = _styledComponents2.default.button(_templateObject, function (props) {
  return props.theme.header.primaryColor;
}, undefined);

var Content = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.width;
}, _mediaTemplates.media.mobile(_templateObject3), function (props) {
  return props.height;
}, function (props) {
  return props.theme.body.backgroundColor;
});

var Label = _styledComponents2.default.div(_templateObject4);

var Header = _styledComponents2.default.div(_templateObject5, function (props) {
  return props.theme.header.secondaryColor;
}, function (props) {
  return props.theme.header.backgroundColor;
});

var Keys = _styledComponents2.default.div(_templateObject6);

var RooneyKeyPad = function (_Component) {
  _inherits(RooneyKeyPad, _Component);

  function RooneyKeyPad(props) {
    _classCallCheck(this, RooneyKeyPad);

    var _this = _possibleConstructorReturn(this, (RooneyKeyPad.__proto__ || Object.getPrototypeOf(RooneyKeyPad)).call(this, props));

    _this.state = { input: props.value };
    _this.isDecimal = props.isDecimal || false;
    _this.step = _this.isDecimal ? 0.1 : 1;
    _this.allowKey = _this.isDecimal ? [7, 8, 9, 4, 5, 6, 1, 2, 3, '.', 0] : [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
    _this.handleClick = _this.handleClick.bind(_this);
    _this.keyDown = _this.keyDown.bind(_this);
    _this.cancelLastInsert = _this.cancelLastInsert.bind(_this);
    _this.numericKeys = [].concat(_toConsumableArray(Array(10).keys()));
    return _this;
  }

  _createClass(RooneyKeyPad, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('keydown', this.keyDown);
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      var input = this.state.input;
      var _props = this.props,
          sync = _props.sync,
          validation = _props.validation,
          update = _props.update;

      if (sync && nextState.input !== input && validation(nextState.input)) {
        update(nextState.input);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.keyDown);
    }
  }, {
    key: 'handleClickOutside',
    value: function handleClickOutside(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      var _props2 = this.props,
          validation = _props2.validation,
          confirm = _props2.confirm,
          cancel = _props2.cancel;
      var input = this.state.input;

      if (validation(input)) {
        confirm(input);
      } else {
        cancel();
      }
    }
  }, {
    key: 'cancelLastInsert',
    value: function cancelLastInsert() {
      this.setState(function (prevState) {
        return { input: prevState.input.slice(0, -1) };
      });
    }
  }, {
    key: 'keyDown',
    value: function keyDown(event) {
      event.preventDefault();
      var key = event.key;
      var input = this.state.input;
      var _props3 = this.props,
          confirm = _props3.confirm,
          cancel = _props3.cancel,
          validation = _props3.validation;

      if (key === 'Enter' && validation(input)) {
        confirm(input);
      } else if (key === 'Backspace') {
        this.cancelLastInsert();
      } else if (key === 'Escape') {
        cancel();
      } else if (this.numericKeys.includes(parseInt(key, 10)) || key === '.' || key === '-') {
        this.handleClick(key);
      }
    }
  }, {
    key: 'handleClick',
    value: function handleClick(key) {
      if (this.props.keyValid(this.state.input, key, this.isDecimal)) {
        if (key === '-') {
          this.setState(function (prevState) {
            return {
              input: prevState.input.charAt(0) === '-' ? prevState.input.substr(1) : '-' + prevState.input
            };
          });
        } else {
          this.setState(function (prevState) {
            return { input: prevState.input + key };
          });
        }
      }
    }
  }, {
    key: 'control',
    value: function control(isIncrement) {
      var _this2 = this;

      this.setState(function (prevState) {
        var newVal = Math.max(prevState.input * 1 + (isIncrement ? _this2.step : -_this2.step), 0);
        return { input: String(newVal.toFixed(2) * 1) };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props4 = this.props,
          displayRule = _props4.displayRule,
          validation = _props4.validation,
          label = _props4.label,
          confirm = _props4.confirm,
          cancel = _props4.cancel,
          theme = _props4.theme,
          keyValid = _props4.keyValid,
          dateFormat = _props4.dateFormat,
          width = _props4.width,
          height = _props4.height;


      return _react2.default.createElement(
        Content,
        { width: width, height: height },
        !this.props.sync && _react2.default.createElement(
          Header,
          null,
          _react2.default.createElement(
            _ui.NButton,
            { onClick: cancel },
            _react2.default.createElement(_close2.default, null)
          ),
          _react2.default.createElement(
            Label,
            null,
            label
          ),
          _react2.default.createElement(
            _ui.NButton,
            {
              onClick: function onClick() {
                return confirm(_this3.state.input);
              },
              disabled: !validation(this.state.input)
            },
            validation(this.state.input) ? _react2.default.createElement(_checkCircle2.default, null) : _react2.default.createElement(_check2.default, null)
          )
        ),
        _react2.default.createElement(_Display2.default, {
          control: this.control.bind(this),
          value: this.state.input,
          displayRule: displayRule,
          dateFormat: dateFormat
        }),
        _react2.default.createElement(
          Keys,
          null,
          [7, 8, 9, 4, 5, 6, 1, 2, 3, '.', 0].map(function (key) {
            return _react2.default.createElement(_KeypadButton2.default, {
              key: 'button-' + key,
              theme: theme,
              click: function click(clickedKey) {
                return _this3.handleClick(clickedKey);
              },
              value: key,
              disabled: !keyValid(_this3.state.input, key, dateFormat)
            });
          }),
          _react2.default.createElement(
            Backspace,
            { onClick: this.cancelLastInsert },
            _react2.default.createElement(_backspace2.default, null)
          )
        )
      );
    }
  }]);

  return RooneyKeyPad;
}(_react.Component);

RooneyKeyPad.displayName = 'RooneyKeyPad';

RooneyKeyPad.propTypes = {
  label: _propTypes2.default.string,
  theme: _propTypes2.default.string,
  confirm: _propTypes2.default.func.isRequired,
  update: _propTypes2.default.func.isRequired,
  cancel: _propTypes2.default.func.isRequired,
  displayRule: _propTypes2.default.func.isRequired,
  validation: _propTypes2.default.func.isRequired,
  keyValid: _propTypes2.default.func.isRequired,
  dateFormat: _propTypes2.default.string,
  value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  sync: _propTypes2.default.bool.isRequired,
  isDecimal: _propTypes2.default.bool,
  width: _propTypes2.default.number,
  height: _propTypes2.default.number
};

RooneyKeyPad.defaultProps = {
  label: undefined,
  theme: undefined,
  dateFormat: 'MM/DD/YYYY',
  value: '',
  isDecimal: false,
  width: _helper.WIDTH,
  height: _helper.HEIGHT
};

exports.default = (0, _reactOnclickoutside2.default)(RooneyKeyPad);