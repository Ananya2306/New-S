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
    start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();  
        }
    }
}
