const dados = require('./dados.json');
const {log} = console;

log(dados);
log(Object.keys(dados.produtos[0]));
log();
log(dados.produtos.forEach(produto => {
    const itemsProduto = Object.entries(produto);
    log('chaves e valores de produto', itemsProduto);
}))

log();
log(dados.produtos.map(produto => produto.nome === 'Calça Jeans' ? produto : 0));
log();

log(dados.usuarios.filter(usuario => usuario.id === 101));
log()

log(dados.produtos.map(produto => Object.values(produto)));