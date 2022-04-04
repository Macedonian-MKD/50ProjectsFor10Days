const prevBtn = document.getElementById("left");
const nextBtn = document.getElementById("right");
const imgContainer = document.getElementById("imgs");
const allImages = document.querySelectorAll("img");

let active = 0;
let interval = setInterval(run, 2000);

function run() {
  active++;
  changeImage();
}

function changeImage() {
  if (active >= allImages.length) {
    active = 0;
  } else if (active < 0) {
    active = allImages.length - 1;
  }
  imgContainer.style.transform = `translateX(-${active * 500}px)`;
}

nextBtn.addEventListener("click", function () {
  resetInterval();
  active++;
  changeImage();
});

prevBtn.addEventListener("click", function () {
  resetInterval();
  active--;
  changeImage();
});

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}
