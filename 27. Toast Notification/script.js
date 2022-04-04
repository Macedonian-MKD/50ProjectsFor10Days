const button = document.getElementById("button");
const toasts = document.getElementById("toasts");
const messages = [
  "Wrong Username or Password",
  "Username must have at least 4 characters",
  "Passwords must contain capital letter and at least 7 characters",
  "Paswords does not match",
];

const colors = ["rebeccapurple", "green", "red", "blue", "yellowgreen"];

button.addEventListener("click", () => {
  createNotification();
});

function createNotification() {
  const el = document.createElement("div");
  el.classList.add("toast");
  el.style.color = getRandomColor();
  el.textContent = getRandomMessage();
  toasts.prepend(el);
  //   setTimeout(() => {
  //     toasts.querySelectorAll(".toast").forEach((toast) => {
  //       toast.classList.add("fade");
  //     });
  //   }, 2500);
  setTimeout(() => {
    el.remove();
  }, 3000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
