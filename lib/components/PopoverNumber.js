import React from 'react';
import IconEdit from 'react-icons/lib/md/edit';
import PopoverNumPad from './PopoverNumPad';
import { PopoverKeyPad } from '../elements';

const PositiveValidation = {
  float: () => true,
  negative: value => parseInt(value, 10) > 0,
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
  keyValid: (value = '', key, isDecimalMode = true) => {
    let next;
    if ((key === '.' || key === ',') && !isDecimalMode) {
      return false;
    }

    if (key === '-') {
      next = value.charAt(0) === '-' ? value.substr(1) : key + value;
    } else {
      next = key === '.' ? value + key + 1 : value + key;
    }
    // eslint-disable-next-line no-restricted-globals
    return !isNaN(next) && Validation.float(next) && Validation.negative(next);
  },
  displayRule: value => value,
  inputButtonContent: <IconEdit />,
});

const Popover = PopoverNumPad(defaultProps(PositiveValidation));
const PopoverPositive = PopoverNumPad(defaultProps(PositiveValidation));
const PopoverInteger = PopoverNumPad(defaultProps(IntegerValidation));
const PopoverPositiveInteger = PopoverNumPad(defaultProps(PositiveIntegerValidation));

export { Popover, PopoverPositive, PopoverInteger, PopoverPositiveInteger };
