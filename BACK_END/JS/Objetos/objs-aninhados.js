const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['5511999999998', '5511999999993'],
};

const {log} = console;

estudante.endereco = {
    rua: 'Rua Joseph Climber',
    numero: '45',
    complemento: 'apto 43',
    cidade: 'São Paulo',
    estado: 'SP',
    cep: '13250000',
};

log(estudante.endereco.rua);