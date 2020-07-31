 function level2(){
  text("This level is a little tricky, you have to run into the walls at the perfect times.",200,200)
  run.pause()
L2.play()
  camera.zoom=1
camera.position.x=4940
climb3.velocityY=8
climb1.velocityY=8
climb4.velocityY=10
climb2.velocityY=8
climb5.velocityY=8
climb6.velocityY=8
death(climb1)
death(climb2)
death(climb3)
death(climb4)
death(climb5)
death(climb6)
 if(camstate===1){
  camera.position.y=stopper.y-800
 
  if(player.y<=camera.position.y){
    camstate=2
  }
 }
 if(camstate===2){
  camera.position.y=player.y
  if(player.y>=stopper.y-800){
    camstate=1
  }
 }
resize(climb3,displayWidth*2,climb3.height)
resize(climb1,displayWidth*2,climb3.height)
resize(climb4,displayWidth*2,climb3.height)
resize(climb2,displayWidth*2,climb3.height)
resize(climb5,displayWidth*2,climb3.height)
resize(climb6,displayWidth*2,climb3.height)

  rammer.velocityY=0
  ry=stopper.y+1000
  rx=stopper.x
 
  levelstate=1
    player.scale=0.4
     camera.zoom=inc
     drag()
     jump(stopper)

  
     spawnx=stopper.x
     spawny=stopper.y-1000



  
player.collide(stopper)
    resize(barrier,3000,20000)
     move(barrier,barrier2.x-barrier2.width/2+1-barrier.width/2,barrier2.y-1000,0)
     move(barrier3,barrier2.x+barrier2.width/2+displayWidth+barrier3.width/2,barrier2.y+8000,0)
  
    resize(floor,4000,3420)
     move(floor,stopper.x,barrier2.y-4200,0)
     
     
     


     
     if(player.x<=4310){
       player.x=5570
  
     }

     if(player.x>=5578){
      player.x=4311
    }

     
 
   if(climb6.y===rammer.y){
    gamestate=3
   }
   if(gamestate===3){
     boss.visible=true
     boss.velocityY=5
   }
  
   }
      