const {log} = console;
const listaProdutos = [
    { id: 1, nome: "Camiseta", preco: 25.99 },
    { id: 2, nome: "Calça Jeans", preco: 49.99 },
    { id: 3, nome: "Tênis", preco: 79.99 },
    { id: 4, nome: "Boné", preco: 15.99 }
]

function ordenaPorPreco(produtoFiltrado) {
    return produtoFiltrado.sort((a, b) => a.preco - b.preco);
}

function filtrarOrdenarProdutosPorPreco(maxPreco) {
    const produtoFiltrado = listaProdutos.filter((produto) => produto.preco <= maxPreco);
    return ordenaPorPreco(produtoFiltrado)
}

const listaFiltradaPorPreco = filtrarOrdenarProdutosPorPreco(50);
log(listaFiltradaPorPreco);