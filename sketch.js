var player,player_running
var bg1
var ground
var platformSprite,platformGroup,platformImg
var groundImg
var form
var gameState=0
var level1,level2,level3,level4,level5,level6,level7,level8,level9,level10
var boss,boss1
var board

function preload(){
bg1=loadImage("sprites/bg.jpg")
groundImg=loadImage("sprites/ground.png")
platformImg=loadImage("sprites/platform.png")
player_running = loadAnimation("sprites/1.png","sprites/2.png","sprites/3.png","sprites/4.png");
}


function setup(){
createCanvas(1400,700)

ground=createSprite(600,height,1800,20)
ground.visible=true;
ground.velocityX=-5
ground.x=ground.width/2;
ground.addImage(groundImg)
ground.visible=false;

player=createSprite(200,200,30,30)
player.addAnimation("Running",player_running);
player.visible=false;

form = new Form();
form.display();
board = new Board()

platformGroup = new Group();
}


function draw(){



if(gameState===1){

  board.level();

}


if(gameState===2){
  
  form.hide();

background(bg1)

player.visible=true;
ground.visible=true;
level1.visible=false;
level2.visible=false;
level3.visible=false;
level4.visible=false;
level5.visible=false;
level6.visible=false;
level7.visible=false;
level8.visible=false;
level9.visible=false;
level10.visible=false;
boss.visible=false;
boss1.visible=false;


player.velocityY = player.velocityY + 0.8;

if(ground.x<700){
  ground.x=ground.width/2;
}

player.collide(ground);
platformGroup.collide(player);
platformGroup.collide(ground);

movement();
platform();



}
drawSprites();
}


function movement(){

  if(keyDown(UP_ARROW) ) {
    player.velocityY = -12;
  }
  
  if(keyDown(RIGHT_ARROW) ) {
    player.x = player.x+12
  }
  
  if(keyDown(LEFT_ARROW) ) {
    player.x = player.x-12
  }
}


function platform(){
  
if(frameCount%160===0){

platformSprite=createSprite(1400,height-200,random(80,120),(random(400,300)))
platformSprite.velocityX=-2
platformSprite.addImage(platformImg)

console.log("ERROR COMING")

platformGroup.add(platformSprite)
}
}