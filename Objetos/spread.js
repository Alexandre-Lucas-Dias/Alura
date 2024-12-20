const estudante = {
    nome: 'José Silva',
    idade: 32,
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

function exibirTelefones(telefone1, telefone2){
    console.log(`Ligar para ${telefone1}`);
    console.log(`Ligar para ${telefone2}`);
}

//exibirTelefones(estudante.telefones[0], estudante.telefones[1]);
exibirTelefones(...estudante.telefones)

const dadosEnvio = {
    destinatario: estudante.nome,
    ...estudante.enderecos[0]
}

console.log(dadosEnvio);

// outros exemplos de espalhamento com o spread operator

const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
}
    
const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
}

const guerreiro = { ...fichaGuerreiro, ...equipoGuerreiro }
console.log(guerreiro)

const objetoOriginal = {
    nome: "GPT",
    linguagem: "JavaScript",
    framework: "Node.js",
    versao: "14.17.3"
};
  
const objetoNovo = {
    ...objetoOriginal,
    atualizacao: "15.0.0"
}

console.log(objetoNovo);