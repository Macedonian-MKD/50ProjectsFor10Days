const range = document.getElementById("range");
const label = document.querySelector("label");

range.addEventListener("input", function (e) {
  const range_width = getComputedStyle(e.target).getPropertyValue("width"); // get from CSS
  const label_width = getComputedStyle(label).getPropertyValue("width"); // get from CSS
  const widthInNumber = +range_width.slice(0, -2);
  const labelInNumber = +label_width.slice(0, -2);
  const min = +e.target.min;
  const max = +e.target.max;
  const left =
    e.target.value * (widthInNumber / max) -
    labelInNumber / 2 +
    scale(e.target.value, min, max, 10, -10);
  console.log(left);
  label.style.left = left + "px";
  label.innerText = e.target.value;
});

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
