const estudantes = require('./estudantes.json');

function filtraPorPropriedade(lista, propriedade){
    return lista.filter((estudante) => { // o filter devolve um array com os valores encontrados ou vazio, caso nada seja encontrado
        return !estudante.endereco.hasOwnProperty(propriedade); // hasOwnProperty verifica se o objeto tem a própria propriedade
    });
}

const listaEnderecosIncompletos = filtraPorPropriedade(estudantes, 'cep');
console.log(listaEnderecosIncompletos);