
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground , dbn,paperobject;
var img

function preload()
{
	img = loadImage ("dustbingreen.png")
}

function setup() {
	createCanvas(1400,700);


	engine = Engine.create();
	world = engine.world;

  dbn = new dustbin (1200,650)

	ground= new rect1(width/2,690,width,20)
	Engine.run(engine);

	paperObject=new paper(200,450,40);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  paperObject.display();
  ground.display();
  dbn .display();
  
  //image (img,dbn.position.x,dbn.position.y)

  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  
  }
}

