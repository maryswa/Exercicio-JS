//Usando a funçao map com redianos.
//Usando a funçao map para mapear o angulo de rotaçao em radianos
//implementado a velocidade e a aceleraçao angular
//A funçao map usa cinco parametros
//Valor inicial (posiçao atual do mause) e um intervelo inicial(posiçao 0 e width da tela)e um intervalo final (edido em radianos).

let angulo =0;
let anguloV =0;
let anguloA =0;

function setup() {
  createCanvas(400, 400);
  angleMode(RADIANS);
}

function draw() {
  let anguloA = map(mouseX,0,width,-0.01,0.01);
  
  background(14,83,20);
  noStroke();
  fill(13,200,16);
  rectMode(CENTER);
  translate(200,200);
  rotate(angulo);
  rect(0,0,256,32);
  
  angulo += anguloV;
  anguloV += anguloA;
}