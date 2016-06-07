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

/**
 * @typedef {Object} StyleProperty
 * @property {string} unit - unit of the property, e.g. px, rgb
 * @property {string|number} value - value of the property
 * @property {string} output - valid string representation of value and unit
 *
 * @example <caption>Simple property.</caption>
 * {
 *   unit: 'px',
 *   value: 100,
 *   output: '100px'
 * }
 *
 * @example <caption>Color property.</caption>
 * {
 *   unit: 'rgb',
 *   value: [255, 255, 255],
 *   output: '#ffffff'
 * }
 */

/**
 * Attempts to fix the element when using Webcomponents with ShadowDOMPolyfill. It returns either original element or wrapped element, depending on whether the polyfill replaced the original `getComputedStyle` method or not.
 * @param {Object|HTMLElement} element
 * @returns {Object|HTMLElement}
 */
function fixWebcomponentsElement(element) {
  if (typeof window.ShadowDOMPolyfill !== 'undefined') {
    var is_native = document.defaultView.getComputedStyle.toString().indexOf('[native code]') !== -1;
    element = is_native ? window.ShadowDOMPolyfill.unwrap(element) : window.ShadowDOMPolyfill.wrap(element);
  }
  return element;
}

/**
 * Returns information about unit and value of given property for given element.
 * @param {HTMLElement} element
 * @param {string} property - Name of the property. You can use either camelCase (e.g. zIndex) or kebab-case (e.g. z-index).
 * @returns {StyleProperty}
 *
 * @example
 * var element_width = getStyleProperty(my_element, 'width');
 * // returns {unit: 'px', value: 100, output: '100px'}
 */
function getStyleProperty(element, property) {
  property = (0, _changeCase.toKebabCase)(property);
  element = fixWebcomponentsElement(element);
  var value = document.defaultView.getComputedStyle(element, null).getPropertyValue(property);
  return (0, _parsePropertyValue2.default)(value);
}

/**
 * Returns information about multiple properties of given element.
 * @param {HTMLElement} element
 * @param {Array|string} properties - List of properties. Single property (string) will be converted to an array.
 * @returns {Object} - Keys of the returned objects are property names, values are objects containing information about given property.
 *
 * @example
 * var element_size = getStyleProperties(my_element, ['width', 'height']);
 * // returns
 * // {
 * //   width: {unit: 'px', value: 100, output: '100px'},
 * //   height: {unit: 'px', value: 100, output: '100px'}
 * // }
 */
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