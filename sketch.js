var canvas;
var backgroundImage;
var backgroundImg2;
var database;
var form, player;
var playerCount;
var jogadores = [];
var gameState;
var allPlayers;
var wait;
var fighter1, fighter2;
var fighter1_gif, fighter2_gif;
var fighter1_punch, fighter2_punch;

function preload() {
  backgroundImage = loadImage("assets/MicrosoftTeams-image (2) (2).png");
  fighter1_gif = loadImage("assets/animeBB.gif");
  fighter2_gif = loadImage("assets/red1.gif");
  backgroundImg2 = loadImage("assets/aaa.png");
  fighter1_punch = loadImage("assets/poopy.gif");
  fighter2_punch = loadImage("assets/bloob.gif");

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  background(backgroundImage);

  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}