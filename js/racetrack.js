class RaceTrack {
  constructor(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = 400;
    this.height = game.canvas.height;
    // this.lines = [];
    this.lineX = 300;
    this.lineY = 30;
  }

  paintTrack() {
    const game = this.game; // get the this.game and save it to reuse multiple times
    const context = game.context;
    context.save();
    context.fillStyle = '#51534E';
    context.fillRect(game.canvas.width / 4, 0, this.width, this.height);
    context.restore();
  }

  paintCheckred() {
    const context = this.game.context;
    context.save();
    context.fillStyle = '#959E99';
    context.fillRect(this.width - 220, 0, 20, this.height);
    context.fillRect(this.width + 200, 0, 20, this.height);
    context.restore();
  }

  paintLines() {
    const context = this.game.context;

    const distance = this.game.player.distance;

    const lineWidth = 5;
    const lineHeight = 45;
    const gapBetweenLinesY = 50;
    const gapBetweenLinesX = this.width / 4;

    context.save();

    const spaceFromLeftEdgeOfCanvas = (this.game.canvas.width - this.width) / 2;

    context.translate(spaceFromLeftEdgeOfCanvas, 0);

    context.fillStyle = '#E5E5E5';

    for (let column = 1; column <= 3; column++) {
      for (let row = 0; row < 8; row++) {
        const x = column * gapBetweenLinesX;
        const y =
          (row - 1) * (lineHeight + gapBetweenLinesY) +
          (distance % (lineHeight + gapBetweenLinesY));
        context.fillRect(x, y, lineWidth, lineHeight);
      }
    }

    context.restore();
  }

  paint() {
    this.paintTrack();
    this.paintCheckred();
    this.paintLines();
  }
}
