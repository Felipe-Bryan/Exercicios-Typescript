// 4. Escrever um algoritmo que calcule e mostre a média aritmética dos
// números lidos entre 13 e 73.

let somaA: number = 0;
let contadorA: number = 0;

for (let i: number = 13; i <= 73; i++) {
  somaA += i;
  contadorA++;
}
let media = somaA / contadorA;
console.log(media);
console.log(somaA);
console.log(contadorA);
