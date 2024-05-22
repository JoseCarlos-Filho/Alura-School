const user = {
    nome: "José",
    email: "j@j.com",
    nascimento: "2011/12/20",
    role: "admin",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email);
    }
}

// user.exibirInfos();
// const exibir = user.exibirInfos
// exibir();

const exibir = function() {
    console.log(this.nome, this.email);
}

const info = exibir.bind(user);
info();
exibir.call(user);


// Fazendo com que a função seja executada em determinado contexto, mesmo após ser instanciada:
function User(nome, email) {
    this.nome = nome
    this.email = email
   
    this.exibeInfos = function(){
      console.log(this.nome, this.email)
    }
   }
   
   const newUser = new User('mariana', 'm@m.com')

   const outroUser = {
    nome: 'Rodrigo',
    email: 'r@r.com'
   }
   
   newUser.exibeInfos() //mariana m@m.com
   newUser.exibeInfos.call(outroUser) //Rodrigo r@r.com

// Temos uma função que monta uma determinada mensagem a partir dos parâmetros nome e email. 
// Se quiséssemos vincular os dados da mensagem a um objeto com dados de usuários, 
// podemos usar call() passando como primeiro parâmetro o contexto a ser considerado 
// como this (no caso, objeto user) e a partir do segundo parâmetro definimos quais os argumentos.

function exibeMensagem(nome, email) {
    console.log(`usuário: ${nome}, email ${email}`)
   }
    const usuario = {
    nome: 'Mariana',
    email: 'm@m.com',
    executaFuncao: function(fn) {
      fn.call(usuario, this.nome, this.email)
      fn.apply(usuario, [this.nome, this.email]) // O método apply() funciona de forma semelhante ao call(), porém recebe a lista de argumentos em um array
    }
   }
   
   usuario.executaFuncao(exibeMensagem) //usuário: Mariana, email m@m.com