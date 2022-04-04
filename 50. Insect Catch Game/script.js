const screens = document.querySelectorAll(".screen");
const startBtn = document.querySelector("#start-btn");
const choose_insect_btns = document.querySelectorAll(".choose-insect-btn");
const gameContainer = document.querySelector(".game-container");
const timeEl = document.getElementById("time");
const scoreEl = document.getElementById("score");
const message = document.getElementById("message");
let seconds = 0;
let score = 0;
let selected_insect = {};
startBtn.addEventListener("click", function () {
  screens[0].classList.add("up");
});

choose_insect_btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const img = btn.querySelector("img");
    const src = img.src;
    const alt = img.alt;
    selected_insect = { src, alt };
    screens[1].classList.add("up");
    setTimeout(createInsect, 1000);
    startGame();
  });
});

function startGame() {
  setInterval(increaseTime, 1000);
}

function increaseTime() {
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  timeEl.innerHTML = `Time: ${m}:${s}`;
  seconds++;
}

function createInsect() {
  const insect = document.createElement("div");
  insect.classList.add("insect");
  insect.innerHTML = ` <img src="${selected_insect.src}" alt="${
    selected_insect.alt
  }" style="transform:rotate(${Math.random() * 360}deg)" />`;
  const { x, y } = getRandomLocation();
  insect.style.top = `${x}px`;
  insect.style.left = `${y}px`;
  insect.style.cursor = "pointer";
  insect.addEventListener("click", catchInsect);
  gameContainer.appendChild(insect);
}

function getRandomLocation() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const x = Math.random() * (width - 200) + 100;
  const y = Math.random() * (height - 200) + 100;
  return { x, y };
}

function catchInsect() {
  increaseScore();
  this.classList.add("caught");
  setTimeout(() => this.remove, 2000);
  addInsects();
}

function addInsects() {
  // Everytime you click one, two more show up
  setTimeout(createInsect, 1000);
  setTimeout(createInsect, 1500);
}

function increaseScore() {
  score++;
  if (score > 19) {
    message.classList.add("visible");
  }
  scoreEl.innerHTML = `Score: ${score}`;
}
