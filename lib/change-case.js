'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toCamelCase = toCamelCase;
exports.toKebabCase = toKebabCase;
var delimiters = [' ', '-', '_'];

function toCamelCase() {
  var input = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

  var characters = input.split('');
  var result = [];

  var character = void 0;
  while (character = characters.shift()) {
    if (delimiters.indexOf(character) !== -1) {
      if (character = characters.shift()) {
        character = character.toUpperCase();
      }
    }
    result.push(character);
  }

  return result.join('');
}

function toKebabCase() {
  var input = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

  var characters = input.split('');
  var result = [];

  characters.forEach(function (character) {
    var lowercase_character = character.toLowerCase();
    if (character !== lowercase_character) {
      result.push('-', lowercase_character);
    } else if (delimiters.indexOf(character) !== -1) {
      result.push('-');
    } else {
      result.push(character);
    }
  });

  return result.join('');
}