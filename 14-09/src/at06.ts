// 6. Crie uma constante para ler a idade de um motorista. Caso o motorista
// tenha idade maior ou igual a 18 anos imprime no console “Pode dirigir”,
// caso contrário imprima “Não pode dirigir”.

const idadePessoa: number = Number(prompt('Informe a sua idade'));

if (idadePessoa < 18) {
  console.log('Não pode dirigir');
} else {
  console.log('Pode dirigir');
}
