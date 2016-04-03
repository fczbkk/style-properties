import {toKebabCase, toCamelCase} from './change-case';


function objectToString (input = {}) {
  const pairs = [];

  Object.keys(input).forEach((key) => {
    const item = input[key];
    const value = (typeof item === 'object') ? item.output : item.toString();
    pairs.push(toKebabCase(key) + ': ' + value)
  });

  return pairs.join('; ');
}


function getStyleKeys (style = '') {
  const result = [];
  const pairs = style.split(';');
  const key_re = /^\s*([^:\s]+)/;

  pairs.forEach((pair) => {
    if (pair !== '') {
      result.push(pair.match(key_re)[1]);
    }
  });

  return result;
}


export default function (style = '') {
  const result = {};
  const element = document.createElement('div');

  if (typeof style !== 'string') {
    style = objectToString(style);
  }

  element.innerHTML = `<div style="${style}"></div>`;

  getStyleKeys(style).forEach((key) => {
    result[toCamelCase(key)] = element.firstChild.style[key];
  });

  return result;
}