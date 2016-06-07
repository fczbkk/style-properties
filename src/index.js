import {toKebabCase} from './change-case';
import parsePropertyValue from './parse-property-value'


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
 * This is madness and no sane person should ever do hacks like this. ShadowDOMPolyfill sucks donkey balls!
 * @param {Object|HTMLElement} element
 * @returns {Object|HTMLElement}
 */
function fixWebcomponentsElement (element) {
  if (typeof window.ShadowDOMPolyfill !== 'undefined') {

    const is_native = document.defaultView.getComputedStyle
      .toString().indexOf('[native code]') !== -1;

    // Can't check if element is instance of HTMLElement, because the polyfill
    // hijacks this. Only reliable way of checking if it is wrapped I found
    // is using this ugly ass property.
    const is_wrapped = typeof element.__impl4cf1e782hg__ !== 'undefined';

    if (is_native && is_wrapped) {
      element = window.ShadowDOMPolyfill.unwrap(element);
    }

    if (!is_native && !is_wrapped) {
      element = window.ShadowDOMPolyfill.wrap(element);
    }
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
export function getStyleProperty (element, property) {
  property = toKebabCase(property);
  element = fixWebcomponentsElement(element);
  const value = document.defaultView
    .getComputedStyle(element, null)
    .getPropertyValue(property);
  return parsePropertyValue(value);
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
export function getStyleProperties (element, properties = []) {
  if (typeof properties === 'string') {
    properties = [properties];
  }

  const result = {};

  properties.forEach((property) => {
    result[property] = getStyleProperty(element, property);
  });

  return result;
}