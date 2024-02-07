let nomeEstudante;
const professora = 'Elaine';
const {log} = console;
log(nomeEstudante);
log(typeof nomeEstudante);
log(typeof professora);

let telefoneEstudante = null;
log(telefoneEstudante + 3);
log(nomeEstudante + 3);
log(typeof telefoneEstudante);

log(Number("1")); // retorna o número 1 
log(Number("Alura")); // retorna NaN
log(Number(undefined)); // retorna NaN
log(Number(null)); // retorna 0


log(parseInt('4')); // retorna o número 4
log(parseInt('4.5')); // retorna o número 4

log(parseFloat('4')); // retorna o número 4
log(parseInt("4.5")); // retorna o número 4.5
log(parseInt('4.5abc')); // retorna o número 4.5


//+’45’ // retorna o número 45
//+true // retorna o número 1

log(typeof +'45'); // retorna ‘number’
log(typeof +true); // retorna ‘number’

log(String(2)); // retorna '2'
log(String(undefined)); // retorna 'undefined'
log(String(true)); // retorna 'true'

log('estudando JavaScript'.includes('Java')); // retorna true, Determina se um conjunto de caracteres pode ser encontrado dentro de uma string, retornando true ou false

log(Number(true));
log(Number(false));