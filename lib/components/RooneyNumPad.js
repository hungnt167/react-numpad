import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Portal } from 'react-portal';
import { injectGlobal, ThemeProvider } from 'styled-components';
import Slide from 'material-ui/transitions/Slide';
import { InputField, Wrapper } from '../elements';
import globalCSS from '../styles/global-css';
import styles from '../styles';

injectGlobal`${globalCSS}`; // eslint-disable-line no-unused-expressions

export const getTransition = (show, position) => {
  let transition = Slide;
  let transitionProps = {
    in: show,
    direction: 'up',
    mountOnEnter: true,
    unmountOnExit: true,
  };
  if (position === 'flex-start') {
    transitionProps.direction = 'down';
  }
  if (position !== 'flex-start' && position !== 'flex-end') {
    transition = 'span';
    transitionProps = {};
  }
  return { transition, transitionProps };
};

export const updateCoords = {
  startBottomLeft: coords => ({
    top: coords.bottom + window.pageYOffset,
    left: coords.left + window.pageXOffset,
  }),
  startBottomRight: coords => ({
    top: coords.bottom + window.pageYOffset,
    right: window.innerWidth - coords.right + window.pageXOffset,
  }),
  startTopLeft: coords => ({
    top: coords.top + window.pageYOffset - 300,
    left: coords.left + window.pageXOffset,
  }),
  startTopRight: coords => ({
    top: coords.top + window.pageYOffset - 300,
    right: window.innerWidth - coords.right + window.pageXOffset,
  }),
  endTopRight: coords => ({
    top: coords.bottom + window.pageYOffset - coords.height,
    left: coords.left + window.pageXOffset + coords.width,
  }),
  endTopLeft: coords => ({
    top: coords.bottom + window.pageYOffset - coords.height,
    right: window.innerWidth - coords.right + window.pageXOffset + coords.width,
  }),
  endBottomRight: coords => ({
    top: coords.bottom + window.pageYOffset - 300,
    left: coords.left + window.pageXOffset + coords.width,
  }),
  endBottomLeft: coords => ({
    top: coords.bottom + window.pageYOffset - 300,
    right: window.innerWidth - coords.right + window.pageXOffset + coords.width,
  }),
  isSameTop(type) {
    return ['endTopRight', 'endTopLeft'].indexOf(type) > -1;
  },
  isSameBottom(type) {
    return ['startBottomLeft', 'startBottomRight'].indexOf(type) > -1;
  },
  isLeftDirection(type) {
    return type.indexOf('Left') > -1;
  },
  isOverTopDirection(type) {
    return type.indexOf('Top') > -1 && ['startTopLeft', 'startTopRight'].indexOf(type) > -1;
  },
};

export default ({
  element,
  validation,
  formatInputValue,
  displayRule,
  inputButtonContent,
  keyValid,
}) => {
  class RooneyNumPad extends Component {
    constructor(props) {
      super(props);
      this.state = {
        show: false,
        value: formatInputValue(props.value),
      };
      this.toggleKeyPad = this.toggleKeyPad.bind(this);
      this.confirm = this.confirm.bind(this);
      this.update = this.update.bind(this);
    }

    componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        this.setState({
          value: formatInputValue(nextProps.value),
        });
      }
    }

    toCss(coords, position) {
      const isSameTop = updateCoords.isSameTop(position);
      const positionNormal = updateCoords[position](coords);
      const positionFinal = this.castXValid(
        coords,
        updateCoords[position](coords),
        updateCoords.isLeftDirection(position)
      );
      const isOverX = !_.isEqual(positionFinal, positionNormal);

      if (isOverX) {
        positionFinal.top += isSameTop ? coords.height : 0;
      }

      const data = isSameTop ? positionFinal : this.castYValid(coords, positionFinal);
      _.forEach(data, (value, key) => {
        data[key] = `${value}px`;
      });
      return data;
    }

    castXValid(coords, position, isLeftDirection) {
      const widthNumPad = 264;
      const left = position.left || false;
      const right = position.right || false;

      if (isLeftDirection) {
        /** left over left window */
        if (left && left < window.pageXOffset) {
          return Object.assign(position, { left: window.pageXOffset });
        }

        /** right over left window */
        if (right && right > window.innerWidth - widthNumPad) {
          return Object.assign(position, { right: window.innerWidth - widthNumPad });
        }

        return position;
      }
      /** left over right window */
      if (left && left > window.innerWidth - widthNumPad) {
        return Object.assign(position, { left: window.innerWidth - widthNumPad });
      }

      /** right over right window */
      if (right && right < widthNumPad) {
        return Object.assign(position, { right: widthNumPad });
      }
      /** right over right window */
      if (right && right > window.innerWidth - widthNumPad) {
        return Object.assign(position, { right: window.innerWidth - widthNumPad });
      }

      return position;
    }

    castYValid(coords, position) {
      /** top over top window */
      if (position.top < 0) {
        return Object.assign(position, { top: coords.top + coords.height });
      }

      /** top over bottom window */
      if (position.top > window.innerHeight - 300) {
        return Object.assign(position, { top: window.innerHeight - 300 - coords.height });
      }

      return position;
    }

    toggleKeyPad(coords = {}) {
      const { position } = this.props;
      const inputCoords =
        !this.state.show && updateCoords[position] ? this.toCss(coords, position) : undefined;
      this.setState(prevState => ({ show: !prevState.show, inputCoords }));
    }

    update(value) {
      const { dateFormat, onChange } = this.props;
      onChange(displayRule(value, dateFormat));
    }

    confirm(value) {
      let updateValue = {};
      if (this.state.show && validation(value)) {
        updateValue = { value };
        this.update(value);
      }
      this.setState(prevState => Object.assign({}, { show: !prevState.show }, updateValue));
    }

    render() {
      const { show, value, inputCoords } = this.state;

      const {
        placeholder,
        label,
        theme,
        dateFormat,
        locale,
        weekOffset,
        markers,
        dates,
        minDate,
        maxDate,
        position,
        sync,
        isDecimal,
      } = this.props;
      const customTheme = typeof theme === 'object' ? theme : styles(theme);
      customTheme.position = position;
      customTheme.coords = inputCoords;

      const display = position !== 'flex-start' && position !== 'flex-end' ? show : true;
      const { transition, transitionProps } = getTransition(show, position);

      return (
        <Fragment>
          <ThemeProvider theme={customTheme}>
            <InputField
              placeholder={placeholder}
              showKeyPad={this.toggleKeyPad}
              inputValue={value}
              dateFormat={dateFormat}
              displayRule={displayRule}
              label={label}
              disabled={this.state.show}
              buttonContent={inputButtonContent}
            >
              {this.props.children}
            </InputField>
          </ThemeProvider>
          <Portal>
            {display &&
              React.createElement(
                transition,
                transitionProps,
                <ThemeProvider theme={customTheme}>
                  <Wrapper show>
                    {React.createElement(
                      element,
                      {
                        cancel: this.toggleKeyPad,
                        confirm: this.confirm,
                        update: this.update,
                        eventTypes: ['click', 'touchend'],
                        displayRule,
                        validation,
                        keyValid,
                        label,
                        locale,
                        markers,
                        dates,
                        weekOffset,
                        dateFormat,
                        minDate,
                        maxDate,
                        value,
                        sync,
                        isDecimal,
                      },
                      null
                    )}
                  </Wrapper>
                </ThemeProvider>
              )}
          </Portal>
        </Fragment>
      );
    }
  }

  RooneyNumPad.defaultProps = {
    children: undefined,
    placeholder: undefined,
    position: 'flex-end',
    label: undefined,
    theme: undefined,
    dateFormat: 'MM/DD/YYYY',
    weekOffset: 0,
    locale: 'en',
    value: '',
    minDate: undefined,
    maxDate: undefined,
    sync: false,
    markers: [],
    dates: {},
    isDecimal: false,
  };

  RooneyNumPad.propTypes = {
    onChange: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.element)]),
    placeholder: PropTypes.string,
    position: PropTypes.string,
    label: PropTypes.string,
    locale: PropTypes.string,
    theme: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    dateFormat: PropTypes.string,
    weekOffset: PropTypes.number,
    markers: PropTypes.arrayOf(PropTypes.string),
    dates: PropTypes.objectOf(PropTypes.array),
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    minDate: PropTypes.string,
    maxDate: PropTypes.string,
    sync: PropTypes.bool,
    isDecimal: PropTypes.bool,
  };

  return RooneyNumPad;
};
