const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const numberParticles = 100;
let particlesArray = [];
const pumpkin = new Image();
pumpkin.src = "Halloween.png";

const pumpkins = new Image();
pumpkins.src = "pumpkins.png";

// ctx.translate(100, 100);
// ctx.rotate((1000 * Math.PI) / 360);
// ctx.fillRect(0, 0, 100, 150);

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 70 + 10;
    this.speed = Math.random() * 2 + 0.5;
    this.angle = Math.random() * 360;
    this.spin = Math.random() < 0.5 ? -1 : 1;

    this.frameX = Math.floor(Math.random() * 3);
    this.frameY = Math.floor(Math.random() * 3);
    this.spriteSie = 900 / 3;
  }
  draw() {
    // ctx.fillRect(this.x, this.y, this.size, this.size);
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(((this.angle * Math.PI) / 360) * this.spin);
    // ctx.fillStyle = "red";
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      pumpkin,
      0 - this.size / 2,
      0 - this.size / 2,
      this.size,
      this.size
    );
    ctx.drawImage(
      pumpkins,
      this.frameX * this.spriteSie,
      this.frameY * this.spriteSie,
      this.spriteSie,
      this.spriteSie,
      0 - this.size / 2,
      0 - this.size / 2,
      this.size,
      this.size
    );
    ctx.restore();
  }
  update() {
    this.angle += 2;
    if (this.y - this.size > canvas.height) {
      this.y = 0 - this.size;
      this.x = Math.random() * canvas.width;
      this.size = Math.random() * 20 + 50;
      this.speed = Math.random() * 2 + 0.5;
    }
    this.y += this.speed;
  }
}

function init() {
  for (let i = 0; i < numberParticles; i++) {
    particlesArray.push(new Particle());
  }
}
init();

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].draw();
    particlesArray[i].update();
  }
  requestAnimationFrame(animate);
}
animate();
