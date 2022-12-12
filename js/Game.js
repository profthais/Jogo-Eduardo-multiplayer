class Game {
  constructor() {

  }

  getState(){
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    })
  }

  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  start() {
    form = new Form();
    form.display();
    player = new Player();
    playerCount = player.getCount();

    fighter1 = createSprite(windowWidth*0.25,windowHeight-200,20,300);
    fighter1.addImage("lutando",fighter1_gif);    
    fighter1.setCollider("rectangle",0,0,200,150);
    
    fighter2 = createSprite(windowWidth*0.75,windowHeight-200,20,300);
    fighter2.addImage("lutando",fighter2_gif);
    fighter2.setCollider("rectangle",0,0,200,150);

    jogadores = [fighter1,fighter2];

    fighter1.addImage("soco", fighter1_punch);
    fighter2.addImage("soco", fighter2_punch);

  }

  handleElements() {
    form.hide();
  }

  play() {
    this.handleElements();

    Player.getPlayersInfo();

    if (allPlayers !== undefined) {
      image(backgroundImg2, 0, 0, width, height);

      this.showLife();

       var index = 0;
       for (var plr in allPlayers) {

         index = index + 1;
 
         var x = allPlayers[plr].positionX;
         var y = height - allPlayers[plr].positionY;
 
         jogadores[index - 1].position.x = x;
         jogadores[index - 1].position.y = y;

         var socoatual = allPlayers[plr].socar;

          if(socoatual === true){
            jogadores[index - 1].changeImage("soco");
          } else {
            jogadores[index - 1].changeImage("lutando");
          }

       }
      this.handlePlayerControls();

      drawSprites();
    }
  }

  handlePlayerControls() {

    if (keyIsDown(LEFT_ARROW)) {
      player.positionX -= 5;
      player.update();
    }

    if (keyIsDown(RIGHT_ARROW)) {
      player.positionX += 5;
      player.update();
    }

    if(keyIsDown(DOWN_ARROW)){
      if(player.socar === false){
        player.socar = true;
        player.update();

        setTimeout(() => {
          this.keyReleased()
        }, "200")
      }
    }
}


keyReleased(){
  if(keyCode === DOWN_ARROW){
    player.socar = false;
    player.update();
}
}

  showLife() {

    var players = Object.values(allPlayers);

    push();
    fill("red");
    rect(windowWidth-1300, windowHeight*0.1, 100*2,20);
    fill("green");
    rect(windowWidth-1300, windowHeight*0.1,players[0].life*2,20);
    noStroke();
    pop();

    push();
    fill("red");
    rect(windowWidth-300, windowHeight*0.1, 100*2,20);
    fill("green");
    rect(windowWidth-300, windowHeight*0.1,players[1].life*2,20);
    noStroke();
    pop();

}

}