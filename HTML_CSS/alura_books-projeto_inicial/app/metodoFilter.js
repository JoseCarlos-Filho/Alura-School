export default function filtrarLivros(livros, categoria) {
    // const elementoBtn = document.getElementById(this.id);
    // const categoria = elementoBtn.value;
    // console.log(livros);
    // console.log(categoria)
    let dadosFiltrados = categoria == 'disponivel' ? filtraLivroPorQuantidade(livros) : filtraLivrosPorCategoria(livros, categoria);
    // console.log(dadosFiltrados)
    return dadosFiltrados;
    // console.table(livrosFiltrados);
}

function filtraLivrosPorCategoria(livros, categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtraLivroPorQuantidade(livros) {
    return livros.filter(livro => livro.quantidade > 0);
}
