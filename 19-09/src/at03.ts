// 3. Dado a seguinte lista de números:
// 8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4
// Some o valor total de todos números utilizando o reduce.

let listaNumeros2: number[] = [8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4];

let somaDosNumeros: number = listaNumeros2.reduce((total, value): number => {
  return total + value;
}, 0);

console.log(somaDosNumeros);
