import Score from './score.js';

class Lives {
  lives: number;
  font: string;
  color: string
  x: number;
  y: number;

  constructor(x: number, y: number, lives: number, font: string, color = '#0095DD') {
    this.lives = lives; // adds a new property
    this.font = font;
    this.x = x;
    this.y = y;
    this.color = color;
  }

  render(ctx: any) {
    ctx.font = this.font;
    ctx.fillStyle = this.color;
    ctx.fillText(`Lives: ${this.lives}`, this.x, this.y);
  }

  loseLife() {
    this.lives -= 1;
  }

  reset() {
    this.lives = 0;
  }
}

export default Lives;
