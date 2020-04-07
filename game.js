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
  constructor(col, row, x, y) {
    this.col = col;
    this.row = row;
    this.x = x;
    this.y = y;
    this.squarePosition = 0;
    this.doors = [];
  }

  moveUp() {
    this.row -= 50;
    this.y -= 1;
    this.trumpPasssADoor(this.x, this.y + 1);
  }

  moveDown() {
    this.row += 50;
    this.y += 1;
    this.trumpPasssADoor(this.x, this.y - 1);
  }

  moveLeft() {
    this.col -= 50;
    this.x -= 1;
    this.trumpPasssADoor(this.x + 1, this.y);
  }

  moveRight() {
    this.col += 50;
    this.x += 1;
    this.trumpPasssADoor(this.x - 1, this.y);
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

  trumpPasssADoor(trumpPreviousX, trumpPreviousY) {
    if (this.squarePosition !== trumpArr[this.y][this.x]) {
      let pasingDoor = false;
      this.doors.forEach((element) => {
        if (trumpPreviousX == element.x && trumpPreviousY == element.y) {
          this.squarePosition = trumpArr[this.y][this.x];
          pasingDoor = true;
          console.log("wiin win");
          console.log("passed");
        }
      });
      if (pasingDoor == true) {
        console.log("well done");
      } else {
        console.log("gme over");
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
    image(this.img, this.col + 4, this.row + 5, 46, 46);
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
    strokeWeight(5);
    noFill();
    rect(this.col + 2.05, this.col + 2.05, this.size + 50, this.size);
  }
}

class Movingthing {
  constructor(col, row, x, y) {
    this.col = col;
    this.row = row;
    this.x = x;
    this.y = y;
  }
  preload() {
    this.img = loadImage("assets/corona.png");
  }

  drawMoving() {
    image(coronimg, this.col + 3.5, this.row + 3.5, 45, 45);
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
  constructor(col, row, num, x, y, multiplier) {
    this.col = col;
    this.row = row;
    this.num = num;
    this.x = x;
    this.y = y;
    this.ximg = 50;
    this.yimg = 6;
    this.multiplier = multiplier;
  }
  preload() {
    this.imgdo = loadImage("assets/doordo.png");
    this.imgri = loadImage("assets/doorri2.png");
    this.imgup = loadImage("assets/doorup.png");
    this.imgle = loadImage("assets/doorle.png");
    this.img = this.imgdo;
  }
  drawDoor() {
    image(
      this.img,
      this.col + 50 * this.x,
      this.row + 50 * this.y,
      this.ximg,
      this.yimg
    );
  }

  movingDoor() {
    //     // console.log("dioni´s clubs is better");
    //     for (let y = 0; y < grid2.length; y++) {
    //       //   console.log("markus fan club");
    //       for (let x = 0; x < grid2[y].length; x++) {
    //         if (grid2[y][x] > 0) {
    //           //   console.log(y, x);
    //           if (y == 0) {
    //             // console.log(y);
    //             if (grid2[y][x + 2] == undefined) {
    //               //   console.log(x, grid2[y].length - 2);
    //               if (x == grid2[y].length - 2) {
    //                 grid2[y + 1][x + 1] = 1;
    //                 grid2[y][x] = 0;
    //                 // console.log("markus is the winner");
    //                 x = grid2[y].length;
    //                 y = grid2.length - 1;
    //               } else {
    //                 grid2[y + 2][x] = 1;
    //                 grid2[y][x] = 0;
    //                 x = grid2[y].length;
    //                 y = grid2.length - 1;
    //               }
    //             } else {
    //               grid2[y][x + 2] = grid2[y][x];
    //               grid2[y][x] = 0;
    //               //   console.log("mar lose chess");
    //               x = grid2[y].length;
    //               y = grid2.length - 1;
    //             }
    //           } else if (x == grid2[y].length - 1) {
    //             // console.log(x);
    //             // console.log(grid2[y + 2][x]);
    //             if (grid2[y + 2] == undefined) {
    //               console.log(grid2.length - 2, y);
    //               if (y == grid2.length - 2) {
    //                 grid2[y + 1][x - 1] = 1;
    //                 grid2[y][x] = 0;
    //                 // console.log("markus is the winner");
    //                 x = grid2[y].length;
    //                 y = grid2.length - 1;
    //               } else {
    //                 grid2[y][x - 2] = 1;
    //                 grid2[y][x] = 0;
    //                 x = grid2[y].length;
    //                 y = grid2.length - 1;
    //               }
    //             } else {
    //               console.log(x, y);
    //               grid2[y + 2][x] = grid2[y][x];
    //               grid2[y][x] = 0;
    //               //   console.log("mar lose chess");
    //               x = grid2[y].length;
    //               y = grid2.length - 1;
    //             }
    //           } else if (y == grid2.length - 1) {
    //             // console.log(y);
    //             if (grid2[y][x - 2] == undefined) {
    //               //   console.log(x, grid2[y].length - 2);
    //               if (x == grid2[y].length - 1 - (grid2[y].length - 2)) {
    //                 grid2[y - 1][x - 1] = 1;
    //                 grid2[y][x] = 0;
    //                 // console.log("markus is the winner");
    //                 x = grid2[y].length;
    //                 y = grid2.length - 1;
    //               } else {
    //                 console.log(x, y);
    //                 grid2[y - 2][x] = 1;
    //                 grid2[y][x] = 0;
    //                 x = grid2[y].length;
    //                 y = grid2.length - 1;
    //               }
    //             } else {
    //               grid2[y][x - 2] = grid2[y][x];
    //               grid2[y][x] = 0;
    //               //   console.log("mar lose chess");
    //               x = grid2[y].length;
    //               y = grid2.length - 1;
    //             }
    //           } else if (x == 0) {
    //             // console.log(x);
    //             // console.log(grid2[y + 2][x]);
    //             if (grid2[y - 2] == undefined) {
    //               console.log(grid2.length - 2, y);
    //               if (y == grid2.length - 1 - (grid2.length - 2)) {
    //                 grid2[y - 1][x + 1] = 1;
    //                 grid2[y][x] = 0;
    //                 // console.log("markus is the winner");
    //                 x = grid2[y].length;
    //                 y = grid2.length - 1;
    //               } else {
    //                 grid2[y][x + 2] = 1;
    //                 grid2[y][x] = 0;
    //                 x = grid2[y].length;
    //                 y = grid2.length - 1;
    //               }
    //             } else {
    //               console.log(x, y);
    //               grid2[y - 2][x] = grid2[y][x];
    //               grid2[y][x] = 0;
    //               //   console.log("mar lose chess");
    //               x = grid2[y].length;
    //               y = grid2.length - 1;
    //             }
    //           }
    //         }
    //       }
    //     }
  }
  movingMarkusdoor() {
    // console.log(this.x, this.y);
    if (
      this.y === this.multiplier &&
      this.x < grid2[0].length - this.multiplier
    ) {
      this.x++;
      this.ximg = -50;
      this.yimg = 6;
      this.img = this.imgdo;
    } else if (
      this.x === grid2[0].length - this.multiplier &&
      this.y < grid2.length - this.multiplier
    ) {
      this.y++;
      this.ximg = 6;
      this.yimg = -50;
      this.img = this.imgle;
    } else if (
      this.y === grid2.length - this.multiplier &&
      this.x > this.multiplier
    ) {
      this.x -= 1;
      this.ximg = 50;
      this.yimg = 6;
      this.img = this.imgup;
    } else {
      this.y -= 1;
      this.ximg = 6;
      this.yimg = 50;
      this.img = this.imgri;
    }
    // console.log(this.x, this.y);
  }
}

let grid2 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

let trumpArr = [
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
