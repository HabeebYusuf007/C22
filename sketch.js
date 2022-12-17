const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;

var backgroundImage;
var tower, towerImg;

var cannon, angle;

function preload() {
 backgroundImage = loadImage("./assets/background.gif")
 towerImg = loadImage("./assets/tower.png")
 
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
 options={
 isStatic:true
 }

 ground= Bodies.rectangle(0,height-1, width*2,1,options);
 World.add(world,ground);

 tower = Bodies.rectangle(160,350,160,310,options)
 World.add(world,tower)
 
 angle = 18;
 cannon = new Cannon(50, 90, 130, 100, angle)

}

function draw() {
  image(backgroundImage,0,0,1200,600)
  Engine.update(engine);
 
 rect(ground.position.x, ground.position.y,width*2,1);

 push()
 imageMode(CENTER)
 image(towerImg,tower.position.x, tower.position.y,160,310)
 pop()

 cannon.display()
   
}
