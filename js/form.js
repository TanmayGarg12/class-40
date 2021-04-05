class Form{
    constructor(){
        this.input=createInput("name")
        this.button=createButton("SUBMIT")
        this.reset=createButton("Reset Button")
        this.greeting=createElement("h2")
        this.title=createElement("h1")
    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
        this.title.hide()
    }
    display(){
       
       this.title.html("CAR RACING GAME")
        this.title.position(displayWidth/2-20,0)

        
        this.input.position(displayWidth/2-40,displayHeight/2-50)

        
        this.button.position(displayWidth/2,displayHeight/2)
        this.reset.position(displayWidth-100,20)
        this.button.mousePressed(()=>{
          this.input.hide()
           this.button.hide()
           player.name=this.input.value()
           playercount=playercount+1
           player.index=playercount
           player.update()
           
           player.updatecount(playercount)
           
           this.greeting.html("HELLO "+player.name)
           this.greeting.position(displayWidth/2-70,displayHeight/2)
        })

        this.reset.mousePressed(()=>{
           player.updatecount(0)  
           game.updatestate(0)
        })
    }
}