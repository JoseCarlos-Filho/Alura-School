// Nesta aula também é possivel se ter um array de objetos
// explicito no exemplo da propriedade endereco do objeto estudante
// a propriedade endereco é definido por colchetes(array) e dentro do array possui um objeto 
// com informações de um determinado endereço.
// a propriedade pode ser manipulada utilizando metodos de arrays(adiciorando, alterando ou removendo objetos do array de objetos).
const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['5511999999998', '5511999999993'],
    endereco: [{
        rua: 'Rua Joseph Climber',
        numero: '45',
        complemento: 'apto 43',
        cidade: 'São Paulo',
        estado: 'SP',
        cep: '13250000',
    }],
};

const {log} = console;


estudante.endereco.push({
    rua: 'Rua Villa Lobos',
    numero: '850',
    complemento: '',
    cidade: 'Campinas',
    estado: 'SP',
    cep: '14251000',
})

// log(estudante.endereco);
// log(estudante.endereco[0]);

// exemplo de utilização de metodo de array na propriedade endereço.
const listaEnderecosComComplementos = estudante.endereco.filter((endereco) => endereco.complemento);
log(listaEnderecosComComplementos);