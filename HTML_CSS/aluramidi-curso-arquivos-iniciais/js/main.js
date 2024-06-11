// const teclaPom = document.querySelector('.tecla_pom');
// const audioPom = document.querySelector('#som_tecla_pom');

// teclaPom.addEventListener("click", () => {audioPom.play()})
// teclaPom.addEventListener("click", () => {alert('tecla pom'), audioPom.play()})
// audioPom.addEventListener("click", () => {audioPom.play()})

// function tocaSomPom() {
//     document.querySelector('#som_tecla_pom').play()
// }

// document.querySelector('.tecla_pom').addEventListener("click", tocaSomPom)

const listaTeclas = document.querySelectorAll(".tecla");

listaTeclas.forEach((tecla) => {
    const somInstrumento = tecla.classList[1];
    const idAudio = `#som_${somInstrumento}`;
    tecla.addEventListener('click', () => {document.querySelector(idAudio).play()});
    // tecla.onkeydown = function () {
    //     tecla.classList.add('ativa');
    // }
    tecla.addEventListener("keydown", (evento) => {
        if (evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa');
        }
    });
    tecla.addEventListener("keyup", (evento) => {
        if (evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.remove('ativa');
        }
    });
})

// function tocaSom(teclas) {
//     teclas.forEach((tecla) => {
//         const somInstrumento = tecla.classList[1];
//         const idAudio = `#som_${somInstrumento}`;
//         // console.log(idAudio);
//         tecla.addEventListener('click', () => {document.querySelector(idAudio).play()});
//         // if (tecla === document.querySelector('.tecla_pom')) {
//         //     return tecla.addEventListener("click", () => {document.querySelector('#som_tecla_pom').play()})
//         // //    document.querySelector('#som_tecla_pom').play()
//         // }
//     })
// }

// tocaSom(listaTeclas);


/* 

----------- Código para o teclado de telefone ----------------

*/

// const listaTeclas = document.querySelectorAll('input[type=button]');

// console.log(listaTeclas);

// listaTeclas.forEach((tecla) => {
//   tecla.addEventListener('click', () => {
//     const inputTel = document.querySelector('input[type=tel]');
//     inputTel.value += tecla.value;
//   })
// })
const tecladoNumerico = document.querySelectorAll('input[type=button]');

for(let indice = 0; indice < tecladoNumerico.length; indice++) {
  const tecla = tecladoNumerico[indice];
  tecla.addEventListener('click', () => {
    let displayNumeros = document.querySelector('input[type=tel]');
    displayNumeros.value += tecla.value;
  });
  tecla.addEventListener('keydown', (evento) => {
    if(evento.code === 'Enter' || evento.code === 'space') {
      tecla.classList.add('ativa')
    }
  });
  tecla.addEventListener('keyup', (evento) => {
    if(evento.code === 'Enter' || evento.code === 'space') {
      tecla.classList.remove('ativa');
    }
  });
}
