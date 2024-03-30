const {log} = console;

const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['5511999999998', '5511999999993'],
    enderecos: [{
        rua: 'Rua Joseph Climber',
        numero: '45',
        complemento: 'apto 43',
    },
    {
        rua: 'Rua Pinheiros',
        numero: '71',
        complemento: null,
    }],
};

function exibirTelefones(tel1, tel2) {
    log(`Ligar para ${tel1}`);
    log(`Ligar para ${tel2}`);
}

exibirTelefones(estudante.telefones[0], estudante.telefones[1]);
exibirTelefones(...estudante.telefones);

const dadosEnvio = {
    destinatario: estudante.nome,
    ...estudante.enderecos[0],
};

log(dadosEnvio);