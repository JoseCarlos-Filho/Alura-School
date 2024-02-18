const notaFinal = 6;
const faltas = 2;
const advertencias = 0;

// if(notaFinal < 7 || faltas > 4) {
//     console.log('reprovado, pegou dependência');
// } else {
//     console.log('não foi reprovado por falta');
// }

if(notaFinal < 7 && faltas > 4) {
    console.log('reprovado, pegou dependência');
} else {
    console.log('não foi reprovado por falta');
}

if (faltas >= 2 && !advertencias) {
    console.log('Recebeu bônus');
} else {
    console.log('Não recebeu bônus');
}