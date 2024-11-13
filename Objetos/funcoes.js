const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['553499999998', '5534123456'],
    media: 7.5,
    estaAprovado: function(mediaBase){ // no contexto de objeto, o arrow function "=>" não aceita o "this" que serve para mostrar ao JS de qual objeto se refere aquela propriedade
        return this.media >= mediaBase ? "Aluno(a) aprovado(a)" : "Aluno(a) reprovado(a)"
    }
}

const estudante2 = Object.create(estudante)

estudante2.nome = "Alberto"

console.log(estudante.nome)
console.log(estudante2.nome)

console.log(estudante.estaAprovado(7))