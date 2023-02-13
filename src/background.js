const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

class Background {
  constructor(color) {
    this.color = color;
  }

  render() {
    ctx.beginPath();
    ctx.rect(canvas.x, canvas.y, canvas.width, canvas.height);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}
const background = new Background('#0095DD');
background.render(ctx);
export default Background;
