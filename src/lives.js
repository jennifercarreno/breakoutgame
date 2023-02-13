import Score from './score.js';

class Lives extends Score {
  constructor(x, y, lives, font, color = '#0095DD') {
    super(x, y, color); // pass arguments to Sprite!
    this.lives = lives; // adds a new property
    this.font = font;
  }

  render(ctx) {
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
