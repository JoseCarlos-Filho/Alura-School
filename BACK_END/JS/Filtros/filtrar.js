const alunos = ['Elaine', 'Vitoria', 'José', 'Caio'];
const medias = [7, 10, 5, 7.5];
const {log} = console;

const reprovado = alunos.filter((aluno, indice) => {
    return medias[indice] < 7;
})

log(reprovado);

const notas = [10, 5, 7, 4, 8, 3];

const aprovados = notas.filter((nota) => nota >= 7);
console.log(aprovados);
