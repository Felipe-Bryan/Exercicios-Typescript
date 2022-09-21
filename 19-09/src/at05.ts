// 5. Faça a mesma atividade anterior, mas troque o função findIndex pela
// função find. Dica: para localizar o indíce do elemento na lista é possível
// utilizar a função interna do array chamada indexOf (veja a documentação
// e aprenda a como utilizar).

let listaProdutos2: string[] = ['geladeira', 'microondas', 'fogao', 'televisao', 'ventilador', 'airfrier', 'cooktop'];

console.log(listaProdutos2);
let escolha2: string = String(prompt('Qual produto deseja comprar?')).toLowerCase();

const validaProduto2: string = String(listaProdutos2.find((element): boolean => element == escolha2));

let indexProduto: number = listaProdutos2.indexOf(validaProduto2);

if (indexProduto >= 0 && indexProduto <= listaProdutos2.length - 1) {
  alert('Parabéns pela sua compra');
  listaProdutos2.splice(indexProduto, 1);
  console.log(listaProdutos2);
}
