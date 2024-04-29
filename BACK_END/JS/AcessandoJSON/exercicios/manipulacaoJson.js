const {log} = console;
const dadosAnimais = require('./animais.json');

log(dadosAnimais);
const stringAnimais = JSON.stringify(dadosAnimais.animais);
const objAnimais = JSON.parse(stringAnimais);

log(objAnimais);

const novoAnimal = {
    "id" : 4,
    "nome": "Onça",
    "Tipo": "Mamífero",
    "habitat": "Floresta Tropical"
}

objAnimais.push(novoAnimal);
log();
log('Novo animal adicionado:')
log(objAnimais)


log();
log('Modificando o HABITAT do animal com indice 2');
const modificaHabitat = objAnimais.find(animal => animal.id === 2);
if(modificaHabitat) {
    modificaHabitat.habitat = "Pólo Norte";
}
log(modificaHabitat);
log();

log('Removendo animal de id igual 3');
const removeAnimal = objAnimais.findIndex(animal => animal.id === 3);
if(removeAnimal !== -1) {
    objAnimais.splice(removeAnimal, 1);
}

log(objAnimais);
log();
const novaStringAnimais = JSON.stringify (objAnimais, null, 2);
log('Objeto animais após operações:')
log(novaStringAnimais)