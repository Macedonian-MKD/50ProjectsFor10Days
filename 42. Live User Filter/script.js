const resultsContainer = document.getElementById("result");
const search = document.getElementById("filter");
const loading = document.querySelector(".loading");
const listItems = [];

async function getData() {
  const res = await fetch("https://randomuser.me/api?results=50");
  const { results } = await res.json();

  //Clear results
  resultsContainer.innerHTML = "";
  results.forEach((user) => {
    const li = document.createElement("li");
    li.innerHTML = `
    <img
    src="${user.picture.large}"
    alt="${user.name.first}"
  />
  <div class="user-info">
    <h4 class="name">${user.name.first} ${user.name.last}</h4>
    <p class="location">${user.location.city} ${user.location.country}</p>
  </div>`;
    listItems.push(li);
    resultsContainer.appendChild(li);
  });
}

getData();

search.addEventListener("input", function (e) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(e.target.value.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
});
