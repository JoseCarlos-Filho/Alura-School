export default class User {
    // para definir uma propriedade privada deve declarar a propriedade com #
    #nome
    #sobrenome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, sobrenome, email, nascimento, role, ativo = true) {
        this.#nome = nome;
        this.#sobrenome = sobrenome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || 'estudante';
        this.#ativo = ativo;
    }

    get nome() {
        return this.#nome;
    }

    get sobrenome() {
        return this.#sobrenome;
    }

    get email() {
        return this.#email;
    }

    get nascimento() {
        return this.#nascimento;
    }

    get role() {
        return this.#role;
    }

    get ativo() {
        return this.#ativo;
    }

    set nome(novoNome) {
        if (novoNome === '') {
            throw new Error("formado não válido");
        }
        let [nome, ...sobrenome] = novoNome.split(" ");
        sobrenome = sobrenome.join(' ');
        this.#nome = nome;
        this.#sobrenome = sobrenome;
    }

    // #montaObjUser() {
    //     return ({
    //         nome: this.#nome,
    //         email: this.#email,
    //         nascimento: this.#nascimento,
    //         role: this.#role,
    //         ativo: this.#ativo
    //     })
    // }

    exibirInfos() {
        return `${this.#nome}, ${this.#sobrenome}, ${this.#email}, ${this.#nascimento}, ${this.#role}, ${this.#ativo}`
    }
}

const {log} = console

// const novoUser = new User('José', 'j@j.com', '2011-12-20')
// log(novoUser);
// log(novoUser.exibirInfos());
// log(User.prototype.isPrototypeOf(novoUser));