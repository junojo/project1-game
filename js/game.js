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
    this.player = new Player(this, this.canvas.width / 2, 500);
    this.racetrack = new RaceTrack(this);
    // start the loop to paint things
    this.loop();
  }
  clearScreen() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  paint() {
    this.clearScreen();
    // console.log('paint player');
    this.racetrack.paint();
    this.player.paint();
  }
  loop() {
    window.requestAnimationFrame(() => {
      this.paint();
      this.loop(); // keep the loop ongoing
    });
  }
}
