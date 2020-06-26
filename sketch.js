// create variables
var canvas;
var gameState = 0;
var playerCount;
var database;
var form, player, game;
var allPlayers;

function setup(){
    // create canvas
    canvas = createCanvas(displayWidth - 20, displayHeight-30);
    // add databse 
    database = firebase.database();
    // make new game 
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    // for updating the game on Play state
    if(playerCount === 2){
        game.update(1);
    }
// Game state play 
    if(gameState===1){
        clear();
        game.play();
    }
}
