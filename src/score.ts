import Sprite from './sprite.js';

class Score {
  score: number;
  font: string;
  color: string
  x: number;
  y: number;
  height: number;
  constructor(x:number, y:number, score:number, font:string, color = '#0095DD') {
    this.score = score; // adds a new property
    this.font = font;
    this.x = x;
    this.y = y;
  }

  render(ctx: any) {
    ctx.font = this.font;
    ctx.fillStyle = this.color;
    ctx.fillText(`Score: ${this.score}`, 8, 20);
  }

  update(points: number) {
    this.score += points;
  }

  reset() {
    this.score = 0;
  }
}

export default Score;
