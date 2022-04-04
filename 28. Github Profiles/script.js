const APIURL = "https://api.github.com/users/";
// axios() and axios.get() are the same
const form = document.getElementById("form");
const input = document.querySelector("input");
const main = document.getElementById("main");
const card = document.querySelector(".card");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const user = input.value;
  if (user) {
    getUser(user);
    input.value = "";
  }
});

async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username);
    createUserCard(data);
    getRepos(username);
  } catch (err) {
    if (err.response.status === 404) {
      createErrorCard("404 No user found. Please try again!");
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios(APIURL + username + "/repos?sort=created");
    addReposToCard(data);
  } catch (err) {
    if (err.response.status === 404) {
      createErrorCard("Something went wrong fetching repos.");
    }
  }
}

function createUserCard(user) {
  const userName = user.name || user.login;
  const bio = user.bio ? user.bio : "";
  const cardHTML = `<div class="card">
    <div>
      <img
        src="${user.avatar_url}"
        alt="${userName}"
        class="avatar"
      />
    </div>
    <div class="user-info">
      <h2>${userName}</h2>
      <p>
        ${bio}
      </p>
      <ul>
        <li>${user.followers}<strong>Followers</strong></li>
        <li>${user.following} <strong>Following</strong></li>
        <li>${user.public_repos} <strong>Repos</strong></li>
      </ul>
      <div id="repos">
       
      </div>
    </div>
  </div>`;

  main.innerHTML = cardHTML;
}

function createErrorCard(message) {
  const cardHTML = `
    <div class="card">
        <h1>${message}</h1>
    </div>
    `;
  main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposEl = document.getElementById("repos");
  repos.slice(0, 10).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;
    reposEl.appendChild(repoEl);
  });
}
