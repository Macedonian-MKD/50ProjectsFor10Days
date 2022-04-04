const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const parent = document.querySelector(".search");

btn.addEventListener("click", function () {
  parent.classList.toggle("active");
  input.focus();
});
