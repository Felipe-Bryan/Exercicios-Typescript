// 3. Uma loja de eletrodomésticos estabeleceu as seguintes modalidades
// de pagamento para a venda de suas mercadorias:

// Escreva um algoritmo que armazene o preço de tabela e o número de
// vezes em que o pagamento será feito. Calcule o valor de cada parcela e o
// preço total da compra e imprima no console.

const aVista: number = 0.025;
const taxa1: number = 0.06;
const taxa2: number = 0.13;
let valor: number = Number(prompt('Informe o valor do produto'));
let parcelas: number = Number(prompt('Informe o número de parcelas (máximo de 15)'));
let valorCompra: number;
let valorParcela: number;

if (parcelas == 1) {
  valorCompra = valor - valor * aVista;
  console.log('A compra será a vista e terá um desconto de 2.5%');
  console.log('O valor a pagar será de: R$ ' + valorCompra.toFixed(2));
} else if (parcelas >= 2 && parcelas <= 5) {
  valorParcela = valor / parcelas;
  console.log('A compra será parcelada em ' + parcelas + ' vezes e não terá desconto nem juros');
  console.log('O valor da compra será de R$: ' + valor.toFixed(2) + ' .');
  console.log('O pagamento será em ' + parcelas + ' parcelas de R$: ' + valorParcela.toFixed(2) + ' .');
} else if (parcelas >= 6 && parcelas <= 10) {
  valorCompra = valor + valor * taxa1;
  valorParcela = valorCompra / parcelas;
  console.log('A compra será parcelada em ' + parcelas + ' vezes e terá juros de 6% sobre o valor');
  console.log('O valor da compra será de R$: ' + valorCompra.toFixed(2) + ' .');
  console.log('O pagamento será em ' + parcelas + ' parcelas de R$: ' + valorParcela.toFixed(2) + ' .');
} else if (parcelas >= 11 && parcelas <= 15) {
  valorCompra = valor + valor * taxa2;
  valorParcela = valorCompra / parcelas;
  console.log('A compra será parcelada em ' + parcelas + ' vezes e terá juros de 13% sobre o valor');
  console.log('O valor da compra será de R$: ' + valorCompra.toFixed(2) + ' .');
  console.log('O pagamento será em ' + parcelas + ' parcelas de R$: ' + valorParcela.toFixed(2) + ' .');
}
