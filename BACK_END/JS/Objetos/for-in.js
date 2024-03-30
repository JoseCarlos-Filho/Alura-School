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

for(let chave in estudante) {
    const tipo = typeof estudante[chave];
    if (tipo !== 'object' && tipo !== 'function') {
        const info = `a chave ${chave} possui informação ${estudante[chave]}`
        log(info);
    }
    
    // log(chave);
    // log(estudante[chave]);
}

const paciente = {
    nome: "James T.",
    idade: 30,
    email: "jt@email.com",
    identicacao: "Alpha01259859",
    funcao:"comandante",
    peso: 80.1,
    altura: 1.80,
    calcularIMC:function(){
          return (this.peso/(Math.pow(this.altura,2)))
    },
    nomeCompleto:function(){
      console.log(this.nome)
    },
};

for (let info in paciente) {
    log(info);
};

for (let info in paciente) {
    if (!(typeof paciente[info] === "object" || typeof paciente[info] === "function")) {
      console.log(`${info} ==> ${paciente[info]}`);
    }
  }
   