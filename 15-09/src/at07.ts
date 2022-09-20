// 7. Crie um objeto em JavaScript para colocar 5 atributos de um notebook.
// Atribua os seguintes atributos:
// Processador = i7
// Memória = 16GB
// Preço = 5000
// HD = 1TB
// SSD = 256GB
// Por fim, utilizando o laço for in, mostre o nome e valor de cada atributo no console.

interface notebook {
  processador: string;
  memoria: string;
  preco: number;
  hd: string;
  ssd: string;
}

let notebook: notebook = {
  processador: 'i7',
  memoria: '16GB',
  preco: 5000,
  hd: '1TB',
  ssd: '256GB',
};

let key: keyof typeof notebook;
for (key in notebook) {
  console.log(`${key} : ${notebook[key]}`);
}
