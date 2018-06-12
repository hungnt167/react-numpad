'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _chevronLeft = require('react-icons/lib/md/chevron-left');

var _chevronLeft2 = _interopRequireDefault(_chevronLeft);

var _chevronRight = require('react-icons/lib/md/chevron-right');

var _chevronRight2 = _interopRequireDefault(_chevronRight);

var _CalendarUI = require('./CalendarUI');

var _ui = require('./ui');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var YearView = function (_Component) {
  _inherits(YearView, _Component);

  function YearView(props) {
    _classCallCheck(this, YearView);

    var _this = _possibleConstructorReturn(this, (YearView.__proto__ || Object.getPrototypeOf(YearView)).call(this, props));

    _this.state = { year: props.date.year() };
    _this.prev = _this.prev.bind(_this);
    _this.next = _this.next.bind(_this);
    return _this;
  }

  _createClass(YearView, [{
    key: 'prev',
    value: function prev() {
      this.setState(function (oldState) {
        return { year: oldState.year - 12 };
      });
    }
  }, {
    key: 'next',
    value: function next() {
      this.setState(function (oldState) {
        return { year: oldState.year + 12 };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var handleChangeYear = this.props.handleChangeYear;
      var year = this.state.year;

      return _react2.default.createElement(
        _react.Fragment,
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
                justifyContent: 'space-between',
                width: '100%'
              }
            },
            _react2.default.createElement(
              _ui.NButton,
              { onClick: this.prev },
              _react2.default.createElement(_chevronLeft2.default, null)
            ),
            _react2.default.createElement(
              _ui.NButton,
              { onClick: this.next },
              _react2.default.createElement(_chevronRight2.default, null)
            )
          )
        ),
        _react2.default.createElement(
          _CalendarUI.TwelveGrid,
          null,
          Array(12).fill().map(function (_, i) {
            return _react2.default.createElement(
              _CalendarUI.TwelveGridItem,
              {
                onClick: function onClick() {
                  return handleChangeYear(year - 5 + i);
                },
                key: 'month-' + (year - 5 + i)
              },
              year - 5 + i
            );
          })
        )
      );
    }
  }]);

  return YearView;
}(_react.Component);

YearView.propTypes = {
  handleChangeYear: _propTypes2.default.func.isRequired,
  date: _propTypes2.default.object.isRequired // eslint-disable-line react/forbid-prop-types
};

exports.default = YearView;