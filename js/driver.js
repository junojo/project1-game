class Driver {
  constructor(game, x, distance, speed) {
    this.game = game;
    this.x = x;
    this.distance = distance;
    this.width = 64;
    this.height = 96;
    this.speed = speed - Math.random(); // random -> reduce the speed of drivers
    this.colors = [
      'red',
      'green',
      'blue',
      'yellow',
      'orange',
      'pink',
      'purple',
      'brown'
    ];
    this.pickColor = Math.floor(Math.random() * this.colors.length); // randomize color
    this.color = this.colors[this.pickColor];
    // console.log(this.color);
  }

  runLogic() {
    this.distance += this.speed;
    this.game.drivers.forEach((driver) => {
      // console.log(driver.distance);
    });
    //console.log(this.game.drivers);
    // this.deleteDriver();
  }

  /*
  addDriver() {
    const driverX = this.game.canvas.width;
    const driverY = Math.random() * this.game.canvas.height;
    // const driver = new Driver(this.game, driverX, driverY);
    this.game.drivers.push(this.game.driver);

    console.log('one more driver');
    // console.log(this.game.drivers);
  }
  */

  /*
  deleteDriver() {
    const game = this.game;
    this.drivers = game.drivers.forEach((driver, index) => {
      if (driver.distance < 0) {
        game.drivers.splice(index, 1);
        console.log('driver removed');
      }
    });
  }*/

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

    context.fillRect(
      this.x - this.width / 2,
      this.game.canvas.height - (this.distance - this.game.player.distance),
      this.width,
      this.height
    );

    context.restore();
  }
}
