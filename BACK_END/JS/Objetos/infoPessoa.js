const {log} = console;
// exercicio 1, 2
log();
log('Exercício 1 e 2');
log();

const pessoa = {
    nome: 'José',
    idade: 39,
    solteiro: false,
    hobbies: ['games', 'animes', 'filmes', 'cavalos'],
};

function mostraInfoPessoa(pessoa) {
    pessoa.endereco = {
        rua: 'Guarapiranga 111',
        habita: 'São Paulo',
        estado: 'SP',
    };

    log();
    log('Informação da Pessoa');
    log(`Nome: ${pessoa.nome}. Info do tipo: ${typeof(pessoa.nome)} 
      Idade: ${pessoa.idade}. Info do tipo: ${typeof(pessoa.idade)}
      Solteiro: ${pessoa.solteiro}. Info do tipo: ${typeof(pessoa.solteiro)}
      Hobbies: ${pessoa.hobbies.map((hobbie) => ` ${hobbie}`)}. Info do tipo: ${typeof(pessoa.hobbies)}
      Endereço: 
      Rua: ${pessoa.endereco.rua}
      Cidade: ${pessoa.endereco.habita}
      Estado: ${pessoa.endereco.estado}`);
    log();
}

mostraInfoPessoa(pessoa);
log(pessoa);

// exercicio 3
log();
log('Exercício 3');
log();

const pessoas = [{
    nome: 'Maria',
    idade: 30,
    cidade: 'Goiânia',
}, 
{
    nome: 'Bastião',
    idade: 40,
    cidade: 'Marilia', 

},
{
    nome: 'Felicio',
    idade: 65,
    cidade: 'Lins', 

}];

function mostrarListaPessoas(pessoas) {
    log('Lista de pessoas:');
    pessoas.map((pessoa) => {
        log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`)
    });
    log();
}

mostrarListaPessoas(pessoas);

const novaPessoa = {
    nome: 'Plínio',
    idade: 35,
    cidade: 'Lins'
}

function adicionaNovaPessoa(novaPessoa) {
    pessoas.push(novaPessoa);
}

adicionaNovaPessoa(novaPessoa);
mostrarListaPessoas(pessoas);

function filtrarPorCidade(pessoas, local) {
    return pessoas.filter((humano) => humano.cidade === local);
}

const filtroCidadeLins = filtrarPorCidade(pessoas, 'Lins');
log('Pessoas da cidade de lins:');
filtroCidadeLins.forEach((campo) => {
    log();
    log(`   Nome: ${campo.nome} 
   Idade: ${campo.idade} 
   Cidade: ${campo.cidade}`);
   log();
})