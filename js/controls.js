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
          break;
        case 'ArrowDown':
          console.log('apertou down');
          break;
        case 'ArrowRight':
          console.log('apertou direita');
          break;
        case 'ArrowLeft':
          console.log('apertou esquerda');
          break;
        case 'Space':
          console.log('apertou espaço');
          break;
      }
    });
  }
}
