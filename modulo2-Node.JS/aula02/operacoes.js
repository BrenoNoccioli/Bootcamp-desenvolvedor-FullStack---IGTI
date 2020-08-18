const nome = 'Teste de exportação';

function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

export default { soma, subtracao, nome }; //exportação convertida
//module.exports = { soma, subtracao, nome }; // Commom module - exportação default - exporta um objeto
