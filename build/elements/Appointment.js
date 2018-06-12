'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  flex-grow: 1;\n  flex-basis: 0;\n'], ['\n  display: flex;\n  flex-grow: 1;\n  flex-basis: 0;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  flex-basis: 0;\n'], ['\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  flex-basis: 0;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: flex;\n  background: white;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 4px 0;\n  text-transform: capitalize;\n  line-height: 1;\n  .number {\n    font-size: 1.2em;\n  }\n  .name {\n    font-size: 0.8em;\n  }\n'], ['\n  display: flex;\n  background: white;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 4px 0;\n  text-transform: capitalize;\n  line-height: 1;\n  .number {\n    font-size: 1.2em;\n  }\n  .name {\n    font-size: 0.8em;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  overflow-y: auto;\n  flex: 1;\n'], ['\n  overflow-y: auto;\n  flex: 1;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n  padding: 0.5em;\n  border-bottom: 1px solid #fff;\n  :nth-child(-n + 7) {\n    border-top: \'1px solid #ddd\';\n  }\n  &:active {\n    ', ';\n  }\n'], ['\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n  padding: 0.5em;\n  border-bottom: 1px solid #fff;\n  :nth-child(-n + 7) {\n    border-top: \'1px solid #ddd\';\n  }\n  &:active {\n    ', ';\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactOnclickoutside = require('react-onclickoutside');

var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _reactSwipeable = require('react-swipeable');

var _reactSwipeable2 = _interopRequireDefault(_reactSwipeable);

var _chunk = require('lodash/chunk');

var _chunk2 = _interopRequireDefault(_chunk);

var _chevronLeft = require('react-icons/lib/md/chevron-left');

var _chevronLeft2 = _interopRequireDefault(_chevronLeft);

var _chevronRight = require('react-icons/lib/md/chevron-right');

var _chevronRight2 = _interopRequireDefault(_chevronRight);

var _CalendarUI = require('./CalendarUI');

var _ui = require('./ui');

var _mediaTemplates = require('../styles/media-templates');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Days = _styledComponents2.default.div(_templateObject);

var DayTimes = _styledComponents2.default.div(_templateObject2);

var Day = _styledComponents2.default.div(_templateObject3);

var Times = _styledComponents2.default.div(_templateObject4);

var Time = _styledComponents2.default.div(_templateObject5, function (props) {
  return 'color: ' + props.theme.body.highlightColor + '; border-color: ' + props.theme.body.highlightColor;
});

var Appointment = function (_Component) {
  _inherits(Appointment, _Component);

  function Appointment(props) {
    _classCallCheck(this, Appointment);

    var _this = _possibleConstructorReturn(this, (Appointment.__proto__ || Object.getPrototypeOf(Appointment)).call(this, props));

    _this.state = {
      dayRange: (0, _mediaTemplates.isMobile)() ? 4 : 7,
      index: 0,
      orderedDates: Object.keys(props.dates).sort(function (a, b) {
        return (0, _moment2.default)(a, props.dateFormat) - (0, _moment2.default)(b, props.dateFormat);
      })
    };
    // Moment.js hack to load locales when needed
    if (props.locale !== 'en') {
      try {
        // eslint-disable-next-line import/no-dynamic-require
        require('moment/locale/' + props.locale); // eslint-disable-line global-require
      } catch (e) {
        console.warn('Wrong locale ' + props.locale + ', ' + e.message); // eslint-disable-line no-console
      }
    }
    _this.swipingLeft = _this.swipingLeft.bind(_this);
    _this.swipingRight = _this.swipingRight.bind(_this);
    _this.handleNextDays = _this.handleNextDays.bind(_this);
    _this.handlePrevDays = _this.handlePrevDays.bind(_this);
    return _this;
  }

  _createClass(Appointment, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (document.body) {
        document.body.style.overflow = 'hidden';
      }
      window.addEventListener('resize', this.onResizeWindow.bind(this));
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.dates !== this.props.dates) {
        var dateFormat = nextProps.dateFormat;

        this.setState({
          orderedDates: Object.keys(nextProps.dates).sort(function (a, b) {
            return (0, _moment2.default)(a, dateFormat) - (0, _moment2.default)(b, dateFormat);
          })
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (document.body) {
        document.body.style.overflow = '';
      }
      window.removeEventListener('resize', this.onResizeWindow.bind(this));
    }
  }, {
    key: 'onResizeWindow',
    value: function onResizeWindow() {
      var dayRange = (0, _mediaTemplates.isMobile)() ? 4 : 7;
      if (this.state.dayRange !== dayRange) {
        this.setState({ dayRange: dayRange });
      }
    }
  }, {
    key: 'swipingLeft',
    value: function swipingLeft() {
      this.handleNextDays();
    }
  }, {
    key: 'swipingRight',
    value: function swipingRight() {
      this.handlePrevDays();
    }
  }, {
    key: 'handleNextDays',
    value: function handleNextDays() {
      this.setState(function (oldState) {
        return { index: oldState.index + 1 };
      });
    }
  }, {
    key: 'handlePrevDays',
    value: function handlePrevDays() {
      this.setState(function (oldState) {
        return { index: Math.max(oldState.index - 1, 0) };
      });
    }
  }, {
    key: 'handleClickOutside',
    value: function handleClickOutside(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      this.props.cancel();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          locale = _props.locale,
          dateFormat = _props.dateFormat,
          dates = _props.dates;
      var _state = this.state,
          dayRange = _state.dayRange,
          index = _state.index,
          orderedDates = _state.orderedDates;

      var chunkDates = (0, _chunk2.default)(orderedDates, dayRange);
      var firstDayMonth = (0, _moment2.default)(chunkDates[index][0], dateFormat).locale(locale).format('MMMM Y');
      var lastDayMonth = (0, _moment2.default)(chunkDates[index][chunkDates[index].length - 1], dateFormat).locale(locale).format('MMMM Y');
      return _react2.default.createElement(
        _reactSwipeable2.default,
        { onSwipedLeft: this.swipingLeft, onSwipedRight: this.swipingRight },
        _react2.default.createElement(
          _CalendarUI.Container,
          null,
          _react2.default.createElement(
            _CalendarUI.Content,
            null,
            _react2.default.createElement(
              _CalendarUI.Header,
              null,
              _react2.default.createElement(
                'div',
                {
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%'
                  }
                },
                _react2.default.createElement(
                  _ui.NButton,
                  { onClick: this.handlePrevDays, disabled: index === 0 },
                  _react2.default.createElement(_chevronLeft2.default, null)
                ),
                _react2.default.createElement(
                  'div',
                  {
                    style: {
                      display: 'flex',
                      flexGrow: 1,
                      justifyContent: 'center'
                    }
                  },
                  firstDayMonth === lastDayMonth ? firstDayMonth : firstDayMonth + ' - ' + lastDayMonth
                ),
                _react2.default.createElement(
                  _ui.NButton,
                  { onClick: this.handleNextDays, disabled: !chunkDates[index + 1] },
                  _react2.default.createElement(_chevronRight2.default, null)
                )
              )
            ),
            _react2.default.createElement(
              Days,
              null,
              chunkDates[index].map(function (day) {
                return _react2.default.createElement(
                  DayTimes,
                  { key: 'appointment-day-' + day },
                  _react2.default.createElement(
                    Day,
                    null,
                    _react2.default.createElement(
                      'div',
                      { className: 'number' },
                      (0, _moment2.default)(day, dateFormat).format('DD')
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'name' },
                      (0, _moment2.default)(day, dateFormat).format('ddd')
                    )
                  ),
                  _react2.default.createElement(
                    Times,
                    null,
                    dates[day].map(function (time) {
                      return _react2.default.createElement(
                        Time,
                        {
                          onClick: function onClick() {
                            _this2.props.confirm(day + ' ' + time);
                          },
                          key: 'appointment-' + day + ' ' + time
                        },
                        time
                      );
                    })
                  )
                );
              })
            )
          )
        )
      );
    }
  }]);

  return Appointment;
}(_react.Component);

Appointment.propTypes = {
  confirm: _propTypes2.default.func.isRequired,
  cancel: _propTypes2.default.func.isRequired,
  dateFormat: _propTypes2.default.string,
  locale: _propTypes2.default.string.isRequired,
  dates: _propTypes2.default.objectOf(_propTypes2.default.array).isRequired
};

Appointment.defaultProps = {
  dateFormat: 'MM/DD/YYYY'
};

exports.default = (0, _reactOnclickoutside2.default)(Appointment);