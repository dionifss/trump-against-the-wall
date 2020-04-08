class Flag {
  preload() {
    this.img = loadImage("assets/flag.png");
  }
  drawFlag() {
    image(this.img, (WIDTH - 85) / 2, (HEIGHT - 52) / 2, 80, 50);
  }
}
