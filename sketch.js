var gameState= 0;
var playerCount
var database;
var form,player,game;
var allPlayers;

var car1,car2,car3,car4,cars;

var carImg1,carImg2,carImg3,carImg4,ground,track;

function preload(){

carImg1= loadImage("images/car1.png");
carImg2= loadImage("images/car2.png");
carImg3= loadImage("images/car3.png");
carImg4= loadImage("images/car4.png");
ground = loadImage("images/ground.png");
track  = loadImage("images/track.jpg");






}
function setup(){
  database= firebase.database();
  createCanvas(displayWidth-20,displayHeight-30);
  game= new Game();
  game.getState();
  game.start(); 
  
  
}

function draw(){

  if(playerCount === 4){

   game.update(1)

  }

  if(gameState === 1){

  clear()
  game.play();

  }

  if(gameState == 2){

   game.end();

  }
  
}
