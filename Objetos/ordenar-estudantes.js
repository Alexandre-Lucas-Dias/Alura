const estudantes = require('./estudantes.json');

function ordena(lista, propriedade) {
    // sort ordena alguma propriedade
    // O sort tem 2 formas de ser utilizada. A forma mais simples não se faz as condicionais mas vale só pra string
    return lista.sort((a, b) => {
        if (a[propriedade] < b[propriedade]) return -1;
        if (a[propriedade] > b[propriedade]) return 1;
        return 0;
    });
}

function inverso(lista, propriedade, decrescente = true) {
    return lista.sort((a, b) => {
        let valorA = a[propriedade];
        let valorB = b[propriedade];

        if (typeof valorA === 'string') {
            valorA = valorA.toUpperCase();
        }
        if (typeof valorB === 'string') {
            valorB = valorB.toUpperCase();
        }

        if (valorA < valorB) {
            return decrescente ? 1 : -1;
        }
        if (valorA > valorB) {
            return decrescente ? -1 : 1;
        }
        return 0;
    })
}

function outroInverso(lista, propriedade, ordem = "decrescente") {
    if (ordem !== "crescente") {
        return lista.sort((a, b) => b[propriedade] - a[propriedade]);        
    }
}

const ordenadoNomeDecrescente = inverso(estudantes, 'nome');
console.log("Um método para inverter a ordem da lista de estudantes:\n");
console.log(ordenadoNomeDecrescente);

const ordenarInverso = outroInverso(estudantes, 'nome');
console.log("Outro método para inverter a ordem da lista de estudantes:\n");
console.log(ordenarInverso);

const listaOrdenada = ordena(estudantes, 'nome');
console.log("Lista de estudantes ordenada:\n");
console.log(listaOrdenada);