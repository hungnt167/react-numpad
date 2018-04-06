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
  padding: 20px 20px 15px;
  border-radius: 6px;
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
  font-size: 18px;
  color: #1d63dc;
  outline: none;
  border: none;
  width: 45%;
  text-align: ${props => props.terminalAlign};
`;
const Display = styled.div`
  flex-grow: 1;
`;

const Button = styled.button`
  cursor: pointer;
  outline: none;
  background-color: #ededed;
  width: 27%;
  height: 60px;
  line-height: 60px;
  padding: 0;
  border-radius: 10px;
  font-size: 20px;
  border: none;
  &:hover ${this} {
    text-decoration: none;
    background-color: rgba(0, 0, 0, 0.12);
  }
`;

const DisplayWrapper = ({ value, displayRule, dateFormat, cancel, control, terminalAlign }) => (
  <Wrapper>
    <Display>
      {control && <Button onClick={() => control(0)}>-</Button>}
      <Input
        value={displayRule(value, dateFormat)}
        readOnly
        autoFocus
        terminalAlign={terminalAlign}
      />
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
  terminalAlign: PropTypes.oneOf(['left', 'right', 'center']),
};

DisplayWrapper.defaultProps = {
  dateFormat: 'MM/DD/YYYY',
  cancel: false,
  control: false,
  terminalAlign: 'center',
};

export default DisplayWrapper;
