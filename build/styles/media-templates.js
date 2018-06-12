'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isMobile = exports.media = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    @media (max-width: ', 'em) {\n      ', ';\n    }\n  '], ['\n    @media (max-width: ', 'em) {\n      ', ';\n    }\n  ']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } // these sizes are arbitrary and you can set them to whatever you wish


var sizes = {
  desktop: 4000,
  mobile: 415
};

// iterate through the sizes and create a media template
var media = exports.media = Object.keys(sizes).reduce(function (accumulator, label) {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  var emSize = sizes[label] / 16;
  accumulator[label] = function () {
    return (0, _styledComponents.css)(_templateObject, emSize, _styledComponents.css.apply(undefined, arguments));
  };
  return accumulator;
}, {});

var isMobile = exports.isMobile = function isMobile() {
  var mobile = window.matchMedia('(max-width: ' + sizes.mobile + 'px)');
  // const desktop = window.matchMedia(`(max-width: ${sizes.desktop}px)`);
  return mobile.matches;
};