const animais = require('./animais.json');

console.log(animais);

const animaisObj = JSON.parse(JSON.stringify(animais));

console.log("Os mesmos animais em forma de objeto:");
console.log(animaisObj);

// adicionando um animal
animais.animais.push({
    id: 4,
    nome: "lambari",
    tipo: "peixe",
    habitat: "água doce"
});

console.log("Objeto animais com um animal adicionado:");
console.log(animais);

// modificando um habitat
animais.animais[1].habitat = "Antártica";

console.log("Objeto animais com o habitat do pinguim modificado:");
console.log(animais);

// para apagar a cobra
animais.animais.splice(2,1);

console.log("Objeto animais sem a cobra:");
console.log(animais);

const stringAnimais = JSON.stringify(animais);

console.log("Objeto animais em forma de string:");
console.log(stringAnimais);