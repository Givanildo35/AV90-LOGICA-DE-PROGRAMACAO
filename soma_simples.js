var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseInt(lines.shift(30));
var B = parseInt(lines.shift(10));
soma = A + B;
console.log(`SOMA = ${soma}`);

