const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript'
}
const {log} = console;

function exibeInfoEstudante(objEstudante, infoEstudante) {
    return objEstudante[infoEstudante];
}

log(estudante.pet);
log(estudante['pet']);

log(estudante['nome']);
log(estudante['cpf']);

log(exibeInfoEstudante(estudante, 'nome'));
log(exibeInfoEstudante(estudante, 'cpf'));
