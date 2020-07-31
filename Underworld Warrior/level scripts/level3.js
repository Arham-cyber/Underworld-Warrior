function level3(){
L2.pause()
  text("Now you face the final boss.",200,200)
  healthbar.width=bosshp*1.5
  BM.play()
  boss.collide(floor2)
 spawnx=stopper.x-500
 spawny=stopper.y-500
if(keyDown("g")){
  touch=10
}
if(keyDown("h")){
  bosshp=0
}
if(bossstate<2){
 death(boss)
}
  boss.setCollider("circle",0,0,75)
  if(boss.y===stopper.y-600&&bossstate===0){
    boss.velocityY=0
    boss.velocityX=3
   }

 healthbar.x=boss.x
 healthbar.visible=true
  healthbar.y=boss.y-150
if(boss.isTouching(barrier3)&&bossstate===0){
  boss.velocityX=0
 
bossstate=1
}
if(bossstate===1){

  if(boss.velocityX===9){
    boss.rotation+=5
  }
  else{
    if(boss.velocityX===-9){
    boss.rotation-=5
  }}
 if(boss.x>=barrier3.x-barrier3.width/2-150){
  boss.velocityX=-9
  touch+=1
 
 }
 if(boss.x<=barrier2.x+barrier2.width/2+150){
boss.velocityX=9
touch+=1

 }

}
if(touch>=10){
  bossstate=2
}
if(bossstate===2){
  boss.velocityX=0
  player.collide(boss)
  if(player.isTouching(boss)){
    player.velocityX=0
    player.velocityY=0
    if(player.x>boss.x){
      player.velocityX=50
    }
    if(player.x<boss.x){
      player.velocityX=-50
    }
    if(player.x>boss.x){
      player.velocityY=50
    }
    bosshp-=10
  }
  if(bosshp<=0){
    text("YOU WIN! ",stopper.x,boss.y-300)
healthbar.destroy()
jumpstate=1.5
  }
}
    climb1.destroy()
   climb2.destroy()
   climb3.destroy()
   climb4.destroy()
   climb5.destroy()
   climb6.destroy()
   climb7.destroy()
   jump(stopper)
 

}