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
const door21 = new Door(50, 50, 1, 2, 1, 1);
const door22 = new Door(50, 50, 1, 3, 1, 1);
const door31 = new Door(50, 50, 1, 6, 2, 2);
const door32 = new Door(50, 50, 1, 7, 2, 2);
const door41 = new Door(50, 50, 1, 5, 3, 3);
const door42 = new Door(50, 50, 1, 6, 3, 3);
const door51 = new Door(50, 50, 1, 5, 4, 4);
const door52 = new Door(50, 50, 1, 6, 4, 4);
// const cake1up = new Shootup();
// const cake1do = new Shootdo();
let imgcake;

let song;
let coronaX = WIDTH - SQUARE_SIDE;
let coronaY = HEIGHT - SQUARE_SIDE;
let amerGreat;
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
let coronaimg2;

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
  // cake1up.preload();
  // cake1do.preload();

  // let = imgovery = createImg("assets/cake.png");
  imgover = loadImage("assets/gif-funeral.gif");
  coronimg = loadImage("assets/corona.png");
  coronaimg2 = loadImage("assets/cake.png");
  amerGreat = loadSound("music/americaGreatAgain.mp3");
  imgcake = loadImage("assets/cake.png");
}
function setup() {
  createCanvas(WIDTH, HEIGHT).position(120, 95);
  song = loadSound("music/musicmorenos.mp3", loaded);
  song.setVolume(0.05);
  button = createButton("🛑music");
  button.mousePressed(togglePlaying);
}
function loaded() {
  song.play();
}
function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.1);
    button.html("🛑music");
  } else {
    song.pause();
    button.html("▶️ music");
  }
}
function espiral(limite) {
  if (coronaY === HEIGHT - SQUARE_SIDE - limite && coronaX > 0 + limite) {
    coronaX -= SQUARE_SIDE / 4;
  } else if (coronaX === 0 + limite && coronaY > 0 + limite) {
    coronaY -= SQUARE_SIDE / 4;
  } else if (coronaY === 0 + limite && coronaX < WIDTH - SQUARE_SIDE - limite) {
    coronaX += SQUARE_SIDE / 4;
  } else if (
    coronaX === WIDTH - SQUARE_SIDE - limite &&
    coronaY >= 0 &&
    coronaY < HEIGHT - SQUARE_SIDE * 2 - limite
  ) {
    coronaY += SQUARE_SIDE / 4;
  } else {
    espiral(limite + SQUARE_SIDE);
  }
  arrcoronas.push(new Movingthing(coronaX, coronaY, 1, 1));
}
function draw() {
  game.drawGrid();
  firstsquare.drawSquares();
  secondsquare.drawSquares();
  thirdsquate.drawSquares();
  fourthquate.drawSquares();
  fifthquate.drawSquares();
  if (frameCount % (20 - game.level * 2) == 0) {
    door1.movingMarkusdoor();
  }
  if (frameCount % (20 - game.level * 2) == 0) {
    door2.movingMarkusdoor();
  }

  if (frameCount % (23 - game.level * 2) == 0) {
    door21.movingMarkusdoor();
  }
  if (frameCount % (23 - game.level * 2) == 0) {
    door22.movingMarkusdoor();
  }
  if (frameCount % (21 - game.level * 2) == 0) {
    door31.movingMarkusdoor();
  }
  if (frameCount % (21 - game.level * 2) == 0) {
    door32.movingMarkusdoor();
  }
  if (frameCount % (18 - game.level * 2) == 0) {
    door41.movingMarkusdoor();
  }
  if (frameCount % (18 - game.level * 2) == 0) {
    door42.movingMarkusdoor();
  }
  if (frameCount % (15 - game.level * 2) == 0) {
    door51.movingMarkusdoor();
  }
  if (frameCount % (15 - game.level * 2) == 0) {
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

  if (corona.start) {
    if (frameCount % 7 == 0) {
      espiral(0);
    }
    arrcoronas.forEach((elem) => {
      elem.drawMoving();
    });
  }
  if (frameCount == 600) {
    corona.startmov();
  }
  if (frameCount % (350 - game.level * 75) == 0) {
    game.arrCakes.push(new Shootdo());
  }

  game.arrCakes.forEach((elem) => {
    elem.draw();
    elem.collides();
  });

  if (frameCount % (350 - game.level * 75) == 0) {
    //150
    game.arrCakes1.push(new Shootup());
  }

  game.arrCakes1.forEach((elem) => {
    elem.draw();
    elem.collides();
  });
  // cake1up.draw();
  // cake1do.draw();

  // cake1up.collides();
  // cake1do.collides();

  trump.draw();

  coronafinallyCrashTrump(arrcoronas, trump);
  trump.trumpgettheflag();

  if (game.trumpHitTheFlag && game.level === 0) {
    trump.col = 0;
    trump.row = 0;
    trump.x = 0;
    trump.y = 0;
    trump.squarePosition = 0;
    arrcoronas = [];
    coronaX = WIDTH - SQUARE_SIDE;
    coronaY = HEIGHT - SQUARE_SIDE;
    game.trumpHitTheFlag = false;
    game.arrCakes = [];
    coronimg = coronaimg2;
    game.level += 1;
  }
  if ((game.trumpHitTheFlag && game.level === 1) || game.level === 2) {
    trump.col = 0;
    trump.row = 0;
    trump.x = 0;
    trump.y = 0;
    trump.squarePosition = 0;
    arrcoronas = [];
    coronaX = WIDTH - SQUARE_SIDE;
    coronaY = HEIGHT - SQUARE_SIDE;
    game.trumpHitTheFlag = false;
    game.arrCakes = [];
    coronimg = coronaimg2;
    game.level += 1;
  }

  if (game.finished) {
    noLoop();
    song.setVolume(0.3);

    background(120, 120, 120);
    textSize(60);
    textFont("Georgia");
    fill("rgb(0,255,0)");
    text("GAME OVER", 120, 90);
    // imgover.show().position(50, 350);

    image(imgover, 130, 120, 340, 250);
    // image(imgover, 1, 1);
  }
}
function keyPressed() {
  trump.keys();
}
function coronafinallyCrashTrump(arrcoronas, a) {
  arrcoronas.forEach(function (corona) {
    let left = corona.x;
    let right = corona.x;
    let top = corona.y;
    let bottom = corona.y;
    let playerLeft = a.col;
    let playerRight = a.col + 45;
    let playerTop = a.row;
    let playerBottom = a.row + 45;
    let xCollision =
      (left + 5 > playerLeft && left < playerRight) ||
      (right > playerLeft && right < playerRight);
    let yCollision =
      (top + 5 > playerTop && top < playerBottom) ||
      (bottom > playerTop && bottom < playerBottom);

    if (xCollision && yCollision) {
      console.log("corona make you Game Over");
      game.endGame();
    }
  });
}
