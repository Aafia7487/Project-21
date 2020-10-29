var rect1,rect2;
var rect3,rect4;

function setup() {
  createCanvas(800,400);
  
  rect1=createSprite(400,0, 50, 50);
  rect2=createSprite(400,400,30,50);

  rect1.velocityY=4;
  rect2.velocityY=-5;

  rect3 = createSprite(0,200,60,60);
  rect4 = createSprite(800,200,70,70);

  rect3.velocityX=4;
  rect4.velocityX=-5;
}

function draw() {
  background(0); 
  
  bounce(rect1,rect2);
  bounceOff(rect3,rect4);

  if(isTouching(rect1,rect2)) 
    text("It is touching rect2",400,200);

  if(isTouching(rect3,rect4)) {
    rect3.shapeColor="yellow";
    rect4.shapeColor="yellow";
  }

  drawSprites();
}

