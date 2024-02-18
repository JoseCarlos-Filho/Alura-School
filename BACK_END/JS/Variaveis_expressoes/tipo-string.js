const estudande = "José";
const docente = 'Elaine';
const cumprimento = "Nosso lema é 'estudar bastante!'";
const citacao = `Vi diz: "Nosso lema é 'estudar bastante!'"`;

const {log} = console;
log(cumprimento);
log(citacao);

// template string
log(`o estudante chama ${estudande}`);

const senha = 'SenhaSegura123' + estudande.toUpperCase();
log(senha);

// Unicode
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)
