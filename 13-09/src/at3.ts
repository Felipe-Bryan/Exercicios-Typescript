// 3. Escreva um algoritmo que armazene o ano atual e o ano de nascimento de uma pessoa.
// Escrever uma mensagem no console que diga se ela poderá ou não votar este ano
// (não é necessário considerar o mês em que a pessoa nasceu).

let anoAtual: number = Number(prompt('Informe o ano atual'));
let anoNasc: number = Number(prompt('Informe o ano que você nasceu'));

let idadeUsuario: number = anoAtual - anoNasc;

let podeVotar: string = idadeUsuario < 16 ? 'Não poderá votar este ano' : 'Poderá votar este ano';

console.log(podeVotar);
