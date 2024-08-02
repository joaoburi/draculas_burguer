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


/*

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