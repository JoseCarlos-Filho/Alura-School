const containerVideos = document.querySelector(".videos__container");

async function buscarEMostarVideos() {
    try {
        const busca = await fetch("http://localhost:3000/videos");
        const listaVideos = await busca.json();
        listaVideos.forEach(video => {
        if(video.categoria == "") {
            throw new Error("Erro ao carregar videos: video não possui categoria");
        }    
        containerVideos.innerHTML += `
            <li class="videos__item">
                <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
                <div class="descricao-video">
                    <img class="img-canal" src="${video.imagem}" alt="Logo do canal">
                    <h3 class="titulo-video">${video.titulo}</h3>
                    <p class="titulo-canal">${video.descricao}</p>
                </div>
            </li>
        `;    
        })
        
    } catch(error) {
        containerVideos.innerHTML = `<p style="color: red;"> Houve erro ao carregar os videos: ${error}.</p>`;
    }
}

buscarEMostarVideos();

const barraDePesquisa = document.querySelector(".pesquisar__input");
barraDePesquisa.addEventListener("input", filtrarPesquisa);

function filtrarPesquisa() {
    const videos = document.querySelectorAll(".videos__item"); 
    const valorDaPesquisa = barraDePesquisa.value.toLowerCase();
    videos.forEach(video => {
        const tituloVideo = video.querySelector(".titulo-video").textContent.toLocaleLowerCase();
        video.style.display = valorDaPesquisa 
        ? (tituloVideo.includes(valorDaPesquisa) 
        ? "block" : "none") : "block";
    })
}
    // if(barraDePesquisa != "") {
    //     listaVideosBusca.forEach((video)  => video.titulo.toLowerCase() == barraDePesquisa.value.toLowerCase() 
    //     ? video.style.display = "none" : video.style.display = "block");
    // } else {
    //     video.style.display = "block";
    // }



// function filtrarPesquisa() {
//     const videos = document.querySelectorAll(".videos__item");
//     if(barraDePesquisa.value != "") {
//         for(let video of videos) {
//             let titulo = video.querySelector(".titulo-video").textContent.toLowerCase();
//             let valorPesquisa = barraDePesquisa.value.toLowerCase();

//             if(!titulo.includes(valorPesquisa)) {
//                 video.style.display = "none";
//             } else {
//                 video.style.display = "block";
//             }
//         }
//     } else {
//         video.style.display = "block";
//     }
// }
