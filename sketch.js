const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5, bob6;
var chain1, chain2, chain3, chain4, chain5, chain6;
var roof;

//function preload()
//{
	//}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

   bob1 = new Bob(350,400,50);
   bob2 = new Bob(400,400,50);
   bob3 = new Bob(450,400,50);
   bob4 = new Bob(500,400,50);
   bob5 = new Bob(550,400,50);
   bob6 = new Bob(600,400,50);
   chain1 = new Chain(bob1.body,{x:350,y:100});
   chain2 = new Chain(bob2.body,{x:400,y:100});
   chain3 = new Chain(bob3.body,{x:450,y:100});
   chain4 = new Chain(bob4.body,{x:500,y:100});
   chain5 = new Chain(bob5.body,{x:550,y:100});
   chain6 = new Chain(bob6.body,{x:600,y:100});
   roof = new Roof(470,100,350,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,255,255);
  
  chain1.display();
	chain2.display();
	chain3.display();
	chain4.display();
	chain5.display();
	chain6.display();
    bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	bob6.display();
	roof.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
       Matter.Body.applyforce(bob1.body,bob1.position,{x:-30,y:150});

	}
}

