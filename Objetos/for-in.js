const estudante = {
    nome: 'José Silva',
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['5534912345678', '5534987654321'],
    enderecos: [{
        logradouro: 'Rua Joseph Climber',
        numero: '45',
        complemento: 'apto 43'
    },
    {
        logradouro: 'Rua Dona Clotilde',
        numero: '71',
        complemento: [null]
    }]
}

for (let chave in estudante){
    const tipo = typeof estudante[chave]
    if (tipo !== 'object' && tipo !== 'function'){
        const texto = `A chave ${chave} tem o valor ${estudante[chave]}`
        console.log(texto)
    } else {
        console.log(`A chave ${chave} tem o valor`)
        console.log(estudante[chave])
    }
}