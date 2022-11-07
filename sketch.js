var path,boy,boyRunning, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){

  pathImg = loadImage("path.png");

   boyRunning = loadAnimation ("Runner-1.png","Runner-2.png");

}

function setup(){
  
  createCanvas(400,400);

 path = createSprite(200,200);

path.addImage(pathImg)

path.velocityY = 0.3
path.scale = 1.2;


boy = createSprite()
boy.addAnimation("running",boyRunning);
boy.scale=0.08;
  

leftBoundary=createSprite(0,0,100,800);
leftBoundary.show = false

rightBoundary=createSprite(410,0,100,800);
rightBoundary.show = false
}

function draw() {
  background(0);
  path.velocityY = 4;
  

    boy.x = mouseX
    boy.y = mouseY
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(rightBoundary);
  boy.collide(leftBoundary);


  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
