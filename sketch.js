var a,b;
function setup() {
  createCanvas(800,400);
  a= createSprite(200, 200, 50, 80);
  b= createSprite(400, 200, 80, 30);

}

function draw() {
  background("white");
  a.x=World.mouseX;
  a.y=World.mouseY;
  if(a.x-b.x<=(a.width+b.width)/2&&b.x-a.x<=(a.width+b.width)/2&&a.y-b.y<=(a.height+b.height)/2&&b.y-a.y<=(a.height+b.height)/2){
    a.shapeColor=("red");
    b.shapeColor=("red");

  }
  
  else{
    a.shapeColor=("green")
    b.shapeColor=("green")
  }
  drawSprites();

}
