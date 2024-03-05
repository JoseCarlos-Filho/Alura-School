const notas = [10, 9.5, 8, 7, 6];

// const notasAtualizadas = notas.map(function(nota) {
//     return nota + 1;
// })

// utilizando arrow function com instrução de uma linha utilizando operador ternário.
const notasAtualizadas = notas.map((nota) => nota + 1 >= 10 ? 10 : nota + 1);


console.log(notasAtualizadas);