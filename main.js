const game = new Game();
const trump = new Player(0, 0);
const firstsquare = new Squares(100, 100, 1, 900);
const corona = new Movingthing();

function preload() {
  trump.preload();
  corona.preload();
}

function setup() {}

function draw() {
  console.log("dioni");
  game.drawGrid();
  trump.draw();
  corona.drawMoving();
  firstsquare.drawSquares();
}

function keyPressed() {
  trump.keys();
}
