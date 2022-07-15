const X = "X";
const O = "O";
let jogador = X;
let checarTurno = true;
let empate = 0;
let vencedor = false;


function selecionarArea(posicaoLinha, posicaoColuna){
vezJogador();

    if (checarTurno == false){
        desenharSimbolo(X, posicaoLinha, posicaoColuna);
        marcarJogadorAtivo(O);
    }
    if (checarTurno == true){
        desenharSimbolo(O, posicaoLinha, posicaoColuna);
        marcarJogadorAtivo(X);
    }
}

function reiniciarJogo() {
    location.reload();
}


function vezJogador(){
    marcarJogadorAtivo("X");

    turno = checarTurno ? X : O;
    console.log(turno);
    checarTurno = !checarTurno;
    console.log(checarTurno);

    if (checarTurno == false) {
        marcarJogadorAtivo(O);
        jogador = X;
    }
    if (checarTurno == true) {
        marcarJogadorAtivo(X);
        jogador = O;
    }
}

function MostrarJogador(posicaoLinha, posicaoColuna) {
    if (jogador == X) {
        desenharSimbolo(X, posicaoLinha, posicaoColuna);
        empate++;
    }
    if (jogador == O) {
        desenharSimbolo(O, posicaoLinha, posicaoColuna);
        empate++;
    }
}
