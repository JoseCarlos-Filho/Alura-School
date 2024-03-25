const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript'
}

const {log} = console;
estudante.telefone = '551199999999';
log(estudante.telefone);
log(estudante);

estudante.nome = 'José Souza'
log(estudante);

const estudante2 = {};
estudante2.nome = 'Elaine Tiemi';
log(estudante2);

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }

log(objPersonagem);
delete objPersonagem.aliado;
delete objPersonagem['status'];
log(objPersonagem.aliado);
log(objPersonagem.status);
log(objPersonagem);

const delProp = delete objPersonagem.aliado
const delPropInexistente = delete objPersonagem["endereco"]
 
console.log(delProp) //true
console.log(delPropInexistente) //true


const pessoa = {
    nome: "Bruce Banner",
    dataNascimento: "25/01/1980",
    carteiraIdentidade: "997776-X",
    email: "profbanner@email.com",
    telefone: "+552877776666",
    cidade: "Cachoeiro de Itapemirim",
    estado: "ES"
 }

pessoa.seguroSocial = '111.222/33-44'
pessoa.cpf = '987.654.321-00';
log(pessoa);
log(`Os quatro primeiros digitos da carteira de identidade é: ${pessoa.carteiraIdentidade.substring(0, 4)}`);
log(`Os quatro primeiros digitos do CPF é: ${pessoa.cpf.substring(0, 5)}`);


// Outro exemplo de utilização de objeto.
const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "1122233345",
    email: "andre@dominio.com",
  };
  
  console.log(
    `O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`
  );
  
  const chaves = ["nome", "idade", "cpf", "email", "altura"];
  
  chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
  });
  
