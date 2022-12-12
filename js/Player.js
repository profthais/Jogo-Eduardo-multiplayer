class Player {
  constructor() {
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
    this.life = 100;
    this.socar = false;
  }

 addPlayer() {
   var playerIndex = "players/player" + this.index;

    if (this.index === 1) {
      this.positionX = 170;
      this.positionY = 200;
      this.socar = false;
      this.life = 100;
    } else {
      this.positionX = 1270;
      this.positionY = 200;
      this.socar = false;
      this.life = 100;
    }

    database.ref(playerIndex).set({
      positionX: this.positionX,
      positionY: this.positionY,
      socar: this.socar,
      life: this.life
    });
  }

  getDistance() {
    var playerDistanceRef = database.ref("players/player" + this.index);
    playerDistanceRef.on("value", data => {
      var data = data.val();
      this.positionX = data.positionX;
      this.positionY = data.positionY;
    });
  }
  
  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", data => {
      playerCount = data.val();
    });
  }

  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }

  update() {
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).update({
      positionX: this.positionX,
      positionY: this.positionY,
      socar: this.socar,
      life: this.life
    });
  }

  static getPlayersInfo() {
    var playerInfoRef = database.ref("players");
    playerInfoRef.on("value", data => {
      allPlayers = data.val();
    });
  }

  addImage(){

  }

}