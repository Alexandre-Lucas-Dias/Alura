// declaração de função

function minhaFuncao(param){
    // bloco de código
}

// minhaFuncao("param")

// expressão de função

// const soma = function(num1, num2) { return num1 + num2 }
// console.log(soma(1, 1))

// diferença principal: HOISTING (isso é a "listagem" do código e a "transferência" das funções e var's para o topo do arquivo)
// funções e var são "listadas" no topo do arquivo.

console.log(apresentar());

function apresentar(){
    return "olá";
}

const soma = function(num1, num2) { return num1 + num2 }
console.log(soma(1, 1));