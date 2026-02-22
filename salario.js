const fs = require('fs');

let entrada = fs.readFileSync(0, 'utf8').trim().split('\n');

let numero = Number(entrada[0]);
let horas = Number(entrada[1]);
let valorHora = Number(entrada[2]);

let salario = horas * valorHora;

console.log("NUMBER = " + numero);
console.log("SALARY = U$ " + salario.toFixed(2));