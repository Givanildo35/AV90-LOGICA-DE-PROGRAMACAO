var input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
var n = Number(input);

let meses = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'
];

console.log(meses[n - 1]);