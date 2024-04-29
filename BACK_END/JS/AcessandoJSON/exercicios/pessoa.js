const {log} = console;
const pessoaOriginal = {
    id: 1,
    nome: 'José',
    idade: 39
}

function modificaObj(objPessoa) {
    const objPessoaModifica = JSON.parse(JSON.stringify(objPessoa));
    objPessoaModifica.nome = 'Marcos';
    objPessoaModifica.idade = 30;
    return objPessoaModifica
}

modificaObj(pessoaOriginal);

log('Objeto Pessoa Original');
log(pessoaOriginal);
log()

log('Objeto Pessoa Modificado');
log(modificaObj(pessoaOriginal));
