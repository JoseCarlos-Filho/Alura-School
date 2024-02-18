const listaEstudantes = ['João', 'Maria', 'Caio', 'Lara', 'Marjorie', 'Leo'];
// Ao utilizar splice() o primeiro parâmetro se refere ao indice do elementos
// o segundo parâmentro se refere a quantidade elementos a serem excluídos.
// o terceiro parâmetro insere o item na posição do array que tiverem seus items removidos
listaEstudantes.splice(1, 2, 'Rodrigo');

console.log(listaEstudantes);

animaisDoAquario = ['baleia', 'polvo', 'golfinho', 'tubarão']

animaisDoAquario.splice(1, 0, 'sardinha')
animaisDoAquario.splice(3, 2, 'atum')

console.log(animaisDoAquario)
