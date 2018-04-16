import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';
import MdBackspace from 'react-icons/lib/md/backspace';

import Button from './KeypadButton';
import Display from './PopoverDisplay';
import { media } from '../styles/media-templates';
import { HEIGHT, PADDING, WIDTH } from '../helper';

const Backspace = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;
  font-size: 1.6em;
  padding: 0px 2px 0px 0px;
  color: ${props => props.theme.header.primaryColor};
  width: 33%;
  &:hover ${this} {
    text-decoration: none;
    background-color: rgba(0, 0, 0, 0.12);
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.width}px;
  ${media.mobile`width: 100%;`} height: ${props => props.height}px;
  background: ${props => props.theme.body.backgroundColor};
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 45px, rgba(0, 0, 0, 0.22) 0px 10px 18px;
  
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
`;

const Keys = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  button {
    border-bottom: 1px solid #ddd;
    border-right: 1px solid #ddd;
  }
  button:nth-child(3n) {
    border-right: none;
  }
  button:nth-child(-n + 3) {
    border-top: 1px solid #ddd;
  }
`;

const Arrow = styled.div`
  border-width: ${PADDING}px;
  position: fixed;
  z-index: 10000;
  display: block;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
  border-right-color: #fff;
  border-left-width: 0;
  left: ${props => (props ? `${props.coords.left + props.coords.width}px` : '50%')};
  margin-top: -${PADDING}px;
  top: ${props => (props ? `${props.coords.top + props.coords.height / 2}px` : '50%')};
`;

class PopoverKeyPad extends Component {
  constructor(props) {
    super(props);
    this.state = { input: props.value };
    this.isDecimal = props.isDecimal || false;
    this.step = props.qtyIncrement ? props.qtyIncrement : 1;
    this.allowKey = this.isDecimal
      ? [7, 8, 9, 4, 5, 6, 1, 2, 3, this.props.decimalSeparator, 0]
      : [7, 8, 9, 4, 5, 6, 1, 2, 3, '', 0];
    this.handleClick = this.handleClick.bind(this);
    this.keyDown = this.keyDown.bind(this);
    this.cancelLastInsert = this.cancelLastInsert.bind(this);
    this.numericKeys = [...Array(10).keys()];
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyDown);
  }

  componentWillUpdate(nextProps, nextState) {
    const { input } = this.state;
    const { sync, validation, update } = this.props;
    if (sync && nextState.input !== input && validation(nextState.input)) {
      update(nextState.input);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyDown);
  }
  getValidValue(text, isIncrement) {
    const { min, max } = this.props;
    const prevVal = this.getValueText(text);
    let temp = prevVal;
    if (isIncrement !== undefined) {
      temp = prevVal + (isIncrement ? this.step : -this.step);
    }
    let newVal = Math.max(temp, min);

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
    const newValPerStep = newVal % this.step;
    if (this.step !== 1 && newValPerStep !== 0) {
      newVal =
        newVal >= prevVal
          ? (_.toInteger(newVal / this.step) + 1) * this.step
          : (_.toInteger(newVal / this.step) - 1) * this.step;
    }

    if (!newVal) {
      newVal = min;
    }

    return newVal;
  }

  getDisplayText(value) {
    const { decimalSeparator } = this.props;
    return `${value}`.replace('.', decimalSeparator);
  }

  getValueText(text) {
    const { decimalSeparator } = this.props;
    return text.replace(decimalSeparator, '.') * 1;
  }
  isOverMin(current) {
    const { decimalSeparator, min } = this.props;
    return current.replace(decimalSeparator, '.') * 1 < min;
  }

  isOverMax(current) {
    const { decimalSeparator, max } = this.props;
    return current.replace(decimalSeparator, '.') * 1 > max;
  }
  keyDown(event) {
    event.preventDefault();
    const { key } = event;
    const { input } = this.state;
    const { confirm, cancel, validation, decimalSeparator } = this.props;
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

  cancelLastInsert() {
    this.setState(prevState => ({ input: prevState.input.slice(0, -1) }));
  }

  handleClickOutside(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    const { validation, confirm, cancel } = this.props;
    const { input } = this.state;
    if (validation(input)) {
      confirm(input);
    } else {
      cancel();
    }
  }
  handleClick(key) {
    if (this.props.keyValid(this.state.input, key, this.isDecimal, this.props.decimalSeparator)) {
      if (key === '-') {
        return this.setState(prevState => ({
          input:
            prevState.input.charAt(0) === '-' ? prevState.input.substr(1) : `-${prevState.input}`,
        }));
      }

      if (key === this.props.decimalSeparator) {
        return this.setState(prevState => ({ input: prevState.input + key }));
      }

      return this.setState(prevState => ({
        input: this.getDisplayText(this.getValidValue(prevState.input + key)),
      }));
    }

    return false;
  }

  control(isIncrement) {
    this.setState(prevState => ({
      input: this.getDisplayText(this.getValidValue(prevState.input, isIncrement)),
    }));
  }

  render() {
    const {
      displayRule,
      theme,
      keyValid,
      decimalSeparator,
      terminalAlign,
      width,
      height,
    } = this.props;

    return (
      <Content width={width} height={height}>
        <Display
          control={this.control.bind(this)}
          value={this.state.input}
          displayRule={displayRule}
          terminalAlign={terminalAlign}
        />
        <Keys>
          {this.allowKey.map(key => (
            <Button
              key={`button-${key}`}
              theme={theme}
              click={clickedKey => this.handleClick(clickedKey)}
              value={key}
              disabled={!keyValid(this.state.input, key, this.isDecimal, decimalSeparator)}
            />
          ))}
          <Backspace onClick={this.cancelLastInsert}>
            <MdBackspace />
          </Backspace>
        </Keys>
        {this.props.arrow && <Arrow coords={this.props.coords} />}
      </Content>
    );
  }
}

PopoverKeyPad.displayName = 'PopoverKeyPad';

PopoverKeyPad.propTypes = {
  theme: PropTypes.string,
  confirm: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
  displayRule: PropTypes.func.isRequired,
  validation: PropTypes.func.isRequired,
  keyValid: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  max: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  min: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  sync: PropTypes.bool.isRequired,
  decimalSeparator: PropTypes.string,
  isDecimal: PropTypes.bool,
  qtyIncrement: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  coords: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  arrow: PropTypes.oneOf(['left', 'right', false]),
  terminalAlign: PropTypes.oneOf(['left', 'right', 'center']),
  width: PropTypes.number,
  height: PropTypes.number,
  onChangeOverMax: PropTypes.func,
  onChangeOverMin: PropTypes.func,
};

PopoverKeyPad.defaultProps = {
  theme: undefined,
  value: '',
  max: false,
  min: 0,
  decimalSeparator: '.',
  isDecimal: false,
  qtyIncrement: false,
  coords: false,
  arrow: false,
  terminalAlign: 'center',
  width: WIDTH,
  height: HEIGHT,
  onChangeOverMax: () => {},
  onChangeOverMin: () => {},
};

export default onClickOutside(PopoverKeyPad);
