const {log} = console;
const biblioteca = [
    { id: 1, titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", anoPublicacao: 1954 },
    { id: 2, titulo: "Dom Quixote", autor: "Miguel de Cervantes", anoPublicacao: 1605 },
    { id: 3, titulo: "1984", autor: "George Orwell", anoPublicacao: 1949 }
]

function encontrarLivroPorId(identificador) {
    return biblioteca.find((livro) => livro.id === identificador ? livro : null);
}

const livroExiste = encontrarLivroPorId(1);
log('Livro existe? : ', livroExiste);

function encontrarId(id) {
    return biblioteca.indexOf(id) === -1 ? log("encontrado", id) : log("não encontrado.", null);
}

const livroEncontrado = encontrarId(1);
log(livroEncontrado);