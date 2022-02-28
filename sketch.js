
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	var options = {restitution:0.3,friction:0, density:1.2}
	ball = Bodies.circle(260,100,20,options)
	World.add(world,ball)

	//Create the Bodies Here.
	ground = new Ground(1600/2,670,width,20)
	leftside = new Ground(1100,600,20,120)
	rightside = new Ground(1300,600,20,120)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  ground.display()
  leftside.display()
  rightside.display()
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}

