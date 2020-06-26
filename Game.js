class Game {
    constructor(){

    }
    getState(){
        // Read the database for gameState 
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })
    }

    update(state){
        //Give the state
        database.ref("/").update({
            gameState: state
        })
    }
// make a start function
    async start(){
        // Wait for the other person to login 
        if(gameState===0){
            player = new Player();
            var playerCountRef = await database.ref("playerCount").once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
    }
//Create the play function  as gameState Play
    play(){
        // Hide the Form
        form.hide();
        // Give the text to know the person that Game is started
        textSize(40);
        text("Start", 620, 100);
        Player.getPlayerinfo();

        if(allPlayers!==undefined){
            var display_position = 130;
            for(var plr in allPlayers){
                if(plr==="player" + player.index)
                    fill("red");

                else
                    fill("black");

                display_position+=40;
                // Diplay the name of the person by red color 
                textSize(25);
                text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 620,display_position);
            }
        }
        
        if(keyDown(UP_ARROW) && player.index!==null){
            player.distance+=50;
            player.update();
        }
    }
}
