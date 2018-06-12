'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VIEWS = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactOnclickoutside = require('react-onclickoutside');

var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _reactSwipeable = require('react-swipeable');

var _reactSwipeable2 = _interopRequireDefault(_reactSwipeable);

var _CalendarYearView = require('./CalendarYearView');

var _CalendarYearView2 = _interopRequireDefault(_CalendarYearView);

var _CalendarMonthView = require('./CalendarMonthView');

var _CalendarMonthView2 = _interopRequireDefault(_CalendarMonthView);

var _CalendarDayView = require('./CalendarDayView');

var _CalendarDayView2 = _interopRequireDefault(_CalendarDayView);

var _CalendarUI = require('./CalendarUI');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VIEWS = exports.VIEWS = {
  DAY_VIEW: 'DAY_VIEW',
  MONTH_VIEW: 'MONTH_VIEW',
  YEAR_VIEW: 'YEAR_VIEW'
};

var Calendar = function (_Component) {
  _inherits(Calendar, _Component);

  function Calendar(props) {
    _classCallCheck(this, Calendar);

    // Moment.js hack to load locales when needed
    var _this = _possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this, props));

    if (props.locale !== 'en') {
      try {
        // eslint-disable-next-line import/no-dynamic-require
        require('moment/locale/' + props.locale); // eslint-disable-line global-require
      } catch (e) {
        console.warn('Wrong locale ' + props.locale + ', ' + e.message); // eslint-disable-line no-console
      }
    }
    _this.currentDate = props.value ? (0, _moment2.default)(props.value, props.dateFormat).startOf('day') : (0, _moment2.default)().startOf('day');
    _this.state = {
      date: _this.currentDate.clone().startOf('day'),
      calendarMonth: _this.currentDate.clone().startOf('month'),
      calendarView: VIEWS.DAY_VIEW
    };
    _this.handleNextMonth = _this.handleNextMonth.bind(_this);
    _this.handlePrevMonth = _this.handlePrevMonth.bind(_this);
    _this.handleChangeMonth = _this.handleChangeMonth.bind(_this);
    _this.handleNextYear = _this.handleNextYear.bind(_this);
    _this.handlePrevYear = _this.handlePrevYear.bind(_this);
    _this.handleChangeYear = _this.handleChangeYear.bind(_this);
    _this.updateCalendarView = _this.updateCalendarView.bind(_this);
    _this.swipingLeft = _this.swipingLeft.bind(_this);
    _this.swipingRight = _this.swipingRight.bind(_this);
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(Calendar, [{
    key: 'onChange',
    value: function onChange(day) {
      var _this2 = this;

      var _props = this.props,
          confirm = _props.confirm,
          dateFormat = _props.dateFormat;

      this.setState({ date: day }, function () {
        // TODO: Find a solution to avoid streaming the value
        confirm(_this2.state.date.format(dateFormat).replace(/\D+/g, ''));
      });
    }
  }, {
    key: 'updateCalendarView',
    value: function updateCalendarView(view) {
      this.setState({ calendarView: view });
    }
  }, {
    key: 'swipingLeft',
    value: function swipingLeft() {
      this.handleNextMonth();
    }
  }, {
    key: 'swipingRight',
    value: function swipingRight() {
      this.handlePrevMonth();
    }
  }, {
    key: 'handleNextMonth',
    value: function handleNextMonth() {
      this.setState(function (oldState) {
        return {
          calendarMonth: oldState.calendarMonth.clone().add(1, 'months').startOf('month')
        };
      });
    }
  }, {
    key: 'handlePrevMonth',
    value: function handlePrevMonth() {
      this.setState(function (oldState) {
        return {
          calendarMonth: oldState.calendarMonth.clone().subtract(1, 'months').startOf('month')
        };
      });
    }
  }, {
    key: 'handleChangeMonth',
    value: function handleChangeMonth(month) {
      this.setState(function (oldState) {
        return {
          calendarMonth: oldState.calendarMonth.clone().month(month).startOf('month'),
          calendarView: VIEWS.DAY_VIEW
        };
      });
    }
  }, {
    key: 'handleNextYear',
    value: function handleNextYear() {
      this.setState(function (oldState) {
        return {
          calendarMonth: oldState.calendarMonth.clone().add(1, 'year')
        };
      });
    }
  }, {
    key: 'handlePrevYear',
    value: function handlePrevYear() {
      this.setState(function (oldState) {
        return {
          calendarMonth: oldState.calendarMonth.clone().subtract(1, 'year')
        };
      });
    }
  }, {
    key: 'handleChangeYear',
    value: function handleChangeYear(year) {
      this.setState(function (oldState) {
        return {
          calendarMonth: oldState.calendarMonth.clone().year(year),
          calendarView: VIEWS.DAY_VIEW
        };
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
      var _props2 = this.props,
          locale = _props2.locale,
          weekOffset = _props2.weekOffset,
          keyValid = _props2.keyValid,
          minDate = _props2.minDate,
          maxDate = _props2.maxDate,
          dateFormat = _props2.dateFormat,
          markers = _props2.markers;
      var _state = this.state,
          date = _state.date,
          calendarMonth = _state.calendarMonth,
          calendarView = _state.calendarView;


      return _react2.default.createElement(
        _reactSwipeable2.default,
        { onSwipedLeft: this.swipingLeft, onSwipedRight: this.swipingRight },
        _react2.default.createElement(
          _CalendarUI.Container,
          null,
          _react2.default.createElement(
            _CalendarUI.Content,
            null,
            calendarView === VIEWS.DAY_VIEW && _react2.default.createElement(_CalendarDayView2.default, {
              handlePrevMonth: this.handlePrevMonth,
              handleNextMonth: this.handleNextMonth,
              handlePrevYear: this.handlePrevYear,
              handleNextYear: this.handleNextYear,
              updateCalendarView: this.updateCalendarView,
              weekOffset: weekOffset,
              locale: locale,
              calendarMonth: calendarMonth,
              onChange: this.onChange,
              minDate: minDate,
              date: date,
              keyValid: keyValid,
              maxDate: maxDate,
              dateFormat: dateFormat,
              markers: markers
            }),
            calendarView === VIEWS.MONTH_VIEW && _react2.default.createElement(_CalendarMonthView2.default, { locale: locale, handleChangeMonth: this.handleChangeMonth }),
            calendarView === VIEWS.YEAR_VIEW && _react2.default.createElement(_CalendarYearView2.default, { handleChangeYear: this.handleChangeYear, date: date })
          )
        )
      );
    }
  }]);

  return Calendar;
}(_react.Component);

Calendar.propTypes = {
  confirm: _propTypes2.default.func.isRequired,
  cancel: _propTypes2.default.func.isRequired,
  weekOffset: _propTypes2.default.number,
  value: _propTypes2.default.string,
  dateFormat: _propTypes2.default.string,
  locale: _propTypes2.default.string.isRequired,
  keyValid: _propTypes2.default.func.isRequired,
  minDate: _propTypes2.default.string,
  maxDate: _propTypes2.default.string,
  markers: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired
};

Calendar.defaultProps = {
  weekOffset: 0,
  value: undefined,
  dateFormat: 'MM/DD/YYYY',
  minDate: undefined,
  maxDate: undefined
};

exports.default = (0, _reactOnclickoutside2.default)(Calendar);