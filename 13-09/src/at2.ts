// 2. Crie um algoritmo que armazene um número inteiro positivo,
// e gere um alerta com as seguintes mensagens:
// “Número é par!”, se o valor armazenado for par;
// “Número é impar!”, se o valor armazenado for ímpar;

let numero4: number = Number(prompt('Informe um número'));

let ehPar1: string = numero4 % 2 == 0 ? `O número é par` : `O número é ímpar`;

alert(ehPar1);
