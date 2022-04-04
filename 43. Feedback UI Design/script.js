const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.getElementById("send");
const panel = document.getElementById("panel");
let selectedRating = "Satisfied";

ratingsContainer.addEventListener("click", function (e) {
  ratings.forEach((rating) => rating.classList.remove("active"));
  e.target.closest(".rating").classList.add("active");
  selectedRating = e.target.closest(".rating").querySelector("small").innerHTML;
});

sendBtn.addEventListener("click", function () {
  panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You</strong>
    <br>
    <strong>Feedback: ${selectedRating} </strong>
    <p>We'll use your feedback to improve our customer support</p>`;
});
