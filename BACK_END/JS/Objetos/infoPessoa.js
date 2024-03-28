const {log} = console;
// exercicio 1
log();
log('Exercício 1');
log();

const pessoa = {
    nome: 'José',
    idade: 39,
    solteiro: false,
    hobbies: ['games', 'animes', 'filmes', 'cavalos'],
};

function mostraInfoPessoa(pessoa) {
    log();
    log('Informação da Pessoa');
    log(`Nome: ${pessoa.nome}. Info do tipo: ${typeof(pessoa.nome)} 
      Idade: ${pessoa.idade}. Info do tipo: ${typeof(pessoa.idade)}
      Solteiro: ${pessoa.solteiro}. Info do tipo: ${typeof(pessoa.solteiro)}
      Hobbies: ${pessoa.hobbies.map((hobbie) => ` ${hobbie}`)}. Info do tipo: ${typeof(pessoa.hobbies)}`);
    log();
}

mostraInfoPessoa(pessoa);

// exercicio 2
log();
log('Exercício 2');
log();