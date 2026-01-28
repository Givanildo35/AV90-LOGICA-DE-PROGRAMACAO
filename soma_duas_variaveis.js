var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseInt(lines.shift(10));
var B = parseInt(lines.shift(9));
soma = A + B;
console.log(`X = ${soma}`);

