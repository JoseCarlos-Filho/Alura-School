// parâmetros/argumentos
// retorno
const {log} = console;

function exibeNomeEstudante(nome) {
    log(nome);
}

exibeNomeEstudante('Jose');
exibeNomeEstudante('Elaine');
exibeNomeEstudante('Vitória');

function exibeInfoEstudantes(nome, nota) {
    return `O nome é ${nome} e a nota é ${nota}`;
}

exibeInfoEstudantes('José', 9);
log(exibeInfoEstudantes('Elaine', 10));