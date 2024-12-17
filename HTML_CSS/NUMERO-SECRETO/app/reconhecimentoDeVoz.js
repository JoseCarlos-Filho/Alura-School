const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const elementoChute = document.querySelector("#chute")
let box = document.querySelector(".box");
recognition.lang = 'pt-Br';
recognition.start();


recognition.addEventListener('result', onSpeak);

function onSpeak(event) {
    // console.log(event.results[0][0].transcript);
    console.log(event.target.lang);
    let chute = event.results[0][0].transcript;
    exibeChuteNaTela(chute);
    // let resultVoice = event.results[0][0].transcript;
    // box.innerHTML = `${resultVoice}`;
    verificaSeOChutePossuiUmValorValido(chute);
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener("end", () => recognition.start());