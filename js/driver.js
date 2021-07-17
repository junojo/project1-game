class Driver {
  constructor(game, x, y, driverSpeed) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = 64;
    this.height = 96;
    this.speed = driverSpeed - Math.random(); // random -> reduce the speed of drivers
    this.colors = [
      'red',
      'green',
      'blue',
      'yellow',
      'orange',
      'pink',
      'purple'
    ];
    this.pickColor = Math.floor(Math.random() * this.colors.length); // randomize color
    this.color = this.colors[this.pickColor];
    console.log(this.color);
  }
  runLogic() {
    //   add here
    this.x--;
  }
  addDriver() {
    const driverX = this.game.canvas.width;
    const driverY = Math.random() * this.game.canvas.height;
    // const driver = new Driver(this.game, driverX, driverY);
    this.game.drivers.push(this.game.driver);

    console.log('one more driver');
    // console.log(this.game.drivers);
  }
  paint() {
    const game = this.game;
    const context = this.game.context;

    context.save();
    context.fillStyle = this.color;
    context.fillRect(
      // this.x - this.game.canvas.width / 2,
      this.x,
      // this.y - this.game.canvas.height / 2,
      this.y,
      game.canvas.width,
      game.canvas.height
    );
    // how to paint only drivers inside the lanes.
    context.restore();
  }
}
