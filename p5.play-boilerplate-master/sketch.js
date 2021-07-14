var mainMenu
var gameState = 0
var game



function setup() {
  createCanvas(displayWidth, diplayHeight);
  game = new Game

}

function draw() {
  background(255,255,255);  
  if(gameState === 0){
    game.start()
    
  }
  
  
  
  drawSprites();
}