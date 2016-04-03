'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStyleProperty = getStyleProperty;
exports.getStyleProperties = getStyleProperties;

var _changeCase = require('./change-case');

var _parsePropertyValue = require('./parse-property-value');

var _parsePropertyValue2 = _interopRequireDefault(_parsePropertyValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyleProperty(element, property) {
  property = (0, _changeCase.toKebabCase)(property);
  var value = document.defaultView.getComputedStyle(element, null).getPropertyValue(property);
  return (0, _parsePropertyValue2.default)(value);
}

function getStyleProperties(element) {
  var properties = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

  if (typeof properties === 'string') {
    properties = [properties];
  }

  var result = {};

  properties.forEach(function (property) {
    result[property] = getStyleProperty(element, property);
  });

  return result;
}