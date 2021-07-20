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
    // this.driver = new Driver(this, 420, 350, this.player.speed);

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

  addDriver() {
    const lowerX = (this.canvas.width - this.racetrack.width) / 2;
    const upperX =
      (this.canvas.width - this.racetrack.width) / 2 + this.racetrack.width;
    const x = Math.random() * (upperX - lowerX) + lowerX;
    this.drivers.push(
      new Driver(
        this,
        x,
        this.player.distance + this.canvas.height + 96,
        this.player.speed
      )
    );
    // console.log(this.drivers);
  }

  deleteDriver() {
    console.log('hello' + this.drivers);
    this.drivers.forEach((driver, index) => {
      if (driver.distance < 0) {
        this.drivers.splice(index, 1);
        console.log('driver removed in game class');
      }
    });
  }

  loop() {
    window.requestAnimationFrame(() => {
      this.runLogic();
      this.paint();
      this.loop(); // keep the loop ongoing
      // console.log(this.player.speed);
      // console.log(this.drivers);
    });
  }

  runLogic() {
    this.player.runLogic();
    // this.driver.addDriver();
    for (const driver of this.drivers) {
      driver.runLogic();
    }
    if (Math.random() < 0.005) {
      this.addDriver();
    }
    this.deleteDriver();
  }

  clearScreen() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  paint() {
    this.clearScreen();
    // console.log('paint player');
    this.racetrack.paint();
    this.player.paint();
    // this.driver.paint();
    for (const driver of this.drivers) {
      driver.paint();
    }
    this.scoreboard.paint();
  }
}
