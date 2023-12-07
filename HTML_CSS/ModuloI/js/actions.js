function menuShow() {
    let menuMobile = document.querySelector('.cabecalho__mobile');
    if (menuMobile.classList.contains('abrir')) {
        menuMobile.classList.remove('abrir');
        document.querySelector('.icon').src = "./img/icons8-menu.svg";
    } else {
        menuMobile.classList.add('abrir');
        document.querySelector('.icon').src = "./img/icons8-close.svg";
    }
}