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

  trumpgettheflag() {
    // console.log(this.x, this.y);
    if ((this.x == 5 || this.x == 6) && this.y == 5 && game.finished == false) {
      console.log("america");
      if (!amerGreat.isPlaying()) {
        amerGreat.setVolume(0.2);
        amerGreat.play();
      }
      game.trumpHitTheFlag = true;
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
        console.log("DIONI GAME OVER MAR");
        game.endGame();
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
    // image(this.img, this.col, this.row, 45, 45);
    image(this.img, this.col + 4, this.row + 5, 45, 45);
  }
}
