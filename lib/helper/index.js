import _ from 'lodash';

export const PADDING = 11;
export const WIDTH = 272;
export const HEIGHT = 359;
export const MIN_TOP = 67;
export const MAX_BOTTOM = window.innerHeight - HEIGHT;

const updateCoords = {
  startBottomLeft: coords => ({
    top: coords.bottom + window.pageYOffset,
    left: coords.left + window.pageXOffset,
  }),
  startBottomRight: coords => ({
    top: coords.bottom + window.pageYOffset,
    right: window.innerWidth - coords.right + window.pageXOffset,
  }),
  startTopLeft: (coords, height) => ({
    top: coords.top + window.pageYOffset - height,
    left: coords.left + window.pageXOffset,
  }),
  startTopRight: (coords, height) => ({
    top: coords.top + window.pageYOffset - height,
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
  endBottomRight: (coords, height) => ({
    top: coords.bottom + window.pageYOffset - height,
    left: coords.left + window.pageXOffset + coords.width,
  }),
  endBottomLeft: (coords, height) => ({
    top: coords.bottom + window.pageYOffset - height,
    right: window.innerWidth - coords.right + window.pageXOffset + coords.width,
  }),
  centerLeft: coords => ({
    top: coords.bottom + window.pageYOffset - coords.height,
    right: window.innerWidth - coords.right + window.pageXOffset + coords.width,
  }),
  centerRight: (coords, height) => ({
    top: coords.top - coords.height / 2 - height / 2,
    left: coords.left + window.pageXOffset + coords.width + PADDING,
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
  isCenter(type) {
    return type.toLowerCase().indexOf('center') > -1;
  },
  isOverTopDirection(type) {
    return type.indexOf('Top') > -1 && ['startTopLeft', 'startTopRight'].indexOf(type) > -1;
  },
};

function castXValid(coords, position, isLeftDirection) {
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

function castYValid(coords, position, isForce, minY, maxY, props) {
  /** top over top window */
  if (position.top < minY) {
    return Object.assign(position, { top: isForce ? minY : coords.top + coords.height });
  }

  /** top over bottom window */
  const maxYAllow =
    maxY ||
    (isForce
      ? window.innerHeight - props.height
      : window.innerHeight - props.height - coords.height);
  if (position.top > maxYAllow) {
    return Object.assign(position, {
      top: maxYAllow,
    });
  }

  return position;
}

export function toCss(coords, position, minY, maxY, props) {
  const isCenter = updateCoords.isCenter(position);
  const isSameTop = updateCoords.isSameTop(position);
  const positionNormal = updateCoords[position](coords, props.height);
  const positionFinal = castXValid(coords, positionNormal, updateCoords.isLeftDirection(position));
  const isOverX = !_.isEqual(positionFinal, positionNormal);

  if (isOverX) {
    positionFinal.top += isSameTop ? coords.height : 0;
  }

  const data = isSameTop
    ? positionFinal
    : castYValid(coords, positionFinal, isCenter, minY, maxY, props);
  _.forEach(data, (value, key) => {
    data[key] = `${value}px`;
  });
  return data;
}

export default updateCoords;
