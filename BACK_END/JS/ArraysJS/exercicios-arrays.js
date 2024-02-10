// Execício 1
const {log} = console;
log('Exercício 1')
log();
const arrayEsparso = [,1,,3,,,,7,];
arrayEsparso.forEach((indice) => {
    log(indice);
})
log(arrayEsparso);
log(arrayEsparso.length);

// Exercício 2
log();
log('Exercício 2');
log();
const arrayDeElementos = ['vindo', 'JS', 2024, 'ALURA', true];
log(arrayDeElementos);
arrayDeElementos.unshift('Bem');
log(arrayDeElementos);

// Exercício 3
log();
log('Exercício 3');
log();

const meuArray = [];
meuArray.push(20, 30, 60);
log(meuArray);
let primeiraPosicao = meuArray.splice(0, 1);
meuArray.unshift(primeiraPosicao * 2);
log(meuArray);

// Exercício 4
log();
log('Exercício 4');
log();

const lista = [];
lista.push(1, 3, 5);
log(lista);

// Exercício 5
log();
log('Exercício 5');
log();

const clinica = [];

clinica.push('lufy', 'pingo', 'pipa');
log(clinica);

while(clinica.length > 0) {
    log('Removendo item: ', clinica);
    clinica.pop();
}
log(clinica);