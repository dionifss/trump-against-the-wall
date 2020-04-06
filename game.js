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
    this.row -= 50;
  }

  moveDown() {
    this.row += 50;
  }

  moveLeft() {
    this.col -= 50;
  }

  moveRight() {
    this.col += 50;
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
      this.imgdo = loadImage("assets/trumpup.png");
      this.imgup = loadImage("assets/trumpback.png");
      this.imgle = loadImage("assets/trumpleft.png");
      this.imgri = loadImage("assets/trumpright.png");
      this.img = this.imgri;
    }
  }

  draw() {
    image(this.img, this.col, this.row, 50, 50);
  }
}

class Squares {
  constructor(col, num, size) {
    this.col = col;
    this.row = col;
    this.num = num;
    this.size = size;
  }

  drawSquares() {
    stroke(200, 250, 0);
    strokeWeight(6);
    noFill();
    rect(this.col, this.col, this.size + 50, this.size);
  }
}

class Movingthing {
  preload() {
    this.img = loadImage("assets/corona.png");
  }

  drawMoving() {
    image(this.img, WIDTH * (11 / 12), HEIGHT * (10 / 11), 50, 50);
  }
}

let grid = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0],
  [0, 1, 2, 3, 3, 3, 3, 3, 3, 2, 1, 0],
  [0, 1, 2, 3, 4, 4, 4, 4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4, 5, 5, 4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4, 4, 4, 4, 3, 2, 1, 0],
  [0, 1, 2, 3, 3, 3, 3, 3, 3, 2, 1, 0],
  [0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
