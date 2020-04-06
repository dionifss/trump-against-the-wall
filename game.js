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
  constructor(col, num, size, col1, col2, col3) {
    this.col = col;
    this.row = col;
    this.num = num;
    this.size = size;
    this.col1 = col1;
    this.col2 = col2;
    this.col3 = col3;
  }

  drawSquares() {
    stroke(this.col1, this.col2, this.col3);
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

class Flag {
  preload() {
    this.img = loadImage("assets/flag.png");
  }
  drawFlag() {
    image(this.img, (WIDTH - 85) / 2, (HEIGHT - 52) / 2, 80, 50);
  }
}

class Door {
  constructor(col, row, num) {
    this.col = col;
    this.row = row;
    this.num = num;
  }
  preload() {
    this.img = loadImage("assets/doordo.png");
  }
  drawDoor() {
    image(this.img, this.col, this.row, 54, 6);
  }
  movingDoor() {
    // console.log("dioni´s clubs is better");
    for (let y = 0; y < grid2.length; y++) {
      //   console.log("markus fan club");
      for (let x = 0; x < grid2[y].length; x++) {
        if (grid2[y][x] > 0) {
          //   console.log(y, x);

          if (y == 0) {
            // console.log(y);
            if (grid2[y][x + 2] == undefined) {
              //   console.log(x, grid2[y].length - 2);

              if (x == grid2[y].length - 2) {
                grid2[y + 1][x + 1] = 1;
                grid2[y][x] = 0;
                // console.log("markus is the winner");
                x = grid2[y].length;
                y = grid2.length - 1;
              } else {
                grid2[y + 2][x] = 1;
                grid2[y][x] = 0;

                x = grid2[y].length;
                y = grid2.length - 1;
              }
            } else {
              grid2[y][x + 2] = grid2[y][x];
              grid2[y][x] = 0;
              //   console.log("mar lose chess");

              x = grid2[y].length;
              y = grid2.length - 1;
            }
          } else if (x == grid2[y].length - 1) {
            // console.log(x);
            // console.log(grid2[y + 2][x]);
            if (grid2[y + 2] == undefined) {
              console.log(grid2.length - 2, y);

              if (y == grid2.length - 2) {
                grid2[y + 1][x - 1] = 1;
                grid2[y][x] = 0;
                // console.log("markus is the winner");
                x = grid2[y].length;
                y = grid2.length - 1;
              } else {
                grid2[y][x - 2] = 1;
                grid2[y][x] = 0;

                x = grid2[y].length;
                y = grid2.length - 1;
              }
            } else {
              console.log(x, y);
              grid2[y + 2][x] = grid2[y][x];
              grid2[y][x] = 0;
              //   console.log("mar lose chess");

              x = grid2[y].length;
              y = grid2.length - 1;
            }
          } else if (y == grid2.length - 1) {
            // console.log(y);
            if (grid2[y][x - 2] == undefined) {
              //   console.log(x, grid2[y].length - 2);

              if (x == grid2[y].length - 1 - (grid2[y].length - 2)) {
                grid2[y - 1][x - 1] = 1;
                grid2[y][x] = 0;
                // console.log("markus is the winner");
                x = grid2[y].length;
                y = grid2.length - 1;
              } else {
                console.log(x, y);
                grid2[y - 2][x] = 1;
                grid2[y][x] = 0;

                x = grid2[y].length;
                y = grid2.length - 1;
              }
            } else {
              grid2[y][x - 2] = grid2[y][x];
              grid2[y][x] = 0;
              //   console.log("mar lose chess");

              x = grid2[y].length;
              y = grid2.length - 1;
            }
          } else if (x == 0) {
            // console.log(x);
            // console.log(grid2[y + 2][x]);
            if (grid2[y - 2] == undefined) {
              console.log(grid2.length - 2, y);

              if (y == grid2.length - 1 - (grid2.length - 2)) {
                grid2[y - 1][x + 1] = 1;
                grid2[y][x] = 0;
                // console.log("markus is the winner");
                x = grid2[y].length;
                y = grid2.length - 1;
              } else {
                grid2[y][x + 2] = 1;
                grid2[y][x] = 0;

                x = grid2[y].length;
                y = grid2.length - 1;
              }
            } else {
              console.log(x, y);
              grid2[y - 2][x] = grid2[y][x];
              grid2[y][x] = 0;
              //   console.log("mar lose chess");

              x = grid2[y].length;
              y = grid2.length - 1;
            }
          }
        }
      }
    }
    console.log(grid2);
  }
}

// let grid = [
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//   [0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0],
//   [0, 1, 2, 3, 3, 3, 3, 3, 3, 2, 1, 0],
//   [0, 1, 2, 3, 4, 4, 4, 4, 3, 2, 1, 0],
//   [0, 1, 2, 3, 4, 5, 5, 4, 3, 2, 1, 0],
//   [0, 1, 2, 3, 4, 4, 4, 4, 3, 2, 1, 0],
//   [0, 1, 2, 3, 3, 3, 3, 3, 3, 2, 1, 0],
//   [0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0],
//   [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// ];

let grid2 = [
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
