
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground,paperImage,dustbinImage,paper;

function preload()
{
 paperImage=loadImage("paper.png")	
 dustbinImage=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	ball=new Ball(100,600,20)
	 ground=new Ground()
	 side3=new Dustbin(545,640,80,20)
	 side1=new Dustbin(500,600,20,100)
	 side2=new Dustbin(580,600,20,100)
	 paper=createSprite(550,600,5,5)
	 paper.addImage(dustbinImage)
	 paper.scale=0.4
	 



	Engine.run(engine);
  
}


function draw() {
  
  background("white");

 

ground.display()

ball.display() 
side1.display()
side2.display()
side3.display() 
drawSprites()


}

function keyPressed()
{
	if(keyCode===UP_ARROW)
{
	Matter.Body.applyForce(ball.body,ball.body.position,{x:20,y:-10.3})
}
 
}

