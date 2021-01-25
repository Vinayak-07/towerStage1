const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var ground1,ground2,ground3;
var bluebox1,bluebox2,bluebox3,bluebox4,bluebox5;
var redbox1,redbox2,redbox3,redbox4;
var lightbluebox1;
var blue1,blue2,blue3,blue4,blue5,blue6,blue7;
var red1,red2,red3,red4,red5;
var bluckblock1,bluckblock2,bluckblock3;
var brown1;
var  con1,ball;
var polimg;
function preload(){
  polimg = loadImage("polygon.png");
}
function setup(){
    createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(600,590,1250,20);
    ground2 = new Ground(430,380,340,5);
    ground3 = new Ground(890,290,250,5);

    bluebox1 = new BlueBox(830,285,35,50);
    bluebox2 = new BlueBox(860,285,35,50);
    bluebox3 = new BlueBox(890,285,35,50);
    bluebox4 = new BlueBox(920,285,35,50);
    bluebox5 = new BlueBox(950,285,35,50);

    redbox1 = new RedBox(860,220,30,50);
    redbox2 = new RedBox(890,220,30,50);
    redbox3 = new RedBox(920,220,30,50);
    //redbox4 = new RedBox(930,220,30,50);
    lightbluebox1 = new lightbluebox(890,155,30,50);

    blue1 = new lightbluebox(340,370,35,50);
    blue2 = new lightbluebox(365,370,35,50);
    blue3 = new lightbluebox(380,370,35,50);
    blue4 = new lightbluebox(415,370,35,50);
    blue5 = new lightbluebox(435,370,35,50);
    blue6 = new lightbluebox(455,370,35,50);
    blue7 = new lightbluebox(475,370,35,50);
    
    red1 = new RedBox(345,335,35,50);
    red2 = new RedBox(370,335,35,50);
    red3 = new RedBox(405,335,35,50);
    red4 = new RedBox(440,335,35,50);
    red5 = new RedBox(468,335,35,50);
    
    bluckblock1 = new BlueBox(370,300,35,50);
    bluckblock2 = new BlueBox(405,300,35,50);
    bluckblock3 = new BlueBox(440,300,35,50);

    brown1 = new Brown(405,265,35,50);

    ball = Bodies.circle(50,200,20);
    World.add(world,ball);
    
    con1 = new launcher(ball,{x:130,y:265});
    //con1 = new launcher(); 
    /*var render = Render.create({
		element: document.body,
		engine : engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });*/
    Engine.run(engine);
    //Render.run(render);
}

function draw(){
    background("white");
    
    ground1.display();
    ground2.display();
    ground3.display();

    bluebox1.display();
    bluebox2.display();
    bluebox3.display();
    bluebox4.display();
    bluebox5.display();

    redbox1.display();
    redbox2.display();
    redbox3.display();
    
    lightbluebox1.display();
    blue1.display();
    blue2.display();
    blue3.display();
    blue4.display();
    blue5.display();
    blue6.display();
    blue7.display();

    red1.display();
    red2.display();
    red3.display();
    red4.display();
    red5.display();

    bluckblock1.display();
    bluckblock2.display();
    bluckblock3.display();

    brown1.display();
    //ellipseMode(RADIUS);
    //ellipse(ball.position.x,ball.position.y,20);

    imageMode(CENTER);
    image(polimg,ball.position.x,ball.position.y,60,60);
    con1.display();
}

function mouseDragged()
{
	Matter.Body.setPosition(ball, {x : mouseX, y : mouseY}); 
}

function mouseReleased()
{
	con1.fly();
    
}
