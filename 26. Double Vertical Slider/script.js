const leftSlide = document.querySelector(".left-slide");
const rightSlide = document.querySelector(".right-slide");
const sliderContainer = document.querySelector(".slider-container");
const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const slidesLength = rightSlide.querySelectorAll("div").length;

let activeSlideIndex = 0;

leftSlide.style.top = `-${(slidesLength - 1) * 100}vh`;

upBtn.addEventListener("click", function () {
  changeSlide("up");
});

downBtn.addEventListener("click", function () {
  changeSlide("down");
});

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;

    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }

  rightSlide.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  leftSlide.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
};

//VTOR NACIN:

// const allLeft = document.querySelectorAll(".left-slide > div");
// const allRight = document.querySelectorAll(".right-slide > div");
// let activeLeft = 0;
// let activeRight = allRight.length;
// changeDownRight();
// upBtn.addEventListener("click", function () {
//   changeUpLeft();
//   changeUpRight();
// });

// downBtn.addEventListener("click", function () {
//   changeDownLeft();
//   changeDownRight();
// });

// function changeDownLeft() {
//   activeLeft++;
//   if (activeLeft >= allLeft.length) {
//     activeLeft = 0;
//   }
//   allLeft.forEach((left) => {
//     left.style.transform = "translateY(0)";
//   });
//   allLeft[activeLeft].style.transform = `translateY(-${activeLeft * 100}%)`;
// }

// function changeDownRight() {
//   activeRight--;
//   if (activeRight < 0) {
//     activeRight = 3;
//   }
//   allRight.forEach((right) => {
//     right.style.transform = "translateY(0)";
//   });
//   allRight[activeRight].style.transform = `translateY(-${activeRight * 100}%)`;
// }

// function changeUpLeft() {
//   activeLeft--;
//   if (activeLeft < 0) {
//     activeLeft = 3;
//   }
//   allLeft.forEach((left) => {
//     left.style.transform = "translateY(0)";
//   });
//   allLeft[activeLeft].style.transform = `translateY(-${activeLeft * 100}%)`;
// }

// function changeUpRight() {
//   activeRight++;
//   if (activeRight >= allRight.length) {
//     activeRight = 0;
//   }
//   allRight.forEach((right) => {
//     right.style.transform = "translateY(0)";
//   });
//   allRight[activeRight].style.transform = `translateY(-${activeRight * 100}%)`;
// }
