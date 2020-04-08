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
    frameRate(60);
    this.x -= 1;
    this.y -= 1;
    console.log(this.x, this.y, trump.x, trump.y);

    // console.log(this.index % 4);
    // if (frameCount % 10 === 0) {
    //   this.index++;
    // }
    image(this.img, this.x, this.y, this.width, this.height);
  }

  collides() {
    let xCollision = this.x < trump.x * 50 + 45 && this.x + 50 > trump.x * 50;
    let yCollision = this.y < trump.y * 50 + 45 && this.y + 50 > trump.y * 50;

    if (xCollision && yCollision) {
      // console.log("good");
      game.endGame();
    }
  }
  //
}
