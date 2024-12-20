const estudante = {
    nome: 'José Silva',
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['5534912345678', '5534987654321'],
    // enderecos: [{
    //     logradouro: 'Rua Joseph Climber',
    //     numero: '45',
    //     complemento: 'apto 43'
    // },
    // {
    //     logradouro: 'Rua Dona Clotilde',
    //     numero: '71',
    //     complemento: [null]
    // }]
}

const chavesObjeto = Object.keys(estudante)
console.log(chavesObjeto);

if (!chavesObjeto.includes('enderecos')){
    console.error('É necessário ter um endereço cadastrado')
}