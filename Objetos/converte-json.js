const estudante = require('./estudante.json');

const stringEstudante = JSON.stringify(estudante); // para converter o objeto json em string

const objEstudante = JSON.parse(stringEstudante); // voltando a ser objeto

console.log(objEstudante);
console.log(typeof objEstudante);
console.log(objEstudante.nome);