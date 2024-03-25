// Exercícios Objetos
const {log} = console;
log();
log('Exercicio 1');
log();
log('Info do objeto Livro')
const livro = {
    titulo: 'Crônicas do fogo e do gelo',
    autor: 'Sthefen King',
    anoPublicacao: '2010',
    genero: 'Aventura'
}


log(`Detalhes do Livro:
    Titulo: ${livro.titulo}
    Autor: ${livro.autor}
    Ano de Publicaão: ${livro.anoPublicacao}
    Gênero: ${livro.genero}`);

// Exercício 2
log();
log('Exercicio 2');
log();

let dataAtual = new Date().getFullYear();

livro.idadePublicacao = dataAtual - parseInt(livro.anoPublicacao);
log(livro);

const mostrarDetalhes = ['titulo', 'autor', 'anoPublicacao', 'genero', 'idadePublicacao'];

mostrarDetalhes.forEach((chave) => {
    log(`Detalhes do livro com campo ${chave}, é: ${livro[chave]}`);
})

// Exercício 3
log();
log('Exercicio 3');
log();

function mostraLivro(book) {
   Object.keys(book).forEach((chave) => {
        log(`O campo ${chave}, possui a descrição: ${book[chave]}`);
    })
}

mostraLivro(livro);


// Exercício 4
log();
log('Exercicio 4');
log();

livro.avaliacao = null;
// log(livro);
let atribuiAvaliacao = 7
if (livro.avaliacao === null) {
    livro.avaliacao = atribuiAvaliacao;
    log(livro);
} else {
    log(`O livro: ${livro.titulo}, já possui avaliação`);
}

// Exercício 5
log();
log('Exercicio 5');
log();

livro['genero'] = 'Drama';
log(livro);

// Exercício 6
log();
log('Exercicio 6');
log();

delete livro.avaliacao;
log(livro);