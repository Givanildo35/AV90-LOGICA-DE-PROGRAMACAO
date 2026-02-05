var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let tempo = Number(lines.shift());
let velocidade = Number(lines.shift());

let distancia = tempo * velocidade
let litros = distancia / 12;

console.log(litros.toFixed(3));