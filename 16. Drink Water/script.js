const smallCups = document.querySelectorAll(".cup-small");
const liters = document.querySelector("#liters");
const percentage = document.querySelector("#percentage");
const remained = document.querySelector("#remained");

updateBigCup();

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", function () {
    return highlightCups(idx);
  });
});

function highlightCups(idx) {
  if (
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx + 1].classList.contains("full")
  ) {
    idx--;
  }
  smallCups.forEach((cup, index) => {
    if (index <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });
  updateBigCup();
}

function updateBigCup() {
  const full = 2000;
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const totalCups = smallCups.length;
  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCups) * 100 + "%"}`;
    percentage.innerText = `${(fullCups / totalCups) * 100 + "%"}`;
  }
  if (fullCups === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    remained.style.height = 20 + "px";
    liters.innerText = `${2 - (fullCups * 250) / 1000} L`;
  }
}
