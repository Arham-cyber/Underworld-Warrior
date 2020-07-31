function death(ob){
    if(player.isTouching(ob)){
        player.x=spawnx 
        player.y=spawny
        deaths=deaths+1
        camstate=1
        levelstate=1
        rammer.x= rx
        rammer.y =ry 
    
        camera.zoom=1


    if (gamestate===1 ){
        camera.position.x=displayWidth/2
        camera.position.y= displayHeight/2
    }
        if(gamestate===2){
            move(climb3,stopper.x,stopper.y-1500,45)
            move(climb2,stopper.x,stopper.y-3500,30) 
            move(climb1,stopper.x,stopper.y-2000,-25)
           move(climb4,stopper.x,stopper.y-3500,-30)
           move(climb5,stopper.x,stopper.y-5000,45)
           move(climb6,stopper.x,stopper.y-5000,10)
        
        }
        if(gamestate===3){
            bossstate=1
            boss.x=stopper.x
            boss.velocityX=9
            touch=0
        }
}
else{
        
}
    
   
}