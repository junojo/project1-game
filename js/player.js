class Player {
  constructor(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = 64;
    this.height = 96;
  }
  runLogic() {
    // run the Player logic
  }

  paint() {
    const context = this.game.context;
    context.save();
    context.fillStyle = '#C4C4C4';
    context.fillRect(
      this.x - this.width / 2,
      this.y - this.height / 2,
      this.width,
      this.height
    );
    context.restore();
  }
}
