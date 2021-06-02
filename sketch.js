const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, block1, block2, block3, block4, block5, block6, block7, block8;
var block9, block10, block11, block12, block13, block14, block15, block16, block17, block18, block19, block20, block21, block22, block23, block24, block25;
var block26, block27,block28, block29, block30, block31, block32, block33, block34;
var stand1, stand2;
var polygon, polygonIng;
var slingShot;








function preload() {
   polygonImg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

ground = new Ground(600,390,1200,10);
stand1 = new Stand(390, 300, 250, 10);
stand2 = new Stand(700, 200, 200, 10);

block1 = new Block(330, 275, 30, 40);
block2 = new Block(360, 275, 30, 40);
block3 = new Block(390, 275, 30, 40);
block4 = new Block(420, 275, 30, 40);
block5 = new Block(450, 275, 30, 40);
block6 = new Block(480, 275, 30, 40);
block7 = new Block(300, 275, 30, 40);

block8 = new Block(315, 235, 30, 40);
block9 = new Block(345, 235, 30, 40);
block10 = new Block(375, 235, 30, 40);
block11 = new Block(405, 235, 30 ,40);
block12 = new Block(435, 235, 30, 40);
block13 = new Block(465, 235, 30, 40);

block14 = new Block(330, 195, 30, 40);
block15 = new Block(360, 195, 30, 40);
block16 = new Block(390, 195, 30 ,40);
block17 = new Block(420, 195, 30, 40);
block18 = new Block(450, 195, 30, 40);

block19 = new Block(345, 155, 30, 40);
block20 = new Block(375, 155, 30, 40);
block21 = new Block(405, 155, 30, 40);
block22 = new Block(435, 155, 30, 40);

block23 = new Block(360, 115, 30, 40);
block24 = new Block(390, 115, 30, 40);
block25 = new Block(420, 115, 30 ,40);

block26 = new Block(375, 75, 30, 40);
block27 = new Block(405, 75, 30, 40);

block28 = new Block(390, 35, 30, 40);

block29 = new Block(670, 175, 30, 40);
block30 = new Block(700, 175, 30, 40);
block31 = new Block(730, 175, 30 ,40);

block32 = new Block(685, 135, 30, 40);
block33 = new Block(715, 135, 30, 40);

block34 = new Block(700, 95, 30, 40);



 polygon = Bodies.circle(50,200,20); 
World.add(world,polygon); 
slingShot = new SlingShot(this.polygon,{x:100,y:200});


}

function draw(){
    background("Yellow");
    Engine.update(engine);
   ground.display();
   stand1.display();
   stand2.display();
   fill ("lightblue");
   block1.display();
   block2.display();
   block3.display();
   block4.display();
   block5.display();
   block6.display();
   block7.display();
  fill ("green");
   block8.display();
   block9.display();
   block10.display();
   block11.display();
   block12.display();
   block13.display();
   fill("red");
   block14.display();
   block15.display();
   block16.display();
   block17.display();
   block18.display();
   fill("purple");
   block19.display();
   block20.display();
   block21.display();
   block22.display();
   fill("cyan");
   block23.display();
   block24.display();
   block25.display();
   fill("teal")
   block26.display();
   block27.display();
   fill("lightgreen")
   block28.display();
   fill("blue")
   block29.display();
   block30.display();
   block31.display();
  fill("red")
   block32.display();
   block33.display();
   fill("lightgreen")
   block34.display();


   imageMode(CENTER);
   image(polygonIng,polygon.position.x, polygon.position.y, 40, 40 );
   slingShot.display();
   
}

function mouseDragged(){
   
}


function mouseReleased(){

}
