export default function filtraLivros(livros, categoria) {
    return categoria == 'disponivel' ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria === categoria);
}