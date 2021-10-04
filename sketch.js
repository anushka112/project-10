var shipImg, seaImg , sea, ship
function preload(){
seaImg = loadImage("sea.png");
shipImg = loadAnimation("ship1.png 1" , "ship2.png 1");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(4050,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale = 0.3;
  ship = createSprite(130,200,30,30);
  ship.addAnimation("moving ship", shipImg);
  ship.scale = 0.5;
  
}

function draw() {
  background("blue");
 sea.velocityX = -3;
 if(sea.x<0){
   sea.x = sea.width/8;
 }
 drawSprites()
}