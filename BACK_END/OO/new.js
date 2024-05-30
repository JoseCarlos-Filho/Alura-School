// function User(nome, email) {
//     this.nome = nome;
//     this.email = email;

//     this.exibirInfos = function() {
//         return `${this.nome}, ${this.email}`
//     } 
// }

// const novoUser = new User("José", "j@j.com");
// console.log(novoUser.exibeInfos());

// function Admin(role) {
//     User.call(this, "Elaine", 't@t.com');
//     this.role = role || "estudante"
// }

// Admin.prototype = Object.create(User.prototype);
// const novoUser = new Admin("admin");
// console.log(novoUser.exibirInfos());
// console.log(novoUser.role);

const user = {
    init: function(nome, email) {
        this.nome = nome;
        this.email = email;
    },

    exibirInfo: function() {
        return this.nome
    }
}

const novoUser = Object.create(user);
novoUser.init("José", "j@j.com");
console.log(novoUser.exibirInfo());
// console.log(novoUser.exibirInfo("José"));
// console.log(user.isPrototypeOf(novoUser));

function criaUser(nome, email) {
    return {
      nome,
      email,
      exibeInfos() {
        return `${nome}, ${email}`
      }
    }
   }

const newUser = criaUser('Rodrigo', 'r@r.com')
console.log(newUser)
console.log(newUser.exibeInfos())