const canvas = document.getElementById("canvas");
const sizeEl = document.getElementById("size");
const ctx = canvas.getContext("2d");
const clr = document.getElementById("color");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const clear = document.getElementById("clear");
let size = +sizeEl.textContent;
increase.addEventListener("click", function () {
  size += 5;
  if (size > 50) {
    size = 50;
    return;
  }
  sizeEl.textContent = size;
});

clear.addEventListener("click", function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

decrease.addEventListener("click", function () {
  size -= 5;
  if (size < 5) {
    size = 5;
    return;
  }
  sizeEl.textContent = size;
});
let isPressed = false;
let color = "black";
let x;
let y;

console.log(color);
canvas.addEventListener("mousedown", function (e) {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", function (e) {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", function (e) {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2, true); // Outer circle
  color = clr.value;
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  color = clr.value;
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}
