import Brick from './brick';

class Bricks {
  rows: number;
  cols: number;
  bricks: any;
  x: number;
  y: number;
  width: number;
  height: number;
  constructor(rows = 3, cols = 5) {
    this.rows = rows;
    this.cols = cols;
    this.bricks = [];
    this.width = 75;
    this.height = 20;
    this.setup();
  }

  setup() {
    for (let c = 0; c < this.cols; c += 1) {
      this.bricks[c] = [];
      for (let r = 0; r < this.rows; r += 1) {
        this.x = (c * (this.width + 10)) + 30;
        this.y = (r * (this.height + 10)) + 30;
        const brick = new Brick(this.x, this.y, this.width, this.height, "#e0218a", 1);
        this.bricks[c][r] = brick;
      }
    }
  }

  render(ctx: any) {
    for (let c = 0; c < this.cols; c += 1) {
      for (let r = 0; r < this.rows; r += 1) {
        if (this.bricks[c][r].status === 1) {
          this.bricks[c][r].render(ctx);
        }
      }
    }
  }
}

export default Bricks;
