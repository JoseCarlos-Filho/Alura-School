const {log} = console;
const produtos = require('./produto.json');

const stringProdutos = JSON.stringify(produtos);
log(stringProdutos);