// import estudante from './estudante.json';
const estudante = require('./estudante.json'); // require é nativo do node

// console.log(estudante);
// console.log(typeof estudante);

const chaves = Object.keys(estudante);
console.log(chaves);