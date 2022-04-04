const nav = document.querySelector(".nav");
const hero = document.querySelector(".hero");
window.addEventListener("scroll", fixedNav);

function fixedNav(e) {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}

console.log(nav.offsetHeight);
console.log(nav.clientHeight);
console.log(nav.scrollHeight);
