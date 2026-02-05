var input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
var [A, B] = input.split(' ').map(Number);

if (A % B === 0 || B % A === 0) {
  console.log('Sao Multiplos');
} else {
  console.log('Nao sao Multiplos');
}