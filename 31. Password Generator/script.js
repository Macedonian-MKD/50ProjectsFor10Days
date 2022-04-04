const generate = document.getElementById("generate");
const result = document.getElementById("result");
const clipboard = document.getElementById("clipboard");
const lengthEl = document.getElementById("length");
const lowerCase = document.getElementById("lowercase");
const upperCase = document.getElementById("uppercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomCapital,
  number: getRandomNumbers,
  symbol: getRandomSymbols,
};

// Copy to clipboard
clipboard.addEventListener("click", function () {
  const textarea = document.createElement("textarea");
  const password = result.innerText;
  if (!password) return;
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard");
});
generate.addEventListener("click", function () {
  const length = +lengthEl.value;
  const hasLower = lowerCase.checked;
  const hasUpper = upperCase.checked;
  const hasNumber = numbers.checked;
  const hasSymbols = symbols.checked;

  result.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbols,
    length
  );
});

function getRandomLower() {
  return String.fromCharCode(Math.random() * (122 - 97) + 97);
}

function getRandomCapital() {
  return String.fromCharCode(Math.random() * (90 - 65) + 65);
}

function getRandomNumbers() {
  return String.fromCharCode(Math.random() * (57 - 48) + 48);
}

function getRandomSymbols() {
  return String.fromCharCode(Math.random() * (43 - 33) + 33);
}

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );
  if (typesCount === 0) {
    return "";
  }
  for (let i = 0; i < length; i += typesCount) {
    console.log(i);
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }
  return generatedPassword.slice(0, length);
}
