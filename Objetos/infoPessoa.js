// exercícios 1 e 2

const pessoa = {
    nome: "Will Byers",
    idade: 9,
    solteiro: true,
    hobbies: ['jogar D&D', 'andar de bike', 'sumir no mundo invertido'],
    endereco: []
}

pessoa.endereco.push({
    rua: "Rua Walter",
    cidade: "Hawkins",
    estado: "Texas"
})

function mostrarInfoPessoa(pessoa){
    console.log(`As informações do objeto "pessoa" são:
        Nome: ${pessoa.nome} (Tipo: ${typeof pessoa.nome});
        Idade: ${pessoa.idade} anos (Tipo: ${typeof pessoa.idade});
        Estado civil: ${pessoa.solteiro === true ? "Solteiro" : "Casado"} (Tipo: ${typeof pessoa.solteiro});
        Hobbies: ${pessoa.hobbies.join(", ")} (Tipo: ${typeof pessoa.hobbies});
    Endereço: 
        Rua: ${pessoa.endereco[0].rua}
        Cidade: ${pessoa.endereco[0].cidade}
        Estado: ${pessoa.endereco[0].estado}`)
}

mostrarInfoPessoa(pessoa)

// exercício 3

const pessoas = [{
    nome: "Fulano",
    idade: 10,
    cidade: "Indaiatuba"
},{
    nome: "Ciclano",
    idade: 20,
    cidade: "Joaquim da Serra"
},{
    nome: "Beltrano",
    idade: 30,
    cidade: "Matozinhos"
}]

function mostrarListaPessoas(pessoas){
    pessoas.forEach(pessoa => {
        console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
    })
}

pessoas.push({
    nome: "Castiel",
    idade: 40,
    cidade: "Supernatural"
})

mostrarListaPessoas(pessoas)

function filtrarPorCidade(pessoa, city){
    return pessoa.filter(person => person.cidade === city)
}

console.log("Pessoas em 'Supernatural':")
console.log(filtrarPorCidade(pessoas, "Supernatural"))

// exercício 4

const calculadora = {
    soma: function(x, y){
        return x + y
    },
    subtracao: function(x, y){
        return y - x
    },
    multiplicacao: function(x, y){
        return x * y
    },
    divisao: function(x, y){
        return y === 0 ? "Impossível dividir por zero!" : `A divisão na calculadora é igual a ${x / y}`
    },
    calcularMedia: function(array){
        // let somatorio = 0
        // for(let x = 0; x < array.length; x++){
        //     somatorio += array[x]
        // }
        const somatorio = array.reduce((acumulador, valor) => acumulador + valor, 0)
        return somatorio / array.length
    }    
}

console.log(`A soma na calculadora é igual a ${calculadora.soma(1, 2)};`)
console.log(`A subtração na calculadora é igual a ${calculadora.subtracao(8, 10)};`)
console.log(`A multiplicação na calculadora é igual a ${calculadora.multiplicacao(3, 4)};`)
console.log(calculadora.divisao(30, 6))

console.log(`A média dos números é igual a ${calculadora.calcularMedia([2,4,7,5,9])}`)

// exercício 5

const contaBancaria = {
    titular: "João",
    saldo: 1000,
    depositar: function(cifra){
        this.saldo += cifra
        console.log("Depósito realizado com sucesso!");
    },
    sacar: function(cifra){
        if (this.saldo >= cifra){
            this.saldo -= cifra
            console.log("Saque realizado com sucesso!");
        }else{
            console.log("Saldo insuficiente para sacar!")
        }
    }
}

const cliente = {
    nome: "João",
    conta: contaBancaria
}

function mostrarSaldo(client){
    console.log(`O cliente ${client.nome} possui em seu saldo bancário a quantia de R$${client.conta.saldo}`);
}

cliente.conta.depositar(10)
cliente.conta.sacar(1008)
mostrarSaldo(cliente)