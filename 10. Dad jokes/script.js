const jokeElement = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

generateJoke();

const config = {
  headers: {
    Accept: "application/json",
  },
};

async function generateJoke() {
  try {
    const res = await fetch("https://icanhazdadjoke.com", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await res.json();
    jokeElement.innerHTML = data.joke;
  } catch (err) {
    jokeElement.innerHTML = "Something went wrong. Please try again";
  }
}

jokeBtn.addEventListener("click", generateJoke);
