let numeroSecreto;
let numeroDeTentativas;

novoJogo();

function exibirTextoNaTela(tag, texto){

    let elemento = document.querySelector(tag);
    elemento.innerHTML = texto;

}

function verificarChute() {

    let chute = document.querySelector('input').value;
    numeroDeTentativas++;
    
    if(chute == numeroSecreto){

        let palavraTentativa = numeroDeTentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTextoNaTela('h1', `Você advinhou o número! Em ${numeroDeTentativas} ${palavraTentativa}.`);
        exibirTextoNaTela('p', 'Parabéins sindi!');

        document.getElementById('reiniciar').removeAttribute('disabled');

    } else{

        exibirTextoNaTela('h1', 'Você errou o número :(');
        document.querySelector('input').value = '';

        if(chute > numeroSecreto){

            exibirTextoNaTela('p', 'Tente um número menor.');

        }else{

            exibirTextoNaTela('p', 'Tente um número maior.');

        }

    }

}

function gerarNaturalAleatório(minN, maxN){

    let numeroAleatorio = parseInt(Math.random()*maxN + 1);

    while(numeroAleatorio > maxN || numeroAleatorio < minN){

        numeroAleatorio = parseInt(Math.random()*maxN + 1);

    }

    return numeroAleatorio;

}

function novoJogo(){

    numeroSecreto = gerarNaturalAleatório(1, 10);
    numeroDeTentativas = 0;

    exibirTextoNaTela('h1', 'Jogo de advinhação de um número secreto.');
    exibirTextoNaTela('p', 'Entre um número natural de 1 a 10');

    document.querySelector('input').value = '';
    document.getElementById('reiniciar').setAttribute('disabled', 'true');

}