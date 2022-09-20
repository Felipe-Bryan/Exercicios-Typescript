// 8. Faça um programa que verifique (usando IF Ternário).
// Conforme a letra escrever: F – Feminino, caso contrário, imprimir Masculino.

let sexo2: string = String(prompt('Digite seu sexo:\n [F]-> Feminino\n [M]-> Masculino')).toUpperCase();

sexo2 == 'F' ? console.log('Feminino') : console.log('Masculino');
