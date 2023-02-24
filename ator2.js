function movimentaAtor2(){
  if (keyIsDown(UP_ARROW)){
    yAtor[1] -= 3
  }
  if (keyIsDown(DOWN_ARROW)){
    if (podeSeMover2()){
    yAtor[1] += 3
    }
  }
}
function verificaColisaoP2(){
 for(let i = 0; i < imagemCarros.length; i += 1){
   colisao[1] = collideRectCircle(xCarros[i],yCarros[i],larguraCarro,alturaCarro,xAtor[1],yAtor[1],15)
   if (colisao[1]){
        somColidiu.play();
       voltaAtorInimigo();
       tiraPontoInimigo();
    }
  }
}
function voltaAtorInimigo(){
  yAtor[1] = 366
}
function marcaPontoInimigo(){
  if(yAtor[1] < 15){
    pontos[1] += 1
    somPontos.play();
    voltaAtorInimigo();
  }
}
function tiraPontoInimigo(){
  if(pontos[1] > 0){
    pontos[1] -=1
  }
}
function podeSeMover2(){
  return yAtor[1] < 366;
}