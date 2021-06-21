
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;
var rightBin;
var leftBin;
var sideR;
var sideL;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);

	engine = Engine.create();
	world = engine.world;

	ground=new Ground(500,490,width,20);
	rightBin=new Ground(500,405,20,150);
	leftBin=new Ground(750,405,20,150);
	sideR=new Ground(0,250,1,500);
	sideL=new Ground(1000,250,1,500);

	rectMode(CENTER);
	ellipseMode(RADIUS);

	//Create the Bodies Here.
	var ball_options={
		restitution:0.9,
		frictin:0,
		density:1.2
	}
	ball=Bodies.circle(300,300,15,ball_options);
	World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(fill("#ddeef0"));
  background("#f2e59d");
  ground.show();
  rightBin.show();
  leftBin.show();
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,15);

  
  
}

function aForce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:7,y:1});
}
function bForce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:-7,y:-1});
}

function keyPressed(){
	if(keyCode==UP_ARROW){
		aForce()
	}
	if(keyCode==LEFT_ARROW){
		bForce()
	}
}


