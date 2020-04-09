class Shootup {
  constructor() {
    this.width = SQUARE_SIDE;
    this.height = SQUARE_SIDE;
    // this.x = 9 * SQUARE_SIDE;
    // this.y = 8 * SQUARE_SIDE;
    this.x = (Math.floor(Math.random() * 10) + 4) * SQUARE_SIDE;
    this.y = 11 * SQUARE_SIDE;
  }

  preload() {
    this.img = loadImage("assets/cake.png");
  }
  draw() {
    this.x -= 1;
    this.y -= 1;
    // console.log(this.x, this.y, trump.x, trump.y);

    image(imgcake, this.x, this.y, this.width, this.height);
  }

  collides() {
    let xCollision =
      this.x + 10 < trump.x * 50 + 45 && this.x + 40 > trump.x * 50;
    let yCollision =
      this.y + 10 < trump.y * 50 + 45 && this.y + 40 > trump.y * 50;

    if (xCollision && yCollision) {
      // console.log("good");
      game.endGame();
    }
  }
  //
}
