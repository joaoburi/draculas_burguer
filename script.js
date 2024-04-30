function menuAparecer() {
    let menuMobile = document.querySelector('.mobile-menu')
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icone').src = "imagens/icone1.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icone').src = "imagens/icone3.png";
    }
}