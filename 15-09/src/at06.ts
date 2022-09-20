// 6. Crie um objeto em JavaScript para colocar dois atributos de um produto.
// Atribua o preço e descrição do produto com o valor “90” e a descrição com o valor “Mouse”.
// Mostre no console o valor dos dois atributos.
interface produto {
  valor: number;
  descricao: string;
}

let produto: produto = {
  valor: 90,
  descricao: 'Mouse',
};

console.log(produto.valor);
console.log(produto.descricao);
