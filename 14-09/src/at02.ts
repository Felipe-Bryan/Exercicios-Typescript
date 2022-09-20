// 2. Escreva um algoritmo que armazene o número total de eleitores de um
// município, o número de votos brancos, nulos e válidos. Calcular e escrever
// o percentual que cada um representa em relação ao total de eleitores. O
// algoritmo deve fazer uma validação para que as porcentagens dos votos
// armazenados (brancos, nulos e válidos) respeitem o limite do número
// total de eleitores, ou seja, garantir que a soma dos votos brancos, nulos e
// válidos não seja maior que o número total de eleitores.

let eleitores: number = Number(prompt('Informe o número total de eleitores'));
let votoValido: number = Number(prompt('Informe o total de votos válidos'));
let votoNulo: number = Number(prompt('Informe o total de votos nulos'));
let votoBranco: number = Number(prompt('Informe o total de votos brancos'));
let totalVotos: number = votoValido + votoNulo + votoBranco;
let ausentes: number = eleitores - totalVotos;
let porcentValido: number = (votoValido / eleitores) * 100;
let porcentNulo: number = (votoNulo / eleitores) * 100;
let porcentBranco: number = (votoBranco / eleitores) * 100;

if (totalVotos <= eleitores) {
  document.write('O total de eleitores do município é de: ' + eleitores + ' .<br />');
  document.write('O percentual de votos válidos foi de : ' + porcentValido.toFixed(1) + '% dos votos.<br />');
  document.write('O percentual de votos nulos foi de : ' + porcentNulo.toFixed(1) + '% dos votos.<br />');
  document.write('O percentual de votos brancos foi de : ' + porcentBranco.toFixed(1) + '% dos votos.<br />');
  document.write(ausentes + ' eleitores faltaram à votação.<br />');
} else {
  document.write('O total de votos excede o total de eleitores, verifique os números digitados.<br />');
}
