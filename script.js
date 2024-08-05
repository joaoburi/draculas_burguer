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


var btn1 = document.querySelector('#btn1')
var card1 = document.querySelector('#card1')

btn1.addEventListener('click', function() {
    if(card1.style.display === 'block') {
        card1.style.display = 'none';
    } else {
        card1.style.display = 'block';
    }
});


const botoes = document.querySelectorAll('button');
const conteudos = document.querySelectorAll('.cardapio');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const idConteudo = botao.dataset.cardapio;
        const conteudoAtivo = document.getElementById(idConteudo);

        // Esconde todos os conteúdos
        conteudos.forEach(cardapio => cardapio.classList.remove('ativo'));

        // Exibe o conteúdo selecionado
        conteudoAtivo.classList.add('ativo');
    });
});


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