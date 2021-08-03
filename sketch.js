const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,pig1,log1;

var ground;

var box3,box4,pig2,log2;

var box5,log3,log4;

var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,390,1200,25);  

    box1 = new Box(700,300,70,70);
    box2 = new Box(860,300,70,70); 
    pig1 = new Pig(780,300);
    log1 = new Log(780,280,250,PI/2);

    box3 = new Box(700,200,70,70);
    box4 = new Box(860,200,70,70);
    log2 = new Log(780,180,250,PI/2);
    pig2 = new Pig(780,200);

    box5 = new Box(780,100,70,70);
    log3 = new Log(720,100,160,PI/7);
    log4 = new Log(840,100,160,-PI/7);

    bird = new Bird(100,100);
}

function draw(){
    background(0);
    //console.log(box2.body.angle);

    Engine.update(engine);

    ground.display(); 

    box1.display();
    box2.display();
    pig1.display();
    log1.display(); 
    
    box3.display();
    box4.display();
    pig2.display();
    log2.display(); 

    box5.display();
    log4.display();
    log3.display();

    bird.display();
}