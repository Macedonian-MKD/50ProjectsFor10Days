const pokeContainer = document.getElementById("poke-container");
const pokemon_count = 150;
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const resp = await fetch(url);
  const data = await resp.json();
  console.log(data);
  createPokemon(data);
};

function createPokemon(data) {
  const pokemon = document.createElement("div");
  const pokemonName =
    data.species.name[0].toUpperCase() + data.species.name.slice(1);
  const pokemonId = data.id.toString().padStart(3, 0);
  pokemon.classList.add("pokemon");
  pokemon.style.backgroundColor = colors[data.types[0].type.name];
  pokemon.innerHTML = `
  <div class="img-container">
          <img
            src="${data.sprites.front_default}"
            alt=""
          />
        </div>
        <div class="info">
          <span class="number">#${pokemonId}</span>
          <h3 class="name">${pokemonName}
        </h3>
          <small class="type">Type: <span>${data.types[0].type.name}</span></small>
        </div>`;
  pokeContainer.appendChild(pokemon);
}

fetchPokemons();
