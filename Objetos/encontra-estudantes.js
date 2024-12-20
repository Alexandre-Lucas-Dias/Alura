const estudantes = require('./estudantes.json');

function buscaInformacao(lista, chave, valor){ // o método includes procura por uma informação dentro do array que está sendo chamado
    return lista.find((estudante) => estudante[chave].includes(valor)); // find devolve um array com o valor encontrado ou vazio se nada for encontrado
}

const estudanteEncontrado = buscaInformacao(estudantes, 'nome', 'Juliet');
console.log(estudanteEncontrado);

const telefoneEstudante = buscaInformacao(estudantes, 'telefone', '79919437785');
console.log(telefoneEstudante);