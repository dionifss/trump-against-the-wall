class Shoot {
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
    this.x -= 2;
    this.y -= 2;

    // console.log(this.index % 4);
    // if (frameCount % 10 === 0) {
    //   this.index++;
    // }
    image(this.img, this.x, this.y, this.width, this.height);
  }

  collides(trump) {
    let xCollision =
      (this.x > trump.x && this.x < trump.x + trump.width) ||
      (this.x + this.width > trump.x &&
        this.x + this.width < trump.x + trump.width);

    let yCollision =
      (this.y > trump.y && this.y < trump.y + trump.height) ||
      (this.y + this.height > trump.y &&
        this.y + this.height < trump.y + trump.height);
    let collision = xCollision && yCollision;
    if (xCollision && yCollision) {
      console.log("corona make you Game Over");
      game.endGame();
    }
    return collision;
  }
}
