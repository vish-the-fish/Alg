var box1,box2;
function setup() {
  createCanvas(800,400);
  box1 = createSprite(400, 200, 50, 50);
  box2 = createSprite(200,100,70,50);
  box1.shapeColor = "green";
  box2.shapeColor = "blue";

}

function draw() {
  background(255,255,255);
  box1.x = mouseX;
  box1.y = mouseY;
  if(istouching(box1,box2)){
      box1.shapeColor = "red";
      box2.shapeColor = "yellow";
    }  else{
      box1.shapeColor = "green";
      box2.shapeColor = "blue";
    }
  drawSprites();
}
