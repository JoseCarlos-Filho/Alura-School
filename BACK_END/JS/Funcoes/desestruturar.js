const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

//               []  ,  []
const lista = [alunos, medias];

function exibiNomeENota(aluno) {
    if (lista[0].includes(aluno)) {
        // desestruturação do array podendo acessar diretamento os arrays dentro da lista de arrays.
        const [alunos, medias] = lista;
        const indice = alunos.indexOf(aluno);
        const mediaAluno = medias[indice];
        console.log(`${aluno} possui média : ${mediaAluno}`);
    } else {
        console.log(`${aluno} não encontrado na lista`);
    }
}

exibiNomeENota('Caio');
exibiNomeENota('José');