// 10. Utilizando do...while, imprima na tela a soma de todos os números
// entre 10 e 100.

let index: number = 10;
let somaB: number = 0;

do {
  somaB += index;
  index++;
} while (index <= 100);

console.log(somaB);
