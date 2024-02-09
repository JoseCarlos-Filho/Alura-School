// Exercicio 1
let nome = "José";
let numero = 10;
let istoe = true;

let {log} = console;
log(nome, numero, istoe);

// Exercicio 2
let firstName = "Jose";
let lastName = "Carlos Rodrigues Filho";
let fullName = firstName + ' ' + lastName;
log('full name concatenado com operador +: ', fullName);
log(`full name utilizando tamplate string: ${fullName}`);

// Exercicio 3
let sujeito = "Jose";
let idade = 39;
log(`O seu nome é: ${sujeito} e sua idade é: ${idade}`);

// Exercicio 4
let qualquerCoisa = "Opa";
log(qualquerCoisa);
qualquerCoisa = "Vixi";
log(qualquerCoisa);

// Exercicio 5
let testeFora = true
if (true) {
    let testeDentro = false;
    log(`valor da variavel testeFora dentro do bloco: ${testeFora}`);
    log(`valor da variavel testeDentro dentro do bloco: ${testeDentro}`);
}
log(`valor da variavel testeFora fora do bloco: ${testeFora}`);
// log(`valor da variavel testeDentro fora do bloco: ${testeDentro}`);

// Exercicio 6
let chovendo = true;
if (chovendo != true) {
    log("Dia ensolarado não precisa de guarda-chuva!");
} else {
    log("Dia chuvoso, leve um guarda-chuva!");
}

// EXERCÍCIOS STRING
// Exercício 1
const frase = 'Conheça o mundo da programação com JavaScript';
log(`Frase em maiúsculo: ${frase.toUpperCase()}, O tramanho da frase: ${frase.length}`);

// Exercicio 2
let opa = null;
let vixi;
log(opa, vixi);

// Exercicio 3
const valor = 1;
const texto = 'Olá';
const sera = true;
log(`Numero: ${valor}, está dizendo: ${texto}, o mesmo é: ${sera}`);

// Exercicio 4
const dez = 10;
const caracteres = 'opa';
log(`conversão de número para string: ${typeof dez.toString()}`);
log(`conversão de string para numero: ${typeof Number(caracteres)}`);

// Exercicio 5
const informacao = 'Aprender a programar com JS é bom de mais!';
let usaRegex = /[!]/g;
log(`texto minúsculo: ${informacao.toLowerCase()}`);
log(`texto maiúscilo: ${informacao.toUpperCase()}`);
log(`letra na posição 9: ${informacao.charAt(9)}`);
log(`substring do texto: ${informacao.substring(0, 19)}`);
log(`texto fatiado com slice: ${informacao.slice(11, 27)}`);
const strCopy = informacao.split(' ');
log(`texto copiato e divido em substrings com split: ${strCopy[4]}`);
log(`procurando caracter usando search(): ${informacao.search(usaRegex)}`);

//  Exercícios Operadores e Expressões
//  Exercicio 1
let valorDoSaldo = 2000;
let valorDoDeposito = 1000;
let valorDoSaque = 2500;
let operacao;
log(`Operação de depóstio: Saldo ${valorDoSaldo} valor depositado ${valorDoDeposito} Saldo Atualizado ${operacao = valorDoSaldo += valorDoDeposito}`);
log(`Operação de Saque: Saldo ${operacao} Saque ${valorDoSaque} Saldo Atualizado ${operacao = valorDoSaldo - valorDoSaque}`);

// Exercicio 2
const parImpar  = 12;
log(`${parImpar % 2 === 0 ? `${parImpar} é par` : `${parImpar} é impar` }`);

// Exercicio 3
const estalogado = true;
const temPermisaao = true;
const acesso = estalogado && temPermisaao;
log(`${acesso ? `esta logado: ${acesso}` : `esta logado: ${acesso}`}`);

// Exercício 4
const carteiraHabilitacao = true;
const temMultas = false;
log(`${carteiraHabilitacao || temMultas ? `Pode dirigir` : `Não pode dirigir`}`);

// Exercício 5
const idadeMinima = 18;
const idadeCliente = 17;
log(`${idadeCliente >= idadeMinima ? `Pode adquirir o ingresso` : `Cliente com idade insuficiente!`}`);

// Exercícios de Funções
// Exercicio 1
function saudacao(nome) {
    return log(`Olá ${nome}, seja bem vindo ao mundo JS!`);
}

saudacao('José');


// Exercício 2
const maiorIdade = (idade) => {
    if (idade >= 18) {
        return log('pessoa é de maior!');
    } else {
        return log('pessoa é de menor!');
    }
}

maiorIdade(18);

// Exercício 3
const palindromo = (palavra) => {
    const palavraInvertida = palavra.split('').reverse().join('');
    if(palavra.toLowerCase() === palavraInvertida.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}

log(palindromo('ovo'));

// Exercício 4
const maiorValor = (valor1, valor2, valor3) => {
    if(valor1 > valor2 && valor1 > valor3) {
        return log(`este é o maior valor ${valor1}`);
    } else if (valor2 > valor1 && valor2 > valor3) {
        return log(`este é o maior valor ${valor2}`);
    } else {
        return log(`este é o maior valor ${valor3}`);
    }
}

maiorValor(25, 10, 2);

// Exercicio 5
const calculaPotencia = (base, expoente) => {
    let resultado = Math.pow(base, expoente);
    return log(`O calcula da potencia de base ${base} com expoente ${expoente} é : ${resultado}`);
}

calculaPotencia(4, 2);
