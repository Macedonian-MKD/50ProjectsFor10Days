const container = document.querySelector(".container");

for (let i = 0; i < 500; i++) {
  container.appendChild(document.createElement("div"));
}
const divs = container.querySelectorAll("div");

const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
divs.forEach((div) => {
  div.addEventListener("mouseenter", function (e) {
    const color = getRandomColor();
    this.style.backgroundColor = color;
    this.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
  });
  div.addEventListener("mouseleave", function (e) {
    e.target.style.backgroundColor = "#222";
    this.style.boxShadow = ``;
  });
});
