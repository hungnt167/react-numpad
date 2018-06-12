'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable jsx-a11y/label-has-for */


var PopoverInputField = function (_Component) {
  _inherits(PopoverInputField, _Component);

  function PopoverInputField() {
    _classCallCheck(this, PopoverInputField);

    var _this = _possibleConstructorReturn(this, (PopoverInputField.__proto__ || Object.getPrototypeOf(PopoverInputField)).call(this));

    _this.onShowKeyPad = _this.onShowKeyPad.bind(_this);
    return _this;
  }

  _createClass(PopoverInputField, [{
    key: 'onShowKeyPad',
    value: function onShowKeyPad() {
      var showKeyPad = this.props.showKeyPad;

      if (this.input) {
        this.input.blur();
      }
      var inputCoords = this.inputWrapper ? this.inputWrapper.getBoundingClientRect() : undefined;
      var keyPad = _reactDom2.default.findDOMNode(this._reactInternalFiber.stateNode); //eslint-disable-line
      showKeyPad(inputCoords, keyPad ? keyPad.parentElement.getBoundingClientRect() : false);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          placeholder = _props.placeholder,
          inputValue = _props.inputValue,
          displayRule = _props.displayRule,
          label = _props.label,
          disabled = _props.disabled,
          buttonContent = _props.buttonContent,
          children = _props.children;


      return _react2.default.createElement(
        _react.Fragment,
        null,
        label && _react2.default.createElement(
          'label',
          { disabled: disabled },
          label
        ),
        _react2.default.createElement(
          'span',
          {
            onClick: this.onShowKeyPad,
            onKeyPress: this.onShowKeyPad,
            role: 'button',
            tabIndex: 0,
            ref: function ref(wrapper) {
              _this2.inputWrapper = wrapper;
            }
          },
          children ? _react2.default.Children.map(children, function (child) {
            return _react2.default.cloneElement(child, child.type === 'input' ? {
              placeholder: placeholder,
              value: inputValue ? displayRule(inputValue) : inputValue,
              disabled: disabled,
              tabIndex: -1,
              readOnly: true,
              ref: function ref(input) {
                _this2.input = input;
              }
            } : {});
          }) : _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement('input', {
              style: { outline: 'none' },
              ref: function ref(input) {
                _this2.input = input;
              },
              placeholder: placeholder,
              value: inputValue ? displayRule(inputValue) : inputValue,
              disabled: disabled,
              tabIndex: -1,
              readOnly: true
            }),
            buttonContent && _react2.default.createElement(
              'button',
              { tabIndex: -1 },
              buttonContent
            )
          )
        )
      );
    }
  }]);

  return PopoverInputField;
}(_react.Component);

PopoverInputField.displayName = 'PopoverInputField';

PopoverInputField.defaultProps = {
  placeholder: '',
  inputValue: '',
  label: '',
  disabled: false,
  buttonContent: undefined,
  children: undefined
};

PopoverInputField.propTypes = {
  showKeyPad: _propTypes2.default.func.isRequired,
  displayRule: _propTypes2.default.func.isRequired,
  inputValue: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  label: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  buttonContent: _propTypes2.default.element,
  children: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.arrayOf(_propTypes2.default.element)])
};

exports.default = PopoverInputField;