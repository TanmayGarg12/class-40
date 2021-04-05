class Player{
    constructor(){
        this.name=null,
        this.index=null,
        this.distance=0,
        this.rank=0
    }
    Getcount(){
        database.ref("playercount").on("value",(data)=>{
            playercount=data.val()
        })
    }
    updatecount(count){
        database.ref("/").update({
            playercount:count
        })
    }
    update(){
        var playerindex="players/player"+this.index
        database.ref(playerindex).set({
            name:this.name,
            distance:this.distance,

        })
    }
    static getplayerinfo(){
        database.ref("players").on("value",(data)=>{
            allplayers=data.val()
        })
        
    }
}