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

var _CalendarUI = require('./CalendarUI');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/no-array-index-key */
var MonthView = function MonthView(_ref) {
  var locale = _ref.locale,
      handleChangeMonth = _ref.handleChangeMonth;
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(_CalendarUI.Header, null),
    _react2.default.createElement(
      _CalendarUI.TwelveGrid,
      null,
      Array(12).fill().map(function (_, i) {
        return _react2.default.createElement(
          _CalendarUI.TwelveGridItem,
          { onClick: function onClick() {
              return handleChangeMonth(i);
            }, key: 'month-' + i },
          (0, _moment2.default)({ month: i }).locale(locale).format('MMMM')
        );
      })
    )
  );
};

MonthView.propTypes = {
  handleChangeMonth: _propTypes2.default.func.isRequired,
  locale: _propTypes2.default.string.isRequired // eslint-disable-line react/forbid-prop-types
};

exports.default = MonthView;