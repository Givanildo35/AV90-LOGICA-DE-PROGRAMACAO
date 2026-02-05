const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim();
let dias = parseInt(input);

let anos = Math.floor(dias / 365);
let resto = dias % 365;

let meses = Math.floor(resto / 30);
let diasFinal = resto % 30;

console.log(`${anos} ano(s)`);
console.log(`${meses} mes(es)`);
console.log(`${diasFinal} dia(s)`);
