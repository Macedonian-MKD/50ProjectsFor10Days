const allImages = document.querySelectorAll("img");
const allButtons = document.querySelectorAll("li");

allButtons.forEach((button, index) => {
  button.addEventListener("click", function (e) {
    allButtons.forEach((but) => {
      but.classList.remove("active");
    });
    allImages.forEach((img) => {
      img.classList.remove("show");
    });
    allImages[index].classList.add("show");
    e.target.closest("li").classList.add("active");
  });
});
