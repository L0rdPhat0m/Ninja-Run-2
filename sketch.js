var ninja, background_, obstacle,setting ,invisibleBackground;

function preload(){
    ninja_ = loadImage("ninja (1).png")
    obstacle_ = loadImage("obstacle (1).png")
    setting = loadImage("Game_Background.png")
}

function setup() {
    createCanvas(600,400);
    ninja = createSprite(200, 150);
    ninja.addImage(ninja_, "ninja")
    ninja.scale = 0.2
    background_ = createSprite(350, 350, 1200, 100);
    background_.velocityX = 4;
    background_.shapeColor = "green"
    obstaclesGroup  = new Group();
    invisibleBackground = createSprite(350, 350, 1200, 100)
    invisibleBackground.visible = false
    
    
}

function draw() {
    background("blue")
    if(keyDown("space") && ninja.y > 200){
        ninja.velocityY = -17;
       
    }
    
    ninja.velocityY = ninja.velocityY + 0.8
      
    if(background_.x > 600){
        background_.x = 600
      }
    if(obstaclesGroup.isTouching(ninja) || ninja.y === 400){
        ninja.destory();
    }
    text("Score : "+frameCount/1, 525, 20)
    ellipse(300, 100, 40,40);
    
    drawSprites();
    createObstacles();
}
function createObstacles(){
    if(frameCount % 160 === 0){
    obstacle = createSprite(-50, 280);
    obstacle.addImage(obstacle_, "obstacle");
    obstacle.scale = 0.2
    obstacle.velocityX = 5
    obstacle.depth=12
    obstaclesGroup.add(obstacle)
    }
    
}
