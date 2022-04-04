const open = document.querySelector(".fa-chevron-down");
const close = document.querySelector(".fa-times");
const btns = document.querySelectorAll(".faq-toggle");

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    btn.parentNode.classList.toggle("active");
  });
});
