// 8. Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um número
// de 1 a 7 e imprimir no console o dia da Semana. Para este exercício
// assumimos que o dia 1 é Domingo, dia 2 é segunda e assim por diante.
// Caso o número recebido não esteja neste intervalo imprimir “Dia não
// reconhecido”.

diaDaSemana();

function diaDaSemana() {
  const diaSemana: number = Number(prompt('Informe um número de 1 a 7'));
  if (diaSemana == 1) {
    console.log('Domingo');
  } else if (diaSemana == 2) {
    console.log('Segunda');
  } else if (diaSemana == 3) {
    console.log('Terça');
  } else if (diaSemana == 4) {
    console.log('Quarta');
  } else if (diaSemana == 5) {
    console.log('Quinta');
  } else if (diaSemana == 6) {
    console.log('Sexta');
  } else if (diaSemana == 7) {
    console.log('Sábado');
  } else {
    console.log('Informe um número válido');
    diaDaSemana();
  }
}
