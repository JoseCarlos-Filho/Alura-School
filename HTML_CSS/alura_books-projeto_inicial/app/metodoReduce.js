export default function calcularValorTotalDeLivrosDisponiveis(livros) {
    return livros.reduce((total, livro) => total + livro.preco, 0);
}