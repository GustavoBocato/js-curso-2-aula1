let numeroSecreto;
let numeroDeTentativas;
let numeroMaximo = 10;

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

function gerarNaturalAleatório(maxN){

    return parseInt(Math.random()*maxN + 1);

}

function novoJogo(){

    numeroSecreto = gerarNaturalAleatório(numeroMaximo);
    numeroDeTentativas = 0;

    exibirTextoNaTela('h1', 'Jogo de advinhação de um número secreto.');
    exibirTextoNaTela('p', `Entre um número natural de 1 a ${numeroMaximo}.`);

    document.querySelector('input').value = '';
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
    document.querySelector('input').setAttribute('max', `${numeroMaximo}`);

}