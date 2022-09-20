// ------------------------------------------------------------------------
// 6. Dado a seguinte lista de números:
// 17, 21, 16, 14, 9, 22, 12, 43, 99, 44, 32

let listaNum: number[] = [17, 21, 16, 14, 9, 22, 12, 43, 99, 44, 32];
console.log(listaNum);

// ------------------------------------------------------------------------
// a) Adicione +1 em cada valor da lista;
let listaNumMais: number[] = [];
listaNum.forEach((element): void => {
  let newElement: number = element + 1;
  listaNumMais.push(newElement);
});
console.log(listaNumMais);

// ------------------------------------------------------------------------
// b) Crie um novo array contendo apenas os valores ímpares;
let listaNumImpares: number[] = listaNum.filter((value): boolean => {
  return value % 2 != 0;
});
console.log(listaNumImpares);

// ------------------------------------------------------------------------
// c) Crie um novo array alterando todos os valores ímpares para o
// próximo valor par;
let novaListaNumPares: number[] = [];
listaNumImpares.forEach((element): void => {
  let newElement = element + 1;
  novaListaNumPares.push(newElement);
});
console.log(novaListaNumPares);

// ------------------------------------------------------------------------
// d) Crie um novo array com os valores menores do que 20;
let Array20: number[] = listaNum.filter((value): boolean => {
  return value <= 20;
});
console.log(Array20);

// ------------------------------------------------------------------------
// e) Crie um novo array com os valores menores do que 17 e incremente
// cada um dos valores desse novo array;
let Array17: number[] = listaNum.filter((value): boolean => {
  return value <= 17;
});
console.log(Array17);

let newArray17: number[] = [];

Array17.forEach((element): void => {
  element++;
  newArray17.push(element);
  Array17 = newArray17;
});
console.log(newArray17);

// ------------------------------------------------------------------------
// f) Retorne a soma de todos os valores menores do que 20;
let soma20: number = Array20.reduce((total, value): number => {
  return total + value;
}, 0);

console.log(soma20);

// ------------------------------------------------------------------------
