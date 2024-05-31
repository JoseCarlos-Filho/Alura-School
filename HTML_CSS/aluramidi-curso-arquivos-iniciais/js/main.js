const teclaPom = document.querySelector('.tecla_pom');
const audioPom = document.querySelector('#som_tecla_pom');

teclaPom.addEventListener("click", () => {audioPom.play()})
// teclaPom.addEventListener("click", () => {alert('tecla pom'), audioPom.play()})
// audioPom.addEventListener("click", () => {audioPom.play()})