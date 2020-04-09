class Shootdo {
  constructor() {
    this.width = SQUARE_SIDE;
    this.height = SQUARE_SIDE;

    this.x = 12 * SQUARE_SIDE;
    this.y = Math.floor(Math.random() * 6 - 5) * SQUARE_SIDE;
  }

  preload() {
    this.img = loadImage("assets/cake.png");
  }
  draw() {
    this.x -= 1;
    this.y += 1;

    image(imgcake, this.x, this.y, this.width, this.height);
  }

  collides() {
    // let xCollision = this.x < trump.x * 50 + 45 && this.x + 50 > trump.x * 50;
    // let yCollision = this.y < trump.y * 50 + 45 && this.y + 50 > trump.y * 50;
    let xCollision = this.x < trump.x * 50 + 45 && this.x + 50 > trump.x * 50;
    let yCollision = this.y < trump.y * 50 + 45 && this.y + 50 > trump.y * 50;

    if (xCollision && yCollision) {
      game.endGame();
    }
  }
}
