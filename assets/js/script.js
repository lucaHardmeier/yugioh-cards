async function getPokemons() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=24");
  const data = await res.json();

  const pokemons = [];
  for (const pokemon of data.results) {
    const newPokemon = await getPokemon(pokemon.url);
    pokemons.push(newPokemon);
  }
  displayPokemons(pokemons);
  // const chart = generateChart(pokemons);
  // renderChart(chart.labels, chart.arrAtks)
  // Lo mismo pero con destructuring:
  const { labels, arrAtks, arrDefs } = generateChart(pokemons);
  renderChart(labels, arrAtks, arrDefs);
}

async function getPokemon(pokeUrl) {
  const res = await fetch(pokeUrl);
  const data = await res.json();
  const { id, name, types: pokeTypes, stats } = data;
  const types = pokeTypes.map((pokeType) => pokeType.type.name);
  const img = data.sprites.other["official-artwork"].front_default;
  const attack = stats.find((item) => item.stat.name === "attack")?.base_stat;
  const defense = stats.find((item) => item.stat.name === "defense")?.base_stat;

  return { id, name, types, img, attack, defense };
}

getPokemons();

function displayPokemons(pokemons) {
  const template = document.querySelector("#pokemon-card");
  const cardContainer = document.querySelector("#cards-container");

  pokemons.forEach((pokemon) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector("img").src = pokemon.img;
    clone.querySelector(".card-title").textContent = pokemon.name;
    clone.querySelector(".poke-id").textContent = pokemon.id;
    const types = pokemon.types.join(" - ");
    clone.querySelector(".poke-types").textContent = pokemon.types;

    cardContainer.appendChild(clone);
  });
}

function generateChart(pokemons) {
  const labels = pokemons.map((pokemon) => pokemon.name);
  const arrAtks = pokemons.map((pokemon) => pokemon.attack);
  const arrDefs = pokemons.map((pokemon) => pokemon.defense);

  console.log(labels, arrAtks, arrDefs);

  return { labels, arrAtks, arrDefs };
}

function renderChart(labels, arrAtks, arrDefs) {
  const datasets = [
    {
      label: "Ataque",
      backgroundColor: "rgb(50, 99, 132)",
      data: arrAtks,
    },
    {
      label: "Defensa",
      backgroundColor: "rgb(150, 99, 132)",
      data: arrDefs,
    },
  ];

  const config = {
    type: "bar",
    data: {
      labels,
      datasets,
    },
  };

  const myChart = document.getElementById("myChart");
  new Chart(myChart, config);
}
