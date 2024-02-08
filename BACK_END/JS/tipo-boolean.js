const estudante = 'Jose';
const estaAprovado = true;
const {log} = console;

if(estaAprovado) {
    log('Aprovado, boas festas!');
} else {
    log('Reprovado, verifique a dependência!');
}

if(estudante === 'Jose') {
    log(`Bem vindo ${estudante}`);
} else {
    log('se identifique!');
}