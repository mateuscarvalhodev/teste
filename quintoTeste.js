const stringInverter = (string) => {
  let invertedString = '';

  for(let i = string.length - 1; i >= 0; i--) {
    invertedString += string[i];
  }
  return invertedString;
}
console.log(stringInverter('arara'));
console.log(stringInverter('reviver'));
console.log(stringInverter('a grama é amarga'));
console.log(stringInverter('luz azul'));