const estudante = require('../estudante.json');
const {log} = console;
const stringEstudante = JSON.stringify(estudante); // convertendo um obj JSON em string para envio de informação

// log(stringEstudante);
// log(typeof stringEstudante);

// log(stringEstudante.nome); retorna undefined

const objEstudante = JSON.parse(stringEstudante); // convertendo em objeto para manipular os dados.
log(objEstudante);
log(typeof objEstudante);

log(objEstudante.nome);

// Construindo uma função de checagem de tipos
const typeCheck = (type) => {
    const typeString = Reflect.apply(Object.prototype.toString, type, [])
    return typeString.slice(
      typeString.indexOf(' ') + 1,
      typeString.indexOf(']')
    ).toLowerCase()
  }

log(typeCheck(stringEstudante));

console.log(typeCheck([])) // array
console.log(typeCheck(null)) // null
console.log(typeCheck({})) // object
console.log(typeCheck('teste')) // string
console.log(typeCheck(123)) // number  

// Construindo uma função de clonagem profunda de arrays
// const cloneArray = (element) => {
//     const clonedArray = []
//     for (const item of element) {
//       if (typeCheck(item) === 'array') clonedArray.push(cloneArray(item))
//       else clonedArray.push(item)
//     }
//     return clonedArray
//   } 

/*
A função construtora Object em Javascript, disponibiliza um método estático capaz de congelar objetos. 
Este congelamento impede qualquer alteração, inserção ou remoção de dados dentro da estrutura congelada. 
Entretanto, esse congelamento é realizado em nível superficial.
Isso significa que a estrutura de dados interna do objeto congelado não será congelada e a mesma estará
suscetível a mudanças. 
Para resolvermos isso teremos que partir para a recursão novamente; 
a boa notícia é que já deixamos o terreno pronto anteriormente.
*/
const freeze = (data) => Object.freeze(data)

const deepClone = (element) => {
    switch (typeCheck(element)) {
      case 'array':
        return freeze(cloneArray(element))
      case 'object':
        return freeze(cloneObject(element))
      default:
        return element
    }
  }

//   solução mais enxuta
  const cloneArray = (element) => {
    if (typeCheck(element) !== 'array') return element
    return element.map(deepClone)
  }

const copyEstudante = stringEstudante;
log(stringEstudante === copyEstudante);
log(stringEstudante === cloneArray(stringEstudante));

// const novoArrayEstudante = cloneArray(stringEstudante);
// const novoObjEstudante = JSON.parse(novoArrayEstudante);
// log(novoObjEstudante);

console.log(Object.fromEntries([['nome', 'caique'], ['age', 27]]))
// { nome: 'caique', age: 27 }

const cloneObject = (element) => {
    if (typeCheck(element) !== 'object') return element
    return Object.fromEntries(
      Object.keys(element).map((key) =>
        [key, deepClone(element[key])]
      )
    )
  }

  const pessoa = [['nome', 'caique'], ['age', 27]];
  cloneObject(pessoa);
  log(pessoa);

const user = { name: 'caique', address: {country: 'Brazil', state: 'SP'} }
const clonedUser = user
console.log(user.address === clonedUser.address) // true
console.log(user.address === cloneObject(user).address) // false



  const person = {
    name: 'caique',
    age: 27,
    hobbies: [
      'movie',
      'music',
      'books'
    ]
  }
  
  console.log(deepClone(person).hobbies === person.hobbies) // false
  console.log(deepClone(person) === person) // false

const clonedPerson = deepClone(person)
console.log(clonedPerson === person) // false
console.log(clonedPerson.name) // caique

const newClonedPerson = clonedPerson
newClonedPerson.name = 'thomas'

console.log(newClonedPerson.name) // thomas
console.log(clonedPerson.name) // thomas

