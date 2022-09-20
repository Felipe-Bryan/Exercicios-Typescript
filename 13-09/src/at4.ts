// 4. Escreva um algoritmo que armazene o valor 10 em uma variável A e o valor 20 em uma variável B.
// A seguir (utilizando apenas atribuições entre variáveis) troque os seus conteúdos fazendo com que o
// valor que está em A passe para B e vice-versa. Ao final, mostre no console os valores que ficaram
// armazenados nas variáveis após modificadas.

let a: number = 10;
let b: number = 20;

console.log(`O valor de a é ${a}`);
console.log(`O valor de b é ${b}`);

let temp = a;

a = b;
b = temp;
console.log('----------------------------');
console.log(`O valor de a agora é ${a}`);
console.log(`O valor de b agora é ${b}`);
