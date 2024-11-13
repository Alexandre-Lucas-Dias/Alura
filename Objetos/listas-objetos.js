const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['553499999998', '5534123456'],
    enderecos: [{
        rua: 'Rua Joseph Climber',
        numero: '45',
        complemento: 'apto 43'
    }]
}


estudante.enderecos.push({
    rua: 'Rua Dona Clotilde',
    numero: '71',
    complemento: null // '' também é considerado vazio para ser localizado pelo método filter
})

// console.log(estudante.enderecos);
// console.log(estudante.enderecos[1]); // alt + seta pra cima ou pra baixo, move texto selecionado

const listaEnderecoComComplemento = estudante.enderecos.filter((endereco) => endereco.complemento)

console.log(listaEnderecoComComplemento);