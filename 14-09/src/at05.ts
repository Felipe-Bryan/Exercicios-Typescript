// 5. Imprima na tela 30 ( trinta ) números ímpares.

let ehImpar: number = 0;

for (let i: number = 0; ehImpar < 30; i++) {
  if (i % 2 != 0) {
    console.log(i);
    ehImpar++;
  }
}
