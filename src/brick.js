import Sprite from './sprite.js';

class Brick extends Sprite {
  constructor(x, y, width, height, color, status) {
    super(x, y, width, height, color, status);

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = '#e0218a';
    this.status = 1;
  }

  render(ctx) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

export default Brick;
