const boxesContainer = document.getElementById("boxes");
const magic = document.getElementById("btn");

// for (let i = 0; i < 16; i++) {
//   const box = document.createElement("div");
//   box.classList.add("box");
//   boxesContainer.appendChild(box);
// }

// const boxes = Array.from(document.querySelectorAll(".box"));
// const prvi4 = [boxes[0], boxes[1], boxes[2], boxes[3]];
// const vtori4 = [boxes[4], boxes[5], boxes[6], boxes[7]];
// const treti4 = [boxes[8], boxes[9], boxes[10], boxes[11]];
// const cetvrti4 = [boxes[12], boxes[13], boxes[14], boxes[15]];

// prvi4.forEach((box, index) => {
//   box.style.backgroundPosition = `-${index * 125}px 0`;
// });
// vtori4.forEach((box, index) => {
//   box.style.backgroundPosition = `-${index * 125}px -125px`;
// });

// treti4.forEach((box, index) => {
//   box.style.backgroundPosition = `-${index * 125}px -250px`;
// });

// cetvrti4.forEach((box, index) => {
//   box.style.backgroundPosition = `-${index * 125}px -375px`;
// });

magic.addEventListener("click", function () {
  boxesContainer.classList.toggle("big");
});

// Vtor Nacin

createBoxes();

function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.backgroundPosition = `-${j * 125}px -${i * 125}px`;
      boxesContainer.appendChild(box);
    }
  }
}
