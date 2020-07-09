class Player {
    constructor(){
        this.index = null;
        this.name = null;
        this.class = null;
        this.email = null;
        this.age = null;
        this.school = null;
    }

    getCount(){
        //refers to database
        var playerCountRef = database.ref("playerCount");
        //refers to value
        playerCountRef.on("value", function(data){
            //updates in database
            playerCount = data.val();
        });
    }

    getYCount(){
        var YCountRef = database.ref("Que1YesCount");
        YCountRef.on("value",function(data){
            Que1YesCount = data.val();
        });
    }

    updateCount(count){
        //refers to the total database
        database.ref("/").update({
            //count is no. of players (in the arguments)
            playerCount: count
        });
    }

    updateYCount(count1){
        database.ref("/").update({
            Que1YesCount : count1
        });

    }

    update(){
        //creating var to players in database
        var playerIndex = "players/player" + this.index;
        //referring to db and creates entry 'players'
        database.ref(playerIndex).set({
            //setting the name , distance , school , class , age  in database
            name: this.name,
            school:this.school,
            class: this.class,
            age : this.age,
            email : this.email
        })
    }

    static getPlayerinfo(){
        var playerInfoRef = database.ref("players");
        playerInfoRef.on("value", (data)=>{
            allPlayers = data.val();
        })
    }
}