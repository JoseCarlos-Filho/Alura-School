const notas = [10, 6.5, 8, 7.5];
const {log} = console;
let somaDasNotas = 0;

// notas.forEach((nota) => {
//     somaDasNotas += nota;
// })
notas.forEach(somaNotas);

function somaNotas(nota) {
    somaDasNotas += nota;
}

const media = somaDasNotas / notas.length;
log(`a média das notas é ${media}`);