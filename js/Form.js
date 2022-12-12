class Form {
  constructor() {
    this.playButton = createButton("Jogar");
    this.greeting = createElement("h2");
  }

  setElementsPosition() {
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

  setElementsStyle() {
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  hide() {
    this.playButton.hide();
  }

  handleMousePressed(){

    this.playButton.mousePressed(() => {
      this.playButton.hide();
      var message = `
        </br> espere o outro jogador entrar...`;
        this.greeting.html(message);
        playerCount += 1;
        player.index = playerCount;
        player.addPlayer();
        player.updateCount(playerCount);
        player.getDistance();
    })
  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();

    this.handleMousePressed();
  }
}