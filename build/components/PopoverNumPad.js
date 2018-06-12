'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTransition = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']),
    _templateObject2 = _taggedTemplateLiteral(['\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  opacity: 0.5;\n  display: block;\n  z-index: 9998;\n  background-color: #000;\n  position: fixed;\n  box-sizing: border-box;\n  line-height: 21.4286px;\n  text-rendering: optimizeLegibility;\n  text-size-adjust: 100%;\n  transition-delay: 0s;\n  transition-duration: 0.15s;\n  transition-property: opacity;\n  transition-timing-function: linear;\n  word-wrap: break-word;\n  -webkit-font-smoothing: antialiased;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n'], ['\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  opacity: 0.5;\n  display: block;\n  z-index: 9998;\n  background-color: #000;\n  position: fixed;\n  box-sizing: border-box;\n  line-height: 21.4286px;\n  text-rendering: optimizeLegibility;\n  text-size-adjust: 100%;\n  transition-delay: 0s;\n  transition-duration: 0.15s;\n  transition-property: opacity;\n  transition-timing-function: linear;\n  word-wrap: break-word;\n  -webkit-font-smoothing: antialiased;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactPortal = require('react-portal');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Slide = require('material-ui/transitions/Slide');

var _Slide2 = _interopRequireDefault(_Slide);

var _elements = require('../elements');

var _globalCss = require('../styles/global-css');

var _globalCss2 = _interopRequireDefault(_globalCss);

var _styles = require('../styles');

var _styles2 = _interopRequireDefault(_styles);

var _helper = require('../helper');

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

(0, _styledComponents.injectGlobal)(_templateObject, _globalCss2.default); // eslint-disable-line no-unused-expressions

var Faded = _styledComponents2.default.div(_templateObject2);

var getTransition = exports.getTransition = function getTransition(show, position) {
  var transition = _Slide2.default;
  var transitionProps = {
    in: show,
    direction: 'up',
    mountOnEnter: true,
    unmountOnExit: true
  };
  if (position === 'flex-start') {
    transitionProps.direction = 'down';
  }
  if (position !== 'flex-start' && position !== 'flex-end') {
    transition = 'span';
    transitionProps = {};
  }
  return { transition: transition, transitionProps: transitionProps };
};

exports.default = function (_ref) {
  var element = _ref.element,
      validation = _ref.validation,
      formatInputValue = _ref.formatInputValue,
      displayRule = _ref.displayRule,
      inputButtonContent = _ref.inputButtonContent,
      keyValid = _ref.keyValid;

  var PopoverNumPad = function (_Component) {
    _inherits(PopoverNumPad, _Component);

    function PopoverNumPad(props) {
      _classCallCheck(this, PopoverNumPad);

      var _this = _possibleConstructorReturn(this, (PopoverNumPad.__proto__ || Object.getPrototypeOf(PopoverNumPad)).call(this, props));

      _this.state = {
        show: false,
        value: formatInputValue(props.value) //eslint-disable-line
      };
      _this.toggleKeyPad = _this.toggleKeyPad.bind(_this);
      _this.confirm = _this.confirm.bind(_this);
      _this.update = _this.update.bind(_this);
      return _this;
    }

    _createClass(PopoverNumPad, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (this.props.value !== nextProps.value) {
          this.setState({
            value: formatInputValue(nextProps.value) //eslint-disable-line
          });
        }
      }
    }, {
      key: 'toggleKeyPad',
      value: function toggleKeyPad() {
        var coords = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var parent = arguments[1];
        var _props = this.props,
            position = _props.position,
            minTop = _props.minTop,
            maxBottom = _props.maxBottom;

        var inputCoords = !this.state.show && _helper2.default[position] ? (0, _helper.toCss)(coords, position, minTop || (parent ? parent.y : 0), maxBottom, this.props) : undefined;
        this.setState(function (prevState) {
          return { show: !prevState.show, inputCoords: inputCoords, coords: coords };
        });
      }
    }, {
      key: 'update',
      value: function update(value) {
        var _props2 = this.props,
            onChange = _props2.onChange,
            decimalSeparator = _props2.decimalSeparator;

        onChange(displayRule(value, decimalSeparator));
      }
    }, {
      key: 'confirm',
      value: function confirm(value) {
        var updateValue = {};
        if (this.state.show && validation(value)) {
          updateValue = { value: value };
          this.update(value);
        }
        this.setState(function (prevState) {
          return Object.assign({}, { show: !prevState.show }, updateValue);
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            show = _state.show,
            inputCoords = _state.inputCoords,
            coords = _state.coords;
        var _props3 = this.props,
            placeholder = _props3.placeholder,
            label = _props3.label,
            theme = _props3.theme,
            locale = _props3.locale,
            min = _props3.min,
            max = _props3.max,
            position = _props3.position,
            sync = _props3.sync,
            decimalSeparator = _props3.decimalSeparator,
            isDecimal = _props3.isDecimal,
            qtyIncrement = _props3.qtyIncrement,
            smartIncrement = _props3.smartIncrement,
            arrow = _props3.arrow,
            terminalAlign = _props3.terminalAlign,
            width = _props3.width,
            height = _props3.height,
            value = _props3.value,
            onChangeOverMax = _props3.onChangeOverMax,
            onChangeOverMin = _props3.onChangeOverMin;

        var customTheme = (typeof theme === 'undefined' ? 'undefined' : _typeof(theme)) === 'object' ? theme : (0, _styles2.default)(theme);
        customTheme.position = position;
        customTheme.coords = inputCoords;

        var display = position !== 'flex-start' && position !== 'flex-end' ? show : true;

        var _getTransition = getTransition(show, position),
            transition = _getTransition.transition,
            transitionProps = _getTransition.transitionProps;

        return _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            _styledComponents.ThemeProvider,
            { theme: customTheme },
            _react2.default.createElement(
              _elements.PopoverInputField,
              {
                placeholder: placeholder,
                showKeyPad: this.toggleKeyPad,
                inputValue: '' + value,
                displayRule: displayRule,
                label: label,
                disabled: this.state.show,
                buttonContent: inputButtonContent
              },
              this.props.children
            )
          ),
          _react2.default.createElement(
            _reactPortal.Portal,
            null,
            display && _react2.default.createElement(Faded, null),
            display && _react2.default.createElement(transition, transitionProps, _react2.default.createElement(
              _styledComponents.ThemeProvider,
              { theme: customTheme },
              _react2.default.createElement(
                _elements.Wrapper,
                { show: true, width: width, height: height },
                _react2.default.createElement(element, {
                  cancel: this.toggleKeyPad,
                  confirm: this.confirm,
                  update: this.update,
                  eventTypes: ['click', 'touchend'],
                  displayRule: displayRule,
                  validation: validation,
                  keyValid: keyValid,
                  label: label,
                  locale: locale,
                  min: min,
                  max: max,
                  value: '' + value,
                  sync: sync,
                  decimalSeparator: decimalSeparator,
                  isDecimal: isDecimal,
                  qtyIncrement: qtyIncrement,
                  smartIncrement: smartIncrement,
                  coords: coords,
                  arrow: arrow,
                  terminalAlign: terminalAlign,
                  width: width,
                  height: height,
                  onChangeOverMax: onChangeOverMax,
                  onChangeOverMin: onChangeOverMin
                }, null)
              )
            ))
          )
        );
      }
    }]);

    return PopoverNumPad;
  }(_react.Component);

  PopoverNumPad.defaultProps = {
    children: undefined,
    placeholder: undefined,
    position: 'flex-end',
    label: undefined,
    theme: undefined,
    locale: 'en',
    value: '',
    min: false,
    max: false,
    sync: false,
    decimalSeparator: '.',
    isDecimal: false,
    qtyIncrement: false,
    smartIncrement: false,
    arrow: false,
    terminalAlign: 'center',
    width: _helper.WIDTH,
    height: _helper.HEIGHT,
    minTop: _helper.MIN_TOP,
    maxBottom: _helper.MAX_BOTTOM,
    onChangeOverMax: function onChangeOverMax() {},
    onChangeOverMin: function onChangeOverMin() {}
  };

  PopoverNumPad.propTypes = {
    onChange: _propTypes2.default.func.isRequired,
    children: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.arrayOf(_propTypes2.default.element)]),
    placeholder: _propTypes2.default.string,
    position: _propTypes2.default.string,
    label: _propTypes2.default.string,
    locale: _propTypes2.default.string,
    theme: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
    value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    min: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.bool]),
    max: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.bool]),
    sync: _propTypes2.default.bool,
    decimalSeparator: _propTypes2.default.string,
    isDecimal: _propTypes2.default.bool,
    qtyIncrement: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.bool]),
    smartIncrement: _propTypes2.default.bool,
    arrow: _propTypes2.default.oneOf(['left', 'right', false]),
    terminalAlign: _propTypes2.default.oneOf(['left', 'right', 'center']),
    width: _propTypes2.default.number,
    height: _propTypes2.default.number,
    minTop: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.bool]),
    maxBottom: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.bool]),
    onChangeOverMax: _propTypes2.default.func,
    onChangeOverMin: _propTypes2.default.func
  };

  return PopoverNumPad;
};