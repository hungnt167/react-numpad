import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MdBackspace from 'react-icons/lib/md/backspace';

const Wrapper = styled.div`
  display: flex;
  padding: 0;
  align-items: center;
  border: none;
  background: white;
`;

const Backspace = styled.button`
  background: none;
  cursor: default;
  border: none;
  outline: none;
  font-size: 1.6em;
  padding: 0px 2px 0px 0px;
  color: ${props => props.theme.header.primaryColor};
`;

const Input = styled.input`
  &:read-only {
    cursor: not-allowed;
  }
  border-radius: 0px;
  cursor: default;
  background: transparent;
  font-size: 1.3em;
  outline: none;
  border: none;
  width: 33%;
`;
const Display = styled.div`
  flex-grow: 1;
`;

const Button = styled.button`
  border-radius: 0px;
  cursor: pointer;
  background: transparent;
  font-size: 1.3em;
  outline: none;
  width: 33%;
  min-height: 64px;
  border: none;
  &:hover ${this} {
    text-decoration: none;
    background-color: rgba(0, 0, 0, 0.12);
  }
  ${props => (props.isIncrement ? 'border-left' : 'border-right')}: 1px solid #ddd;
`;

const DisplayWrapper = ({ value, displayRule, dateFormat, cancel, control }) => (
  <Wrapper>
    <Display>
      {control && <Button onClick={() => control(0)}>-</Button>}
      <Input value={displayRule(value, dateFormat)} readOnly autoFocus />
      {control && (
        <Button isIncrement onClick={() => control(1)}>
          +
        </Button>
      )}
    </Display>
    {cancel && (
      <Backspace onClick={cancel}>
        <MdBackspace />
      </Backspace>
    )}
  </Wrapper>
);

DisplayWrapper.propTypes = {
  value: PropTypes.string.isRequired,
  displayRule: PropTypes.func.isRequired,
  dateFormat: PropTypes.string,
  cancel: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  control: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
};

DisplayWrapper.defaultProps = {
  dateFormat: 'MM/DD/YYYY',
  cancel: false,
  control: false,
};

export default DisplayWrapper;
