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



/*
function chamarsecao1() {
    const botao = document.getElementById('botao1');
    const div = document.getElementById('secao1');

    botao.addEventListener('click', () => {
    div.scrollIntoView({ behavior: 'smooth' });
    });
}
    
function chamarsecao2() {
    const botao = document.getElementById('botao2');
    const div = document.getElementById('secao2');

    botao.addEventListener('click', () => {
    div.scrollIntoView({ behavior: 'smooth' });
    });
}
function chamarsecao3() {
    const botao = document.getElementById('botao3');
    const div = document.getElementById('secao3');

    botao.addEventListener('click', () => {
    div.scrollIntoView({ behavior: 'smooth' });
    });
}
function chamarsecao4() {
    const botao = document.getElementById('botao4');
    const div = document.getElementById('secao4');

    botao.addEventListener('click', () => {
    div.scrollIntoView({ behavior: 'smooth' });
    });
}
function chamarsecao5() {
    const botao = document.getElementById('botao5');
    const div = document.getElementById('secao5');

    botao.addEventListener('click', () => {
    div.scrollIntoView({ behavior: 'smooth' });
    });
}
*/

/*
$(document).ready(function(){
    $(".item-menu").click(function(event){
      event.preventDefault();
      $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top
      }, 500);
    });
});

*/
