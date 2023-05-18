var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300,50,50);
  ghost=createSprite(300,300);
  ghost.addImage("ghost",ghostImg);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  ghost.scale=0.40
  climbersGroup=createGroup()
  doorsGroup=createGroup()
  
  
  
}

function draw() {
  background(200);
  if (keyDown("right_arrow")){
    ghost.x+=1
  }
  if(keyDown("left_arrow")){
    ghost.x-=1
  }
  if(keyDown("space")){
    ghost.velocityY=-10


  }
  ghost.velocityY+=0.8
  
  if(tower.y > 400){    
      tower.y = 300
    }
  if (climbersGroup.isTouching(ghost))  {
    ghost.velocityY=0
  }
  
  door_climber()
  drawSprites()
}
function door_climber(){

  if (frameCount%200==0){
    var door = createSprite(300,0)
    var climber = createSprite(300,50)
    var 
    door.addImage("door",doorImg)
    climber.addImage("climber",climberImg)
    door.velocityY=4
    climber.velocityY=4
  
    ghost.depth=3
    door.depth=1
    climber.depth=2
  climbersGroup.add(climber)
  doorsGroup.add(door)

  }

}
