var monkey , ground, monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;
var survivalTime;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  foodGroup = new Group()
  obstacleGroup = new Group()
 }

function setup() {
  createCanvas(600,400);
  score = 0;
  survivalTime = 0
  
  monkey = createSprite(50,290,10,10);
  monkey.addAnimation("monkey_running", monkey_running);
  monkey.scale = 0.12

  ground = createSprite(200,300,600,10);
  ground.velocityX = -4;
  console.log(ground.x)
  }


function draw() {
 background("turquoise");

 if (keyDown("space")&& monkey.y>=100){
   monkey.velocityY = -10;
   }
  monkey.velocityY = monkey.velocityY+ 2; 
  
  if (ground.x < 300)  {
    ground.x = ground.width/2
    }
  monkey.collide(ground)
  
  if (frameCount % 120 ===0){
    food();
  }
  
  if (frameCount %150 === 0){
    obstacle();
  }
  
  if (monkey.isTouching(foodGroup)){
    score = score+2;
    foodGroup.destroyEach();
  }
  
  drawSprites();

fill("white");
text("Score :" + score,500,50);
  
fill("black");
var survivalTime= Math.round(getFrameRate()/1)
text("SurvivalTime:"+ survivalTime,350,50)
}

function food (){
  
  banana = createSprite(600,200,10,10);
  banana.y = Math.round(random(100,220),10,10)
  banana.addImage(bananaImage);
  banana.scale = 0.12;
  banana.velocityX = -4;
  banana.lifetime = 150;
  foodGroup.add(banana)
  }

function obstacle(){
  obstacles = createSprite(600,280,10,10);
  
  obstacles.addImage(obstacleImage);
  obstacles.scale = 0.15 ;
  obstacles.velocityX = -4;
  obstacles.lifetime = 150;
  obstacleGroup.add(obstacles)
}


