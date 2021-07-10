class RaceTrack {
  constructor(game) {
    this.game = game;
    this.width = 400;
    this.height = game.canvas.height;
    // this.lines = [];
  }
  runLogic() {
    // console.log('hello');
    // this.lines();
    // const drawLines = [100, 200, 300];
    // for (const drawLine of drawLines) {
    //   // console.log(lines);
    //   // this.lines[i].lines();
    // }
    // const lines = this.lines;
    // console.log(typeof this.lines);
    // for (let i = 0; i < lines.lenght; i++) {
    //   console.log(lines);
    //   // this.lines[i].lines();
    // }
  }
  track() {
    const game = this.game; // get the this.game and save it to reuse multiple times
    const context = game.context;
    context.save();
    context.fillStyle = '#51534E';
    context.fillRect(game.canvas.width / 4, 0, this.width, this.height);
    context.restore();
  }
  checkred() {
    const context = this.game.context;
    context.save();
    context.fillStyle = '#959E99';
    context.fillRect(this.width - 220, 0, 20, this.height);
    context.fillRect(this.width + 200, 0, 20, this.height);
    context.restore();
  }
  lines() {
    const context = this.game.context;
    const lineWidth = 5;
    const lineHeight = 45;
    const lineX = 300;
    const lineY = 30;

    const stopLoop = 3;
    context.save();
    context.fillStyle = '#E5E5E5';
    context.fillRect(lineX, lineY, lineWidth, lineHeight);

    // for (let i = 0; i < 10; i++) {
    //   // console.log('hi');
    // }
    // context.fillRect(lineX, lineY, lineWidth, lineHeight);
    // context.fillRect(lineX, lineY + 100, lineWidth, lineHeight);

    // context.fillRect(lineX + 100, lineY + 100, lineWidth, lineHeight);
    // context.fillRect(lineX + 200, lineY + 200, lineWidth, lineHeight);
    // context.fillRect(lineX + 200, lineY + 300, lineWidth, lineHeight);
    // for (let i = 0; i < 10; i++) {
    //   // console.log('hi');
    // }
    // this.runLogic();
    // context.fillRect(300, 90, lineWidth, lineHeight);
    // context.fillRect(400, 0, 5, this.height);
    // context.fillRect(500, 0, 5, this.height);
    // context.fillRect(this.width + 200, 0, 20, this.height);
    context.restore();
  }
  paint() {
    this.track();
    this.checkred();
    this.lines();
    // this.runLogic();
  }
}
