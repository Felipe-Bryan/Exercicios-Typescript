// 1. Crie um algoritmo que armazene três valores, para cada um dos lados
// de um triângulo: A, B e C. Verifique se os lados fornecidos formam
// realmente um triângulo. Se formar, deve mostrar no console o tipo de
// triângulo: isósceles, escaleno ou equilátero.

// a. Para verificar se os lados fornecidos formam um triângulo: A <
// B + C e B < A + C e C < A + B.
// b. Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou
// B=C);
// c. Triângulo escaleno: possui todos os lados diferentes (A<>B e
// B<>C e A<>C);
// d. Triângulo equilátero: possui todos os lados iguais (A=B e
// B=C);

let ladoA: number = Number(prompt('Informe a medida do primeiro lado'));
let ladoB: number = Number(prompt('Informe a medida do segundo lado'));
let ladoC: number = Number(prompt('Informe a medida do terceiro lado'));

// A < B + C || B < A + C || C < A + B

if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
  if (
    (ladoA == ladoB && ladoA !== ladoC) ||
    (ladoA == ladoC && ladoA !== ladoB) ||
    (ladoB == ladoC && ladoB !== ladoA) ||
    (ladoB !== ladoC && ladoB == ladoA)
  ) {
    console.log('Triângulo isósceles');
  }
  if (ladoA == ladoB && ladoA == ladoC) {
    console.log('Triângulo equilátero');
  }
  if (ladoA !== ladoB && ladoA !== ladoC && ladoA !== ladoC) {
    console.log('Triângulo escaleno');
  }
} else {
  console.log('As medidas não representam um triângulo');
}
