const {log, error} = console;

const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['5511999999998', '5511999999993'],
    // enderecos: [{
    //     rua: 'Rua Joseph Climber',
    //     numero: '45',
    //     complemento: 'apto 43',
    // },
    // {
    //     rua: 'Rua Pinheiros',
    //     numero: '71',
    //     complemento: null,
    // }],
};

const chavesObjeto = Object.keys(estudante);
log(chavesObjeto); // mostra um array com as propriedades do objeto.

// o metodo de array includes verifica se possui ou não a chave no objeto.
// lembrando que chaveObjeto recebe um array com o nome das chaves do objeto.
if (!chavesObjeto.includes('enderecos')) {
    error('é necessário ter um endereço cadastrado');
}

//  mostra um array com os valores do objeto.
log()
const valoresObjeto = Object.values(estudante);
log(valoresObjeto);
log()

// mostra um array com cada chave e cada valor que estão no objeto.
const chavesValoresDoObjeto = Object.entries(estudante);
log(chavesValoresDoObjeto);