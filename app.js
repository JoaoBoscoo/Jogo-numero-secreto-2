let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


exibirMensagemInicial();

function exibirNomeNaTela(tag , texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto , 'Brazilian Portuguese Female', {rate:1.2});
}

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirNomeNaTela('h1' , 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' ;
        let mensagemTentativas = `Parabéns, você descobriu o número secreto com ${tentativas} ${palavraTentativa}`
        exibirNomeNaTela('p' , mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (chute > numeroSecreto) {
            exibirNomeNaTela('p' , 'O numero secreto é menor!');
        }else{
            exibirNomeNaTela('p' , 'O numero secreto é maior!');
        }
        tentativas++ ;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
            chute = document.querySelector('input');
            chute.value = '';
        }

function exibirMensagemInicial(){
    
    exibirNomeNaTela('h1' , 'Jogo do numero secreto');
    exibirNomeNaTela('p' , 'Escolha um numero entre 1 e 10');
}

function reiniciarJogo() {
    numeroSecreto == gerarNumeroAleatorio;
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled' , true);

}