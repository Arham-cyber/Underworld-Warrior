function jump(ob/*,q1,q2,jlevel*/){
   if(player.y<=ob.y)
    if(ob.y-player.y<=ob.height/2+55){
        if(player.x >= ob.x-ob.width/2-10 && player.x <= ob.x+ob.width/2+10){    
        
       jumpstate=1
        }
      }

else{
    jumpstate=0
}

}
