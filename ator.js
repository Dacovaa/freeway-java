//parametros dos atores
let xAtor = [100,400] 
let yAtor = [366,366] 
let comprimentoAtor = [30,30]
let alturaAtor = [30,30]
let pontos = [0,0]
let traco = "-";

function mostraAtor(){
  for(let i = 0; i < imagemAtores.length; i += 1){
    image(imagemAtores[i],xAtor[i],yAtor[i],comprimentoAtor[i],alturaAtor[i]) 
  }
}

function movimentaAtor(){
  if (keyIsDown(87)){
    yAtor[0] -= 3
  }
  if (keyIsDown(83)){
    if (podeSeMover()){
    yAtor[0] += 3
    }
  }
}
function mostraMeuPonto(){
  textSize(25)
  fill(color(255,255,0))
  text(pontos[0],210,27)
  textSize(25)
  text(pontos[1],290,27)
  textSize(50)
  text(traco,248,30)
}
function marcaMeuPonto(){
  if(yAtor[0] < 15){
    pontos[0] += 1
    somPontos.play();
    voltaMeuAtor();
  }
}
function tiraMeuPonto(){
  if(pontos[0] > 0){
    pontos[0] -=1
  }
}

function verificaColisaoP1(){
 for(let i = 0; i < imagemCarros.length; i += 1){
   colisao[0] = collideRectCircle(xCarros[i],yCarros[i],larguraCarro,alturaCarro,xAtor[0],yAtor[0],15)
   if (colisao[0]){
        somColidiu.play();
       voltaMeuAtor();
       tiraMeuPonto();
   }
 }
}
function voltaMeuAtor(){
  yAtor[0] = 366
  }
function podeSeMover(){
  return yAtor[0] < 366;
}