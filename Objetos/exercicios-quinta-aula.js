// Exercício 1

console.log("Exercício 1:\n");

const biblioteca = [
    { id: 1, titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", anoPublicacao: 1954 },
    { id: 2, titulo: "Dom Quixote", autor: "Miguel de Cervantes", anoPublicacao: 1605 },
    { id: 3, titulo: "1984", autor: "George Orwell", anoPublicacao: 1949 }
]

function encontrarLivroPorId(lista, chave, valor) {
    return lista.find((livro) => livro[chave] === valor);
}

const idDoLivro = 1; // para tentar encontrar um livro inexistente basta mudar essa variável para qualquer número diferente de 1 a 3
const livroEncontrado = encontrarLivroPorId(biblioteca, 'id', idDoLivro);
if (livroEncontrado != undefined) {
    console.log(`O livro referente ao ID ${idDoLivro} é:\n`);
    console.log(livroEncontrado);
} else {
    console.log("Livro não encontrado!");
}

// Exercício 2

console.log("Exercício 2:\n");

const catalogoFilmes = [
    { id: 1, titulo: "Matrix", diretor: "Lana Wachowski", anoLancamento: 1999 },
    { id: 2, titulo: "Jurassic Park", diretor: "Steven Spielberg", anoLancamento: 1993 },
    { id: 3, titulo: "Inception", diretor: "Christopher Nolan", anoLancamento: 2010 },
    { id: 4, titulo: "Poeira em Alto Mar", diretor: "Alexandre", anoLancamento: 2010 }
]

function filtrarFilmesPorAno(lista, chave, valor) {
    return lista.filter((ano) => ano[chave] === valor);
}

const anoEscolhido = 2010; // para alterar a lista basta mudar essa variável
const listaFilmesPorAno = filtrarFilmesPorAno(catalogoFilmes, 'anoLancamento', anoEscolhido);
console.log(`Lista de filmes com o ano de lançamento referente a ${anoEscolhido}:`);
console.log(listaFilmesPorAno);

// Exercício 3

console.log("Exercício 3:\n");

const listaProdutos = [
    { id: 1, nome: "Camiseta", preco: 25.99 },
    { id: 2, nome: "Calça Jeans", preco: 49.99 },
    { id: 3, nome: "Tênis", preco: 79.99 },
    { id: 4, nome: "Boné", preco: 15.99 }
]

function filtrarOrdenarProdutosPorPreco(lista, chave, max) {
    const ordenado = lista.sort((a, b) => a[chave] - b[chave]);
    return ordenado.filter((produto) => produto[chave] <= max);
}

const valorMaximo = 50; // para limitar o tamanho da lista ordenada de produtos basta alterar essa variável
const listaOrdenadaProdutos = filtrarOrdenarProdutosPorPreco(listaProdutos, 'preco', valorMaximo);
console.log(`Lista ordenada de produtos com valor de até R$${valorMaximo},00:`);
console.log(listaOrdenadaProdutos);

// Exercício 4

console.log("Exercício 4:\n");

const animais = [
    { id: 1, nome: "Leão", especie: "Felino", idade: 5 },
    { id: 2, nome: "Elefante", especie: "Mamífero", idade: 10 },
    { id: 3, nome: "Pinguim", especie: "Ave", idade: 3 }
]

function ordenarAnimais(comparacao) {
    return animais.sort(comparacao);
}

function compararIdadeCrescente() {
    return ordenarAnimais((a, b) => a.idade - b.idade);
}

const animaisOrdemCrescente = compararIdadeCrescente();
console.log("Lista de animais em ordem crescente quanto à idade:\n");
console.log(animaisOrdemCrescente);

function compararIdadeDecrescente() {
    return ordenarAnimais((a, b) => b.idade - a.idade);
}

const animaisOrdemDecrescente = compararIdadeDecrescente();
console.log("Lista de animais em ordem decrescente quanto à idade:\n");
console.log(animaisOrdemDecrescente);

// Exercício 5

console.log("Exercício 5:\n");

const departamentos = [
    {
        id: 1,
        nome: "Vendas",
        funcionarios: [
            { id: 101, nome: "Ana", cargo: "Vendedor" },
            { id: 102, nome: "Carlos", cargo: "Gerente de vendas" }
        ]
    },
    {
        id: 2,
        nome: "TI",
        funcionarios: [
            { id: 201, nome: "Maria", cargo: "Desenvolvedor" },
            { id: 202, nome: "João", cargo: "Analista de sistemas" }
        ]
    }
]

function encontrarFuncionarioPorId (identificador) {
    const departamentoEncontrado = departamentos.find(departamento => departamento.funcionarios.find(funcionario => funcionario.id === identificador));
    if (departamentoEncontrado != undefined) {
        return departamentoEncontrado.funcionarios.find(funcionario => funcionario.id === identificador);
    } else {
        return null;
    }
}

const idEscolhido = 202; // para escolher o funcionário, basta alterar essa variável
const funcionarioEncontrado = encontrarFuncionarioPorId(idEscolhido);

if (funcionarioEncontrado != null) {
    console.log(`Dados do funcionário de ID ${idEscolhido}:`);
    console.log(funcionarioEncontrado);
} else {
    console.log("Funcionário inexistente!");
}