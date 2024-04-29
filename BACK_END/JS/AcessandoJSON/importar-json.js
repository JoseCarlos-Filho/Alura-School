const {log} = console;
// import estudante from '../estudante.json';
const estudante = require('../estudante.json');
log(estudante);
log(typeof estudante);

const chaves = Object.keys(estudante);
log(chaves);