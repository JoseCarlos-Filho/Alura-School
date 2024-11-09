const btnIniciarCamera = document.querySelector("[data-video-botao]");
const campoCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const btnTirarFoto = document.querySelector("[data-tirar-foto]");
const canvas = document.querySelector("[data-video-canvas]");

btnIniciarCamera.addEventListener("click", async function() {
    const iniciarVideo = await navigator.mediaDevices
    .getUserMedia({video: true, audio: false});

    btnIniciarCamera.style.display = "none";
    campoCamera.style.display = "block";

    video.srcObject = iniciarVideo;
})