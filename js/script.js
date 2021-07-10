// select canvas in html
const canvasElement = document.querySelector('canvas');

// instanciate the new game and send the canvas element
const game = new Game(canvasElement);

// start the game class
game.start();
