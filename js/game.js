class Game{
    constructor(){

    }
    Getstate(){
        database.ref("gamestate").on("value",(data)=>{
            gamestate=data.val()
        })
    }
    updatestate(state){
        database.ref("/").update({
            gamestate:state
        })
    }
    async start(){
        if(gamestate===0){
            player=new Player()
            var playercountref= await database.ref("playercount").once("value")
            if(playercountref.exists()){
                playercount=playercountref.val()
                player.Getcount()
            }
          
            form = new Form()
            form.display()
        }
        car1=createSprite(100,200,100,100);
        car1.addImage(car1Image);
        car2=createSprite(300,200,100,100);
        car2.addImage(car2Image);
        car3=createSprite(500,200,100,100);
        car3.addImage(car3Image);
        car4=createSprite(700,200,100,100);
        car4.addImage(car4Image);
        cars=[car1,car2,car3,car4]
    }
    play(){
        form.hide()
        //textSize(35)
        //text("GAME STARTED",120,100)
        Player.getplayerinfo()
        if(allplayers!==undefined){
            background("brown")
            image(trackImage,0,-displayHeight*3,displayWidth,displayHeight*4)
            var index=0
            var x=185
            var y=0

            for(var plr in allplayers){
                index=index+1
                x=x+210
                y=displayHeight-allplayers[plr].distance
                cars[index-1].x=x
                cars[index-1].y=y
                if(index===player.index){
                   cars[index-1].shapeColor="orange"
                   camera.position.x=displayWidth/2
                   camera.position.y=cars[index-1].y
                   fill("green")
                   stroke(10)
                   ellipse(x,y,100,100) 
                }
            }
            
        }
        if(keyDown(UP_ARROW)&&player.index!==null){
            player.distance=player.distance+10
            player.update()
        }
        if(player.distance>3440){
            gamestate=2;
        }

        drawSprites()
    }
    end(){
        console.log("GAME OVER")
    }

}