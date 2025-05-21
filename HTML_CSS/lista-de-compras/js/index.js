const inputItem = document.getElementById("input-item");
const btnAdicionar = document.getElementById("adicionar-item");
const listaDeCompras = document.getElementById("lista-de-compras");

let contador = 0;

btnAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
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

    divItemDaLista.appendChild(itemInputCheckbox);
    divItemDaLista.appendChild(itemNome);

    itemDaLista.appendChild(divItemDaLista);
    listaDeCompras.appendChild(itemDaLista);


})