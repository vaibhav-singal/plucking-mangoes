
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var treeObj;
var mango1, mango2, mango3, mango4, mango5;
var ground;
var boy;
var stone;
var slingShot;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

 


	engine = Engine.create();
	world = engine.world;

    treeObj = new Tree(600,275,500,500);
    mango1 = new Mango(600,100,40);
    mango2 = new Mango(700,125,40);
    mango3 = new Mango(500,170,40);
    mango4 = new Mango(600,200,40);
    mango5 = new Mango(750,200,40);
    ground = new Ground(400,500,800,10);
    boy = new Boy(175,430,100,100);
    stone = new Stone(80,350);
    slingShot = new Slingshot(stone.body,{x: 81 , y: 350});
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.run(engine);

 treeObj.display();
 boy.display();
 stone.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 ground.display();
 
 slingShot.display();

 detectCollision(stone,mango1);
 detectCollision(stone,mango2);
 detectCollision(stone,mango3);
 detectCollision(stone,mango4);
 detectCollision(stone,mango5);

 
 
}

function mouseDragged() {
  Matter.Body.setPosition(stone.body,{x: mouseX, y: mouseY});
}

function mouseReleased() {
  slingShot.fly(); 
}

function detectCollision(Lstone,Lmango){
  mangoBodyPosition=Lmango.body.position;
  stoneBodyPosition=Lstone.body.position;

  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  if(distance<=Lmango.r+Lstone.r) {
    Matter.Body.setStaic(Lmango.body, false);
  }
}

function keyPressed() {
  if(keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:235, y:420});
    launcherObject.attach(stone.body);
  }
}


