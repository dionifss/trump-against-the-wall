class Game {
  drawGrid() {
    createCanvas(WIDTH, HEIGHT);
    background("lightblue");

    for (let i = 0; i <= HEIGHT; i += SQUARE_SIDE) {
      line(0, i, WIDTH, i);
    }
    for (let i = 0; i <= WIDTH; i += SQUARE_SIDE) {
      line(i, 0, i, HEIGHT);
    }
  }
}

class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }

  moveUp() {
    this.row -= 100;
  }

  moveDown() {
    this.row += 100;
  }

  moveLeft() {
    this.col -= 100;
  }

  moveRight() {
    this.col += 100;
  }

  keys() {
    if (keyCode === 37) {
      if (this.col !== 0) {
        this.moveLeft();
        this.img = this.imgle;
      }
    } else if (keyCode === 39) {
      if (this.col !== WIDTH * (11 / 12)) {
        this.moveRight();
        this.img = this.imgri;
      }
    } else if (keyCode === 38) {
      if (this.row !== 0) {
        this.moveUp();
        this.img = this.imgup;
      }
    } else if (keyCode === 40) {
      if (this.row !== HEIGHT * (10 / 11)) {
        this.moveDown();
        this.img = this.imgdo;
      }
    }
  }

  preload() {
    {
      this.imgdo = loadImage("/assets/trumfpup.png");
      this.imgup = loadImage("assets/trumpback.png");
      this.imgle = loadImage("assets/trumpleft.png");
      this.imgri = loadImage("assets/trumpright.png");
      this.img = this.imgri;
    }
  }

  draw() {
    image(this.img, this.col, this.row, 100, 100);
  }
}

class Squares {
  constructor(col, row, num, size) {
    this.col = col;
    this.row = row;
    this.num = num;
    this.size = size;
  }

  drawSquares() {
    stroke(200, 250, 0);
    strokeWeight(6);
    noFill();
    rect(this.col, this.row, this.size + 100, this.size);
  }
}

class Movingthing {
  preload() {
    this.img = loadImage("assets/corona.png");
  }

  drawMoving() {
    image(this.img, WIDTH * (11 / 12), HEIGHT * (10 / 11), 100, 100);
  }
}
