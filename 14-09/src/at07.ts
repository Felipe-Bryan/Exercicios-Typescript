// 7. Para o mesmo exercício acima insira mais uma variável a condicional,
// além de saber se o motorista tem 18 anos ou mais, temos que saber
// também se ele é habilitado para dirigir. Caso ele tenha idade maior ou
// igual a 18 anos e possua habilitação, imprima no console “Pode dirigir”
// caso contrário imprima “Não pode dirigir”.

const idadePessoaA: number = Number(prompt('Informe a sua idade'));
const habilitado: boolean = confirm('Você possui habilitação');

if (idadePessoaA >= 18 && habilitado) {
  console.log('Você pode dirigir');
} else if (idadePessoaA >= 18 && !habilitado) {
  console.log('Você não pode dirigir');
} else {
  console.log('Você não pode dirigir');
}
