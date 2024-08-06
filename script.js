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
var btn2 = document.querySelector('#btn2')
var card2 = document.querySelector('#card2')

btn2.addEventListener('click', function() {
    if(card2.style.display === 'block') {
        card2.style.display = 'none';
    } else {
        card2.style.display = 'block';
    }
});


function mostrarCardapio1() {
    let cardapio = document.querySelector('#card1')
    if (cardapio.classList.contains('aparece')) {
        cardapio.classList.remove('aparece');
        
    } else {
        cardapio.classList.add('aparece');
        
    }
}






https://www.youtube.com/watch?v=1w5SNKwBDKo



function mostrarDiv(card) {
    // Esconde todas as divs
    const divs = document.querySelectorAll('div');
    divs.forEach(div => {
      div.style.display = 'none';
    });

    // Mostra a div específica
    const div = document.getElementById('div' + card);
    div.style.display = 'block';
  }

function mostrarCardapio() {
    let burgue1 = document.querySelector('#teste1')
    const fazia = document.querySelector('#cardapio1')
    if (fazia.classList.contains('aparece')) {
        fazia.classList.remove('aparece');

    } else {
        fazia.classList.add('aparece');
    }
}

/*
const cardapio = document.querySelector('#cardapio');
const btnTeste = document.getElementById('teste');

btnTeste.addEventListener('click', () => {
    const items = cardapio.querySelectorAll('.pratos');
    const itemsArray = Array.from(items);

    
    itemsArray.sort(() => Math.random() - 0.5);


    cardapio.innerHTML = '';
    itemsArray.forEach(item => cardapio.appendChild(item));

});
*/