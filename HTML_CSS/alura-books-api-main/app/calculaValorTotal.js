export default function calculaValorTotalDeLivros(livros) {
    return livros.reduce((total, livro) => livro.quantidade > 0 ? total + livro.preco : total, 0)
}