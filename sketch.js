var pla,plal,plar;
var ground,b1,b2,b3,b4,b5,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,ground1,bu1,bu2,mp1,mp2,mp3,mp4,mp5,mp6,e;
var bo1,bo2,bo3,dI,d1,d2,d3,d4,d5,d6,d7,d,dg,di;
function preload(){
plal = loadImage("robotl.png");
plar = loadImage("robotr.png");  
  dI = loadImage("diamond.png");
}
function setup(){
  createCanvas(5000,500);

  ground = createSprite(250,485,500,30);
  ground.shapeColor = "brown";
  
  b1 = createSprite(335,445,330,50);
  b1.shapeColor = "brown";
  
  b2 = createSprite(365,395,270,50);
  b2.shapeColor = "brown";
    
  ground1 = createSprite(1000,385,200,30);
  ground1.shapeColor = "brown";
  
  p1 = createSprite(650,300,200,30);
  p1.shapeColor = "brown";
  
  p2 = createSprite(1200,265,100,30);
  p2.shapeColor = "brown";
  
  p3 = createSprite(1500,385,150,30);
  p3.shapeColor = "brown";
  
  p4 = createSprite(2400,250,230,30);
  p4.shapeColor = "brown";
  
  p5 = createSprite(2700,450,150,30);
  p5.shapeColor = "brown";
  
  p6 = createSprite(3600,350,150,30);
  p6.shapeColor = "brown";
  
  dg = new Group();
  
  pla = createSprite(30,320,20,50);
  pla.addImage(plar);
  pla.scale = 0.08;
  
  mp1 = createSprite(1800,385,120,30);
  mp1.shapeColor = "brown";
  mp1.velocityX = 1;
  
  mp2 = createSprite(2100,200,100,30);
  mp2.shapeColor = "brown";
  mp2.velocityY = 3;

  mp3 = createSprite(2900,200,100,30);
  mp3.shapeColor = "brown";
  mp3.velocityY = 1;

  mp4= createSprite(3300,385,120,30);
  mp4.shapeColor = "brown";
  mp4.velocityX = 3;
  
  mp5 = createSprite(3900,200,100,30);
  mp5.shapeColor = "brown";
  mp5.velocityY = -4;
  
  mp6 = createSprite(4100,200,100,30);
  mp6.shapeColor = "brown";
  mp6.velocityY = 4;
  
  mp7 = createSprite(4400,200,100,30);
  mp7.shapeColor = "brown";
  mp7.velocityX = -4;
  
  mp8 = createSprite(4700,200,100,30);
  mp8.shapeColor = "brown";
  mp8.velocityX = 4;
  
  bo1  =createSprite(2500,1,5000,1);
  bo2 = createSprite(1,250,1,500);
  bo3 = createSprite(4999,250,1,500);
  
  e = createSprite(4900,250,70,20);
  e.shapeColor = "black";
  
  d1 = createSprite(300,330);
  d1.addImage(dI);
  d1.scale  = 0.1;
  
  d2 = createSprite(400,330);
  d2.addImage(dI);
  d2.scale  = 0.1;
  
  d3 = createSprite(1000,340);
  d3.addImage(dI);
  d3.scale  = 0.1;
  
  d4 = createSprite(1200,230);
  d4.addImage(dI);
  d4.scale  = 0.1;

  d5 = createSprite(2360,210);
  d5.addImage(dI);
  d5.scale  = 0.1;
  
  d6 = createSprite(2450,210);
  d6.addImage(dI);
  d6.scale  = 0.1;
  
  d7 = createSprite(3600,300);
  d7.addImage(dI);
  d7.scale  = 0.1;
  
  di = createSprite(40,60);
  di.addImage(dI);
  di.scale = 0.1;
  
 d = 0;
  
}

function draw(){
  background("lightblue");
textSize(35);
  fill("black");
  
  text("X"+d,70,70)
  fill("green");
  rect(0,465,170,5);
  rect(170,415,58,5);
  rect(230,365,270);
  rect(900,365,200,5);
  rect(550,280,200,5);
  rect(1150,245,100,5);
  rect(1425,365,150,5);
  rect(2285,230,230,5);
  rect(2625,430,150,5);
  rect(3525,330,150,5);
 
  if(pla.isTouching(d1)){
    d1.y = 1000;
    d = d+1;
  }
  if(pla.isTouching(d2)){
    d2.y = 1000;
    d = d+1;
  }
  if(pla.isTouching(d3)){
    d3.y = 1000;
    d = d+1;
  }if(pla.isTouching(d4)){
    d4.y = 1000;
    d = d+1;
  }
  if(pla.isTouching(d5)){
    d5.y = 1000;
    d = d+1;
  }
  if(pla.isTouching(d6)){
    d6.y = 1000;
    d = d+1;
  }if(pla.isTouching(d7)){
    d7.y = 1000;
    d = d+1;
  }
  if(keyDown("w") || keyDown("up")) {
        pla.y = pla.y-15;
     
    }
    pla.velocityY = pla.velocityY + 0.9;
  
  if(keyDown("a") || keyDown("left")){
    pla.x = pla.x -4;
    pla.addImage(plal);
  }
  if(keyDown("d") || keyDown("right")){
    pla.x = pla.x +4;
    pla.addImage(plar);
   }
  if(mp1.x>=2000){
    mp1.velocityX = -1;
  }
   if(mp1.x<=1700){
    mp1.velocityX = 1;
  }
  if(mp4.x>=3400){
    mp4.velocityX = -4;
  }
   if(mp4.x<=3000){
    mp4.velocityX = 4;
  }
  if(mp2.y>=300){
    mp2.velocityY = -3;
  }
   if(mp2.y<=100){
    mp2.velocityY = 3;
  }
  if(mp3.y>=300){
    mp3.velocityY = -1;
  }
   if(mp3.y<=100){
    mp3.velocityY = 1;
  }
  if(pla.isTouching(mp1)){
    pla.x = mp1.x
  }
  if(pla.isTouching(mp2)){
    pla.y = mp2.y
    pla.x = mp2.x;
  }
  if(pla.isTouching(mp3)){
    pla.y = mp3.y
    pla.x = mp3.x;
  }
  if(pla.isTouching(mp4)){
    pla.x = mp4.x
  }
  if(mp5.y>=400){
    mp5.velocityY = -4;
  }
   if(mp5.y<=100){
    mp5.velocityY = 4;
  }
  if(mp6.y>=400){
    mp6.velocityY = -4;
  }
   if(mp6.y<=100){
    mp6.velocityY = 4;
  }
  if(mp7.x<=4150){
    mp7.velocityX = 4;
  }
  if(mp7.x>=4500){
    mp7.velocityX = -4;
  }
  if(mp8.x<=4600){
    mp8.velocityX = 4;
  }
  if(mp8.x>=4800){
    mp8.velocityX = -4;
  }
  if(pla.isTouching(e)){
    textSize(35);
    fill("white");
    text("You Win",2600,250);
  }
  if(pla.x>=500){
    textSize(35);
    fill("white");
    text("You Lost",2600,250);
  }
  pla.collide(ground);
  pla.collide(ground1);
  pla.collide(b1);
  pla.collide(b2);
  pla.collide(p1);
  pla.collide(p2);
  pla.collide(p3);
  pla.collide(mp1);
  pla.collide(mp2);
  pla.collide(p4);
  pla.collide(p5);
  pla.collide(mp3);
  pla.collide(mp4);
  pla.collide(p6);
  pla.collide(mp5);
  pla.collide(mp6);
  pla.collide(bo1);
  pla.collide(bo2);
  pla.collide(bo3);
  
  dg.add(d1);
  dg.add(d2);
  dg.add(d3);
  dg.add(d4);
  dg.add(d5);
  dg.add(d6);
  dg.add(d7);
drawSprites();
}






