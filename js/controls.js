class Controls {
  constructor(game) {
    this.game = game; // create a reference to the game
  }
  enableControls() {
    window.addEventListener('keydown', (event) => {
      const key = event.code;
      switch (key) {
        case 'ArrowUp':
          console.log('apertou up');
          // this.game.player.y -= 10;
          this.game.player.speed += 1;
          break;
        case 'ArrowDown':
          this.game.player.y += 10;
          this.game.player.speed -= 1;
          console.log('apertou down');
          break;
        case 'ArrowRight':
          this.game.player.x += 10;
          console.log('apertou direita');
          break;
        case 'ArrowLeft':
          this.game.player.x -= 10;
          console.log('apertou esquerda');
          break;
        case 'Space':
          console.log('apertou espaço');
          break;
      }
    });
  }
}
