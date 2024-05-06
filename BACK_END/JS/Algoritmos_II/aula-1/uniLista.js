const { edGalho, edFolha } = require('./arrays');

// combina duas listas
const listaFinal = [...edGalho, ...edFolha];

const listaOrdenadaPorPreco = listaFinal.sort((a, b) => a.preco - b.preco);

console.log(listaOrdenadaPorPreco);