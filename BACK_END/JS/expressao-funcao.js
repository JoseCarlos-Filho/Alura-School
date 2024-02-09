const estudanteReprovou = function(notaFinal, faltas) {
    if (notaFinal < 7 && faltas > 4) {
        return true;
    } else {
        return false;
    }
}

console.log(estudanteReprovou(6, 5));
console.log(estudanteReprovou(10, 2));

// Arrow function
const novoUsuario = (usuario, saudacao) => {
    const {log} = console;
    return log(`Olá ${usuario}, ${saudacao}`);
}

novoUsuario('José', 'Seja bem-vindo ao JavaScript');