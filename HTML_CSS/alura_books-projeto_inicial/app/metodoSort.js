export default function ordenarLivrosPorPreco(livros) {
     let LivrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
     return LivrosOrdenados
}