const user = {
    nome: "José",
    email: "j@j.com",
    nascimento: "2011/12/20",
    role: "estudante",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email);
    }
}

const admin = {
    nome: "Tiemi",
    email: "t@t.com",
    role: "admin",
    criarCurso() {
        console.log('Curso criado!');
    }
}

Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfos();