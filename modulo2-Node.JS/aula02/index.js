import op from './operacoes.js'; //convertido para ES
//const op = require('./operacoes.js').default; //Common module - importa
import multiplicacao from './operacoes2.js';
import { divisao, resto } from './operacoesNomeados.js'; //importando um export nomeado

console.log(op.soma(2, 3));
console.log(op.subtracao(5, 3));
console.log(op.nome);
console.log(multiplicacao(3, 4));
console.log(divisao(10, 2));
console.log(resto(7, 2));
