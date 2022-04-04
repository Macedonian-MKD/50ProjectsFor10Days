const textarea = document.getElementById("textarea");
const tagsElements = document.getElementById("tags");
// textarea.focus();
// textarea.addEventListener("keyup", function (e) {
//   createTags(e.target.value);
//   if (e.key === "Enter") {
//     setTimeout(() => {
//       e.target.value = "";
//     }, 10);
//     randomSelect();
//   }
// });

// function createTags(input) {
//   const tags = input
//     .split(",")
//     .filter((tag) => tag.trim() !== "")
//     .map((tag) => tag.trim());
//   tagsElements.innerHTML = "";
//   tags.forEach((tag) => {
//     const tagEl = document.createElement("span");
//     tagEl.classList.add("tag");
//     tagEl.innerText = tag;
//     tagsElements.appendChild(tagEl);
//   });
// }

// function randomSelect() {
//   const times = 30;
//   let interval = setInterval(() => {
//     const randomTag = pickRandomTag();
//     highlightTag(randomTag);
//     setTimeout(() => {
//       unhighlightTag(randomTag);
//     }, 100);
//   }, 100);

//   setTimeout(() => {
//     clearInterval(interval);
//     setTimeout(() => {
//       const randomTag = pickRandomTag();
//       highlightTag(randomTag);
//     }, 100);
//   }, times * 100);
// }

// function pickRandomTag() {
//   const tags = document.querySelectorAll(".tag");

//   return tags[Math.floor(Math.random() * tags.length)];
// }

// function highlightTag(tag) {
//   tag.classList.add("highlight");
// }

// function unhighlightTag(tag) {
//   tag.classList.remove("highlight");
// }

textarea.focus();
textarea.addEventListener("keyup", function (e) {
  createTags(e.target.value);
  const els = document.querySelectorAll(".tag");
  if (e.key === "Enter" && els.length !== 0) {
    setTimeout(() => {
      e.target.value = "";
    }, 10);
    randomSelect();
  }
});

function createTags(input) {
  const niza = input
    .split(",")
    .filter((value) => value.trim() !== "")
    .map((value) => value.trim());
  tagsElements.innerHTML = "";
  niza.forEach((val) => {
    const element = document.createElement("span");
    element.classList.add("tag");
    element.textContent = val;
    tagsElements.appendChild(element);
  });
}

function pickRandomTag() {
  const niza = document.querySelectorAll(".tag");
  return niza[Math.floor(Math.random() * niza.length)];
}

function highlight(tag) {
  tag.classList.add("highlight");
}
function unhighlight(tag) {
  tag.classList.remove("highlight");
}
function randomSelect() {
  const times = 30;
  const interval = setInterval(() => {
    const randomEl = pickRandomTag();
    highlight(randomEl);
    setTimeout(() => {
      unhighlight(randomEl);
    }, 100);
  }, 100);
  setTimeout(() => {
    clearInterval(interval);
    const randomEl = pickRandomTag();
    highlight(randomEl);
  }, times * 100);
}
