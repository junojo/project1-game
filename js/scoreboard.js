class Scoreboard {
  // Create scoreboard class that takes game instance
  constructor(game, speed, gas, distance) {
    this.game = game;
    this.speed = speed;
    this.gas = gas;
    this.distance = distance;
  }
  paint() {
    const context = this.game.context;
    this.game.context.font = '24px Helvetica';
    // and in draw method gets this.game.player.distance
    this.game.context.fillText(
      'Distance: ' + this.game.player.distance,
      10,
      50
    );
    // and shows the distance, this.game.player.gas as well
    this.game.context.fillText('Speed: ' + this.game.player.speed, 10, 100);
    this.game.context.fillText('Gas: ' + this.game.player.gas, 10, 150);
  }
}
