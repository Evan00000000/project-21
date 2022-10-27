
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
		restitution : 0.3,
		friction : 0,
		density : 1.2,
	}

	ball = Bodies.circle(100,100,20,ball_options)
	World.add(world,ball)

	ground = new Ground(800,690,1600,20)
	leftSide = new Ground(1100,600,20,180)
	rightSide = new Ground(1350,600,20,180)

	Engine.run(engine);
	rectMode(CENTER);
	ellipseMode(CENTER);
}


function draw() {
  background(0);

  ellipse(ball.position.x,ball.position.y,20,20);
  ground.display();
  leftSide.display();
  rightSide.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x : 85, y : -85});
	}
}