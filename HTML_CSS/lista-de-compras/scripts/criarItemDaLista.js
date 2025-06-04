import gerarDiaDaSemana from "../scripts/gerarDiaDaSemana.js";

const inputItem = document.getElementById("input-item");
let contador = 0;
export function criarItemDaLista() {
    
    let item = inputItem.value
    if (!item) {
        alert("Digite um item válido!");
        return;
    }

    const itemDaLista = document.createElement("li");
    const divItemDaLista = document.createElement("div");
    divItemDaLista.classList.add("lista-item-container");
    
    const itemInputCheckbox = document.createElement("input");
    itemInputCheckbox.type = "checkbox";
    itemInputCheckbox.id = "checkbox-" + contador++;

    const itemNome = document.createElement("p");
    itemNome.innerText = item;

    itemInputCheckbox.addEventListener("click", () => {
      if (itemInputCheckbox.checked) {
        itemNome.style.textDecoration = "line-through";
      } else {
        itemNome.style.textDecoration = "none"
      }  
    });

    divItemDaLista.appendChild(itemInputCheckbox);
    divItemDaLista.appendChild(itemNome);

    itemDaLista.appendChild(divItemDaLista);
    
    const dataHoraFormatada = gerarDiaDaSemana();

    const inputDiaDaSemana = document.createElement("p");
    inputDiaDaSemana.classList.add("texto-data");
    inputDiaDaSemana.innerText = dataHoraFormatada;
    itemDaLista.appendChild(inputDiaDaSemana);
    inputItem.value = '';

    return itemDaLista;
}