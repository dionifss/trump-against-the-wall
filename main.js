const game = new Game();
const trump = new Player(0, 0);
const firstsquare = new Squares(50, 1, 450, 200, 250, 0);
const secondsquare = new Squares(100, 2, 350, 100, 0, 100);
const thirdsquate = new Squares(150, 3, 250, 0, 100, 200);
const fourthquate = new Squares(200, 4, 150, 50, 100, 50);
const fifthquate = new Squares(250, 5, 50, 220, 0, 200);
const corona = new Movingthing();
const flag = new Flag();
const door1 = new Door(50, 50, 1, 0, 0);
// const door2 = new Door(100, 50, 1, 0, 0);

function preload() {
  trump.preload();
  corona.preload();
  flag.preload();
  door1.preload();
  door2.preload();
}

function setup() {}

function draw() {
  console.log("dioni");
  game.drawGrid();

  corona.drawMoving();
  firstsquare.drawSquares();
  secondsquare.drawSquares();
  thirdsquate.drawSquares();
  fourthquate.drawSquares();
  fifthquate.drawSquares();
  if (frameCount % 30 == 0) {
    door1.movingMarkusdoor();
  }
  //   if (frameCount % 20 == 0) {
  //     door2.movingMarkusdoor();
  //   }

  flag.drawFlag();
  door1.drawDoor();
  //   door2.drawDoor();
  trump.draw();
}

function keyPressed() {
  trump.keys();
}
door1.movingDoor();
door1.movingDoor2();
