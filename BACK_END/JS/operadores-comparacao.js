const estaAprovado = true;
const {log} = console;

if(estaAprovado === true) {
    log('aprovado');
}

// compara valor e tipo de dado
if('0' === 0) {
    log('passou na comparação');
} else {
    log('não passou na comparação')
}

const idadeMinima = 18;
const idadeEstudante = 16;

if(idadeEstudante >= idadeMinima) {
    log('não precisa de autorização');
} else {
    log('precisa de autorização')
}