var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var obs1,obs2,obs3,obs4,obs5,obs6;

function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_collided = loadImage("trex_collided.png");
  groundImage = loadImage("ground2.png")
  nuvem = loadImage("cloud.png");
  
  obs1 = loadImage("obstacle1.png");
  obs2 = loadImage("obstacle2.png");
  obs3 = loadImage("obstacle3.png");
  obs4 = loadImage("obstacle4.png");
  obs5 = loadImage("obstacle5.png");
  obs6 = loadImage("obstacle6.png");
}
  
function setup() {
createCanvas(600, 200);

//criar um sprite de trex
trex = createSprite(50,160,20,50);
trex.addAnimation("running", trex_running);
trex.scale = 0.5;
  
//criar um sprite ground (solo)
ground = createSprite(200,180,400,20);
ground.addImage("ground",groundImage);
ground.x = ground.width /2;
ground.velocityX = -4;

invisibleGround = 200,190,400,10
 invisibleGround.visible = false
}

function draw() {
background(220);
console.log(trex.y);

//pular quando a tecla espaço for pressionada
  if (keyDown("space")) {  
  trex.velocityY = -10;
}

trex.velocityY = trex.velocityY + 0.8

if (ground.x < 0) {
  ground.x = ground.width / 2;
}

trex.collide(ground);
drawSprites();
}

function gerarNuvens(){
  if(frameCount %50 ==0){
  var r = rancom(10, 110);
  nuvem = createSprite(603, 30, 10);
  nuvem.velocityX = 4;
  nuvem.addImage("Imagem da nuvem", nuvemImg);
  }
}
 function gerarCactos(){
  if(frameCount %50 ==0){
   cacto = createSprite(600, 160, 10, 30);
   cacto.velocityX = -4;

   var r = round(random(1,6));

   switch(r){
    case 1:cacto.addImage(obs1);
    break;
    case 2:cacto.addImage(obs2);
    break;
    case 3:cacto.addImage(obs3);
    break;
    case 4:cacto.addImage(obs4);
    break;
    case 5:cacto.addImage(obs5);
    break;
    case 6:cacto.addImage(obs6);
    break;
   default: break;
   }
  }
}