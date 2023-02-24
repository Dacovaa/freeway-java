//parametros de um carro
let larguraCarro = 50;
let alturaCarro = 30;
let xCarros = [600,600,600,-100,-100,-100];
let yCarros = [40,150,265,210,320,96];
let velocidadeCarros = [3,4,3.5,4,2.9,3.5];
let colisao = [false,false]

function mostraCarros(){
for(let i = 0; i < imagemCarros.length; i += 1){
  image(imagemCarros[i],xCarros[i],yCarros[i],larguraCarro,alturaCarro)
  }
}

function movimentaCarro(){
  xCarros[0] -= velocidadeCarros[0]
  xCarros[1] -= velocidadeCarros[1]
  xCarros[2] -= velocidadeCarros[2]
  xCarros[3] += velocidadeCarros[3]
  xCarros[4] += velocidadeCarros[4]
  xCarros[5] += velocidadeCarros[5]
}
function loopCarro(){
  if (xCarros[0] < - 50){
    xCarros[0] = 600
  }
  if (xCarros[1] < - 50){
    xCarros[1] = 600
  }
  if (xCarros[2] < - 50){
    xCarros[2] = 600
  }
  if (xCarros[3] > 500){
    xCarros[3] = -100
  }
  if (xCarros[4] > 500){
    xCarros[4] = -100
  }
  if (xCarros[5] > 500){
    xCarros[5] = -100
  }
}

