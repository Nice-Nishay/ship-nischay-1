var ship ,ship_running;
var sea 

function preload(){
ship_running = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
sea = loadimage(sea.png)
}


function setup(){
  createCanvas(600,200);
  ship = createSprite(50,16,20,50)
  ship.addAnimation("running",ship_running)
  ship.scale = 5
  sea = createSprite(200,180,400,20)
  sea.addimage(sea.png)
  sea.velocityX=-7

}

function draw() {
  background("blue");
drawSprites ()















}