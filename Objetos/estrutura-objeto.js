const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12345678901',
    turma: 'JavaScript'
}

console.log(estudante.nome);
console.log(`O nome do estudante é ${estudante.nome}`);
console.log(`Os três primeiros números do CPF são ${estudante.cpf.substring(0, 3)}`);
