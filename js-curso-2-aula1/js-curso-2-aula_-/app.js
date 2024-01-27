let numeroSecreto = gerarNaturalAleatório(1, 10);

exibirTextoNaTela('h1', 'Jogo de advinhação de um número secreto.');
exibirTextoNaTela('p', 'Entre um número natural de 1 a 100');

function exibirTextoNaTela(tag, texto){

    let elemento = document.querySelector(tag);
    elemento.innerHTML = texto;

}

function verificarChute() {

    let chute = document.querySelector('input').value;
    console.log(numeroSecreto == chute);

}

function gerarNaturalAleatório(minN, maxN){

    let numeroAleatorio = parseInt(Math.random()*maxN + 1);

    while(numeroAleatorio > maxN || numeroAleatorio < minN){

        numeroAleatorio = parseInt(Math.random()*maxN + 1);

    }

    return numeroAleatorio;

}