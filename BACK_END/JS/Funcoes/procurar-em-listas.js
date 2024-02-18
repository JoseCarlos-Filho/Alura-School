const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

//               []  ,  []
const lista = [alunos, medias];

function exibiNomeENota(aluno) {
    if (lista[0].includes(aluno)) {
        const indice = lista[0].indexOf(aluno);
        const mediaAluno = lista[1][indice];
        console.log(`${aluno} possui média : ${mediaAluno}`);
    } else {
        console.log(`${aluno} não encontrado na lista`);
    }
}

exibiNomeENota('Caio');
exibiNomeENota('José');