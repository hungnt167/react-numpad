'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MAX_BOTTOM = exports.MIN_TOP = exports.HEIGHT = exports.WIDTH = exports.PADDING = undefined;
exports.toCss = toCss;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PADDING = exports.PADDING = 11;
var WIDTH = exports.WIDTH = 272;
var HEIGHT = exports.HEIGHT = 359;
var MIN_TOP = exports.MIN_TOP = 67;
var MAX_BOTTOM = exports.MAX_BOTTOM = window.innerHeight - HEIGHT;

var updateCoords = {
  startBottomLeft: function startBottomLeft(coords) {
    return {
      top: coords.bottom + window.pageYOffset,
      left: coords.left + window.pageXOffset
    };
  },
  startBottomRight: function startBottomRight(coords) {
    return {
      top: coords.bottom + window.pageYOffset,
      right: window.innerWidth - coords.right + window.pageXOffset
    };
  },
  startTopLeft: function startTopLeft(coords, height) {
    return {
      top: coords.top + window.pageYOffset - height,
      left: coords.left + window.pageXOffset
    };
  },
  startTopRight: function startTopRight(coords, height) {
    return {
      top: coords.top + window.pageYOffset - height,
      right: window.innerWidth - coords.right + window.pageXOffset
    };
  },
  endTopRight: function endTopRight(coords) {
    return {
      top: coords.bottom + window.pageYOffset - coords.height,
      left: coords.left + window.pageXOffset + coords.width
    };
  },
  endTopLeft: function endTopLeft(coords) {
    return {
      top: coords.bottom + window.pageYOffset - coords.height,
      right: window.innerWidth - coords.right + window.pageXOffset + coords.width
    };
  },
  endBottomRight: function endBottomRight(coords, height) {
    return {
      top: coords.bottom + window.pageYOffset - height,
      left: coords.left + window.pageXOffset + coords.width
    };
  },
  endBottomLeft: function endBottomLeft(coords, height) {
    return {
      top: coords.bottom + window.pageYOffset - height,
      right: window.innerWidth - coords.right + window.pageXOffset + coords.width
    };
  },
  centerLeft: function centerLeft(coords) {
    return {
      top: coords.bottom + window.pageYOffset - coords.height,
      right: window.innerWidth - coords.right + window.pageXOffset + coords.width
    };
  },
  centerRight: function centerRight(coords, height) {
    return {
      top: coords.top - coords.height / 2 - height / 2,
      left: coords.left + window.pageXOffset + coords.width + PADDING
    };
  },
  isSameTop: function isSameTop(type) {
    return ['endTopRight', 'endTopLeft'].indexOf(type) > -1;
  },
  isSameBottom: function isSameBottom(type) {
    return ['startBottomLeft', 'startBottomRight'].indexOf(type) > -1;
  },
  isLeftDirection: function isLeftDirection(type) {
    return type.indexOf('Left') > -1;
  },
  isCenter: function isCenter(type) {
    return type.toLowerCase().indexOf('center') > -1;
  },
  isOverTopDirection: function isOverTopDirection(type) {
    return type.indexOf('Top') > -1 && ['startTopLeft', 'startTopRight'].indexOf(type) > -1;
  }
};

function castXValid(coords, position, isLeftDirection) {
  var widthNumPad = 264;
  var left = position.left || false;
  var right = position.right || false;

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

function castYValid(coords, position, isForce, minY, maxY, props) {
  /** top over top window */
  if (position.top < minY) {
    return Object.assign(position, { top: isForce ? minY : coords.top + coords.height });
  }

  /** top over bottom window */
  var maxYAllow = maxY || (isForce ? window.innerHeight - props.height : window.innerHeight - props.height - coords.height);
  if (position.top > maxYAllow) {
    return Object.assign(position, {
      top: maxYAllow
    });
  }

  return position;
}

function toCss(coords, position, minY, maxY, props) {
  var isCenter = updateCoords.isCenter(position);
  var isSameTop = updateCoords.isSameTop(position);
  var positionNormal = updateCoords[position](coords, props.height);
  var positionFinal = castXValid(coords, positionNormal, updateCoords.isLeftDirection(position));
  var isOverX = !_lodash2.default.isEqual(positionFinal, positionNormal);

  if (isOverX) {
    positionFinal.top += isSameTop ? coords.height : 0;
  }

  var data = isSameTop ? positionFinal : castYValid(coords, positionFinal, isCenter, minY, maxY, props);
  _lodash2.default.forEach(data, function (value, key) {
    data[key] = value + 'px';
  });
  return data;
}

exports.default = updateCoords;