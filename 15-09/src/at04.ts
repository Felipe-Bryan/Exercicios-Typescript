// 4. Crie uma função chamada calcularMedia(nota1, nota2, nota3, nome),
// que recebe 4 parâmetros sendo três inteiros e um texto (String).
// Esta função será chamada ao abrir a página e mostrará um alerta com a média.
// Exemplo: “João, sua média é 70.” A função também deve mostrar no console.log() as notas recebidas.
// Exemplo “Nota 1: 60,Nota 2: 70,Nota 3: 80”.
let n1: number = 6;
let n2: number = 7;
let n3: number = 8;
let nome: string = 'João';

function calcularMedia(nota1: number, nota2: number, nota3: number, nome: string): void {
  console.log(`Nota 1: ${n1}
    nota 2: ${n2}
    nota 3: ${n3}`);

  alert(`${nome}, sua média é ${((nota1 + nota2 + nota3) / 3).toFixed(2)}`);
}

calcularMedia(n1, n2, n3, nome);
