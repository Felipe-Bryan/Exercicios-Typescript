// ------------------------------------------------------------------------
// 6. Dado a seguinte lista de números:
// 17, 21, 16, 14, 9, 22, 12, 43, 99, 44, 32

let listaNum: number[] = [17, 21, 16, 14, 9, 22, 12, 43, 99, 44, 32];
console.log(listaNum);

// ------------------------------------------------------------------------
// a) Adicione +1 em cada valor da lista;
let listaNumMais: number[] = listaNum.map((element: number): number => element + 1);
console.log(listaNumMais);

// ------------------------------------------------------------------------
// b) Crie um novo array contendo apenas os valores ímpares;
let listaNumImpares: number[] = listaNum.filter((value: number): boolean => value % 2 != 0);
console.log(listaNumImpares);

// ------------------------------------------------------------------------
// c) Crie um novo array alterando todos os valores ímpares para o
// próximo valor par;
let novaListaNumPares: number[] = listaNum.map((element: number): number => {
  if (element % 2 != 0) {
    return element + 1;
  } else {
    return element;
  }
});
console.log(novaListaNumPares);

// ------------------------------------------------------------------------
// d) Crie um novo array com os valores menores do que 20;
let Array20: number[] = listaNum.filter((value: number): boolean => value <= 20);
console.log(Array20);

// ------------------------------------------------------------------------
// e) Crie um novo array com os valores menores do que 17 e incremente
// cada um dos valores desse novo array;
let Array17: number[] = listaNum.filter((value: number): boolean => value <= 17).map((element: number): number => element + 1);
console.log(Array17);

// ------------------------------------------------------------------------
// f) Retorne a soma de todos os valores menores do que 20;
let soma20: number = Array20.reduce((total: number, value: number): number => total + value, 0);

console.log(soma20);

// ------------------------------------------------------------------------
