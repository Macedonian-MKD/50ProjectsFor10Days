const nav = document.getElementById("nav");
const btn = document.getElementById("toggle");

btn.addEventListener("click", function (e) {
  nav.classList.toggle("active");
});
