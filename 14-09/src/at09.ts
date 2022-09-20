// 9. Reescreva o exercício 3, utilizando apenas o SWITCH.

const aVistaB: number = 0.025;
const taxa1B: number = 0.06;
const taxa2B: number = 0.13;
let valorB: number = Number(prompt('Informe o valor do produto'));
let parcelasB: number = Number(prompt('Informe o número de parcelas (máximo de 15)'));
let valorCompraB: number;
let valorParcelaB: number;

switch (parcelasB) {
  case 1:
    valorCompraB = valorB - valorB * aVistaB;
    console.log('A compra será a vista e terá um desconto de 2.5%');
    console.log('O valor a pagar será de: R$ ' + valorCompraB.toFixed(2));
    break;
  case 2:
  case 3:
  case 4:
  case 5:
    valorParcelaB = valorB / parcelasB;
    console.log('A compra será parcelada em ' + parcelasB + ' vezes e não terá desconto nem juros');
    console.log('O valor da compra será de R$: ' + valorB.toFixed(2) + ' .');
    console.log('O pagamento será em ' + parcelasB + ' parcelas de R$: ' + valorParcelaB.toFixed(2) + ' .');
    break;
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
    valorCompraB = valorB + valorB * taxa1B;
    valorParcelaB = valorCompraB / parcelasB;
    console.log('A compra será parcelada em ' + parcelasB + ' vezes e terá juros de 6% sobre o valor');
    console.log('O valor da compra será de R$: ' + valorCompraB.toFixed(2) + ' .');
    console.log('O pagamento será em ' + parcelasB + ' parcelas de R$: ' + valorParcelaB.toFixed(2) + ' .');
    break;
  case 11:
  case 12:
  case 13:
  case 14:
  case 15:
    valorCompraB = valorB + valorB * taxa2B;
    valorParcelaB = valorCompraB / parcelasB;
    console.log('A compra será parcelada em ' + parcelasB + ' vezes e terá juros de 13% sobre o valor');
    console.log('O valor da compra será de R$: ' + valorCompraB.toFixed(2) + ' .');
    console.log('O pagamento será em ' + parcelasB + ' parcelas de R$: ' + valorParcelaB.toFixed(2) + ' .');
    break;
  default:
    console.log('Número de parcelas inválido');
    break;
}
