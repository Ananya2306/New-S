// create variables
var canvas;
var gameState = 0;
var playerCount;
var Que1YesCount;
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
    background("lightblue");
    strokeWeight(20);
    stroke(0);
    line(0,150,1400,150);

    // for updating the game on Play state
    if(playerCount === 1){
        game.update(1);
    }

}
