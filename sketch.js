var moving, fixed
function setup() {


  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  moving = createSprite(400, 200, 50, 50);
}

function draw() {
  background(0,0,0);  
  moving.x = mouseX
  moving.y = mouseY
  if (moving.x-fixed.x<moving.width/2+fixed.width/2 && fixed.x-moving.x<moving.width/2+fixed.width/2 && moving.y-fixed.y<moving.width/2+fixed.width/2 && fixed.y-moving.y<moving.width/2+fixed.width/2
   ){
 moving.shapeColor= "white"
 fixed.shapeColor= "white"
  } else {
    moving.shapeColor= "brown"
    fixed.shapeColor= "brown"
  }
  drawSprites();
}