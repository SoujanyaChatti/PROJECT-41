const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



var maxDrops = 100000;
var drops = [];
var thunder, thunder2, thunder3;
var umbrella;

function preload(){
 babybatman = loadImage("babybatman.png");
  thunder= loadImage("thunder.jpg");
  thunder2 = loadImage("thunder2.png");
  thunder3 = loadImage("thunder3.png");
}

function setup(){
  var canvas = createCanvas(500,500);

  engine = Engine.create();
  world  = engine.world;

  batman=createSprite(200,350);
  umbrella = new Umbrella();

  if(frameCount%100===0){
    for(var i=0; i<maxDrops;i++){
      drops.push(new Drop(random(0,400),random(0,400),5,5));
     }
    }

}

function draw(){
  background(0);
  Engine.update(engine);

  var rand = Math.round(random(1,2));
  if(frameCount%80===0){
   var thunderCreatedFrame = frameCount;
   var thunder = createSprite(random(10,370),random(10,30),10,10);
   switch(rand){
     case 1 : thunder.addImage(thunder);
     break;
     case 2 : thunder.addImage(thunder2);
     break;
     case 3 : thunder.addImage(thunder3);
     break;
     default : break;
   }
   thunder.scale = random(1.5,2.5);

   if(thunderCreatedFrame +10 === frameCount&& thunder){
     thunder.destroy();
   }
  }

  umbrella.display();
  
  for(var i=0; i<maxDrops;i++){
    drops[i].display();
    drops[i].update();
  }
 
  
  drawSprites();
}

