const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split('\n');

let [peca1, quantidade1, valorUnitario1] = input[0].split(' ');
quantidade1 = Number(quantidade1);
valorUnitario1 = Number(valorUnitario1);

let [peca2, quantidade2, valorUnitario2] = input[1].split(' ');
quantidade2 = Number(quantidade2);
valorUnitario2 = Number(valorUnitario2);

let total = (quantidade1 * valorUnitario1) + (quantidade2 * valorUnitario2);

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);