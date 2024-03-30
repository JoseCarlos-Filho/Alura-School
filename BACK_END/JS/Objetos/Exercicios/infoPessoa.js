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

// exercicio 4
log();
log('Exercício 4');
log();

const calculadora = {
    soma: function(valor1, valor2) {
        return valor1 + valor2;
    },

    subtracao: function(valor1, valor2) {
        return valor1 - valor2;
    },

    multiplicacao: function(valor1, valor2) {
        return valor1 * valor2;
    },

    divisao: function(valor1, valor2) {
        if(valor2 !== 0) {
           return valor1 / valor2; 
        } else {
            return log('Divisão por zero não permitido.');
        }
    },

    calcularMedia: function(arr) {
        let soma = 0;
        arr.forEach((valor) => soma += valor);

        const media = soma / arr.length;
        return media;
    }
};

log(`Divisão: ${calculadora.divisao(10, 5)}`);
const arrayNumeros = [2, 5, 10, 8, 4];
log(`A media é: ${calculadora.calcularMedia(arrayNumeros)}`);

// exercicio 5
log();
log('Exercício 5');
log();

const contaBancaria = {
    titular: 'José',
    saldo: 5000,
    depositar: function(valor) {
        this.saldo += valor;
    },
    sacar: function(valor) {
        if (valor <= this.saldo) {
            return this.saldo -= valor;
        } else {
            return log('Saldo insuficiente');
        }
    },
};

const cliente = {
    nome: 'José',
    conta: contaBancaria,
};

function mostrarSaldo(cliente) {
    log(`Cliente: ${cliente.nome}, possui saldo: ${cliente.conta.saldo}`);
}

mostrarSaldo(cliente);
let deposito = 1200;
let saque = 800;
log(`Valor do depósito: ${deposito}`);
cliente.conta.depositar(deposito);
log(`Saldo atualizado: ${cliente.conta.saldo}`);
log(`Valor do saque: ${saque}`);
cliente.conta.sacar(saque);
log(`Saldo após o saque: ${cliente.conta.saldo}`);