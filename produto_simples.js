var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseInt(lines.shift(3)); //lines.shift substitui prompt no site (judge.beecrowd)
var B = parseInt(lines.shift(9));
PROD = A * B;
console.log(`PROD = ${PROD}`);


