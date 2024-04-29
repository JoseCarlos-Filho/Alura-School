const {log} = console;
const estudantes = require('../estudantes.json');

function buscaInformacao(lista, chave, valor) {
    return lista.find((estudante) => estudante[chave] === valor);
}

// esta função busca informações inclusive informação que estão dentro de arrays
function buscaInformacaoComArrays(lista, chave, valor) {
    return lista.find((estudante) => estudante[chave].includes(valor));
}

const estudanteEncontrado = buscaInformacao(estudantes, 'nome', 'Juliet');
log(estudanteEncontrado)

// a chave telefone no objeto estudantes é um array mudando a forma de fazer a busca conforme a chamada da função
const telefoneEstudante = buscaInformacaoComArrays(estudantes, 'telefone', '1918820860');
log(telefoneEstudante)