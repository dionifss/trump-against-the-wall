const game = new Game();
const trump = new Player(0, 0, 0, 0);
const firstsquare = new Squares(50, 1, 450, 200, 250, 0);
const secondsquare = new Squares(100, 2, 350, 100, 0, 100);
const thirdsquate = new Squares(150, 3, 250, 0, 100, 200);
const fourthquate = new Squares(200, 4, 150, 50, 100, 50);
const fifthquate = new Squares(250, 5, 50, 220, 0, 200);
const corona = new Movingthing(50, 50, 3, 0);
let arrcoronas = [];
const flag = new Flag();
const door1 = new Door(50, 50, 1, 7, 0, 0);
const door2 = new Door(50, 50, 1, 8, 0, 0);
const door21 = new Door(50, 50, 1, 1, 1, 1);
const door22 = new Door(50, 50, 1, 2, 1, 1);
const door31 = new Door(50, 50, 1, 6, 2, 2);
const door32 = new Door(50, 50, 1, 7, 2, 2);
const door41 = new Door(50, 50, 1, 3, 3, 3);
const door42 = new Door(50, 50, 1, 4, 3, 3);
const door51 = new Door(50, 50, 1, 4, 4, 4);
const door52 = new Door(50, 50, 1, 5, 4, 4);
let song;
let coronaX = WIDTH - SQUARE_SIDE;
let coronaY = HEIGHT - SQUARE_SIDE;
trump.doors.push(
  door1,
  door2,
  door21,
  door22,
  door31,
  door32,
  door41,
  door42,
  door51,
  door52
);
let slider;
let coronimg;
function preload() {
  trump.preload();
  corona.preload();
  flag.preload();
  door1.preload();
  door2.preload();
  door21.preload();
  door22.preload();
  door31.preload();
  door32.preload();
  door41.preload();
  door42.preload();
  door51.preload();
  door52.preload();
  coronimg = loadImage("assets/corona.png");
}

function setup() {
  createCanvas(WIDTH, HEIGHT);
  song = loadSound("music/musicmorenos.mp3", loaded);
  slider = createSlider(0, 1, 0.3, 0.01);
}
function loaded() {
  song.play();
}
function espiral(limite) {
  // console.log(coronaX, coronaY);
  if (coronaY === HEIGHT - SQUARE_SIDE - limite && coronaX > 0 + limite) {
    coronaX -= SQUARE_SIDE;
  } else if (coronaX === 0 + limite && coronaY > 0 + limite) {
    coronaY -= SQUARE_SIDE;
  } else if (coronaY === 0 + limite && coronaX < WIDTH - SQUARE_SIDE - limite) {
    coronaX += SQUARE_SIDE;
  } else if (
    coronaX === WIDTH - SQUARE_SIDE - limite &&
    coronaY >= 0 &&
    coronaY < HEIGHT - SQUARE_SIDE * 2 - limite
  ) {
    coronaY += SQUARE_SIDE;
  } else {
    espiral(limite + SQUARE_SIDE);
  }

  arrcoronas.push(new Movingthing(coronaX, coronaY, 1, 1));
}
function draw() {
  game.drawGrid();
  if (frameCount === 1) {
    arrcoronas.push(new Movingthing(coronaX, coronaY, 1, 1));
  }
  if (frameCount % 20 == 0) {
    espiral(0);
  }

  arrcoronas.forEach((elem) => {
    elem.drawMoving();
  });
  firstsquare.drawSquares();
  secondsquare.drawSquares();
  thirdsquate.drawSquares();
  fourthquate.drawSquares();
  fifthquate.drawSquares();
  if (frameCount % 25 == 0) {
    door1.movingMarkusdoor();
  }
  if (frameCount % 25 == 0) {
    door2.movingMarkusdoor();
  }

  if (frameCount % 23 == 0) {
    door21.movingMarkusdoor();
  }
  if (frameCount % 23 == 0) {
    door22.movingMarkusdoor();
  }
  if (frameCount % 21 == 0) {
    door31.movingMarkusdoor();
  }
  if (frameCount % 21 == 0) {
    door32.movingMarkusdoor();
  }
  if (frameCount % 18 == 0) {
    door41.movingMarkusdoor();
  }
  if (frameCount % 18 == 0) {
    door42.movingMarkusdoor();
  }
  if (frameCount % 15 == 0) {
    door51.movingMarkusdoor();
  }
  if (frameCount % 15 == 0) {
    door52.movingMarkusdoor();
  }

  flag.drawFlag();
  door1.drawDoor();
  door2.drawDoor();
  door21.drawDoor();
  door22.drawDoor();
  door31.drawDoor();
  door32.drawDoor();
  door41.drawDoor();
  door42.drawDoor();
  door51.drawDoor();
  door52.drawDoor();
  trump.draw();
  song.setVolume(slider.value());
  console.log(door1.y, door1.x, trump.y, trump.x);
}

function keyPressed() {
  // trump.trumpPasssADoor();
  trump.keys();
}

// let Arrcoron = [
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// ];
