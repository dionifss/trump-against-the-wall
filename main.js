const game = new Game();
const trump = new Player(0, 0, 0, 0);
const firstsquare = new Squares(50, 1, 450, 207, 0, 0);
const secondsquare = new Squares(100, 2, 350, 155, 0, 244);
const thirdsquate = new Squares(150, 3, 250, 0, 100, 200);
const fourthquate = new Squares(200, 4, 150, 0, 222, 26);
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
let imgcake;
let imgcake1;
let imgcake2;
let imgcake3;
let champions;
///Local storage
let bestTime = localStorage.getItem("fastestTime");
if (!bestTime) {
  bestTime = 28;
}
let counter = 0;
let backgroundimg;
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
let coronimg;
let coronaimg2;
let coronaimg3;
let coronaimg4;

function preload() {
  game.drawLevels();
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
  imgtrumchamp = loadImage("assets/trumpchamp.png");
  imgagain = loadImage("assets/playagain.png");
  imginit = loadImage("assets/initialpage.png");
  imgovery = createImg("assets/gif-funeral.gif").hide();
  coronimg = loadImage("assets/corona.png");
  coronaimg2 = loadImage("assets/trumpwall.png");
  coronaimg3 = loadImage("assets/chinease.png");
  coronaimg4 = loadImage("assets/mariocorona.png");
  amerGreat = loadSound("music/americaGreatAgain.mp3");
  champions = loadSound("music/champions.mp3");
  imgcake = loadImage("assets/papertoilet.png");
  imgcake1 = loadImage("assets/mexicano.png");
  imgcake2 = loadImage("assets/huawei.png");
  imgcake3 = loadImage("assets/marioshoot.png");
  backgroundimg = loadImage("assets/trumVsBiden.jpg");
  imgmexico = loadImage("assets/backgroundmexico.jpg");
  imgchina = loadImage("assets/backgroundchina.jpg");
  imgmariobg = loadImage("assets/mariobackground.jpg");
  imggameover = loadImage("assets/gameover.png");
  backgroundgameover = loadImage("assets/trumpgameover.png");
  s1 = loadImage("assets/rectangle1.png");
  s2 = loadImage("assets/secondFire.png");
  s3 = loadImage("assets/rectangle3.png");
  s4 = loadImage("assets/square 4.png");
  s5 = loadImage("assets/square5.png");
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
  if (!game.inicio) {
    background(120, 120, 120);
    textSize(40);
    textFont("helvetica");
    fill("rgb(0,0,0)");
    image(imginit, 50, 10, 500, 522);
    return;
  }
  document.querySelector("#level").innerHTML = game.level;
  paint();
  if (game.inicio) {
    if (frameCount % 60 == 0) {
      counter++;
    }
    document.querySelector("#time").innerHTML = counter;
  }

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

  if (game.level === 1 && trump.squarePosition > 0) {
    if (corona.start) {
      if (frameCount % 5 == 0) {
        espiral(0);
      }
      arrcoronas.forEach((elem) => {
        elem.drawMoving();
      });
    }

    corona.startmov();
    if (frameCount % (350 - game.level * 75) == 0) {
      game.arrCakes.push(new Shootdo());
    }

    game.arrCakes.forEach((elem) => {
      elem.draw();
      elem.collides();
    });

    if (frameCount % (350 - game.level * 75) == 0) {
      game.arrCakes1.push(new Shootup());
    }

    game.arrCakes1.forEach((elem) => {
      elem.draw();
      elem.collides();
    });
  }
  if (game.level === 2 && trump.squarePosition > 0) {
    if (corona.start) {
      if (frameCount % 4 == 0) {
        espiral(0);
      }
      arrcoronas.forEach((elem) => {
        elem.drawMoving();
      });
    }

    corona.startmov();
    if (frameCount % (350 - game.level * 75) == 0) {
      game.arrCakes.push(new Shootdo());
    }

    game.arrCakes.forEach((elem) => {
      elem.draw();
      elem.collides();
    });

    if (frameCount % (350 - game.level * 75) == 0) {
      game.arrCakes1.push(new Shootup());
    }

    game.arrCakes1.forEach((elem) => {
      elem.draw();
      elem.collides();
    });
  }
  if (game.level === 3 && trump.squarePosition > 0) {
    if (corona.start) {
      if (frameCount % 3 == 0) {
        espiral(0);
      }
      arrcoronas.forEach((elem) => {
        elem.drawMoving();
      });
    }

    corona.startmov();
    if (frameCount % (350 - game.level * 65) == 0) {
      game.arrCakes.push(new Shootdo());
    }

    game.arrCakes.forEach((elem) => {
      elem.draw();
      elem.collides();
    });

    if (frameCount % (350 - game.level * 65) == 0) {
      game.arrCakes1.push(new Shootup());
    }

    game.arrCakes1.forEach((elem) => {
      elem.draw();
      elem.collides();
    });
  }

  if (game.level === 4 && trump.squarePosition > 0) {
    if (corona.start) {
      if (frameCount % 3 == 0) {
        espiral(0);
      }
      arrcoronas.forEach((elem) => {
        elem.drawMoving();
      });
    }

    corona.startmov();
    if (frameCount % (350 - game.level * 55) == 0) {
      game.arrCakes.push(new Shootdo());
    }

    game.arrCakes.forEach((elem) => {
      elem.draw();
      elem.collides();
    });

    if (frameCount % (350 - game.level * 55) == 0) {
      game.arrCakes1.push(new Shootup());
    }

    game.arrCakes1.forEach((elem) => {
      elem.draw();
      elem.collides();
    });
  }
  //trump.draw();
  function paint() {
    game.drawGrid();
    //firstsquare.drawSquares();
    //secondsquare.drawSquares();
    //thirdsquate.drawSquares();
    //fourthquate.drawSquares();
    //fifthquate.drawSquares();
    firstsquare.drawFire();
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
  }
  function trumpStart() {
    trump.col = 0;
    trump.row = 0;
    trump.x = 0;
    trump.y = 0;
    trump.squarePosition = 0;
  }
  coronafinallyCrashTrump(arrcoronas, trump);
  trump.trumpgettheflag();

  if (game.trumpHitTheFlag && game.level === 1) {
    trumpStart();
    arrcoronas = [];
    coronaX = WIDTH - SQUARE_SIDE;
    coronaY = HEIGHT - SQUARE_SIDE;
    game.trumpHitTheFlag = false;
    game.arrCakes = [];
    game.arrCakes1 = [];
    coronimg = coronaimg2;
    imgcake = imgcake1;
    game.level += 1;
    frameCount === 0;
    // imgtrumchamp = coronaimg2;
    backgroundimg = imgmexico;
    paint();

    image(game.level2, 120, 220, 400, 108);
    noLoop();
    setTimeout(() => {
      trumpStart();
      loop();
    }, 2300);
  }
  if (game.trumpHitTheFlag && game.level === 2) {
    trumpStart();
    arrcoronas = [];
    game.arrCakes1 = [];
    coronaX = WIDTH - SQUARE_SIDE;
    coronaY = HEIGHT - SQUARE_SIDE;
    game.trumpHitTheFlag = false;
    game.arrCakes = [];
    coronimg = coronaimg3;
    imgcake = imgcake2;
    game.level += 1;
    backgroundimg = imgchina;
    paint();
    image(game.level3, 120, 220, 400, 108);

    noLoop();
    setTimeout(() => {
      trumpStart();
      loop();
    }, 2300);
  }

  if (game.trumpHitTheFlag && game.level === 3) {
    trumpStart();
    arrcoronas = [];
    game.arrCakes1 = [];
    coronaX = WIDTH - SQUARE_SIDE;
    coronaY = HEIGHT - SQUARE_SIDE;
    game.trumpHitTheFlag = false;
    game.arrCakes = [];
    coronimg = coronaimg4;
    imgcake = imgcake3;
    game.level += 1;
    backgroundimg = imgmariobg;
    paint();
    image(game.level4, 120, 220, 400, 108);
    noLoop();
    setTimeout(() => {
      trumpStart();
      loop();
    }, 2300);
  }
  if (game.trumpHitTheFlag && game.level === 4) {
    noLoop();
    amerGreat.stop();
    song.stop();
    background(120, 120, 120);
    textSize(60);
    textFont("Georgia");
    fill("rgb(0,255,0)");
    image(imgagain, 145, 430, 300, 100);
    image(imgtrumchamp, 115, 25, 330, 400);
    champions.setVolume(0.3);
    champions.play();
    if (counter < bestTime) {
      localStorage.setItem("fastestTime", counter);
      document.querySelector("#best").innerHTML = counter;
    }
  }

  if (game.finished) {
    noLoop();

    song.setVolume(0.3);
    background(backgroundgameover);

    image(imggameover, 100, -30, 400, 215);

    textSize(40);
    fill("rgb(0,0,0)");
    image(imgagain, 140, 400, 300, 100);
    imgovery.show() = createImg("assets/gif-funeral.gif");
  }
}
function keyPressed() {
  trump.keys();
  if (keyCode == 32) {
    game.inicio = true;
  }
  if (keyCode == 32 && game.finished) {
    window.location.reload();
  }
  if (keyCode == 32 && game.trumpHitTheFlag && game.level === 4) {
    window.location.reload();
  }
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
document.querySelector("#best").innerHTML = bestTime;
document.querySelector("#level").innerHTML = game.level;
