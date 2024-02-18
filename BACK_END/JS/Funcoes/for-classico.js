const notas = [10, 8.5, 5, 6.5, 8, 7.5];
const {log} = console;

// primeira expressão: executa apenas uma vez
// segunda expressão: condição de execução
// terceira expressão: executada sempre ao final do bloco
for (let indice = 0; indice < notas.length; indice++) {
    log(indice, notas[indice]);
}

// gerando novo array de notas
const novasNotas = notas.slice(0, 4);
log(novasNotas);

let somaNotas = 0;

// calculando a média de notas do novo array. 
for (let i = 0; i < novasNotas.length; i++) {
    somaNotas += novasNotas[i];
}

const mediaNotas = somaNotas/novasNotas.length;
log(`Média de notas é: ${mediaNotas}`);


// Calculando a média de notas de uma matriz
const notas1 = [10, 6.5, 8, 7.5]
const notas2 = [9, 6, 6]
const notas3 = [8.5, 9.5];

const notasGerais = [notas1, notas2, notas3];
let media = 0;

for (let i = 0; i < notasGerais.length; i++) {
    for (let j = 0; j < notasGerais[i].length; j++) {
        media += notasGerais[i][j]/notasGerais[i].length;
    }
}
media = media/notasGerais.length;
log(`Média geral das notas da matriz: ${media}`);

// dddremento de array utilizando o for
const numeros = [100, 200, 300, 400, 500, 600];
 
for (let i = numeros.length - 1; i >= 0; i--) {
  console.log(numeros[i]);
}


// notas.forEach((indice) => {
//     log(indice);
// })