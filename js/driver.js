class Driver {
  constructor(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = 64;
    this.height = 96;
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
    const context = this.game.context;
    context.save();
    context.fillStyle = 'yellow';
    context.fillRect(
      // this.x - this.game.canvas.width / 2,
      this.x,
      // this.y - this.game.canvas.height / 2,
      this.y,
      this.game.canvas.width,
      this.game.canvas.height
    );
    // how to paint only drivers inside the lanes.
    context.restore();
  }
}
