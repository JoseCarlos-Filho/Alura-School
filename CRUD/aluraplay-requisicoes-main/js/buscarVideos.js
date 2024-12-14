import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideos(e) {
    e.preventDefault();
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    console.log(dadosDePesquisa);
    const busca = await conectaApi.buscaVideo(dadosDePesquisa); 
    console.log(busca);
    
    const lista = document.querySelector("[data-lista]");

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)
    ));

    if (busca.length == 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existe video com este termo!</h2>`;
    }
}

const btnPesquisar = document.querySelector("[data-botao-pesquisa]");
btnPesquisar.addEventListener("click", evento => buscarVideos(evento));  