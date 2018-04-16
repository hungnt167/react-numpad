import React from 'react';
import _ from 'lodash';
import IconEdit from 'react-icons/lib/md/edit';
import PopoverNumPad from './PopoverNumPad';
import { PopoverKeyPad } from '../elements';

const PositiveValidation = {
  float: () => true,
  negative: (value, isDecimalMode = false) => {
    if (isDecimalMode) {
      if (!_.toNumber(value)) {
        return true;
      }
      return parseFloat(value) > 0;
    }
    return parseInt(value, 10) > 0;
  },
};

const IntegerValidation = {
  float: value => parseFloat(value) % 1 === 0,
  negative: () => true,
};

const PositiveIntegerValidation = {
  float: value => parseFloat(value) % 1 === 0,
  negative: value => parseInt(value, 10) > 0,
};

const defaultProps = Validation => ({
  element: PopoverKeyPad,
  validation: value => value.length > 0,
  formatInputValue: value => value.toString().replace(/\D+/g, ''),
  keyValid: (value = '', key, isDecimalMode = true, decimalSeparator) => {
    let next;

    if (key === '') {
      return false;
    }

    if (key === decimalSeparator && !isDecimalMode) {
      return false;
    }

    if (key === '-') {
      next = value.charAt(0) === '-' ? value.substr(1) : key + value;
    } else {
      next = key === decimalSeparator ? value + key + 1 : value + key;
    }

    next = next.replace(decimalSeparator, '.');
    return (
      // eslint-disable-next-line no-restricted-globals
      !isNaN(next) && Validation.float(next) && Validation.negative(next, isDecimalMode)
    );
  },
  displayRule: (value, decimalSeparator) => value.replace(decimalSeparator, '.'),
  inputButtonContent: <IconEdit />,
});

const Popover = PopoverNumPad(defaultProps(PositiveValidation));
const PopoverPositive = PopoverNumPad(defaultProps(PositiveValidation));
const PopoverInteger = PopoverNumPad(defaultProps(IntegerValidation));
const PopoverPositiveInteger = PopoverNumPad(defaultProps(PositiveIntegerValidation));

export { Popover, PopoverPositive, PopoverInteger, PopoverPositiveInteger };
