
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	
}

function setup() {
	createCanvas(800, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	roof = new Roof(350,150,600,10)

	bobDiameter=100;

	bob1 = new Bob(200,200,50)
	bob2 = new Bob(300,200,50)
	bob3 = new Bob(400,200,50)
	bob4 = new Bob(500,200,50)
	bob5 = new Bob(600,200,50)

	rope1 = new Rope(bob1.body,roof.body,-bobDiameter*2,0)
  
}


function draw() {
  rectMode(CENTER);
  background(255,0,0);

  roof.display();
  bob1.display();
  bob2.display(); 
  bob3.display(); 
  bob4.display(); 
  bob5.display(); 

  drawSprites();
 
}



