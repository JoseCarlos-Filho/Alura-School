import User from "./User.js";

export default class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    exibirInfos() {
        return `${this.nome}, ${this.role}, ${this.ativo}`
    }

    criarCurso(nomeDoCurso, vagas) {
        return `Curso de ${nomeDoCurso} criado com ${vagas}`
    }
}

const {log} = console;

// const novoAdmin = new Admin("Elaine", "t@t.com", "1981-09-02");
// log(novoAdmin);
// log(novoAdmin.exibirInfos());
// log(novoAdmin.criarCurso("JavaScript", 20));
