class Player {
  constructor(game, x, distance) {
    this.game = game;
    this.x = x;
    this.distance = distance;
    this.speed = 0;
    this.width = 64;
    this.height = 96;
    this.gas = 1000;
  }

  runLogic() {
    // run the Player logic
    this.distance += this.speed;
    // this.gas = this.distance * 0.01; // calc gas************
    console.log(this.distance, this.speed);
    this.gas -= this.speed / 1000;
  }

  paint() {
    const context = this.game.context;
    context.save();
    context.fillStyle = '#C4C4C4';
    context.fillRect(
      this.x - this.width / 2,
      //this.y - this.height / 2,
      // (this.game.canvas.height - this.height) / 2 + 150,
      // this.game.canvas.height - 150, // change player position to bottom *******
      this.game.canvas.height - (2 * this.height) / 1.5,
      this.width,
      this.height
    );
    context.restore();
  }
}
