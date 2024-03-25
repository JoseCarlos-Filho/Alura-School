const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript'
}

const {log} = console;
log(estudante.nome);
log(`O nome do estudante é: ${estudante.nome}`);
log(`Os três primeiros números do CPF são: ${estudante.cpf.substring(0, 3)}`);

