'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  background: none;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  font-size: 1.6em;\n  padding: 0px 2px 0px 0px;\n  color: ', ';\n  width: 33%;\n  &:hover ', ' {\n    text-decoration: none;\n    background-color: rgba(0, 0, 0, 0.12);\n  }\n'], ['\n  background: none;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  font-size: 1.6em;\n  padding: 0px 2px 0px 0px;\n  color: ', ';\n  width: 33%;\n  &:hover ', ' {\n    text-decoration: none;\n    background-color: rgba(0, 0, 0, 0.12);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column;\n  width: ', 'px;\n  ', ' height: ', 'px;\n  background: ', ';\n  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 45px, rgba(0, 0, 0, 0.22) 0px 10px 18px;\n  \n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n'], ['\n  display: flex;\n  flex-direction: column;\n  width: ', 'px;\n  ', ' height: ', 'px;\n  background: ', ';\n  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 45px, rgba(0, 0, 0, 0.22) 0px 10px 18px;\n  \n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['width: 100%;'], ['width: 100%;']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-wrap: wrap;\n  flex-grow: 1;\n  button {\n    border-bottom: 1px solid #ddd;\n    border-right: 1px solid #ddd;\n  }\n  button:nth-child(3n) {\n    border-right: none;\n  }\n  button:nth-child(-n + 3) {\n    border-top: 1px solid #ddd;\n  }\n'], ['\n  display: flex;\n  flex-wrap: wrap;\n  flex-grow: 1;\n  button {\n    border-bottom: 1px solid #ddd;\n    border-right: 1px solid #ddd;\n  }\n  button:nth-child(3n) {\n    border-right: none;\n  }\n  button:nth-child(-n + 3) {\n    border-top: 1px solid #ddd;\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  border-width: ', 'px;\n  position: fixed;\n  z-index: 10000;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n  border-right-color: #fff;\n  border-left-width: 0;\n  left: ', ';\n  margin-top: -', 'px;\n  top: ', ';\n'], ['\n  border-width: ', 'px;\n  position: fixed;\n  z-index: 10000;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n  border-right-color: #fff;\n  border-left-width: 0;\n  left: ', ';\n  margin-top: -', 'px;\n  top: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactOnclickoutside = require('react-onclickoutside');

var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);

var _backspace = require('react-icons/lib/md/backspace');

var _backspace2 = _interopRequireDefault(_backspace);

var _KeypadButton = require('./KeypadButton');

var _KeypadButton2 = _interopRequireDefault(_KeypadButton);

var _PopoverDisplay = require('./PopoverDisplay');

var _PopoverDisplay2 = _interopRequireDefault(_PopoverDisplay);

var _mediaTemplates = require('../styles/media-templates');

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

var Keys = _styledComponents2.default.div(_templateObject4);

var Arrow = _styledComponents2.default.div(_templateObject5, _helper.PADDING, function (props) {
  return props ? props.coords.left + props.coords.width + 'px' : '50%';
}, _helper.PADDING, function (props) {
  return props ? props.coords.top + props.coords.height / 2 + 'px' : '50%';
});

var PopoverKeyPad = function (_Component) {
  _inherits(PopoverKeyPad, _Component);

  function PopoverKeyPad(props) {
    _classCallCheck(this, PopoverKeyPad);

    var _this = _possibleConstructorReturn(this, (PopoverKeyPad.__proto__ || Object.getPrototypeOf(PopoverKeyPad)).call(this, props));

    _this.state = { input: props.value };
    _this.isDecimal = props.isDecimal || false;
    _this.step = props.qtyIncrement ? props.qtyIncrement : 1;
    _this.allowKey = _this.isDecimal ? [7, 8, 9, 4, 5, 6, 1, 2, 3, _this.props.decimalSeparator, 0] : [7, 8, 9, 4, 5, 6, 1, 2, 3, '', 0];
    _this.handleClick = _this.handleClick.bind(_this);
    _this.keyDown = _this.keyDown.bind(_this);
    _this.cancelLastInsert = _this.cancelLastInsert.bind(_this);
    _this.numericKeys = [].concat(_toConsumableArray(Array(10).keys()));
    return _this;
  }

  _createClass(PopoverKeyPad, [{
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
    key: 'getValidValue',
    value: function getValidValue(text, isIncrement) {
      var _props2 = this.props,
          min = _props2.min,
          max = _props2.max,
          smartIncrement = _props2.smartIncrement;

      var prevVal = this.getValueText(text);
      var temp = prevVal;
      if (isIncrement !== undefined) {
        temp = prevVal + (isIncrement ? this.step : -this.step);
      }
      var newVal = Math.max(temp, min);

      if (min && this.isOverMin(text)) {
        this.props.onChangeOverMin(temp);
      }

      if (max) {
        if (this.isOverMax(this.getDisplayText(temp))) {
          this.props.onChangeOverMax(newVal);
        }

        newVal = Math.min(newVal, max);
      }

      newVal = newVal.toFixed(2) * 1;

      /** if has increment qty */
      var newValPerStep = newVal % this.step;
      if (this.step !== 1 && newValPerStep !== 0 && smartIncrement) {
        newVal = newVal >= prevVal ? (_lodash2.default.toInteger(newVal / this.step) + 1) * this.step : (_lodash2.default.toInteger(newVal / this.step) - 1) * this.step;
      }

      if (!newVal && _lodash2.default.isNumber(min)) {
        newVal = min;
      }

      return newVal;
    }
  }, {
    key: 'getDisplayText',
    value: function getDisplayText(value) {
      var decimalSeparator = this.props.decimalSeparator;

      return ('' + value).replace('.', decimalSeparator);
    }
  }, {
    key: 'getValueText',
    value: function getValueText(text) {
      var decimalSeparator = this.props.decimalSeparator;

      return text.replace(decimalSeparator, '.') * 1;
    }
  }, {
    key: 'isOverMin',
    value: function isOverMin(current) {
      var _props3 = this.props,
          decimalSeparator = _props3.decimalSeparator,
          min = _props3.min;

      return current.replace(decimalSeparator, '.') * 1 < min;
    }
  }, {
    key: 'isOverMax',
    value: function isOverMax(current) {
      var _props4 = this.props,
          decimalSeparator = _props4.decimalSeparator,
          max = _props4.max;

      return current.replace(decimalSeparator, '.') * 1 > max;
    }
  }, {
    key: 'keyDown',
    value: function keyDown(event) {
      event.preventDefault();
      var key = event.key;
      var input = this.state.input;
      var _props5 = this.props,
          confirm = _props5.confirm,
          cancel = _props5.cancel,
          validation = _props5.validation,
          decimalSeparator = _props5.decimalSeparator;

      if (key === 'Enter' && validation(input)) {
        confirm(input);
      } else if (key === 'Backspace') {
        this.cancelLastInsert();
      } else if (key === 'Escape') {
        cancel();
      } else if (this.numericKeys.includes(parseInt(key, 10)) || key === decimalSeparator) {
        this.handleClick(key);
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
    key: 'handleClickOutside',
    value: function handleClickOutside(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      var _props6 = this.props,
          validation = _props6.validation,
          confirm = _props6.confirm,
          cancel = _props6.cancel;
      var input = this.state.input;

      if (validation(input)) {
        confirm(input);
      } else {
        cancel();
      }
    }
  }, {
    key: 'handleClick',
    value: function handleClick(key) {
      var _this2 = this;

      if (this.props.keyValid(this.state.input, key, this.isDecimal, this.props.decimalSeparator)) {
        if (key === '-') {
          return this.setState(function (prevState) {
            return {
              input: prevState.input.charAt(0) === '-' ? prevState.input.substr(1) : '-' + prevState.input
            };
          });
        }

        if (key === this.props.decimalSeparator) {
          return this.setState(function (prevState) {
            return { input: prevState.input + key };
          });
        }

        return this.setState(function (prevState) {
          return {
            input: _this2.getDisplayText(_this2.getValidValue(prevState.input + key))
          };
        });
      }

      return false;
    }
  }, {
    key: 'control',
    value: function control(isIncrement) {
      var _this3 = this;

      this.setState(function (prevState) {
        return {
          input: _this3.getDisplayText(_this3.getValidValue(prevState.input, isIncrement))
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props7 = this.props,
          displayRule = _props7.displayRule,
          theme = _props7.theme,
          keyValid = _props7.keyValid,
          decimalSeparator = _props7.decimalSeparator,
          terminalAlign = _props7.terminalAlign,
          width = _props7.width,
          height = _props7.height;


      return _react2.default.createElement(
        Content,
        { width: width, height: height },
        _react2.default.createElement(_PopoverDisplay2.default, {
          control: this.control.bind(this),
          value: this.state.input,
          displayRule: displayRule,
          terminalAlign: terminalAlign
        }),
        _react2.default.createElement(
          Keys,
          null,
          this.allowKey.map(function (key) {
            return _react2.default.createElement(_KeypadButton2.default, {
              key: 'button-' + key,
              theme: theme,
              click: function click(clickedKey) {
                return _this4.handleClick(clickedKey);
              },
              value: key,
              disabled: !keyValid(_this4.state.input, key, _this4.isDecimal, decimalSeparator)
            });
          }),
          _react2.default.createElement(
            Backspace,
            { onClick: this.cancelLastInsert },
            _react2.default.createElement(_backspace2.default, null)
          )
        ),
        this.props.arrow && _react2.default.createElement(Arrow, { coords: this.props.coords })
      );
    }
  }]);

  return PopoverKeyPad;
}(_react.Component);

PopoverKeyPad.displayName = 'PopoverKeyPad';

PopoverKeyPad.propTypes = {
  theme: _propTypes2.default.string,
  confirm: _propTypes2.default.func.isRequired,
  update: _propTypes2.default.func.isRequired,
  cancel: _propTypes2.default.func.isRequired,
  displayRule: _propTypes2.default.func.isRequired,
  validation: _propTypes2.default.func.isRequired,
  keyValid: _propTypes2.default.func.isRequired,
  value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  max: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.bool]),
  min: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.bool]),
  sync: _propTypes2.default.bool.isRequired,
  decimalSeparator: _propTypes2.default.string,
  isDecimal: _propTypes2.default.bool,
  qtyIncrement: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.bool]),
  smartIncrement: _propTypes2.default.bool,
  coords: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.bool]),
  arrow: _propTypes2.default.oneOf(['left', 'right', false]),
  terminalAlign: _propTypes2.default.oneOf(['left', 'right', 'center']),
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  onChangeOverMax: _propTypes2.default.func,
  onChangeOverMin: _propTypes2.default.func
};

PopoverKeyPad.defaultProps = {
  theme: undefined,
  value: '',
  max: false,
  min: 0,
  decimalSeparator: '.',
  isDecimal: false,
  qtyIncrement: false,
  smartIncrement: false,
  coords: false,
  arrow: false,
  terminalAlign: 'center',
  width: _helper.WIDTH,
  height: _helper.HEIGHT,
  onChangeOverMax: function onChangeOverMax() {},
  onChangeOverMin: function onChangeOverMin() {}
};

exports.default = (0, _reactOnclickoutside2.default)(PopoverKeyPad);