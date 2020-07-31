function level1(){
  run.play()
  text("RUN!!",200,200)
  player.collide(climb1)
   player.collide(climb2)
   player.collide(climb3)
   player.collide(climb4)
   player.collide(climb5)
   player.collide(climb6)
   player.collide(climb7)
console.log(camstate)


 death(rammer)
    rx=-1000
    ry=rammer.y

    camera.position.y=displayHeight/2
    player.collide(stopper)
   
 
         rammer.velocityX=5.7
         rammer.shapeColor="black"
    
   if(levelstate===1){
     jump(floor,50,1766,1755.5)
   }if(levelstate===2){
   jump(floor2,1365,4265,255.5)
   if(player.x>barrier2.x){
    jump(stopper,barrier2.x+400,5264,555.5)
    if(player.y>=stopper.y-1000){
      camstate=6
    }
    if(camstate===6){
      player.changeAnimation("test1",playerimg)
      player.velocityX=0
      rammer.velocityX=0
 
      camera.zoom+=0.02
      camera.position.y=player.y
      player.velocityY=3
  
  if(camera.zoom>=1.4){
 
    camstate=7
  }
    }
    if(camstate===7){
     
      ps=ps-0.006
      player.scale=ps
      if(player.scale<=0){
        player.scale=0
        gamestate=2
     
      }
      camera.position.y= stopper.y-1600
      camera.zoom+=0.001
    
      if(camera.zoom>=1.75){
        camera.zoom=1.75
    
      }
    }
    
   }
   }
  

  if(levelstate===1&&player.y<=displayHeight/2){
  camera.position.y=player.y
  }
   if(levelstate===1&&player.x>=displayWidth/2){
   
  
   camstate=2
   
   if(camera.zoom>=1.5){
   camera.zoom=1.5
   
   
   }
   }
   if(camstate===2){
     camlevel=camlevel+2.192
  camera.position.y=camlevel
  if(camera.position.y>=523){
    camera.position.y=523
  }
   camera.position.x=player.x
   camera.zoom+=0.008
   if(camera.zoom>=1.5){
    camera.zoom=1.5
   }
  }
  
   if(player.x>displayWidth+400){
   levelstate= 2
  

   }
   if(levelstate===2){
   
  move(Spikes,climb5.x,climb5.y-82.5,270)
  move(Spikes2,climb6.x,climb6.y-82.5,270)
   }
   else{
     if(levelstate===1){
      move(Spikes,displayWidth/2,displayHeight-15,0)
      move(Spikes2,displayWidth/2-Spikes.width/2,displayHeight-15,0)
     }
   }
  if(levelstate===2 && player.x>=2150){
    if(player.y<=climb3.y){
    levelstate=3
    }
  }
   if(levelstate===3){
     jump(climb3,3066,3266,60.5)
     if(player.y<=climb4.y){
       levelstate=4
     }
   }
   if(levelstate===4){
    jump(climb4,3066,3266,60.5)
    if(player.y<=climb5.y){
      levelstate=5
    }
   } 
   
   if(levelstate===5){
    jump(climb5,3346,3446,60.5)
    if(player.y<=climb6.y){
      levelstate=6
    }
   }
   if(levelstate===6){
     jump(climb6,3346,3446,60.5)
     if(player.y<=climb7.y){
       levelstate=7
     }
   }
   if(levelstate===7){
     jump(climb7,3266,3466,60.5)
   
     if(player.y<=barrier2.y-barrier2.height/2 && player.x>=barrier2.x-barrier2.width/2){
       camstate=4
       jump(barrier2,3466,4266,2056.5)
      
     }
   }
   if(camstate===4){
    camera.position.x=camera.position.x-5
    camera.position.y=player.y
   
  
    if(camera.position.x<=player.x){ 
  camstate=5
   }
  }
  if(camstate===5){
  camera.position.x=player.x
  camera.position.y=player.y
   
  }
  
  if(levelstate===2){
   jump(climb1,3066,3266,305.5)
   jump(climb2,3266,3466,555.5)
  }
   if(levelstate===2&&camstate===2){
   camstate=2.5
   }
   if(camstate===2.5){
   camera.zoom=camera.zoom-0.009
   
   camera.position.x=camera.position.x+15
   if(camera.position.x>=player.x+384){
   camera.position.x=player.x+384
   }
   camera.position.y=player.y
   if(camera.zoom<=1){
   camera.zoom=1
   }
   if(player.y>=3700){
    camstate=3
    
    }
    else{
    
    }
   }
   
   if(camstate===3){
   camera.position.x=player.x+384
   camera.position.y=floor2.y-576
   if(player.y<=3396){
   camera.position.y=player.y
   }
   if(player.y<=barrier2.y-barrier2.height/2){
    camstate=4
   }
   
   if(levelstate>2){
    
     camera.zoom=camera.zoom-0.003
     if(camera.zoom<=0.5){
       camera.zoom=0.5
     }
   }
   
   }
  
  if(gamestate===2){
camera.zoom=1
   camera.position.y=stopper.y-1000
    player.y=stopper.y-1000
    player.x=stopper.x
    move(rammer,stopper.x,stopper.y+2000,90)
    move(climb3,stopper.x,stopper.y-1500,45)
    move(climb2,stopper.x,stopper.y-3500,30) 
    move(climb1,stopper.x,stopper.y-2000,-25)
   move(climb4,stopper.x,stopper.y-3500,-30)
   move(climb5,stopper.x,stopper.y-5000,45)
   move(climb6,stopper.x,stopper.y-5000,10)

  } }
 
  