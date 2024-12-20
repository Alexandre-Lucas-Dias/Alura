// Exercício 1

const pessoa = {
    nome: "Chaves",
    notas: [2, 4, 7, 5, 9],
    calcularMediaNotas: function(nota){
        const somatorio = nota.reduce((acumulador, valor) => acumulador + valor, 0);
        return somatorio / nota.length;
    },
    classificarDesempenho: function(media){
        if (media >= 9){
            return "Desempenho excelente!";
        } else if ((media >= 7.6) && (media <= 8.9)){
            return "Bom desempenho!";
        } else if ((media >= 6) && (media <= 7.5)){
            return "Desempenho regular!";
        } else {
            return "Desempenho insuficiente!";
        }
    }
};

console.log(`A média de notas da pessoa ${pessoa.nome} é de ${pessoa.calcularMediaNotas(pessoa.notas)}`);
console.log(`A categoria de desempenho da pessoa ${pessoa.nome} é:`);
console.log(pessoa.classificarDesempenho(pessoa.calcularMediaNotas(pessoa.notas)));

// Exercício 2

const carro = {
    marca: "Chevrolet",
    modelo: "Corsa",
    ano: 2001,
    cor: "cinza"
};

for (let chave in carro){
    console.log(`A propriedade ${chave} tem o valor ${carro[chave]}`);
}

carro.valor = 11000;
carro.peso = 950;

console.log("\nPropriedades atualizadas do carro:");
for (let chave in carro){
    if (chave === "valor"){
        console.log(`A propriedade valor tem o valor R$${carro[chave]},00`);
    } else if (chave === "peso"){
        console.log(`A propriedade peso tem o valor ${carro[chave]} Kgs`);
    } else {
        console.log(`A propriedade ${chave} tem o valor ${carro[chave]}`);
    }
}

// Exercício 3 no arquivo carroDinamico

// Exercício 4

console.log("Exercício 4:\n\n");

carro.placa = "KEP-0888";

Object.defineProperty(carro, 'placa', {
    enumerable: false // para tornar a propriedade placa não enumerável
});

for (let propriedade in carro){
    console.log(`A propriedade ${propriedade} tem o valor ${carro[propriedade]}`);
}

const enumeraveis = Object.keys(carro); // para trazer as chaves enumeráveis do objeto carro

console.log(`As chaves enumeráveis do objeto carro são: ${enumeraveis.join(", ")}`);

console.log(`Ainda que não enumerável, a propriedade "placa" do objeto carro é: ${carro.placa}`);

// Exercício 5

console.log("Exercício 5:\n\n");

const carroNovo = {
    marca: "Ferrari",
    modelo: "F-50",
    ano: 2024,
    cor: "vermelha"
};

const carroComNovosDetalhes = {...carro, ...carroNovo}

console.log("Carro com novos detalhes:");
console.log(carroComNovosDetalhes);

carroComNovosDetalhes.cor = "azul";

console.log("\nCarro com Detalhes Modificados:");
console.log(carroComNovosDetalhes);