// Lista de exercícios funções de Callback
const {log} = console;
// Exercício 1
log();
log('Exercício 1');
log();

const listaFrase = ['Seja', 'bem', 'vindo', 'ao', 'Alura', 'Verso!', 'Curso', 'de', 'JS'];

listaFrase.forEach((elemento, indice) => {
    log(`o indice: ${indice}, da palavra: ${elemento}`);    
})

// Exercício 2
log();
log('Exercício 2');
log();

const arrayList = [2, 4, 6, 8, -2];

function executaOperacaoEmArray(lista, soma) {
   return lista.map(soma);
   
}

function soma(num) {
   return num = num + 1;
}
const resultado = executaOperacaoEmArray(arrayList, soma);
log('Resultado :', resultado);

// Exercício 3
log();
log('Exercício 3');
log();

const arrayNumerico = [2, 4, 6, 1, 3, 5, 7, 8, 10, 9];
function existeNumero(lista, num) {
      let numero = -1;
      for (let i = 0; i < lista.length; i++) {
         if (lista[i] === num) {
            log(`Numero encontrado: ${numero = num}, possui indice: ${i}`);
            break;
         } else {
            log(`Numero não encontrado ${numero}`)
         }
      }
      // lista.map((elemento, indice) => {
      //    if (elemento === num) {
      //       log(`O indice: ${indice} é do numero: ${num}`)
      //    } else {
      //       return log(`Item não encontrado: ${-1}`);
      //    }
      // }) 
      // elemento === num ? log(`O indice: ${indice} é do numero: ${num}`) 
      //                  : log(`Item não encontrado: ${-1}`));
}
existeNumero(arrayNumerico, 1);

// Exercício 4
log();
log('Exercício 4');
log();

const nomesTurmaA = [
   'João Silva',
   'Maria Santos',
   'Pedro Almeida'
 ];
 
 const nomesTurmaB = [
   'Carlos Oliveira',
   'Ana Souza',
   'Lucas Fernandes'
 ];

const todasAsTurmas = nomesTurmaA.concat(nomesTurmaB);
log(`Todas as turmas`)
log(todasAsTurmas);
log();
let encontraAluno = 'Carlos Oliveira';
const alunoEncontrado = todasAsTurmas.find((elemento) => elemento === encontraAluno );
log(alunoEncontrado ? `Aluno encontrado: ${alunoEncontrado}` : `Aluno não encontrado`);

// Exercício 5
log();
log('Exercício 5');
log();

const numeros = [6, 9, 12, 15, 18, 21];
const arrayMultiplicado = [];
numeros.forEach((elemento, indice) => arrayMultiplicado[indice] = elemento * 3);

arrayMultiplicado.forEach((elemento) => elemento === 18 ? encontraNumero = elemento : encontraAluno = 0);
arrayMultiplicado.findIndex((valor, indice) => valor === encontraNumero ? encontraIndice = indice : encontraIndice = 0);

log(encontraIndice);
log(encontraNumero);
log('Array multiplicado por 3 :', arrayMultiplicado);
log(`O indice do numero ${encontraNumero} é : ${encontraIndice}`);
