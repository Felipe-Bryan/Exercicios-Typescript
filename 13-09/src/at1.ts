// 1. Escreva um algoritmo que armazene três valores numéricos diferentes e, em seguida,
// mostre no console a soma, a média, o produto, o menor e o maior desses números.
// O algoritmo deve validar e parar a execução se caso duas variáveis estiverem armazenando o mesmo valor.
// Utilize o console.log() para mostrar o resultado esperado.

let numero1: number = Number(prompt('Informe o primeiro valor'));
let numero2: number = Number(prompt('Informe o segundo valor'));
let numero3: number = Number(prompt('Informe o terceiro valor'));

let soma = numero1 + numero2 + numero3;
let media = soma / 3;
let maior = Math.max(numero1, numero2, numero3);
let menor = Math.min(numero1, numero2, numero3);

console.log(`A soma dos números é: ${soma}
A média dos números é ${media.toFixed(2)}
O maior entre os números é ${maior}
O menor entre os números é ${menor}`);
