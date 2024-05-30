import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

const {log} = console;
const novoUser = new User('José', 'Carlos', 'j@j.com', '2011-12-20')
log(novoUser.nome);
novoUser.nome = 'José Carlos Rodrigues Filho';
log(novoUser.nome);
log(novoUser.sobrenome)
// log(novoUser.#montaObjUser);
// log(novoUser.exibirInfos());

// novoUser.#nome = 'Vitória'

const novoAdmin = new Admin("Elaine", "t@t.com", "1981-09-02");
// log(novoAdmin.nome);
// novoAdmin.nome = ''; // verificação caso passe uma string vazia para nome. erro em tempo de execução no metodo set na classe User.js
// log(novoAdmin.email);
// log(novoAdmin);
// log(novoAdmin.exibirInfos());

const novoDocente = new Docente('Vitória', 'Chie', 'vi@vi.com', '2011-12-20');
log(novoDocente.exibirInfos());