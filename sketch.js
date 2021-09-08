
var snow,snowImg
var backGroundImg

function preload() {
  snowImg = loadImage("snow4.webp");
  backGroundImg = loadImage("snow2.jpg");
}
function setup() {
  createCanvas(1000,1000);
 
}

function draw() {
  background(backGroundImg);  
  drawSprites();
  createsnow();
}

function createsnow(){
  if(frameCount%8===0){
  snow = createSprite(random(0,1000), 0, 50, 50);
  snow.velocityX = -5;
  snow.velocityY = 10;
  snow.addImage(snowImg);
  snow.scale = 0.1;
  }
}