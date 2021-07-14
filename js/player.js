class Player {
  constructor(game, x, distance) {
    this.game = game;
    this.x = x;
    this.distance = distance;
    this.speed = 0;
    this.width = 64;
    this.height = 96;
    this.gas = 1;
  }

  runLogic() {
    // run the Player logic
    this.distance += this.speed;
    console.log(this.distance, this.speed);
  }

  paint() {
    const context = this.game.context;
    context.save();
    context.fillStyle = '#C4C4C4';
    context.fillRect(
      this.x - this.width / 2,
      //this.y - this.height / 2,
      (this.game.canvas.height - this.height) / 2,
      this.width,
      this.height
    );
    context.restore();
  }
}
