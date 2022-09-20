// 5. Crie um objeto para colocar nome e duas notas.
// Atribua nome e duas notas para o primeiro objeto, que será nosso primeiro aluno.
// Agora crie mais um objeto para colocar informações do nosso segundo aluno.
// Mostre as informações de cada aluno no console.
// Mostre também a média do primeiro aluno e a média do segundo aluno.
// Por fim mostre a média desta turma de 2 alunos.

interface aluno {
  nota1: number;
  nota2: number;
}

let aluno1: aluno = {
  nota1: 8,
  nota2: 7,
};

let aluno2: aluno = {
  nota1: 9,
  nota2: 8,
};
console.log(aluno1);
console.log(aluno2);

let mediaAlunos = (aluno1.nota1 + aluno1.nota2 + aluno2.nota1 + aluno2.nota1) / 4;

console.log(`A média da turma é ${mediaAlunos}`);
