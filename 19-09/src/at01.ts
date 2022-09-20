// 1. Crie um algoritmo que solicite para o usuário informar um número
// qualquer 7x. Adicione cada número informado pelo usuário em uma lista.
// No final utilize o forEach para mostrar cada elemento da lista.

let n1: number = Number(prompt('Informe um número'));
let n2: number = Number(prompt('Informe um número'));
let n3: number = Number(prompt('Informe um número'));
let n4: number = Number(prompt('Informe um número'));
let n5: number = Number(prompt('Informe um número'));
let n6: number = Number(prompt('Informe um número'));
let n7: number = Number(prompt('Informe um número'));

let numerosInformados: Array<number> = [n1, n2, n3, n4, n5, n6, n7];

numerosInformados.forEach((element): void => {
  console.log(element);
});
