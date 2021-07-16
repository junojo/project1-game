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
    // console.log(typeof this.drivers);
    // this.driver = new Driver(this, 100, 300);
    this.driver = new Driver(this, 420, 350);

    // start scoreboard
    this.scoreboard = new Scoreboard(
      this,
      0,
      1,
      0
      // *********** check if we should add more info
      // this.player.speed,
      // this.player.gas,
      // this.game.player.distance
    );

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
    this.driver.addDriver();
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
    this.scoreboard.paint();
  }
}
