export default function aplicaDesconto(listaDeLivros) {
    const desconto = 0.2;
    let listaDeLivrosComDesconto = listaDeLivros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)};
    })
    return listaDeLivrosComDesconto;
}