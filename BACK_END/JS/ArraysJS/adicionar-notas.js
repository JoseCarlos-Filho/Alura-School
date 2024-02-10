const notas = [10, 6, 8];
notas.push(7);
let soma = 0;

notas.forEach((nota) => {
    console.log(nota);
    soma += nota;
})

console.log(`media das notas: ${soma/notas.length}`);

const arrayVazia = [,,,];
const {log} = console;
log(arrayVazia.length);
arrayVazia.push(2);
log(arrayVazia);
log(arrayVazia.length);
// log(arrayVazia[0]);
// log(arrayVazia[1]);
// log(arrayVazia[2]);