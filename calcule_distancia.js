var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var X = parseInt(lines.shift(30));// para rodar no visual devo substituir o lines.shift por o comando prompt
console.log(`${2 * X} minutos`);
