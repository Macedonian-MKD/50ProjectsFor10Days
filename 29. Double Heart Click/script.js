const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");

let clickTime = 0;
let timesClicked = 0;

// there is double click event, but this is our own double click event
loveMe.addEventListener("click", function (e) {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 300) {
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

function createHeart(e) {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");
  console.log(e);
  const x = e.clientX;
  const y = e.clientY;
  console.log("clientX:", x, " clientY:", y);
  const topOffset = e.target.offsetTop;
  const leftOffset = e.target.offsetLeft;
  console.log("topOffset:", topOffset, "  leftOffset:", leftOffset);
  const xInside = x - leftOffset;
  const yInside = y - topOffset;
  console.log("xInside:", xInside, " yInside:", yInside);
  heart.style.top = yInside + "px";
  heart.style.left = xInside + "px";
  +"px";
  loveMe.append(heart);
  times.innerHTML = ++timesClicked;
  setTimeout(() => {
    loveMe.innerHTML = "";
  }, 10000);
}
