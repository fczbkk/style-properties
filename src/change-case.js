const delimiters = [' ', '-', '_'];


export function toCamelCase (input = '') {
  const characters = input.split('');
  const result = [];
  
  let character;
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


export function toKebabCase (input = '') {
  const characters = input.split('');
  const result = [];

  characters.forEach((character) => {
    const lowercase_character = character.toLowerCase();
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