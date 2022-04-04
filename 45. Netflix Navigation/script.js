const closeBtn = document.querySelector(".close-btn");
const black = document.querySelector(".nav-black");
const red = document.querySelector(".nav-red");
const white = document.querySelector(".nav-white");
const openBtn = document.querySelector(".open-btn");
const allNavs = document.querySelectorAll(".nav");

openBtn.addEventListener("click", function () {
  openBtn.classList.add("none");
  allNavs.forEach((nav) => {
    nav.classList.add("visible");
  });
  //   black.style.transform = " translateX(0)";
});

closeBtn.addEventListener("click", function () {
  allNavs.forEach((nav) => {
    nav.classList.remove("visible");
  });
  //   black.style.transform = " translateX(-500%)";
  openBtn.classList.remove("none");
});
