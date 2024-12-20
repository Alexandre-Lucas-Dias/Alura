const dados = require('./dados.json');

console.log("Todos os dados de 'dados':");
console.log(dados);

console.log("Conteúdos de diferentes propriedades de 'dados':\n");

console.log(`Para o objeto ${Object.keys(dados)[0]}:\n`);

for (let x = 0; x < dados.produtos.length; x++){
    for (let chave in dados.produtos[x]){
        console.log(`Propriedade ${chave} com o valor:`);
        console.log(dados.produtos[x][chave]);
    }
}

console.log(`\nPara o objeto ${Object.keys(dados)[1]}:\n`);

for (let x = 0; x < dados.usuarios.length; x++){
    for (let chave in dados.usuarios[x]){
        console.log(`Propriedade ${chave} com o valor:`);
        console.log(dados.usuarios[x][chave]);
    }
}