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
    image(s1, 45, 45, 515, 465);
  }
  drawFire() {
    image(s1, 45, 45, 516, 463);
    image(s2, 97, 97, 411, 361);
    image(s3, 147, 148, 310, 260);
    image(s4, 196.5, 197, 212, 162);
    image(s5, 246, 245, 112, 62);
  }
}
