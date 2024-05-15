const listaLivros = require('./arrayOrdenado');
const {log} = console;

function busca(array, de, ate, valorBuscado) {
    // log('de --> ' + de + ' para --> ' + ate);
    const meio = Math.floor((de + ate) / 2);
    const atual = array[meio];

    if (de > ate) {
        return -1;
    }

    if (valorBuscado === atual.preco) {
        return meio;
    }

    if (valorBuscado < atual.preco ) {
        return busca(array, de, meio - 1, valorBuscado);
    }

    if ( valorBuscado > atual.preco ) {
        return busca(array, meio + 1, ate, valorBuscado);
    }
}

log(busca(listaLivros, 0, listaLivros.length - 1, 36));