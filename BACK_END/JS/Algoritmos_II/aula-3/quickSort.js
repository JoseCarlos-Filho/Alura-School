const listaLivros = require('./arrays');
const trocaLucar = require("./encontraMenores");
const {log} = console;


function quickSort(array, esquerda, direita) {

    if (array.length > 1) {
        let indiceAtual = particiona(array, esquerda, direita);
        if (esquerda < indiceAtual - 1) {
            quickSort(array, esquerda, indiceAtual - 1);
        }
        if (indiceAtual < direita) {
            quickSort(array, indiceAtual, direita);
        }
    }

    return array;
}

function particiona(array, esquerda, direita) {
    log('array : ', array);
    log('esquerda, direita : ', esquerda, direita)
    let pivo = array[Math.floor((esquerda + direita) / 2)];
    let atualEsquerda = esquerda; // 0 posição do array
    let atualDireita = direita; // 10 posição do array

    while (atualEsquerda <= atualDireita) {
        while (array[atualEsquerda].preco < pivo.preco) {
            atualEsquerda++;
        }   

        while (array[atualDireita].preco > pivo.preco) {
            atualDireita--;
        }

        if (atualEsquerda <= atualDireita) {
            trocaLucar(array, atualEsquerda, atualDireita);
            atualEsquerda++;
            atualDireita--;
        }
    }

    return atualEsquerda;

}

log(quickSort(listaLivros, 0, listaLivros.length - 1));