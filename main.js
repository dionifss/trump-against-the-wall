const game = new Game();
const trump = new Player(0, 0);
const firstsquare = new Squares(50, 1, 450);
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
