import Sprite from './sprite';

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

class Paddle extends Sprite {
  constructor(x, y, width = 75, height = 20, color = '#0095DD') {
    super(x, y, width, height, color);
  }

  render() {
    ctx.beginPath();
    ctx.rect(this.x, canvas.height - this.height, this.width, this.height);
    ctx.fillStyle = '#e0218a';
    ctx.fill();
    ctx.closePath();
  }
}

export default Paddle;
