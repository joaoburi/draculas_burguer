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


const buttons = document.querySelectorAll('.btn');
const contents = document.querySelectorAll('.content');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const contentId = button.dataset.content;
        const currentContent = document.getElementById(contentId);

        // Remove a classe 'active' de todos os conteúdos
        contents.forEach(content => content.classList.remove('ativo'));

        // Adiciona a classe 'active' ao conteúdo clicado
        currentContent.classList.add('ativo');
    });
});

// Mostrar o primeiro conteúdo por padrão
contents[0].classList.add('ativo');

