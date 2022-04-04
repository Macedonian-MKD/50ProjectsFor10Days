const button = document.querySelector("button");

button.addEventListener("click", function (e) {
  console.log(e);
  const circle = document.createElement("span");
  circle.classList.add("circle");
  circle.style.top = `${e.offsetY}px`;
  circle.style.left = `${e.offsetX}px`;
  button.appendChild(circle);
  setTimeout(() => {
    circle.remove();
  }, 500);
});
