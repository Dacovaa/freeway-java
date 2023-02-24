
function setup() {
  createCanvas(500, 400);
  somTrilha.loop();
}

function draw() {
  background(imagemEstrada);
  mostraAtor();
  mostraCarros();
  movimentaAtor();
  movimentaAtor2();
  movimentaCarro();
  loopCarro();
  verificaColisaoP1();
  verificaColisaoP2();
  mostraMeuPonto();
  marcaMeuPonto();
  marcaPontoInimigo();
}
