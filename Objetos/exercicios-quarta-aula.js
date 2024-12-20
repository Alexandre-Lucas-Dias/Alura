// Exercícios 1 e 2 são os arquivos dados.json e utilizarRequire.js

// Exercício 3

const produto = {
    id: 1,
    nome: "Camiseta",
    preco: 25.99
}

// converter o objeto produto para string
const produtoString = JSON.stringify(produto);

console.log("String do Produto:");
console.log(produtoString);

// Exercício 4 nos arquivos animais.json e manipulacaoJson.js

// Exercício 5

const pessoaOriginal = {
    id: 1,
    nome: "Alice",
    idade: 30
}

function clonarPessoa(origin){
    const novaPessoa = JSON.parse(JSON.stringify(origin));
    novaPessoa.id = 2;
    novaPessoa.nome = "Alexandre";
    novaPessoa.idade = 33;
    novaPessoa.telefone = "3412345678";
    return novaPessoa;
}

console.log("Pessoa original:");
console.log(pessoaOriginal);
console.log("Nova pessoa:");
console.log(clonarPessoa(pessoaOriginal));