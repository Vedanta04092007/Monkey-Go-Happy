var banana,bananaImage;
var obstacle_Image,obstacle;
var background;
var score;
var player,player_running;
foodGroup = newgroup();

function preload()
{
backImage=loadImage("jungle.png");

player_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_010.png");
  

bananaImage=loadImage("banana.png");
obstacle_Image=loadImage("stone.png");  

}

function setup() {
  createCanvas(400, 400);
background.createSprite=(0,0,400,400);
background.addImage(backImage);
background.velocityX=-5;
background.x=background.width/2;
background.visible=false;
player.addImage(player_running);  
  
}

function draw() {
  background(220);
if(background.x<100){  
background.x=background.width/2;
}
if(foodGroup.isTouching(player)){
score=score+2;
foodGroup.destroyEach();  
} 
  
switch(score){
case 10: player.scale = 0.12;
       break;
       
case 20: player.scale = 0.14;
       break;
       
case 30: player.scale = 0.16;
       break;
       
case 40: player.scale = 0.18;
       break;
    default: break;     
}
  
if(obstacleGroup.isTouching(player)){
player.scale = 0.2;  
}
drawSprites();  

stroke("white");
textSize(20);
fill("white");
text("Score:  "+score, 250, 100);  
}

function food()
{
   if(frameCount % 80 === 0) {
    var banana = createSprite(400,225,10,40); 
   
   
   var rand = Math.round(random(120,200));
  banana.addImage(bananaImage);
  banana.scale=0.05;
  banana.velocityX=-5;
  banana.lifetime=134;
 foodGroup.add(banana);
   }
}




