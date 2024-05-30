import User from "./User.js";

export default class Docente extends User {
    constructor(nome, sobrenome, email, nascimento, role = 'docente', ativo = true) {
        super(nome, sobrenome, email, nascimento, role, ativo);
    }

    aprovaEstudante(estudante, curso) {
        return `estudante ${estudante} passou no curso ${curso}`
    }
}
const {log} = console;
// const novoDocente = new Docente("José", "j@j.com", "1984-11-08");
// log(novoDocente);
// log(novoDocente.exibirInfos());
// log(novoDocente.aprovaEstudante('José', "JavaScript"));