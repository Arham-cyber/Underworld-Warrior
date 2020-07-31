var Spikes,obstacle2,player,platform1,platform2, time2=time2,time=time
var jumpstate= 0,levelstate= 1,qualifier1=0,qualifier2=0,camstate=1,camno=0,camno2=0,deaths=0,gamestate=1,bossstate=0
var spawnx=50,spawny=390,jlevel=1755.5,q1=0,q2=1766,camlevel=386,deaths=0,ps=0.4,diestate=1,inc=1,cam,bosshp=100,touch=0
var audio = new Audio("../sounds/jump.mp3")
var run = new Audio("../sounds/Run.mp3")
var run2 = new Audio("../sounds/Run2.mp3")
var BM = new Audio("../sounds/BossMusic.mp3")
var L2=new Audio("../sounds/Level2.mp3")
function preload(){
 playerimgr = loadAnimation("../Animations/0.png","../Animations/1.png","../Animations/2.png","../Animations/3.png","../Animations/4.png","../Animations/5.png","../Animations/6.png","../Animations/7.png","../Animations/8.png","../Animations/9.png")
 playerimgl = loadAnimation("../Animations/0l.png","../Animations/1l.png","../Animations/2l.png","../Animations/3l.png","../Animations/4l.png","../Animations/5l.png","../Animations/6l.png","../Animations/7l.png","../Animations/8l.png","../Animations/9l.png")
 playerimg= loadImage("../Animations/standing1.png");
 playerimgjl=loadImage("../Animations/0.png")
playerimgjr=loadImage("../Animations/0l.png")
 spikes= loadImage("../Animations/sprite_0_2.png")
//Jump=loadSound("jump.mp3")
Boss=loadAnimation("../Animations/boss.png")
 
 }
function setup(){
 canvas = createCanvas(displayWidth,displayHeight)
 
 player = createSprite(50,390,100,100);
 player.scale=0.4
 player.addAnimation("test1",playerimg)
 player.addAnimation("test2",playerimgl)
 player.addAnimation("test3",playerimgr)

 floor = createSprite(displayWidth/2+200,displayHeight+1700,displayWidth+400,3420)
 floor.shapeColor= "black"
 
 floor2= createSprite(displayWidth+1449,displayHeight+3200,2900,410)
 floor2.shapeColor="black"

 Spikes= createSprite(displayWidth/2,displayHeight-15,200,50);
 Spikes.addAnimation("spikes",spikes)
 Spikes.setCollider("rectangle",0,0,155,48)

 Spikes2= createSprite(Spikes.x-spikes.width/2,displayHeight-15,200,50);
 Spikes2.addAnimation("spikes",spikes)
 Spikes2.setCollider("rectangle",0,0,155,48)

 Spikes3= createSprite(Spikes.x+spikes.width/2,displayHeight-15,200,50);
 Spikes3.addAnimation("spikes",spikes)
 Spikes3.setCollider("rectangle",0,0,155,48)
 
 

 

 
 barrier=createSprite(-499,displayHeight/2,1000,displayHeight+2800)
 barrier.shapeColor="#000000"

 climb1=createSprite(displayWidth+1799+1,floor2.y-454,200,500)
 climb1.shapeColor="black"

 climb2=createSprite(displayWidth+1799+200,floor2.y-704,200,1000)
 climb2.shapeColor="black"

 climb3=createSprite(displayWidth+1799,floor2.y-1420,200,30)
 climb3.shapeColor="black"

 climb4=createSprite(displayWidth+1799,floor2.y-2020,200,30)
 climb4.shapeColor="black"

 climb5=createSprite(climb2.x+80,climb4.y-550,200,30)
 climb5.shapeColor="black"

 climb6=createSprite(climb2.x+80,climb5.y-550,200,30)
 climb6.shapeColor="black"

 climb7=createSprite(climb2.x,climb6.y-550,201,30)
 climb7.shapeColor="black"


 barrier2=createSprite(climb2.x+499,floor2.y-2204,800,4000)
 barrier2.shapeColor="black"

 barrier3=createSprite(barrier2.x+2200,barrier2.y+8000,2000,20000)
 barrier3.shapeColor="black"

 barrier4=createSprite(2265,floor2.y+10204,4000,20000)
 barrier4.shapeColor="black"

 stopper=createSprite(4260+displayWidth/2,barrier3.y+barrier3.height/2-500,displayWidth,1000)
 stopper.shapeColor="black"

 

 rammer=createSprite(-1000,displayHeight+5000,1000,30000)


boss=createSprite(stopper.x,stopper.y-1000,100,100)
    boss.addAnimation("BOSS",Boss)
    boss.scale=1.5
    boss.visible=false
 
    healthbar=createSprite(boss.x,boss.y-100,150,10)
    healthbar.visible=false
    healthbar.shapeColor="black"

 
 }
 function draw() {

time=new Date().getTime()
player.collide(floor2)

 player.collide(barrier2)
 player.collide(barrier3)
 player.collide(barrier4)

 player.collide (stopper)
 
 
 background("#ffffff");
 drag();
 




 player.collide(floor)

 player.collide(barrier)


 if(jumpstate === 1 ){
   if(keyDown("w")|| keyDown("space")){
player.velocityY=-24
audio.play()

 }
}
  if(gamestate===1){
   
    if(jumpstate===1){
     
      if(keyDown("c")){
        audio.play()
        player.velocityY=-34
      }
    }
  }
  if(diestate===1){
   death(Spikes)
  death(Spikes2)
  death(Spikes3)
  
  }

 if(jumpstate===1){

 if (keyDown("a")){
 player.velocityX =- 9;
 player.changeAnimation("test2",playerimgl)
 player.setCollider("circle",0,0,100);
 player.scale= 0.4;
 
 if (keyDown("d")){
  player.velocityX = 9;
  player.changeAnimation("test3",playerimgr)
  player.scale= 0.4;
  player.setCollider("circle",0,0,100);
  }
 }
 else{
 
 player.velocityX =0;
 player.scale= 0.4;
 player.changeAnimation("test1",playerimg)
 player.setCollider("rectangle",0,10,80,200)
 
 
 if (keyDown("d")){
 player.velocityX =9;
 player.changeAnimation("test3",playerimgr)
 player.scale= 0.4;
 player.setCollider("circle",0,0,100);
 }
 }
 if (keyDown("d")){
 player.velocityX =9;
 player.changeAnimation("test3",playerimgr)
 player.scale= 0.4;
 player.setCollider("circle",0,0,100);

 if (keyDown("a")){
  player.velocityX =- 9;
  player.changeAnimation("test2",playerimgl)
  player.setCollider("circle",0,0,100);
  player.scale= 0.4;
  }
 }
 else{
 player.velocityX =0;
 player.scale= 0.4;
 player.changeAnimation("test1",playerimg)
 player.setCollider("rectangle",0,10,80,200)
 
 if (keyDown("a")){
 player.velocityX =- 9;
 player.changeAnimation("test2",playerimgl)
 player.setCollider("circle",0,0,100);
 player.scale= 0.4;
 }
 }
 
 }
 else{
   if(jumpstate===0){
     drag()
   }
 }

 fill("black")
 
 function CamZoom(){
  camera.zoom+=0.2
}
 player.velocityY = player.velocityY + 0.98;
 
 
 
 if (gamestate===1){
 level1()
 }
 if(gamestate===2){
   level2()


 }
 if(gamestate===3){
   level3()
 }
 drawSprites();



 if(camstate===2&&gamestate===2){
   camera.zoom+=0.007
 }
 }

 
 