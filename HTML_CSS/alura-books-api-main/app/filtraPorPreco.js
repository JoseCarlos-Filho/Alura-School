export default function ordenaPorPreco(livros) {
    // console.log(livros);
    return livros.sort((a, b) => a.preco - b.preco);
}