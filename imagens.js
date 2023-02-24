// carrega imagens e sons
let imagemAtor1;
let imagemAtor2;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;
let imagemCarro4;
let imagemCarro5;
let imagemCarro6;
let imagemEstrada;

let somColidiu
let somPontos
let somTrilha

function preload(){
  imagemAtor1 = loadImage("imagens/ator-1.png")
  imagemAtor2 = loadImage("imagens/Ator-2.png")
  imagemEstrada = loadImage("imagens/estrada.png")
  imagemCarro1 = loadImage("imagens/carro-1.png")
  imagemCarro2 = loadImage("imagens/carro-2.png")
  imagemCarro3 = loadImage("imagens/carro-3.png")
  imagemCarro4 = loadImage("imagens/carro-4.png")
  imagemCarro5 = loadImage("imagens/carro-5.png")
  imagemCarro6 = loadImage("imagens/carro-6.png")
  somColidiu = loadSound("sons/colidiu.mp3")
  somPontos = loadSound("sons/pontos.wav")
  somTrilha = loadSound("sons/trilha.mp3")
  
  imagemCarros = [imagemCarro1,imagemCarro2,imagemCarro3,imagemCarro4,imagemCarro5,imagemCarro6]
 imagemAtores = [imagemAtor1,imagemAtor2]
}