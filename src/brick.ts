import Sprite from './sprite.js';

class Brick extends Sprite {

  x: number;
  y: number;
  color: string;
  width: number;
  height: number;
  status: number;

  constructor(x: number, y: number, width: number, height: number, color: string, status: number) {
    super(x, y, width, height, color);

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = '#e0218a';
    this.status = 1;
  }

  render(ctx: any) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

export default Brick;
