const codes = document.querySelectorAll(".code");

codes[0].focus();

codes.forEach((code, index) => {
  code.addEventListener("keydown", function (e) {
    if (e.key >= 0 && e.key <= 9 && index < codes.length - 1) {
      codes[index].value = "";
      setTimeout(() => {
        codes[index + 1].focus();
      }, 10);
    }
    if (e.code === "Backspace" && index >= 1) {
      codes[index].value = "";
      codes[index - 1].focus();
    }
  });
});
