var groundbody,ballbody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(600, 600);

 var groundsprite= createSprite(300,580,600,20);
 groundsprite.shapeColor=color("yellow");
 
	engine = Engine.create();
	world = engine.world;
b1=new dustbin(400,520,20,100);
b2=new dustbin(460,560,120,20);
b3=new dustbin(530,520,20,100);
	//Create the Bodies Here.
	
groundbody=Bodies.rectangle(300,550,600,20,{isStatic:true});
World.add(world,groundbody);
ballbody= new ball(80,548,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  b1.display();
  b2.display();
  b3.display();
  ballbody.display();
  keypressed();
  drawSprites();
 
}
function keypressed(){
	if(keyCode===UP_ARROW)
	{
Matter.Body.applyForce(ballbody.body,ballbody.body.position,{x:20,y:-10})
	}
}



