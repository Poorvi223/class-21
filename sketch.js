var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  fixedRect2 = createSprite(1000, 200, 60, 30);
  fixedRect3 = createSprite(1000, 500, 80, 20);
  fixedRect3.velocityY = 5;

}

function draw() {
  background(0,0,0);  
 // movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  if(isTouching(movingRect,fixedRect3)){
    movingRect.shapeColor = "red";
    fixedRect3.shapeColor = "red";
  }
 else{
  movingRect.shapeColor = "green";
  fixedRect3.shapeColor = "green";
 }
 BounceOff(fixedRect2,fixedRect3);
  drawSprites();
}

