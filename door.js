class Door {
  constructor(col, row, num, x, y, multiplier) {
    this.col = col;
    this.row = row;
    this.num = num;
    this.x = x;
    this.y = y;
    this.ximg = 50;
    this.yimg = 55;
    this.multiplier = multiplier;
  }
  preload() {
    this.imgdo = loadImage("assets/doordo.png");
    this.imgri = loadImage("assets/doorri2.png");
    this.imgup = loadImage("assets/doorup.png");
    this.imgle = loadImage("assets/doorle.png");
    this.cake = loadImage("assets/cake.png");
    this.img = this.imgdo;
  }
  drawDoor() {
    image(this.img, 50 * this.x, 50 * this.y, this.ximg, this.yimg);
  }
  drawCake() {
    image(this.cake, 50 * this.x, 50 * this.y, 20, 20);
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
      this.x <= grid2[0].length - this.multiplier
    ) {
      this.x++;
      this.ximg = 50;
      this.yimg = 55;
      this.img = this.imgdo;
      if (this.x === grid2[0].length + 1 - this.multiplier) {
        this.y++;
        this.ximg = 6;
        this.yimg = 50.3;
        this.img = this.imgle;
      }
    } else if (
      this.x > grid2[0].length - this.multiplier &&
      this.y <= grid2.length - this.multiplier
    ) {
      this.y++;
      this.ximg = 6;
      this.yimg = 50.3;
      this.img = this.imgle;
      if (this.y === grid2.length + 1 - this.multiplier) {
        this.x--;
        this.ximg = 50.3;
        this.yimg = 6;
        this.img = this.imgup;
      }
    } else if (
      this.y > grid2.length - this.multiplier &&
      this.x > this.multiplier
    ) {
      this.x -= 1;
      this.ximg = 50.3;
      this.yimg = 6;
      this.img = this.imgup;
      if (this.x === this.multiplier) {
        this.y--;
        this.ximg = 55;
        this.yimg = 50;
        this.img = this.imgri;
      }
    } else {
      this.y -= 1;
      this.ximg = 55;
      this.yimg = 50;
      this.img = this.imgri;
      if (this.y === this.multiplier) {
        this.x++;
        this.ximg = 50;
        this.yimg = 55;
        this.img = this.imgdo;
      }
    }
    // console.log(this.x, this.y);
  }
}
