import Sprite from './sprite.js';

class Score extends Sprite {
  constructor(x, y, score, font, color = '#0095DD') {
    super(x, y, color); // pass arguments to Sprite!
    this.score = score; // adds a new property
    this.font = font;
  }

  render(ctx) {
    ctx.font = this.font;
    ctx.fillStyle = this.color;
    ctx.fillText(`Score: ${this.score}`, 8, 20);
  }

  update(points) {
    this.score += points;
  }

  reset() {
    this.score = 0;
  }
}

export default Score;
