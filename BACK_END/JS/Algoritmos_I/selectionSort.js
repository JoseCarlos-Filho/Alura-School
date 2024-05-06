const livros = require('./listaLivros');
const menorValor = require("./menorValor");
const { trocaSelectionSort } = require("./troca");
const {log} = console;

for(let atual = 0; atual < livros.length - 1; atual++) {
    let menor = menorValor(livros, atual);
    trocaSelectionSort(livros, atual, menor);
}

// for(let atual = 0; atual < livros.length - 1; atual++) {
//     let menor = menorValor(livros, atual);
//     log('posição atual: ', atual);
//     let livroAtual = livros[atual];
//     log('Livro atual: ', livros[atual]);
//     let livroMenorPreco = livros[menor];
//     log('Livro menor preço: ', livros[menor]);

//     livros[atual] = livroMenorPreco;
//     livros[menor] = livroAtual;
// }

// livros.forEach((_, indice) => {
//     let menor = menorValor(livros, indice)
//     log('Valor atual: ', indice);
//     let livroAtual = livros[indice];
//     log('Livro atual: ', livroAtual)
//     let livroMenorPreco = livros[menor];
//     log('Livro menor valor: ', livroMenorPreco)
   
//     livros[indice] = livroMenorPreco
//     livros[menor] = livroAtual 
//    })

// let indice = 0;
// for (let livro of livros) {
//     let menor = menorValor(livros, indice)
//     log('Valor atual: ', indice);
//     let livroAtual = livro;
//     log('Livro atual: ', livroAtual)
//     let livroMenorPreco = livros[menor];
//     log('Livro menor valor: ', livroMenorPreco)
   
//     livros[indice] = livroMenorPreco
//     livros[menor] = livroAtual 

//     indice++;
// }
   
//    console.log(livros)

log();
log(livros);
