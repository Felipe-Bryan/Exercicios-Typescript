// 4. Crie uma lista com 7 produtos eletrodomésticos e pergunte para o
// usuário qual produto ele deseja comprar.
// Utilize o método findIndex para verificar se o produto que o usuário quer
// existe dentro da lista, se o produto existir mostre uma mensagem
// parabenizando pela compra e remova o produto da lista utilizando o
// splice.

let listaProdutos: string[] = ['geladeira', 'microondas', 'fogao', 'televisao', 'ventilador', 'airfrier', 'cooktop'];

let escolha: string = String(prompt('Qual produto deseja comprar?')).toLowerCase();

let validaProduto: number = listaProdutos.findIndex((value): boolean => {
  return value == escolha;
});

if (validaProduto >= 0 && validaProduto <= listaProdutos.length - 1) {
  alert('Parabéns pela sua compra');
  listaProdutos.splice(validaProduto, 1);
  console.log(listaProdutos);
}
