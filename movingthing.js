class Movingthing {
  constructor(col, row, x, y) {
    this.x = col;
    this.y = row;
    /* this.x = x;
      this.y = y; */
  }
  preload() {
    this.img = loadImage("assets/corona.png");
  }

  drawMoving() {
    // image(coronimg, this.x, this.y, 45, 45);
    image(coronimg, this.x + 3.5, this.y + 3.5, 45, 45);
  }
}
