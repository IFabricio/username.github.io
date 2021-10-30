let minhaImagem = document.querySelector('img');
minhaImagem.onclick = function(){
    let meuSrc = minhaImagem.getAttribute('src');
    if (meuSrc === 'imagens/finalfantasy-xiv.png.jpg'){
        minhaImagem.setAttribute('src', 'imagens/firefox2.png.jpg');
    } else {
        minhaImagem.setAttribute('src','imagens/finalfantasy-xiv.png.jpg');
    }
}

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');
function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome.');
    localStorage.setItem('nome', meuNome);
    meuCabecalho.textContent = 'Bem vindo ao Universo de Final Fantasy, ' + meuNome;
}
if (!localStorage.getItem('nome')) {
    defineNomeUsuario();
} else {
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.textContent = 'Mozilla é legal, ' + nomeGuardado;
}

meuBotao.onclick = function () {
    defineNomeUsuario();
}
