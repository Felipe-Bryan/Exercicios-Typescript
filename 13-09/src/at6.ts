// 6. Tendo como entrada a altura e o sexo
// (codificado da seguinte forma: 1 para sexo feminino e 2 para sexo masculino)
// de uma pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando as
// seguintes fórmulas:
// - para homens: (72.7 * Altura) – 58
// - para mulheres: (62.1 * Altura) – 44.7

let altura: number = Number(prompt('Informe sua altura'));
let sexo: number = Number(prompt('Informe seu sexo (1) Feminino ou (2) Masculino'));
let peso;

if (sexo == 1) {
  peso = 62.1 * altura - 44.7;
  console.log(`Seu peso ideal é de ${peso.toFixed(2)}`);
} else if (sexo == 2) {
  peso = 72.7 * altura - 58;
  console.log(`Seu peso ideal é de ${peso.toFixed(2)}`);
} else {
  console.log('Dados incorretos');
}
