class Game {
  // built the canvas
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
  }
  // start the game
  start() {
    // start controls
    this.controls = new Controls(this);
    this.controls.enableControls();
    // create player using class
    this.player = new Player(this, this.canvas.width / 2, 0);
    this.racetrack = new RaceTrack(this);

    // create drivers
    this.drivers = [];
    this.driver = new Driver(this, 400, 300);
    this.driver.addDriver();

    // start the loop to paint things
    this.loop();
  }

  loop() {
    window.requestAnimationFrame(() => {
      this.runLogic();
      this.paint();
      this.loop(); // keep the loop ongoing
    });
  }

  runLogic() {
    this.player.runLogic();
  }

  clearScreen() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  paint() {
    this.clearScreen();
    // console.log('paint player');
    this.racetrack.paint();
    this.player.paint();
    this.driver.paint();

    // Create scoreboard class that takes game instance
    // and in draw method gets this.game.player.distance
    // and shows the distance, this.game.player.gas as well
    this.context.font = '30px Arial';
    this.context.fillText('Distance: ' + this.player.distance, 10, 50);
    this.context.fillText('Speed: ' + this.player.speed, 10, 100);
    this.context.fillText('Gas: ' + this.player.gas, 10, 150);
  }
}
