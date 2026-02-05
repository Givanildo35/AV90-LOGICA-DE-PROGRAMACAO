var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let i = 2;

while (i <= 100) {console.log(i);
i += 2;
}