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
  }
  addDriver() {
    const driverX = this.game.width;
    const driverY = Math.random() * this.game.canvas.height;
    const driver = new Driver(this.game, driverX, driverY);
    this.game.drivers.push(driver);
  }
  paint() {
    const context = this.game.context;
    context.save();
    context.fillStyle = 'yellow';
    context.fillRect(this.x, this.y, this.width, this.height);
    context.restore();
  }
}
