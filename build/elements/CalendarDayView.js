'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _chevronLeft = require('react-icons/lib/md/chevron-left');

var _chevronLeft2 = _interopRequireDefault(_chevronLeft);

var _chevronRight = require('react-icons/lib/md/chevron-right');

var _chevronRight2 = _interopRequireDefault(_chevronRight);

var _CalendarUI = require('./CalendarUI');

var _Calendar = require('./Calendar');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GridItem = function GridItem(_ref) {
  var _onClick = _ref.onClick,
      day = _ref.day,
      date = _ref.date,
      children = _ref.children,
      disabled = _ref.disabled,
      marker = _ref.marker;
  return _react2.default.createElement(
    _CalendarUI.DayGridItem,
    {
      active: day.day.isSame(date),
      onClick: function onClick() {
        return _onClick(day.day);
      },
      nextMonth: day.nextMonth,
      prevMonth: day.prevMonth,
      disabled: disabled,
      marker: marker
    },
    children
  );
};

GridItem.propTypes = {
  onClick: _propTypes2.default.func.isRequired,
  day: _propTypes2.default.object.isRequired, // eslint-disable-line react/forbid-prop-types
  date: _propTypes2.default.object.isRequired, // eslint-disable-line react/forbid-prop-types
  children: _propTypes2.default.string.isRequired,
  disabled: _propTypes2.default.bool.isRequired,
  marker: _propTypes2.default.bool.isRequired
};

var createDateObjects = function createDateObjects(startOfMonth, weekOffset) {
  var diff = startOfMonth.isoWeekday() - weekOffset;
  if (diff < 0) diff += 7;

  var prevMonthDays = [];
  for (var _i = 0; _i < diff; _i += 1) {
    prevMonthDays.push({
      day: startOfMonth.clone().subtract(diff - _i, 'days'),
      prevMonth: true
    });
  }

  var currentMonthDays = [];
  for (var _i2 = 1; _i2 < startOfMonth.daysInMonth() + 1; _i2 += 1) {
    currentMonthDays.push({
      day: (0, _moment2.default)([startOfMonth.year(), startOfMonth.month(), _i2])
    });
  }

  var daysAdded = prevMonthDays.length + currentMonthDays.length - 1;

  var nextMonthDays = [];
  var i = 1;
  while (daysAdded + i < 42) {
    nextMonthDays.push({
      day: currentMonthDays[currentMonthDays.length - 1].day.clone().add(i, 'days'),
      nextMonth: true
    });

    i += 1;
  }

  return [].concat(prevMonthDays, currentMonthDays, nextMonthDays);
};

var DayView = function DayView(_ref2) {
  var weekOffset = _ref2.weekOffset,
      locale = _ref2.locale,
      calendarMonth = _ref2.calendarMonth,
      onChange = _ref2.onChange,
      minDate = _ref2.minDate,
      maxDate = _ref2.maxDate,
      dateFormat = _ref2.dateFormat,
      markers = _ref2.markers,
      date = _ref2.date,
      keyValid = _ref2.keyValid,
      handlePrevMonth = _ref2.handlePrevMonth,
      handleNextMonth = _ref2.handleNextMonth,
      handlePrevYear = _ref2.handlePrevYear,
      handleNextYear = _ref2.handleNextYear,
      updateCalendarView = _ref2.updateCalendarView;
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(
      _CalendarUI.Header,
      null,
      _react2.default.createElement(
        _CalendarUI.MonthSwitch,
        null,
        _react2.default.createElement(_chevronLeft2.default, { onClick: handlePrevMonth }),
        _react2.default.createElement(
          _CalendarUI.MonthLabel,
          { onClick: function onClick() {
              return updateCalendarView(_Calendar.VIEWS.MONTH_VIEW);
            } },
          calendarMonth.locale(locale).format('MMMM')
        ),
        _react2.default.createElement(_chevronRight2.default, { onClick: handleNextMonth })
      ),
      _react2.default.createElement(
        _CalendarUI.YearSwitch,
        null,
        _react2.default.createElement(_chevronLeft2.default, { onClick: handlePrevYear }),
        _react2.default.createElement(
          _CalendarUI.YearLabel,
          { onClick: function onClick() {
              return updateCalendarView(_Calendar.VIEWS.YEAR_VIEW);
            } },
          calendarMonth.locale(locale).format('YYYY')
        ),
        _react2.default.createElement(_chevronRight2.default, { onClick: handleNextYear })
      )
    ),
    _react2.default.createElement(
      _CalendarUI.WeekDays,
      null,
      Array(7).fill().map(function (_, i) {
        return i + weekOffset;
      }).map(function (weekDay) {
        return _react2.default.createElement(
          _CalendarUI.StyledGridItem,
          { key: 'week-day-' + weekDay },
          (0, _moment2.default)().isoWeekday(weekDay).locale(locale).format('dd')
        );
      })
    ),
    _react2.default.createElement(
      _CalendarUI.Days,
      null,
      createDateObjects(calendarMonth, weekOffset).map(function (day) {
        return _react2.default.createElement(
          GridItem,
          {
            key: 'day-' + day.day.format('DD.MM'),
            day: day,
            date: date,
            onClick: onChange,
            disabled: !keyValid(day.day, minDate, maxDate, dateFormat),
            marker: markers.includes(day.day.format(dateFormat))
          },
          day.day.format('D')
        );
      })
    )
  );
};

DayView.propTypes = {
  weekOffset: _propTypes2.default.number.isRequired,
  locale: _propTypes2.default.string.isRequired,
  minDate: _propTypes2.default.string,
  maxDate: _propTypes2.default.string,
  dateFormat: _propTypes2.default.string.isRequired,
  markers: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  keyValid: _propTypes2.default.func.isRequired,
  calendarMonth: _propTypes2.default.object.isRequired, // eslint-disable-line react/forbid-prop-types
  onChange: _propTypes2.default.func.isRequired,
  date: _propTypes2.default.object.isRequired, // eslint-disable-line react/forbid-prop-types
  handlePrevMonth: _propTypes2.default.func.isRequired,
  handleNextMonth: _propTypes2.default.func.isRequired,
  handlePrevYear: _propTypes2.default.func.isRequired,
  handleNextYear: _propTypes2.default.func.isRequired,
  updateCalendarView: _propTypes2.default.func.isRequired
};

DayView.defaultProps = {
  minDate: undefined,
  maxDate: undefined
};

exports.default = DayView;