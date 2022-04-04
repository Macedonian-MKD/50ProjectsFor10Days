const background = document.querySelector(".background");
const password = document.getElementById("password");
const output = document.querySelector(".output");
password.addEventListener("input", function (e) {
  let blur = 20 - password.value.length * 1.75;
  background.style.filter = `blur(${Math.trunc(blur)}px)`;
  if (password.value.length === 0) {
    output.innerText = "";
  }
  if (password.value.length < 5 && password.value.length >= 1) {
    output.innerText = "Weak";
    output.style.color = "red";
  }
  if (password.value.length > 5 && password.value.length < 11) {
    output.innerText = "Medium";
    output.style.color = "orange";
  }
  if (password.value.length >= 11) {
    output.innerText = "Strong";
    output.style.color = "green";
  }
});
